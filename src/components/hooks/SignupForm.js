import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default function SignupForm() {
  const [email, setemail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email":
        setemail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <form style={{ display: "flex" }}>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          <span>password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit"> SUBMIT </button>
      </form>
    </div>
  );
}
