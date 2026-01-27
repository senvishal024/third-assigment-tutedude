let headerText = document.querySelector('.header-text');
let redBox =document.querySelector('#btn1');
let blueBox = document.querySelector('#btn2');
let greenBox =document.querySelector('#btn3');
let yellowBox =document.querySelector('#btn4');

let inputText =document.querySelector('#form-text');
let greetBtn =document.querySelector('#greet-btn');

redBox.addEventListener('click',()=>{

    redBox.classList.toggle('active');
});
blueBox.addEventListener('click',()=>{

    blueBox.classList.toggle('active');
});
greenBox.addEventListener('click',()=>{

    greenBox.classList.toggle('active');
});
yellowBox.addEventListener('click',()=>{

    yellowBox.classList.toggle('active');
});
greetBtn.addEventListener('click', ()=>{
    headerText.textContent =","+inputText.value;
});
   
