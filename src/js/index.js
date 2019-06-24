console.log(1)

import Less from './less.js'
import Active from '../images/1.jpg'
// import Index from '../css/index.css'
import Sass from '../css/less.scss'

let root = document.getElementById("root");
let Img = new Image();
Img.src = Active;
Img.classList.add("active");
root.append(Img);