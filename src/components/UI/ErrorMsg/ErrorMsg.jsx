export const ErrorMsg = ({ message }) => {
  return (
    <div className="error-message__wrapper">
      <p className="error-message"> {message} &#128532;</p>
    </div>
  );
};
