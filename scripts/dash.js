if(window.location.hostname !== 'online.theironyard.com') {
	alert('This bookmarklet must be run from TIYO');
}
else if(!window.location.pathname.match(/\/admin\/paths\/([0-9]+)/)) {
	alert('Please go to the path that you\'d like to summarize.');
}
else {
	console.log('You\'re on the correct page');
}
