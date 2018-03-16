const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(index, previousBlockHeader = '', transactions, timestamp) {
    this.index = index;
    this.header = this.calculateHash();
    this.previousBlockHeader = previousBlockHeader;
    this.transactions = transactions;
    this.timestamp  = timestamp;
    this.nonce = 0;
  }

  calculateHash() {
    return SHA256(this.index +
                  this.previousBlockHeader +
                  JSON.stringify(this.transactions) +
                  this.timestamp +
                  this.nonce).toString();
  }

  mineBlock(difficulty) {
    while (this.header.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++;
      this.header = this.calculateHash()
    }
    console.log("BLOCK MINED: " + this.header)
  }
}

module.exports = Block;
