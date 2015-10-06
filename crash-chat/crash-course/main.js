'use strict';
Parse.initialize("b1vJxODKeikf774DQsI1oYCBK4awXkcuK10WS9vY", "Epc1u39Gr5jqK7fE9dOHxWrBxDcfJkoIDihLKFVd");
var Message = Parse.Object.extend('Message');
var query = new Parse.Query(Message);


var button = document.getElementById('chat-button');
var textBox = document.getElementById('text-box');
var messagesSection = document.getElementById('messages');
var totalMessages = document.getElementById('total-messages');
var lastMessageDate = document.getElementById('last-message-date');

var numberOfMessages = 0;

var lastMessage = new Date();

function doThisWhenFormIsSubmitted(e) {
	e.preventDefault();

	var myMessage = new Message();
	myMessage.save({message: textBox.value});
	textBox.value = '';
}

button.addEventListener('click', doThisWhenFormIsSubmitted);

setInterval(doThisEveryTwoSeconds, 1500);

function doThisEveryTwoSeconds() {
	query.greaterThan('createdAt', lastMessage).find().then(addListOfMessages);
}

function addListOfMessages(messages) {
	messages.forEach(addSingleMessage);
	totalMessages.innerHTML = numberOfMessages;
	lastMessageDate.innerHTML = lastMessage.getHours()+':'+lastMessage.getMinutes()+':'+lastMessage.getSeconds();
}

function addSingleMessage(message) {
	numberOfMessages++;
	messagesSection.innerHTML += '<div>'+message.get('message')+'</div>';
	if(message.get('createdAt') > lastMessage) {
		lastMessage = message.get('createdAt');
	}
}