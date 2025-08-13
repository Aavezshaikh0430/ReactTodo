import React from "react";
import { Form } from "react-router-dom";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res)
    console.log(data);
    return null;
  } catch (error) {
    console.log(error);
  }
};

function Contact() {
  return (
    <>
      <section className="container section-contact">
        <h2 className="section-common--heading">contact us</h2>
        <p className="section-common--subheading">
          Get in touch with us. We are always here to help you.
        </p>

        <div className="section-contact">
          <div className="grid grid-two--cols grid-two--cols2">
            <div className="contact-content">
              <Form method="POST" action="/contact">
                <div className="grid grid-two--cols mb-3">
                  <div>
                    <label htmlFor="username">Full name</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      placeholder="enter full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="eamil">email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      placeholder="abc@aavez.com"
                    />
                  </div>
                </div>

                <div className="mb3">
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="we are always here to help you"
                  ></textarea>
                </div>

                <div className="mt3">
                  <button type="submit" className="btn contact-btn">
                    send message
                  </button>
                </div>
              </Form>
            </div>
            <div className="contact-image">
              <figure>
                <img
                  src="/contact.png"
                  alt="contact pic"
                  className="contact_image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
