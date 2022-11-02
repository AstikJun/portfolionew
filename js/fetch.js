
	function loadData() {  
	fetch('https://dog.ceo/api/breeds/image/random')
	.then((response) => response.json())
	.then((data) => {
		console.log(data); 
		document.getElementById("data").innerHTML = data.message;
		document.getElementById("doggy").src = data.message;
	});
	}
