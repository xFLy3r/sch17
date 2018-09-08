<!DOCTYPE html>

<?php include '../func.php';
if(!isset($_GET['news'])) $a=1;
else $a=$_GET['news'];?>

<html>
	<head>
		<title>8-V</title>
		<link rel='stylesheet' type='text/css' href='/style.css'>
		<link rel='shortcut icon' href='/img/favicon.ico' type='/image/x-icon'>
		<meta name='viewport' content='width=device-width'>
	</head>
	<body id='body'>
		<div id='container'>
			<div id='logo'><img src='/img/untitled1.png' height='100%'></div>
			<div id='condiv'>
				<div id='menu'>
						<a class='menu' href='index.php'><b>Новини</b></a>
						<a class='menu brl' href='rozklad.php'><b>Розклад</b></a>
						<a class='menu brl' href=''><b>Вчителі</b></a>
						<a class='menu brl' href=''><b>Учні</b></a>
				</div>
				<div id='main' class="clearfix">
					<form action='news.php' method='POST' autocomplete='off'>
						<input type="hidden" name="type" value="<?echo $a;?>">
						<div class='news'>
							<div class='nform_sel'>
								<select class="iselect">
									<?php Inews($a);?>
								</select>
							</div>
							<h1 class='news'>Заголовок: <input type='text' name='name' class='homework' required style="width: 30%;" value='<?php $e = Inews($a, 2)[0]; echo $e?>'></h1>
							<div class="date"> 
								<div class="pdate">Дата:</div>
								<div class='iform_sel'>
									<select name='day' class='iselect'>
										<?php sd('day', $a);?>
									</select>
								</div>
								<div class='iform_sel'>
									<select name='month' class="iselect">
										<?php sd('month', $a);?>
									</select>
								</div>
							</div>
							<div class='news_text'>
								<p><textarea name='text' class='txtarea' required><?php $e = Inews($a, 2)[2]; echo $e?></textarea></p>
							</div>
							<input type='submit' name='0' value='Відправити' class="submit" style="margin-top: 0;">
							<div class='break'></div>
						</div>
					<div style='height: 1px;'></div>
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
	<script type="text/javascript">
		function getValue(obj){ 
			var val = $(obj).val();
			if(val==1){
				window.location = 'http://arturyurko1.000webhostapp.com/admin/index.php';
			}
			else{
				window.location = 'http://arturyurko1.000webhostapp.com/admin/index.php?news='+val;
			}
		}
	</script>
</html>