const ItemsList = require('./itemsList.json');
const ConstraintsList = require('./constraintsList.json');
// http://roger.redevised.com/api/v1/

class Protobot {
  constructor() {
    this.item = "cup"
    this.constraint = "for an astronaut"
    this.breif = this.setBreif()
    this.itemsList = ItemsList
    this.constraintsList = ConstraintsList
  }

  setItem(){
    this.item = this.itemsList[Math.floor(Math.random() * (this.itemsList.length))]
  }

  setConstraint(){
    var num = Math.floor(Math.random() * (this.constraintsList.length))
    console.log(num)
    this.constraint = this.constraintsList[num]
  }

  setBreif(){
    this.breif = `Design a ${this.item} ${this.constraint}`
  }

}

module.exports = Protobot;
