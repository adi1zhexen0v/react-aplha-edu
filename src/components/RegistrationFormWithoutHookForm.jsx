import { useState } from "react";

const RegistrationFormWithoutHookForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }

    if (!surname) {
      errors.surname = "Surname is required";
    }

    if (!email) {
      errors.email = "Email is required";
    }

    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert(JSON.stringify({ name, surname, email, password }));
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2 className="form-title">Без использования react-hook-form</h2>
      <div className="form-field">
        <label>Username</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label>Surname</label>
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className={errors.surname ? "input-error" : ""}
        />
        {errors.surname && <p className="error-message">{errors.surname}</p>}
      </div>
      <div className="form-field">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-field">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};

export default RegistrationFormWithoutHookForm;
