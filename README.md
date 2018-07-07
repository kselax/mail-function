mail-function
===============

A [mail-function][] is a mail function that works almost like php function mail. You have to call only one function for sending emails and nothing else :).

**Worning: for the emails have been sent successfully you have to install and customize on your server MTA (mail transfer agent)**

The authors is Neo that is very well known in runet as Hacker Kselax Here is his [home-page] to visit

[![npm version][npm-badge]][npm]

[mail-function]: https://www.npmjs.com/package/mail-function
[home-page]: http://kselax.ru/en
[npm]: https://www.npmjs.org/package/mail-function
[npm-badge]: https://img.shields.io/npm/v/mail-function.svg?style=flat-square

## mail(options)
The `mail` function accept such `options` in such order like in below

`from` - the sender address it could be american-chat.ru <american-chat.ru@kselax.ru> or whatever...

`to` - the email address where you send

`subject` - is an email subject

`html` - html text the body of email

`fn` - a callback function where you can check check error (optional)

**The mail function is an async function, be careful, you can get results only pass the callback**

## Installation
```shell
$ npm install mail-function --save
```

## The example
```javascript
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
```
## License
This software is free to use under GNU General Public License GPL. See the [license description][] for license text and copyright information.


[license description]: https://www.gnu.org/licenses/gpl-3.0-standalone.html
