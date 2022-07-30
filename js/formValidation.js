const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
const userEmail = document.forms.detailForm.email;

const errorMessage = document.getElementById('errorMsg');

const contactSubmitButton = document.forms.detailForm.btnSubmit;

contactSubmitButton.addEventListener('click', (event) => {
    if (!userEmail.value.match(emailRegex)) {
      event.preventDefault();
      errorMessage.textContent = 'Invalid! Enter email-address in lowercase letters';
    }
  });
  
