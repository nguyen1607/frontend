const heading = document.querySelector('h1');
heading.textContent = 'Testing.....';

let image = document.querySelector('img');

image.onclick = function() {
    let mysrc = image.getAttribute('src');

    if(mysrc === 'images/img1.jfif') {
        image.setAttribute('src', 'images/img2.jfif');
    }
    else {
        image.setAttribute('src', 'images/img1.jfif');
    }
}
let mybutton = document.querySelector('button');

function setUserName() {
    let myname = prompt('Please enter your name:');

    if(!myname) {
        setUserName();
    } else {
        localStorage.setItem('name', myname);
        heading.textContent = myname;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    heading.textContent = 'AGV! ' + storeName; 
}
mybutton.onclick = function() {
    setUserName();
}