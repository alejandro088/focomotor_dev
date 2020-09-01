var input = document.querySelector("#file-input");

	document.querySelector("button").addEventListener("click", function () {
	  input.click();
	});

	input.addEventListener("change", preview);

	function preview() {
	  var fileObject = this.files[0];
	  var fileReader = new FileReader();
	  fileReader.readAsDataURL(fileObject);

	  fileReader.onload = function () {
	    var result = fileReader.result;
	    var img = document.querySelector("#preview");
	    img.setAttribute("src", result);


	    var focomImageDelete = document.getElementById('focom-image-delete');
	    focomImageDelete.className = "fas fa-times-circle fa-lg focom-image-delete text-danger";
	  };
	}
