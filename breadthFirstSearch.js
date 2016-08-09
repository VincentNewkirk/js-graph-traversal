'use strict';
const Node = require('./graphGenerator.js');

let A = new Node('A','Hello');
let B = new Node('B','Hello');
let C = new Node('C','Hello');
let D = new Node('D','Hello');
let E = new Node('E','Hello');
let F = new Node('F','Hello');
let G = new Node('G','Hello');
let L = new Node('L','Hello');
A.addNeighbors([B,C]);
B.addNeighbors([D,E]);
C.addNeighbors([F,G]);

function BFS(start, searchFor){
  let path = [];
  let tempArr = [];

  lol(start,searchFor);
  function lol(node, searching){
    node.Neighbors.forEach((current) => {
      tempArr.push(current);
      if(current.Neighbors === searchFor){
        path.push(current);
        return path;
      } else {
        lol(current);
      }
    });
  }
  return path;
}

console.log(BFS(A, D));