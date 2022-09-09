# Chatbot

## Problem statement

The Chatbot will be designed to answer the user's question "What should I have for dinner?". This is the main problem statement and all the processes will be designed to provide an answer that would be based upon the preferneces provided by the users in the form of inputs. At the end of the converstaion the Chatbot will answer with a name of a dish for dinner.

## Inputs, processes and outputs

Inputs: User input from the options provided in the output, Name of the user.

Processes: Determine the correct answer based on the user's present and past inputs. Process takes into consideration input at each level and moves in the direction based upon the inputs fed.

Output:All the outputs are questions displayed on the screen except for the last outpust which is a final answer.

## Test scenarios

## Path for "I wish I was more helpful Username, you can always come back. Thank you for your time and have a great evening. For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: no  
Output: I wish I was more helpful Username, you can always come back. Thank you for your time and have a great evening. For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'no' and respond with "I wish I was more helpful userName, you can always come back. Thank you for your time and have a great evening. For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "Fresh 'Burrito' straight from the heart of Mexico awaits your taste buds..Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 30 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: vegetarian
Output: Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: beans
Output: Fresh 'Burrito' straight from the heart of Mexico awaits your taste buds..Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with "30 minutes" and respond with, "Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user respond with "vegetarian" and respond with "Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’"
5. Let the user reply with "beans" and respond with "Fresh 'Burrito' straight from the heart of Mexico awaits your taste buds..Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "Well done! Let's get ready for sweet and spicy 'Tofu Pad Thai'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 30 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: vegetarian
Output: Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: tofu
Output: Well done! Let's get ready for sweet and spicy 'Tofu Pad Thai'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with "30 minutes" and respond with, "Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user respond with "vegetarian" and respond with "Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’"
5. Let the user reply with "beans" and respond with "Well done! Let's get ready for sweet and spicy 'Tofu Pad Thai'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "Smell's good! Canada's 'Honey Garlic Chicken' is calling your name.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 30 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: non-vegetarian
Output: Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: chicken
Output: Smell's good! Canada's 'Honey Garlic Chicken' is calling your name.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with "30 minutes" and respond with, "Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user respond with "non-egetarian" and respond with "Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’"
5. Let the user reply with "chicken" and reply "Smell's good! Canada's 'Honey Garlic Chicken' is calling your name.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "Yes! you read it correct. It's 'Old-Dehli Style Butter Chicken'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 60 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: non-vegetarian
Output: Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: chicken
Output: Yes! you read it correct. It's 'Old-Dehli Style Butter Chicken'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with "60 minutes" and respond with, "Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user respond with "non-egetarian" and respond with "Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’"
5. Let the user reply with "chicken" and reply "Yes! you read it correct. It's 'Old-Dehli Style Butter Chicken'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "Oooh! something's fishy. Tonight we are looking at 'Pan-Fried Salmon'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 30 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: non-vegetarian
Output: Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: fish
Output: Oooh! something's fishy. Tonight we are looking at 'Pan-Fried Salmon'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with "30 minutes" and respond with, "Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user respond with "non-egetarian" and respond with "Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’"
5. Let the user reply with "fish" and reply "Oooh! something's fishy. Tonight we are looking at 'Pan-Fried Salmon'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for You always wanted this, didn't you ? 'Thai Mackerel & Sweet Potato Traybake'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 60 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: non-vegetarian
Output: Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: fish
Output: You always wanted this, didn't you ? 'Thai Mackerel & Sweet Potato Traybake'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with '60 minutes' and respond with, "Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user respond with "non-egetarian" and respond with "Awesome! We have two options to calm your belly. Kindly reply 'chicken' or 'fish'. For help reply ‘help’. To begin from the start reply ‘reset’"
5. Let the user reply with "fish" and reply "You always wanted this, didn't you ? 'Thai Mackerel & Sweet Potato Traybake'.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "3, 2, 1, 'Black Bean Lasagna' it is.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 60 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: vegetarian
Output: Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: beans
Output: 3, 2, 1, 'Black Bean Lasagna' it is.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with "60 minutes" and respond with, "Food! food! and more food! What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user respond with "vegetarian" and respond with "Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’"
5. Let the user reply with "beans" and respond with "3, 2, 1, 'Black Bean Lasagna' it is.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "'Double-Dredged Spicy Miso Tofu' is the answer.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 60 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: vegetarian
Output: Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: tofu
Output: "'Double-Dredged Spicy Miso Tofu' is the answer.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with "60 minutes" and respond with, "Food! food! and more food! What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user respond with "vegetarian" and respond with "Awesome! We have two options to calm your belly. Kindly reply 'beans' or 'tofu'. For help reply ‘help’. To begin from the start reply ‘reset’"
5. Let the user reply with "tofu" and respond with "'Double-Dredged Spicy Miso Tofu' is the answer.Enjoy! For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for 'Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’".

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that ${name}! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: 30 minutes  
Output: Short and sweet, we can get you sorted. What's your preference tonight Username? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: reset
Output: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with "30 minutes" and respond with, "Short and sweet, we can get you sorted. What's your preference tonight ${name}? Kindly reply either 'vegetarian' or 'non-vegetarian'. For help reply ‘help’. To begin from the start reply ‘reset’"
4. Let the user reply with 'reset' and respond with "Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: help
Output: 1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with 'help' abd respond with "1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help."

## Path for "I could not understand your reply. Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: xyz
Output: Username, I could not understand your reply. Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'xyz' and respond with "Username, I could not understand your reply. Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: Username
Output: Hi Username, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: yes
Output: Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

Input: help
Output: 1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help.

Input: resume
Output: Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by greeting the user by mentioning their name and asking the first question "Hi Userrname, Would you like my assistance to decide your dinner meal? Kindly reply 'yes' or 'no'. For help reply ‘help’. To begin from the start reply ‘reset’"
2. Let the user reply with a 'yes' and respond with Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’
3. Let the user reply with 'help' abd respond with "1: Always reply only from the available options.2: Click 'Send' to reply. 3: Type 'reset' to start over again. 4: Kindly do not use 'reset', 'help' and 'resume' as your name. Reply 'resume' to continue from where you left or 'reset' to start over again or 'help' to get help"
4. Let the user reply 'resume' and respond with "Roger that Username! let's get started. How much time would you like to put in for cooking? Kindly reply '30 minutes' or 60 'minutes'. For help reply ‘help’. To begin from the start reply ‘reset’"

## Path for "Please type your name and click 'Send' to continue. For help reply ‘help’. To begin from the start reply ‘reset’"

Start: Hi, human ... what's your name? For help reply ‘help’. To begin from the start reply ‘reset’;

Input: (do not type anything and click send)
Output: Please type your name and click 'Send' to continue. For help reply ‘help’. To begin from the start reply ‘reset’

1. Respond by replying "Please type your name and click 'Send' to continue. For help reply ‘help’. To begin from the start reply ‘reset’"
