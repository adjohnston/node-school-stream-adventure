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

//  node school solution
//  
//  var through = require('through2');
//  var split = require('split');
//  
//  var lineCount = 0;
//  var tr = through(function (buf, _, next) {
//      var line = buf.toString();
//      this.push(lineCount % 2 === 0
//          ? line.toLowerCase() + '\n'
//          : line.toUpperCase() + '\n'
//      );
//      lineCount ++;
//      next();
//  });
//  process.stdin
//      .pipe(split())
//      .pipe(tr)
//      .pipe(process.stdout);
