/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const numOfMinDepth = (node) => {
      if (node === null){
        // no tree = depth 0
        return 0;
      }

      // check for leaf node
      if (node.left === null && node.right === null) {
        return 1;
      }

      // if one subtree missing only coinsider the depth of the existing children
      if  (node.left === null){
        return numOfMinDepth(node.right) + 1;
      }
      if (node.right === null){
        return numOfMinDepth(node.left) + 1;
      }

      return Math.min(numOfMinDepth(node.left), numOfMinDepth(node.right)) + 1;
    };

    return numOfMinDepth(this.root);

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    const numOfMaxDepth = (node) => {
      // no tree = depth 0
      if (node === null){
        return 0;
      }

      // check for leaf node
      // if (node.left === null && node.right === null){
      //   return 1;
      // }

      // if one subtree is missing only consider the depth of existing subtree
      // if (node.left === null){
      //   return numOfMaxDepth(node.right) + 1;
      // }
      // if (node.right === null){
      //   return numOfMaxDepth(node.left) + 1;
      // }

      // if both subtree exist, find the min dept between the two childrens and add 1
      return Math.max(numOfMaxDepth(node.left), numOfMaxDepth(node.right)) + 1;
    }
    return numOfMaxDepth(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    let globalMaxSum = -Infinity;
    const findMaxPathSum = (node) => {
      if (node === null){
        return 0;
      };

      // find max path sum of left n right childrens
      let leftMax = Math.max(0, findMaxPathSum(node.left));
      let rightMax = Math.max(0, findMaxPathSum(node.right));

      // local max considers the current node n either of its childrens
      let localMax = node.val + Math.max(leftMax, rightMax);

      //update global max if the current node forms a path with greater sum
      globalMaxSum = Math.max(globalMaxSum, node.val + leftMax + rightMax);

      // return local max to the parent
      return localMax;
    };
    findMaxPathSum(this.root);
    return globalMaxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

    let currLargeVal = null;

    const searchNode = (node) => {
      if (node === null){
        return;
      }

      // if curr node is larger than currLargeVal 
      if (node.val > lowerBound){
        // if not or if nove.val is greater update
        if (currLargeVal === null || node.val < currLargeVal){
          currLargeVal = node.val;
        }
      }

      // continue to searchNde
      searchNode(node.left);
      searchNode(node.right);
    };
    searchNode(this.root);
    return currLargeVal;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

    let twoCousins = {
      node1: { depth: null, parent: null },
      node2: { depth: null, parent: null }
    };

    // search the tree to find node1 n node2
    const findDepthAndParent = (node, depth, parent) => {
      if (!node) return;

      // if node found, update depth and parents
      if (node === node1) {
        twoCousins.node1 = { depth, parent };
      } else if (node === node2) {
        twoCousins.node2 = { depth, parent };
      }

      // continue searching left n right childrens
      findDepthAndParent(node.left, depth + 1, node);
      findDepthAndParent(node.right, depth + 1, node);
    };

    // start search from the root with depth = 0 and parent = null
    findDepthAndParent(this.root, 0, null);

    // check id node1 n node2 are cousins
    return twoCousins.node1.depth === twoCousins.node2.depth && twoCousins.node1.parent !== twoCousins.node2.parent;

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
