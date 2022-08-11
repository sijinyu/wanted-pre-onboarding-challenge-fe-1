export const auth = {
  emailValidate: (email: string) => {
    return email.includes("@") && email.includes(".");
  },
  passwordValidate: (password: string) => {
    return password.length >= 8;
  },
};
