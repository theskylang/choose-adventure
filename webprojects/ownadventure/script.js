var user = prompt ("You are walking in the forest, lost and trying to find your way out, when you reach a fork in your path. Which side do you take? (RIGHT, LEFT, CENTER)").toUpperCase();
switch (user) {
    case 'RIGHT':
        var skill = prompt ("As you walk along the path on the RIGHT, you realize it's a bit darker than it looked. A little scared, you start thinking about the skills you could use to defend yourself in case of an emergency. What is your best skill? (INTELLIGENCE, STRENGTH, AIM, SPEED)").toUpperCase();
        var tool = prompt ("The forest gets darker and darker, until you reach a clearing where you can finally see sunlight again. Looking around, you spot a few things that look useful enough, but you only have room in your backpack for one of them. Which one do you pick? (STICK, STONE, PAPER, APPLE)").toUpperCase();
        if (skill === "INTELLIGENCE" && tool == "STICK") {
            console.log ("What looked like a simple stick turns out to be a magic wand! With your superior intelect, you figure out how to use it to teleport yourself out of the forest. You're free!")}
        else if (skill === "STRENGTH" && tool == "STONE") {
            console.log ("A stone may not look like much, but with your strength you manage to use it to cut down the branches in your way and clear a path right out of the forest. You're free!")}
        else if (skill === "AIM" && tool === "PAPER") {
            console.log ("A piece of paper in the forest, and without any writing implements, may seem like a silly choice. But not for someone with your aim! You climb up a tree, fold the paper in the shape of a plane and throw it in the direction of your village. It lands right at the feet of your old teacher, who recognizes your paper plane and sends a group of people to rescue you. You're free!")}
        else if (skill === "SPEED" && tool === "APPLE") {
            console.log ("An apple doesn't look like much. You decide to save it for later, and with the help of the sun, start running East towards your village. With your speed, you reach the edge of the forest quickly enough that the apple was all the food you needed. You're free!")}
        else {console.log ("Without the right tools, your skill is of no use in the dark forest! You wander around aimlessly, hoping someone will find you before it's too late. Game over.")}
    ;break
    case 'LEFT':
        var number = Math.random();
        if (number <= 0.5) {
            var number = "HEADS";}
        else {
            var number = "TAILS";}
        var choice = prompt ("You find a man by the path who seems to be playing with a coin. He throws it up and catches it in his hand. Showing you his closed fist, he asks you: HEADS or TAILS?").toUpperCase();
            if (number === choice) {
                console.log ("You chose" + " " + choice + "." + " " + "The man opens his hand and you see it's" + " " + number + "." + " " + "You were right! Impressed, the man shows you the way out of the forest. You're free!")}
            else {
                console.log ("You chose" + " " + choice + "." + " " + "The man opens his hand and you see it's" + number + "." + " " + "Oh, no! The man refuses to help you leave the forest, and you wander around aimlessly, hoping someone will find you before it's too late. Game over.")}
    ;break
    case 'CENTER':
        var girl = prompt ("You see a little girl sitting by a well. She tells you she's actually a fairy, and she can use her magic to get you home safe and sound. You only need to prove you're pure of thought by guessing a number between 1 and 10.")
        if (girl === "1" || girl === "2" || girl === "3" || girl === "5" || girl === "7" || girl === "9" || girl === "10") {
            console.log ("Correct! You reach your home in a cloud of sweet-smelling fairy dust. You're free!")}
        else {
            console.log ("Oh no! You're not pure of thought, and the fairy won't help you. You wander around aimlessly, hoping someone will find you before it's too late. Game over.")}
    ;break
    default:
    console.log ("That's not a path! You get lost in the forest forever. Game over.")}