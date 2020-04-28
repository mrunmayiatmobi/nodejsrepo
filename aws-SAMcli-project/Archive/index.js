'use strict';

const databaseManager = require('./databaseManager');
const { v1: uuidv1 } = require('uuid');

exports.productHandler = function(event, context, callback){

    console.log(event, context);

    switch (event.httpMethod) {
		case 'DELETE':
			deleteItem(event, callback);
			break;
		case 'GET':
			getUser(event, callback);
			break;
		case 'POST':
			saveUser(event, callback);
			break;
		case 'PUT':
			updateItem(event, callback);
			break;
		default:
			sendResponse(404, `Unsupported method "${event.httpMethod}"`, callback);
	}
};

// function saveItem(event, callback) {
// 	const item = JSON.parse(event.body);

// 	item.productId = uuidv1();

// 	databaseManager.saveItem(item).then(response => {
// 		console.log(response);
// 		sendResponse(200, item.productId, callback);
// 	}, (reject) =>{
// 		sendResponse(400, reject, callback);
// 	});
// }
function saveUser(event, callback) {
	const item = JSON.parse(event.body);

	item.userId = uuidv1();

	databaseManager.saveUser(item).then(response => {
		console.log(response);
		sendResponse(200, item.userId, callback);
	}, (reject) =>{
		sendResponse(400, reject, callback);
	});
}

// function getItem(event, callback) {
// 	const itemId = event.pathParameters.productId;

// 	databaseManager.getItem(itemId).then(response => {
// 		console.log(response);
// 		if(response)
// 			sendResponse(200, response, callback);
// 		else{
// 			sendResponse(404, "Please passa valid productId", callback);
// 		}

// 	},(reject) =>{
// 		sendResponse(400, reject, callback);
// 	});
// }


function getUser(event, callback) {
	const uId = event.pathParameters.uId;

	databaseManager.getUser(uId).then(response => {
		console.log(response);
		if(response)
			sendResponse(200, response, callback);
		else{
			sendResponse(404, "Please passa valid productId", callback);
		}

	},(reject) =>{
		sendResponse(400, reject, callback);
	});
}

function deleteItem(event, callback) {
	const itemId = event.pathParameters.productId;

	databaseManager.deleteItem(itemId).then(response => {
		sendResponse(200, 'DELETE ITEM', callback);
	}, (reject) => {
		sendResponse(400, reject, callback);
	});
}

function updateItem(event, callback) {
	const itemId = event.pathParameters.productId;

	const body = JSON.parse(event.body);
	
	databaseManager.updateItem(itemId, body).then(response => {
		console.log(response);
		sendResponse(200, response, callback);
	}, (reject) => {
		sendResponse(400, reject, callback);
	});
}

function sendResponse(statusCode, message, callback) {
	const response = {
		statusCode: statusCode,
		body: JSON.stringify(message)
	};
	callback(null, response);
}