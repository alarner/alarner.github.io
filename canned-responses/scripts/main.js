TrelloPowerUp.initialize({
  'card-buttons': function(t, options){
    return [
      {
        text: 'Canned Responses',
        callback: function(t) {
          return t.popup({
            title: 'Test',
            url: '/canned-responses/templates.html',
            height: 184
          });
        }
      }
    ];
  }
});