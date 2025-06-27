import * as React from 'react';
import RotatingText from './RotatingText'
import SelectVariants from './dropdown'
import Work from './work';

export default function Quiz() {
  const [cat, setcat] = React.useState('');
  const [diff, setdiff] = React.useState('');

  const handleCategoryChange = (event) => {
    setcat(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setdiff(event.target.value);
  };

  return (
    <div style={{ width: "100%", backgroundColor: "#1e1e2f", paddingBottom: "100px" }}>
      <div style={{
        width: "100%",
        padding: "50px 0 20px 0",
        backgroundColor: "#1e1e2f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <span className='text-4xl sm:text-5xl md:text-6xl font-bold text-white' style={{ width: "50%", textAlign: "right" }}>
          Select Your
        </span>
        <RotatingText
          texts={['Category', 'Difficulty', 'Quizzz!']}
          mainClassName="text-left w-1/2 px-12 sm:px-2 md:px-3 bg-[#1e1e2f] text-[#5B21B6] overflow-hidden py-0 rounded-lg text-4xl sm:text-5xl md:text-6xl font-bold"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      <div style={{ width: "100%", padding: "0 20px" }}>
        <SelectVariants
          cat={cat}
          diff={diff}
          handleCategoryChange={handleCategoryChange}
          handleDifficultyChange={handleDifficultyChange}
        />
        <Work cat={cat} diff={diff} />
      </div>
    </div>
  );
}