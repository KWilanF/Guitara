import { useState } from "react";
import { addSong } from "../services/songsServices";

function AddSong() {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newSong = {
            title,
            artist,
            lyrics,
        };

        try {
            setLoading(true);

            await addSong(newSong);

            alert("Song added successfully!");

            // reset form
            setTitle("");
            setArtist("");
            setLyrics("");
        } catch (error) {
            alert("Failed to add song");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBD4] flex items-center justify-center p-6">

            <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-green-800 mb-6">
                    🎸 Add New Song
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        className="w-full p-3 border rounded-xl"
                        placeholder="Song Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input
                        className="w-full p-3 border rounded-xl"
                        placeholder="Artist"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                    />

                    <textarea
                        className="w-full p-3 border rounded-xl font-mono"
                        rows={8}
                        placeholder="Lyrics & Chords"
                        value={lyrics}
                        onChange={(e) => setLyrics(e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-800 text-white py-3 rounded-xl hover:bg-green-700 transition"
                    >
                        {loading ? "Saving..." : "Save Song"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddSong;