export type ProductRow = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
  objects: unknown[]
}


export interface ProductItem {
  rating: number;
  type_id: number;
  sbc_offer: string;
  default_product_id: number;
  has_details: boolean;
  sts_visibility: boolean;
  mapping_id: number;
  merchant_type: string;
  sbc_price: number;
  unit: string;
  pricing_comment: string;
  level1_category?: (LevelCategoryEntity)[] | null;
  unit_price: number;
  unit_type: string;
  rating_count: number;
  badges?: (null)[] | null;
  line_1: string;
  sbc_enabled: boolean;
  type: string;
  brand: string;
  inventory: number;
  recommended_purchase_quantity: number;
  offer: string;
  price: number;
  incentives?: (null)[] | null;
  sts_sbc_savings?: null;
  discount: number;
  level0_category?: (LevelCategoryEntity)[] | null;
  rating_star_color?: null;
  pl_flag: boolean;
  product_tags?: (null)[] | null;
  video_meta?: (null)[] | null;
  line_2: string;
  name: string;
  rating_flag: boolean;
  mrp: number;
  leaf_category: LeafCategory;
  received_at_ts: number;
  product_id: number;
  image_url: string;
  group_id: number;
  next_available_at: NextAvailableAt;
  combo_flag: boolean;
}

interface LevelCategoryEntity {
  parent_id: number;
  level?: null;
  name: string;
  m_score?: null;
  id: number;
}
interface LeafCategory {
  parent_id: number;
  level: string;
  name: string;
  m_score?: null;
  id: number;
}

interface NextAvailableAt {
  next_available_ts: string;
  next_available_text: string;
}

export type CartProduct = {
  id: string;
  title: string;
  subTitle: string;
  image?: string;
  price: number;
  mrp: number;
};

export type CartItem = {
  product: CartProduct;
  quantity: number;
  totalPrice: number;
  billPrice: number;
  discount: number;
};