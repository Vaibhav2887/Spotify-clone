//var songName = ["Excuse", "Hustlin", " Brown Munde", "  Spaceship ", " Tere Te  ", "  Dil Nu ", " Level", "Old Skool", "Fuck em All", "The Last Ride", "These Days", "295"];

// var artistnames = ["AP Dhillon ", "AP Dhillon  ", "AP Dhillon ", " AP Dhillon ", "AP Dhillon", " AP Dhillon ", "Sidhu Moose Wala ", "Sidhu Moose Wala ", "Sidhu Moose Wala", " Sidhu Moose Wala ", "Sidhu Moose Wala", " Sidhu Moose Wala"];
const music = new Audio("audio/1.mp3");
//   music.play();
// variables 
var myprogresbar = document.getElementById("seeka");
var songindex = 1;
let masterplay = $('#masterPlay');
let poster_master_play = document.getElementById('poster_master_play');
let back = $('#back');
let next = $('#next');


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }



let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('artatak')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 170;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 170;
})



const date = new Date().getHours();
console.log(date);
if (date>=5 && date<12) {
    $(".good").html("Good Morning");
}
else if (date>=12 && date<20) {
    
    $(".good").html("Good Evening");
} 
else 
{
    $(".good").html("Good Night");
    
}

var myNav = document.getElementById('mynav');
window.onscroll = function () {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
    else {
        myNav.classList.remove("nav-colored");
        myNav.classList.add("nav-transparent");
    }
};

let songs = [
    {
        songName: "Excuse",
        artisname: "AP Dhillon",
        filePath: "audio/1.mp3",
        coverPath: "cover/5.jfif"
    },
    {
        songName: "Hstlin",
        artisname: "AP Dhillon",
        filePath: "audio/2.mp3",
        coverPath: "cover/6.jfif"
    },
    {
        songName: "Brown Munde",
        artisname: "AP Dhillon",
        filePath: "audio/3.mp3",
        coverPath: "cover/4.jfif"
    },
    {
        songName: "SpaceShip",
        artisname: "AP Dhillon",
        filePath: "audio/4.mp3",
        coverPath: "cover/7.jfif"
    },
    {
        songName: "Tere Te",
        artisname: "AP Dhillon",
        filePath: "audio/5.mp3",
        coverPath: "cover/7.jfif"
    },
    {
        songName: "Dil Nu",
        artisname: "AP Dhillon",
        filePath: "audio/6.mp3",
        coverPath: "cover/8.jfif"
    },
    {
        songName: "Level",
        artisname: "Sidhu Moose Wala",
        filePath: "audio/7.mp3",
        coverPath: "cover/10.jfif"
    },
    {
        songName: "Old Skool",
        artisname: "Sidhu Moose Wala",
        filePath: "audio/8.mp3",
        coverPath: "cover/13.jfif"
    },
    {
        songName: "Fuck em All",
        artisname: "Sidhu Moose Wala",
        filePath: "audio/9.mp3",
        coverPath: "cover/11.jfif"
    },
    {
        songName: "The Last Ride",
        artisname: "Sidhu Moose Wala",
        filePath: "audio/10.mp3",
        coverPath: "cover/12.jfif"
    },
    {
        songName: "These Days",
        artisname: "Sidhu Moose Wala",
        filePath: "audio/11.mp3",
        coverPath: "cover/9.jfif"
    },
    {
        songName: "295",
        artisname: "Sidhu Moose Wala",
        filePath: "audio/12.mp3",
        coverPath: "cover/9.jfif"
    },
    {
        songName: "Brown Rang",
        artisname: "Honey Singh",
        filePath: "audio/11.mp3",
        coverPath: "cover/14.jfif"
    },
    {
        songName: "Dope Shope",
        artisname: "Honey Singh",
        filePath: "audio/11.mp3",
        coverPath: "cover/14.jfif"
    },
    {
        songName: "Jann Mangdi",
        artisname: "Honey Singh",
        filePath: "audio/11.mp3",
        coverPath: "cover/15.jfif"
    },
    {
        songName: "Blue Eyes",
        artisname: "Honey Singh",
        filePath: "audio/11.mp3",
        coverPath: "cover/15.jfif"
    },
    {
        songName: "Yaar Bathere",
        artisname: "Honey Singh",
        filePath: "audio/11.mp3",
        coverPath: "cover/14.jfif"
    },
    {
        songName: "Haye Mera Dil",
        artisname: "Honey Singh",
        filePath: "audio/11.mp3",
        coverPath: "cover/14.jfif"
    },

]


Array.from(document.getElementsByClassName('oonn')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    element.getElementsByTagName('p')[0].innerHTML = songs[i].artisname;
})
$('#Ap').click(function () {
    music.src = `audio/1.mp3`;
    music.play();
    masterplay.removeClass("bi-play-fill");
    masterplay.addClass("bi-pause-fill");
    songindex = 1;
    var a = songs[songindex - 1].songName;
    // console.log(a);
    $(".mae").html(a);
    var b = songs[songindex - 1].artisname;
    // console.log(b);
    $(".subti").html(b);
    var c = songs[songindex - 1].coverPath;
    console.log(c);
    poster_master_play.src = c;
    // songindex++;
    
})
$('#Sidhu').click(function () {
    // console.log("hii");
    music.src = `audio/7.mp3`;
    music.play();
    masterplay.removeClass("bi-play-fill");
    masterplay.addClass("bi-pause-fill");
    songindex = 7;
    var a = songs[songindex - 1].songName;
    // console.log(a);
    $(".mae").html(a);
    var b = songs[songindex - 1].artisname;
    // console.log(b);
    $(".subti").html(b);
    var c = songs[songindex - 1].coverPath;
    console.log(c);
    poster_master_play.src = c;
    // songindex++;
    
})
$('#Honey').click(function () {
    music.src = `audio/13.mp3`;
    music.play();
    masterplay.removeClass("bi-play-fill");
    masterplay.addClass("bi-pause-fill");
    songindex = 13;
    var a = songs[songindex - 1].songName;
    // console.log(a);
    $(".mae").html(a);
    var b = songs[songindex - 1].artisname;
    // console.log(b);
    $(".subti").html(b);
    var c = songs[songindex - 1].coverPath;
    console.log(c);
    poster_master_play.src = c;
    // songindex++;

})


masterplay.click(function () {
    if (music.paused) {
        music.play();
        masterplay.removeClass("bi-play-fill");
        masterplay.addClass("bi-pause-fill");
        songindex++;
    }
    else {
        music.pause();
        masterplay.addClass("bi-play-fill");
        masterplay.removeClass("bi-pause-fill");
    }

})

next.click(function () {
    if (songindex >= 18) {
        songindex = 1;
    }
    else {

        songindex++;
    }
    music.src = `audio/${songindex}.mp3`;
    music.play();
    masterplay.removeClass("bi-play-fill");
    masterplay.addClass("bi-pause-fill");
    var a = songs[songindex - 1].songName;
    // console.log(a);
    $(".mae").html(a);
    var b = songs[songindex - 1].artisname;
    // console.log(b);
    $(".subti").html(b);
    var c = songs[songindex - 1].coverPath;
    poster_master_play.src = c;


})
back.click(function () {
    if (songindex <= 1) {
        songindex = 1;
    }
    else {

        songindex--;
    }
    music.src = `audio/${songindex}.mp3`;
    music.play();
    masterplay.removeClass("bi-play-fill");
    masterplay.addClass("bi-pause-fill");
    var a = songs[songindex - 1].songName;
    // console.log(a);
    $(".mae").html(a);
    var b = songs[songindex - 1].artisname;
    // console.log(b);
    $(".subti").html(b);
    var c = songs[songindex - 1].coverPath;
    poster_master_play.src = c;

})

$('#repate').click(function () {
    if (music.loop==false) {
        $("#repate").css("color", "blue");
        music.loop=true;
    }
    else{
         $("#repate").css("color", "white");
         music.loop=false;
     }
})

$('.play_but').click(function (k) {
    songindex = k.target.id;
    console.log(songindex);

        music.src = `audio/${songindex}.mp3`;

        if (music.paused) {

            music.play();
            masterplay.removeClass("bi-play-fill");
            masterplay.addClass("bi-pause-fill");
            var a = songs[songindex - 1].songName;
            // console.log(a);
            $(".mae").html(a);
            var b = songs[songindex - 1].artisname;
            // console.log(b);
            $(".subti").html(b);
            var c = songs[songindex - 1].coverPath;
            // console.log(c);
            poster_master_play.src = c;
            // songindex++;
        }

    }
    )
    music.addEventListener("ended", function() 
    {
        
        
        songindex++;
        if (songindex>18) {
            songindex=1;
        }


        music.src = `audio/${songindex}.mp3`;
        if (music.paused) {

            music.play();
            masterplay.removeClass("bi-play-fill");
            masterplay.addClass("bi-pause-fill");
            var a = songs[songindex - 1].songName;
            // console.log(a);
            $(".mae").html(a);
            var b = songs[songindex - 1].artisname;
            // console.log(b);
            $(".subti").html(b);
            var c = songs[songindex - 1].coverPath;
            // console.log(c);
            poster_master_play.src = c;
        }
         
    });
music.addEventListener('timeupdate', () => {
    let aaa = music.currentTime;
    let bbb = music.duration;
    let min1 = Math.floor(bbb / 60);
    let sec1 = Math.floor(bbb % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    $('#currentEnd').text(`${min1}:${sec1}`);
    let min2 = Math.floor(aaa / 60);
    let sec2 = Math.floor(aaa % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    $('#currentStart').text(`${min2}:${sec2}`);
    var progress = Math.floor((100 / music.duration) * music.currentTime);
    myprogresbar.value = progress;
})
myprogresbar.addEventListener('change', () => {
    music.currentTime = myprogresbar.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');


vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    music.volume = vol_a / 100;
})