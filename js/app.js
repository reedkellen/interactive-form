//STEP 1
//Set focus on the first text field
  //When the page loads, give focus to the first text field
const nameField = document.querySelector('#name');
nameField.focus();

//STEP 2
//”Job Role” section of the form:
  //A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
  //Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.
const firstFormFieldset = document.querySelector('fieldset');
//Assign the jobRole drop down to a variable to evaluate the contents
const jobRole = document.querySelector('#title');
const otherTitle = document.querySelector('#other-title');
otherTitle.style.display = 'none';
//Evaluate the value of the jobRole drop down and display the input field if other is selected.
jobRole.addEventListener('change', () => {
  if ( jobRole.value === 'other' ) {
    otherTitle.style.display = '';
  } else {
    otherTitle.style.display = 'none';
  };
});

//STEP 3
//”T-Shirt Info” section of the form:
  //For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.
  //If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
  //If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."

// EXCEEDS EXPECTATIONS ITEM - HIDES THE COLOR DROPDOWN UNTIL A SHIRT STYLE IS SELECTED
const shirtColorDropdown = document.querySelector('#colors-js-puns');
shirtColorDropdown.style.display = 'none';

const shirtColors = document.querySelector('#color');
const shirtDesign = document.querySelector('#design');
//Adding an event listener to the shirt design to display the color dropdown and change options in that dropdown based on shirt design.
shirtDesign.addEventListener('change', () => {
  //Go through and hide all shirt colors initially
  for (let i = 0; i < shirtColors.length; i += 1) {
    shirtColors[i].style.display = 'none';
    shirtColors[i].removeAttribute('selected');
  };
  //Display the first three shirt colors if js puns is selected.
  //Display the last three colors if heart js is selected.
  if ( shirtDesign.value === 'js puns' ) {
    shirtColorDropdown.style.display = '';
    for ( let i = 0; i < 3; i +=1 ) {
      shirtColors[i].style.display = '';
    };
    shirtColors[0].setAttribute('selected', 'selected');
  } else if ( shirtDesign.value === 'heart js' ) {
    shirtColorDropdown.style.display = '';
    for ( let i = 3; i < 6; i +=1 ) {
      shirtColors[i].style.display = '';
    };
    shirtColors[3].setAttribute('selected', 'selected');
  } else {
    shirtColorDropdown.style.display = 'none';
  };
});

//STEP 4
//”Register for Activities” section of the form:
  //Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
  //When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
  //As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
const activitiesList = document.querySelector('.activities');
const activityItems = document.querySelectorAll('.activities input');
//This function created HTML to insert into the page for the total price of activities.
function insertTotal(total) {
  const totalSpan = document.createElement('span');
  totalSpan.textContent = 'Total: $' + total;
  const totalDiv = document.createElement('div');
  totalDiv.appendChild(totalSpan);
  totalDiv.id = 'total-div';
  activitiesList.appendChild(totalDiv);
}
//This function removes the total price HTML.
function removeTotal() {
  const divToRemove = document.querySelector('#total-div');
  if (divToRemove) {
    activitiesList.removeChild(divToRemove);
  };
}
//On any change the total is automatically updated, and options are disabled on conflicting times, and reanabled when conflicts are deselected.
activitiesList.addEventListener('change', () => {
  removeTotal();
  let total = 0;
  if (activityItems[0].checked === true) { //all
    total += 200;
  };
  if (activityItems[1].checked === true) { //js-frameworks
    total += 100;
    activityItems[3].disabled = true;
  } else {
    activityItems[3].disabled = false;
  };
  if (activityItems[2].checked === true) { //js-libs
    total += 100;
    activityItems[4].disabled = true;
  } else {
    activityItems[4].disabled = false;
  };
  if (activityItems[3].checked === true) { //express
    total += 100;
    activityItems[1].disabled = true;
  } else {
    activityItems[1].disabled = false;
  };
  if (activityItems[4].checked === true) { //node
    total += 100;
    activityItems[2].disabled = true;
  } else {
    activityItems[2].disabled = false;
  };
  if (activityItems[5].checked === true) { //build-tools
    total += 100;
  };
  if (activityItems[6].checked === true) { //npm
    total += 100;
  };
  insertTotal(total);
});

//STEP 5
//Payment Info section of the form:
  //Display payment sections based on the payment option chosen in the select menu
  //The "Credit Card" payment option should be selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
  //When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden.
  //When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
const paymentMethod = document.querySelector('#payment');
const creditCardSection = document.querySelector('#credit-card');
const payPalSection = creditCardSection.nextElementSibling;
const bitCoinSection = payPalSection.nextElementSibling;
//This code selects the credit card option as the default payment method and hides paypal and bitcoin.
paymentMethod[1].setAttribute('selected', 'selected');
payPalSection.style.display = 'none';
bitCoinSection.style.display = 'none';
//End the initial payment section setup.
paymentMethod.addEventListener('change', () => {
  if (paymentMethod.value === 'select_method' || paymentMethod.value === 'credit card') {
    creditCardSection.style.display = '';
    payPalSection.style.display = 'none';
    bitCoinSection.style.display = 'none';
  } else if (paymentMethod.value === 'paypal') {
    creditCardSection.style.display = 'none';
    payPalSection.style.display = '';
    bitCoinSection.style.display = 'none';
  } else if (paymentMethod.value === 'bitcoin') {
    creditCardSection.style.display = 'none';
    payPalSection.style.display = 'none';
    bitCoinSection.style.display = '';
  };
});

//STEP 6
//Form validation:
  //If any of the following validation errors exist, prevent the user from submitting the form:
    //Name field can't be blank
    //Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
    //Must select at least one checkbox under the "Register for Activities" section of the form.
    //If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, and a 3 number CVV value before the form can be submitted.
    //Credit card field should only accept a number between 13 and 16 digits
    //The zipcode field should accept a 5-digit number
    //The CVV should only accept a number that is exactly 3 digits long
//NAME VALIDATION START
const invalidNameMessage = document.createElement('span');
invalidNameMessage.textContent = 'Please enter a valid name - cannot be blank';
invalidNameMessage.style.color = 'firebrick';
invalidNameMessage.style.fontSize = '1.25em';

//This function validates the name field contents and displays an error if it's blank
function validateName() {
  let nameIsValid = false;
  if (nameIsValid === false) {
    nameField.style.border = 'solid red 5px';
    firstFormFieldset.insertBefore(invalidNameMessage, nameField);
  };
  if (nameField.value !== '') {
    nameIsValid = true;
    nameField.style.border = '2px solid #c1deeb';
    firstFormFieldset.removeChild(invalidNameMessage);
  };
  return nameIsValid;
}

nameField.addEventListener('input', () => {
  validateName();
});
//NAME VALIDATION END

//EMAIL VALIDATION START
const emailField = document.querySelector('#mail');
const invalidEmailMessage = document.createElement('span');
invalidEmailMessage.textContent = 'Please enter a valid email - someone@example.com';
invalidEmailMessage.style.color = 'firebrick';
invalidEmailMessage.style.fontSize = '1.25em';

//This function evaluates the contents of the email field and displays an error if it doesn't match the REGEX for email.
function validateEmail() {
  let emailIsValid = false;
  if (emailIsValid === false) {
    emailField.style.border = 'solid red 5px';
    firstFormFieldset.insertBefore(invalidEmailMessage, emailField);
  };
  const emailRegEx = /\w+@\w+\.[a-z]*/i;
  if ( emailRegEx.test(emailField.value) ) {
    emailIsValid = true;
    emailField.style.border = '2px solid #c1deeb';
    firstFormFieldset.removeChild(invalidEmailMessage);
  };
  return emailIsValid;
}

emailField.addEventListener('input', () => {
  validateEmail();
});
//EMAIL VALIDATION END

//ACTIVITY ITEM VALIDATION
const invalidActivityMessage = document.createElement('span');
invalidActivityMessage.textContent = 'Please select at least 1 activity.';
invalidActivityMessage.style.color = 'firebrick';
invalidActivityMessage.style.fontSize = '1.25em';

//This function counts the number of activity items that are checked.
function countActivityItems() {
  let activityItemTotal = 0;
  for (let i = 0; i < activityItems.length; i += 1) {
    if (activityItems[i].checked === true) {
      activityItemTotal += 1;
    };
  };
  return activityItemTotal;
}

//This function validates that at least one activity item is checked.
function validateActivities() {
  let activitiesAreValid = false;
  if (activitiesAreValid === false) {
    activitiesList.appendChild(invalidActivityMessage, emailField);
  };
  const itemsChecked = countActivityItems();
  if (itemsChecked !== 0) {
    activitiesAreValid = true;
    activitiesList.style.border = 'none';
    activitiesList.removeChild(invalidActivityMessage);
  };
  return activitiesAreValid;
}
activitiesList.addEventListener('change', () => {
  validateActivities();
});
//ACTIVITY ITEM VALIDATION END

//CREDIT CARD VALIDATION START
//Creating error messages for the CC fields
const invalidCardNumberMessage = document.createElement('div');
invalidCardNumberMessage.textContent = 'Please make sure your CC is 13-16 digits.';
invalidCardNumberMessage.style.color = 'firebrick';
invalidCardNumberMessage.style.fontSize = '1.25em';

const invalidZipCodeMessage = document.createElement('div');
invalidZipCodeMessage.textContent = 'Please make sure you have a 5 digit zip.';
invalidZipCodeMessage.style.color = 'firebrick';
invalidZipCodeMessage.style.fontSize = '1.25em';

const invalidCVVMessage = document.createElement('div');
invalidCVVMessage.textContent = 'Please make sure the CVV is 3 digits.';
invalidCVVMessage.style.color = 'firebrick';
invalidCVVMessage.style.fontSize = '1.25em';
//End error messages for the CC fields

const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

//This function evaluates whether the CC number is a valid number between 13-16 digits.
function validateCardNumber() {
  const cardNumberRegEx = /\d{13,16}/;
  const cardNumberRegExTooLong = /\d{17,}/;
  let cardNumberIsValid = false;
  if (cardNumberIsValid === false) {
    creditCardSection.appendChild(invalidCardNumberMessage);
  };
  if ( cardNumberRegEx.test(cardNumber.value) && cardNumberRegExTooLong.test(cardNumber.value) === false ) {
    cardNumberIsValid = true;
    creditCardSection.removeChild(invalidCardNumberMessage);
  };
  return cardNumberIsValid;
}
//This function evaluates whether the zip code is a valid 5 digit number.
function validateZipCode() {
  const zipCodeRegEx = /\d\d\d\d\d/;
  const zipCodeRegExTooLong = /\d{6,}/;
  let zipCodeIsValid = false;
  if (zipCodeIsValid === false) {
    creditCardSection.appendChild(invalidZipCodeMessage);
  };
  if ( zipCodeRegEx.test(zipCode.value) && zipCodeRegExTooLong.test(zipCode.value) === false ) {
    zipCodeIsValid = true;
    creditCardSection.removeChild(invalidZipCodeMessage);
  };
  return zipCodeIsValid;
}
//This function evaluates whether the cvv code is a valid 3 digit number.
function validateCVV() {
  const cvvRegEx = /\d\d\d/;
  const cvvRegExTooLong = /\d{4,}/;
  let cvvIsValid = false;
  if (cvvIsValid === false) {
    creditCardSection.appendChild(invalidCVVMessage);
  };
  if ( cvvRegEx.test(cvv.value) && cvvRegExTooLong.test(cvv.value) === false ) {
    cvvIsValid = true;
    creditCardSection.removeChild(invalidCVVMessage);
  };
  return cvvIsValid;
}

//These listeners validate input in the credit card fields.
cardNumber.addEventListener('input', () => {
  validateCardNumber();
});
zipCode.addEventListener('input', () => {
  validateZipCode();
});
cvv.addEventListener('input', () => {
  validateCVV();
});
//CREDIT CARD VALIDATION END

//ENTIRE FORM VALIDATION ON SUBMISSION
//This function calls all validation functions, and prevents form submission if any of them return false.
function validateForm() {
  const nameCheck = validateName();
  const emailCheck = validateEmail();
  const activityCheck = validateActivities();
  const cardNumberCheck = validateCardNumber();
  const zipCodeCheck = validateZipCode();
  const cvvCheck = validateCVV();
  if ( paymentMethod.value === 'paypal' || paymentMethod.value === 'bitcoin' ) {
    if (nameCheck && emailCheck && activityCheck) {
      return true;
    } else {
      return false;
    };
  } else {
    if (nameCheck && emailCheck && activityCheck && cardNumberCheck && zipCodeCheck && cvvCheck) {
      return true;
    } else {
      return false;
    };
  };
}
