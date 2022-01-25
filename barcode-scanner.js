// The database
var db = {
  key1: {
	barcode: '2465',
	product: 'pen',
	stock: 10
  },
  key2: {
	barcode: '9729',
	product: 'ruler',
	stock: 5
  },
  key3: {
	barcode: '5779',
	product: 'eraser',
	stock: 2
  }
};

// Declare variables
var a, x, error_message;

// Read variables
a = '9729';
x = false;
error_message = 'Could not find barcode number ' + a + ' in the database';

// Search for variable a in database
for (var key in db) {
  if (a === db[key].barcode) {
	db[key].stock += 1;
	console.log(
	  'Added 1',
	  db[key].product,
	  'to database. Total amount:',
	  String(db[key].stock)
	);
	x = true;
  }
}

// Display error massage if variable a wasn't found in database
switch (x) {
  case false:
	console.log(error_message);
	break;
}