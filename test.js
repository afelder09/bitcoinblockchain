const Blockchain = require('./blockchain.js')
const Block = require('./block.js')

let ansonCoin = new Blockchain();
ansonCoin.addBlock(new Block(1, "20/07/2017", {amount: 4}));
ansonCoin.addBlock(new Block(2, "20/07/2017", {amount: 8}))

console.log(ansonCoin)
