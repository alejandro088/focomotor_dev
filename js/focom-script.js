
/*

	// DUDAS: https://developer.mozilla.org/es/docs/Web/API/FileReader/readAsDataURL
	var imageInputOne = document.querySelector("#focom-image-input-one"); // Toma el input image
	var imageChangeOne = document.querySelector("#focom-image-preview-one"); // Toma el img preview
	var imageDeleteOne = document.getElementById('focom-image-delete-one'); // Toma el botton para eliminar

	document.querySelector("#focom-button-input-one").addEventListener("click", function () {
	  imageInputOne.click(); // Cuando se le hace click al boton de ejecuta el input image 
	});

	imageDeleteOne.addEventListener("click", function () {
	 imageChangeOne.src = (' ');
	 imageDeleteOne.className = (' ');
	});

	
	imageInputOne.addEventListener("change", imagePreviewOne); // Cuando un archivo se suba en el input ejecuta la funcion imagePreview

	function imagePreviewOne() {
	  var imageObjectOne = this.files[0]; // Toma el objeto de imagen cargado
	  var imageReaderOne = new FileReader();
	  imageReaderOne.readAsDataURL(imageObjectOne);

	  imageReader.onload = function () {
	    var imageResultOne = imageReaderOne.result;
	    imageChangeOne.src = (imageResultOne);
	  };

	  // Crear el boton de eliminar
	  imageDeleteOne.className = "fas fa-times-circle focom-image-icon-delete text-danger";
	}


*/



var inputImage = document.getElementById('focom-input-image');
var inputButtom = document.getElementById('focom-input-buttom');
var imageIconDelete = document.getElementById('focom-image-icon-delete');
var imagePreview = document.getElementById('focom-image-preview');

inputButtom.addEventListener("click", function () {
	inputImage.click(); // Cuando se le hace click al boton de ejecuta el input image 
});

inputImage.addEventListener("change", previewImage);


function previewImage() {
	
	var image = inputImage.files[0];

	var imageReader = new FileReader;

	imageReader.onloadend = function () {
		imagePreview.src = imageReader.result;
	}

	if (image) {
		imageReader.readAsDataURL(image);
	} else {
		imagePreview.src = ' ';
	}

	imageIconDelete.className = "fas fa-times-circle focom-image-icon-delete text-danger";
	inputButtom.className = "d-none"
}

imageIconDelete.addEventListener("click", deleteImage);

function deleteImage () {
	imagePreview.src = ' ';
	imageIconDelete.className = ' ';
	inputButtom.className = ' ';
}





