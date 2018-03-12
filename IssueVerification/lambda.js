let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
let connectionManager = require('./ConnectionManager');
//let SL = require('@slappforge/slappforge-sdk');
const rds = new SL.AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {


	// // You must always end/destroy the DB connection after it's used
	// rds.beginTransaction({
	// 	instanceIdentifier: 'test'
	// }, function (error, connection) {
	// 	if (error) { throw err; }
	// });


	// callback(null, 'Successfully executed');
	sqs.sendMessage({
		MessageBody: 'this is a test edit this sample',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/263248768798/sample',
		DelaySeconds: '0',
		MessageAttributes: {
			"sample": {
				"DataType": "String",
				"StringValue": "test"
			},
			"test": {
				"DataType": "Number",
				"StringValue": "001"
			},
			"binary": {
				"DataType": "Binary",
				"BinaryValue": "001"
			}
		}
	}, function (data) {
		console.log('successfull', data);
	}, function (error) {
		console.log('error ', error);

	});


}