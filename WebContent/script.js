let food = [];
let price = [];

function addToCart(fType, fPrice) {
	food.push(fType);
	price.push(fPrice);
}

function printCart() {
	let i;
	let total = 0;
	for (i = 0; i < price.length; i++) {
		total += price[i];
	}
	
	let finalCart = document.getElementById("finalCart");
	finalCart.innerHTML = "total: $" + total;
}

function printFoods() {
	let i;
	let total = 0;
	for (i = 0; i < food.length; i++) {
		total += food[i];
	}
	
	let foodCart = document.getElementById("foodCart");
	foodCart.innerHTML = "foods picked: " + total;
}

