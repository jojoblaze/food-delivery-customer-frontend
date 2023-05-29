import { DishList } from "../dish-list";

export const Shop = ({ shop, selectDishAction }) => {
  return (
    <>
    {/* <pre>{JSON.stringify(shop, null, 1)}</pre> */}
      <section className="hero">
        <div className="hero-body">
          <p className="title">{shop.name}</p>
          {/* <p className="subtitle">{item.summary} - {item.price}</p> */}
          <DishList dishes={shop.dishes} selectDishAction={selectDishAction} activeOrders={shop.activeOrders} />
        </div>
      </section>
    </>
  );
};
