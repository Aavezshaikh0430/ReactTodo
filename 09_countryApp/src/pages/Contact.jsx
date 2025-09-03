export const Contact = () => {

    const handleFormSubmit = (formData) => {
        console.log(formData);
       
        const formInputeData = Object.fromEntries(formData);
        console.log(formInputeData);
        
    }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">

      <form action={handleFormSubmit} >
        <input
          type="text"
          required
          autoComplete="off"
          placeholder="Enter your name"
          name="username"
          className="form-control"

        />
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          autoCapitalize="off"
        />

        <textarea
          name="message"
          id=""
          className="form-control"
          rows="10"
          placeholder="Enter message"
          required
          autoComplete="off"
        ></textarea>
        <button type="submit" value='send'>send</button>
      </form>
      </div>
    </section>
  );
};


/*
imp
here's a step-by-step breakdown of what's happening:
formData.entries();
formData.entries() returns an iterator of key-value pairs form the form data.
Each key corresponds to a form inputs's name, and the value corressponds to the input's value.

for example, if your form has fields like <input name = 'username' value='John' />
it will return ['username', 'John']. 
Object.fromEntries(formData.entries());

video 99 
build responsive website = 1:23:28 Time
*/