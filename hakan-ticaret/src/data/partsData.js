import mgaLogo from "../assets/mga.png"; 
import filters from "../assets/Filters.png"; 
import absorber from "../assets/absorber.jpg"; 
import led from "../assets/photon.png"; 
import triger from "../assets/triger.png"; 
import paspas from "../assets/set_profesyonel.png"; 
import waterpump from "../assets/waterpump.jpg"; 
import boschak from "../assets/boschak.jpg"; 





const partsData  = [
    {
      id: 1,
      name: "Ön ve Arka Fren Balatası",
      partNumber: "12345XYZ",
      price: "Bilgi İçin Arayınız",
      description: "Firmamız, MGA, Zegen ve diğer önde gelen balata markalarının satışını gerçekleştirmektedir.",
      image: mgaLogo
    },
    {
      id: 2,
      name: "Bakım Filtreleri",
      partNumber: "67890ABC",
      price: "Bilgi İçin Arayınız",
      description: "Bosch, Filtron ve diğer kaliteli markaların uygun fiyatlı bakım filtrelerini sunmaktayız. Ürünlerimiz, aracınızın uzun ömürlü performansını desteklemek amacıyla titizlikle seçilmiştir.",
      image: filters
    },
    {
      id: 3,
      name: "Paspaslar",
      partNumber: "11223PSS",
      price: "Bilgi İçin Arayınız",
      description: "Her binek araca uygun, universal paspaslarımız stoklarımızda mevcuttur. Araç iç mekanınızın temizliğini ve estetiğini korumak için idealdir.",
      image: paspas
    },
    {
      id: 4,
      name: "Amortisörler",
      partNumber: "34567LMN",
      price: "Amortisörler hakkında detaylı bilgi için lütfen bizimle iletişime geçiniz.",
      description: "Veka, Optimal ve Sachs gibi güvenilir markaların amortisörlerini stoklarımızda bulunduruyoruz. Ürünlerimiz, araç süspansiyon performansını en üst düzeye çıkararak konforlu ve güvenli bir sürüş sağlar.",
      image: absorber
    },
    {
      id: 5,
      name: "LED Ampüller",
      partNumber: "12345LED",
      price: "Bilgi İçin Arayınız",
      description: "Photon gibi kaliteli markaların LED ampüllerini sunuyoruz. Ürünlerimiz, yüksek ışık kalitesiyle gece sürüş güvenliğinizi artırmak için idealdir.",
      image: led
    },
    {
        id: 6,
        name: "Triger Setleri",
        partNumber: "12345TRI",
        price: "Bilgi İçin Arayınız",
        description: "Bosch, Dayco, Continental, Mais, PSA ve INA gibi önde gelen markaların triger setleri stoklarımızda bulunmaktadır. Ayrıca, stoklarımızda olmayan ürünler için sipariş verebilir ve aynı gün içinde temin edebiliriz. Aracınızın motor performansını korumak ve güvenli sürüş sağlamak için yüksek kaliteli triger setlerimizi tercih edebilirsiniz.",        
        image: triger
      },
      {
        id: 7,
        name: "Devirdaim Pompası",
        partNumber: "12345DEV",
        price: "Bilgi İçin Arayınız",
        description: "En kaliteli ve orijinal devirdaim pompalarını sizlere sunuyoruz. Ürünlerimiz, aracınızın soğutma sisteminin verimli çalışmasını sağlamak için ideal bir tercihtir.",
        image: waterpump
      },
      {
        id: 8,
        name: "Akü",
        partNumber: "12345AKU",
        price: "Bilgi İçin Arayınız",
        description: "Bosch ve Çelik gibi markaların yüksek kaliteli akülerini satışa sunuyoruz. Ayrıca, akü takma işlemini hızlı ve güvenilir bir şekilde gerçekleştiriyoruz.",
        image: boschak
      }
      
  ];
  export default partsData;
