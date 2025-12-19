
const toggleText = document.getElementById("toggleText");
const toggleButton = document.getElementById("toggleButton");


toggleButton.addEventListener("click", function() {
    if (toggleText.textContent === "OFF") {
        toggleText.textContent = "ON";
    } else {
        toggleText.textContent = "OFF";
    }
});
