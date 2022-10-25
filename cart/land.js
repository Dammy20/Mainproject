function goTo(params) {
	params.scrollIntoView({
		behaviour: "smooth",
	});
}
const code = "10001"
let enter = document.getElementById("input-admin")
let add = localStorage.setItem("code", JSON.stringify(code));
function submit() {
	if (enter.value == code) {
		location.href = "./upload.html"
		enter.value = ''
	} else {
		alert('you are not an admin')
		enter.value = ''
	}
	
	
}
 function log(){
    location.replace("./signwe.html")
  }
