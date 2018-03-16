const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(index, previousBlockheader = '', transactions, timestamp) {
    this.index = index;
    this.header = this.calculateHash();
    this.previousBlockheader = previousBlockheader;
    this.transactions = transactions;
    this.timestamp  = timestamp
  }

  calculateHash() {
    return SHA256(this.index +
                  this.previousBlockheader +
                  JSON.stringify(this.transactions)).toString() +
                  this.timestamp
  }
}

module.exports = Block;
