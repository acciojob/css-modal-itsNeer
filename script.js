// Get the modal element
const modal = document.getElementById('modal');

// Get the button that opens the modal
const openModalBtn = document.getElementById('openModal');

// Get the <span> element that closes the modal
const closeModalBtn = document.querySelector('.close-modal');

// When the user clicks the button, open the modal
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
