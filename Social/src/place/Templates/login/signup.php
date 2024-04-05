<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form id="signup-form" action="signup_process.php" method="POST">
            <!-- Add input fields for sign-up information -->
            <div class="input-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
            </div>
            <div class="input-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="index.php">Login</a></p>
    </div>
</body>
</html>

