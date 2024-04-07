import Carousel from 'react-multi-carousel';
import CarouselButtonGroup from '../../Carousel/CarouselButtonGroup';
import { shuffleItems } from '../../../utils/helper';
import 'react-multi-carousel/lib/styles.css';
import { ImageListItem } from '@mui/material';
const objects= [
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://collection-products?collection_id=62e3c0f967a21a00178d49f1&collection_mapping=113408765744582106563255797477710"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-08/HFS_RN-with-products_4.jpg",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_hfs_with_products_aug_22_web"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    },
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://layout?widget_layout_id=thums"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-07/Thumps-Up_RN-1.jpg",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_monet_coca_cola_thums_up"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    },
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://layout?widget_layout_id=rakhi"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-08/RB_offer_RN-South-Cities_0.jpg",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_rakhi_pan_india_web"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    },
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://collection-products?collection_id=61f25cbb1777dc001700bf08&collection_mapping=218565153208347981263417468625234"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-08/Sleepy-Owl_RN.jpg",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_monet_sleepy_owl_1"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    },
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://collection-products?collection_id=62e9fd1e22ded40017f555e0&collection_mapping=678629556126434102504541726952918"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-08/chocolate_RN-1.jpg",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_chocolate_aug"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    },
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://layout?widget_layout_id=its_chai_oclock"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-04/chai-evening-time-zomato.jpg",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_evening_chai_and_snacks_time"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    },
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://collection-products?collection_id=621875196ca2f1001774488d&collection_mapping=685914119517605770425479753131586"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-04/kids-zone_zomato.jpg",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_stationery_games_web"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    },
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://category?expr=%22c1160%22&facet=all"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-04/dry-fruits_zomato.jpg",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_dryfruit_generic"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    },
    {
      "action": {
        "tnc_uri": "",
        "default_uri": "grofers://category?expr=%22c926%22&facet=all"
      },
      "data": {
        "image_url": "https://cdn.grofers.com/layout-engine/2022-04/repllents_zomato.png",
        "id": ""
      },
      "meta": {
        "slider_type": null,
        "name": "pb_repellents_generic"
      },
      "type": 64,
      "layout_config": {
        "width": 258,
        "height": 150
      }
    }
  ]
const responsive = {
  uhdDesktop: {
    breakpoint: { max: 1920, min: 1601 },
    items: 4,
    slidesToSlide: 4,
    partialVisibilityGutter: 40,
  },
  superLargeDesktop: {
    breakpoint: { max: 1600, min: 1200 },
    items: 3,
    slidesToSlide: 3,
    partialVisibilityGutter: 40,
  },
  largeDesktop: {
    breakpoint: { max: 1200, min: 767 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 20,
  },
  tablet: {
    breakpoint: { max: 767, min: 540 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 20,
  },
};

const FeaturedPromo = () => {
  const allPromos = objects?.map(
    (el: { data: { image_url: string; }; }) => el.data.image_url || ""
  );

  const promos = shuffleItems(allPromos);

  return (
    <section>
      <div className=" relative pb-2 pt-4">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselButtonGroup next={function (): void {
            throw new Error('Error Loading.');
          } } previous={function (): void {
            throw new Error('Error Loading.');
          } } carouselState={{
            currentSlide: 0,
            slidesToShow: 0,
            totalItems: 0
          }} />}
          shouldResetAutoplay={false}
          infinite={false}
          itemClass="mr-4"
          partialVisible
        >
          {promos?.map((promo, i) => (
            <div
              key={i}
              className="rounded-lg w-full lg:w-[360px] cursor-pointer max-h-[280px] sm:h-[200px] overflow-hidden"
            >
             
                  <ImageListItem >
      <img
        src={promo as string}
        alt={"..."}
        loading="lazy"
      />
    </ImageListItem>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedPromo;
