let musics=[
    {
        id:1,
        name:"Adungada Macha",
        artist:"G.V.Prakash",
        audioSrc:"audios/adangada macha.mp3",
        imageSrc:"images/adangada macha.jpg"
        
    },
    {
        id:2,
        name:"Ada Yanatha",
        artist:"A.R.Rahman",
        audioSrc:"audios/adda yanatha solvanunga.mp3",
        imageSrc:"images/adda yanatha.jpeg"
    },
    {
        id:3,
        name:"Gagnam Style",
        artist:"Yuvan Shankar Raja",
        audioSrc:"audios/Gangnam Style.mp3",
        imageSrc:"images/gangnam style.jpg"
    },
    {
        id:4,
        name:"Kannitheevu Ponna",
        artist:"Santhosh Narayanan",
        audioSrc:"audios/Kannitheevu Ponna - www.tamilmp3songs.tk.mp3",
        imageSrc:"images/kannitheevu ponna.jpg"
    }
]

for(let i=0; i<musics.length; i++)
{
    
    let tile=document.createElement("div");
    tile.classList.add("tile");
    
    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");
    
    let img=document.createElement("img");
    img.src=musics[i].imageSrc;
    
    thumbnail.append(img);
    tile.append(thumbnail);
    
    let description=document.createElement("div");
    description.classList.add("description");
    
    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);
    
    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);
    
    tile.append(description);
    
    tile.addEventListener("click",function(){
        playMusic(musics[i]);
    });
    
    document.querySelector(".music-list").append(tile);
}


function playMusic(music)
{
    document.querySelector(".player").style.marginLeft="0";
    document.querySelector(".main-thumbnail-img").src=music.imageSrc;
    document.querySelector(".song-name").innerText=music.name;
    document.querySelector(".song-artist").innerText=music.artist;
    document.querySelector(".audio").src=music.audioSrc;
    // document.querySelector(".audio").play();
}


function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    // document.querySelector(".audio").pause();
}



