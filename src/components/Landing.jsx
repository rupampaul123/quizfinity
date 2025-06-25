import { Link } from 'react-router-dom';
import GridMotion from './GridMotion ';
import ScrollReveal from './ScrollReveal';
export default function Landing(){
    const items = [
  'Item 1',
  <div key='jsx-item-1'>Sports</div>,
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1549896869-ca27eeffe4fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  <div key='jsx-item-2'>Politics</div>,
  'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  <div key='jsx-item-2'>Movies</div>,
  'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1679826780221-b14d600472d3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  <div key='jsx-item-2'>Pop Culture</div>,
  'https://images.unsplash.com/photo-1600440699677-c6f39725adf6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1679826780221-b14d600472d3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  <div key='jsx-item-2'>Polictics</div>,
  'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  <div key='jsx-item-2'>Politics</div>,
  'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  <div key='jsx-item-3'>History</div>,
  'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  <div key='jsx-item-2'>General Knowledge</div>,
  'Item 13',
  'https://images.unsplash.com/photo-1577640905050-83665af216b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  <div key='jsx-item-4'>Pop Culture</div>,
  'https://images.unsplash.com/photo-1600440699677-c6f39725adf6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  // Add more items as needed
];

    return (
        <div className="bg-[#12121a] min-h-screen text-[#f5f5f5] ">
            <div style={{marginTop:"5px"}}>
            <GridMotion items={items} />
            </div>
            <div style={{width:"70%", textAlign: "center", display: "flex", justifySelf:"center", marginTop:"200px",paddingBottom: "100px" }}>
            <ScrollReveal
                baseOpacity={1}
                enableBlur={true}
                baseRotation={9}
                blurStrength={10}
                >
                Quizfinity-"Challenge Everything and Anything!!"
            </ScrollReveal>
            </div>
                <section className="bg-[#12121a] text-white py-24 px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#E0E7FF]">
                        Take a QUIZzzz!
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        From history to pop culture, dive into dynamic quizzes and level up your brain — one question at a time.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <button className="bg-[#5B21B6] hover:bg-[#7C3AED] transition text-white font-semibold py-3 px-6 rounded-xl shadow-lg">
                       <Link to="/quiz"> Start Quiz</Link>
                        </button>
                        <button className="border border-white hover:border-[#7C3AED] text-white font-medium py-3 px-6 rounded-xl">
                        <Link to="/categories">Explore Categories</Link>
                        </button>
                    </div>
                </section>
        </div>
    )
}