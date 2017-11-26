<?php

	function is_user($login,$password){
		
		global $db;
		
		$data = [
			'login'    => $login,
			'password' => sha1($password),
		];
		
		$sql = 'SELECT * FROM user WHERE login = :login AND password = :password';
		$req = $db->prepare($sql);
		$req->execute($data);
		$exist = $req->rowCount($sql);
		
		return $exist;
		
	}
	
	function access_user($login){
		global $db;
		
		$data = [
			'login' => $login,
		];
		
		$sql = 'SELECT id, lastname, firstname FROM user WHERE login = :login';
		$req = $db->prepare($sql);
		$req->execute($data);
				
		$ID = [];
		while($row = $req->fetchObject()){
			$ID[] = $row;
		}
		
		return $ID;
	}

	if(isset($_POST['login']) && isset($_POST['password'])){
			
		require 'db.php';
			
		$login    = htmlspecialchars(trim($_POST['login']));
		$password = htmlspecialchars(trim($_POST['password']));
					
		if(is_user($login,$password) == 1){
			$data = access_user($login);
			session_start();
			$_SESSION['id'] = $data[0]->id;
			$_SESSION['login'] = $login;
			$_SESSION['firstname'] = $data[0]->firstname;
			$_SESSION['lastname'] = $data[0]->lastname;
		} else {
			echo 'fail';
		}
	}

?>