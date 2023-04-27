// Javascript Data and Functions for Web & Javascript Project


// The array containing 10 objects, each representing a quiz question and it's properties

const facts = [
  {
    num: 1,
    question: "Who invented the World Wide Web",
    answer: "TIM BERNERS LEE",
    options: ["TOM BURNMAN LEWIS", "TED BURSTAN LAVIDGE", "TIM BERNERS LEE"],
    context: "London born Berners Lee introduced a proposal with the idea in 1989 when working for CERN. in 1991, he created and published the first ever website"
  }, 
  {
    num: 2,
    question: "Which early web browser preceeded Netscape's Navigator browser in the 1990s",
    answer: "MOSAIC",
    options: ["MONTAGE", "MOSAIC", "MAGNET"],
    context: "Mosaic was one of the first ever widely available web browsers and had been developed at the National Center for Supercomputing Applications (NCSA)"
  },
  {
    num: 3,
    question: "Which audio file sharing website was introduced in 1999",
    answer: "NAPSTER",
    options: ["NECRONAM", "NEVSTAD", "NAPSTER"],
    context: "Two teenagers came up with the idea, which would help introduce the concept of peer to peer audio file sharing between computers over the internet. This started the trend of the web having profound effects on the Music industry"
  },
  {
    num: 4,
    question: "Wordpress was introduced in 2003 as what kind of web platform with the initials CMS",
    answer: "CONTENT MANAGEMENT SYSTEM",
    options: ["CONTENT MANAGEMENT SYSTEM", "CONTENT MANAGEMENT STARTUP", "CONTENT MANAGER SYSTEM"],
    context: "Wordpress was a free and open source resource for creating web pages and publishing blogs. It also provided it's own themes and plugins"
  },
  {
    num: 5,
    question: "Who started Facebook in 2004",
    answer: "MARK ZUCKERBERG",
    options: ["MATT ZUCKERBERG", "MIKE SACHERBURG", "MARK ZUCKERBERG"],
    context: "Zuckerberg was born in the US and when still just 19, started the future social media platform as a social networking site for connecting college campuses"
  },
  {
    num: 6,
    question: "Which company was behind the release of the first iPhone in 2007",
    answer: "APPLE",
    options: ["MICROSOFT", "APPLE", "GOOGLE"],
    context: "Apple's introduction of the iphone led to an explosion in the use of smartphones in the next few years, taking the consumption of web content beyond just desktop/laptop computers"
  },
  {
    num: 7,
    question: "What was/is the name of Googles's flagship web browser, first released in 2008",
    answer: "CHROME",
    options: ["CHROME", "EDGE", "FIREFOX"],
    context: "Chrome was first released for Microsoft's Windows operating system but later opened out to other operating systems with it now being the most popular browser in the world (as of November 2022)"
  },
  {
    num: 8,
    question: "What was name of Apple's tablet, first released in 2010",
    answer: "IPAD",
    options: ["APPLET", "ITAB", "IPAD"],
    context: "Though there had been computing tablets before, The iPad started the popularisation, bringing another medium and range of screen sizes, used to consume web content"
  },
  {
    num: 9,
    question: "Who was Apple's CEO when the Apple Watch was introduced",
    answer: "TIM COOK",
    options: ["TOM COOK", "TIM COOK", "TERRY COOK"],
    context: "The Apple Watch was released in 2015 and while is was originally marketed as a fashion accessory, it has developed some web search capability over time via tools such as Siri"
  },
  {
    num: 10,
    question: "What is the underlying technology behind Web 3 and Decentralised Finance",
    answer: "BLOCKCHAIN",
    options: ["NFT", "POLYGON", "BLOCKCHAIN"],
    context: "Blockchain technology allows for the use of Decentralised Applications. It works by way of a distributed ledger for consensus between multiple sources, for transactions and data storage"
  }
];


// matchMedia Queries for contolling certain styles for different screen widths after the quiz has run, due to the output of the quiz results needing to be printed onto the page

const startingWidth = window.matchMedia("(min-width: 393px)");
const wideWidth1 = window.matchMedia("(min-width: 450px)");
const wideWidth2 = window.matchMedia("(min-width: 561px)");
const wideWidth3 = window.matchMedia("(min-width: 729px)");
const wideWidth4 = window.matchMedia("(min-width: 897px)");
const wideWidth5 = window.matchMedia("(min-width: 1125px)");
const wideWidth6 = window.matchMedia("(min-width: 1250px)");
const wideWidth7 = window.matchMedia("(min-width: 1401px)");
const wideWidth8 = window.matchMedia("(min-width: 1737px)");


// The event handler function for running the quiz, to begin when the user clicks the #activate button

function takeQuiz(output, button, interface, body, container, screen, keyboard, keyedge) { // Takes 8 parameters, each holding a DOM element. These are held for restyling based on screen widths AFTER the quiz has run with it's results ouput into the bottom of the #uppermain section (the second of the four Grid Items)

  let userScore = 0;

  let firstName = prompt("Welcome to the quiz! You'll be asked 10 questions with 3 possible answers for each. Be sure to check spelling before you submit each answer. To start, enter your first name."); // Takes the user's name

  for (i = 0; i < facts.length; i++) { // For Loop to run 10 times for 10 questions
    const randomAnswers = facts[i].options.sort((_a,_b) => 0.5 - Math.random()); // To randomise the order of outputed possible answers when each question is asked
    let ask = prompt("Ok " + firstName + ", Question " + facts[i].num + ": " + facts[i].question + "? Was it " + randomAnswers[0] + ", " + randomAnswers[1] + " or " + randomAnswers[2] + "?");
    ask = ask.toUpperCase();
    if (ask == facts[i].answer) { // If the user's answer is correct, a green paragraph will be output 
        let parag = document.createElement("p");
        parag.innerHTML = facts[i].num + ". " + facts[i].answer + " was correct! " + facts[i].context + ".";
        output.appendChild(parag);  
        userScore++;
    } else { // If the user's answer is wrong, a yellow span will be output
        let spn = document.createElement("span");
        spn.innerHTML = facts[i].num + ". " +  ask + " was incorrect. The correct answer is " + facts[i].answer + ". " + facts[i].context + ".";
        output.appendChild(spn) 
    }
    button.remove(); // If the user has submitted at least one answer: The quiz cannot be retaken if the user clicks cancel in the prompt window. Their result will be ouput but the button is removed - This is to prevent repeatedly attempted answers and feedback being printed into the page
    output.style.width = "90%"; // The #q-output div is given width to contain the ouputed results
    output.style.padding = ".5em";
  }
  
  // Conditions for style control for different screen widths, once quiz has been taken and results have been ouput. NOTE: A Switch Statement was researched and tried instead of else if's but according to a Stack Overflow forum, "The switch statement won't let you do stuff like checking for numbers between certain values, and it won't let you check on multiple variables, either..." - https://bit.ly/3N2KnHf

  if (wideWidth8.matches) { // For min-width: 1737px
    body.style.height = "195vh"; // Resetting the body's viewport height
    container.style.gridTemplateRows = "13% 52% 30% 5%"; // Resetting the Grid container's vertical proportions for Grid items
    screen.style.margin = ".1em 0 0 49.9em"; // Resetting the laptop screen position
    keyboard.style.margin = ".15em 0 0 46em"; // Resetting the laptop keyboard position
    keyedge.style.margin = ".1em 0 0 43.3em"; // Resetting the laptop bottom position
  } else if (wideWidth7.matches) { // For min-width: 1401px
    body.style.height = "210vh";
    container.style.gridTemplateRows = "11% 61% 23% 5%";
    screen.style.margin = ".1em 0 0 38.85em";
    keyboard.style.margin = ".15em 0 0 35.7em";
    keyedge.style.margin = ".1em 0 0 33.6em";
  } else if (wideWidth6.matches) { // For min-width: 1250px
    body.style.height = "220vh";
    container.style.gridTemplateRows = "11% 60% 24% 5%";
    screen.style.margin = ".1em 0 0 29.5em";
    keyboard.style.margin = ".15em 0 0 26em";
    keyedge.style.margin = ".1em 0 0 23.6em";
  } else if (wideWidth5.matches) { // For min-width: 1125px
    body.style.height = "230vh";
    container.style.gridTemplateRows = "11% 60% 24% 5%";
    screen.style.margin = ".1em 0 0 24.4em";
    keyboard.style.margin = ".15em 0 0 20.7em";
    keyedge.style.margin = ".1em 0 0 18.2em";
  } else if (wideWidth4.matches) { // For min-width: 897px
    body.style.height = "240vh";
    container.style.gridTemplateRows = "11% 60% 24% 5%";
    screen.style.margin = ".6em 0 0 22em";
    keyboard.style.margin = ".15em 0 0 18.2em";
    keyedge.style.margin = ".1em 0 0 15.5em";
  } else if (wideWidth3.matches) { // For min-width: 729px
    body.style.height = "245vh";
    container.style.gridTemplateRows = "10% 61% 24% 5%";
    screen.style.margin = "1em 0 0 20.5em";
    keyboard.style.margin = ".15em 0 0 16.6em";
    keyedge.style.margin = ".1em 0 0 13.9em";
  } else if (wideWidth2.matches) { // For min-width: 561px
    body.style.height = "265vh";
    container.style.gridTemplateRows = "13% 60% 23% 4%";
    screen.style.margin = "1.2em 0 0 13.1em";
    keyboard.style.margin = ".15em 0 0 9em";
    keyedge.style.margin = ".1em 0 0 6.1em";
  } else if (wideWidth1.matches) { // For min-width: 450px
    body.style.height = "288vh";
    container.style.gridTemplateRows = "13% 66% 18% 3%"; 
    screen.style.margin = ".4em 0 0 11.75em";
    keyboard.style.margin = ".15em 0 0 8.3em";
    keyedge.style.margin = ".1em 0 0 6em"; 
  } else if (startingWidth.matches) { // For default width range: 393 - 449px
    body.style.height = "288vh";
    container.style.gridTemplateRows = "13% 68% 16% 3%";
    screen.style.margin = ".2em 0 0 7.6em";
    keyboard.style.margin = ".15em 0 0 4.5em";
    keyedge.style.margin = ".1em 0 0 2.6em";
  } else { // For narrow widths: max width 392px
    body.style.height = "368vh";
    container.style.gridTemplateRows = "10% 72% 15% 3%";
    screen.style.margin = ".5em 0 0 4.55em";
    keyboard.style.margin = ".15em 0 0 .75em";
    keyedge.style.margin = ".1em 0 0 -2em";
  }  
  
  // Quiz conditions based on user input taken from prompts. Resulting output in the #interface div of the laptop
  if (userScore == facts.length) {

      interface.innerText = "Congratulations " + firstName + "! You scored " + userScore + "/" + facts.length + " so you win our Gold Award!"; // Output for getting all 10 questions right
      interface.style.backgroundColor = "rgb(255, 215, 0)"; 
  } else if (userScore == facts.length - 1) { 
      interface.innerText = "Congratulations " + firstName + "! You scored " + userScore + "/" + facts.length + " so you win our Silver Award!"; // Output for getting 9 questions right
      interface.style.backgroundColor = "rgb(192, 192, 192)";
  } else if (userScore == facts.length - 2) {
      interface.innerText = "Congratulations " + firstName + "! You scored " + userScore + "/" + facts.length + " so you win our Bronze Award!"; // Output for getting 8 questions right
      interface.style.backgroundColor = "rgb(205, 127, 50)"; 
  } else if (userScore == 0) {
    interface.innerText = "Sorry " + firstName + "! You scored " + userScore + "/" + facts.length + ". Everyone has to start somewhere so why not start learning about the Web today!"; // Output for getting all questions wrong
  } else {
      interface.innerText = "Well done " + firstName + "! You scored " + userScore + "/" + facts.length + "!"; // Output for getting 1 to 7 questions right 
      
  }

  let conclude = document.createElement("span"); // Final output
  conclude.innerHTML = "End of Quiz, thanks for taking part. Why not check out the links at the top of the page to learn more about the Web!";
  interface.appendChild(conclude); 

}


  