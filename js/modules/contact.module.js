export class Contact {
  constructor() {
    this.contact();
  }
  contact() {
    document.getElementById("contact").addEventListener("click", () => {
      document.getElementById("instructions").classList.add("d-none");
      document.getElementById("homePage").classList.remove("d-none");
      let contactBox = `
      <div class="col-12 vh-100 row align-items-center justify-content-center">
        <div class="col-12 row gx-4">
          <div class="col-md-6">
            <input id="nameInput" type="text" class="form-control" placeholder="Enter Your Name">
            <div id="nameAlert" class="alert alert-danger w-100 mt-2 p-2 opacity-0">
              Special characters and numbers not allowed
            </div>
          </div>
          <div class="col-md-6">
            <input id="emailInput" type="email" class="form-control "
              placeholder="Enter Your Email">
            <div id="emailAlert" class="alert alert-danger w-100 mt-2 p-2 opacity-0">
              Email not valid *exemple@yyy.zzz
            </div>
          </div>
          <div class="col-md-6">
            <input id="phoneInput" type="text" class="form-control "
              placeholder="Enter Your Phone">
            <div id="phoneAlert" class="alert alert-danger w-100 mt-2 p-2 opacity-0">
              Enter valid Phone Number
            </div>
          </div>
          <div class="col-md-6">
            <input id="ageInput" type="number" class="form-control " placeholder="Enter Your Age">
            <div id="ageAlert" class="alert alert-danger w-100 mt-2 p-2 opacity-0">
              Enter valid age between 12 and 75
            </div>
          </div>
          <div class="col-md-6">
            <input id="passwordInput" type="password" class="form-control "
              placeholder="Enter Your Password">
            <div id="passwordAlert" class="alert alert-danger w-100 mt-2 p-2 opacity-0">
              Enter valid password *Minimum eight characters, at least one letter and one number:*
            </div>
          </div>
          <div class="col-md-6">
            <input id="repasswordInput" type="password" class="form-control "
              placeholder="Repassword">
            <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 p-2 opacity-0">
              Enter valid repassword
            </div>
          </div>
          <div class="col-12 text-center">
            <button id="submitBtn" class="btn btn-outline-danger px-2 mt-3 disabled">Submit</button>
          </div>
        </div>
      </div>
      `;
      document.getElementById("show").innerHTML = contactBox;
      const nameInput = document.getElementById("nameInput");
      const nameAlert = document.getElementById("nameAlert");
      const emailInput = document.getElementById("emailInput");
      const emailAlert = document.getElementById("emailAlert");
      const phoneInput = document.getElementById("phoneInput");
      const phoneAlert = document.getElementById("phoneAlert");
      const ageInput = document.getElementById("ageInput");
      const ageAlert = document.getElementById("ageAlert");
      const passwordInput = document.getElementById("passwordInput");
      const passwordAlert = document.getElementById("passwordAlert");
      const repasswordInput = document.getElementById("repasswordInput");
      const repasswordAlert = document.getElementById("repasswordAlert");
      const submitBtn = document.getElementById("submitBtn");
      this.valid();
    });
  }
  valid() {
    const nameRegex = /^[a-zA-Z]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+2|02)?01[0125][0-9]{8}$/;
    const ageRegex = /^(1[2-9]|[2-5][0-9]|7[0-5])$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    nameInput.addEventListener("input", () => {
      let nameValid = nameRegex.test(nameInput.value);
      if (nameValid) {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        nameAlert.classList.add("opacity-0");
      } else {
        nameInput.classList.remove("is-valid");
        nameInput.classList.add("is-invalid");
        nameAlert.classList.remove("opacity-0");
      }
      this.submit();
    });
    emailInput.addEventListener("input", () => {
      let emailValid = emailRegex.test(emailInput.value);
      if (emailValid) {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        emailAlert.classList.add("opacity-0");
      } else {
        emailInput.classList.remove("is-valid");
        emailInput.classList.add("is-invalid");
        emailAlert.classList.remove("opacity-0");
      }
      this.submit();
    });
    phoneInput.addEventListener("input", () => {
      let phoneValid = phoneRegex.test(phoneInput.value);
      if (phoneValid) {
        phoneInput.classList.add("is-valid");
        phoneInput.classList.remove("is-invalid");
        phoneAlert.classList.add("opacity-0");
      } else {
        phoneInput.classList.remove("is-valid");
        phoneInput.classList.add("is-invalid");
        phoneAlert.classList.remove("opacity-0");
      }
      this.submit();
    });
    ageInput.addEventListener("input", () => {
      let ageValid = ageRegex.test(ageInput.value);
      if (ageValid) {
        ageInput.classList.add("is-valid");
        ageInput.classList.remove("is-invalid");
        ageAlert.classList.add("opacity-0");
      } else {
        ageInput.classList.remove("is-valid");
        ageInput.classList.add("is-invalid");
        ageAlert.classList.remove("opacity-0");
      }
      this.submit();
    });
    passwordInput.addEventListener("input", () => {
      let passwordValid = passwordRegex.test(passwordInput.value);
      if (passwordValid && repasswordInput.value == passwordInput.value) {
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        passwordAlert.classList.add("opacity-0");
      } else if (passwordValid) {
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid");
        passwordAlert.classList.add("opacity-0");
      } else {
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.add("is-invalid");
        passwordAlert.classList.remove("opacity-0");
      }
      this.submit();
    });
    repasswordInput.addEventListener("input", () => {
      let repasswordValid = passwordRegex.test(repasswordInput.value);
      if (repasswordValid && repasswordInput.value == passwordInput.value) {
        repasswordInput.classList.add("is-valid");
        repasswordInput.classList.remove("is-invalid");
        repasswordAlert.classList.add("opacity-0");
      } else {
        repasswordInput.classList.remove("is-valid");
        repasswordInput.classList.add("is-invalid");
        repasswordAlert.classList.remove("opacity-0");
      }
      this.submit();
    });
  }
  submit() {
    const nameRegex = /^[a-zA-Z]{3,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+2|02)?01[0125][0-9]{8}$/;
    const ageRegex = /^(1[2-9]|[2-5][0-9]|7[0-5])$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let nameValid = nameRegex.test(nameInput.value);
    let emailValid = emailRegex.test(emailInput.value);
    let phoneValid = phoneRegex.test(phoneInput.value);
    let ageValid = ageRegex.test(ageInput.value);
    let passwordValid = passwordRegex.test(passwordInput.value);
    let repasswordValid = passwordRegex.test(repasswordInput.value);
    if (
      nameValid &&
      emailValid &&
      phoneValid &&
      ageValid &&
      passwordValid &&
      repasswordValid &&
      repasswordInput.value == passwordInput.value
    ) {
      submitBtn.classList.remove("disabled");
      submitBtn.addEventListener("click", () => {
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        ageInput.value = "";
        passwordInput.value = "";
        repasswordInput.value = "";
        nameInput.classList.remove("is-valid");
        nameInput.classList.remove("is-invalid");
        emailInput.classList.remove("is-valid");
        emailInput.classList.remove("is-invalid");
        phoneInput.classList.remove("is-valid");
        phoneInput.classList.remove("is-invalid");
        ageInput.classList.remove("is-valid");
        ageInput.classList.remove("is-invalid");
        passwordInput.classList.remove("is-valid");
        passwordInput.classList.remove("is-invalid");
        repasswordInput.classList.remove("is-valid");
        repasswordInput.classList.remove("is-invalid");
        submitBtn.classList.add("disabled");
      });
    } else {
      submitBtn.classList.add("disabled");
    }
  }
}
