document.querySelector('.php-email-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop the form from actually submitting for demo

  const loading = document.querySelector('.loading');
  const sent = document.querySelector('.sent-message');
  const error = document.querySelector('.error-message');

  // Reset messages
  loading.style.display = 'block';
  sent.style.display = 'none';
  error.style.display = 'none';

  // Simulate form submission (e.g. contacting server)
  setTimeout(function() {
    loading.style.display = 'none';

    // Example: Randomly decide if success or error
    if (Math.random() > 0.2) {
      sent.style.display = 'block';
    } else {
      error.textContent = 'Something went wrong. Please try again!';
      error.style.display = 'block';
    }
  }, 2000); // Simulate 2 seconds loading
});

