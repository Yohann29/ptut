<?php		
	include 'body/header.php';
?>

<div id='edt'>
	<div id='controllers'>
		<div id='left'>
			<button id='prev'></button><!--
			--><button id='next'></button><!--
			--><button id='today'>Aujourd'hui</button>
		</div>
		<span><span class='colored'>Décembre,</span><span> 2017</span></span>
		<div id='right'>
			<input type='radio' name='period' id='day' checked/>
			<label for='day'>Jour</label>
			<input type='radio' name='period' id='week'/>
			<label for='week'>Semaine</label>
			<input type='radio' name='period' id='month'/>
			<label for='month'>Mois</label>
		</div>
	</div>
	<div id='schedule'>
	
	</div><!--
	--><div id='helper'>
			<div id='calendar'>
			</div>
	</div>
</div>