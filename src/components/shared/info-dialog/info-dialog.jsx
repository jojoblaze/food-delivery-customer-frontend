
export const InfoDialog = ({ show, message, okText, okAction }) => {
  return (
    <div className={`modal${show === true ? " is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <p>{message}</p>
        <button className="button is-success" onClick={okAction}>
          {okText}
        </button>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={okAction}
      ></button>
    </div>
  );
};
