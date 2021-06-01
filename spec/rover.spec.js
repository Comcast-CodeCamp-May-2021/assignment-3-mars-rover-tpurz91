const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

           // test7
describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts", function() {
   let rover = new Rover(12);
   expect(rover.position).toEqual(12)
   expect(rover.mode).toEqual("NORMAL")
   expect(rover.generatorWatts).toEqual(110)

  });
          // test8
  it("response returned by receiveMessage contains name of message", function() {
     
      let rover = new Rover(24680);
      
      let testCommandOne = new Command("MOVE" , 444);
      let testMessage = new Message("Message to move rover to position 444" , [testCommandOne]);
      // console.log(testMessage);
      // console.log(testMessage.name);
      let response = rover.receiveMessage(testMessage);
      expect(response.message).toEqual(testMessage.name)
     
   })

  //      test9
      it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
       let testCommandOne = new Command("STATUS_CHECK");
       let testCommandTwo = new Command("MOVE", 222);
       let testMessage = new Message("Test 1.2..", [testCommandOne, testCommandTwo]);
       console.log(testMessage.commands[0].commandType);
       console.log(1234);
       let rover = new Rover(89);
       let response = rover.receiveMessage(testMessage);
       expect(response.results.length).toEqual(2)

      })
    
  //      test10
     it("responds correctly to status check command", function(){
       let testCommandOne = new Command("STATUS_CHECK");
       let testMessage = new Message("Test 1.2..", [testCommandOne]);
       let rover = new Rover(89);
       let response = rover.receiveMessage(testMessage);
       console.log(response.results[0]);
        expect(response.results[0].roverStatus.position).toEqual(rover.position)
        expect(response.results[0].roverStatus.mode).toEqual(rover.mode)
        expect(response.results[0].roverStatus.generatorWatts).toEqual(rover.generatorWatts)

     })
  
  //      test11
      // it("responds correctly to mode change command", function (){
      //   let testCommandOne = new Command("MODE_CHANGE");
      //   let testMessage = new Message("Test 1.2..", [testCommandOne]);
      //   let rover = new Rover(89);
      //   let response = rover.receiveMessage(testMessage);
      //   expect(response.results[0].roverStatus.position).toEqual(rover.position)
      //   expect(response.results[0].roverStatus.mode).toEqual(rover.mode)
      //   expect(response.results[0].roverStatus.generatorWatts).toEqual(rover.generatorWatts)

      // })   

                   //test12
       





  // 7 tests here!

 });
