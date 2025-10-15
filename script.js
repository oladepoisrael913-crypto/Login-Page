const form = document.getElementById('loginForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // stops the form from reloading the page

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (email === '' || password === '') {
    alert('Please fill in both fields!');
    return;
  }

  alert('Login successful! 🎉');

  // Later, you can send them to another page:
  // window.location.href = 'dashboard.html';
});
