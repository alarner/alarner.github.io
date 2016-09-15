TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: './images/noun_85822_cc.png',
      text: 'Template',
      callback: function() {}
    }];
  }
  // 'card-buttons': function(t, options){
  //   return [
  //     {
  //       text: 'Canned Responses',
  //       callback: function(t) {
  //         return t.overlay({
  //           url: './templates.html',
  //           args: { rand: (Math.random() * 100).toFixed(0) }
  //         });
  //       }
  //     }
  //   ];
  // }
});