var math = false;
var english = false;
var history = false;
var science = false;

var botui = new BotUI('gedTutor');

botui.message.add({
  content: 'I am the Ged Tutor Bot!' + ' I have been assigned to help you study to pass your General Education Exam!'
}).then(function () { // get the result
  botui.message.add({
	delay: 3000,
    loading: true,
    content: 'Im super excited and I hope you are too!' + ' Okay! So lets begin!'
  }).then(function() {
	  
	  userBegin();
  });
	
 });
  
  

  var userBegin = function() {
botui.message.add({ // show a message
  delay: 3000,
  human: true,
  content: 'Whats your name?'
}).then(function () { // wait till its shown
  return botui.action.text({ // show 'text' action
    action: {
      placeholder: 'Your name'
    }
  });
}).then(function (res) { // get the result
  botui.message.add({
	delay: 3000,
    loading: true,
    content: 'Its great to meet you ' + res.value 
  });
  }).then(function (res) { // get the result
  botui.message.add({
	delay: 5000,
    loading: false,
	
    content: 'Are you ready to begin?'
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
     content: 'Awesome! What subject would you like to begin?'
	  
});
	  } else {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'Maybe later then.'
  }); 
	  }
  }).then(function (res) {
	  botui.action.button ({
		  delay: 3000,
		  action: [
    { 
      text: 'Math',
      value: 'math'
    }, {
		text: 'English',
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
  type: 'embed', // this is 'text' by default
  content: 'https://www.youtube.com/embed/rHCmNulyUEw'
	  
	  }).then(function (res) {
		  math2();
	  })
	  } else {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'Maybe later then.'
  }); 
	  }
	  
	  
	  
  });
  
  
  
});

});
  }
  
  var math3 = function() {
      $.getScript("math.js");
      
  }
  
var math2 = function () {
  botui.message
    .bot({
      delay: 8000,
      content: 'Take a look at this study material. Then let me know if you want to try some practice questions'
    }).then(function (res) {

  botui.action.button({
	  delay: 6000,
  action: [
    { // show only one button
      text: 'Practice',
      value: 'practice'
    }, {
		text: 'No Thanks',
		value: 'nope'
	}
  ]
  }).then(function (res) {
	  if(res.value == 'practice') {
	  botui.message.add({
  type: 'embed', // this is 'text' by default
  content: 'https://www.youtube.com/embed/KziVkgocJvE'
	  
	  });
  
  
}else {
		 botui.message.add({
	delay: 500,
    loading: false,
	
    content: 'Maybe later then.'
  }); 
	  }
mathTips();
});
});
}

var mathTips = function () {
	botui.message
    .bot({
      delay: 5000,
      content: 'Here are some Math Tips you should know before attempting your Ged Exam.'
	}).then(function (res) {
		botui.message.add({
			delay: 5000,
  type: 'embed', // this is 'text' by default
  content: 'https://www.youtube.com/embed/aVeZR7FM28s'
	  
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
  