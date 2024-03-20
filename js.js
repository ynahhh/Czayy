const button = document.getElementById("button");
const flowerText = document.querySelector("#box1 .flower-text");

button.addEventListener("click", () => {
    button.classList.add("invisible");
    flowerText.classList.remove("hidden");
});