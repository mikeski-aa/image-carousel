import "./style.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.png";

// toggle nav button actions

let btn = document.querySelector(".navButton");
let navBar = document.querySelector(".navItems");
btn.addEventListener("click", () => {
  navBar.classList.toggle("show");
  navBar.classList.toggle("hide");
  console.log("working");
});

// testing

// function to only call query selection once
function whatever(i){
  image1 = document.querySelector(`.image${i}`);
  circle = document.querySelector(`.pic${i}`);
  return image1, circle;
}

// allowing us to use imported images in an array
let myImage = new Image();
const imgArr = [img1, img2, img3, img4, img5];
myImage.src = imgArr[0];
    
let image1;
let circle;

let fwd = document.querySelector(".fwd");
let bck = document.querySelector(".bck");
let carButtons = document.querySelector('.carouselButtons');

let i = 0;

whatever(i);
image1.appendChild(myImage);
image1.classList.toggle('test');
circle.classList.toggle('filled');

window.onload = () => {
  setInterval(changeImage, 2500);
};

function changeImage() {
  if ((i == 4)) {
    image1.classList.toggle('test');
    circle.classList.toggle('filled');
    i = 0;
    
    whatever(i);
    image1.classList.toggle('test');
    circle.classList.toggle('filled');
    myImage.src = imgArr[i];
    image1.appendChild(myImage);

  } else {
    image1.classList.toggle('test');
    circle.classList.toggle('filled');
    i++;
    whatever(i);
    myImage.src = imgArr[i];
    image1.classList.toggle('test');
    circle.classList.toggle('filled');
    image1.appendChild(myImage);
   
   
    return i;
  }
}

fwd.onclick = () => {
  if ((i == 4)) {
    image1.classList.toggle('test');
    circle.classList.toggle('filled');
    i = 0;
    
    whatever(i);
    image1.classList.toggle('test');
    circle.classList.toggle('filled');
    myImage.src = imgArr[i];
    image1.appendChild(myImage);

  } else {
    image1.classList.toggle('test');
    circle.classList.toggle('filled');
    i++;
    whatever(i);
    myImage.src = imgArr[i];
    image1.classList.toggle('test');
    circle.classList.toggle('filled');
    image1.appendChild(myImage);
   
   
    return i;
  }
};

bck.onclick = () => {
    if ((i == 0)) {
      image1.classList.toggle('test');
      circle.classList.toggle('filled');
      i = 4;
      whatever(i);
      image1.classList.toggle('test');
      circle.classList.toggle('filled');
      myImage.src = imgArr[i];
      image1.appendChild(myImage);
    } else {
      image1.classList.toggle('test');
      circle.classList.toggle('filled');
        i--;
        whatever(i);
        image1.classList.toggle('test');
        circle.classList.toggle('filled');
      myImage.src = imgArr[i];
      image1.appendChild(myImage);
      
      return i;
    }
  };

  carButtons.addEventListener('click', (e) => {
    let temp = e.target.classList[0].split('c')[1];
    console.log(temp);

    if (e.target.classList[1] === 'filled') {
      alert('already filled');
      return;
    } else {

      for (let x = 0; x < 5; x++) {
        whatever(x);
        image1.classList.remove('test');
      circle.classList.remove('filled');
      }

      whatever(temp);
      image1.classList.toggle('test');
      circle.classList.toggle('filled');
      myImage.src = imgArr[temp];
      image1.appendChild(myImage);
  
      i = temp;
      console.log(i);
      return i;
    } 
  })

 


