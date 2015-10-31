<?
class DBAccess
{
	protected $connection = null;
	protected $host = "localhost";
	protected $database = "social_scriptures";
	protected $user = "php";
	protected $password = "php-pass";
	
	public function connect()
	{
		try
		{
			$this->connection = new PDO("mysql:host=$host;database=$dbname", $user, $password);
			
			$this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		}
		catch (PDOException $e)
		{
			echo "DB Error, could not connect to the database\n" . 
			     "MySQL Error: " . $e->getMessage();
		}
	}
	
	public function insert($table_name, array $values)
	{
		$prepared_statement = "INSERT INTO " . $table_name;
		try
		{
			$statement = $this->connection->prepare("INSERT INTO " . $table_name . " ( first_name ) values ( 'Cathy' )");
			$statement->execute();
		}
		catch (PDOException $e)
		{
			echo "DB Error, could not insert into to the database\n" . 
			     "MySQL Error: " . $e->getMessage();
		}
	}

	public function close()
	{
		$connection = null;
	}
}

echo "We have PDO: " . class_exists(PDO) . "?<br>";
echo "We have mysql: " . function_exists(mysql_connect) . "?<br>";
echo "We have mysqli: " . class_exists(mysqli) . "?<br>";
echo "We have money: " . function_exists(monetuisxeuf) . "?<br>";
print_r(PDO::getAvailableDrivers());



/*if (!$link = mysql_connect('localhost', 'php', 'php-pass')) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('social_scriptures', $link)) {
    echo 'Could not select database';
    exit;
}*/
?>