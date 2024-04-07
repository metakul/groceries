import { ShoppingBagOutlined } from '@mui/icons-material';
import { showCart } from '../../redux/slices/ui/ui';
import { selectedCartInfo } from '../../redux/slices/Product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = () => {
    const { totalQuantity,billAmount } = useSelector(selectedCartInfo);
     const dispatch = useDispatch();

     const add = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        dispatch(showCart());
      };

  return (
    <div
      className=" mr-4 flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white"
      onClick={(e) => add(e)}
    >
      <ShoppingBagOutlined  className="_wiggle" />
      <div className="flex flex-col font-bold text-[14px] leading-none">
        {totalQuantity === 0 ? (
          <span className="">My Cart</span>
        ) : (
          <>
            <span className="tracking-tight">{totalQuantity} items</span>
            <span className="tracking-tight mt-0.5">₹{billAmount}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default CartButton;
