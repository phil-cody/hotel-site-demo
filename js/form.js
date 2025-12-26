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

		if (!validateResult.ok) {
			showError(validateResult.message);
			return;
		}
		// change submit button state
		setSubmittingState();

		simulateSend(
				() => {
					showSuccess();
				},
			(message) => {
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
			message: 'Fill in all the fields'
		}
	}

	if (checkinDate < today) {
		return {
			ok: false,
			message: 'The check-in date cannot be in the past'
		}
	}

	if (checkoutDate <= checkinDate) {
		return {
			ok: false,
			message: 'The check-out date should be after the check-in date'
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
		submitButton.innerHTML = 'The request is being sent';
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
			onError('Failed to send request. Please try again');
		}
	}, 2000);
}