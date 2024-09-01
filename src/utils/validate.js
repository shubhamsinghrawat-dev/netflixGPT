export const checkValidateData = (email, password, fullName, isSignUp) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const isPasswordValid = passwordRegex.test(password);

    if (isSignUp && (!fullName || fullName.trim().length === 0)) {
        return "Please Enter Full Name";
    }
    if (!isEmailValid) return "Email is not Valid";
    if (!isPasswordValid) return "Password is not Valid";

    return null;
};
