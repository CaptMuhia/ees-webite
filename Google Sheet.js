const scriptURL = 'https://script.google.com/macros/s/AKfycbyj9n2k8DS7O8RifP9pERBd8Igew8O9DPDpZudS9N30ls_0HMArY4hJZwpRQ17BfhAK6Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})