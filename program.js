var fs = require('fs');

var file = process.argv[2],
    stream = fs.createReadStream(file);

stream
  .pipe(process.stdout);
