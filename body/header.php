<header>
	<img id='logo' src='img/Circle.png'/>
	<nav>
		<ul>
			<li><a href='/profil' <?php echo $page == 'profil' ? 'class="active"' : ''  ?>>Profil</a></li>
			<li><a href='/edt' <?php echo $page == 'edt' ? 'class="active"' : ''  ?>>Emploi du temps</a></li>
			<li><a href='/cercles' <?php echo $page == 'cercles' ? 'class="active"' : ''  ?>>Cercles</a></li>
			<li><a href='/notes' <?php echo $page == 'notes' ? 'class="active"' : ''  ?>>Notes</a></li>
			<li><a href='/absences' <?php echo $page == 'absences' ? 'class="active"' : ''  ?>>Absences</a></li>
			<li><a href='/messagerie' <?php echo $page == 'messagerie' ? 'class="active"' : ''  ?>>Messagerie</a></li>
		</ul>
	</nav>
	<div id='user'>
	
		<div id='pp'><img src='user/profil/<?php echo $_SESSION['id'] ?>.jpg'/></div>
		<span><?php echo ucfirst(strtolower($_SESSION['lastname']))?> <span class='colored'><?php echo $_SESSION['firstname'] ?></span></span>
		<button></button>
	</div>
</header>