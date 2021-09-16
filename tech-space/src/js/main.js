// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

const iframe = document.getElementById('tech-scape')
iframe.style.width = "100%"
// document.querySelector(".email-sub--tone-news .email-sub__submit-button").style.backgroundColor = "tomato"

// const button = iframe.contentDocument.querySelector("button")
const button = iframe.contentWindow.document
// console.log("hola" + button) 
