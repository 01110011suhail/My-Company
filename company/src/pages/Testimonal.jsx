const Testimonal = () => {
    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@briar',
            text: 'The product quality feels like it was built by an in-house FAANG team.'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@avery',
            text: 'We shipped faster in 2 weeks than we did in the last 3 months.'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordan',
            text: 'Clean engineering, excellent UX thinking, and zero friction delivery.'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Morgan Scott',
            handle: '@morgan',
            text: 'Feels like working with a senior product team, not an agency.'
        },
    ];

    const Card = ({ card }) => (
        <div className="w-80 shrink-0 mx-4 p-6 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.06] transition">

            <div className="flex items-center gap-3">
                <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={card.image}
                    alt={card.name}
                    loading="lazy"
                />

                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="text-sm text-white/90">{card.name}</p>

                        {/* verified-style dot */}
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-0.5" />
                    </div>
                    <span className="text-xs text-white/40">{card.handle}</span>
                </div>
            </div>

            <p className="text-sm text-white/60 mt-5 leading-relaxed">
                “{card.text}”
            </p>
        </div>
    );

    return (
        <>
            {/* marquee animation */}
            <style>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .marquee-inner {
                    animation: marqueeScroll 30s linear infinite;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }
            `}</style>

            <section className="py-28 bg-[#0C0414] relative overflow-hidden">

                {/* ambient SaaS glow */}
                <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/20 blur-[150px]" />
                <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[300px] bg-pink-500/10 blur-[120px]" />

                {/* header */}
                <div className="text-center mb-14 px-4">
                    <p className="text-xs tracking-[0.25em] uppercase text-white/40">
                        Trusted by teams building modern products
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-light text-white">
                        What our clients say
                    </h2>
                </div>

                {/* marquee row 1 */}
                <div className="relative overflow-hidden max-w-6xl mx-auto">
                    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0C0414] to-transparent z-10" />
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0C0414] to-transparent z-10" />

                    <div className="marquee-inner flex min-w-[200%]">
                        {[...cardsData, ...cardsData].map((card, i) => (
                            <Card key={i} card={card} />
                        ))}
                    </div>
                </div>

                {/* marquee row 2 */}
                <div className="relative overflow-hidden max-w-6xl mx-auto mt-10">
                    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0C0414] to-transparent z-10" />
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0C0414] to-transparent z-10" />

                    <div className="marquee-inner marquee-reverse flex min-w-[200%]">
                        {[...cardsData, ...cardsData].map((card, i) => (
                            <Card key={i} card={card} />
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
};

export default Testimonal;