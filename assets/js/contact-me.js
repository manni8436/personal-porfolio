const submitButton = document.getElementById('send');
const errorModal = document.getElementById('errorModal');

window.onload = function sendForm() {
	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();

		// changes the button text to "Sending..."
		submitButton.innerText = "Sending...";

		const serviceID = 'service_2cdva59';
		const templateID = 'template_txnntph';

		// sendForm values from your emailjs account
		emailjs.sendForm(serviceID, templateID, "#contact-form")
			.then((response) => {
				// changes the button text to "Message Sent Successfully!"
				submitButton.innerText = "Message Sent Successfully!";
				// reset the form after sending the message
				document.getElementById('contact-form').reset();
				setTimeout(() => {
					// changes the button text back to "Send"
					submitButton.innerText = "Send";
				}, 3000);
			}).catch((error) => {
				if(error) {
				// changes the button text to "Message Failed to Send"
				submitButton.innerText = "Message Failed to Send!";
				// show error modal
				errorModal.style.display = "block";
				setTimeout(() => {
					// changes the button text back to "Send"
					submitButton.innerText = "Send";
				}, 3000);
				} else {
					errorModal.style.display = "none";
				}
			});
	});
}

// close error modal
errorModal.addEventListener('click', function () {
	errorModal.style.display = "none";
});
