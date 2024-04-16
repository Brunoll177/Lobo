var image_array = [
    "loboo.jpg",
    "lobo1.jpg",
    "lobo3.png",
    "lobo2.jpg"

]

var txtn = document.getElementById("txtn")
var img = document.createElement("img")
var button = document.getElementById("button")
button.addEventListener("click", gerar)
var rel = document.getElementById("re")

var random_index = Math.floor(Math.random() * image_array.length)
var select = image_array[random_index]
function gerar(){

    if(txtn.value == 0){
        window.alert("[ERRO] Digite seu nome!")
    }else{
var res = document.getElementById("lobo")
var fds = document.getElementById("fds")
button.style.display = "none"
txtn.style.display = "none"


img.src = select


res.appendChild(img)
fds.innerHTML = `Esse é o lobo ${txtn.value} <br>`
fds.innerHTML += "Domingo a noite tá fodido"
document.body.style.backgroundImage = 'url(lobo-no-ambiente-natural.jpg)' 
document.body.style.backgroundSize = 'cover'

var audio = document.querySelector("audio")
audio.play()
rel.style.display = 'inline-block'
}
}
rel.addEventListener("click", limpar)
function limpar(){
    window.location.reload(true);

}