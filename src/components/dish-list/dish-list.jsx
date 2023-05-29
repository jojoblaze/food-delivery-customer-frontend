import { Link } from "react-router-dom";
import { DishListItem } from "../dish-list-item";

export const DishList = ({
  dishes,
  editAction,
  removeAction,
  selectDishAction,
  activeOrders,
}) => {
  const getActiveOrder = (dishId) => {
    const a = activeOrders?.find((ao) => ao.dishId === dishId)?.quantity || 0;
    console.log("getActiveOrder", a);
    return a;
  };
  const listItems = dishes.map((dish, i) => (
    <Link key={`dish-${i}`} onClick={() => selectDishAction(dish.id)}>
      <DishListItem
        item={dish}
        editAction={editAction}
        removeAction={removeAction}
        activeOrderQuantity={getActiveOrder(dish.id)}
      />
    </Link>
  ));

  return (
    <>
      {/* <pre>{JSON.stringify(activeOrders, null, 1)}</pre> */}
      {listItems}
    </>
  );
};
