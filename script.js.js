const form = document.getElementById('form');
const username = document.getElementById('name');

const email = document.getElementById('email');
const tel = document.getElementById('phone');
const messageText = document.getElementById('text');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const lastNameValue = username.value.trim();
	const emailValue = email.value.trim();
	const telValue = tel.value.trim();
	const messageTextValue = messageText.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Please enter your name');
	} else {
		setSuccessFor(username);
	}
	
	
	
	if(emailValue === '') {
		setErrorFor(email, 'Please enter your email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(telValue === '') {
		setErrorFor(tel, 'Please enter your number');
	} else {
		setSuccessFor(tel);
	}
	
	if(messageTextValue === '') {
		setErrorFor(messageText, 'Please enter your message');
	} else{
		setSuccessFor(messageText);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control-test error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control-test success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













