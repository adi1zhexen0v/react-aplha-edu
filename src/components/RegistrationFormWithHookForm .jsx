import { useForm } from "react-hook-form";

const RegistrationFormWithHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
      <h2 className="form-title">С использованием react-hook-form</h2>
      <div className="form-field">
        <label>Username</label>
        <input
          {...register("username", { required: "Username is required" })}
          className={errors.username ? "input-error" : ""}
        />
        {errors.username && (
          <p className="error-message">{errors.username.message}</p>
        )}
      </div>
      <div className="form-field">
        <label>Surname</label>
        <input
          {...register("surname", { required: "Surname is required" })}
          className={errors.surname ? "input-error" : ""}
        />
        {errors.surname && (
          <p className="error-message">{errors.surname.message}</p>
        )}
      </div>
      <div className="form-field">
        <label>Email</label>
        <input
          {...register("email", {
            required: "Email is required",
          })}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>
      <div className="form-field">
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && (
          <p className="error-message">{errors.password.message}</p>
        )}
      </div>
      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};

export default RegistrationFormWithHookForm;
