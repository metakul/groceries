import React from 'react';
import {addItem,removeItem, selectedCartInfo } from '../../redux/slices/Product/productSlice';
import { CartProduct } from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { Button, Typography } from '@mui/material';

type ButtonProps = {
  product: CartProduct;
  size?: 'sm' | 'lg';
};
const AddToCartButton = ({ product, size }: ButtonProps) => {
  const { cartItems } = useSelector(selectedCartInfo);
  const dispatch = useDispatch();

  const itemInCart = cartItems.filter(
    (item) => item.product.id === product.id
  )[0];
  const itemCount = itemInCart ? itemInCart.quantity : 0;

  const add = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addItem({ ...product }));
  };

  const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeItem(product.id));
  };

  const handleItemAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(
      addItem({
        ...product,
      })
    );
  };

  return itemCount > 0 ? (
    <div
      className={`flex h-full w-full justify-around rounded-lg uppercase font-bold text-sm bg-[#0c831f] cursor-pointer ${
        size === 'lg' ? 'text-lg' : 'text-normal'
      }`}
    >
      <button
        onClick={(e) => remove(e)}
        type="button"
        className="flex items-center justify-center w-8"
      >
        <RemoveCircleOutlineOutlinedIcon className="text-white" />
      </button>
      <Typography className="flex items-center justify-center text-white">
        {itemCount}
      </Typography>
      <button
        onClick={(e) => add(e)}
        type="button"
        className="flex items-center justify-center w-8"
      >
        <AddCircleOutlineOutlinedIcon  className="text-white" />
      </button>
    </div>
  ) : (
    <Button
      variant='contained'
      className={`_add_to_cart ${size === 'lg' ? 'text-md' : 'text-sm'}`}
      onClick={(e) => handleItemAdd(e)}
    >
      Add
    </Button>
  );
};

export default AddToCartButton;
