﻿// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'auto', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
  		},
			{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		
		{
		path: '/destinos/',
    	url: 'destinos.html',
    	name: 'destinos',
  		},
		{
		path: '/inicio/',
    	url: 'inicio.html',
    	name: 'inicio',
  		},
		
		
        {
		path: '/promociones/',
    	url: 'promociones.html',
    	name: 'promociones',
  		},
        {
		path: '/machu/',
    	url: 'machu.html',
    	name: 'machu',
  		},

                {
		path: '/amazonas/',
    	url: 'amazonas.html',
    	name: 'amazonas',
  		},
       
      
			
	]
});
// Export selectors engine
var $$ = Dom7;

// Create notification with close button
var notificationWelcome = myApp.notification.create({
  icon: '<i class="material-icons">info</i>',
  title: '¡Bienvenida!',
  subtitle: 'Aplicaciones con framework 7',
  text: 'Alejandra Lucia Ortega',
  closeButton: true,
	closeTimeout: 3000,
});
$$('.open-welcome').on('click', function () {
  notificationWelcome.open();
});
$$('.window').on('load', function () {
  notificationWelcome.open();
});








 

