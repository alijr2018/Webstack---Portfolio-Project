<?php
session_start();


if (!isset($_SESSION['username'])) {
	    header('Location: index.php');
	        exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <!-- Header content if needed -->
    </header>

    <div class="dashboard">
        <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1>
        <!-- Other dashboard content here -->
    </div>

    <footer>
        <!-- Footer content if needed -->
    </footer>
</body>
</html>

