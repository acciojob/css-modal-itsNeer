//your JS code here. If required.
const modal= document.getElementById('modal');
const openModalBtn= document.getElementById('openModal');
const closeModalBtn= document.querySelector('.close-Modal');
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}