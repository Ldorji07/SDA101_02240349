// Get form elements
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');

// Get error divs
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Helper function to validate email format
function validateEmail(email) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return emailPattern.test(email);
}

// Helper function to check password strength
function validatePassword(password) {
    return (
        password.length >= 8 && // At least 8 characters
        /[A-Z]/.test(password) && // At least one uppercase
        /[a-z]/.test(password) && // At least one lowercase
        /[0-9]/.test(password) && // At least one number
        /[!@#\$%\^\&*\)\(+=._-]+/.test(password) // At least one special character
    );
}

// Check all validations
function checkValidation() {
    let isValid = true;

    // Username validation: at least 3 characters
    if (username.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Email validation
    if (!validateEmail(email.value)) {
        emailError.textContent = 'Enter a valid email address';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation: strong password requirements
    if (!validatePassword(password.value)) {
        passwordError.textContent = 'Password must be at least 8 characters, include uppercase, lowercase, number, and special character';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Confirm password validation
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    // Enable or disable submit button based on validation
    submitBtn.disabled = !isValid;
}

// Event listeners to validate fields in real-time
username.addEventListener('input', checkValidation);
email.addEventListener('input', checkValidation);
password.addEventListener('input', checkValidation);
confirmPassword.addEventListener('input', checkValidation);

// Prevent form submission if validation fails
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    if (submitBtn.disabled) {
        event.preventDefault();
    }
});
