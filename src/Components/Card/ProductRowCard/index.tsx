import { ProductRow } from '../../../utils/types';
import ItemsCarousel from '../../Carousel/ItemsCarousel';

const ProductsRow = ({ data, objects }: ProductRow) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const products = objects.map((obj:any) =>
    obj.data.products.map((product: unknown[]) => product[0])
  )[0];

  return (
    <section>
      {data.show_header && (
        <div className="flex items-center justify-between h-16">
          <h2 className="font-bold text-[26px] _text-default">{data.title}</h2>
          {data.show_view_all && (
            <span className="text-green-700 font-bold cursor-pointer text-lg">
              {data.title_action}
            </span>
          )}
        </div>
      )}
      <ItemsCarousel topItems={products} />
    </section>
  );
};

export default ProductsRow;
