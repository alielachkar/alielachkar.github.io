// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactose: true,
		nuts: true,
        organic: true,
		price: 1.99
	},
	{
		name: "bread with nuts",
		lactose: true,
		nuts: false,
        organic: true,
		price: 2.35
	},
    {
		name: "milk",
		lactose: false,
		nuts: true,
        organic: false,
		price: 2.49
	},
    {
		name: "almond milk",
		lactose: true,
		nuts: false,
        organic: true,
		price: 2.50
	},
    {
		name: "avocado",
		lactose: true,
		nuts: false,
        organic: true,
		price: 2.99
	},
	{
		name: "cheese",
		lactose: false,
		nuts: true,
        organic: false,
		price: 3.99
	},
    {
		name: "chips",
		lactose: true,
		nuts: true,
        organic: false,
		price: 4.99
	},
	{
		name: "ground meat",
		lactose: false,
		nuts: true,
        organic: false,
		price: 10.00
	},
    {
		name: "salmon",
		lactose: true,
		nuts: true,
        organic: true,
		price: 10.00
	},
    {
		name: "ribs",
		lactose: true,
		nuts: true,
        organic: false,
		price: 12.49
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price
function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose") && (prods[i].lactose == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
		else if ((restriction == "Nuts") && (prods[i].nuts == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
        else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name + ', $' + prods[i].price);
		}
	}
	return product_names;
}

function restrictMutlipleListProducts(prods, restriction) {
    let product_names = [];
    for (let i=0; i<prods.length; i+=1) {
        if((restriction[0].value == "Lactose") && (restriction[1].value == "Nuts")){
            if((restriction[0].value == "Lactose") && (prods[i].lactose== true)){
                if((restriction[1].value == "Nuts") && (prods[i].nuts== true)){
                    product_names.push(prods[i].name + ',' + prods[i].price);
                }
            }
        }
        else if((restriction[0].value == "Lactose") && (restriction[1].value == "Organic")){
            if((restriction[0].value == "Lactose") && (prod[i].lactose== true)){
                if((restriction[1].value == "Organic") && (prods[i].organic == true)){
                    product_names.push(prods[i].name + ', $' + prods[i].price);
                }
            }
        }
        else if((restriction[0].value == "Nuts") && (restriction[1].value == "Organic")){
            if((restriction[0].value == "Nuts") && (prod[i].nut== true)){
                if((restriction[1].value == "Organic") && (prods[i].organic == true)){
                    product_names.push(prods[i].name + ', $' + prods[i].price);
                }
            }
        }
        if(restriction.length == 3){
            if((restriction[0].value == "Nuts") && (prods[i].nut== true)){
                if((restriction[1].value == "Lactose") && (prods[i].lactose== true)){
                    if((restriction[2].value == "Organic") && (prods[i].organic == true)){
                        product_names.push(prods[i].name + ', $' + prods[i].price);
                    }
                }
            }
        }
        else if(restriction == "None"){
            product_names.push(prods[i].name + ', $' + prods[i].price);
        }
    }
    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}