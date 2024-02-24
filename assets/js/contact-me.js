const submitButton = document.getElementById('send');

window.onload = function sendForm() {
	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();

		// changes the button text to "Sending..."
		submitButton.innerText = "Sending...";

		// sendForm values from your emailjs account
		emailjs.sendForm("service_2cdva59", "template_txnntph", "#contact-form").then(
			(response) => {
				// changes the button text to "Message Sent Successfully!"
				submitButton.innerText = "Message Sent Successfully!";
				// reset the form after sending the message
				document.getElementById('contact-form').reset();
				setTimeout(() => {
					// changes the button text back to "Send"
					submitButton.innerText = "Send";
					console.log('SUCCESS!', response.status, response.text);
				}, (error) => {
					console.log('FAILED...', error);
				});
			});
	});
}