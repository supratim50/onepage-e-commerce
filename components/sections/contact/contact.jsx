import PrimaryHeading from "../../heading/primaryHeading";
import ContactDetails from "../../contactDetails/contactDetails";
import Input from "../../input/input";
import Textarea from "../../input/textarea";

const Contact = () => {
  return (
    <section className="section-mt">
      <div className="container border">
        <div className="row border">
          <div className="col-12 col-md-6 border px-0">
            <PrimaryHeading
              text="Lets get in touch"
              classList="text-center text-md-left font-weight-bold mb-5 pb-2 color-secondary"
            />

            <ContactDetails
              icon="H"
              text="+91-855-552-1569"
              classList="mb-4 pb-3"
            />
            <ContactDetails
              icon="H"
              text="117, Jugipara Rd, Dum Dum, Kolkata, West Bengal 700028"
              classList="mb-4 pb-3"
            />
            <ContactDetails
              icon="H"
              text="alma.lawson@example.com"
              classList="mb-4 pb-3"
            />
            <ContactDetails icon="H" text="+91-855-552-1569" />
          </div>
          <div className="col-12 col-md-6 border px-0">
            <div className="d-flex justify-content-center">
              <div className="input-main-box bg-color-secondary rounded-lg p-2 p-md-4">
                <div className="input-box">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        section {
          padding: 77px 0 !important;
          background-image: url(/assets/images/contact.png);
          background-size: cover;
        }

        .input-main-box {
          width: 95% !important;
          max-width: 510px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
