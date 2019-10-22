const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, 'boilerplates.json'))) {
  const data = {};
  fs.writeFileSync(path.join(__dirname, 'boilerplates.json'), JSON.stringify(data), (err) => {
    console.log(err);
  });
}
