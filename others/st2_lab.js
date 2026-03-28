let form = document.querySelector("form");
let emailInput = document.querySelector('input[type="text"]');
let phoneInput = document.querySelector('input[type="number"]');

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let email = emailInput.value;
  let phone = phoneInput.value;


  if (email === "") {
    alert("Email is required!");
    return;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Enter a valid email!");
    return;
  }

  if (phone === "") {
    alert("Phone number is required!");
    return;
  }

  if (phone.length < 10) {
    alert("Phone number must be at least 10 digits!");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});
