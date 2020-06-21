const Loader = () => {
  return (
    <div className="loader-main-box d-flex justify-content-center align-items-center bg-color-secondary">
      <div className="loader-box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <style jsx>{`
        .loader-main-box {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
        }
        .loader-box {
          width: 50px;
          height: 50px;

          position: relative;
        }

        .loader-box div {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #ffb800;
        }

        .loader-box div:nth-child(1) {
          animation: anim1 2s ease-in-out infinite;
        }
        .loader-box div:nth-child(2) {
          animation: anim2 2s ease-in-out infinite;
        }
        .loader-box div:nth-child(3) {
          animation: anim3 2s ease-in-out infinite;
        }
        .loader-box div:nth-child(4) {
          animation: anim4 2s ease-in-out infinite;
        }
        @keyframes anim1 {
          50% {
            transform: translateX(-50px) rotate(90deg);
            background-color: #121212;
          }
          100% {
            transform: translateX(0px) rotate(180deg);
          }
        }
        @keyframes anim2 {
          50% {
            transform: translateY(-50px) rotate(90deg);
            background-color: #ffb800;
          }
          100% {
            transform: translateX(0px) rotate(180deg);
          }
        }
        @keyframes anim3 {
          50% {
            transform: translateX(50px) rotate(90deg);
            background-color: #121212;
          }
          100% {
            transform: translateX(0px) rotate(180deg);
          }
        }
        @keyframes anim4 {
          50% {
            transform: translateY(50px) rotate(90deg);
            background-color: #ffb800;
          }
          100% {
            transform: translateX(0px) rotate(180deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
