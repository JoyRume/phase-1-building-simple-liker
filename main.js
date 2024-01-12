// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Defining text characters for the empty and full hearts for you to use later.

document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll('.like');

    likeButtons.forEach((button) => {
        button.addEventListener('click', async () => {
            try {
                // Toggle the class 'liked' to change the appearance of the button
                button.classList.toggle('liked');

                // Change the glyph inside the button based on its current state
                const likeGlyph = button.querySelector('.like-glyph');
                if (button.classList.contains('liked')) {
                    likeGlyph.textContent = FULL_HEART;
                } else {
                    likeGlyph.textContent = EMPTY_HEART;
                }

                // Simulate a server call using the mimicServerCall function
                await mimicServerCall();

            } catch (error) {
                // If there's an error, show the error message in a modal
                const modal = document.getElementById('modal');
                const modalMessage = document.getElementById('modal-message');
                modalMessage.textContent = error;
                modal.style.display = 'block';

                // Hide the modal after a short delay (e.g., 2 seconds)
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 2000);
            }
        });
    });
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
