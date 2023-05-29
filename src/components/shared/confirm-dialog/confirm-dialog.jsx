
export const ConfirmDialog = ({ show, message, okText, okAction, cancelText, cancelAction }) => {
  return (
    <div className={`modal${show === true ? " is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <p>{message}</p>
        <button className="button is-success" onClick={okAction}>
          {okText}
        </button>
        <button className="button" onClick={cancelAction}>
          {cancelText}
        </button>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={cancelAction}
      ></button>
    </div>
  );
};
