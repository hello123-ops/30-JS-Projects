// DOM Elements
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const volumeSlider = document.getElementById('volumeSlider');
const progress = document.getElementById('progress');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');
const albumArt = document.getElementById('albumArt');
const playlistItems = document.getElementById('playlistItems');

// Audio Setup
const audio = new Audio();
let isPlaying = false;
let currentSongIndex = 0;

// Playlist data
const playlist = [
    {
        title: 'First Song',
        artist: 'Artist 1',
        src: 'song1.mp3',
        cover: 'cover1.jpg'
    },
    {
        title: 'Second Song',
        artist: 'Artist 2',
        src: 'song2.mp3',
        cover: 'cover2.jpg'
    },
    {
        title: 'Third Song',
        artist: 'Artist 3',
        src: 'song3.mp3',
        cover: 'cover3.jpg'
    }
];

// Player Controls
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        audio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    }
    isPlaying = !isPlaying;
}

function loadSong(index) {
    const song = playlist[index];
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumArt.src = song.cover;
    
    // Update playlist highlight
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) audio.play();
}

// Progress Bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    
    // Update time displays
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    
    duration.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
    currentTime.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', playNext);
progress.parentElement.addEventListener('click', setProgress);

// Volume Control
volumeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
});

// Shuffle functionality
let isShuffleOn = false;
shuffleBtn.addEventListener('click', () => {
    isShuffleOn = !isShuffleOn;
    shuffleBtn.classList.toggle('active', isShuffleOn);
});

// Repeat functionality
let isRepeatOn = false;
repeatBtn.addEventListener('click', () => {
    isRepeatOn = !isRepeatOn;
    repeatBtn.classList.toggle('active', isRepeatOn);
    audio.loop = isRepeatOn;
});

// Playlist click handling
playlistItems.addEventListener('click', (e) => {
    const item = e.target.closest('.playlist-item');
    if (!item) return;
    
    const index = Array.from(playlistItems.children).indexOf(item);
    currentSongIndex = index;
    loadSong(index);
    audio.play();
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'block';
});

// Initialize
loadSong(currentSongIndex);

// Keyboard controls
document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowRight':
            playNext();
            break;
        case 'ArrowLeft':
            playPrev();
            break;
    }
});

// Add loading states
audio.addEventListener('loadstart', () => {
    playBtn.disabled = true;
    // Add loading animation if you want
});

audio.addEventListener('canplay', () => {
    playBtn.disabled = false;
});

// Error handling
audio.addEventListener('error', (e) => {
    console.error('Error loading audio:', e);
    // You could show an error message to the user here
});
