<?php
$serverName = "localhost";
$username = "root";
$dbpass = "iwaly";
$dbname = "myBlog";

$conn = mysqli_connect($serverName, $username, $dbpass,$dbname);
mysqli_set_charset($conn,"utf8");
if(!$conn) {
    die("Connection failed: " . mysqli_connect_error() );
}
?>
