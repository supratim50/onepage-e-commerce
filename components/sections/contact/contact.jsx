import PrimaryHeading from "../../heading/primaryHeading";
import ContactDetails from "../../contactDetails/contactDetails";
import Input from "../../input/input";
import Textarea from "../../input/textarea";
import PrimaryBtn from "../../buttons/primaryButton";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="section-mt" id="contact-us">
      <div className="layer"></div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 px-2 px-md-0 d-flex justify-content-center align-items-center">
            <div>
              <PrimaryHeading
                text="Lets get in touch"
                classList="text-center text-lg-left font-weight-bold mb-5 pb-2 color-secondary"
              />

              <div className="row">
                <div className="col-lg-12 col-6 px-0 d-flex justify-content-center justify-content-lg-start">
                  <ContactDetails
                    icon={<FiPhone />}
                    text="+91-855-552-1569"
                    classList="mb-4 pb-3"
                  />
                </div>
                <div className="col-lg-12 col-6 px-0 d-flex justify-content-center justify-content-lg-start">
                  <ContactDetails
                    icon={<FiMapPin />}
                    text="117, Jugipara Rd, Dum Dum, Kolkata, West Bengal 700028"
                    classList="mb-4 pb-3"
                  />
                </div>
                <div className="col-lg-12 col-6 px-0 d-flex justify-content-center justify-content-lg-start">
                  <ContactDetails
                    icon={<FiMail />}
                    text="alma.lawson@example.com"
                    classList="mb-4 pb-3"
                  />
                </div>
                <div className="col-lg-12 col-6 px-0 d-flex justify-content-center justify-content-lg-start">
                  <ContactDetails
                    icon={<FiPhone />}
                    text="+91-855-552-1569"
                    classList="mb-4 pb-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 px-0">
            <div className="d-flex justify-content-center">
              <div className="input-main-box bg-color-secondary px-3 py-5 p-md-5">
                {/* heading */}
                <div className=" pb-3 mb-4">
                  <p className="color-black-2 sub-heading text-center mb-0">
                    We would appreciate some feedback from you
                  </p>
                </div>
                {/* input */}
                <div className="input-box pb-3 mb-4">
                  <form className="form-signin">
                    <Input
                      type="text"
                      id="inputEmail"
                      placeholder="Email"
                      classList="mt-4"
                    />
                    <Input
                      type="password"
                      id="inputPassword"
                      placeholder="Password"
                      classList="mt-4"
                    />
                    <Textarea
                      id="message"
                      placeholder="Message"
                      classList="mt-4"
                    />
                  </form>
                </div>
                {/* button */}
                <div>
                  <PrimaryBtn classList="mx-auto">Contact</PrimaryBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          padding: 77px 0 !important;
          background-image: linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(/assets/images/buddha.jpg);
          background-size: cover;
        }
         {
          /* .layer {
          position: absolute !important;
          margin-top: -77px;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
        } */
        }
        #contact-us {
          position: relative;
        }

        .input-main-box {
          width: 95% !important;
          max-width: 510px;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
