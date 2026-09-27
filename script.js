const iconContainer = document.getElementById("iconContainer");
const listContainer = document.getElementById("listContainer");

iconContainer.addEventListener("click", function () {
    listContainer.classList.toggle("active");
});