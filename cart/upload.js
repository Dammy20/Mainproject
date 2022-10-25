


	let file = document.getElementById("file");
	let food = document.getElementById("food");
	let rating = document.getElementById("rating");
	let description = document.getElementById("description");
	let imagearray = [];
	let added = JSON.parse(localStorage.getItem("image"));

	function uploadd() {
		// if (imagearray != null) {
		// 	imagearray = added;
		// }
		console.log(file.files[0]);
		let filereader = new FileReader();
		filereader.readAsDataURL(file.files[0]);
		filereader.onload = (a) => {
			// console.log(a);
			// console.log(filereader.result);
			localStorage.setItem("picc", JSON.stringify(filereader.result));
		};
		let getpic = JSON.parse(localStorage.getItem("picc"));
		console.log(getpic);
let objj = {
			image: getpic,
			food: food.value,
			rating: rating.value,
			description: description.value,
		}
		imagearray.push(objj)
		// imagearray.push(objj);

		localStorage.setItem("image", JSON.stringify(imagearray));

		location.href = "../food.html";
	}

