console.log("Welcome to Songplay");

// Intialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
console.log(songItems);
let songs =[
    {songName: "HINDI SONGS", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/5.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/6.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/7.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/8.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/9.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/10.mp3", coverPath: "covers/1.jpg"},


]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
const songItemContainer = document.getElementsByClassName("songItemContainer")[0];
songs.forEach((song, index) => {
    let songItem = document.createElement("div");
    songItem.classList.add("songItem");

    songItem.innerHTML = `
        <img alt="${index}" src="${song.coverPath}" />
        <span class="songName">${song.songName}</span>
        <span class="songlistplay">
            <span class="timestamp">05.34<i id="${index}" class="far songItemPlay fa-play-circle"></i></span>
        </span>
    `;
    
    songItemContainer.appendChild(songItem);
});

// audioElement.play();
// Handle play/pause click

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText =songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})