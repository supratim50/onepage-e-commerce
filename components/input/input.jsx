const Input = ({ type, id, placeholder, error, classList }) => {
  return (
    <div className="form-label-group border-bottom">
      <input
        type={type}
        id={id}
        className={`form-control shadow-none border-0 h-auto shadow-sm ${
          error ? "error" : ""
        } ${classList ? classList : ""}`}
        placeholder={placeholder}
        required
        autoFocus
      />
      <label className="input-label" htmlFor={id}>
        {placeholder}
      </label>
      <style jsx>
        {`
          .input-label {
            transition: 0.5s !important;
          }

          .error {
            border: 1px solid #ee2d4f !important;
          }
          .form-label-group {
            position: relative;
            margin-bottom: 1.5rem;
          }

          .form-label-group > input,
          .form-label-group > label {
            padding: 1rem;
          }

          @media screen and (min-width: 400px) {
            .form-label-group > input,
            .form-label-group > label {
              padding: 1.5rem;
            }
          }

          .form-label-group > label {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            margin-bottom: 0;
            line-height: 1.5;
            color: #495057;
            border: 1px solid transparent;
            border-radius: 0.25rem;
            -webkit-transition: all 0.1s ease-in-out;
            transition: all 0.1s ease-in-out;
          }

          .form-label-group input::-webkit-input-placeholder {
            color: transparent;
          }

          .form-label-group input:-ms-input-placeholder {
            color: transparent;
          }

          .form-label-group input::-ms-input-placeholder {
            color: transparent;
          }

          .form-label-group input::placeholder {
            color: transparent;
          }

          .form-label-group input:not(:placeholder-shown) {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }

          @media screen and (min-width: 400px) {
            .form-label-group input:not(:placeholder-shown) {
              padding-top: 2rem;
              padding-bottom: 1rem;
            }
          }

          .form-label-group input:not(:placeholder-shown) ~ label {
            padding-top: calc(0.5rem / 3);
            padding-bottom: calc(0.5rem / 3);
            font-size: 10px;
            color: #777;
          }

          @media screen and (min-width: 400px) {
            .form-label-group input:not(:placeholder-shown) ~ label {
              padding-top: calc(1.5rem / 3);
              padding-bottom: calc(1.5rem / 3);
              font-size: 12px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Input;
