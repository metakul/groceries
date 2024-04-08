// Tab1.jsx

import { Box, Grid } from '@mui/material';
import Marquee from '../MarqueCrypto';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// import { selectedTopItems } from '../../redux/slices/Blogs/itemCollectionSlice';
import { AppDispatch } from '../../redux/store';
import { fetchBlogApiSlice } from '../../redux/slices/Blogs/BlogApiSlice';
import { FetchBlogData } from '../../interfaces/interface';
import FeaturedPromo from '../Card/FeaturedCard';
import ProductsRow from '../Card/ProductRowCard';
import { Key } from 'react';
import { JSX } from 'react/jsx-runtime';
import { ProductItem, ProductRow } from '../../utils/types';
import ProductCard from './Blogs';


const objects= [
  {
    "action": {
      "default_uri": null
    },
    "type": 21,
    "data": {
      "merchant": {
        "delivery_type": "",
        "delivery_charge": 19,
        "name": "Super Store - Kolkata NSC Bose Road ES30",
        "min_order": 99,
        "actual_name": "Super Store",
        "id": 31189
      },
      "show_view_all": true,
      "should_display_atc_button": true,
      "title_action": "see all",
      "card_type": 5,
      "products": [
        [
          {
            "rating": 0,
            "type_id": 4205,
            "sbc_offer": "100% OFF",
            "default_product_id": 313249,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94761189,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "300 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Cream Biscuits",
                "m_score": null,
                "id": 105
              }
            ],
            "unit_price": 0.4033333333,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Cookies",
            "brand": "Sunfeast Dark Fantasy",
            "inventory": 7,
            "recommended_purchase_quantity": 0,
            "offer": "28% OFF",
            "price": 121,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 28,
            "level0_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Bakery & Biscuits",
                "m_score": null,
                "id": 888
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Sunfeast Dark Fantasy Biscuit - Choco Fills Cookies 300 g",
            "rating_flag": false,
            "mrp": 170,
            "leaf_category": {
              "parent_id": 888,
              "level": "l1",
              "name": "Cream Biscuits",
              "m_score": null,
              "id": 105
            },
            "received_at_ts": 0,
            "product_id": 313249,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/313249a.jpg?ts=1648546100",
            "group_id": 533880,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 8619,
            "sbc_offer": "100% OFF",
            "default_product_id": 424025,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94848813,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "150 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Popcorn",
                "m_score": null,
                "id": 156
              }
            ],
            "unit_price": 1.2,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "4700BC Nutty Tuxedo Chocolate Popcorn",
            "sbc_enabled": false,
            "type": "Popcorn",
            "brand": "4700BC",
            "inventory": 3,
            "recommended_purchase_quantity": 0,
            "offer": "10% OFF",
            "price": 180,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 10,
            "level0_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Munchies",
                "m_score": null,
                "id": 1237
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "4700BC Nutty Tuxedo Chocolate Popcorn",
            "rating_flag": false,
            "mrp": 200,
            "leaf_category": {
              "parent_id": 1237,
              "level": "l1",
              "name": "Popcorn",
              "m_score": null,
              "id": 156
            },
            "received_at_ts": 0,
            "product_id": 424025,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/424025a.jpg?ts=1621068567",
            "group_id": 482030,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 11342,
            "sbc_offer": "100% OFF",
            "default_product_id": 382396,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94798015,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "300 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Cream Biscuits",
                "m_score": null,
                "id": 105
              }
            ],
            "unit_price": 0.2266666667,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Sandwich Cream Biscuits",
            "brand": "Cadbury",
            "inventory": 7,
            "recommended_purchase_quantity": 0,
            "offer": "20% OFF",
            "price": 68,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 20,
            "level0_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Bakery & Biscuits",
                "m_score": null,
                "id": 888
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Cadbury Oreo Vanilla Family Pack Sandwich Cream Biscuits 300 g",
            "rating_flag": false,
            "mrp": 85,
            "leaf_category": {
              "parent_id": 888,
              "level": "l1",
              "name": "Cream Biscuits",
              "m_score": null,
              "id": 105
            },
            "received_at_ts": 0,
            "product_id": 382396,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/382396a.jpg?ts=1654492739",
            "group_id": 539759,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 4951,
            "sbc_offer": "100% OFF",
            "default_product_id": 11020,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94727844,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "126 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 9,
                "level": null,
                "name": "Chocolate Packs",
                "m_score": null,
                "id": 1173
              }
            ],
            "unit_price": 0.9682539683,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Chocolate",
            "brand": "Cadbury Dairy Milk",
            "inventory": 16,
            "recommended_purchase_quantity": 0,
            "offer": "18% OFF",
            "price": 122,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 18,
            "level0_category": [
              {
                "parent_id": 9,
                "level": null,
                "name": "Sweet Tooth",
                "m_score": null,
                "id": 9
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Cadbury Dairy Milk Home Treats Chocolate",
            "rating_flag": false,
            "mrp": 149,
            "leaf_category": {
              "parent_id": 9,
              "level": "l1",
              "name": "Chocolate Packs",
              "m_score": null,
              "id": 1173
            },
            "received_at_ts": 0,
            "product_id": 11020,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/11020a.jpg",
            "group_id": 90811,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 11177,
            "sbc_offer": "100% OFF",
            "default_product_id": 52639,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94736911,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "900 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Bhujia & Mixtures",
                "m_score": null,
                "id": 1178
              }
            ],
            "unit_price": 0.2666666667,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "Prabhuji Bhujia",
            "sbc_enabled": false,
            "type": "Bhujia",
            "brand": "Prabhuji",
            "inventory": 14,
            "recommended_purchase_quantity": 0,
            "offer": "36% OFF",
            "price": 240,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 36,
            "level0_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Munchies",
                "m_score": null,
                "id": 1237
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Prabhuji Bhujia",
            "rating_flag": false,
            "mrp": 380,
            "leaf_category": {
              "parent_id": 1237,
              "level": "l1",
              "name": "Bhujia & Mixtures",
              "m_score": null,
              "id": 1178
            },
            "received_at_ts": 0,
            "product_id": 52639,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/52639a.jpg",
            "group_id": 536012,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 1096,
            "sbc_offer": "100% OFF",
            "default_product_id": 18471,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94729464,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "336 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Cream Biscuits",
                "m_score": null,
                "id": 105
              }
            ],
            "unit_price": 0.369047619,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Choco Pie",
            "brand": "Lotte",
            "inventory": 18,
            "recommended_purchase_quantity": 0,
            "offer": "17% OFF",
            "price": 124,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 17,
            "level0_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Bakery & Biscuits",
                "m_score": null,
                "id": 888
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Lotte Choco Pie - 12 units",
            "rating_flag": false,
            "mrp": 150,
            "leaf_category": {
              "parent_id": 888,
              "level": "l1",
              "name": "Cream Biscuits",
              "m_score": null,
              "id": 105
            },
            "received_at_ts": 0,
            "product_id": 18471,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/18471a.jpg?ts=1592078199",
            "group_id": 537087,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 7009,
            "sbc_offer": "100% OFF",
            "default_product_id": 439142,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94857430,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "2 x 104 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Chips & Crisps",
                "m_score": null,
                "id": 940
              }
            ],
            "unit_price": 0.4134615385,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "Lay's American Style Cream & Onion Flavour Potato Chips (Pouch) - Pack of 2",
            "sbc_enabled": false,
            "type": "Potato Chips",
            "brand": "Lay's",
            "inventory": 9,
            "recommended_purchase_quantity": 0,
            "offer": "14% OFF",
            "price": 86,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 14,
            "level0_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Munchies",
                "m_score": null,
                "id": 1237
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Lay's American Style Cream & Onion Flavour Potato Chips - Pack of 2",
            "rating_flag": false,
            "mrp": 100,
            "leaf_category": {
              "parent_id": 940,
              "level": "l2",
              "name": "Potato Chips",
              "m_score": null,
              "id": 26
            },
            "received_at_ts": 0,
            "product_id": 439142,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/439142a.jpg?ts=1653659064",
            "group_id": 438084,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": true
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 2456,
            "sbc_offer": "100% OFF",
            "default_product_id": 392931,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94813822,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "1 kg",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Healthy & Digestive",
                "m_score": null,
                "id": 938
              }
            ],
            "unit_price": 0.176,
            "unit_type": "kg",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Biscuit",
            "brand": "Britannia NutriChoice",
            "inventory": 28,
            "recommended_purchase_quantity": 0,
            "offer": "20% OFF",
            "price": 176,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 20,
            "level0_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Bakery & Biscuits",
                "m_score": null,
                "id": 888
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Britannia NutriChoice Digestive High Fibre Biscuit - Super Saver pack",
            "rating_flag": false,
            "mrp": 220,
            "leaf_category": {
              "parent_id": 888,
              "level": "l1",
              "name": "Healthy & Digestive",
              "m_score": null,
              "id": 938
            },
            "received_at_ts": 0,
            "product_id": 392931,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/392931a.jpg?ts=1644494108",
            "group_id": 627067,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 8423,
            "sbc_offer": "100% OFF",
            "default_product_id": 34338,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94734050,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "1 kg",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Bhujia & Mixtures",
                "m_score": null,
                "id": 1178
              }
            ],
            "unit_price": 0.242,
            "unit_type": "kg",
            "rating_count": 0,
            "badges": [],
            "line_1": "Bikano Shahi Mixture Namkeen",
            "sbc_enabled": false,
            "type": "Mixture Namkeen",
            "brand": "Bikano",
            "inventory": 3,
            "recommended_purchase_quantity": 0,
            "offer": "18% OFF",
            "price": 242,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 18,
            "level0_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Munchies",
                "m_score": null,
                "id": 1237
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Bikano Shahi Mixture Namkeen",
            "rating_flag": false,
            "mrp": 297,
            "leaf_category": {
              "parent_id": 1237,
              "level": "l1",
              "name": "Bhujia & Mixtures",
              "m_score": null,
              "id": 1178
            },
            "received_at_ts": 0,
            "product_id": 34338,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/34338a.jpg",
            "group_id": 221816,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 3251,
            "sbc_offer": "100% OFF",
            "default_product_id": 15366,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94728755,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "300 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Rusks & Wafers",
                "m_score": null,
                "id": 107
              }
            ],
            "unit_price": 0.1466666667,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Rusk",
            "brand": "Britannia",
            "inventory": 50,
            "recommended_purchase_quantity": 0,
            "offer": "12% OFF",
            "price": 44,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 12,
            "level0_category": [
              {
                "parent_id": 888,
                "level": null,
                "name": "Bakery & Biscuits",
                "m_score": null,
                "id": 888
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Britannia Toastea Premium Bake Rusk",
            "rating_flag": false,
            "mrp": 50,
            "leaf_category": {
              "parent_id": 888,
              "level": "l1",
              "name": "Rusks & Wafers",
              "m_score": null,
              "id": 107
            },
            "received_at_ts": 0,
            "product_id": 15366,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/15366a.jpg?ts=1640005056",
            "group_id": 391207,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 5251,
            "sbc_offer": "100% OFF",
            "default_product_id": 127096,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94748158,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "187.2 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 9,
                "level": null,
                "name": "Chocolate Packs",
                "m_score": null,
                "id": 1173
              }
            ],
            "unit_price": 0.4540598291,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Wafers",
            "brand": "Nestle",
            "inventory": 6,
            "recommended_purchase_quantity": 0,
            "offer": "15% OFF",
            "price": 85,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 15,
            "level0_category": [
              {
                "parent_id": 9,
                "level": null,
                "name": "Sweet Tooth",
                "m_score": null,
                "id": 9
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Nestle Munch Chocolate Coated Crunchy Wafers - Share Pack",
            "rating_flag": false,
            "mrp": 100,
            "leaf_category": {
              "parent_id": 9,
              "level": "l1",
              "name": "Chocolate Packs",
              "m_score": null,
              "id": 1173
            },
            "received_at_ts": 0,
            "product_id": 127096,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/127096a.jpg",
            "group_id": 531329,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 3462,
            "sbc_offer": "100% OFF",
            "default_product_id": 383615,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94799927,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "119 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 9,
                "level": null,
                "name": "Chocolate Packs",
                "m_score": null,
                "id": 1173
              }
            ],
            "unit_price": 0.7142857143,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Wafer Bar",
            "brand": "Nestle KITKAT",
            "inventory": 42,
            "recommended_purchase_quantity": 0,
            "offer": "15% OFF",
            "price": 85,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 15,
            "level0_category": [
              {
                "parent_id": 9,
                "level": null,
                "name": "Sweet Tooth",
                "m_score": null,
                "id": 9
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Nestle KITKAT Wafer Bar Share Bag (7 packs inside)",
            "rating_flag": false,
            "mrp": 100,
            "leaf_category": {
              "parent_id": 9,
              "level": "l1",
              "name": "Chocolate Packs",
              "m_score": null,
              "id": 1173
            },
            "received_at_ts": 0,
            "product_id": 383615,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/383615a.jpg?ts=1630648502",
            "group_id": 524775,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 5248,
            "sbc_offer": "100% OFF",
            "default_product_id": 401228,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94826873,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "2 x 66 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Chips & Crisps",
                "m_score": null,
                "id": 940
              }
            ],
            "unit_price": 0.2727272727,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "Bingo Mad Angles Masala Madness Crisps - Pack of 2",
            "sbc_enabled": false,
            "type": "Crisps",
            "brand": "Bingo Mad Angles",
            "inventory": 6,
            "recommended_purchase_quantity": 0,
            "offer": "10% OFF",
            "price": 36,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 10,
            "level0_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Munchies",
                "m_score": null,
                "id": 1237
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Bingo Mad Angles Masala Madness Crisps - Pack of 2",
            "rating_flag": false,
            "mrp": 40,
            "leaf_category": {
              "parent_id": 940,
              "level": "l2",
              "name": "Crisps & Puffs",
              "m_score": null,
              "id": 1177
            },
            "received_at_ts": 0,
            "product_id": 401228,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/401228a.jpg?ts=1653665108",
            "group_id": 536053,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": true
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 11583,
            "sbc_offer": "100% OFF",
            "default_product_id": 375328,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94785601,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "3 x 55 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Chips & Crisps",
                "m_score": null,
                "id": 940
              }
            ],
            "unit_price": 0.3090909091,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "Kurkure Puffcorn Yummy Cheese Puffs - Pack of 3",
            "sbc_enabled": false,
            "type": "Puffs",
            "brand": "Kurkure",
            "inventory": 9,
            "recommended_purchase_quantity": 0,
            "offer": "15% OFF",
            "price": 51,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 15,
            "level0_category": [
              {
                "parent_id": 1237,
                "level": null,
                "name": "Munchies",
                "m_score": null,
                "id": 1237
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Kurkure Puffcorn Yummy Cheese Puffs - Pack of 3",
            "rating_flag": false,
            "mrp": 60,
            "leaf_category": {
              "parent_id": 940,
              "level": "l2",
              "name": "Crisps & Puffs",
              "m_score": null,
              "id": 1177
            },
            "received_at_ts": 0,
            "product_id": 375328,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/375328a.jpg?ts=1653994680",
            "group_id": 536054,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": true
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 1038,
            "sbc_offer": "100% OFF",
            "default_product_id": 375552,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94785897,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "450 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 9,
                "level": null,
                "name": "Indian Sweets",
                "m_score": null,
                "id": 943
              }
            ],
            "unit_price": 0.3577777778,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Soan Papdi",
            "brand": "Prabhuji",
            "inventory": 12,
            "recommended_purchase_quantity": 0,
            "offer": "26% OFF",
            "price": 161,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 26,
            "level0_category": [
              {
                "parent_id": 9,
                "level": null,
                "name": "Sweet Tooth",
                "m_score": null,
                "id": 9
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Prabhuji Elaichi Soan Papdi",
            "rating_flag": false,
            "mrp": 220,
            "leaf_category": {
              "parent_id": 9,
              "level": "l1",
              "name": "Indian Sweets",
              "m_score": null,
              "id": 943
            },
            "received_at_ts": 0,
            "product_id": 375552,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/375552a.jpg?ts=1617795519",
            "group_id": 471056,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ]
      ],
      "collection_id": "6042068b90a7b20016e04f6c",
      "product_rows": 1,
      "deeplink_action": "grofers://collection-products?collection_id=6042068b90a7b20016e04f6c"
    }
  }
]

const data= {
  "show_header": true,
  "header_text_color": "#000000",
  "subtitle": "namkeen, biscuits, chips and more",
  "title": "Biscuits, snacks & chocolates",
  "collection_name": null,
  "title_img_url": null,
  "title_action": "see all",
  "show_view_all": true,
  "theme": "LIGHT",
  "is_for_gifting": false,
  "animation_delay": 100,
  "is_animated": false,
  "deeplink_action": "grofers://collection-products?collection_id=6042068b90a7b20016e04f6c",
  "product_name_no_of_lines": 2
}

const objects2= [
  {
    "action": {
      "default_uri": "grofers://collection-products?collection_id=61652ccb297bc50016519100"
    },
    "type": 21,
    "data": {
      "merchant": {
        "delivery_type": "",
        "delivery_charge": 19,
        "name": "Super Store - Kolkata NSC Bose Road ES30",
        "min_order": 99,
        "actual_name": "Super Store",
        "id": 31189
      },
      "show_view_all": true,
      "should_display_atc_button": true,
      "title_action": "see all",
      "card_type": 5,
      "products": [
        [
          {
            "rating": 0,
            "type_id": 10999,
            "sbc_offer": "100% OFF",
            "default_product_id": 480693,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 111942285,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "3 pieces",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Healthcare Devices",
                "m_score": null,
                "id": 62
              }
            ],
            "unit_price": 102.6666666667,
            "unit_type": "pieces",
            "rating_count": 0,
            "badges": [],
            "line_1": "Plush Preg-oh! Pregnancy Test Kit (Midstream)",
            "sbc_enabled": false,
            "type": "Pregnancy Test Kit",
            "brand": "Plush",
            "inventory": 4,
            "recommended_purchase_quantity": 0,
            "offer": "11% OFF",
            "price": 308,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 11,
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
            "name": "Plush Preg-oh! Pregnancy Test Kit (Midstream)",
            "rating_flag": false,
            "mrp": 349,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Healthcare Devices",
              "m_score": null,
              "id": 62
            },
            "received_at_ts": 0,
            "product_id": 480693,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/480693a.jpg?ts=1650977521",
            "group_id": 617192,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 7871,
            "sbc_offer": "100% OFF",
            "default_product_id": 434549,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94855835,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "10 units",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Sexual Wellness",
                "m_score": null,
                "id": 707
              }
            ],
            "unit_price": 33.5,
            "unit_type": "units",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Condom",
            "brand": "Durex",
            "inventory": 3,
            "recommended_purchase_quantity": 0,
            "offer": "23% OFF",
            "price": 335,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 23,
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
            "name": "Durex Invisible Super Ultra Thin Condom",
            "rating_flag": false,
            "mrp": 440,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Sexual Wellness",
              "m_score": null,
              "id": 707
            },
            "received_at_ts": 0,
            "product_id": 434549,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/434549a.jpg?ts=1633497471",
            "group_id": 448393,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 2699,
            "sbc_offer": "100% OFF",
            "default_product_id": 36700,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94734774,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "50 ml",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Sexual Wellness",
                "m_score": null,
                "id": 707
              }
            ],
            "unit_price": 7.6,
            "unit_type": "ml",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Lubricant",
            "brand": "Durex",
            "inventory": 2,
            "recommended_purchase_quantity": 0,
            "offer": "23% OFF",
            "price": 380,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 23,
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
            "name": "Durex Play Intimate Sweet Strawberry Lubricant",
            "rating_flag": false,
            "mrp": 499,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Sexual Wellness",
              "m_score": null,
              "id": 707
            },
            "received_at_ts": 0,
            "product_id": 36700,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/36700a.jpg?ts=1633495615",
            "group_id": 214735,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 10759,
            "sbc_offer": "100% OFF",
            "default_product_id": 18862,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94729666,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "80 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Wound Care And Pain Relief",
                "m_score": null,
                "id": 155
              }
            ],
            "unit_price": 3.2,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Spray",
            "brand": "Moov",
            "inventory": 3,
            "recommended_purchase_quantity": 2,
            "offer": "11% OFF",
            "price": 256,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 11,
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
            "name": "Moov Instant Pain Relief Spray",
            "rating_flag": false,
            "mrp": 290,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Wound Care And Pain Relief",
              "m_score": null,
              "id": 155
            },
            "received_at_ts": 0,
            "product_id": 18862,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/18862a.jpg?ts=1643966797",
            "group_id": 531267,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 12098,
            "sbc_offer": "100% OFF",
            "default_product_id": 479302,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94868332,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "1 unit",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Healthcare Devices",
                "m_score": null,
                "id": 62
              }
            ],
            "unit_price": 1205,
            "unit_type": "unit",
            "rating_count": 0,
            "badges": [],
            "line_1": "Dr. Morepen Pulse Oximeter",
            "sbc_enabled": false,
            "type": "Oximeter",
            "brand": "Dr. Morepen",
            "inventory": 2,
            "recommended_purchase_quantity": 0,
            "offer": "19% OFF",
            "price": 1205,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 19,
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
            "name": "Dr. Morepen Pulse Oximeter",
            "rating_flag": false,
            "mrp": 1500,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Healthcare Devices",
              "m_score": null,
              "id": 62
            },
            "received_at_ts": 0,
            "product_id": 479302,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/479302a.jpg",
            "group_id": 524741,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 1703,
            "sbc_offer": "100% OFF",
            "default_product_id": 479305,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94868335,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "1 unit",
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
            "unit_price": 498,
            "unit_type": "unit",
            "rating_count": 0,
            "badges": [],
            "line_1": "Krishna PPE Kit",
            "sbc_enabled": false,
            "type": "PPE Kit",
            "brand": "Krishna",
            "inventory": 1,
            "recommended_purchase_quantity": 0,
            "offer": "37% OFF",
            "price": 498,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 37,
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
            "name": "Krishna PPE Kit",
            "rating_flag": false,
            "mrp": 799,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Masks & Sanitizers",
              "m_score": null,
              "id": 1826
            },
            "received_at_ts": 0,
            "product_id": 479305,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/479305a.jpg?ts=1641301819",
            "group_id": 524679,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
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
        [
          {
            "rating": 0,
            "type_id": 11091,
            "sbc_offer": "100% OFF",
            "default_product_id": 467014,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94864363,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "500 ml",
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
            "unit_price": 0.46,
            "unit_type": "ml",
            "rating_count": 0,
            "badges": [],
            "line_1": "Dettol Clinical Strength Hand Sanitizer",
            "sbc_enabled": false,
            "type": "Hand Sanitizer",
            "brand": "Dettol",
            "inventory": 2,
            "recommended_purchase_quantity": 3,
            "offer": "8% OFF",
            "price": 230,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 8,
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
            "name": "Dettol Clinical Strength Hand Sanitizer",
            "rating_flag": false,
            "mrp": 250,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Masks & Sanitizers",
              "m_score": null,
              "id": 1826
            },
            "received_at_ts": 0,
            "product_id": 467014,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/467014a.jpg",
            "group_id": 521070,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 10352,
            "sbc_offer": "100% OFF",
            "default_product_id": 990,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94726713,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "30 ml",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Digestive Care",
                "m_score": null,
                "id": 298
              }
            ],
            "unit_price": 1.7666666667,
            "unit_type": "ml",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Drops",
            "brand": "Dabur Pudin Hara",
            "inventory": 3,
            "recommended_purchase_quantity": 0,
            "offer": null,
            "price": 53,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 3,
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
            "name": "Dabur Pudin Hara Active Drops",
            "rating_flag": false,
            "mrp": 55,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Digestive Care",
              "m_score": null,
              "id": 298
            },
            "received_at_ts": 0,
            "product_id": 990,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/990a.jpg",
            "group_id": 525067,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 11100,
            "sbc_offer": "100% OFF",
            "default_product_id": 476976,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94866181,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "8 units",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Wound Care And Pain Relief",
                "m_score": null,
                "id": 155
              }
            ],
            "unit_price": 2.75,
            "unit_type": "units",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Adhesive Bandage",
            "brand": "Hansaplast",
            "inventory": 3,
            "recommended_purchase_quantity": 0,
            "offer": null,
            "price": 22,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 0,
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
            "name": "Hansaplast Washproof Adhesive Bandage (8 pieces)",
            "rating_flag": false,
            "mrp": 22,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Wound Care And Pain Relief",
              "m_score": null,
              "id": 155
            },
            "received_at_ts": 0,
            "product_id": 476976,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/476976a.jpg",
            "group_id": 635042,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 177,
            "sbc_offer": "100% OFF",
            "default_product_id": 477209,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94866406,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "10 units",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Adult Diapers",
                "m_score": null,
                "id": 629
              }
            ],
            "unit_price": 48.4,
            "unit_type": "units",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Adult Diaper",
            "brand": "Friends",
            "inventory": 3,
            "recommended_purchase_quantity": 0,
            "offer": "12% OFF",
            "price": 484,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 12,
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
            "name": "Friends Classic Dry Adult Diaper (Large)",
            "rating_flag": false,
            "mrp": 550,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Adult Diapers",
              "m_score": null,
              "id": 629
            },
            "received_at_ts": 0,
            "product_id": 477209,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/477209a.jpg",
            "group_id": 531591,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 57,
            "sbc_offer": "100% OFF",
            "default_product_id": 309634,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94760852,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "300 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 7,
                "level": null,
                "name": "Baby Food",
                "m_score": null,
                "id": 1590
              }
            ],
            "unit_price": 0.91,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Baby Cereal",
            "brand": "Nestle",
            "inventory": 6,
            "recommended_purchase_quantity": 2,
            "offer": "9% OFF",
            "price": 273,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 9,
            "level0_category": [
              {
                "parent_id": 7,
                "level": null,
                "name": "Baby Care",
                "m_score": null,
                "id": 7
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Nestle Ceregrow Growing Up Baby Cereal",
            "rating_flag": false,
            "mrp": 303,
            "leaf_category": {
              "parent_id": 1590,
              "level": "l2",
              "name": "24 Months+",
              "m_score": null,
              "id": 1598
            },
            "received_at_ts": 0,
            "product_id": 309634,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/309634a.jpg?ts=1646806090",
            "group_id": 553793,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 1333,
            "sbc_offer": "100% OFF",
            "default_product_id": 429438,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94854338,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "400 g",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 7,
                "level": null,
                "name": "Baby Food",
                "m_score": null,
                "id": 1590
              }
            ],
            "unit_price": 0.81,
            "unit_type": "g",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Health Drink",
            "brand": "Nestle",
            "inventory": 3,
            "recommended_purchase_quantity": 2,
            "offer": "10% OFF",
            "price": 324,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 10,
            "level0_category": [
              {
                "parent_id": 7,
                "level": null,
                "name": "Baby Care",
                "m_score": null,
                "id": 7
              }
            ],
            "rating_star_color": null,
            "pl_flag": false,
            "product_tags": [],
            "video_meta": [],
            "line_2": "",
            "name": "Nestle Lactogrow Nutritious Health Drink",
            "rating_flag": false,
            "mrp": 360,
            "leaf_category": {
              "parent_id": 1590,
              "level": "l2",
              "name": "24 Months+",
              "m_score": null,
              "id": 1598
            },
            "received_at_ts": 0,
            "product_id": 429438,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/429438a.jpg?ts=1645512938",
            "group_id": 533779,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 9840,
            "sbc_offer": "100% OFF",
            "default_product_id": 477244,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94866441,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "1 unit",
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
            "unit_price": 108,
            "unit_type": "unit",
            "rating_count": 0,
            "badges": [],
            "line_1": "3M 9513 Respirator KN95 Face Mask",
            "sbc_enabled": false,
            "type": "Face Mask",
            "brand": "3M",
            "inventory": 5,
            "recommended_purchase_quantity": 0,
            "offer": null,
            "price": 108,
            "incentives": [],
            "sts_sbc_savings": null,
            "discount": 1,
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
            "name": "3M 9513 Respirator KN95 Face Mask",
            "rating_flag": false,
            "mrp": 110,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Masks & Sanitizers",
              "m_score": null,
              "id": 1826
            },
            "received_at_ts": 0,
            "product_id": 477244,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/477244a.jpg",
            "group_id": 519808,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ],
        [
          {
            "rating": 0,
            "type_id": 4578,
            "sbc_offer": "100% OFF",
            "default_product_id": 1017,
            "has_details": true,
            "sts_visibility": false,
            "mapping_id": 94726746,
            "merchant_type": "Express",
            "sbc_price": 0,
            "unit": "25 ml",
            "pricing_comment": "",
            "level1_category": [
              {
                "parent_id": 287,
                "level": null,
                "name": "Cough & Cold",
                "m_score": null,
                "id": 75
              }
            ],
            "unit_price": 3.48,
            "unit_type": "ml",
            "rating_count": 0,
            "badges": [],
            "line_1": "",
            "sbc_enabled": false,
            "type": "Chest rubs & balms",
            "brand": "Vicks",
            "inventory": 4,
            "recommended_purchase_quantity": 0,
            "offer": null,
            "price": 87,
            "incentives": [],
            "user_message_limit": 100,
            "sts_sbc_savings": null,
            "discount": 3,
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
            "name": "Vicks VapoRub Chest rubs & balms",
            "rating_flag": false,
            "mrp": 90,
            "leaf_category": {
              "parent_id": 287,
              "level": "l1",
              "name": "Cough & Cold",
              "m_score": null,
              "id": 75
            },
            "received_at_ts": 0,
            "product_id": 1017,
            "image_url": "https://cdn.grofers.com/app/images/products/sliding_image/1017a.jpg?ts=1635923134",
            "group_id": 517753,
            "next_available_at": {
              "next_available_ts": "",
              "next_available_text": ""
            },
            "combo_flag": false
          }
        ]
      ],
      "collection_id": "61652ccb297bc50016519100",
      "product_rows": 1,
      "deeplink_action": "grofers://collection-products?collection_id=61652ccb297bc50016519100"
    }
  }
]
const data2= {
  "show_header": true,
  "header_text_color": "#000000",
  "subtitle": "get pain relievers, dettol and more",
  "title": "Chemist store",
  "collection_name": null,
  "title_img_url": null,
  "title_action": "see all",
  "show_view_all": true,
  "theme": "LIGHT",
  "is_for_gifting": false,
  "animation_delay": 100,
  "is_animated": false,
  "deeplink_action": "grofers://collection-products?collection_id=61652ccb297bc50016519100",
  "product_name_no_of_lines": 2
}
const Tab1 = () => {
  // const theme = useTheme()
  const dispatch = useDispatch()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemDatas = useSelector((state:any)=>state.blogsCollection)

  console.log(itemDatas)
  const handleLoadBlogs = () => {

    const userType: FetchBlogData = {
      userType: "user"
    };
    (dispatch as AppDispatch)(fetchBlogApiSlice(userType));

  }
  const productItems =[{
      data: data,
      objects: objects,
    },{
      data: data2, 
      objects: objects2,
    }]

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const products = objects.map((obj:any) =>
      obj.data.products.map((product: unknown[]) => product[0])
    )[0];

    console.log(products)

  return (
    <div>
      <Box  className=' mt-2'>
      <Marquee />
      <FeaturedPromo/>
      </Box>

      <Grid container className="flex">
      {itemDatas.itemData?.map((product: ProductItem, i: Key | null | undefined) => (
        <ProductCard key={i} data={product as ProductItem} />
      ))}
      </Grid>
      <Box>
      <Button onClick={handleLoadBlogs}>
        View More
      </Button>
      </Box>
      {productItems.map((products: JSX.IntrinsicAttributes & ProductRow, i: Key | null | undefined) => (
        <ProductsRow key={i} {...products} />
      ))}
    </div>
  );
};

export default Tab1;
