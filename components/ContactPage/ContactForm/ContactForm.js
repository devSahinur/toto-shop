import { useState } from "react";

function ContactForm() {
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert("yo");
  };

  return (
    <div className="px-4 py-6 md:col-span-2 md:pr-8 shadow-md hover:shadow-lg rounded-md border">
      <h1 className="text-3xl uppercase font-medium pb-5">
        Leave us a message
      </h1>
      <p className="text-md text-gray-800 pb-3 capitalize">
        Use the form below to get in touch with the sales team
      </p>
      <form action="#" className="space-y-6">
        <div className="grid grid-cols-2 space-x-3">
          <div className="flex flex-col">
            <label className="cinputTi">
              First Name <span className="text-primary pl-2 text-xl">*</span>
            </label>
            <input
              className="cinput"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="cinputTi">
              Last Name <span className="text-primary pl-2 text-xl">*</span>
            </label>
            <input
              className="cinput"
              type="text"
              value={lname}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="cinputTi">
            Email Address <span>*</span>
          </label>
          <input
            className="cinput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="cinputTi">Subject</label>
          <input
            className="cinput"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="cinputTi">
            Your message <span className="text-primary pl-2 text-xl">*</span>
          </label>
          <textarea
            className="cinput resize-none"
            name="name"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button className="btn" onClick={submitHandler}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
