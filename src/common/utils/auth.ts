const auth = {
	emailValidate: (email: string) => email.includes('@') && email.includes('.'),
	passwordValidate: (password: string) => password.length >= 8,
};

export default auth;
