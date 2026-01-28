// Simple contact form handler (no backend) - shows success message
document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // get values (optional validation already via required)
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      // show alert
      var alertBox = document.getElementById('formAlert');
      alertBox.classList.remove('d-none', 'alert-danger');
      alertBox.classList.add('alert-success');
      alertBox.innerText = 'Thank you, ' + (name || '') + '! Your message has been received. We will contact you soon.';
      contactForm.reset();
    });
  }

  // Gallery modal: set image src when thumbnail clicked
  var thumbs = document.querySelectorAll('.gallery-thumb');
  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var src = thumb.getAttribute('data-src') || thumb.src;
      var modalImg = document.getElementById('galleryModalImg');
      if (modalImg) modalImg.src = src;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    function clearErrors() {
        document.getElementById("nameError").innerText = "";
        document.getElementById("emailError").innerText = "";
        document.getElementById("phoneError").innerText = "";
        document.getElementById("messageError").innerText = "";
    }

    function showError(id, msg) {
        document.getElementById(id).innerText = msg;
    }

    /* ---------- NAME ---------- */
    nameInput.addEventListener("input", function () {
        clearErrors();

        // only letters
        this.value = this.value.replace(/[^a-zA-Z\s]/g, "");

        if (this.value.length < 3 || this.value.length > 20) {
            showError("nameError", "Name must be 3 to 20 letters only");
        }
    });

    /* ---------- EMAIL ---------- */
    emailInput.addEventListener("input", function () {
        clearErrors();

        // . ke baad 3–6 letters compulsory
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/;

        if (!emailRegex.test(this.value)) {
            showError(
                "emailError",
                "Invalid email (only 3 letters are allowed after . )"
            );
        }
    });

    /* ---------- PHONE ---------- */
    phoneInput.addEventListener("input", function () {
        clearErrors();

        // sirf digits
        this.value = this.value.replace(/\D/g, "");

        // max 10 digits
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }

        if (this.value.length < 10) {
            showError("phoneError", "Phone number must be exactly 10 digits");
        }
    });

    /* ---------- MESSAGE ---------- */
    messageInput.addEventListener("input", function () {
        clearErrors();

        if (this.value.trim().length < 2) {
            showError("messageError", "Message must be at least 2 letters");
        }
    });

    /* ---------- FORM SUBMIT ---------- */
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors();

        let valid = true;

        if (nameInput.value.length < 3 || nameInput.value.length > 20) {
            showError("nameError", "Name must be 3–20 letters only");
            valid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,6}$/;
        if (!emailRegex.test(emailInput.value)) {
            showError("emailError", "Invalid email format");
            valid = false;
        }

        if (phoneInput.value.length !== 10) {
            showError("phoneError", "Phone number must be 10 digits");
            valid = false;
        }

        if (messageInput.value.trim().length < 2) {
            showError("messageError", "Message must be at least 2 letters");
            valid = false;
        }

        if (valid) {
            alert("We are contanct as soon!");
            form.reset();
        }
    });

});
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload stop

  let valid = true;

  // (yahan aapka existing validation hoga)

  if (valid) {
    showPopup();
    form.reset();
  }
});

function showPopup() {
  const popup = document.getElementById("popup");
  const content = popup.querySelector(".popup-content");

  popup.style.display = "flex";

  setTimeout(() => {
    content.style.animation = "fadeSlideOut 0.4s forwards";

    setTimeout(() => {
      popup.style.display = "none";
      content.style.animation = "fadeSlideIn 0.5s forwards";
    }, 400);

  }, 3000);
}
 




