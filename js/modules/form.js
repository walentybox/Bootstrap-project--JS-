function form() {
  //Form
  const formItem = document.querySelectorAll(".form__input");
  const formBtn = document.querySelector(".form__btn");
  const dataObj = {};
  formBtn.addEventListener("click", sendForm);

  async function sendForm(e) {
    e.preventDefault();

    formItem.forEach((item) => (dataObj[item.name] = item.value));

    let error = formValidate(formItem);

    if (error === 0) {
      clearLocaStorage();
      try {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataObj),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      } catch (err) {
        console.error(err);
      }
    }
  }

  function formValidate() {
    let error = 0;
    const formReq = document.querySelectorAll(".input__data");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("email__data")) {
        if (testEmail(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("__error");
    input.classList.add("__error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("__error");
    input.classList.remove("__error");
  }

  function testEmail(input) {
    const reg =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return !reg.test(input.value);
  }

  //Form (LocalStorage Data)

  const form = document.querySelectorAll(".form__input");

  function clearLocaStorage() {
    localStorage.clear();
    for (let i = 0; i <= form.length - 1; i++) {
      form[i].value = "";
    }
  }

  function inputEvent() {
    for (let i = 0; i <= form.length - 1; i++) {
      form[i].addEventListener("input", saveLocalStorage);
    }
  }

  function saveLocalStorage() {
    localStorage.setItem(this.name, this.value);
  }

  function checkLocalStorage() {
    for (let i = 0; i <= form.length - 1; i++) {
      let name = form[i].name;

      form[i].value = localStorage.getItem(name);
    }
  }

  inputEvent();
  checkLocalStorage();

  // Focus and Blur in Form
  const mainForm = document.forms.main;

  function addFocus() {
    let mainFormInputPlaceholder;
    for (let i = 0; i <= mainForm.length - 1; i++) {
      if (mainForm[i].classList.contains("form__input")) {
        mainForm[i].addEventListener("focus", function () {
          mainFormInputPlaceholder = mainForm[i].placeholder;
          mainForm[i].placeholder = "";
        });
        mainForm[i].addEventListener("blur", function () {
          mainForm[i].placeholder = mainFormInputPlaceholder;
        });
      }
    }
  }

  addFocus();
}

module.exports = form;
