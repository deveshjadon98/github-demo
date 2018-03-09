let data = [
	{
 		"id":"pizza",
 		"value":3
	},
	{
 		"id":"crust",
 		"value":4
	},
	{
 		"id":"toppings",
 		"value":2
	}
]

let keyArray = data.map(a => a.id);
let obj = keyArray.reduce((o, val) => { o[val] = 0; return o; }, {});

data.forEach((concept) => {
	obj[concept.id] = concept.value;
})
