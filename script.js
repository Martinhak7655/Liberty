let prev = document.getElementById("prev");
let next = document.getElementById("next");
let slider_img = document.querySelector('.slider-img');
let images = ["b.png", "a.png"];
let i = 0;

function setImg() {
    return slider_img.setAttribute('src', 'images/'+images[i]);
}

prev.onclick = () => {
    if(i <= 0) i = images.length;
    i--;
    return setImg();
}

next.onclick = () => {
    if(i >= images.length-1) i = -1;
    i++;
    return setImg();
}

let prev2 = document.getElementById("prev2");
let next2 = document.getElementById("next2");
let slide_img = document.querySelector('.slide-img');
let collection = ["1.jpg", "2.jpg", "3.jpg"];
let j = 0;

function setImg2() {
    return slide_img.setAttribute('src', 'collection/'+collection[j]);
}

prev2.onclick = () => {
    if(j <= 0) j = collection.length;
    j--;
    return setImg2();
}

next2.onclick = () => {
    if(j >= collection.length-1) j = -1;
    j++;
    return setImg2();
}

let all = document.getElementById("all")
let music = document.getElementById("music")
let dig = document.getElementById("digital")
let block = document.getElementById("block")
let virt = document.getElementById("virtual")

let musicd = document.getElementById("music-div");
let crypto = document.getElementById("crypto-div");
let item = document.getElementById("item-div");
let virtual = document.getElementById("virtual-div");
let digital = document.getElementById("digital-div");
let blockd = document.getElementById("block-div");

all.onclick = () => {
    musicd.style.display = "block"
    musicd.style.display = "flex"
    crypto.style.display = "block"
    crypto.style.display = "flex"
    item.style.display = "block"
    item.style.display = "flex"
    virtual.style.display = "block"
    virtual.style.display = "flex"
    digital.style.display = "block"
    digital.style.display = "flex"
    blockd.style.display = "block"
    blockd.style.display = "flex"
}

music.onclick = () => {
    blockd.style.display = "block"
    blockd.style.display = "flex"
    crypto.style.display = "none"
    item.style.display = "none"
    virtual.style.display = "none"
    digital.style.display = "none"
    musicd.style.display = "flex"
}

dig.onclick = () => {
    musicd.style.display = "none"
    crypto.style.display = "none"
    virtual.style.display ="none"
    blockd.style.display ="none"
    digital.style.display = "block"
    digital.style.display = "flex"
    item.style.display = "block"
    item.style.display = "flex"

}

block.onclick = () => {
    item.style.display = "block"
    item.style.display = "flex"
    blockd.style.display = "block"
    blockd.style.display = "flex"
    musicd.style.display = "none"
    crypto.style.display = "none"
    virtual.style.display = "none"
    digital.style.display = "none"
}

virt.onclick = () => {
    virtual.style.display = "block"
    virtual.style.display = "flex"
    musicd.style.display = "none"
    digital.style.display = "none"
    crypto.style.display = "none"
    item.style.display = "none"
    blockd.style.display = "none"
}

let nav = document.getElementById("menu-js");
let nav2 = document.getElementById("menu-js2");
let menua = document.getElementById("menu-around2");

nav.onclick = () => {
    menua.style.display = "block"
    menua.style.display = "flex"
    nav.style.display = "none"
    nav2.style.display = "block"
}

nav2.onclick = () => {
    menua.style.display = 'none'
    nav2.style.display = "none"
    nav.style.display = "block"
}

