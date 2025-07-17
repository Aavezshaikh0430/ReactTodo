import { useState } from "react";
import "./FormHandling.css";

export const FormHandling = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pNumber, setPNumber] = useState("");

  const handleChange = (e) => {
    // setFirst(e.target.value);
    // setLast(e.target.value);
    // setEmail(e.target.value);
    // setPassword(e.target.value);
    // setPNumber(e.target.value);

    const { name, value } = e.target;

    // if(e.target.name ==='first'){
    //   setFirst(e.target.value)
    // }

    if (name === "first") {
      setFirst(value);
    } else if (name === "Last") {
      setLast(value);
    } else if (name === "Email") {
      setEmail(value);
    } else if (name === "Password") {
      setPassword(value);
    } else if (name === "Phone Number") {
      setPNumber(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      first,
      last,
      email,
      password,
      pNumber,
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
                  value={first}
                  onChange={handleChange}
                />

                <label>Last Name</label>

                <input
                  type="text"
                  name="Last"
                  placeholder="Last Name"
                  className="input1"
                  required
                  value={last}
                  onChange={handleChange}
                />

                <label>Email</label>

                <input
                  type="text"
                  name="Email"
                  placeholder="Email"
                  className="input1"
                  required
                  value={email}
                  onChange={handleChange}
                />

                <label>Password</label>

                <input
                  type="text"
                  name="Password"
                  placeholder="Password"
                  className="input1"
                  required
                  value={password}
                  onChange={handleChange}
                />

                <label>Phone Number</label>

                <input
                  type="number"
                  name="Phone Number"
                  placeholder="Phone Number"
                  className="input1"
                  required
                  value={pNumber}
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
            <section style={{textAlign: "center"}}>
              <p>
              Hello, my name is{" "}
              <span className="span">
                {first} {last}
              </span>
              . My Email is <span className="span">{email} </span>  and my phone
              no is <span className="span">{pNumber}</span>.
            </p>
            </section>
          </div>
        </div>
      </form>
    </>
  );
};
