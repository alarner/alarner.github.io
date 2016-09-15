TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [{
    icon: './images/icon-white.svg',
    text: 'Canned Responses',
    callback: function(t){
      return t.popup({
        title: 'Test',
        url: '/canned-responses/templates.html',
        height: 184
      });
    }}];
  }
});