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
    {songName: "HINDI SONGS", filePath: "songs/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/12.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/13.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/14.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/15.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/16.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/17.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/18.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/19.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/20.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/21.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/22.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/23.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/24.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/25.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/26.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/27.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/28.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/29.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/30.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/31.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/32.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/33.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/34.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/35.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/36.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/37.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/38.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/39.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/40.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/41.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/42.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/43.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/44.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/45.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/46.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/47.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/48.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/49.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/50.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/51.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/52.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/53.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/54.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/55.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/56.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/57.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/58.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/59.mp3", coverPath: "covers/1.jpg"},



   

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
            <span class="timestamp">55.42<i id="${index}" class="far songItemPlay fa-play-circle"></i></span>
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
    if(songIndex>=59){
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