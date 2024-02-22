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
    {songName: "HINDI SONGS", filePath: "songs/60.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/61.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/62.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/63.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/64.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/65.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/66.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/67.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/68.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/69.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/70.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/71.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/72.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/73.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/74.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/75.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/76.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/77.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/78.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/79.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/80.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/81.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/82.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/83.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/84.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/85.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/86.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/87.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/88.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/89.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/90.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/91.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/92.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/93.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/94.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/95.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/96.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/97.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/98.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/99.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/100.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/101.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/102.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/103.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/104.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/105.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/106.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/107.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/108.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/109.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/110.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/111.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/112.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/113.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/114.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/115.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/116.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/117.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/118.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/119.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/120.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/121.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/122.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/123.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/124.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/125.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/126.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/127.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/128.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/129.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/130.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/132.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/133.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/134.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/135.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/136.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/137.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/138.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/139.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/141.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/142.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/143.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/144.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/145.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/146.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/147.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/148.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/149.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/150.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/151.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/152.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/153.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/154.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/155.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/156.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/157.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/158.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/159.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/160.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/161.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/162.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/163.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/164.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/165.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/166.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/167.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/168.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/169.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/170.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/171.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/172.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/173.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/174.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/175.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/176.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/177.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/178.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/179.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/180.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/181.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/182.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/183.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/184.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/185.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/186.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/187.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/188.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/189.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/190.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/191.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/192.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/193.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/194.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/195.mp3", coverPath: "covers/1.jpg"},
    {songName: "HINDI SONGS", filePath: "songs/196.mp3", coverPath: "covers/1.jpg"},
   



   

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
    if(songIndex>=196){
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