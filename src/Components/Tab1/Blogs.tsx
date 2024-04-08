// import { useNavigate } from 'react-router-dom';
import AddToCartButton from '../Buttons/AddToCartButton';
import { CartProduct, ProductItem } from '../../utils/types';
// import { convertTextToURLSlug } from '../../utils/helper';
import {  Grid } from '@mui/material';
import { useState } from 'react';
import SingleProduct from '../Card/SingleProductCard';

const ProductCard = ({ data }: { data: ProductItem }) => {
  // const navigate = useNavigate();
  const { product_id, name, unit, price, mrp, image_url, discount } = data;
  const [itemDetails, setItemDetails]=useState(false)

  const cartProduct: CartProduct = {
    id: product_id.toString(),
    title: name,
    subTitle: unit,
    image: image_url,
    price,
    mrp,
  };

  const handleProductClick = () => {
    // const pname = convertTextToURLSlug(data.name);
    // navigate({
    //   pathname: `/prn/${pname}/prid/${data.product_id}`,
    // });

    setItemDetails(!itemDetails)
  };

  const handleCloseModal = () => {
    setItemDetails(!itemDetails);
  };

  return (
    <Grid item xs={6} md={4} lg={3}>
    <div
      className="_card h-[270px] mr-4 border border-jacarta-200 rounded-md  relative flex   justify-center cursor-pointer mb-2 "
      onClick={handleProductClick}
    >
      {/* {data.offer && (
        <div className=" bg-blue-600 text-white py-1 text-xs font-medium -left-[1px] top-4 rounded-tr-xl rounded-br-xl uppercase">
          {data.offer}
        </div>
      )} */}
      <div className="overflow-hidden text-left flex flex-col mt-auto">
      <div className="h-[154px] w-154px">
        <img src={image_url} alt="" className="h-full w-40 p-2" />
      </div>
        <div className="_text-default text-[13px] font-medium leading-tight line-clamp-2 mb-0.5">
          {name}
        </div>
        <div className="text-sm _text-muted truncate mb-3">{unit}</div>
        <div className="flex items-center justify-around mt-auto">
          {discount ? (
            <div className="flex flex-col">
              <span className="text-[14px] _text-default font-semibold leading-none">
                ₹{price}
              </span>
              <del className="text-xs text-gray-400">₹{mrp}</del>
            </div>
          ) : (
            <div>
              <span className="text-[14px] _text-default">₹{mrp}</span>
            </div>
          )}
          <div className="h-9 w-[90px] flex justify-around mb-4">
            <AddToCartButton product={cartProduct} />
          </div>
        </div>
      </div>
    </div>

    {itemDetails && (
        <SingleProduct
        open={itemDetails}
        onClose={handleCloseModal}
        modalTitle={name}
        modalContent={unit}
        cartProduct={cartProduct}
        />
      )}
  </Grid>

  );
};

export default ProductCard;
