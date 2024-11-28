function experts() {
  //Experts block

  const priceBox = document.querySelector(".price__box");

  fetch("db.json")
    .then((data) => data.json())
    .then((res) => priceBlock(res.price));

  function priceBlock(price) {
    for (let i = 0; i <= price.length - 1; i++) {
      priceBox.innerHTML += `<div class="col-xs-12 col-md-6 col-lg-3 price__item text-center">
						           <div class="price__value py-5 ">
							        <div class="price__head p-5 rounded-circle mx-auto">
								     <h2 class="price__dollar fw-bold"><sup>$</sup>${price[i].price}</h2>
								     <p class="price__month"><small>/month</small></p>
							        </div>
							        <p class="price__text pt-5 d-inline-block px-5">${price[i].description}</p>
							        <h4 class="fw-bold pb-4 text-capitalize">${price[i].package}</h4>
							        <ul>
								     <li>${price[i].projects} Project</li>
								     <li>${price[i].storage} GB Storage</li>
								     <li>${price[i].users} Users</li>
								     <li>${price[i].bandwidth} GB Bandwidth</li>
							        </ul>
							        <a class="price__link text-decoration-none d-block p-3 m-4" href="#">Get Started Now</a>
						           </div>
					              </div>`;
    }
  }
}

module.exports = experts;
