const PlusElement = document.querySelector("#plus");
const numberElement = document.querySelector("#number");
const minusElement = document.querySelector("#minus");

let score = 0


PlusElement.addEventListener("click", () => {
    score++
    numberElement.textContent = score;
    numberElement.style.color = "green";
})

minusElement.addEventListener("click", ()=> {
    score--
    numberElement.textContent = score;
    numberElement.style.color = "red"
})

const box = document.querySelector(".mouse");

box.addEventListener("mousemove", (event ) => {
    box.innerText = "x:" + event.offsetX + "y:" + event.offsetY;
});

const inputElement = document.querySelector("#colorInput")

inputElement.addEventListener("input", () => {
  document.body.style.backgroundColor = inputElement.value;
});