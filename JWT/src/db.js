const fs=require('fs');
function store(data, filename = 'db.txt') {
    // Write data to a file
    fs.appendFile(filename, data, (err) => {
        if (err) {
            console.error(`Error writing to file: ${err}`);
        } else {
            console.log('Data successfully stored');
        }
    });
}

module.exports = store;

















// const fs = require('fs');

// function store(data, filename = './db.txt') {
//     // Write data to a file
//     fs.appendFile(filename, data + '\n', (err) => {
//         if (err) {
//             console.error(`Error writing to file: ${err}`);
//         } else {
//             console.log('Data successfully stored');
//         }
//     });
// }

// module.exports = store;
