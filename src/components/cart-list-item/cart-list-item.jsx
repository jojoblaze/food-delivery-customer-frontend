export const CartListItem = ({ item, removeAction }) => {
  return (
    <>
      <div className="columns">
        <div className="column is-2">X {item.quantity}</div>
        <div className="column is-6">{item.name}</div>
        <div className="column is-2">€ {item.subtotal}</div>
        <div className="column is-2">
          {" "}
          <button
            className="button"
            onClick={() =>
              removeAction !== undefined ? removeAction(item.id) : null
            }
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
