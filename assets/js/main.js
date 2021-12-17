function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

function showModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
