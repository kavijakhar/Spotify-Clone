let songIndex=0;
let audioElement = new Audio('aaj sajeya.mp3')
let masterPlay = document.getElementById('masterplay')
let myProgressBar = document.getElementById('myProgressBar')
let mastersongname = document.getElementById('mastersongname')
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songitemPlay = Array.from(document.getElementsByClassName('songitemPlay'));

let songs = [
    { songName: "Tera-Fitoor", fliePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Oodhani", fliePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Ranrasiya", fliePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Chamak", fliePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Thodi-der", fliePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Udja kale kava", fliePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Chitaa", fliePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{

        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays()
    songIndex = parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle'); 

    audioElement.src = `./songs/${songIndex}.mp3`
      audioElement.play()
      audioElement.currentTime=0;
      masterPlay.classList.add('fa-pause-circle');
      masterPlay.classList.remove('fa-play-circle');
      
})
 
    
} )

 masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    if (progress < 99) {
        myProgressBar.value = progress;
      } else {
        myProgressBar.value = 0;
        audioElement.play();
      }
})

myProgressBar.addEventListener("change", () => {
    audioElement.currentTime =
      (myProgressBar.value * audioElement.duration) / 100;
  });
  document.getElementById("next").addEventListener("click", () => {
    if (songIndex > 7) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
  });
  document.getElementById("previous").addEventListener("click", () => {
    if (songIndex === 0) {
      songIndex = 0;
    } else {
      songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex}.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
  });