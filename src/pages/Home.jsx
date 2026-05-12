import Header from "../components/common/Header";

function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBD4] text-gray-800">
      <Header />

      {/* HERO SECTION (LIGHT, NOT GREEN) */}
      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 py-14 sm:py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-800">
          Learn Guitar the Smart Way 🎸
        </h1>

        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Practice chords, explore songs, and track your progress — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="w-full sm:w-auto bg-green-800 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="w-full sm:w-auto bg-[#FDFBD4] text-green-800 border border-green-800 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore Songs
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-green-800">🎵 Song Library</h2>
          <p>
            Browse songs with perfectly aligned chords and lyrics for easy playing.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-green-800">🔥 Practice Mode</h2>
          <p>
            Improve faster with guided practice sessions and repetition tools.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2 text-green-800">❤️ Favorites</h2>
          <p>
            Save songs you love and access them instantly anytime.
          </p>
        </div>
      </section>

      {/* CTA (THIS is where green comes back strong) */}
      <section className="bg-green-800 text-white text-center py-12 sm:py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Guitar Journey Today
        </h2>

        <p className="mb-6">
          Play your favorite songs anytime, anywhere.
        </p>

        <button className="bg-[#FDFBD4] text-green-800 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Start Now
        </button>
      </section>


      <footer className="text-center py-6 text-xs sm:text-sm text-gray-500 px-4">
        © 2026 Guitara. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;