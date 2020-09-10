// En restablecer.html, cambiar la pagina cuando se clickea el boton "Restablecer mi contraseña"

var resetPassButton = document.getElementById('focom-resetPass-button');

resetPassButton.addEventListener('click', function(){
	document.getElementById('focom-resetPass-restore').className = ('d-none');
	document.getElementById('focom-resetPass-sendMail').className = (' ');

});






    /* Este codigo hace que el navbar mobile desaparezca al hacer
    scroll abajo y aparezca al subir (filter se usa en la pagina de listados)*/
    /* BEGIN */

    var filters = document.getElementById('focom-mobile-navbar-filters');
    let scrollUbication = window.pageYOffset;
    window.onscroll = function (){
      let scrollDisplacement = window.pageYOffset;
      if ((scrollUbication) >= scrollDisplacement) {
        document.getElementById('focom-mobile-navbar').style.top = '0';

        if (filters != null) {
        	filters.style.top = '0';
        	document.getElementById('focomFiltersCollapse').style.top = '100px';
        } 
      }else {
        document.getElementById('focom-mobile-navbar').style.top = '-56.08px';

        if (filters != null) {
        	filters.style.top = '-56.08px';
        	document.getElementById('focomFiltersCollapse').style.top = '43.92px';
        } 
      } 
      scrollUbication = scrollDisplacement;
    }
   
   
    /* END */

    var iconSearch = document.getElementById('focom-nav-mobile-icon-search');
    var inputSearch = document.getElementById('focom-nav-mobile-input-search');
    console.log(iconSearch);
    console.log(inputSearch);


	iconSearch.addEventListener("click", function () {
		inputSearch.click(); // Cuando se le hace click al boton de ejecuta el input image 
	});

	inputSearch.addEventListener("click", searchMobile);

	function searchMobile() {
		document.getElementById('focom-nav-mobile-logo-search').style.display = 'none';
		document.getElementById('focom-nav-mobile-icon-search').style.display = 'none';
		document.getElementById('focom-nav-mobile').style.display = 'none';

		document.getElementById('focom-nav-arrowback').style.display = 'block';
		document.getElementById('focom-nav-mobile-input-search').style.display = 'block';

		inputSearch.focus();	
	}

	var arrowBack =	document.getElementById('focom-nav-arrowback');
	arrowBack.addEventListener("click", backSearch);

	function backSearch() {
		document.getElementById('focom-nav-mobile-logo-search').style.display = 'block';
		document.getElementById('focom-nav-mobile-icon-search').style.display = 'block';
		document.getElementById('focom-nav-mobile').style.display = 'block';

		document.getElementById('focom-nav-arrowback').style.display = 'none';
		document.getElementById('focom-nav-mobile-input-search').style.display = 'none';	
	}



function resetImages() {

	var resetImage1 = document.getElementById('slide1');
	if (resetImage1 != null) {
		resetImage1.className = ('carousel-item');
	};
	var resetImage2 = document.getElementById('slide2');
	if (resetImage2 != null) {
		resetImage2.className = ('carousel-item');
	};
	var resetImage3 = document.getElementById('slide3');
	if (resetImage3 != null) {
		resetImage3.className = ('carousel-item');
	};
	var resetImage4 = document.getElementById('slide4');
	if (resetImage4 != null) {
		resetImage4.className = ('carousel-item');
	};
	var resetImage5 = document.getElementById('slide5');
	if (resetImage5 != null) {
		resetImage5.className = ('carousel-item');
	};


}

	slide1 = document.getElementById('image1');
	slide1.addEventListener("click", function() {
		resetImages();
		document.getElementById('slide1').classList.add('active');
	})

	slide2 = document.getElementById('image2');
	slide2.addEventListener("click", function() {
		resetImages();
		document.getElementById('slide2').classList.add('active');
	})

	slide3 = document.getElementById('image3');
	slide3.addEventListener("click", function() {
		resetImages();
		document.getElementById('slide3').classList.add('active');
	})

	slide4 = document.getElementById('image4');
	slide4.addEventListener("click", function() {
		resetImages();
		document.getElementById('slide4').classList.add('active');
	})

	slide5 = document.getElementById('image5');
	slide5.addEventListener("click", function() {
		resetImages();
		document.getElementById('slide5').classList.add('active');
	})

	document.getElementById('slide1').addEventListener('click', function(){
		resetFullImages();
		document.getElementById('fullImage1').classList.add('active');	
	})
	document.getElementById('slide2').addEventListener('click', function(){
		resetFullImages();
		document.getElementById('fullImage2').classList.add('active');		
	})
	document.getElementById('slide3').addEventListener('click', function(){
		resetFullImages();
		document.getElementById('fullImage3').classList.add('active');
	})
	document.getElementById('slide4').addEventListener('click', function(){
		resetFullImages();
		document.getElementById('fullImage4').classList.add('active');
	})
	document.getElementById('slide5').addEventListener('click', function(){
		resetFullImages();
		document.getElementById('fullImage5').classList.add('active');
	})



	function resetFullImages() {

		var resetFullImage1 = document.getElementById('fullImage1');
		if (resetFullImage1 != null) {
			resetFullImage1.className = ('carousel-item focomjsClose');
		};
		var resetFullImage2 = document.getElementById('fullImage2');
		if (resetFullImage2 != null) {
			resetFullImage2.className = ('carousel-item focomjsClose');
		};
		var resetFullImage3 = document.getElementById('fullImage3');
		if (resetFullImage3 != null) {
			resetFullImage3.className = ('carousel-item focomjsClose');
		};
		var resetFullImage4 = document.getElementById('fullImage4');
		if (resetFullImage4 != null) {
			resetFullImage4.className = ('carousel-item focomjsClose');
		};
		var resetFullImage5 = document.getElementById('fullImage5');
		if (resetFullImage5 != null) {
			resetFullImage5.className = ('carousel-item focomjsClose');
		};
	}


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

/*

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

*/




