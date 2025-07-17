import { useState } from "react";
import "./FormHandlig2.css";

export const FormHandling2 = () => {
  const [user, setUser] = useState({
    first: '',
    last: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
 

  const handleChange = (e) => {

    const { name, value } = e.target;

    setUser((pre) => ({...pre, [name]:value}));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      user
    };
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          {/* masssgae */}

          <div className="main-container4">
            <div className="main-content">
              <h1 className="heading">Sign Up</h1>
              <p>Please fill in this form to create an account.</p>

              <div className="input-container">
                <label>First Name</label>

                <input
                  type="text"
                  name="first"
                  placeholder="first name"
                  className="input1"
                  required
                  value={user.first}
                  onChange={handleChange}
                />

                <label>Last Name</label>

                <input
                  type="text"
                  name="last"
                  placeholder="Last Name"
                  className="input1"
                  required
                  value={user.last}
                  onChange={handleChange}
                />

                <label>Email</label>

                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="input1"
                  required
                  value={user.email}
                  onChange={handleChange}
                />

                <label>Password</label>

                <input
                  type="text"
                  name="password"
                  placeholder="Password"
                  className="input1"
                  required
                  value={user.password}
                  onChange={handleChange}
                />

                <label>Phone Number</label>

                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input1"
                  required
                  value={user.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <p>
                By creating an account you agree to out
                <a href="#" className="span">
                  Terms & Privacy
                </a>
              </p>
              <button className="btn2">Sign Up</button>
            </div>
            <div className='class-section' >
              <p>
              Hello, my name is{" "}
              <span className="span">
                {user.first} {user.last}
              </span>
              . My Email is <span className="span">{user.email} </span>  and my phone
              no is <span className="span">{user.phoneNumber}</span>.
            </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
