'use strict';

const AWS = require('aws-sdk');
let dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'inkProductsTable';
const USER_Table = 'userTable'

module.exports.initializateDynamoClient = newDynamo => {
	dynamo = newDynamo;
};

module.exports.saveItem = item => {
	const params = {
		TableName: TABLE_NAME,
		Item: item
	};

	return dynamo
		.put(params)
		.promise()
		.then((result) => {
			return item;
		}, (error) => {
			return error;
		});
};


module.exports.saveUser = item => {
	const params = {
		TableName: USER_Table,
		Item: item
	};

	return dynamo
		.put(params)
		.promise()
		.then((result) => {
			return item;
		}, (error) => {
			return error;
		});
};
module.exports.getItem = itemId => {
	const params = {
		Key: {
			productId: itemId
		},
		TableName: TABLE_NAME
	};

	return dynamo
		.get(params)
		.promise()
		.then((result) => {
			return result.Item;
		}, (error) => {
			return error;
		});
};


module.exports.getUser = uId => {
	const params = {
		Key: {
			userId: uId
		},
		TableName: USER_Table
	};

	return dynamo
		.get(params)
		.promise()
		.then((result) => {
			return result.Item;
		}, (error) => {
			return error;
		});
};

module.exports.deleteItem = itemId => {
	const params = {
		Key: {
			productId: itemId
		},
		TableName: TABLE_NAME
	};

	return dynamo.delete(params).promise();
};

module.exports.updateItem = (itemId, item) => {
	
	let vbl = "x";
	let adder = "y";
	let updateexp = 'set ';
	let itemKeys =  Object.keys(item);
	let expattvalues = {};

	for (let i = 0; i < itemKeys.length; i++) {
		vbl = vbl+adder;

		if((itemKeys.length-1)==i)
			updateexp += itemKeys[i] + ' = :'+ vbl;
		else
			updateexp += itemKeys[i] + ' = :'+ vbl + ", ";

		expattvalues[":"+vbl] = item[itemKeys[i]];
	}

	console.log("update expression and expressionAttributeValues");
	console.log(updateexp, expattvalues);

	const params = {
		TableName: TABLE_NAME,
		Key: {
			productId: itemId
		},
		ConditionExpression: 'attribute_exists(productId)',
		UpdateExpression: updateexp,
		ExpressionAttributeValues: expattvalues,
		ReturnValues: 'ALL_NEW'
	};

	return dynamo
		.update(params)
		.promise()
		.then(response => {
			return response.Attributes;
		}, (error) => {
			return error;
		});
};