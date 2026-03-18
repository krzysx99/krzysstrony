const App = () => {
  const menuItems = [
    {
      title: 'AI NARZĘDZIA',
      description: 'Przyszłość technologii w Twoich rękach',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      link: 'ai.html',
      glow: 'rgba(139, 92, 246, 0.5)'
    },
    {
      title: 'EDYCJA MULTIMEDIA',
      description: 'Twórz jak profesjonalista!',
      icon: '🎬',
      color: 'from-red-500 to-orange-500',
      link: 'edycja.html',
      glow: 'rgba(239, 68, 68, 0.5)'
    },
    {
      title: 'FREE ZASOBY',
      description: 'Wszystko za darmo!',
      icon: '💎',
      color: 'from-blue-500 to-cyan-500',
      link: 'free.html',
      glow: 'rgba(59, 130, 246, 0.5)'
    },
    {
      title: 'OGLĄDANIE',
      description: 'Rozrywka na najwyższym poziomie!',
      icon: '🎮',
      color: 'from-yellow-500 to-amber-500',
      link: 'ogladanie.html',
      glow: 'rgba(234, 179, 8, 0.5)'
    },
    {
      title: 'NARZĘDZIA OGÓLNE',
      description: 'Niezbędne narzędzia codziennego użytku',
      icon: '🛠️',
      color: 'from-green-500 to-emerald-500',
      link: 'ogolne.html',
      glow: 'rgba(16, 185, 129, 0.5)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white overflow-hidden relative">
      {/* Animowane tło */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-[100px] opacity-30 animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-[90px] opacity-25 animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Siatka w tle */}
      <div 
        className="fixed inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Główna zawartość */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Nagłówek */}
        <header className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-white/10 to-white/5 rounded-[30px] backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl" style={{boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)'}}>
            <span className="text-7xl">🚀</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent" style={{textShadow: '0 0 60px rgba(255,255,255,0.3)'}}>
            NEXUS MENU
          </h1>
          <p className="text-xl text-gray-400 font-light tracking-wider">
            CENTRUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-semibold">NAJCZĘŚCIEJ UŻYWANYCH</span> NARZĘDZI
          </p>
        </header>

        {/* Menu kart */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-8 hover:scale-105 hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              style={{
                boxShadow: `0 25px 50px rgba(0,0,0,0.3), 0 0 0px ${item.glow}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 35px 60px rgba(0,0,0,0.4), 0 0 40px ${item.glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 25px 50px rgba(0,0,0,0.3), 0 0 0px ${item.glow}`;
              }}
            >
              {/* Górny gradient */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`} />
              
              {/* Kółko po najechaniu */}
              <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{background: `radial-gradient(circle, ${item.glow} 0%, transparent 70%)`}} />

              {/* Ikona */}
              <div className="text-7xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {item.icon}
              </div>

              {/* Tytuł */}
              <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                {item.title}
              </h2>

              {/* Opis */}
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                {item.description}
              </p>

              {/* Przycisk */}
              <div className="flex items-center justify-between">
                <span className={`px-6 py-3 rounded-xl bg-gradient-to-r ${item.color} text-white font-semibold opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                  Przejdź
                </span>
                <span className="text-3xl text-gray-500 group-hover:text-white group-hover:translate-x-3 transition-all duration-300">
                  ➜
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Stopka */}
        <footer className="text-center mt-20 pb-12">
          <div className="inline-block px-12 py-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
            <p className="text-gray-400 text-lg mb-2">
              Stworzone z <span className="text-red-500 text-2xl animate-pulse">❤</span> przy użyciu nowoczesnych technologii
            </p>
            <p className="text-gray-500 text-sm">
              ⚡ Wersja 2.0 | Ultra Nowoczesny Design | React + Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
