import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function UserSignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const [registrationSuccess, setRegistrationSuccess] = useState(null);

  const handleRegistration = (data) => {
    setRegistrationSuccess("Signup successful!");
    history.push("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            {...register("firstName", { required: true })}
            id="firstName"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <span className="error">First name is required</span>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            {...register("lastName", { required: true })}
            id="lastName"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <span className="error">Last name is required</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern: /^[^@]+@[^@]+\.[^@]+$/,
            })}
            id="email"
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">Invalid email address</span>}
        </div>

        <button type="submit">Signup</button>
      </form>

      {registrationSuccess && (
        <div className="success">{registrationSuccess}</div>
      )}
    </div>
  );
}

export default UserSignupForm;
