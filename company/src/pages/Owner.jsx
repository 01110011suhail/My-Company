import React from "react";

const App = () => {
    const [visible, setVisible] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

    const divRef = React.useRef(null);

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect();

        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        setPosition({ x, y });

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setTilt({ x: rotateX, y: rotateY });
    };

    const handleLeave = () => {
        setVisible(false);
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center ">

            {/* 🔥 CENTER PANEL (70% width, 80% height) */}
            <div className="w-[70%] h-[80%] flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]">

                {/* CARD */}
                <div
                    ref={divRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setVisible(true)}
                    onMouseLeave={handleLeave}
                    style={{
                        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                        transition: "transform 0.15s ease-out",
                    }}
                    className="relative w-96 h-96 rounded-2xl p-px bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl overflow-hidden cursor-pointer"
                >

                    {/* glow */}
                    <div
                        className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-400 size-60 absolute z-0 transition-opacity duration-500 ${
                            visible ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            top: position.y - 120,
                            left: position.x - 120,
                        }}
                    />

                    {/* CONTENT */}
                    <div className="relative z-10 bg-gray-900/70 backdrop-blur-xl p-6 h-full w-full rounded-[14px] flex flex-col items-center justify-center text-center border border-white/10">

                        <img
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                            className="w-24 h-24 rounded-full shadow-lg my-4"
                            alt="Profile"
                        />

                        <h2 className="text-2xl font-bold text-white mb-1">
                            Richard Nelson
                        </h2>

                        <p className="text-sm text-indigo-400 font-medium mb-4">
                            Software Developer
                        </p>

                        <p className="text-sm text-slate-400 mb-4 px-4">
                            Passionate about clean code, scalable systems, and building
                            high-performance digital experiences.
                        </p>

                        <div className="flex space-x-4 text-slate-400">

                            <a href="#" className="hover:-translate-y-1 transition">
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                                </svg>
                            </a>

                            <a href="#" className="hover:-translate-y-1 transition">
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4 4h16v16H4z"/>
                                </svg>
                            </a>

                            <a href="#" className="hover:-translate-y-1 transition">
                                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0L24 24H0z"/>
                                </svg>
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default App;