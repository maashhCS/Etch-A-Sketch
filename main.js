'use strict';

let amount = 16;
let color = "rgb(0,0,0)";
let r = 0;
let g = 0;
let b = 0;
let sketchKey = "black";

// generates the grid 
const divContainer = document.querySelector('.container');
function createDivs(num = 16){
    if(num > 100){num = 100};
    for(let i = 0; i < num * num; i++){
    const newDiv = document.createElement('div');
    newDiv.style.setProperty('height', `${600 / num}px`);
    newDiv.style.setProperty('width', `${600 / num}px`);
    newDiv.classList.add(`square`);
    newDiv.classList.add(`div${i}`);
    divContainer.appendChild(newDiv);
    }

    const divSketch = document.querySelectorAll(".square");
    divSketch.forEach(div => {
        div.addEventListener('click', (e) => {
            if(sketchKey === "black"){
                e.target.style['background-color'] = `rgb(0,0,0)`;
            } else if(sketchKey === "rainbow"){
                rainbow();
                console.log(color);
                e.target.style['background-color'] = `${color}`;
            } else if(sketchKey === "eraser"){
                e.target.style['background-color'] = `rgb(255,255,255)`;
            }
        });
    });
};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.matches('#btn-div')){
            let divAmount = prompt('Enter how many squares per side(max 100)');
            amount = divAmount;
            divContainer.replaceChildren();
            createDivs(divAmount);
        };

        if(e.target.matches('#btn-black')){
            sketchKey = "black";
        };

        if(e.target.matches('#btn-rainbow')){
            sketchKey = "rainbow";
        };

        if(e.target.matches('#btn-eraser')){
            sketchKey = "eraser"
        };

        if(e.target.matches('#btn-clear')){
            divContainer.replaceChildren();
            createDivs(amount);
        };
    });
});

// generates a default 16x16x grid
window.addEventListener('load', () => {
    createDivs();
});

// changes the color to a random rgb color
function rainbow(){
    r = Math.floor(Math.random() * (255 - 0 + 1) + 1);
    g = Math.floor(Math.random() * (255 - 0 + 1) + 1);
    b = Math.floor(Math.random() * (255 - 0 + 1) + 1);
    color = `rgb(${r},${g},${b})`;
}