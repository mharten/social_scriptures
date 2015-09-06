
<?php

if (!$link = mysql_connect('localhost', 'php', 'php-pass')) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('social_scriptures', $link)) {
    echo 'Could not select database';
    exit;
}

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$lastName = $request->lastName;
$firstName = $request->firstName;
$password = $request->password;
$username = $request->userName;

$sql= "INSERT INTO Users " .
      "(lastName, firstName, email, username, password) " .
      "VALUES ('" .$lastName. "', '" .$firstName. "', '" .$email. "', '$username', SHA1('" .$password. "'))";
$result = mysql_query($sql, $link);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

while ($row = mysql_fetch_assoc($result)) {
    echo $row['user_id'];
}

mysql_free_result($result);

?>
