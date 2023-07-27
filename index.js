// Get the modal and button elements
const contactModal = document.getElementById('contactModal');
const contactBtn = document.getElementById('contactBtn');
const closeBtn = document.querySelector('.close');

// Function to open the modal
function openModal() {
  contactModal.style.display = 'block';
  document.body.classList.add('modal-open');
}

// Function to close the modal
function closeModal() {
  contactModal.style.display = 'none';
  document.body.classList.remove('modal-open');
}

// Event listeners for button clicks
contactBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

// Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === contactModal) {
    closeModal();
  }
});
