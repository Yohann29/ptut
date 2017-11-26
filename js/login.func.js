window.addEventListener('load', function(){

	/**
	Créer le fond dynamique au chargement de la page login 
	**/
	
	var canvas = document.getElementById("dynamicBackground");
    var context = canvas.getContext('2d');
    var width, height;
    var circles = [];
    
    /* Paramètres modifiables */
    var settings =
	{
		/* Paramètres des cercles */
		circles : 
		{
			// Nombre de cercles affichés
			number : 20,
			// Taille minimale et maximale des cercles
			size : {min : 10, max : 100},
			// Opacité minimale et maximale des cercles
			alpha : {min : 0.5, max : 1},
			// Vitesse minimale et maximale des cercles
			speed : {min : 0.1, max : 3},
			// Position minimale et maximale des cercles
			position :
			{
				x : {min : 0, max : width},
				y : {min : 0, max : height}
			}
		},
		/* Palette de couleurs pour les cercles */
		colors :
		{
			1 :  {r:237,g:84,b:84},    2 : {r:234,g:67,b:123},   3 : {r:170,g:76,b:186},   4 : {r:126,g:91,b:191}, 
			5 :  {r:93,g:109,b:190},   6 : {r:72,g:167,b:242},   7 : {r:53,g:183,b:243},   8 : {r:52,g:198,b:216},
			9 :  {r:47,g:166,b:154},  10 : {r:105,g:186,b:109}, 11 : {r:157,g:203,b:107}, 12 : {r:212,g:223,b:97},
			13 : {r:254,g:236,b:101}, 14 : {r:254,g:201,b:62},  15 : {r:253,g:166,b:57},  16 : {r:253,g:112,b:75}
		}
	}
        
    /* Fonction pour adapter la taille du canvas à celle de la fenêtre, resize inclus */
    function update(){
    	width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
    }
    
    /* Fonction pour créer un cercle et générer ses attributs */
    function Circle(radius, speed, width, xPer, yPer, xPos, yPos, r, g, b){
    	this.radius = 100;
      	this.speed = random(settings.circles.speed);
		this.width = random(settings.circles.size);;
		this.xPer = Math.random();
		this.yPer = Math.random();
		this.xPos = xPer * width;
		this.yPos = yPer * height;
		this.opacity = random(settings.circles.alpha);
		// Génération d'une couleur au hasard
		var rand = Math.floor(Math.random() * 16) + 1;
		this.r = settings.colors[rand].r;
		this.g = settings.colors[rand].g;
		this.b = settings.colors[rand].b;
 		this.counter = 0;
 		// Sens horaire ou anti-horaire
      	var rand = Math.floor(Math.random() * 2);
 		this.sign = rand == 1 ? -1 : 1;
    }
    
    /* Fonction pour générer une valeur entre le min et le max d'un objet du dictionnaire */
    function random(obj){
		return Math.random() * (obj.max - obj.min) + obj.min;
	}
    
    /* Fonction pour générer les cercles */
    function createCircles(){
    	for (var i = 0; i < settings.circles.number ; i++) {
        	var circle = new Circle();
        	circles.push(circle);
      	}
		draw();
	}
	
	/* Fonction pour dessiner les cercles */
	function draw(){
		// Réinitialisation du fond
    	context.clearRect(0,0,width,height);
 
    	for (var i = 0; i < circles.length; i++) {
    		var circle = circles[i];
        	circle.update();
      	}
    	requestAnimationFrame(draw);
	}
	
	Circle.prototype.update = function(){
 
 		// Mise à jour de la position des cercles par rapport à leur axe de rotation
    	this.counter += this.sign * this.speed;
    	// Mise à jour de la position des cercles en cas de resize
    	this.xPos = this.xPer * width;
    	this.yPos = this.yPer * height;    	
 
		context.beginPath();
		
		/* Fonction arc pour créer l'axe de rotation du cercle */
		context.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
      				this.yPos + Math.sin(this.counter / 100) * this.radius,
       				this.width,
    				0,
        			Math.PI * 2,
    				false);
    				
      	context.closePath();
 
 		// Colorier le cercle avec la bonne couleur
      	context.fillStyle = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.opacity + ')';
      	context.fill();
      	
      	/* Ajouter une bordure au cercle
      	context.lineWidth = 5;
      	context.strokeStyle = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.opacity + ')';
      	context.stroke();
      	*/
      
    };
    
    /* Fonction pour centrer le formulaire, resize inclus */
	function move(smooth){
		var objHeight = $('#authenticationSystem').height() + 40;
		var calc = (height*0.5) - (objHeight*0.5);
		$('#authenticationSystem').animate({'top':calc},smooth);
	}
	
	/* Fonction pour afficher le formulaire de Connexion ou d'Inscription */
	$('input[name="tab"]').on('change', function(){
		var target = $(this).attr('id');
		var other = target == 'accessAccount' ? 'createAccount' : 'accessAccount';
		$('form#' + other).fadeOut(300, function(){
			$('form#' + target).fadeIn(100);
			$('form#' + target + ' #login').focus();
			move(300);
		});
	});
	
	/*  */
	$('input').on('keypress', function(){
		if($(this).hasClass('emptyField')){
			$(this).removeClass('emptyField');
			$(this).next().html('');
		}
	});	
		
	/* Lorsque le formulaire de connexion est envoyé */
	$("form#accessAccount").submit(function(){
		var login = $(this).find('#login').val();
		var password = $(this).find('#password').val();
		
		if(login == '' || password == ''){
			$('#authenticationSystem').toggleClass('incorrect');
			setTimeout(function(){
     			$('#authenticationSystem').toggleClass('incorrect');  
   			},500);
		}
		
		if(login == ''){
			$(this).find('#login').addClass('emptyField');
			$(this).find('#login').next().html("Champ vide.");
		} 
		
		if(password == ''){
			$(this).find('#password').addClass('emptyField');
			$(this).find('#password').next().html("Champ vide.");
		}
		
		if(login != '' && password != ''){
			$.ajax({
				type:'POST',
				url:'../functions/login.func.php',
				data:
				{
					'login' : login, 
					'password' : password
				},
								
				beforeSend: function(){
					$('form#accessAccount').find('.msg_status').html('Connexion en cours...');
				},	
						
				success: function(data){
					if(data == 'fail'){
						$('form#accessAccount').find('.msg_status').html('Pseudo ou mot de passe invalide !');
						$('#authenticationSystem').toggleClass('incorrect');
						setTimeout(function(){
							$('#authenticationSystem').toggleClass('incorrect');  
						},500);
						$("form#accessAccount").find('#login').addClass('emptyField');
						$("form#accessAccount").find('#password').addClass('emptyField');
					} else {
						window.location = "/profil";
					}
				}
			});
		}
		
	});
		
	/* Lorsque le formulaire d'inscription est envoyé */
	$("form#createAccount").submit(function(){
		alert('Envoi du formulaire d\'inscription');
	});
    
    update();
	createCircles();
	move(400);
    
    window.addEventListener("resize", update);
	
	$(window).resize(function(){	
		move(0);
	});
	
	
	
});