import { useState } from "react";
const Form = () => {
  const [username, setUsername] = useState("Hasan");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`username:${username},
    email:,
    password:`);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="display-5 text-danger">FORMS</h1>

      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username <span>{username}</span>
        </label>
        <input
          type="text"
          className="form-control"
          value={username}
          id="username"
          onChange={handleUsername}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
