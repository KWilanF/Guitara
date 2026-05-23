const API_URL = import.meta.env.VITE_API_URL;

export const getSongs = async () => {
  try {
    const response = await fetch(`${API_URL}/songs`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};

// ADD SONG FUNCTION
export const addSong = async (songData) => {
    try {
        const response = await fetch(`${API_URL}/songs`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(songData),
        });

        if (!response.ok) {
            throw new Error("Failed to add song");
        }

        return await response.json();
    } catch (error) {
        console.error("Error adding song:", error);
        throw error;
    }
};