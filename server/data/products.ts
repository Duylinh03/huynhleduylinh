export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  currency: "VND";
  category: "Mountain" | "Beach" | "City" | "Cultural";
  shortDesc: string;
  description: string;
  image: string;
  images?: string[];
  rating?: number;
  isFeatured?: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Núi Bà Đen",
    slug: "nui-ba-den",
    price: 250000,
    currency: "VND",
    category: "Mountain",
    shortDesc: "Ngọn núi cao nhất Nam Bộ, biểu tượng du lịch Tây Ninh.",
    description:
      "Núi Bà Đen cao 986m, nổi tiếng với hệ thống cáp treo hiện đại, quần thể tâm linh và cảnh quan thiên nhiên hùng vĩ. Phù hợp du lịch tâm linh, trekking và ngắm toàn cảnh Tây Ninh từ trên cao.",
    image: "https://picsum.photos/seed/ha-long/800/600",
    rating: 4.6,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Vịnh Hạ Long",
    slug: "vinh-ha-long",
    price: 350000,
    currency: "VND",
    category: "Beach",
    shortDesc: "Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi.",
    description:
      "Vịnh Hạ Long (Quảng Ninh) nổi bật với hàng nghìn đảo đá vôi, hang động kỳ ảo và trải nghiệm du thuyền. Một trong những điểm đến nổi tiếng nhất Việt Nam.",
    image: "https://picsum.photos/seed/ha-long/800/600",
    rating: 4.8,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Phố cổ Hội An",
    slug: "pho-co-hoi-an",
    price: 120000,
    currency: "VND",
    category: "Cultural",
    shortDesc: "Phố cổ yên bình, đậm nét kiến trúc và văn hoá xưa.",
    description:
      "Hội An (Quảng Nam) nổi tiếng với kiến trúc cổ kính, đèn lồng rực rỡ, chùa Cầu và nhiều nhà cổ. Rất hợp để đi dạo, chụp ảnh, ăn uống và cảm nhận nhịp sống chậm.",
    image: "https://picsum.photos/seed/ha-long/800/600",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Hà Nội",
    slug: "ha-noi",
    price: 0,
    currency: "VND",
    category: "City",
    shortDesc: "Thủ đô với phố cổ, hồ Gươm và văn hoá ẩm thực đặc trưng.",
    description:
      "Hà Nội mang nét giao thoa cổ - hiện đại: phố cổ, hồ Hoàn Kiếm, Văn Miếu, lăng Bác… Nổi bật với trải nghiệm cà phê, street food và các góc phố rất 'điện ảnh'.",
    image: "https://picsum.photos/seed/ha-long/800/600",
    rating: 4.6,
  },
];
