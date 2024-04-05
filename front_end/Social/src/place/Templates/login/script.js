document.getElementById("loginForm").addEventListener("submit", function(event) {
	  event.preventDefault(); // Prevent default form submission
	  
	  
	  const username = document.getElementById("username").value;
	  const password = document.getElementById("password").value;


	  fetch('login.php', {
		      method: 'POST',
		      headers: {
			            'Content-Type': 'application/x-www-form-urlencoded',
			          },
		      body: 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password)
		    })
	  .then(response => response.text())
	  .then(data => {
		      alert(data); // Show response from server
		    })
	  .catch(error => {
		      console.error('Error:', error);
		    });
});

