// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		lactose: true,
		nuts: true,
        organic: true,
		price: 1.99
	},
	{
		name: "Pain avec des noix",
		lactose: true,
		nuts: false,
        organic: true,
		price: 2.35
	},
    {
		name: "Lait",
		lactose: false,
		nuts: true,
        organic: false,
		price: 2.49
	},
    {
		name: "Lait aux amandes",
		lactose: true,
		nuts: false,
        organic: true,
		price: 2.50
	},
    {
		name: "Avocats",
		lactose: true,
		nuts: false,
        organic: true,
		price: 2.99
	},
	{
		name: "Fromage",
		lactose: false,
		nuts: true,
        organic: false,
		price: 3.99
	},
    {
		name: "Chips",
		lactose: true,
		nuts: true,
        organic: false,
		price: 4.99
	},
	{
		name: "Viande hachée",
		lactose: false,
		nuts: true,
        organic: false,
		price: 10.00
	},
    {
		name: "Saumon",
		lactose: true,
		nuts: true,
        organic: true,
		price: 10.00
	},
    {
		name: "Côtes de veau",
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
        if((restriction[0] == "Lactose") && (restriction[1] == "Nuts")){
            if((restriction[0] == "Lactose") && (prods[i].lactose== true)){
                if((restriction[1] == "Nuts") && (prods[i].nuts== true)){
                    product_names.push(prods[i].name + ',' + prods[i].price);
                }
            }
        }
        else if((restriction[0] == "Lactose") && (restriction[1] == "Organic")){
            if((restriction[0] == "Lactose") && (prod[i].lactose== true)){
                if((restriction[1] == "Organic") && (prods[i].organic == true)){
                    product_names.push(prods[i].name + ', $' + prods[i].price);
                }
            }
        }
        else if((restriction[0] == "Nuts") && (restriction[1] == "Organic")){
            if((restriction[0] == "Nuts") && (prod[i].nut== true)){
                if((restriction[1] == "Organic") && (prods[i].organic == true)){
                    product_names.push(prods[i].name + ', $' + prods[i].price);
                }
            }
        }
        if(restriction.length == 3){
            if((restriction[0] == "Nuts") && (prods[i].nut== true)){
                if((restriction[1] == "Lactose") && (prods[i].lactose== true)){
                    if((restriction[2] == "Organic") && (prods[i].organic == true)){
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