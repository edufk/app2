// JavaScript Document

var app = {
	pictureSource: null,
	destinationType: null,
	
    // Application Constructor
    initialize: function() {
        this.bindEvents();
		$.mobile.allowCrossDomainPages = true;
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		app.goToPage(1);
		$("#main-menu a").click(function(e) {
            e.preventDefault();
			app.goToPage($(this).attr("data-pageId"));
        });
		app.pictureSource = navigator.camera.PictureSourceType;
		app.destinationType = navigator.camera.DestinationType;
    },
	
	goToPage: function(pageId){
		$("#main-container").load("page" + pageId + ".html");
	},
	
	displayThumbnail: function(imageData){
		var thumbnail = document.getElementById('thumbnail');
		thumbnail.src = "data:image/jpeg;base64," + imageData;
	},
	capturePhoto: function() {
		navigator.camera.getPicture(displayThumbnail, onFail, { quality: 50 });
	},
	onFail: function(message) {
		alert('Failed because: ' + message);
	}
};