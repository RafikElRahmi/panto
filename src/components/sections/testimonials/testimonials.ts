export interface TestimonialType {
  backgroundImage: string;
  avatarImage: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  id: number;
}

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    backgroundImage: '/Bang-Upin-cover.jpg',
    avatarImage: '/Bang-Upin.png',
    rating: 4,
    name: 'Bang Upin',
    role: 'Pedagang Asongan',
    quote: 'Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal',
  },
  {
    id: 2,
    backgroundImage: '/Ibuk-Sukijan-cover.jpg',
    avatarImage: '/Ibuk-Sukijan.png',
    rating: 4,
    name: 'Ibuk Sukijan',
    role: 'Ibu Rumah Tangga',
    quote:
      'Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah',
  },
  {
    id: 3,
    backgroundImage: '/Mpok-Ina-cover.jpg',
    avatarImage: '/Mpok-Ina.png',
    rating: 4,
    name: 'Mpok Ina',
    role: 'Karyawan Swasta',
    quote: 'Sangat terjangkau untuk kantong saya yang tidak terlalu banyak',
  },
];
