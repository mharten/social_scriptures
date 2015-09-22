<?
class DBAccess
{
	protected $connection;
	
	public function connect()
	{
		$this->connection = mysql_connect('localhost', 'php', 'php-pass');
	}
	
}

echo "We have PDO: " . class_exists(PDO) . "?";
echo "We have mysql: " . function_exists(mysql_connect) . "?";
echo "We have mysqli: " . class_exists(mysqli) . "?";



/*if (!$link = mysql_connect('localhost', 'php', 'php-pass')) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('social_scriptures', $link)) {
    echo 'Could not select database';
    exit;
}*/
?>