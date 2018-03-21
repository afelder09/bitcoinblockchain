const Blockchain = require('./blockchain.js')
const Block = require('./block.js')
const Transaction = require('./transaction.js')

let ansonCoin = new Blockchain();

// For testing validity function
// ansonCoin.addBlock(new Block(1, "20/07/2017", {amount: 4}));
// ansonCoin.addBlock(new Block(2, "20/07/2017", {amount: 8}))
//
// console.log(ansonCoin)
// console.log('Blockchain valid? ' + ansonCoin.isChainValid())
// ansonCoin.chain[1].transactions = { amount: 100 }
// console.log('Blockchain valid? ' + ansonCoin.isChainValid())

// For testing mining functionality
// console.log('Mining block 1')
// ansonCoin.addBlock(new Block(1, "20/07/2017", {amount: 4}))
//
// console.log('Mining block 2')
// ansonCoin.addBlock(new Block(2, "20/07/2017", {amount: 4}))

// For testing transaction logic
console.log('Creating some transactions...')
ansonCoin.createTransaction(new Transaction('address1', 'ansons-address', 100))
ansonCoin.createTransaction(new Transaction('address2', 'address1', 50))

console.log('Starting the miner...')
ansonCoin.minePendingTransactions('ansons-address')

console.log('Balance of Ansons address is ', ansonCoin.getBalanceOfAddress('ansons-address'))

console.log('Starting the miner again!')
ansonCoin.minePendingTransactions('ansons-address')
console.log('Balance of Anson address is', ansonCoin.getBalanceOfAddress('asnsons-address'));
