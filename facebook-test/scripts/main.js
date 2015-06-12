$(document).ready(function() {
	$.ajaxSetup({cache: false});
	$.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
		FB.init({
			appId: '895741410491942',
			version: 'v2.3' // or v2.0, v2.1, v2.0
		});
		FB.getLoginStatus(function(response) {
			if(response.status === 'not_authorized' || response.status === 'unknown') {
				FB.login(function(response) {
					 if (response.authResponse) {
						 console.log('Welcome!  Fetching your information.... ');
						 FB.api('/me', function(response) {
							 console.log('Good to see you, ' + response.name + '.');
						 });
					 } else {
						 console.log('User cancelled login or did not fully authorize.');
					 }
				 }, {scope: 'user_friends'});
			}
			else {
				FB.api('/me', function(response) {
					console.log('Good to see you, ' + response.name + '.');
					console.log(response);
					$('body').append('<img src="http://graph.facebook.com/v2.3/'+response.id+'/picture?fields=picture.width(800).height(800)">');
					FB.api('/me/friends', function(friendlists) {
						console.log(friendlists);
					});
				});
			}
		});
	});
});