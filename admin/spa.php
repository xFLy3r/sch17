<?

include "adminFunc.php";

function content ($page, $secondParameter) {
	switch ($page) {
		case "index":
			indexAdmin($secondParameter);
		break;

		case "timetable":
			timetableView();
		break;
	}
}

function indexAdmin($secondParameter) {
	$selectNews = selectNews($secondParameter);
	$selectDay = selectDay($secondParameter);
	$selectMonth = selectMonth($secondParameter);
	$textarea = textareaNews($secondParameter);

	echo "<form action='news.php' method='POST' autocomplete='off'>
		<input type='hidden' name='type' value='<?echo $nameNews;?>'>
		<div class='news'>
			<div class='nform_sel'>
				<select class='iselect'>"
					.$selectNews."
				</select>
			</div>
			<h1 class='news'>Заголовок: <input type='text' name='name' class='homework' required style='width: 30%;' value='".$secondParameter."'></h1>
			<div class='date'> 
				<div class='pdate'>Дата:</div>
				<div class='iform_sel'>
					<select name='day' class='iselect'>
						".$selectDay."
					</select>
				</div>
				<div class='iform_sel'>
					<select name='month' class='iselect'>
						".$selectMonth."
					</select>
				</div>
			</div>
			<div class='news_text'>
				<p><textarea name='text' class='txtarea' required>".$textarea."</textarea></p>
			</div>
			<input type='submit' name='0' value='Відправити' class='submit' style='margin-top: 0;'>
			<div class='break'></div>
		</div>
	<div style='height: 1px;'></div>
	</form>";
}

function timetableView() {
	echo "<form action='homework.php' method='POST' autocomplete='off'>";
	echo "<div id='ltable'>";
	for ($day = 1; $day <= 5; $day++){
		$timetable = timetable($day);
		echo "<div class='table'><table>";
		echo "<tr><td class='date' colspan='3'>".$timetable[0]."</td></tr>";
		for ($i = 1; $i <= 8; $i++) {
			if ($i == 8) $css = ['nl', 'bl', 'cl'];
			else $css = [' ', ' ', ' '];
			echo "<tr>
				<td class='".$css[0]." n'>".$i.".</td>
				<td class='".$css[1]." b'>".$timetable[$i][0]."</td>
				<td class='".$css[2]." c'><input type='text' name='".$day.$i."' class='homework' value='".$timetable[$i][1]."'></td>
			</tr>";

			if (isset($timetable[$i][3])) {
				echo "<tr>
					<td class='".$css[0]." n'></td>
					<td class='".$css[1]." b'>".$timetable[$i][2]."</td>
					<td class='".$css[2]." c'><input type='text' name='".$day.$i."' class='homework' value='".$timetable[$i][3]."'></td>
				</tr>";
			}
		}
		echo "</table></div>";
		if ($day == 3) echo "</div><div id='rtable'>";
		elseif ($day == 5) echo "<input type='submit' name='0' class='submit' value='Відправити'></div>";
	}
	echo "</form>";
}
?>