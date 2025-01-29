const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');
const nextButton = document.getElementById('next-btn');
const audioPlayer = document.getElementById('audio-player');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

const songs = [
  { title: "Song 1", artist: "Artist 1", src: "song1.mp3" },
  { title: "Song 2", artist: "Artist 2", src: "song2.mp3" },
  { title: "Song 3", artist: "Artist 3", src: "song3.mp3" },
  { title: "Song 4", artist: "Artist 4", src: "song4.mp3" },
];

let currentSongIndex = 0;

playButton.addEventListener('click', () => {
  audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
  audioPlayer.pause();
});

nextButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  const nextSong = songs[currentSongIndex];
  audioPlayer.src = nextSong.src;
  songTitle.textContent = nextSong.title;
  artist.textContent = nextSong.artist;
  audioPlayer.play();
});
