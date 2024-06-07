var m1 = document.querySelector('.music1');
var m2 = document.querySelector('.music2');
var m3 = document.querySelector('.music3');
var m4 = document.querySelector('.music4');
var m5 = document.querySelector('.music5');
var m6 = document.querySelector('.music6');
var m7 = document.querySelector('.music7');
var m8 = document.querySelector('.music8');
var img = document.querySelectorAll('img');
var a1 = new Audio('../audio/music1.mp3');
var a2 = new Audio('../audio/music2.mp3');
var a3 = new Audio('../audio/music3.mp3');
var a4 = new Audio('../audio/music4.mp3');
var a5 = new Audio('../audio/music5.mp3');
var a6 = new Audio('../audio/music6.mp3');
var a7 = new Audio('../audio/music7.mp3');
var a8 = new Audio('../audio/music8.mp3');
var x = 1;
m1.addEventListener('click',()=>{
    if(x==1){
    a1.play();
    img[0].src='../images/resume.jpg';
    x=0;
    }
    else{
    a1.pause();
    img[0].src='../images/start.jpg';
    x=1;
    }
})
m2.addEventListener('click',()=>{
    if(x==1){
    a2.play();
    img[1].src='../images/resume.jpg';
    x=0;
    }
    else{
    a2.pause();
    img[1].src='../images/start.jpg';
    x=1;
    }
})
m3.addEventListener('click',()=>{
    if(x==1){
    a3.play();
    img[2].src='../images/resume.jpg';
    x=0;
    }
    else{
    a3.pause();
    img[2].src='../images/start.jpg';
    x=1;
    }
})
m4.addEventListener('click',()=>{
    if(x==1){
    a4.play();
    img[3].src='../images/resume.jpg';
    x=0;
    }
    else{
    a4.pause();
    img[3].src='../images/start.jpg';
    x=1;
    }
})
m5.addEventListener('click',()=>{
    if(x==1){
    a5.play();
    img[4].src='../images/resume.jpg';
    x=0;
    }
    else{
    a5.pause();
    img[4].src='../images/start.jpg';
    x=1;
    }
})
m6.addEventListener('click',()=>{
    if(x==1){
    a6.play();
    img[5].src='../images/resume.jpg';
    x=0;
    }
    else{
    a6.pause();
    img[5].src='../images/start.jpg';
    x=1;
    }
})
m7.addEventListener('click',()=>{
    if(x==1){
    a7.play();
    img[6].src='../images/resume.jpg';
    x=0;
    }
    else{
    a7.pause();
    img[6].src='../images/start.jpg';
    x=1;
    }
})
m8.addEventListener('click',()=>{
    if(x==1){
    a8.play();
    img[7].src='../images/resume.jpg';
    x=0;
    }
    else{
    a8.pause();
    img[7].src='../images/start.jpg';
    x=1;
    }
})
