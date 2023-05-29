import { Link } from "react-router-dom";
import { CartListItem } from "../cart-list-item";

export const CartList = ({
  items,
  removeAction,
}) => {

  const listItems = items?.map(
    (cartItem, i) => (
      // <Link key={`dish-${i}`} onClick={() => selectDishAction(dish.id)}>
      <CartListItem
        key={`cart-item-${i}`}
        item={cartItem}
        // quantity={cartItem.quantity}
        // editAction={editAction}
        removeAction={removeAction}
        // activeOrderQuantity={getActiveOrder(dish.id)}
      />
    )
    // </Link>
  );

  return (
    <>
      {/* <pre>{JSON.stringify(activeOrders, null, 1)}</pre> */}
      {listItems}
    </>
  );
};
