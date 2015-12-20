var split = require('split'),
    through = require('through2');

var evenLine = false,
    transform = through(function (buffer, encoding, next) {
      var line = buffer.toString() + '\n';

      (evenLine) ? this.push(line.toUpperCase()) : this.push(line.toLowerCase());
      (evenLine) ? evenLine = false : evenLine = true;
        
      next();
    });

process
  .stdin
  .pipe(split())
  .pipe(transform)
  .pipe(process.stdout);
