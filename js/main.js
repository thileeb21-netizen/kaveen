document.addEventListener('DOMContentLoaded', function() {
    // This function can be expanded with more JS features later
    initializePasswordToggle();
});

function initializePasswordToggle() {
    const passwordGroups = document.querySelectorAll('.password-input-group');

    passwordGroups.forEach(group => {
        const passwordField = group.querySelector('input[type="password"], input[type="text"]');
        const toggleButton = group.querySelector('.password-toggle');

        if (passwordField && toggleButton) {
            toggleButton.addEventListener('click', function() {
                if (passwordField.type === 'password') {
                    passwordField.type = 'text';
                    // Simple text-based toggle for now. Can be replaced with icons.
                    toggleButton.textContent = 'Hide';
                } else {
                    passwordField.type = 'password';
                    toggleButton.textContent = 'Show';
                }
            });
        }
    });
}
