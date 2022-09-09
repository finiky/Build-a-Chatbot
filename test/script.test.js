// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getBotReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getBotReply = module.getBotReply;
    jest.resetModules();
  });
});

describe("getBotReply", () => {
  // Path for "I wish I was more helpful userName, you can always come back. Thank you for your time and have a great evening. For help reply ‘help’. To begin from the start reply ‘reset’"
  // When the user decides to leave the conversation on asking if he needs assistance to decide dinner
  it(`should reply with ---- I wish I was more helpful userName, you can always come back. Thank you for your time and have a great evening. For help reply ‘help’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`no`);
    const expectedReply2 = `I wish I was more helpful Username, you can always come back. Thank you for your time and have a great evening. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);
  });

  // Path for "Fresh 'Burrito' straight from the heart of Mexico awaits your taste buds..Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"
  // When user goes for the followig choice yes->30 minutes->vegetarian->beans
  it(`should reply with ---- Fresh 'Burrito' straight from the heart of Mexico awaits your taste buds..Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`30 minutes`);
    const expectedReply3 = `Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`vegetarian`);
    const expectedReply4 = `Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply(`beans`);
    const expectedReply5 = `Fresh 'Burrito' straight from the heart of Mexico awaits your taste buds..Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply5).toEqual(expectedReply5);
  });

  // Path for "Well done! Let's get ready for sweet and spicy 'Tofu Pad Thai'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"
  // When user goes for the following coice yes->30 minutes->vegetarian->tofu
  it(`should reply with ---- Well done! Let's get ready for sweet and spicy 'Tofu Pad Thai'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`30 minutes`);
    const expectedReply3 = `Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`vegetarian`);
    const expectedReply4 = `Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply(`tofu`);
    const expectedReply5 = `Well done! Let's get ready for sweet and spicy 'Tofu Pad Thai'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply5).toEqual(expectedReply5);
  });

  // Path for "Smell's good! Canada's 'Honey Garlic Chicken' is calling your name.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"
  // When user goes for the following coice yes->30 minutes->non-vegetarian->chicken
  it(`should reply with ---- Smell's good! Canada's 'Honey Garlic Chicken' is calling your name.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`30 minutes`);
    const expectedReply3 = `Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`non-vegetarian`);
    const expectedReply4 = `Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply(`chicken`);
    const expectedReply5 = `Smell's good! Canada's 'Honey Garlic Chicken' is calling your name.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply5).toEqual(expectedReply5);
  });

  // Path for "Yes! you read it correct. It's 'Old-Dehli Style Butter Chicken'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"
  // When user goes for the following coice yes->60 minutes->non-vegetarian->chicken
  it(`should reply with ---- Yes! you read it correct. It's 'Old-Dehli Style Butter Chicken'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`60 minutes`);
    const expectedReply3 = `Food! food! and more food! What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`non-vegetarian`);
    const expectedReply4 = `Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply(`chicken`);
    const expectedReply5 = `Yes! you read it correct. It's 'Old-Dehli Style Butter Chicken'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply5).toEqual(expectedReply5);
  });

  // Path for "Oooh! something's fishy. Tonight we are looking at 'Pan-Fried Salmon'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"
  // When user goes for the following coice yes->30 minutes->non-vegetarian->fish
  it(`should reply with ---- Oooh! something's fishy. Tonight we are looking at 'Pan-Fried Salmon'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`30 minutes`);
    const expectedReply3 = `Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`non-vegetarian`);
    const expectedReply4 = `Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply(`fish`);
    const expectedReply5 = `Oooh! something's fishy. Tonight we are looking at 'Pan-Fried Salmon'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply5).toEqual(expectedReply5);
  });

  // Path for "You always wanted this, didn't you ? 'Thai Mackerel & Sweet Potato Traybake'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"
  // When user goes for the following coice yes->60 minutes->non-vegetarian->fish
  it(`should reply with ---- You always wanted this, didn't you ? 'Thai Mackerel & Sweet Potato Traybake'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`60 minutes`);
    const expectedReply3 = `Food! food! and more food! What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`non-vegetarian`);
    const expectedReply4 = `Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply(`fish`);
    const expectedReply5 = `You always wanted this, didn't you ? 'Thai Mackerel & Sweet Potato Traybake'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply5).toEqual(expectedReply5);
  });

  // Path for "3, 2, 1, 'Black Bean Lasagna' it is.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"
  // When the user goes for the following choice yes->60 minutes->vegetarian->beans
  it(`should reply with ---- 3, 2, 1, 'Black Bean Lasagna' it is.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`60 minutes`);
    const expectedReply3 = `Food! food! and more food! What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`vegetarian`);
    const expectedReply4 = `Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply(`beans`);
    const expectedReply5 = `3, 2, 1, 'Black Bean Lasagna' it is.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply5).toEqual(expectedReply5);
  });

  // Path for "'Double-Dredged Spicy Miso Tofu' is the answer.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"
  // When the user goes for the following choice yes->60 minutes->vegetarian->tofu
  it(`should reply with ---- 'Double-Dredged Spicy Miso Tofu' is the answer.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`60 minutes`);
    const expectedReply3 = `Food! food! and more food! What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`vegetarian`);
    const expectedReply4 = `Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);

    const botReply5 = getBotReply(`tofu`);
    const expectedReply5 = `'Double-Dredged Spicy Miso Tofu' is the answer.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply5).toEqual(expectedReply5);
  });

  // Path for 'Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’"
  // When the user wishes to restart the entire conversation
  it(`should reply with ---- Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`30 minutes`);
    const expectedReply3 = `Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`reset`);
    const expectedReply4 = `Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);
  });

  // Path for "1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help."
  // When the user wishes to take help at any point during conversation. This is a random example
  it(`should reply with ---- 1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`help`);
    const expectedReply3 = `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
    expect(botReply3).toEqual(expectedReply3);
  });

  // Path for "I could not understand your reply. Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
  // When the user replies with an input which the chatbot is unable to understand.
  it(`should reply with ---- I could not understand your reply. Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`xyz`);
    const expectedReply2 = `Username, I could not understand your reply. Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);
  });

  // Following scenario is for testing when the user types 'help' and then wants to return to the point where he was when he replied 'help'
  // Path for `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`
  it(`should reply with ---- Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(`Username`);
    const expectedReply1 = `Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);

    const botReply2 = getBotReply(`yes`);
    const expectedReply2 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply2).toEqual(expectedReply2);

    const botReply3 = getBotReply(`help`);
    const expectedReply3 = `1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.`;
    expect(botReply3).toEqual(expectedReply3);

    const botReply4 = getBotReply(`resume`);
    const expectedReply4 = `Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply4).toEqual(expectedReply4);
  });

  // Path for "Please type your name and click 'Send' to continue. For help reply ‘help’. To begin from the start reply ‘reset’"
  // Test to check when user clciks on the send key without typing a name. avoids undefined reply
  it(`should reply with ---- Please type your name and click 'Send' to continue. For help reply ‘help’. To begin from the start reply ‘reset’`, () => {
    const botReply1 = getBotReply(``);
    const expectedReply1 = `Please type your name and click 'Send' to continue. For help reply ‘help’. To begin from the start reply ‘reset’`;
    expect(botReply1).toEqual(expectedReply1);
  });
});
