const {parse} = require('csv-parse/sync');
const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(path.resolve('./src/Data'), 'createbookingData.csv'));

const users = parse(file, {columns: true, skip_empty_lines: true});

console.log(users);