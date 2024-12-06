const validateUserInput = (userData) => {
    const { name, email, password } = userData;
    let errors = [];

    if (!name || !email || !password) {
        errors.push('All fields are required.');
    }
    
    if (password && password.length < 6) {
        errors.push('Password must be at least 6 characters long.');
    }

    return errors;
};

module.exports = { validateUserInput };
