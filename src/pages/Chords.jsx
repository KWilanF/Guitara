import Header from "../components/common/Header";
import {
    FaGuitar,
    FaMusic,
    FaPlayCircle,
    FaFire,
} from "react-icons/fa";


function Chords() {
    const chords = [
        "C Major",
        "G Major",
        "D Major",
        "A Minor",
        "E Minor",
        "F Major",
    ];

    return (
        <div className="min-h-screen bg-[#FDFBD4] text-gray-800">
             <Header />
          
            <div className="mb-10">
                <p className="text-red-400 font-semibold mb-2">
                    Guitar Learning
                </p>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                    Guitar Chords
                </h1>

                <p className="text-gray-600 mt-4 max-w-2xl">
                    Learn beginner-friendly guitar chords and improve your
                    playing skills with easy practice lessons and chord guides.
                </p>
            </div>

            {/* Featured Card */}
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

                <div>
                    <div className="flex items-center gap-2 text-red-400 mb-3">
                        <FaFire />
                        <span className="font-medium">Featured Lesson</span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Beginner Chord Practice
                    </h2>

                    <p className="text-gray-600 max-w-xl leading-relaxed">
                        Start learning the most commonly used guitar chords and
                        build finger strength with simple daily exercises.
                    </p>

                    <button className="mt-6 bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition">
                        <FaPlayCircle />
                        Start Learning
                    </button>
                </div>

                <div className="bg-[#FDFBD4] p-8 rounded-3xl">
                    <FaGuitar className="text-8xl text-red-400" />
                </div>
            </div>

            {/* Chord List */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <FaMusic className="text-red-400" />
                    <h2 className="text-2xl font-bold text-gray-800">
                        Popular Chords
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chords.map((chord) => (
                        <div
                            key={chord}
                            className="bg-white rounded-2xl p-6 shadow-md hover:-translate-y-1 hover:shadow-xl transition duration-300 cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {chord}
                                </h3>

                                <div className="bg-red-100 p-3 rounded-full">
                                    <FaGuitar className="text-red-400" />
                                </div>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                Practice this chord to improve finger placement,
                                transitions, and rhythm accuracy.
                            </p>

                            <button className="mt-5 text-sm font-medium text-red-400 hover:underline">
                                View Chord →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Chords;