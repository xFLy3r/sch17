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
					<?books();?>
					<div class='tdiv2'>
						<h3 class='tname' style="text-align: center;">
							Завантажити всі книги
						</h3>
						<h4 class='tname' style="text-align: center;">
							Книги поділені на 2 архіви
						</h4>
						<div class='to'>
							<a class='download1' href='https://filemanagersch17.000webhostapp.com/Books1.zip' style="margin: 0 8% 0 8%; display: block; height: auto; float: left;">Архів №1</a>
							<a class='download1' href='https://filemanagersch17.000webhostapp.com/Books2.zip' style="display: block; height: auto; float: left;">Архів №2</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
	<script>
		body.removeChild(document.querySelector('.cbalink'));
  		body.removeChild(document.querySelector('.cumf_bt_form_wrapper'));
  	</script>
</html>