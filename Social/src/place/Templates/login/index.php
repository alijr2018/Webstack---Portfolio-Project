<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="login-container">
        <form id="login-form" action="login.php" method="POST">
            <h2>Login</h2>
            <?php

            if (isset($_GET['error']) && $_GET['error'] === 'invalid_credentials') {
		                    echo '<p style="color: red;">Invalid username or password.</p>';
				                }
	                ?>
            <div class="input-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="signup.php">Sign Up</a></p>
    </div>
</body>
</html>

