<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	    $servername = "localhost";
	        $username = "your_username";
	        $password = "your_password";
		    $dbname = "YourDatabaseName";


		    $conn = new mysqli($servername, $username, $password, $dbname);


		        if ($conn->connect_error) {
				        die("Connection failed: " . $conn->connect_error);
					    }


		        $new_username = $_POST['username'] ?? '';
		        $new_password = $_POST['password'] ?? '';


			    $hashed_password = password_hash($new_password, PASSWORD_DEFAULT);


			    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
			        $stmt->bind_param("ss", $new_username, $hashed_password);
			        $stmt->execute();

				    echo "New record inserted successfully";

				    $stmt->close();
				        $conn->close();
}
?>

