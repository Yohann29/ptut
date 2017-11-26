<canvas id='dynamicBackground'></canvas>

<div id='authenticationSystem'>
	<img id='logo' src='img/Circle.png'/>
	<div id="menu">
		<input type='radio' name='tab' id='accessAccount' checked/>
		<label for='accessAccount'>Connexion</label>
		<input type='radio' name='tab' id='createAccount'/>
		<label for='createAccount'>Inscription</label>
	</div>
	<form id='accessAccount' method='POST' onsubmit='return false'>
		<span class='msg'>Connectez-vous pour accéder à Circle.</span>
		<label for='login'>Email Étudiant</label>
		<input type='text' name='login' id='login' autocomplete='off' spellcheck='false' autofocus/>
		<span class='error_msg'></span>
		<label for='password'>Mot de passe</label>
		<input type='password' name='password' id='password' autocomplete='off' spellcheck='false'/>
		<span class='error_msg'></span>
		<span class='msg_status'></span>
		<input type='submit' name='submit' id='submit' value=''/>
	</form>
	<form id='createAccount' method='POST' onsubmit='return false'>
		<span class='msg'>Inscrivez-vous pour accéder à Circle.</span>
		<label for='login'>Email Étudiant</label>
		<input type='text' name='login' id='login' autocomplete='off' spellcheck='false'/>
		<span class='error_msg'></span>
		<span class='msg_status'></span>
		<input type='submit' name='submit' id='submit' value=''/>
	</form>
</div>
<footer>
	&copy; Circle 2017. Tous droits réservés.
	<br/>Crée par | Guyonnet Amaury | Vernet Yohann | Bourdais Jules | Wolf Guillaume | Noel Lucas
</footer>