let AWS = require('aws-sdk');
const sqs = new SL.AWS.SQS(AWS);
let connectionManager = require('./ConnectionManager');
let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);
exports.handler = function (event, context, callback) {

	// You must always end/destroy the DB connection after it's used
	// rds.beginTransaction({
	// 	instanceIdentifier: 'DBid'
	// }, function (error, connection) {
	// 	if (error) { throw err; }
	// });
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/263248768798/sample',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0',
		MessageAttributeNames: ['']
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
		})
	}, function (error) {
		// implement error handling logic here
	});


	callback(null, 'Successfully executed');
}