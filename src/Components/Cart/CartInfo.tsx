import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import { hideCart } from '../../redux/slices/ui/ui';
import { CartItem, ProductItem } from '../../utils/types';
import AddToCartButton from '../Buttons/AddToCartButton';
import SuggestedItems from './SuggestedItems';
import { shuffleItems } from '../../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { JSX } from 'react/jsx-runtime';
import { selectedCartInfo } from '../../redux/slices/Product/productSlice';

const products= [
   
    [
      {
        "rating": 0,
        "type_id": 3875,
        "sbc_offer": "100% OFF",
        "default_product_id": 436985,
        "has_details": true,
        "sts_visibility": false,
        "mapping_id": 94856277,
        "merchant_type": "Express",
        "sbc_price": 0,
        "unit": "1 piece",
        "pricing_comment": "",
        "level1_category": [
          {
            "parent_id": 287,
            "level": null,
            "name": "Masks & Sanitizers",
            "m_score": null,
            "id": 1826
          }
        ],
        "unit_price": 79,
        "unit_type": "piece",
        "rating_count": 0,
        "badges": [],
        "line_1": "Savlon Small Mask",
        "sbc_enabled": false,
        "type": "Mask",
        "brand": "Savlon",
        "inventory": 5,
        "recommended_purchase_quantity": 0,
        "offer": "16% OFF",
        "price": 79,
        "incentives": [],
        "sts_sbc_savings": null,
        "discount": 16,
        "level0_category": [
          {
            "parent_id": 287,
            "level": null,
            "name": "Pharma & Wellness",
            "m_score": null,
            "id": 287
          }
        ],
        "rating_star_color": null,
        "pl_flag": false,
        "product_tags": [],
        "video_meta": [],
        "line_2": "",
        "name": "Savlon Small Mask (White)",
        "rating_flag": false,
        "mrp": 95,
        "leaf_category": {
          "parent_id": 287,
          "level": "l1",
          "name": "Masks & Sanitizers",
          "m_score": null,
          "id": 1826
        },
        "received_at_ts": 0,
        "product_id": 436985,
        "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/436985a.jpg",
        "group_id": 540843,
        "next_available_at": {
          "next_available_ts": "",
          "next_available_text": ""
        },
        "combo_flag": false
      }
    ],
  
   
  ]
const CartPanelItem = (props: CartItem) => {
  const { image, title, subTitle, price, mrp } = props.product;
  return (
    <div className="flex p-4 gap-4 border-t _border-muted">
      <div>
        <div className="h-[72px] w-[72px] border rounded-[4px] overflow-hidden">
          <img src={image} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="text-left flex flex-col flex-1">
        <div className="_text-default text-[15px] leading-tight mb-2">
          {title}
        </div>
        <div className="text-sm _text-muted truncate mb-3">{subTitle}</div>
        <div className="flex items-center justify-between mt-auto">
          {mrp ? (
            <div className="flex gap-2 items-center">
              <span className="text-[15px] text-black font-bold leading-none">
                ₹{price}
              </span>
              <del className="text-[14px] text-gray-500">₹{mrp}</del>
            </div>
          ) : (
            <div>
              <span className="text-[14px] _text-default">₹{price}</span>
            </div>
          )}
          <div className="h-9 w-[90px]">
            <AddToCartButton product={props.product} />
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CartPanel = (props: any) => {
  const dispatch = useDispatch();
  const { totalAmount, totalQuantity, cartItems, billAmount, discount } =
    useSelector(selectedCartInfo);

//   const productItems = objects // use selector

    const items = products.map((product: unknown[]) => product[0]);


  const addedProducts = cartItems.map((item: { product: { id: unknown; }; }) => item.product.id);
  const otherProducts = items.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (item:any) => !addedProducts.includes(item.product_id.toString())
  );
  const topProducts = shuffleItems(otherProducts).slice(0, 10);

  return (
    <div className=" inset-0 h-screen  z-50 overflow-auto p-4">
      <div
        className=" z-10 inset-0 bg-black bg-opacity-[.65]"
      />
        <div className=" top-0 bg-white flex items-center justify-between p-4">
          <h2 className="font-extrabold text-2xl _text-default">My Cart</h2>
          <CloseFullscreenOutlinedIcon
            className="cursor-pointer"
            onClick={() => props.closeForm()}
          />
        </div>
        {totalQuantity === 0 ? (
          <div className="flex-1 bg-white p-6">
            <div className="flex flex-col gap-3 justify-center items-center text-center">
              <img src="empty-cart.webp" alt="" className="h-36 w-36" />
              <h3 className="font-bold text-lg leading-tight">
                You don't have any items in your cart
              </h3>
              <p className="text-sm _text-default mb-2">
                Your favourite items are just a click away
              </p>
              <button
                type="button"
                onClick={() => dispatch(hideCart())}
                className="bg-[#0c831f] text-white rounded-[8px] px-4 py-3 leading-none text-[13px] font-medium cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1">
              <div className="space-y-3 my-3">
                <div className="bg-white border-y _border-muted">
                  <div className="flex flex-col px-4 pt-5">
                    <div className="flex justify-between _text-muted text-xs">
                      <span>shipment of 1 of 1</span>
                      <span>{totalQuantity} items</span>
                    </div>
                    <p className="text-sm _text-default font-bold mb-1">
                      Delivery in some times
                    </p>
                  </div>
                  <div className="divide-y-1">
                    {cartItems.map((item: JSX.IntrinsicAttributes & CartItem) => (
                      <CartPanelItem key={item.product.id} {...item} />
                    ))}
                  </div>
                </div>
                <div className="bg-white">
                  <div className="font-bold text-xl text-black pt-5 px-4">
                    Before you checkout
                  </div>
                  <div className="relative px-3 my-2">
                    <SuggestedItems topItems={topProducts as ProductItem[]} />
                  </div>
                </div>
                <div className="bg-white">
                  <div className="font-bold text-xl text-black pt-5 px-4">
                    Bill Details
                  </div>
                  <div className="px-4 text-xs space-y-2 py-2">
                    <div className="flex items-start justify-between _text-default">
                      <span>MRP</span>
                      <span>₹{totalAmount}</span>
                    </div>
                    <div className="flex items-start justify-between _text-default">
                      <span>Product discount</span>
                      <span>- ₹{discount}</span>
                    </div>
                    <div className="flex items-start justify-between _text-default">
                      <p className="flex flex-col">
                        <span>Delivery charge</span>
                        <span className="text-[#0c831f]">
                          Hooray! You saved ₹15 on delivery charge
                        </span>
                      </p>
                      <span>
                        ₹15 <span className="text-[#0c831f]">free</span>{' '}
                      </span>
                    </div>
                    <div className="flex items-start justify-between text-[14px] text-black font-bold py-2">
                      <span>Bill total</span>
                      <span>₹{billAmount}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 border-t-2 bg-neutral-100 text-xs _text-muted border-b _border-muted">
                    Promo code can be applied on payments screen
                  </div>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white px-4 pt-2 pb-4 min-h-[68px] _shadow_sticky">
              <div className="bg-[#0c831f] cursor-pointer text-white flex items-center px-3 py-3 rounded-[4px] font-medium text-[14px]">
                <div className="font-bold">{totalQuantity} Items</div>
                <div className="font-bold">&nbsp; &middot; &nbsp;</div>
                <div>
                  <span className="font-extrabold">₹{billAmount}</span>
                  <del className="text-sm ml-1">₹{totalAmount}</del>
                </div>
                <div className="ml-auto flex items-center font-bold">
                  Proceed <KeyboardArrowRightOutlinedIcon  className="ml-2" />
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  );
};

export default CartPanel;
