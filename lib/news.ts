export type NewsItem = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readMin: number;
  accent: string;
  heroImage?: string;
  body?: string[];
};

export const NEWS: NewsItem[] = [
  {
    id: "silver-red-legend",
    category: "Championship",
    title: "A legend forged in silver resumes in red",
    excerpt: "From a record-breaking Mercedes era to a new chapter at Maranello — Lewis Hamilton's reinvention in scarlet is rewriting how we judge greatness.",
    author: "Feature Desk",
    date: "2026-06-16",
    readMin: 8,
    accent: "#E80020",
    heroImage: "/img/hero-feature.jpg",
    body: [
      "Selama lebih dari satu dekade, nama Hamilton identik dengan satu warna: perak. Tujuh gelar juara dunia, rekor jumlah pole position, dan kemitraan dengan Mercedes yang mendefinisikan ulang era modern. Maka ketika ia menukar perak dengan merah Ferrari, pertanyaannya bukan soal bakat — melainkan apakah seorang legenda bisa memulai lagi dari awal.",
      "Barcelona menjawabnya. Kemenangan perdana Hamilton bersama Ferrari bukan hasil dari mobil yang dominan, melainkan dari seorang pembalap yang memeras setiap perseribu detik di akhir pekan yang sulit, membaca Virtual Safety Car dengan sempurna, dan mengelola bannya seperti orang yang tak lagi punya sesuatu untuk dibuktikan namun masih punya banyak untuk diberikan.",
      "Team principal Fred Vasseur menyebutnya sebagai titik balik, bukan hanya karena hasilnya tapi karena kepercayaan yang ia bangun di dalam garasi. 'Ketika seorang pembalap tampil seperti itu, seluruh tim jadi percaya diri,' ujarnya.",
      "Hamilton sendiri menggambarkan kemenangan ini sebagai sesuatu yang 'magis' — berbeda dari apa pun dalam kariernya. Ia bercerita tentang melepaskan diri dari kebisingan, bersandar pada lingkaran kecil orang terdekatnya, dan menemukan kembali kegembiraan yang dulu pertama kali membawanya ke gokart.",
      "Perebutan gelar masih milik Mercedes dan Kimi Antonelli yang sedang menanjak. Tapi sang legenda yang ditempa dalam perak telah membuktikan ia bisa menang dalam balutan merah — dan itu saja sudah mengubah jalan cerita musim 2026."
    ]
  },
  {
    id: "susie-wolff-feature",
    category: "Feature",
    title: "Susie Wolff: sosok perempuan inspiratif",
    excerpt: "Dari kokpit DTM hingga memimpin F1 Academy, Susie Wolff adalah salah satu figur paling berpengaruh dalam upaya membuka pintu motorsport bagi perempuan.",
    author: "Feature Desk",
    date: "2026-06-16",
    readMin: 7,
    accent: "#ff69b4",
    heroImage: "/img/hero-side1.jpeg",
    body: [
      "Nama Susie Wolff sudah lama dikenal di dunia balap jauh sebelum ia menjadi wajah perubahan. Sebagai pembalap, ia berkompetisi bertahun-tahun di DTM dan menjadi perempuan pertama dalam dua dekade yang ambil bagian dalam akhir pekan Grand Prix ketika menjalani sesi latihan bebas bersama Williams pada 2014.",
      "Namun warisan terbesarnya mungkin justru terjadi di luar kokpit. Sebagai Managing Director F1 Academy, Susie memimpin program yang dirancang untuk membina pembalap perempuan muda dan memberi mereka tangga yang selama ini hilang menuju jenjang tertinggi motorsport.",
      "Filosofinya sederhana namun kuat: bakat tidak mengenal gender, yang kurang selama ini hanyalah kesempatan. Lewat F1 Academy, ia membangun struktur — pendanaan, pembinaan, sorotan media — yang memberi para pembalap muda peluang nyata untuk berkembang.",
      "Bagi banyak anak perempuan yang menonton dari tribun atau layar, Susie Wolff bukan sekadar nama. Ia adalah bukti bahwa tempat di paddock bisa diperjuangkan, dan bahwa generasi berikutnya tidak harus menempuh jalan itu sendirian."
    ]
  },
  {
    id: "what-is-drs",
    category: "Tech explained",
    title: "Apa itu DRS atau Drag Reduction System",
    excerpt: "Sayap belakang yang bisa terbuka, satu detik yang menentukan, dan aturan ketat yang mengaturnya — mengupas teknologi penyalip andalan F1.",
    author: "Tech Bench",
    date: "2026-06-16",
    readMin: 5,
    accent: "#3671C6",
    heroImage: "/img/hero-side2.jpeg",
    body: [
      "DRS adalah singkatan dari Drag Reduction System — sebuah mekanisme yang memungkinkan pembalap membuka sebagian sayap belakang mobilnya untuk mengurangi hambatan udara (drag) dan menambah kecepatan di trek lurus.",
      "Cara kerjanya: ketika diaktifkan, flap pada sayap belakang terangkat sehingga udara mengalir lebih bebas. Hasilnya, mobil bisa melaju beberapa kilometer per jam lebih cepat — selisih yang sering kali cukup untuk menyelesaikan sebuah manuver menyalip.",
      "Tapi DRS tidak bisa dipakai sembarangan. Sistem ini hanya boleh diaktifkan di 'DRS zone' yang sudah ditentukan, dan hanya jika pembalap berada dalam jarak satu detik di belakang mobil di depannya pada titik deteksi. Begitu pembalap mengerem, DRS otomatis menutup.",
      "Pada lap-lap awal balapan, atau saat kondisi basah dan berbahaya, DRS dinonaktifkan demi keselamatan. Aturan ini menjaga keseimbangan: cukup membantu untuk menciptakan peluang menyalip, tapi tidak sampai membuat overtake menjadi terlalu mudah.",
      "Untuk musim 2026, regulasi aerodinamika baru mengubah cara kerja sistem ini, dengan konsep 'active aero' yang lebih canggih — tapi prinsipnya tetap sama: mengurangi drag di saat yang tepat untuk menciptakan pertarungan di lintasan."
    ]
  },
  {
    id: "hamilton-barcelona-win",
    category: "Race report",
    title: "Hamilton takes emotional maiden Ferrari victory in Barcelona",
    excerpt: "The seven-time champion converts a Virtual Safety Car and superior pace into his first win in red, as Antonelli retires from second with three laps to go.",
    author: "Paddock Desk",
    date: "2026-06-14",
    readMin: 6,
    accent: "#E80020"
  },
  {
    id: "hamilton-magical",
    category: "Reaction",
    title: "Hamilton hails 'magical' first Ferrari win unlike any other in his career",
    excerpt: "Hamilton opens up on how 'unplugging from the matrix', intensive training and leaning on his inner circle helped him bounce back from a difficult 2025.",
    author: "Feature Desk",
    date: "2026-06-15",
    readMin: 9,
    accent: "#E80020"
  },
  {
    id: "wolff-reliability",
    category: "Team news",
    title: "Wolff frustrated by Mercedes reliability after Antonelli retirement",
    excerpt: "The Mercedes boss says a late mechanical failure while fighting for the podium is 'not good enough' for a team chasing the championship.",
    author: "Pit Wall",
    date: "2026-06-15",
    readMin: 5,
    accent: "#27F4D2"
  },
  {
    id: "wolff-driver-talks",
    category: "Team news",
    title: "Wolff to hold talks with Russell and Antonelli over on-track battles",
    excerpt: "Mercedes plan to sit down with both drivers after intra-team racing in Barcelona may have cost the team a shot at victory.",
    author: "Paddock Desk",
    date: "2026-06-16",
    readMin: 4,
    accent: "#27F4D2"
  },
  {
    id: "f1-fever-partnership",
    category: "Business",
    title: "F1 announces global partnership with Fever for new ticketing platform",
    excerpt: "The long-term strategic deal makes Fever an Official Supplier, delivering a more sophisticated ticketing experience on F1.com from 2027.",
    author: "Business Desk",
    date: "2026-06-16",
    readMin: 3,
    accent: "#E10600"
  },
  {
    id: "madrid-circuit-ready",
    category: "Feature",
    title: "Madrid organisers confident new circuit will be ready for September",
    excerpt: "At a public unveiling of the Madring layout, organisers say the track will be set for its debut despite ongoing construction work.",
    author: "Track Desk",
    date: "2026-06-16",
    readMin: 7,
    accent: "#FF8000"
  }
];
