console.log("hello");
//initialize the variables
let songindex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');

let songs = [
    { songname: "in th end", filepoint: "songs/1.mp3", coverpath: "covers/bg.jpg" },
    { songname: "Sleepless(PagalWorld.com.se).mp3", filepoint: "songs/2.mp3", coverpath: "covers/bg2.jpg" },
    { songname: "California_Love.mp3", filepoint: "songs/3.mp3", coverpath: "covers/bg.3.jpg" },
    { songname: "Stalk - Kushagra 320kbps(audiosong.in).mp3", filepoint: "songs/4.mp3", coverpath: "covers/bg.4.jpg" },
    { songname: "Thar-(PagalWorld).mp3", filepoint: "songs/5.mp3", coverpath: "covers/Bg.5.webp" },
    { songname: "hero", filepoint: "songs/2.mp3", coverpath: "covers/bg.6.jpg" },
    { songname: "Ishq", filepoint: "songs/2.mp3", coverpath: "covers/bg.7.jpg" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0], innerText = songs[i].songname;
})
//audioelement.play();
//handel play/pause
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currenttime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0
    }
})
//listen to events
audioElement.addEventListener('timeupdate', () => {

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress
})
myprogressbar.addEventListener('change', ()=> {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeAllplays = () => {
    Array.form(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classlist.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e) => {
        makeAllplays();
        e.target.classlist.remove('fa-play-circle');
        e.target.classlist.add('fa-pause-circle');
    })
})