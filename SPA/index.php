<!DOCTYPE html>
<?include 'spa.php';
if (isset($_GET[a])) $content = $_GET[a];
else $content = index;?>
<html>
	<head>
		<title>9-V</title>
		<link rel='stylesheet' type='text/css' href='style.css'>
		<link rel='shortcut icon' href='img/favicon.ico' type='image/x-icon'>
		<meta name='viewport' content='width=device-width'>
	</head>
	<body id='body'>
		<div id='container'>
			<div style='height: 100px;'></div>
			<div id='condiv'>
				<div id='menu'>
					<a class='menu' href='/SPA'><b>Новини</b></a>
					<a class='menu brl' href='?a=timetable'><b>Розклад</b></a>
					<a class='menu brl' href='?a=teachers'><b>Вчителі</b></a>
					<a class='menu brl' href='?a=books'><b>Книги</b></a>
				</div>
				<div id='main' class='clearfix'>
				<?content($content);?>
				</div>
			</div>
		</div>
	</body>
	<script>
		body.removeChild(document.querySelector('.cbalink'));
  		body.removeChild(document.querySelector('.cumf_bt_form_wrapper'));
	</script>
</html>