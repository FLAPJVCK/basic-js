import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push('( ' + value + ' )')
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || position % Math.floor(position) !== 0 || position >= this.chain.length || position <= 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain = [...this.chain.slice(0, position - 1), ...this.chain.slice(position)];
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let s = this.chain;
    this.chain = [];
    return s.join('~~')
  }
};
