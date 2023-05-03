object = {"key":{"a":1,"b":[{},null,"Hello"]}}

// Iterate over object
for (var key in object) {
    var value = object[key];
    console.log(key + " = " + value);
}

Object.entries(object).forEach(([key, value]) => console.log(key + " = " + value));

Object.values(object).forEach(value => console.log(value));

Object.keys(object).forEach(key => console.log(key));