/* eslint-disable no-import-assign */
/**
 * @param {string} msg - The value typed into the chatbot: For example: "Katie"
 * @returns {string} The text that will be used as the bot reply and shown to the user. For example: "Hello Katie, do you take milk in your tea?"
 */

let branchLevel = 0;
let name;
let prefernece;
let time;
let previousMsg;
let counter = 0;
const getBotReply = (msg) => {
  if (branchLevel === 0) {
    previousMsg = `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
    if (
      msg.length !== 0 &&
      msg !== `reset` &&
      msg !== `help` &&
      msg !== `resume`
    ) {
      branchLevel = 1;
      name = msg.slice(0, 1).toUpperCase() + msg.slice(1).toLowerCase();
      return `Hi ${name}, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `reset`) {
      branchLevel = 0;
      return `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `help`) {
      return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
    } else if (msg === "resume") {
      return previousMsg;
    } else {
      return `Please type your name and click 'Send' to continue. For help reply ‘help’. To begin from the start reply ‘reset’`;
    }
  }

  if (branchLevel === 1) {
    previousMsg = `Hi ${name}, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    if (msg.toLowerCase() === `no`) {
      branchLevel = 1.5;
      previousMsg = `I wish I was more helpful ${name}, you can always come back. Thank you for your time and have a great evening. For help reply ‘help’. To begin from the start reply ‘reset’`;
      return `I wish I was more helpful ${name}, you can always come back. Thank you for your time and have a great evening. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg.toLowerCase() === `yes`) {
      branchLevel = 2;
      previousMsg = `Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
      return `Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `reset`) {
      branchLevel = 0;
      return `Hi, human ... what's your name?. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `help`) {
      return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
    } else if (msg === "resume") {
      return previousMsg;
    } else {
      return `${name}, I could not understand your reply. Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    }
  }

  if (branchLevel === 2) {
    if (msg.toLowerCase() === `30 minutes`) {
      branchLevel = 3;
      time = `30`;
      return `Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg.toLowerCase() === "60 minutes") {
      branchLevel = 3;
      time = `60`;
      return `Food! food! and more food! What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `reset`) {
      branchLevel = 0;
      return `Hi, human ... what's your name?. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `help`) {
      return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
    } else if (msg === "resume") {
      return previousMsg;
    } else {
      return `${name}, I could not understand your reply. Kindly reply '30 minutes' or '60 minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    }
  }

  if (branchLevel === 3) {
    if (time === "30") {
      previousMsg = `Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegeterian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    }
    if (time === "60") {
      previousMsg = `Food! food! and more food! What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    }
    if (msg.toLowerCase() === `vegetarian`) {
      branchLevel = 4;
      prefernece = `vegetarian`;
      return `Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg.toLowerCase() === `non-vegetarian`) {
      branchLevel = 4;
      prefernece = `non-vegetarian`;
      return `Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `reset`) {
      branchLevel = 0;
      return `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `help`) {
      return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. Kindly do not use 'reset', 'help' and 'resume' as your name. Type 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
    } else if (msg === "resume") {
      return previousMsg;
    } else {
      return `${name}, I could not understand your reply. Kindly reply 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    }
  }

  if (branchLevel === 4 && prefernece === `vegetarian`) {
    previousMsg = `Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    if (time === `30`) {
      if (msg.toLowerCase() === "beans") {
        branchLevel = 5;
        previousMsg = `Fresh 'Burrito' straight from the heart of Mexico awaits your taste buds..Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
        return `Fresh 'Burrito' straight from the heart of Mexico awaits your taste buds..Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg.toLowerCase() === "tofu") {
        branchLevel = 5;
        previousMsg = `Well done! Let's get ready for sweet and spicy 'Tofu Pad Thai'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
        return `Well done! Let's get ready for sweet and spicy 'Tofu Pad Thai'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg === `reset`) {
        branchLevel = 0;
        return `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg === `help`) {
        return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. Kindly do not use 'reset', 'help' and 'resume' as your name. Type 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
      } else if (msg === `resume`) {
        return previousMsg;
      } else {
        return `${name}, I could not understand your reply. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’`;
      }
    }
    if (time === `60`) {
      if (msg.toLowerCase() === `beans`) {
        branchLevel = 5;
        previousMsg = `3, 2, 1, 'Black Bean Lasagna' it is.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
        return `3, 2, 1, 'Black Bean Lasagna' it is.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg.toLowerCase() === `tofu`) {
        branchLevel = 5;
        previousMsg = `'Double-Dredged Spicy Miso Tofu' is the answer.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
        return `'Double-Dredged Spicy Miso Tofu' is the answer.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg === `reset`) {
        branchLevel = 0;
        return `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg === `help`) {
        return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. Kindly do not use 'reset', 'help' and 'resume' as your name. Type 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
      } else if (msg === `resume`) {
        return previousMsg;
      } else {
        return `${name}, I could not understand your reply. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’`;
      }
    }
  }

  if (branchLevel === 4 && prefernece === `non-vegetarian`) {
    previousMsg = `Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    if (time === `30`) {
      if (msg.toLowerCase() === `chicken`) {
        branchLevel = 5;
        previousMsg = `Smell's good! Canada's 'Honey Garlic Chicken' is calling your name.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
        return `Smell's good! Canada's 'Honey Garlic Chicken' is calling your name.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg.toLowerCase() === `fish`) {
        branchLevel = 5;
        previousMsg = `Oooh! something's fishy. Tonight we are looking at 'Pan-Fried Salmon'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
        return `Oooh! something's fishy. Tonight we are looking at 'Pan-Fried Salmon'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg === `reset`) {
        branchLevel = 0;
        return `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg === `help`) {
        return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. Kindly do not use 'reset', 'help' and 'resume' as your name. Type 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
      } else if (msg === `resume`) {
        return previousMsg;
      } else {
        return `${name}, I could not understand your reply. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’`;
      }
    }
    if (time === `60`) {
      if (msg.toLowerCase() === `chicken`) {
        branchLevel = 5;
        previousMsg = `Yes! you read it correct. It's 'Old-Dehli Style Butter Chicken'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
        return `Yes! you read it correct. It's 'Old-Dehli Style Butter Chicken'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg.toLowerCase() === "fish") {
        branchLevel = 5;
        previousMsg = `You always wanted this, didn't you ? 'Thai Mackerel & Sweet Potato Traybake'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
        return `You always wanted this, didn't you ? 'Thai Mackerel & Sweet Potato Traybake'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg === "reset") {
        branchLevel = 0;
        return `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
      } else if (msg === `help`) {
        return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. Kindly do not use 'reset', 'help' and 'resume' as your name. Type 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
      } else if (msg === `resume`) {
        return previousMsg;
      } else {
        return `${name}, I could not understand your reply. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’`;
      }
    }
  }
  if (branchLevel === 5 && msg.length >= 0) {
    if (msg === `help`) {
      return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. Kindly do not use 'reset', 'help' and 'resume' as your name. Type 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
    } else if (msg === `reset`) {
      branchLevel = 0;
      return `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `resume`) {
      return previousMsg;
    } else {
      previousMsg = `I could not understand that. End of conversation has reached. Try replying ‘help’ for assistance or to begin from the start reply ‘reset’`;
      return `I could not understand that. End of conversation has reached. Try replying ‘help’ for assistance or to begin from the start reply ‘reset’`;
    }
  }
  if (branchLevel === 1.5) {
    if (msg !== "help" && msg !== "resume") {
      counter++;
    }
    if (counter > 0) {
      previousMsg = `I could not understand that. End of conversation has reached. Try replying ‘help’ for assistance or to begin from the start reply ‘reset’`;
    }
    if (msg === `help`) {
      return `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. Kindly do not use 'reset', 'help' and 'resume' as your name. Type 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
    } else if (msg === `reset`) {
      branchLevel = 0;
      return `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
    } else if (msg === `resume`) {
      return previousMsg;
    } else {
      return `I could not understand that. End of conversation has reached. Try replying ‘help’ for assistance or to begin from the start reply ‘reset’`;
    }
  }
};
export { getBotReply };
