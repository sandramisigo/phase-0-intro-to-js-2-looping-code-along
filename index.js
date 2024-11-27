// Code your solutions in this file

// Function to create thank-you messages
function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function to count down from a given number to 0
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Export the functions for testing
  module.exports = {
    writeCards,
    countDown,
  };
