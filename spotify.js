console.log("welcome");
 
//initialise the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let progress = 0;
//audioElement.play();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName:"Salame-e-Ishq", filePath:"./1.mp3", coverPath:"./1.jpg"},
    {songName:"closer", filePath:"./2.mp3", coverPath:"./2.jpg"},
    {songName:"Let Me Down Slowly", filePath:"./3.mp3", coverPath:"./3.jpg"},
    {songName:"Lean On", filePath:"./4.mp3", coverPath:"./4.jpg"},
    {songName:"Believers", filePath:"./5.mp3", coverPath:"./5.jpg"},
    {songName:"Aai Nai", filePath:"./6.mp3", coverPath:"./6.jpg"},
    {songName:"Ambarsariya", filePath:"./7.mp3", coverPath:"./7.jpg"},
    {songName:"kuch bhi", filePath:"./7.mp3", coverPath:"./7.jpg"},
]
//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
console.log("pehle");

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

    

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`./${songIndex}.mp3`;
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
    
})



// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         index=parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioElement.src = `${index+1}.mp3`;
//         masterSongName.innerText=songs[index].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterplay.classList.remove('fa-play-circle');
//         masterplay.classList.add('fa-pause-circle');

//     })
// })



