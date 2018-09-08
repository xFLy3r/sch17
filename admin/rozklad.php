<!DOCTYPE html>
<?php include '../func.php';?>
<html>
	<head>
		<title>8-V</title>
		<link rel='stylesheet' type='text/css' href='/style.css'>
		<link rel="shortcut icon" href="/img/favicon.ico" type="/image/x-icon">
		<meta name="viewport" content="width=device-width">
	</head>
	<body id='body'>
		<div id='container'>
			<div id='logo'><img src='/img/untitled1.png' height="100%"></div>
			<div id='condiv'>
				<div id='menu'>
						<a class='menu' href='index.php'><b>Новини</b></a>
						<a class='menu brl' href='rozklad.php'><b>Розклад</b></a>
						<a class='menu brl' href=''><b>Вчителі</b></a>
						<a class='menu brl' href=''><b>Учні</b></a>
				</div>
				<div id='main' class="clearfix">
					<form action="homework.php" method="POST" autocomplete="off">
						<div id='ltable'>
							<?php timetable(1, 1);?>
						</div>
						<div id='rtable'>
							<?php timetable(2, 1);?>
							<input type='submit' name='0' class='submit' value='Відправити'>
						</div>
					</form>
				</div>
			</div>
		</div>
	</body>
	<script src="/jquery-3.3.1.min.js"></script>
	<script>
		body.removeChild(document.querySelector('.cbalink'));
		body.removeChild(document.querySelector('.cumf_bt_form_wrapper'));
		function blurt(obj){ 
			$(obj).parent().blur();
		}
	</script>
</html>