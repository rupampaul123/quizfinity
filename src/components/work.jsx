import { useEffect, useState } from "react";

export default function Work({ cat, diff }) {
  const [data, setData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!cat || !diff) return;

    const url = `https://opentdb.com/api.php?amount=5&category=${cat}&difficulty=${diff}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setSelectedAnswers({});
        setScore(0); // reset score when new data loads
      })
      .catch((err) => console.error("Error fetching quiz data:", err));
  }, [cat, diff]);

  const handleAnswer = (questionIndex, selectedOption) => {
    const isCorrect = selectedOption === data[questionIndex].correct_answer;

    if (selectedAnswers[questionIndex]) return; // prevent multiple answers

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: selectedOption,
    }));

    if (isCorrect) setScore((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
        Score: {score} / {data.length}
      </h2>
      {data.map((q, index) => {
        const options = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);
        return (
          <div
            key={index}
            style={{
              marginBottom: "40px",
              background: "#2e2e42",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            <p style={{ color: "white", fontSize: "18px", marginBottom: "20px" }}>
              {index + 1}. {q.question}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "10px",
              }}
            >
              {options.map((option, idx) => {
                const isSelected = selectedAnswers[index] === option;
                const isCorrect = q.correct_answer === option;

                let background = "#5B21B6";
                if (isSelected) {
                  background = isCorrect ? "#22c55e" : "#ef4444"; // green or red
                }

                return (
                  <button
                    key={idx}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: background,
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: selectedAnswers[index] ? "not-allowed" : "pointer",
                      transition: "background 0.2s ease",
                    }}
                    disabled={selectedAnswers[index]}
                    onClick={() => handleAnswer(index, option)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
