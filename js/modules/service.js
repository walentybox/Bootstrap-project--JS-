function service() {
  //Service block
  const serviceBlock = document.querySelector(".service-block");
  fetch("db.json")
    .then((data) => data.json())
    .then((res) => generateService(res.service));

  function generateService(data) {
    for (let i = 0; i <= data.length - 1; i++) {
      serviceBlock.innerHTML += `<div class="col-lg-4 col-md-6 col-xs-12">
						  <div class="service__item bg-light-subtle p-5 h-100">
							  <div class="service__icon d-inline-block rounded-circle p-4">
								  <i class="icon-${data[i].icon}"></i>
							  </div>
							  <div class="service__content">
								  <h4 class="h4 fw-bold py-3"><a class="text-decoration-none text-uppercase"
										  href="#">${data[i].title}</a></h4>
								  <p class="">${data[i].text}</p>
							  </div>
						  </div>`;
    }
  }
}

module.exports = service;
