function gallery() {
  //Gallery
  const rowImages = document.querySelector(".row-images");
  function generateImgs() {
    for (let i = 0; i <= 7; i++) {
      rowImages.innerHTML += `
	 <div class="col-md-3 gallery__img mb-4 mb-md-0">
					  <figure>
						  <img class="gallery__img-item img-fluid " src="./img/work${
                i + 1
              }.jpg" alt="work">
						  <figcaption class="gallery__img-figcaption top-50 start-50 translate-middle">
								  <span class="gallery__img-span"><i class="icon-plus"></i></span>
						  </figcaption>
					  </figure>
				  </div>`;
    }
  }
  generateImgs();
}

module.exports = gallery;
