const cover = document.querySelector('.cover');
const playBtn=document.querySelector('#playBtn');
const nextBtn=document.querySelector('#nextBtn');
const prevBtn=document.querySelector('#prevBtn');
const fillBar = document.querySelector('#fillBar');
const data = [{
      pos:0,
      name:'Muqabla',
      cover:'second.jpg',
      blur:'blur2.png',
      artist:'Yash Narvekar',
      src:'musics/second.mp3'
},
{
      pos:1,
      name:'Befikra',
      cover:'third.jpg',
      blur:'blur3.png',
      artist:'Meet Bros',
      src:'musics/third.mp3'
},
{
      pos:2,
      name:'Nagada',
      cover:'fourth.jpg',
      blur:'blur4.png',
      artist:'Shreya Ghosal',
      src:'musics/fourth.mp3'
},
{
      pos:3,
      name: 'Nagada Nagada',
      cover: 'sixth.jpg',
      blur: 'blur6.png',
      artist: 'Sonu Nigam',
      src: 'musics/sixth.mp3'
}

,
{
      pos:4,
      name:'Bolna',
      cover:'fifth.jpg',
      blur:'blur5.png',
      artist:'Arjit Singh',
      src:'musics/fifth.mp3'
      
}
,
{
      pos:5,
      name:'jaane nahi dunga kahin',
      artist:'Armaan Malik',
      blur:'blur1.png',
      cover:'first.jpg',
      src:'musics/first.mp3'
      
}
,
{
      pos:6,
      name:'Tu Hi Yaar Mera',
      cover:'seventh.jpg',
      blur:'blur7.png',
      artist:'Neha Kakkar',
      src:'musics/seventh.mp3'
},
{
      pos:7,
      name:'yaad aayenge ye pal',
      cover:'ninth.jpg',
      blur:'blur9.png',
      artist:'KK',
      src:'musics/nineth.mp3'
},
{
      pos:8,
      name:'tere jaise yaar kaha',
      cover:'eigth.jpg',
      blur:'blur8.png',
      artist:'Kishore Kumar',
      src:'musics/eigth.mp3'
},
{
      pos:9,
      name:'yeh dosti hum',
      cover:'tenth.jpg',
      blur:'blur10.png',
      artist:'Rahul jain',
      src:'musics/tenth.mp3'
}
];




const song = new Audio();
var currentSong = 0;


const playSong = (source)=>{
song.src = source;
$('#title').html(data[currentSong].name);
$('#author').html('--by '+data[currentSong].artist);
$('.cover').css('background-image','url(assets/'+data[currentSong].cover+')');
$('#blur').css('background-image','url(assets/'+data[currentSong].blur+')');
song.play();
}

function isPlayed()
{
      if(song.paused)
      {
            song.play();
            $('#play').html('pause');
      }
      else
      {
            song.pause();
            $('#play').html('play_arrow');
      }
}
playSong(data[currentSong].src);

playBtn.addEventListener('click',function()
{
isPlayed();
});

nextBtn.addEventListener('click',function()
{
      next();    
});

prevBtn.addEventListener('click',function()
{
      prev();    
});

song.addEventListener('timeupdate',function()
{
var pos = song.currentTime/song.duration;
fillBar.value=pos*100;

});

const next = ()=>
{
      currentSong++;
      if(currentSong>data.length)
      {
            currentSong=0;
      }
      playSong(data[currentSong].src);
      fillBar.value=pos*0;//for next song
      $('#play').html('pause');
      cover.style.backgroundImage='url(assets/'+data[currentSong].cover+')';
      
}

const prev = ()=>
{
      currentSong--;
      if(currentSong<0)
      {
            currentSong=data.length;
      }
      playSong(data[currentSong].src);
      $('#play').html('pause');
      cover.style.backgroundImage='url(assets/'+data[currentSong].cover+')';
      
      
}
song.onended=function()
{
      next();
}

//show songs list

const list = document.querySelector('.songs');
data.forEach((items)=>{
const html=`<p class="panel-heading">
All Tracks
</p>
<div class="panel-block">
<p class="control has-icons-left">
  <input class="input" type="text" placeholder="Search">
  <span class="icon is-left">
    <i class="fas fa-search" aria-hidden="true"></i>
  </span>
</p>
</div>
<p class="panel-tabs">
<a class="is-active">Tracks</a>
<a>Albums</a>
</p>

`;

list.innerHTML+=`<a class="panel-block" id="${items.pos}">
<span class="panel-icon">
  <i class="fas fa-play" aria-hidden="true"></i>
</span>
${items.name}
</a>`;

});

// add click events on all
list.addEventListener('click',(e)=>{
//console.log(data.indexOf(e.target.textContent));
console.log(e.target.id);
currentSong = e.target.id;

playSong(data[e.target.id].src);
cover.style.backgroundImage='url(assets/'+data[e.target.id].cover+')';
$('#title').html(data[e.target.id].name);
$('#author').html('--by '+data[e.target.id].artist);
$('#play').html('pause');
});
