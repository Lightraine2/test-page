document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <h3>Registration Successful!</h3>
            <p>Thank you for registering with Online Career Progression.</p>
            <p>We will contact you using your preferred method(s) shortly.</p>
        </div>
    `;
    document.body.appendChild(modal);

    const validators = {
        name: (value) => {
            return value.length > 0 ? '' : 'Please provide a name';
        },
        email: (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value) ? '' : 'Please enter a valid email address';
        },
        phone: (value) => {
            const phoneRegex = /^[\d\s()+.-]{10,}$/;
            return phoneRegex.test(value) ? '' : 'Please enter a valid phone number';
        },
        location: (value) => {
            return value ? '' : 'Please select your country';
        },
        contactPreference: (checkboxes) => {
            return checkboxes.some(cb => cb.checked) ? '' : 'Please select at least one contact preference';
        }
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const formData = {};

        ['name', 'email', 'phone', 'location'].forEach(field => {
            const input = document.getElementById(field);
            const error = validators[field](input.value);
            document.getElementById(`${field}Error`).textContent = error;
            if (error) isValid = false;
            formData[field] = input.value;
        });

        const contactPreferences = Array.from(document.getElementsByName('contactPreference'));
        const preferenceError = validators.contactPreference(contactPreferences);
        document.getElementById('preferenceError').textContent = preferenceError;
        if (preferenceError) isValid = false;
        formData.preferences = contactPreferences.filter(cb => cb.checked).map(cb => cb.value);

        if (isValid) {
            modal.style.display = 'block';
            form.reset();
        }
    });

    document.querySelector('.modal-close').onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    };
});