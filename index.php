<?php
    require_once('mysqli.connect.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8"/>
        <title>Hao</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    </head>
    <body>
<?php
    $q="select * from blog";
    $r=mysqli_query($conn,$q);
    while($row=mysqli_fetch_row($r)) {
        echo "<h2>".$row[0]."</h2>";
        echo $row[1];
        echo "<br>";
        echo "<p>".$row[2]."</p>";
    }
?>
    </body>
</html>
