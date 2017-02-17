var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
console.log(text);
var animal = 'Zielone słonie';
var animal = animal.toUpperCase();
console.log(animal);


var text = text.replace(text.substr(0, 6), animal);
text = text.substr(0, text.length / 2);


console.log(text);
