'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {

    if (c.length == 2) {
        return 1;
    } else {

        let tamanho = c.length - 1;
        let jumpCont = 0;
        let i = 0;
        let endIn1 = 0;

        do {

            if (c[i + 1] == 1) {

                jumpCont++;
                endIn1 = 0;

            } else {

                if (c[i + 2] == 1) {

                    endIn1 = 1;
                    jumpCont = jumpCont + 2;

                } else {
                    endIn1 = 0;
                    jumpCont++;

                }
            }

            if (endIn1) {
                i = i + 3;
            } else {
                i = i + 2;
            }


        } while ((i + 2) <= (tamanho));

        if ((tamanho - i) > 0) {
            jumpCont++;
        }

        return jumpCont;
    }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
