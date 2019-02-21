'use strict';
const request = require('request');
const fs = require('fs');

request('testUrl', {json: true}, (err, res, body) => {
  if (err) { return console.log(err); }
  const en = {};
  const de = {};
  body.translations.forEach((item) => {
    en[item.key] = item.text;
  });
  fs.writeFileSync('./src/assets/i18n/en_new.json', JSON.stringify(en));
  fs.writeFileSync('./src/assets/i18n/de_new.json', JSON.stringify(de));
  console.log('Import complete!');
});
