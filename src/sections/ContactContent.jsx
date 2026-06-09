import { useForm } from "@formspree/react";
import { useRef, useEffect } from "react";
import "./ContactContent.css";

const ContactContent = () => {
  const [state, handleSubmit, reset] = useForm("xdavgllj");
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      alert("Thanks for reaching out. I'll get back to you as soon as possible.");
      formRef.current?.reset();
      reset();
    }
  }, [state.succeeded]);

  return (
    <form className="fs-form" onSubmit={handleSubmit} ref={formRef}>
      <div className="fs-field">
        <label className="fs-label" htmlFor="name">Your Name</label>
        <input className="fs-input" id="name" name="name" required />
      </div>

      <div className="fs-field">
        <label className="fs-label" htmlFor="email">Email</label>
        <input className="fs-input" id="email" name="email" type="email" required />
      </div>

      <div className="fs-field">
        <label className="fs-label" htmlFor="message">Message</label>
        <textarea className="fs-textarea" id="message" name="message" required />
      </div>

      <div className="fs-button-group">
        <button className="fs-button" type="submit" disabled={state.submitting}>
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default ContactContent;