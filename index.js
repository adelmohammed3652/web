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


  // Function to show the contact modal
  function showContactModal() {
    document.getElementById("contactModal").style.display = "block";
  }

  // Function to hide the contact modal
  function hideContactModal() {
    document.getElementById("contactModal").style.display = "none";
  }

  // Event listener for the "Contact" button in the navbar
  document.getElementById("contactBtn").addEventListener("click", function() {
    showContactModal();
  });

  // Event listener for the close button in the contact modal
  document.querySelector("#contactModal .close").addEventListener("click", function() {
    hideContactModal();
  });

  // Event listener for clicks outside the modal content to close the modal
  window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("contactModal")) {
      hideContactModal();
    }
  });
