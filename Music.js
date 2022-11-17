const music = document.querySelector('audio');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('Next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const img = document.querySelector('img');

// progress start ..
const progress = document.getElementById('progress')
let current_time = document.getElementById('current_time')
const duration = document.getElementById('duration')

// console.log(img)

const song = [
    {
        name: 'Music-1',
        title: 'Lotus Lane',
        artist: 'loyalist',
    },
    {
        name: 'Music-2',
        title: 'kolaveri Di',
        artist: 'Dhanush',
    },
    {
        name: 'Music-3',
        title: 'Dharia',
        artist: 'Monoir',
    },

];
let isPlay = 'false';

function musicPlay() {
    isPlay = 'true';
    play.classList.replace('fa-play', 'fa-pause');
    music.play();
    img.classList.add("anime")
}
function musicPause() {
    play.classList.replace('fa-pause', 'fa-play');
    music.pause();
    isPlay = 'false';
    img.classList.remove("anime")
}

play.addEventListener('click', () => {
    if (isPlay == 'false') {
        musicPlay();
    } else {
        musicPause();
    }

})

// music data 
const loadSong = (song) => {

    title.textContent = song.title;
    artist.textContent = song.artist;
    img.src = song.name + ".jpg";
    music.src = song.name + ".mp3"
}
songIndex = 0;
const nextSong = () => {
    // songIndex++;
    songIndex = (songIndex + 1) % song.length;
    loadSong(song[songIndex])
    musicPlay();
}
const prevSong = () => {
    // songIndex++;
    songIndex = (songIndex - 1 + song.length) % song.length;
    loadSong(song[songIndex])
    musicPlay();
}

// The timeupdate event is fired when the time indicated by 
// the currentTime attribute has been updated.

music.addEventListener('timeupdate', (event) => {
    const { currentTime, duration } = event.srcElement;
    let progress_time = (currentTime / duration) * 100;
    progress.style.width = `${progress_time}%`
    
    // duration updation
    let min_duration = duration / 60;
    let sec_duration = duration % 60;
    console.log(sec_duration)


});

next.addEventListener('click', nextSong)
prev.addEventListener('click', prevSong)