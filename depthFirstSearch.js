'use strict';

const Node = require('./graphGenerator.js');

let A = new Node('A','Hello');
let B = new Node('B','Hello');
let found = false;
let C = new Node('C','Hello');
let D = new Node('D','Hello');
let E = new Node('E','Hello');
let F = new Node('F','Hello');
let G = new Node('G','Hello');
let L = new Node('L','Hello');
A.addNeighbors([B,C]);
B.addNeighbors([D,E]);
C.addNeighbors([F,G]);

function DFS(start, searchFor){
  if(start.Neighbors.includes(searchFor) || start === searchFor){
    found = searchFor.value;
    return found;
  }
  if(start.Neighbors.length !== 0 && found === false){
    start.Neighbors.forEach((current)=> {
      DFS(current, searchFor);
    });
  }
  return found;
}

console.log(DFS(A,G));