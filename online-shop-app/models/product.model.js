const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

let products = [];

class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const readStream = fs.createReadStream(path.join(rootDir, 'data', 'products.json'));
        const productData = [];
        readStream.on('data', (chunk) => {
            productData.push(...JSON.parse(chunk));
        });
        readStream.on('end', () => {
            products = [...productData, this.title];
            const writer = fs.createWriteStream(path.join(rootDir, 'data', 'products.json'), {
                flags: 'w',
            });
            writer.write(JSON.stringify(products));
        });

        readStream.on('error', (error) => {
            if (error) {
                const writer = fs.createWriteStream(path.join(rootDir, 'data', 'products.json'), {
                    flags: 'w',
                });
                writer.write(JSON.stringify(products));
            }
        });
    }

    static fetchAll() {
        return new Promise((resolve, reject) => {
            const readStream = fs.createReadStream(path.join(rootDir, 'data', 'products.json'));
            const productData = [];
            readStream.on('data', (chunk) => {
                productData.push(...JSON.parse(chunk));
            });
            readStream.on('end', () => {
                resolve(productData);
            });
            readStream.on('error', (error) => {
                if (error) {
                    console.log(error);
                    reject([]);
                }
            });
        });
    }
}

module.exports = { Product };
