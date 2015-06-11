$(document).ready(function() {
	$.ajaxSetup({cache: false});
	$.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
		FB.init({
			appId: '895741410491942',
			version: 'v2.3' // or v2.0, v2.1, v2.0
		});     
		// $('#loginbutton,#feedbutton').removeAttr('disabled');
		FB.getLoginStatus(function(status) {
			console.log(status);
		});
	});
});