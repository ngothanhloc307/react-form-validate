import { useRef, useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "UserName",
      errorMessage:
        "Username shoud be 3-16 charaters and shouldn't include any special charaters",
      label: "UserName",
      pattern: `^[A-Za-z0-9]{3,16}$`,
      required: true,
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email",
      errorMessage: "it should be valid email type",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      type: "date",
      name: "birthday",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      type: "text",
      name: "password",
      placeholder: "password",
      errorMessage:
        "Password shoud be 8-20 character and include at least 1 letter, 1 number and 1 special character",
      label: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      type: "password",
      name: "confirmPassword",
      placeholder: "confirm password",
      errorMessage: "Password don't match!",
      label: "Confirm password",
      pattern: values.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
