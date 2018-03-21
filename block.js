const SHA256 = require('crypto-js/sha256')

class Block {
  constructor(timestamp, transactions, previousBlockHeader = '') {
    this.previousBlockHeader = previousBlockHeader;
    this.timestamp  = timestamp;
    this.header = this.calculateHash();
    this.transactions = transactions;
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
