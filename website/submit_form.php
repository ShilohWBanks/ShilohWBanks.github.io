<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Process the form data as needed (e.g., send an email, save to a database)

    // For demonstration purposes, simply print the data
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Message: $message<br>";
} else {
    // Redirect back to the form if accessed directly
    header("Location: index.html");
    exit();
}
?>