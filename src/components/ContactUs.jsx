import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

function ContactUs() {
    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [subject, setSubject] = useState("");

    const [message, setMessage] = useState("");

    const lgnbtn = async () => {
        const regData = { name, email, mobile, subject, message };
        const res = await axios.post(
            "http://192.168.1.10:5000/post-man-testing/api/contact/user",
            regData
        );
        if (res.status === 200) {
            setName("");

            setEmail("");
            setMobile("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <div>
            <div className="bg-white text-black">
                <div className="contact3 py-5">
                    <div class="container"></div>
                    <div className="row no-gutters">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img
                                        src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg"
                                        className="img-fluid p-3"
                                        alt="contact us"
                                    />
                                </div>
                                <div className="col">
                                    <h2 className="h1-responsive font-weight-bold text-center ">
                                        Contact us
                                    </h2>
                                    {/*Section description*/}
                                    <p className="text-center w-responsive mx-auto mb-5">
                                        Do you have any questions? Please do not
                                        hesitate to contact us directly.
                                        <br /> Our team will come back to you
                                        within a matter of hours to help you.
                                    </p>
                                    <div className="row">
                                        {/*Grid column*/}
                                        <div className="col-md-9 mb-md-0 mb-5">
                                            <form
                                                id="contact-form"
                                                name="contact-form"
                                                method="POST"
                                            >
                                                {/*Grid row*/}
                                                <div className="row">
                                                    {/*Grid column*/}
                                                    <div className="col-md-12">
                                                        <div className="md-form mb-0 ">
                                                            <label
                                                                htmlFor="name"
                                                                className
                                                            >
                                                                Your Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="name"
                                                                name="name"
                                                                className="form-control"
                                                                value={name}
                                                                onChange={(e) =>
                                                                    setName(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    {/*Grid column*/}
                                                    {/*Grid column*/}
                                                    <div className="col-md-12">
                                                        <div className="md-form mb-0">
                                                            <label
                                                                htmlFor="email"
                                                                className
                                                            >
                                                                Your Email
                                                            </label>
                                                            <input
                                                                type="text"
                                                                placeholder="www.abc@gmail.com"
                                                                id="email"
                                                                name="email"
                                                                className="form-control"
                                                                value={email}
                                                                onChange={(e) =>
                                                                    setEmail(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="md-form mb-0">
                                                            <label
                                                                htmlFor="Number"
                                                                className
                                                            >
                                                                Mobile No
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="mobile"
                                                                name="mobile"
                                                                className="form-control"
                                                                value={mobile}
                                                                onChange={(e) =>
                                                                    setMobile(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                    {/*Grid column*/}
                                                </div>
                                                {/*Grid row*/}
                                                {/*Grid row*/}
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="md-form mb-0">
                                                            <label
                                                                htmlFor="subject"
                                                                className
                                                            >
                                                                Subject
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="subject"
                                                                name="subject"
                                                                className="form-control"
                                                                value={subject}
                                                                onChange={(e) =>
                                                                    setSubject(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*Grid row*/}
                                                {/*Grid row*/}
                                                <div className="row">
                                                    {/*Grid column*/}
                                                    <div className="col-md-12">
                                                        <div className="md-form">
                                                            <label htmlFor="message">
                                                                Your message
                                                            </label>
                                                            <textarea
                                                                type="text"
                                                                id="message"
                                                                name="message"
                                                                rows={4}
                                                                className="form-control md-textarea"
                                                                defaultValue={
                                                                    ""
                                                                }
                                                                value={message}
                                                                onChange={(e) =>
                                                                    setMessage(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*Grid row*/}
                                                <button
                                                    type="button"
                                                    className="btn btn-primary mt-4 w-100"
                                                    onclick={(e) => lgnbtn()}
                                                >
                                                    Send
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
