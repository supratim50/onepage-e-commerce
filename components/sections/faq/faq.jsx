import { FiChevronDown } from "react-icons/fi";

import Qna from "../../qna/qna";
import PrimaryHeading from "../../heading/primaryHeading";

const Faq = () => {
  const qnas = [
    {
      id: 1,
      question: "What do you want to do when you grow up?",
      answer:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
    {
      id: 2,
      question: "What do you want to do when you grow up?",
      answer:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
    {
      id: 3,
      question: "What do you want to do when you grow up?",
      answer:
        "Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.",
    },
  ];

  return (
    <section className="section-mt">
      <div className="container">
        <PrimaryHeading
          text="FAQs"
          classList="text-center text-lg-left font-weight-bold mb-5 pb-2"
        />
        {qnas.map((qna) => (
          <Qna key={qna.id} question={qna.question} answer={qna.answer} />
        ))}
        <div className="text-center color-primary sub-heading">
          See More <FiChevronDown />
        </div>
      </div>
    </section>
  );
};

export default Faq;
