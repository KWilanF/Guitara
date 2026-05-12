import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import PageNotFound from "./pages/PageNotFound";
import Songs from "./pages/Songs"
import Chords from "./pages/Chords";
import AddSong from "./pages/AddSongPage";


function App() {
  return(
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
      <Route path="/songs" element={<Songs />}></Route>
      <Route path="/chords" element={<Chords />}></Route>
      <Route path="/addsong" element={<AddSong />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default App;