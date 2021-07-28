import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import "./ContactMe.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const [isSent, setIsSent] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    sendEmail(e);
  };

  const sendEmail = (e) => {
    setIsClicked(true);
    e.preventDefault();

    emailjs
    .sendForm(
      "service_rg0rhtd",
      "template_4j7xifu",
      e.target,
      "user_vrAXqipX6Doxnl5gdkliT"
        
      )
      .then(
        (result) => {
          setIsSent(true);
        },
        (error) => {
          setIsSent(false);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="text-center">Contact Me</h1>
      <Grid container>
        <Grid item lg={3} md={3} sm={5} xs={12}>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Phone:</h3>
              <p>01856354435</p>
            </div>
            <div className="contact-info">
              <h3>Email:</h3>
              <p>mehedihassansagor1641998@gmail.com</p>
            </div>
            <div className="contact-info">
              <h3>Address:</h3>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </Grid>
        <Grid item lg={9} md={9} sm={7} xs={12}>
          <form autocomplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item lg={6} sm={12} xs={12}>
                <input
                  ref={register({ required: true })}
                  className="form-control mt-3"
                  type="text"
                  placeholder="Entre Name"
                  name="name"
                />
                {errors.name && (
                  <span className="validation-error">
                    This field is required
                  </span>
                )}
              </Grid>
              <Grid item lg={6} sm={12} xs={12}>
                <input
                  ref={register({ required: true })}
                  className="form-control mt-3"
                  type="text"
                  placeholder="Entre Email"
                  name="email"
                />
                {errors.email && (
                  <span className="validation-error">
                    This field is required
                  </span>
                )}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={6} sm={12} xs={12}>
                <input
                  ref={register({ required: true })}
                  className="form-control mt-3"
                  type="text"
                  placeholder="Entre Number"
                  name="number"
                />
                {errors.number && (
                  <span className="validation-error">
                    This field is required
                  </span>
                )}
              </Grid>
              <Grid item lg={6} sm={12} xs={12}>
                <input
                  ref={register({ required: true })}
                  className="form-control mt-3"
                  type="text"
                  placeholder="Entre Subject"
                  name="subject"
                />
                {errors.subject && (
                  <span className="validation-error">
                    This field is required
                  </span>
                )}
              </Grid>
            </Grid>
            <textarea
              ref={register({ required: true })}
              className="form-control text-area mt-3"
              placeholder="Message"
              rows="6"
              name="message"
            ></textarea>
            {errors.message && (
              <span className="validation-error">This field is required</span>
            )}
            <button className="send-message-btn mt-3 btn-block" type="submit">
              Submit Message
            </button>
            {isClicked && isSent && (
              <p
                style={{
                  color: "green",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                Message sent successfully
              </p>
            )}
          </form>
        </Grid>
      </Grid>
    </section>
  );
};

export default ContactMe;
