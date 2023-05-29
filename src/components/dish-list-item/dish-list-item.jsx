
export const DishListItem = ({ item, removeAction, activeOrderQuantity }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <p className="title">{item.name} {(activeOrderQuantity !== undefined && activeOrderQuantity > 0) ? `(X ${activeOrderQuantity})` : ``}</p>
          <p className="subtitle">{item.summary} - {item.price}</p>
          <button className="button" onClick={() => (removeAction !== undefined) ? removeAction(item) : null }>Remove</button>
        </div>
      </section>
    </>
  );
};
