import { FiLock, FiShield, FiSmartphone } from "react-icons/fi";

import Features from "../../features/features";
import PrimaryHeading from "../../heading/primaryHeading";

const Fetures = () => {
  return (
    <section className="section-mt">
      <div className="container section-container">
        <PrimaryHeading
          text="Features"
          classList="text-center text-lg-left font-weight-bold mb-5 pb-2"
        />
        <div className="row w-100 m-0">
          <div className="col-6 col-lg-3 py-4 py-md-5 features-box d-flex flex-column justify-content-center align-items-center">
            <Features icon={<FiLock />} title="100% Secure Payments" />
          </div>
          <div className="col-6 col-lg-3 py-4 py-md-5 features-box d-flex flex-column justify-content-center align-items-center">
            <Features icon={<FiShield />} title="TrustPay" />
          </div>
          <div className="col-6 col-lg-3 py-4 py-md-5 features-box d-flex flex-column justify-content-center align-items-center">
            <Features icon={<FiShield />} title="HelpCenter" />
          </div>
          <div className="col-6 col-lg-3 py-4 py-md-5 features-box d-flex flex-column justify-content-center align-items-center">
            <Features icon={<FiSmartphone />} title="Shop On The Go" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .features-box {
          border: 1px solid #ffb800;
        }

        @media screen and (max-width: 767px) {
          .section-container {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Fetures;
