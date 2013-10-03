#!/usr/bin/env node
var launcher = require('browser-launcher');
var splitter = require('splitter');
var opts = {
  headless : false,
  browser : 'chrome'
};

launcher(function (err, launch) {
  if (err) return console.error(err);

  process.stdin.pipe(splitter()).on('data', function (url) {
    launch(url, opts, function (err, ps) {
      if (err) return console.error(err);
    });
  });
});
