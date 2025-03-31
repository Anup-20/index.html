<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    
    // Prepare the email
    $to = "info.krishisarathi@gmail.com";
    $subject = "New Package Registration";
    $message = "Name: $name\nPhone: $phone\nEmail: $email\n";
    $headers = "From: no-reply@krishi-sarathi.com";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Registration successful. We will contact you soon.";
    } else {
        echo "Registration failed. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
