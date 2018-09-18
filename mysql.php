<?
$host = '';
$login = '';
$password = '';
$db = '';

$GLOBALS['sql'] = mysqli_connect($host,$login,$password,$db);
if (!$GLOBALS['sql']) {
	echo "Не удалось подключиться к MySQL: " . mysqli_connect_error();
}
mysqli_set_charset($GLOBALS['sql'], "utf8");
?>