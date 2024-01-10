const image = [
	{
		imagelink: "../cart/image/sp11.jpg",
		name: "Wankant",
		rate: "image/rating.jpg",
		price: 4000,
		category: "african",
		
		
	},
	{
		imagelink: "../cart/image/sp6.jpg",
		name: "Cumber sauch",
		rate: "image/rating.jpg",
		price: 3500,
		category: "breakfast",
		
		
	},
	{
		imagelink: "../cart/image/sp8.jpg",
		name: "Wankant",
		rate: "image/rating.jpg",
		price: 4000,
		category: "african",
		
		
	},
	{
		imagelink: "../cart/image/af1.jpg",
		name: "Efo Elegusi",
		price: 7500,
		category: "African",
	},
	{
		imagelink: "../cart/image/af2.jpg",
		name: "Chicken periperi",
		price: 8000,
		category: "dinner",
	},
	{
		imagelink: "../cart/image/af4.jpg",
		name: "Spagang",
		price: 9500,
		category: "breakfast",
	},
	{
		imagelink: "../cart/image/af5.jpg",
		name: "Assorted beef",
		price: 10000,
		category: "dinner",
	},
	{
		imagelink: "../cart/image/af6.jpg",
		name: "Spagenitin",
		price: 6700,
		category: "breakfast",
	},
	{
		imagelink: "../cart/image/af7.jpg",
		name: "Lensh Rice",
		price: 5000,
		category: "dinner",
	},
	{
		imagelink: "../cart/image/af8.jpg",
		name: "Bashdash",
		price: 6000,
		category: "breakfast",
	},
	{
		imagelink: "../cart/image/it8.jpg",
		name: "spanish",
		price: 4000,
		category: "breakfast",
	},
	{
		imagelink: "../cart/image/it4.jpg",
		name: "Nashy",
		rate: "image/sp10.jpg",
		price: 9000,
		category: "african",
		
	},
	{
		imagelink: "../cart/image/sp8.jpg",
		name: "Quangy",
		price: 3000,
		category: "breakfast",
	},
	{
		imagelink: "../cart/image/it4.jpg",
		name: "Danshiniry",
		rate: "image/rating.jpg",
		price: 2500,
		category: "african",
		
	},
	{
		imagelink: "../cart/image/p3.jpg",
		name: "Ancept",
		price: 9000,
		category: "dinner",
	},
	{
		imagelink: "../cart/image/photo2.jpg",
		name: "Africano",
		rate: "image/rating.jpg",
		price: 7500,
		category: "african",
		
	},
	{
		imagelink: "../cart/image/it3.jpg",
		rate: "image/rating.jpg",
		name: "Madekensoni",
		price: 12500,
		category: "african",
	},
	{
		imagelink: "../cart/image/sp4.jpg",
		name: "Abakensh",
		rate: "./image/rating.jpg",
		price: 14500,
		category: "dinner",
	},
	{
		imagelink: "../cart/image/sp5.jpg",
		name: "Raketos",
		rate: "image/rating.jpg",
		price: 11000,
		category: "african",
		
		
	},
	{
		imagelink: "../cart/image/p5.jpg",
		name: "Minced",
		rate: "image/rating.jpg",
		price: 4000,
		category: "dinner",
		
		
	},
	
		
];
function getimage() {
	document.getElementById("row").innerHTML = "";
	image.map((value, index) => {
		// let show = document.querySelector(".card_row")
		document.getElementById("row").innerHTML += `<div class="card ">
            <img id="imgid" src="${value.imagelink}" alt="">
            <p id="titleid">${value.name}</p>
        
            <p id="priceid">₦ ${value.price}</p>
            <button onclick="addtocart(${index})">Add to Cart</button>
        </div>
    `;
		console.log(value.imagelink);
	});
}

function foodType(mealType) {
	const foods = image.filter((individualFood) => {
		return individualFood.category?.toLowerCase() == mealType.toLowerCase();
	});

	document.getElementById("row").innerHTML = "";

	foods.forEach((value, index) => {
		document.getElementById("row").innerHTML += `<div class="card ">
            <img id="imgid" src="${value.imagelink}" alt="">
            <p id="titleid">${value.name}</p>
            <p id="priceid">${value.price}</p>

            <button onclick="addtocart(${index})">Add to Cart</button>
        </div>
    `;

		console.log(value.imagelink);
	});
}
getimage();
let display = document.getElementById("display");

let cart = [];
let sum = [];

function addtocart(index) {
	cart.push(image[index]);
	display.innerHTML = cart.length;
	console.log(cart);
	localStorage.setItem("cartList", JSON.stringify(cart));
}

function cartpage() {
	location.href = "./cartreal.html";
}
function button() {
	location.href = "./tablereserve.html"
}
function reserve() {
	location.href = "./tablereserve.html"
}
// const added = [
// 	{
// 		imagelink: "image/af1.jpg",
// 		name: "Efo Elegusi",
// 		price: "$200",
// 	},
// 	{
// 		imagelink: "image/af2.jpg",
// 		name: "Chicken periperi",
// 		price: "$100",
// 	},
// ];

// function dinner() {
// 	added.map((value, index) => {
// 		// let show = document.querySelector(".card_row")
// 		document.getElementById("row").innerHTML += `<div class="card ">
//             <img id="imgid" src="${value.imagelink}" alt="">
//             <p id="titleid">${value.name}</p>
//             <p id="priceid">${value.price}</p>
//             <button onclick="addtocart(${index})">Add to Cart</button>
//         </div>
//     `;
// 		console.log(value.imagelink);
// 	});
// }

function download() {
	let added = JSON.parse(localStorage.getItem("image"));
	
	
	console.log(added);

	for (let index = 0; index < added.length; index++) {
		const element = added[index];

		console.log(element.food);
		document.getElementById("row").innerHTML += `<div class="card ">
             <img id="imgid" src="${element.image}" alt="">
             <p id="titleid">${element.food}</p>
             <p id="priceid">${element.description}</p>
			 <button onclick="addtocart(${index})">Add to Cart</button>
         </div>
     `;
	}

	// added.map((value, index) =>{
	//  document.getElementById("row").innerHTML +=
	//      `<div class="card ">
	//          <img id="imgid" src="${value.image}" alt="">
	//          <p id="titleid">${value.food}</p>
	//          <p id="priceid">${value.description}</p>
	//          <button onclick="addtocart(${index})">Add to Cart</button>
	//      </div>
	//  `

	// })
}
download();
function buttonn() {
	location.replace("./signup.html")
}
function buttond() {
	location.replace("./signwe.html")
}
function onMenuClick() {
	//     const navToggle = document.getElementById('#navbar_toggle');
	//     console.log('i see you')
	//     // const showNav = "showNav"
	//     const links =
	//         document.querySelectorAll('.nav_links')        // const links = document.getElementById('#div-span');
	//     links.classList.toggle('showNav')
	// }

	// navToggle.addEventListener('click', function () {
	//     links.classList.toggle("showNav");
	// })

	const burger = document.getElementById('navbar_toggle');
	const nav = document.querySelector('.divSpan');
	const navLinks = document.querySelectorAll('divSpan li');

	burger.addEventListener('click', function () {
		console.log('i see you');
		nav.classList.toggle('showNav');
	});
	
}
