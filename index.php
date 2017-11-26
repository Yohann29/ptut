<?php

	include 'functions/main-functions.php';

	$pages = scandir('pages/');
	if(isset($_GET['page']) && !empty($_GET['page'])){
		if(in_array($_GET['page'].'.php',$pages)){
			$page = $_GET['page'];
		} else {
			$page = 'error';
		}
	} else{
		$page = 'login';
	}
	
	if($page != 'login' &&  !isset($_SESSION['login'])){
		header("Location: /login");
	}

?>

<!DOCTYPE html>
<html lang='fr'>
	<head>
		<meta charset='utf-8'/>
		<link rel='icon' type='image/png' href='img/favicon.png'/>
		<link rel='stylesheet' href='css/style.css'/>
		<title>Circle</title>
	</head>
	<body>
	
		<?php include 'pages/'.$page.'.php'?>
	
		
	</body>
	
	<script type='text/javascript' src='js/jquery.js'></script>
	
	<?php
		$pages_functions_js = scandir('js/');
		if(in_array($page.'.func.js',$pages_functions_js)){
    	?>
    		<script type="text/javascript" src="/js/<?= $page ?>.func.js"></script>
		<?php
		}
	?>
	
</html>