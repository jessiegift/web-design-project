const images = document.querySelectorAll('.img-fluid');
const player = document.getElementById('player');

images.forEach(img => {
	img.addEventListener('mouseenter', () => {
		const soundSrc = img.getAttribute('data-voice'); // Use 'data-sound' here
		player.src = soundSrc;
		player.currentTime = 0;
		player.play().catch(e => console.log("Blocked by browser:", e));
		console.log("hello:");
	});
});

const franceimg = document.getElementById('fran');
const frantext = document.getElementById('bon');
franceimg.addEventListener('mouseenter', () => {
	frantext.style.opacity="1.0";
});
  
franceimg.addEventListener('mouseleave',() =>{
	frantext.style.opacity="0.0";
});
const romeimg = document.getElementById('rom');
const rometext = document.getElementById('italiano');
romeimg.addEventListener('mouseenter', () => {
	rometext.style.opacity="1.0";
});
  
romeimg.addEventListener('mouseleave',() =>{
	rometext.style.opacity="0.0";
});

const chinaimg = document.getElementById('chi');
const chinatext = document.getElementById('ninhao');
chinaimg.addEventListener('mouseenter', () => {
	chinatext.style.opacity="1.0";
});
  
chinaimg.addEventListener('mouseleave',() =>{
	chinatext.style.opacity="0.0";
});

const kenyaimg = document.getElementById('ken');
const kenyatext = document.getElementById('weche');
kenyaimg.addEventListener('mouseenter', () => {
	kenyatext.style.opacity="1.0";
});
  
kenyaimg.addEventListener('mouseleave',() =>{
	kenyatext.style.opacity="0.0";
});

const button = document.getElementById('submitbtn');
console.log(button);
button.addEventListener('click', () => {
	var atleastcheckabox = false;
	var nchecker = false;
	var isemailvalid = false;
	var languagedrop = false;
	var levelchecker = false;
	var ispasswordvalid = false;
	var ispassconfirmidentical=false;
	var alertMessage = "";
	
	const username = document.getElementById('lfname');
	const namechecker = /[`0123456789!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	nchecker = !namechecker.test(username.value);
	
	const useremail = document.getElementById('lemail');
	const emailchecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	isemailvalid = emailchecker.test(String(useremail.value).toLowerCase());
	
	//const Password = document.getElementById('pwd');
	//const conpasswrd = document.getElementById('psw-repeat');
	
	const password = document.getElementById('lpswd');
	const passwordChecker = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.-^*()%!]).{8,}/;
	
	const conpasswrd = document.getElementById('lcpswd')
	ispasswordvalid = passwordChecker.test(password.value);
	ispassconfirmidentical = password.value.localeCompare(conpasswrd.value) == 0;
	
	const languages = document.getElementById('language');
	if (languages.value != '-- Select a language --'){
		languagedrop = true;
	}
	
	const checkboxgroup = document.getElementById('reason').getElementsByTagName('input');
	console.log(checkboxgroup);
	for (let checkbox of checkboxgroup) {
		if (checkbox.checked){
			atleastcheckabox = true;
		}
	}
	
	const radiogroup = document.getElementById('levels').getElementsByTagName('input');
	for (let radio of radiogroup) {
		if (radio.checked){
			atleastcheckabox = true;
		}
	}

	if(nchecker == false) {
		alertMessage = alertMessage.concat("Name invalid.\n");
	}
	if(isemailvalid ==false) {
		alertMessage = alertMessage.concat("Email invalid.\n");
	}
	if(ispasswordvalid == false) {
		alertMessage = alertMessage.concat("Password invalid.\n");
	}
	if(ispassconfirmidentical == false) {
		alertMessage = alertMessage.concat("Password confirmation does not match.\n");
	}

	if(languagedrop == false) {
		alertMessage = alertMessage.concat("Must select a language option.\n");
	}
	if(atleastcheckabox == false) {
		alertMessage = alertMessage.concat("Must select a reason.\n");
	}
	if(levelchecker == false) {
		alertMessage = alertMessage.concat("Must select a level.");
	}
	
	if(alertMessage.length > 0){
		alert(alertMessage);
	}
	else{
		alert("signup successful");
	}
	
});
  
  
 const coachbutton = document.getElementById('subtmitBtn1');
console.log(coachbutton);

	coachbutton.addEventListener('click', () => {
	var coachNchecker = false;
	var coachIsemailvalid = false;
	var coachLanguagedrop = false;
	var coachLevelchecker = false;
	var coachPasswordValid = false;
	var coachConfirmPasswordMatch = false;
	var coachAlertMessage = "";

	// Name validation
	const coachUsername = document.getElementById('cfname');
	const coachNameChecker = /[`0123456789!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
	coachNchecker = !coachNameChecker.test(coachUsername.value);

	// Email validation
	const coachUseremail = document.getElementById('cemail');
	const coachEmailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	coachIsemailvalid = coachEmailChecker.test(String(coachUseremail.value).toLowerCase());

	// Password validation
	const coachPassword = document.getElementById('copswd');
	const coachConfirmPassword = document.getElementById('ccpswd');
	const passwordChecker = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.-^*()%!]).{8,}/;
	coachPasswordValid = passwordChecker.test(coachPassword.value);
	coachConfirmPasswordMatch = coachPassword.value === coachConfirmPassword.value;

	// Language selection
	const coachLanguages = document.getElementById('languages');
	if (coachLanguages.value !== '-- Select a language --') {
		coachLanguagedrop = true;
	}

	// Level selection (radio buttons)
	const coachRadiogroup = document.getElementById('coahL').getElementsByTagName('input');
	for (let radio of coachRadiogroup) {
		if (radio.checked) {
			coachLevelchecker = true;
			break;
		}
	}

	// Building alert messages
	if (!coachNchecker) {
		coachAlertMessage += "Name invalid.\n";
	}
	if (!coachIsemailvalid) {
		coachAlertMessage += "Email invalid.\n";
	}
	if (!coachPasswordValid) {
		coachAlertMessage += "Password invalid.\n";
	}
	if (!coachConfirmPasswordMatch) {
		coachAlertMessage += "Password confirmation does not match.\n";
	}
	if (!coachLanguagedrop) {
		coachAlertMessage += "Must select a language option.\n";
	}
	if (!coachLevelchecker) {
		coachAlertMessage += "Must select a level.\n";
	}

	if (coachAlertMessage.length > 0) {
		alert(coachAlertMessage);
	} else {
		alert("Signup successful");
	}
});

 
  

  