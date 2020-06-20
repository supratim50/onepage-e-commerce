import { useState } from "react";

import RoundBtn from "../buttons/roundBtn";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const Qna = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const openAnswer = (e) => setOpen(!open);
  console.log(open);

  return (
    <div>
      {/* question */}
      <div className="row pb-md-3 mb-md-4 pb-0 mb-3 w-100 mx-0">
        <div className="col-2 col-md-1 d-flex align-items-center px-0">
          <RoundBtn
            onClick={openAnswer}
            classList="sub-heading button-md bg-color-primary color-secondary"
          >
            {open ? <FiChevronDown /> : <FiChevronRight />}
          </RoundBtn>
        </div>
        <div className="col-10 col-md-11 px-0">
          <div className="question-box qna-box px-3 py-2 px-md-4 py-md-3 ml-auto ml-md-0 d-inline-block bg-color-secondary">
            <p className="special-text font-weight-bold mb-0">{question}</p>
          </div>
        </div>

        <div
          className={`col-12 col-md-11 offset-0 offset-md-1 answer ${
            open ? "show" : ""
          } pt-0 mt-4 pt-md-3 mt-md-4 px-0`}
        >
          <div className="qna-box answer-box p-3 p-md-4 d-inline-block bg-color-secondary">
            <p className="text-paragraph mb-0">{answer}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .qna-box {
          border: 1px solid #fafafa;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        }
        .question-box {
          border-radius: 25px;
        }
        .answer-box {
          border-radius: 10px;
        }

        .answer {
          /* opacity: 0 !important;
          visibility: hidden !important; */
          display: none;
          transition: 0.5s !important;
        }
        .show {
          display: block;
          animation-name: open;
          animation-duration: 1s;
          /* opacity: 1 !important;
          visibility: visible !important; */
        }

        @keyframes open {
          0% {
            /* height: 0; */

            opacity: 0;
            visibility: hidden;
          }
          100% {
            /* height: 100%; */
            opacity: 1;
            visibility: visible;
          }
        }
      `}</style>
    </div>
  );
};

export default Qna;
