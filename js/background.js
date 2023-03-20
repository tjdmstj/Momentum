const images =["0.jpeg" , "1.jpeg" , "2.jpeg"]

const chosenImage = images[Math.floor(Math.random()*images.length)] ;

const bgImage = document.createElement("img");    // <img>를 생성
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);            // html body에 img 추가하기