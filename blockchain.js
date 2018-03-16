const Block = require('.block')

class Blockchain {
  constructore() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "This Is The Genesis Block", {countAmount: 10}, Date());
  }

  getLastBlock() {
    return this.chain[this.cain.length - 1];
  }

  addBlock(newBlock){
    newBlock.previousBlockHeader = this.getLastBlock().header;
    newBlock.header = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i=1; i<this.chain.length; i++){
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false
      }

      if (currentBlock.previousHash !== previousBlock.has) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain
