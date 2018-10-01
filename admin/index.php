<!DOCTYPE html>

<?php include "spa.php";
if(!isset($_GET["news"])) $secondParameter="";
else $secondParameter=$_GET["news"];
if (isset($_GET[a])) $content = $_GET[a];
else $content = "index";?>

<html>
	<head>
		<title>8-V</title>
		<link rel='stylesheet' type='text/css' href='/style.css'>
		<link rel='shortcut icon' href='/img/favicon.ico' type='/image/x-icon'>
		<meta name='viewport' content='width=device-width'>
	</head>
	<body id='body'>
		<div id='container'>
			<div style="height: 100px;"></div>
			<div id='condiv'>
				<div id='menu'>
						<a class='menu' href='/admin'><b>Новини</b></a>
						<a class='menu brl' href='?a=timetable'><b>Розклад</b></a>
						<a class='menu brl' href=''><b>Вчителі</b></a>
						<a class='menu brl' href=''><b>Учні</b></a>
				</div>
				<div id='main' class='clearfix'>
					<?content($content, $secondParameter);?>
				</div>
			</div>
		</div>
	</body>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
	<script>
		body.removeChild(document.querySelector('.cbalink'));
		body.removeChild(document.querySelector('.cumf_bt_form_wrapper'));
		function blurt(obj){ 
			$(obj).parent().blur();
		}
	</script>
	<script type="text/javascript">
		function getValue(obj){ 
			var val = $(obj).val();
			if(val==1){
				window.location = 'http://sch17.pp.ua/admin/';
			}
			else{
				window.location = 'http://sch17.pp.ua/admin/?news='+val;
			}
		}
	</script>
</html>