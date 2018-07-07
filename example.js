var mail = require('./index.js');

mail(
  'american-chat.ru <american-chat.ru@kselax.ru>',
  'neo@neo.ru',
  'your_subject',
  '<h1>This is body</h1>',
  function(error, info){
    if(error){
      console.log(error);
    }else{
      console.log('The email has been sent successfully');
    }
  }
);
