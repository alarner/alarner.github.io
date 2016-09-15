TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
    icon: './images/icon-white.svg',
    text: 'Canned Responses',
    callback: function(t){
      console.log('canned responses clicked!');
    }}];
  }
});