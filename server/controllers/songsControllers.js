import supabase from "../config/supabaseClient.js"


class songsControllers {
    async getAllSongs(req, res) {
        const { data, error } = await supabase
            .from("songs")
            .select("*")

        if (error) return res.status(500).json(error)

        res.json(data)
    }

    async addNewSongs(req, res) {
        const { title, artist, lyrics, chords } = req.body

        const { data, error } = await supabase
            .from("songs")
            .insert([{ title, artist, lyrics, chords }])
            .select()

        if (error) return res.status(500).json(error)

        res.json(data)
    }
}



export default new songsControllers;