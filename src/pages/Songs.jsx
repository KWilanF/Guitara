import { useEffect, useState } from "react";
import { getSongs } from "../services/songsServices";
import Header from "../components/common/Header";

function SongPage() {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    // selected song
    const [selectedSong, setSelectedSong] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSongs();
                setSongs(data);
            } catch (error) {
                console.error("Error fetching songs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#FDFBD4] flex flex-col items-center justify-center">
                <div className="w-14 h-14 border-4 border-green-800 border-t-transparent rounded-full animate-spin"></div>

                <p className="mt-4 text-green-800 font-semibold text-lg">
                    Loading songs...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FDFBD4] text-gray-800">
            <Header />

            {/* HEADER */}
            <div className="max-w-6xl mx-auto mb-8 flex flex-col items-center text-center p-4">
                <h1 className="text-3xl md:text-4xl font-bold text-green-800">
                Songs Library
                </h1>

                <p className="text-gray-600 mt-2">
                    Explore and play your favorite guitar songs
                </p>
            </div>

            {/* GRID */}
            <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 p-4">
                {songs.map((song) => (
                    <div
                        key={song.id}
                        onClick={() => setSelectedSong(song)}
                        className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-transparent hover:border-green-800 cursor-pointer"
                    >
                        <h3 className="text-xl font-semibold text-green-800 mb-1">
                            {song.title}
                        </h3>

                        <p className="text-gray-600 mb-4">
                            {song.artist}
                        </p>

                        <button className="text-sm bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                            View
                        </button>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedSong && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

                    <div className="bg-white w-full max-w-3xl rounded-3xl p-6 relative max-h-[90vh] overflow-y-auto">

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setSelectedSong(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        <h2 className="text-3xl font-bold text-green-800 mb-2">
                            {selectedSong.title}
                        </h2>

                        <p className="text-gray-500 mb-6">
                            {selectedSong.artist}
                        </p>

                        {/* LYRICS + CHORDS */}
                        <pre className="
                            whitespace-pre-wrap
                            font-mono
                            text-sm
                            leading-7
                            bg-[#FDFBD4]
                            p-6
                            rounded-2xl
                            overflow-x-auto
                        ">
                            {selectedSong.lyrics}
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SongPage;