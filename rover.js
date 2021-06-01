class Rover {
  constructor(position) {
  this.position = position;
  this.mode = "NORMAL"
  this.generatorWatts = 110
  }
  
  
  receiveMessage(message){
    let output = {
      message: message.name,
      resultsArray: []
    }

    // let commands = message.commands;

    // loop through the array of commands, and use an if/else block to add in results to the resultsArray in the output object based on the commandType of each command in the commands array
    // 
//     for(let i = 0; i < .length; i++) {
      
//     }
  
  }                     
 
}     
    // let message = new Message("Test message with two commands", commands);
    // let commands = [new Command("MODE_CHANGE" , "LOW_POWER"), new Command("STATUS_CHECK")];
    // let rover = new Rover(24680);
    // let response = rover.receiveMessage(message);



    module.exports = Rover;