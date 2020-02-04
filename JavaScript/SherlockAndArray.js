'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function sumofArray(sum, num) {
    return sum + num;
} 

// Complete the balancedSums function below.
function balancedSums(arr) {

    if (arr.length == 1) {
        return 'YES';
    } else {
        let v1 = [0];
        let v2 = arr.slice(1);
        let tam = arr.length;
        let cont1 = 0;
        let cont2 = v2.reduce(sumofArray, 0)
        for (let i = 0; i < tam; i++) {

            if (i != 0) {
                cont1 += arr[i - 1]
            }       
            
            if (cont1 == cont2) {
                return 'YES';
            } 

            if (i < (tam - 1)) {
                cont2 -= arr[i + 1];
            } else {
                cont2 = 0;
            }
        }
        return 'NO';
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
