import FlowingMenu from './FlowingMenu'
export default function Categories(){
    const demoItems = [
  { link: '#', text: 'Sports', image: 'https://images.unsplash.com/photo-1549896869-ca27eeffe4fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '#', text: 'Movies', image: 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '#', text: 'Politics', image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '#', text: 'History', image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '#', text: 'General Knowledge', image: 'https://images.unsplash.com/photo-1577640905050-83665af216b9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { link: '#', text: 'Pop Culture', image: 'https://plus.unsplash.com/premium_photo-1679826780221-b14d600472d3?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

    return(
        <>
        <div>
            <section className="bg-[#12121a] text-white py-24 px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#E0E7FF]">
                        CATEGORIEZzzz
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                        💥 Pick Your Poison <br></br>
                            Scroll. Tap. Boom — you're in.
                            Quizzes by vibe, mood, and pure chaos.
                    </p>
                           <div style={{ height: '600px', position: 'relative', margin:"50px" }}>
                                <FlowingMenu items={demoItems} />
                            </div>
                    <ul className="mt-12 grid gap-6 md:grid-cols-2 text-left max-w-4xl mx-auto text-[#E0E7FF] text-lg">
                        <li className="flex items-start gap-3 bg-[#1E1E2F] p-4 rounded-xl shadow-md hover:bg-[#2A2A40] transition-all duration-200">
                            <span className="text-2xl">⚽</span>
                            <span>
                            <span className="font-semibold text-white">Sports</span> – Stats, players, moments. Let's see if you’re a real fan.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 bg-[#1E1E2F] p-4 rounded-xl shadow-md hover:bg-[#2A2A40] transition-all duration-200">
                            <span className="text-2xl">📺</span>
                            <span>
                            <span className="font-semibold text-white">Movies & Shows</span> – Think you’re the main character? Prove it.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 bg-[#1E1E2F] p-4 rounded-xl shadow-md hover:bg-[#2A2A40] transition-all duration-200">
                            <span className="text-2xl">⚔️📜</span>
                            <span>
                            <span className="font-semibold text-white">History</span> – Think you’d survive the Roman Empire? Time to find out.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 bg-[#1E1E2F] p-4 rounded-xl shadow-md hover:bg-[#2A2A40] transition-all duration-200">
                            <span className="text-2xl">🏰</span>
                            <span>
                            <span className="font-semibold text-white">History</span> – Dead people and wild events.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 bg-[#1E1E2F] p-4 rounded-xl shadow-md hover:bg-[#2A2A40] transition-all duration-200">
                            <span className="text-2xl">🤓</span>
                            <span>
                            <span className="font-semibold text-white">General Knowledge</span> – The stuff that should be common sense.
                            </span>
                        </li>
                        <li className="flex items-start gap-3 bg-[#1E1E2F] p-4 rounded-xl shadow-md hover:bg-[#2A2A40] transition-all duration-200">
                            <span className="text-2xl">📱💅</span>
                            <span>
                            <span className="font-semibold text-white">Pop Culture</span> – You say you’re chronically online... now back it up.
                            </span>
                        </li>
                    </ul>

            </section>
        </div>

       </>
    )
}