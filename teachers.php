<!DOCTYPE html>
<?include 'func.php';?>
<html>
	<head>
		<title>9-V</title>
		<link rel='stylesheet' type='text/css' href='style.css'>
		<link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
		<meta name="viewport" content="width=device-width">
	</head>
	<body id='body'>
		<div style="height: 100px;"></div>
		<div id='container'>
			<div id='condiv'>
				<div id='menu'>
						<a class='menu' href='index.php'><b>Новини</b></a>
						<a class='menu brl' href='rozklad.php'><b>Розклад</b></a>
						<a class='menu brl' href='teachers.php'><b>Вчителі</b></a>
						<a class='menu brl' href='books.php'><b>Книги</b></a>
				</div>
				<div id='main' class="clearfix">
					<?teachs();?>
				</div>
			</div>
		</div>
	</body>
	<script>
		body.removeChild(document.querySelector('.cbalink'));
		body.removeChild(document.querySelector('.cumf_bt_form_wrapper'));
	</script>
</html>