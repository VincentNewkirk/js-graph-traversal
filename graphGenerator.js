// Implement a graph generator that represents a set of objects where some pairs of objects are connected by links.
'use strict';

function Node (name, value){
  this.name = name;
  this.Neighbors = [];
  this.value = value;
  this.addNeighbors = function(array){
    array.forEach((curr) => {
      this.Neighbors.push(curr);
    });
  };

  this.adjacent = (y) => {
    return this.Neighbors.includes(y);
  };

  this.neighbors = _ => {
    return this.Neighbors;
  };

  return this;
}

module.exports = Node;

