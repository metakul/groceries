import { ShoppingBagOutlined } from '@mui/icons-material';
import { selectedCartInfo } from '../../redux/slices/Product/productSlice';
import {  useSelector } from 'react-redux';
import { MouseEventHandler } from 'react';

const CartButton = (props: { onClick: MouseEventHandler<HTMLDivElement> | undefined; }) => {
    const { totalQuantity,billAmount } = useSelector(selectedCartInfo);

  return (
    <div
      className=" mr-4 flex items-center rounded-[6px] min-w-[112px] h-[50px] py-2 px-3 gap-2 font-bold text-sm bg-[#0c831f] cursor-pointer text-white"
      onClick={props.onClick}
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
