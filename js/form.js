import { getTranslation } from "./i18n.js";

let form;
let submitButton;
let checkinInput;
let checkoutInput;

let errorBlock;
let errorText;
let successBlock;

let initialSubmitText;

// ===== INIT FUNCTION =====

export function initForm() {

	// find elements
	form = document.querySelector('#bookingForm');
	if (!form) { return }

	checkinInput = document.querySelector('#checkin');
	checkoutInput = document.querySelector('#checkout');
	submitButton = document.querySelector('.booking__submit');

	errorBlock = document.querySelector('.booking__error');
	errorText = document.querySelector('.booking__error .message__text');
	successBlock = document.querySelector('.booking__success');

	initialSubmitText = submitButton.innerHTML;

	form.addEventListener('submit', function (event) {
		event.preventDefault();

		// reset message
		resetUI();

		// bring data
		const checkin = checkinInput.value;
		const checkout = checkoutInput.value;

		// validate

		const validateResult = validateDate(checkin, checkout);
		let errorKey;

		if (!validateResult.ok) {
			errorKey = "errors." + validateResult.errorCode;
			const errorMessage = getTranslation(errorKey);
			showError(errorMessage);
			return;
		}
		// change submit button state
		setSubmittingState();

		simulateSend(
				() => {
					showSuccess();
				},
			(messageCode) => {
				const message = getTranslation('errors.' + messageCode);
				showError(message);
				resetSubmitState(initialSubmitText);
			}
		);
	})
}

function validateDate(checkin, checkout) {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const checkinDate = new Date(checkin);
	const checkoutDate = new Date(checkout);

	if (!checkin || !checkout) {
		return {
			ok: false,
			errorCode: 'EMPTY_FIELDS'
		}
	}

	if (checkinDate < today) {
		return {
			ok: false,
			errorCode: 'CHECKIN_IN_PAST'
		}
	}

	if (checkoutDate <= checkinDate) {
		return {
			ok: false,
			errorCode: 'CHECKOUT_BEFORE_CHECKIN'
		}
	}

	return {
		ok: true
	}
}

function setSubmittingState() {
	if (submitButton) {
		submitButton.disabled = true;
		submitButton.classList.add('is-loading');
		submitButton.innerHTML = getTranslation('booking.sending');
	}
}

function resetSubmitState(e) {
	if (submitButton) {
		submitButton.disabled = false;
		submitButton.classList.remove('is-loading');
		submitButton.innerHTML = e;
	}
}

function resetUI() {
	errorBlock.classList.add('is-hidden');
	successBlock.classList.add('is-hidden');
}

function showError(message) {
	errorBlock.classList.remove('is-hidden');
	successBlock.classList.add('is-hidden');
	errorText.textContent = message;
}

function showSuccess() {
	if (successBlock) {
		successBlock.classList.remove('is-hidden');
		errorBlock.classList.add('is-hidden');
	}
}

function simulateSend(onSuccess, onError) {
	setTimeout(function () {
		const isSuccess = Math.random() > 0.5;

		if (isSuccess) {
			onSuccess();
		} else {
			onError('SEND_FAILED');
		}
	}, 2000);
}