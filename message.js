class Message {
  constructor(name, commands) {
    this.commands = commands;
    this.name = name;
    if (!name) {
      throw Error("Message name required.");
      
    }
       
    // this.value = value;
  }
  
   // Write code here!
}

module.exports = Message;
// module.exports = Command;