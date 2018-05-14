//-not_implemented //good //finisd
/*
	var customer = { name: "Foo" }
	var card = { amount: 7, product: "Bar", unitprice: 42 }
	var message = `Hello ${customer.name},
	want to buy ${card.amount} ${card.product} for
	a total of ${card.amount * card.unitprice} bucks?`
*/

if (N>2000000) break;//needed

var customer = { name: "Foo" }
var message = `Hello ${customer.name}!`
assert.equal(message, `Hello Foo!`)
