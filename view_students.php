<?php
include 'db_connection.php';

$sql = "SELECT * FROM Students";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h2>Students</h2>";
    echo "<table>";
    echo "<tr><th>Name</th><th>Email</th><th>Phone</th></tr>";
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["name"] . "</td><td>" . $row["email"] . "</td><td>" . $row["phone"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "No students found";
}

$conn->close();
?>