type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const basicUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...basicUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
