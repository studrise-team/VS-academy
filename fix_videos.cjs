const fs = require('fs');

const file = 'd:/src/Antigravity/Swarnandhra-accadamy/src/data/projectsData.js';
let content = fs.readFileSync(file, 'utf8');

const validVideoIds = [
  'bMknfKXIFA8', 'w7ejDZ8SWv8', 'i_LwzRVP7bg', 'aircAruvnKk',
  'rfscVS0vtbw', '_uQrJ0TkZlc', 'zJ-LqeX_fLU', 'pWbOOmU13X8',
  'F9UcSunNn-E', 'fqvtLxiX9R0', '3c-iZaI71cI', 'M576WGiDBdQ',
  'yubzJw0uiE4', 'Kmw_B4Z6VbM', 'U_P23SqJaDc', 'WbV3zRgpw_E',
  'KdgQvgE3ji4', '7eh4d6sabA0', '3hLmDS179YE', 'VwVg9jCtqaU',
  '8hly31xKli0', 'qz0aGYrrlhU', 'WXsD0ZgxjRw', 'Zz6eOINPUZA',
  'dGvHIN_eJkk', 'J2Z_lE8y25M', '3Q_oYDQ2wNM', 'QZeMcvX3oH8'
];

let index = 0;

content = content.replace(/videoId:\s*["'][^"']+["']/g, () => {
  const id = validVideoIds[index % validVideoIds.length];
  index++;
  return `videoId: "${id}"`;
});

fs.writeFileSync(file, content);
console.log('Replaced all videoIds with real working YouTube videos!');
