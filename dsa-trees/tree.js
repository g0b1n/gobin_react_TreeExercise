/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const sumNodeValues = (node) => {
      if (node === null){
        return 0;
      }

      // start sum with the current node's value
      let sum = node.val;
      // loop thorugh each child and add their sum
      for (let child of node.children){
        sum += sumNodeValues(child);
      }
      // return total
      return sum;
    }
    // start the recursion from the root of the tree
    return sumNodeValues(this.root);
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    countEvenNodeValues = (node) => {
      if (node === null){
        return 0;
      }

      let count = 0;
      if (node.val % 2 === 0){
        count += 1;
      }

      for (let child of node.children){
        count += countEvenNodeValues(child);
      }

      return count;
    }

    return countEvenNodeValues(this.root)

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    isNumGreater = (node) => {
      if (node === null){
        return 0;
      }

      let count = 0;
      if (node.val > lowerBound){
        count += 1
      }

      for (let child of node.children){
        count += isNumGreater(child);
      }
      return count;
    }
    return isNumGreater(this.root)

  }
}

module.exports = { Tree, TreeNode };
