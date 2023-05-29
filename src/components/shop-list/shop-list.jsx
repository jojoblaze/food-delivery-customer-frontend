import { Link } from "react-router-dom";
import { ShopListItem } from "../shop-list-item";

export const ShopList = ({ shops, editAction, removeAction }) => {
  const listItems = shops.map((shop, i) => (
    <Link key={`shop-${i}`} className="navbar-item" to={`merchants/${shop.id}`}>
      <ShopListItem item={shop} />
    </Link>
  ));

  return listItems;
};
