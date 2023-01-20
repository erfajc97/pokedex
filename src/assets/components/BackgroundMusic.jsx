import React from "react";
// import YouTube from "react-youtube";
// import Player from "@madzadev/audio-player";

const BackgroundMusic = () => {
 const tracks = [
   {
     url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
     title: "Madza - Chords of Life",
     tags: ["house"],
   },
   {
     url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
     title: "Madza - Late Night Drive",
     tags: ["dnb"],
   },
   {
     url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
     title: "Madza - Persistence",
     tags: ["dubstep"],
   },
 ];

  return <Player tracks={tracks} />;
  
};

export default BackgroundMusic;
