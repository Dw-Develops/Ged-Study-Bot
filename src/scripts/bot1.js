 //var botui = new BotUI('hello-world');

  var math = false;
  var mathi = 0;
var english = false;
  var reading = false;
  var writing = false;
var history = false;
var science = false;


	  
       var storedName = localStorage.getItem('name');
				 
				console.log(storedName);
var botui = new BotUI('gedTutor');
botui.message.add({
    delay: 3000,
    loading: true,
	content: "![](images/ava-marie-2.png)" + "Well hello " + storedName + ' and Welcome to General Education Studies!'
	}).then(function () {
	botui.message.add({
    delay: 5000,
    loading: true,
  content: 'I am the Ged Tutor Bot!' + ' I have been assigned to help you study to pass your General Education Exam!'
}).then(function () { // get the result
  botui.message.add({
	delay: 4500,
    loading: true,
    content: 'Im super excited and I hope you are too!' + ' Okay! So lets begin!'
  }).then(function() {
	  
	  userBegin();
  });
	
 });
 })
  
  var userBegin = function() {
botui.message.add({ // show a message
  delay: 500,
  content: 'There are Four (4) Main Subject Groups for you to choose to study from.'
}).then(function () { // wait till its shown
   botui.message.add({ 
    delay: 1500, 
      content: "The Study Groups Are Math, Language Arts, Social Studies and Science."
    
  });
}).then(function (res) { // get the result
  botui.message.add({
	delay: 3000,
    loading: true,
    content: "Its up to you " + storedName + " , which Study Group you want to begin."
  });
  }).then(function (res) { // get the result
  botui.message.add({
	delay: 5000,
    loading: false,
	
    content: 'Are you ready to Choose a Study Group?'
  });
  
  
  
}).then(function (res) {
  botui.action.button({
	  delay: 6000,
  action: [
    { // show only one button
      text: 'Yes',
      value: 'yes'
    }, {
		text: 'Nope',
		value: 'no'
	}
  ]
  }).then(function (res) {
	  if(res.value == 'yes') {
	  botui.message.add({
     content: "![](images/ava-marie-2.png)" + 'Awesome! What Study Group would you like to begin?'
	  
});
	  } else {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'Maybe later then.'
  }); 
	  }
  }).then(function() {
        botui.message.removeAll();
		
  }).then(function() {
      botui.message.add({
     content: '![](images/ava-marie-2.png)' + 'Awesome! What Study Group would you like to begin?'
	  
  });
  }).then(function (res) {
	  botui.action.button ({
		  delay: 3000,
		  action: [
    { 
      text: 'Math',
      value: 'math'
    }, {
		text: 'Language',
		value: 'english'
	}, {
		text: 'History',
		value: 'history'
	}, {
		text: 'Science',
		value: 'science'
	}
  ]
	  }).then(function (res) {
	  if(res.value == 'math') {
	  botui.message.add({
  
      content: "Great! Let's do Math!"
	  
	  }).then(function (res) {
		  mathBegin();
	  })
	  } else if(res.value == 'english') {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'Great! ' + " Let's work on Language Arts!"
  }).then(function () {
      englishBegin();
  })
	  } else if(res.value == 'science') {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'Science content coming soon.'
  }); 
	  } else if(res.value == 'history') {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'History content coming soon.'
  }); 
	  } 
	  
	  
	  
  });
  
  
  
});
});
  }
  
  
  
     //Math Curriculum Starts Here ------->
     
var mathBegin = function () {
	math = true;
	var i = 0;
	do {
  botui.message
    .bot({
      delay: 2500,
      content: '![](images/ava-marie-2.png)' + 'First lets take an assessment of your current math skill level.'
    }).then(function (res) { // get the result
  botui.message.add({
	delay: 3250,
    loading: false,
	
    content: mathQData[i]['problem']
  }).then(function (res) {
  botui.action.button({
	  delay: 5000,
  action: [
    { // show 4 buttons
      text: mathQData[i]['a'],
      value: 'a'
    }, {
		text: mathQData[i]['b'],
		value: 'b'
	},{
		text: mathQData[i]['c'],
		value: 'c'
	},{
		text: mathQData[i]['d'],
		value: 'd'
	}
  ]
  }).then(function (res) {
	  if(res.value == 'a' && math == true) {
	  botui.message.add({
  type: 'text', // this is 'text' by default
  content: 'Thats so right!'
	 
	  });
 
  
}else  {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'Wrong! ' + 'The Answer was '  + mathQData[i]['correctAnswer']
	
  }); 
} 
	  }

);
});
});
 
     i++
	}
	while (i < mathQArray.length);
		
	
}



//question 2

var question2 = function () {
	
  botui.message
    .bot({
      delay: 2500,
      content: 'Next question.'
    }).then(function (res) { // get the result
  botui.message.add({
	delay: 3250,
    loading: false,
	
    content: 'If a=b(1/n) is equivalent to an=b then 43 is equivalent to: '
  }).then(function (res) {
  botui.action.button({
	  delay: 5000,
  action: [
    { // show 4 buttons
      text: 'A. 4(1/3)',
      value: 'a'
    }, {
		text: 'B. 64',
		value: 'b'
	},{
		text: 'C. 64(1/3)',
		value: 'c'
	},{
		text: 'D. 464',
		value: 'd'
	}
  ]
  }).then(function (res) {
	  if(res.value == 'c' && math == true) {
	  botui.message.add({
  type: 'text', // this is 'text' by default
  content: 'Thats so right!'
	 
	  });
  
  
}else  {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'Wrong! ' + 'The Answer was C. 64(1/3)'
  }); 
	  }
mathTips();
});
});
});
}



var mathTips = function () {
	botui.message
    .bot({
      delay: 5000,
      content: 'Here are some Math Tips you should know before attempting your Ged Exam.'
	}).then(function (res) {
	if(math == true)
		botui.message.add({
			delay: 5000,
  type: 'embed', // this is 'text' by default
  content: 'https://youtu.be/8nN-b7E4iSE'
	  
	  });
	});
    backToBeginning();
}
var backToBeginning = function () {
    botui.action.button({
	  delay: 6000,
  action: [
    { // show choices
      text: 'Start Over',
      value: 'startOver'
    }, {
		text: 'Next',
		value: 'next'
	}
  ]
    
}).then(function (res) {
	  if(res.value == 'startOver') {
	  botui.message.add({
  type: 'text', // this is 'text' by default
  content: 'Starting Over'
	  
	  });  
	  }
	  userBegin();
  });
  }
  
    // English Language Curriculum
	
		var englishBegin = function () {
		english = true;
		
	botui.message.add({
        delay: 500,
		content: "Do you want to start with Reading or Writing?"
	
    }).then(function () {
	botui.action.button({
	  delay: 1500,
  action: [
    { // show choices
      text: 'Reading',
      value: 'reading'
    }, {
		text: 'Writing',
		value: 'writing'
	}
  ]
    
}).then(function (res) {
	  if(res.value == 'reading') {
	  botui.message.add({
  type: 'text', 
  delay: 1000,
  content: 'Okay! ' + " Let's talk about reading. " + " We'll start with Identifying Text Structure."
	  
	  });  
	  readingBegin();
	  
	  }  else {
    botui.message.add({
  type: 'text', 
  delay: 1000,
      content: 'Okay! ' + " Let's talk about Writing. " + " We'll start with Identifying Grammar and Sentence Structure."
  });
  }
	  writingBegin();
  });
  });
  } 
  
   
 
  //Reading ------>
  
    function readingBegin() {
	reading = true;
      botui.message.bot({
      delay: 3000,
      content: "Okay! "
	}).then(function () {
	      if(reading == true) {
	   botui.message.add({
			delay: 5000,
  type: 'text', // this is 'text' by default
  content: 'Read this excerpt from, “The Adventures of Huckleberry Finn” by Mark Twain, then answer the questions that follow.'
	  
	  }).then(function () {
	       botui.message.add({
		     delay: 7000,
			 content: "The whooping went on, and in about a minute, I come a-booming down on a cut bank with smoky ghosts of big trees on it, and the current throwed me off to the left and shot by, amongst a lot of snags that fairly roared, the current was tearing by them so swift." +
			   "In another second or two it was solid white and still again. I set perfectly still then, listening to my heart thump, and I reckon I didn’t draw a breath while it thumped a hundred."
		   });
	  }).then(function () {
	       botui.message.add({
		     delay: 7000,
			 content: "1. The word __________ best describes the mood in the passage above."
		   });
	  }).then(function (res) {
	        botui.action.button({
	  delay: 1500,
  action: [
    { // show choices
      text: "A. eerie",
      value: 'a'
    }, {
		text: 'B. hilarious',
		value: 'b'
	}, {
		text: 'C. triumphant',
		value: 'c'
	}
  ]
  }).then(function (res) {
      if(res.value == 'a') {
      readingBegin();
	  } else {
	    	 botui.message.add({
	delay: 500,
    loading: false,
	
    content: "Wrong! The Answer was A. eerie!"
  });
	  }
	  });
	  });
	  }
	});
    }
  
   //Writing -------------->
    function writingBegin() {
	     botui.message.bot({
      delay: 2000,
      content: 'Lesson 1'
	})
	}