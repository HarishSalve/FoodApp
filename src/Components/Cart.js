import ItemsLists from "./ItemsLists";
import { useSelector } from "react-redux";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="flex flex-col items-center w-6/12 m-auto p-3">
      <ItemsLists menuData={items} />
    </div>
  );
};

export default Cart;
