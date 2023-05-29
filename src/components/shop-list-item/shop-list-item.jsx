
export const ShopListItem = ({ item }) => {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <p className="title">{item.name}</p>
          <p className="subtitle">{item.summary} - {item.price}</p>
        </div>
      </section>
    </>
  );
};
