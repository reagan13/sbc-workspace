import * as Web3 from '@solana/web3.js';

// key -> connection -> instruction -> transaction

async function main() {
    const publicKey = new Web3.PublicKey('25MSV9kTCawz3DvwPuoXbzaF8TMGjC7dz6KsnwYpdxtg');

    const url = Web3.clusterApiUrl('devnet');
    const connection = new Web3.Connection(url);

    const balance = await connection.getBalance(publicKey); //instruction and transaction
    console.log('balance', balance);
}

main();