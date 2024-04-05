<?php
session_start();


$valid_username = 'user';
$valid_password = 'password';


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	    $entered_username = $_POST['username'];
	        $entered_password = $_POST['password'];


	        if ($entered_username === $valid_username && $entered_password === $valid_password) {
			        $_SESSION['username'] = $entered_username;


				        header('Location: dashboard.php');
				        exit();
					    } else {

						            header('Location: index.php?error=invalid_credentials');
							            exit();
							        }
} else {

	    header('Location: index.php');
	        exit();
}
?>

