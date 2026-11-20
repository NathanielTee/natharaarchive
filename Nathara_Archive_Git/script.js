(function () {
      "use strict";

      // =======================================================================
      // 0A. RASTERIZE PNG FAVICON FROM PORTRAIT SVG FOR MAXIMUM COMPATIBILITY
      // =======================================================================
      (function generatePngFavicon() {
        try {
          const svgLink = document.getElementById("favicon-svg");
          const pngLink = document.getElementById("favicon-png");
          const appleLink = document.getElementById("apple-touch-icon");
          if (!svgLink || !svgLink.href) return;

          const img = new Image();
          img.onload = function () {
            const canvas = document.createElement("canvas");
            canvas.width = 128;
            canvas.height = 128;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.drawImage(img, 0, 0, 128, 128);
            const pngDataUrl = canvas.toDataURL("image/png");
            if (pngLink) pngLink.href = pngDataUrl;
            if (appleLink) appleLink.href = pngDataUrl;
          };
          img.src = svgLink.href;
        } catch {
          // Fallback cleanly to inline SVG favicon
        }
      })();

      // =======================================================================
      // 0B. DEVICE CAPABILITY CHECK (PRESERVES EFFECTS ON DESKTOP, SAFE ON LOW-END)
      // =======================================================================
      const isCoarsePointer = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
      const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isLowMemory = typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4;

      if (isCoarsePointer || prefersReducedMotion || isLowMemory) {
        document.documentElement.classList.add("low-power");
      }

      // =======================================================================
      // 1. COMPLETE ARCHIVE DATASET (ORIGINAL ISSUE & FOLDER COLORS + MEANINGS)
      // =======================================================================
      const SKETSA_FOLDERS = [
        {
          id: "jiwa",
          num: "ARC 01",
          code: "SKT-01",
          series: "SKETSA JIWA",
          themeTag: "IDENTITAS & MAKNA",
          question: "“Siapa aku sebenarnya?”",
          status: "established",
          instagram: "https://www.instagram.com/p/DLusDdIS-9-/?img_index=1",
          colors: {
            folderBack: "#dfd0c9",
            folderFront: "linear-gradient(145deg, #ede0da 0%, #e1cfc7 100%)",
            gradient: "linear-gradient(135deg, #ede0da 0%, #e4d2ca 100%)",
            paper: "#f7efeb",
            closingPaper: "#ded7d3",
            accent: "#660000",
            highlightBg: "rgba(102, 0, 0, 0.11)",
            folderInk: "#660000",
            isLightFolder: true,
            openingInk: "#660000",
            isLightOpening: true,
          },
          opening: {
            quote: "“Garis-garis ini tak bersuara, tapi kau bisa mendengarnya.”",
            author: "Nathara Archive's",
            project: "SKETSA JIWA",
          },
          issues: [
            {
              id: "jiwa-01",
              code: "#01",
              title: "TERSKETSA AKU",
              body: "Aku menari dengan silpa, mengguratkan cahaya dan bayangan. Di antara garis itu, ada aku—bukan sekadar tangan yang berkarya, tapi hati yang ingin dicintai. Bukan karena tara atau warna, tapi karena aku adalah aku, dengan rahasya yang tak tersketsa.",
              highlight: "Rahasia tak tersketsa",
              meaning: {
                ringkas: "Keinginan untuk dicintai karena keberadaan diri seutuhnya, bukan sekadar karya atau rupa.",
                makna: "Karya seni sering kali menjadi cara seseorang menunjukkan dirinya kepada dunia. Namun, di balik setiap gambar dan goresan, ada sisi pribadi yang tidak selalu bisa terlihat oleh orang lain. Tulisan ini berbicara tentang keinginan untuk dicintai bukan hanya karena kemampuan, penampilan, atau sesuatu yang berhasil diciptakan, melainkan karena keberadaan diri itu sendiri. Ada bagian dari seseorang yang tidak bisa sepenuhnya digambarkan atau dijelaskan, tetapi tetap ingin dipahami dan diterima.",
                simbol: "Silpa, cahaya & bayangan, garis",
                hubungan: "Pembuka seluruh serial SKETSA; memperkenalkan pertanyaan utama mengenai identitas diri di balik karya.",
              },
            },
            {
              id: "jiwa-02",
              code: "#02",
              title: "NIRAKALA",
              body: "Jika aku harus kehilanganmu, biarlah aku hilang dalam Nirakala—menukar napasku dengan ilusi, tenggelam dalam mantra bisu, dan mencintaimu di batas mimpi dan realitas, di mana dunia melupakanmu—tapi aku tidak.",
              highlight: "Abadi di Nirakala",
              meaning: {
                ringkas: "Ketakutan kehilangan yang mendorong seseorang mempertahankan sosok yang dicintai dalam ruang khayalan tanpa batas waktu.",
                makna: "Tulisan ini menggambarkan seseorang yang begitu takut kehilangan hingga lebih memilih mempertahankan sosok yang dicintainya dalam dunia khayalan. Ketika kenyataan mengancam untuk memisahkan mereka, ia membayangkan sebuah ruang tanpa batas waktu, tempat kenangan dan perasaan dapat terus hidup. Ada keinginan untuk menjaga seseorang tetap dekat, meskipun hanya melalui ilusi. Pada akhirnya, cinta dan ketidakmampuan melepaskan menjadi dua hal yang sulit dibedakan.",
                simbol: "Nirakala (ruang tanpa waktu), napas & ilusi",
                hubungan: "Menjadi jembatan awal menuju tema keterikatan dan kenangan yang kelak diperdalam pada SKETSA RASA.",
              },
            },
            {
              id: "jiwa-03",
              code: "#03",
              title: "RATRI, TEMPAT PULANG",
              body: "Malam adalah tempat pulang—saat arka tenggelam dan tārakā menuntunku, membisikkan sunyi yang menyapa dan memeluk lebih erat dari rumah yang hanya ruang, di mana aku akhirnya ada.",
              highlight: "Dipeluk sang Rātri",
              meaning: {
                ringkas: "Malam menjadi tempat beristirahat paling jujur ketika rumah fisik tidak lagi memberi rasa aman.",
                makna: "Tidak semua orang menemukan rasa nyaman di tempat yang secara fisik disebut rumah. Bagi seseorang dalam tulisan ini, malam justru menjadi ruang paling aman untuk beristirahat dari dunia dan segala tuntutannya. Dalam kesunyian, ia tidak perlu berpura-pura atau menjelaskan apa pun. Malam memberinya perasaan diterima, seolah-olah untuk pertama kalinya ia bisa benar-benar menjadi dirinya sendiri.",
                simbol: "Rātri (malam), arka (matahari), tārakā (bintang), rumah",
                hubungan: "Motif malam sebagai ruang sunyi yang memeluk diri kembali muncul dalam wajah berbeda di SEMU #01.",
              },
            },
            {
              id: "jiwa-04",
              code: "#04",
              title: "JEJAK YANG ABADI",
              body: "Jejak yang ingin kulupakan tetap terpatri di pasir, tak peduli seberapa keras angin mencoba menghapusnya. Sementara itu, langkah yang kutakuti terus memanjang, dipaksa maju oleh waktu yang tak mengenal henti—membawa kenangan yang ingin kutinggalkan, namun selalu menemukan jalannya kembali.",
              highlight: "Ingatan di pasir",
              meaning: {
                ringkas: "Pergulatan antara dorongan waktu untuk terus melangkah dan kenangan yang menolak terhapus.",
                makna: "Beberapa kenangan tidak hilang hanya karena seseorang berusaha melupakannya. Seperti jejak di atas pasir, semuanya mungkin tampak bisa dihapus, tetapi selalu ada sesuatu yang tertinggal. Sementara waktu terus mendorong seseorang untuk bergerak maju, ingatan justru sesekali menariknya kembali ke masa lalu. Tulisan ini menggambarkan pergulatan antara keinginan meninggalkan sesuatu dan kenyataan bahwa tidak semua hal dapat benar-benar dilepaskan.",
                simbol: "Jejak di pasir, angin, langkah & waktu",
                hubungan: "Melanjutkan tema kenangan yang bertahan di tengah arus waktu menuju JIWA #06.",
              },
            },
            {
              id: "jiwa-05",
              code: "#05",
              title: "BAYANGAN TAK BERNAMA",
              body: "Aku mengenal wajah ini, tapi tidak dengan sosok di dalamnya. Bayanganku terpantul di cermin, namun terasa asing—seakan waktu menghapus sebagian diriku. Apakah aku masih aku, atau hanya refleksi dari ingatan yang perlahan memudar?",
              highlight: "Refleksi yang asing",
              meaning: {
                ringkas: "Keterasingan terhadap diri sendiri ketika pantulan di cermin tidak lagi terasa akrab.",
                makna: "Ada masa ketika seseorang masih mengenali wajahnya sendiri, tetapi tidak lagi memahami sosok yang tercermin di dalamnya. Perubahan, pengalaman, dan kenangan perlahan membuat dirinya terasa asing. Ia mulai mempertanyakan apakah dirinya masih sama seperti dahulu atau hanya menjadi sisa dari seseorang yang pernah ia kenal. Tulisan ini berbicara tentang kehilangan kedekatan dengan diri sendiri dan kebingungan dalam mengenali identitas pribadi.",
                simbol: "Cermin, bayangan, wajah yang asing",
                hubungan: "Menggemakan pertanyaan inti JIWA dan kelak bertransformasi menjadi simbol retakan kaca pada SEMU #06.",
              },
            },
            {
              id: "jiwa-06",
              code: "#06",
              title: "BAYANG WAKTU",
              body: "Semua orang melangkah maju, deras seperti arus yang tak bisa kuhentikan, sementara aku tetap berdiri di sini—di antara detik yang telah lalu dan yang belum tiba. Apakah waktu meninggalkanku, atau aku yang enggan melepaskan apa yang sudah berlalu?",
              highlight: "Tertinggal di waktu",
              meaning: {
                ringkas: "Perasaan tertinggal saat orang lain terus bergerak maju sementara diri sendiri masih tertahan di masa lalu.",
                makna: "Melihat orang lain terus berkembang sementara diri sendiri terasa tidak bergerak dapat menimbulkan perasaan tertinggal. Seseorang dalam tulisan ini seolah terjebak di antara masa lalu yang belum selesai dan masa depan yang belum siap ia hadapi. Ia mempertanyakan apakah waktu memang meninggalkannya atau justru dirinya sendiri yang masih bertahan pada sesuatu yang telah berlalu. Intinya adalah kesulitan menerima bahwa hidup terus berjalan meskipun sebagian diri belum siap melangkah.",
                simbol: "Arus langkah, detik yang berhenti",
                hubungan: "Berpasangan dengan JIWA #04 dalam memaknai ketegangan antara waktu dan kesiapan batin.",
              },
            },
            {
              id: "jiwa-07",
              code: "#07",
              title: "JENDELA TANPA CAHAYA",
              body: "Aku membuka jendela, tapi yang kutemukan hanya kekosongan. Apa aku lupa caranya melihat, atau memang tak ada cahaya di sana—hanya bayangan samar yang menolak pergi, terpantul di kaca tanpa suara, seolah menunggu sesuatu yang tak pernah kembali?",
              highlight: "Gelap yang Abadi",
              meaning: {
                ringkas: "Upaya membuka diri yang justru berhadapan dengan kekosongan dan kesunyian.",
                makna: "Membuka diri terhadap kemungkinan baru tidak selalu membuat seseorang menemukan harapan. Terkadang, apa yang terlihat justru kekosongan dan bayangan dari sesuatu yang telah lama hilang. Tulisan ini menggambarkan seseorang yang mencoba mencari sesuatu di luar dirinya, tetapi hanya menemukan kembali kesunyian dan pertanyaan yang belum terjawab. Ada perasaan menunggu sesuatu yang mungkin tidak akan pernah kembali, disertai ketidakpastian apakah masih ada alasan untuk berharap.",
                simbol: "Jendela terbuka, kaca tanpa suara, bayangan samar",
                hubungan: "Berpasangan langsung dengan JIWA #08 sebagai titik tergelap sebelum kesadaran baru muncul.",
              },
            },
            {
              id: "jiwa-08",
              code: "#08",
              title: "KUTAHU ADA CAHAYA",
              body: "Bahkan saat awan menutupi langit, bintang tetap ada di sana. Mungkin aku hanya perlu menunggu sedikit lebih lama—membiarkan waktu menguraikan gelap, memberi ruang bagi cahaya untuk kembali bersinar, meski redup, meski jauh, tapi tak pernah benar-benar hilang.",
              highlight: "Menunggu Langit Cerah",
              meaning: {
                ringkas: "Kesabaran mempercayai bahwa harapan tetap ada meski untuk sementara tertutup mendung.",
                makna: "Setelah melewati masa penuh keraguan, seseorang mulai menyadari bahwa kehilangan arah tidak berarti seluruh harapan telah lenyap. Ada kemungkinan bahwa hal-hal baik masih ada, meskipun untuk sementara tidak dapat terlihat. Tulisan ini berbicara tentang kesabaran dalam menghadapi masa sulit dan keberanian untuk tetap percaya pada kemungkinan yang lebih baik. Harapan tidak harus selalu hadir dengan terang; terkadang, cukup dengan mengetahui bahwa ia belum sepenuhnya hilang.",
                simbol: "Awan mendung, bintang yang tersembunyi, cahaya redup",
                hubungan: "Menjawab kekosongan pada JIWA #07 dan menutup rangkaian fragmen JIWA dengan nada kesabaran.",
              },
            },
          ],
          closing: {
            id: "jiwa-penutup",
            title: "AKU MASIH ADA",
            body: "Aku telah menuliskan begitu banyak kata, membiarkan diriku larut di dalamnya. Setiap garis dan jejak yang kutinggalkan adalah bagian dariku yang tak ingin hilang. Aku telah berjalan jauh, tapi aku masih di sini—bukan karena tersesat, melainkan karena perjalanan ini memang tak pernah benar-benar berakhir.\n\nLembar terakhir mungkin telah kau baca, tapi ceritaku belum usai. Selama masih ada yang menemukannya kembali, selama bisikan di antara garis-garis ini tetap terdengar, aku tak akan pernah benar-benar hilang.",
            highlight: "Tak benar-benar usai.",
            meaning: {
              ringkas: "Berakhirnya satu kumpulan tulisan tidak mengakhiri perjalanan memahami diri sendiri.",
              makna: "Seluruh pengalaman, pikiran, dan perasaan yang telah dituangkan ke dalam tulisan merupakan bagian dari identitas seseorang. Meskipun banyak hal berubah dan perjalanan terasa panjang, setiap karya menjadi bukti bahwa dirinya pernah berada di sana dan telah melalui semuanya. Penutup ini menegaskan bahwa berakhirnya sebuah kumpulan tulisan tidak berarti berakhirnya perjalanan memahami diri sendiri. Selama masih ada bagian dari dirinya yang dapat ditemukan melalui kata dan karya, ia tetap ada.",
              simbol: "Lembar terakhir, garis & jejak tulisan",
              hubungan: "Menutup ARC 01 (JIWA) dan membuka jalan menuju hubungan dengan sosok lain pada ARC 02 (RASA).",
            },
          },
        },
        {
          id: "rasa",
          num: "ARC 02",
          code: "SKT-02",
          series: "SKETSA RASA",
          themeTag: "CINTA & KEHILANGAN",
          question: "“Kenapa semuanya terasa terlalu dalam?”",
          status: "established",
          instagram: "https://www.instagram.com/p/DUkCLCqEhYf/?img_index=1",
          colors: {
            folderBack: "#1e2372",
            folderFront: "linear-gradient(135deg, #292e91 0%, #377dc2 62%, #4ca9df 100%)",
            gradient: "linear-gradient(135deg, #292e91 0%, #3477bc 58%, #4ca9df 100%)",
            paper: "#f1f6fb",
            closingPaper: "#d9dde2",
            accent: "#292e91",
            highlightBg: "rgba(41, 46, 145, 0.14)",
            folderInk: "#ffffff",
            isLightFolder: false,
            openingInk: "#ffffff",
            isLightOpening: false,
          },
          opening: {
            quote: "“Jejak ini tak terlihat, tapi bisa kau temukan dalam sesatku.”",
            author: "Nathara Archive's",
            project: "SKETSA RASA",
          },
          issues: [
            {
              id: "rasa-01",
              code: "#01",
              title: "ALASAN SENI ADA",
              body: "Aku bisa tenggelam dalam galeri penuh keindahan, namun tetap saja, tatapanku memilihmu. Karena di hadapanmu, semua karya hanyalah bayangan.",
              highlight: "Kau Pusatnya",
              meaning: {
                ringkas: "Cinta mengalihkan pusat keindahan dari segala karya seni menuju sosok yang dicintai.",
                makna: "Di antara begitu banyak hal indah yang dapat dinikmati, ada seseorang yang mampu membuat semuanya terasa berbeda. Kehadirannya menjadi begitu berarti hingga karya seni yang sebelumnya dikagumi seolah kehilangan daya tarik ketika dibandingkan dengannya. Tulisan ini menggambarkan bagaimana rasa cinta dapat mengubah cara seseorang memandang keindahan: bukan lagi sekadar sesuatu yang ditemukan dalam karya, melainkan sesuatu yang melekat pada sosok yang dicintai.",
                simbol: "Galeri seni, tatapan, bayangan karya",
                hubungan: "Menandai pergeseran fokus serial dari dunia internal (JIWA) menuju relasi dengan orang lain (RASA).",
              },
            },
            {
              id: "rasa-02",
              code: "#02",
              title: "ANVESANA",
              body: "Aku menuliskanmu bukan karena sudah kutemukan, tapi karena kata-kata ini ingin mencarimu lebih dulu. Di antara kisah, ada harapan samar yang masih bersinar. seperti api kecil yang menolak padam, meski tak tahu kapan akan sampai padamu.",
              highlight: "Menulis untuk Mencari",
              meaning: {
                ringkas: "Menulis menjadi perjalanan batin untuk mencari seseorang yang belum ditemukan.",
                makna: "Ada seseorang yang belum ditemukan, tetapi sudah lebih dahulu hadir dalam harapan dan tulisan. Menulis menjadi semacam perjalanan untuk mencari sosok yang masih belum diketahui keberadaannya. Setiap kata membawa sedikit kemungkinan bahwa suatu hari nanti semua pencarian itu akan sampai pada seseorang yang tepat. Tulisan ini berbicara tentang kerinduan terhadap sesuatu yang belum dimiliki, tetapi tetap ingin ditemukan.",
                simbol: "Anvesana (pencarian), api kecil yang menolak padam",
                hubungan: "Menghubungkan laku menulis sebagai ruang pencarian yang kelak berlanjut hingga SKETSA TEMU.",
              },
            },
            {
              id: "rasa-03",
              code: "#03",
              title: "RAHASYA MENYEMBUNYIKAN AKU",
              body: "Dari ribuan kata yang berlarian di kepalaku, ada satu yang memilih diam. Tetap sama dari dulu hingga kini. Apa sebenarnya itu? Hari demi hari kucari, namun jawabannya terus bersembunyi.",
              highlight: "Satu kata, beribu pertanyaan",
              meaning: {
                ringkas: "Satu perasaan terdalam yang terus memenuhi pikiran namun belum mampu diberi nama.",
                makna: "Di antara begitu banyak pikiran, ada satu perasaan atau kata yang terus bertahan tanpa pernah berhasil diungkapkan. Seseorang berusaha memahaminya, tetapi semakin dicari, semakin sulit pula menemukan jawabannya. Tulisan ini menggambarkan perasaan yang tersembunyi jauh di dalam diri, sesuatu yang mungkin telah lama ada tetapi belum mampu diberi nama. Ketidakmampuan untuk mengungkapkannya justru membuatnya semakin memenuhi pikiran.",
                simbol: "Rahasyā (rahasia batin), satu kata yang diam",
                hubungan: "Menggemakan kembali motif rahasya dari JIWA #01 dalam konteks perasaan terhadap seseorang.",
              },
            },
            {
              id: "rasa-04",
              code: "#04",
              title: "SMRTI YANG MEREDUP",
              body: "Aku bertanya di mana ia malam ini, Pagi terlalu terang untuk orang yang ingin lenyap. Dadaku menahan kata-kata yang tak sempat tumbuh menjadi bahasa. Aku berdiri di atas aspal, berharap dinginnya cukup untuk membuat smṛti kehilangan nadinya.",
              highlight: "Kenangan kala itu",
              meaning: {
                ringkas: "Kelelahan menanggung ingatan dan kata-kata tak terucap yang terus berdenyut di dalam diri.",
                makna: "Kenangan terkadang menjadi sesuatu yang ingin dipertahankan, tetapi pada saat yang sama juga ingin dilupakan. Ada kata-kata yang tidak sempat disampaikan dan perasaan yang masih tertahan, membuat seseorang terus membawa masa lalu ke dalam kehidupannya sekarang. Tulisan ini menggambarkan kelelahan menghadapi ingatan yang tak kunjung mereda, serta keinginan agar sesuatu yang menyakitkan akhirnya kehilangan pengaruhnya.",
                simbol: "Smṛti (ingatan), pagi terlalu terang, aspal dingin",
                hubungan: "Memperdalam tema jejak ingatan dari JIWA #04 menjadi beban emosional yang lebih personal.",
              },
            },
            {
              id: "rasa-05",
              code: "#05",
              title: "REFREIN YANG MEMANGGIL",
              body: "Pada bulan tertentu kau menyebut namaku seperti lagu lama: nadanya pincang, liriknya retak—namun cukup untuk membangunkan saṁskāra yang kupikir telah usai. Kau mencari sesuatu yang lebih; aku hanyalah bagian dari refrein yang kau lewati.",
              highlight: "Bagian yang kau lewati",
              meaning: {
                ringkas: "Ketidakseimbangan perasaan ketika sapaan kecil membangkitkan jejak lama yang bagi pihak lain hanya sepintas lalu.",
                makna: "Seseorang dari masa lalu terkadang kembali hadir hanya melalui hal-hal kecil, seperti sebuah nama atau percakapan singkat. Kehadirannya membangkitkan kembali perasaan yang sebelumnya dianggap telah selesai. Namun, bagi orang tersebut, kita mungkin hanya bagian kecil dari kisah yang sesekali ia ingat sebelum kembali melanjutkan hidupnya. Tulisan ini berbicara tentang ketidakseimbangan perasaan: ketika seseorang memiliki tempat yang begitu besar dalam hidup kita, tetapi kita belum tentu memiliki arti yang sama baginya.",
                simbol: "Saṁskāra (jejak batin), lagu lama, refrein yang terlewati",
                hubungan: "Menggambarkan pemicu ingatan yang juga muncul pada SEMU #08 (Rekaman Usang).",
              },
            },
            {
              id: "rasa-06",
              code: "#06",
              title: "DUA INSAN",
              body: "Kami duduk berhadapan, membawa versi diri yang tak lagi cocok. Bukan salah atau benar — hanya dvandva yang memisahkan dua yang dulu membaca sampai halaman terakhir. Kini keserasian itu terasa seperti kesalahan yang terlalu elok untuk diakui.",
              highlight: "Keserasian itu menjadi kesalahan",
              meaning: {
                ringkas: "Dua orang dapat berpisah bukan karena kesalahan, melainkan karena keduanya bertumbuh ke arah yang berbeda.",
                makna: "Dua orang yang pernah saling memahami tidak selalu dapat terus berjalan bersama. Seiring waktu, keduanya dapat berubah hingga apa yang dahulu terasa cocok justru menjadi sesuatu yang sulit dipertahankan. Tidak ada pihak yang sepenuhnya salah, hanya dua versi diri yang kini memiliki arah berbeda. Tulisan ini menggambarkan kenyataan bahwa hubungan dapat berubah bukan karena salah satu orang menjadi buruk, melainkan karena keduanya tidak lagi berada pada keselarasan yang sama.",
                simbol: "Dvandva (dualitas), halaman terakhir buku",
                hubungan: "Kontras dengan titik temu dua orang yang baru mulai melangkah pada TEMU #12.",
              },
            },
            {
              id: "rasa-07",
              code: "#07",
              title: "PARADOKS",
              body: "Kau jauh, tapi rasanya dekat. Dekat, tapi selalu jauh dari genggamanku. Aku bisa merasakan hadirmu di sekitar, namun setiap kali kucoba mendekat, jarak itu kembali terbentang. Mungkin memang begitulah adanya",
              highlight: "Antara Dekat dan Jauh",
              meaning: {
                ringkas: "Kontradiksi antara kedekatan emosional yang terasa nyata dan jarak yang tetap tak terlampaui.",
                makna: "Ada hubungan yang terasa dekat secara emosional, tetapi tetap menyisakan jarak yang tidak dapat dilewati. Seseorang mungkin merasakan kehadiran orang lain dengan begitu kuat, tetapi tetap tidak mampu benar-benar menjangkaunya. Semakin ia berusaha mendekat, semakin jelas pula jarak yang memisahkan mereka. Tulisan ini menggambarkan kontradiksi antara kedekatan perasaan dan ketidakmampuan untuk memiliki atau mencapai seseorang.",
                simbol: "Jarak yang terbentang, genggaman",
                hubungan: "Menyiapkan pergeseran menuju keraguan atas persepsi kedekatan di SKETSA SEMU #03.",
              },
            },
            {
              id: "rasa-08",
              code: "#08",
              title: "KATA YANG BICARA",
              body: "Kadang aku baru mengerti diriku saat membaca kembali tulisan yang ternyata lebih jujur daripada aku sendiri. Di sana, hal-hal yang kusimpan rapat justru terungkap tanpa diminta. Tulisan itu menjadi cermin yang menampakkan aku yang sesungguhnya.",
              highlight: "Lebih jujur dariku",
              meaning: {
                ringkas: "Tulisan sering kali menjadi cermin yang lebih jujur mengungkap isi hati daripada pengakuan langsung.",
                makna: "Terkadang, seseorang baru memahami perasaannya sendiri setelah membaca kembali apa yang pernah ia tulis. Kata-kata yang awalnya dibuat tanpa banyak pertimbangan justru mengungkapkan hal-hal yang selama ini berusaha disembunyikan. Tulisan menjadi semacam cermin yang memperlihatkan sisi diri yang sulit diakui secara langsung. Karya ini berbicara tentang bagaimana tulisan dapat menjadi lebih jujur daripada orang yang menuliskannya.",
                simbol: "Tulisan sebagai cermin",
                hubungan: "Menegaskan kembali fungsi arsip pribadi sebagai saksi kejujuran diri sejak JIWA #01.",
              },
            },
            {
              id: "rasa-09",
              code: "#09",
              title: "MENGUNJUNGI LUKA",
              body: "Aku sudah tahu pertemuan ini akan berakhir sedih sebelum kami saling menyapa — tetap aku datang. Ada luka yang bertahan hidup hanya bila terus disentuh. Sama seperti pertama: perih, dan aku berhenti berpura-pura ingin sembuh.",
              highlight: "Merawat yang tak sembuh",
              meaning: {
                ringkas: "Keberanian atau keterikatan untuk tetap mendatangi sesuatu yang sudah diketahui akan menyakitkan.",
                makna: "Ada kalanya seseorang kembali mendatangi sesuatu yang sejak awal ia tahu akan menyakitinya. Bukan karena ia tidak memahami risikonya, tetapi karena masih ada bagian dari dirinya yang belum mampu benar-benar melepaskan pengalaman tersebut. Dengan terus mengingat dan mengulangnya, luka yang seharusnya memudar justru kembali terasa. Tulisan ini menggambarkan hubungan yang rumit antara kenangan, rasa sakit, dan keinginan untuk tetap berada dekat dengan sesuatu yang pernah berarti.",
                simbol: "Luka yang disentuh kembali, pertemuan",
                hubungan: "Menjadi titik puncak kelelahan batin sebelum keputusan melepas harapan pada RASA #11.",
              },
            },
            {
              id: "rasa-10",
              code: "#10",
              title: "JEJAK YANG ABADI",
              body: "Aku berputar di lingkar yang sama, seperti pena yang tak henti menoreh halaman kosong. Mungkin pada akhirnya kutemukanmu di sela-sela baris itu, atau hanya garis yang kembali menyentuh titik asalnya.",
              highlight: "Jejak di Antara",
              meaning: {
                ringkas: "Siklus emosional yang terus berputar di titik yang sama antara mencari jawaban dan kembali ke awal.",
                makna: "Seseorang dapat menghabiskan begitu banyak waktu untuk mencari jawaban melalui kenangan dan tulisan yang terus diulang. Ia berharap setiap baris akan membawanya lebih dekat kepada sesuatu yang dicari, meskipun tidak pernah benar-benar tahu apakah pencarian itu akan berhasil. Tulisan ini menggambarkan siklus emosional yang terus berulang: antara berharap menemukan sesuatu dan menyadari bahwa dirinya mungkin hanya kembali ke titik awal.",
                simbol: "Lingkar yang sama, pena & halaman kosong",
                hubungan: "Berbagi judul simbolis dengan JIWA #04 namun bergeser dari ingatan di pasir ke lingkaran tulisan.",
              },
            },
            {
              id: "rasa-11",
              code: "#11",
              title: "MENUTUP HARAP",
              body: "Aku menurunkan harap perlahan, seperti tirai yang ditarik menjelang malam. Bukan karena tak ingin melihat, tapi terang terlalu kejam bagi yang tak pernah dipilih. Gelap tak menjanjikan—dan itu terasa lebih nyata.",
              highlight: "Berharap kau di sini",
              meaning: {
                ringkas: "Keputusan menurunkan ekspektasi ketika menunggu terasa lebih menyakitkan daripada menerima gelap.",
                makna: "Ada saatnya seseorang harus berhenti menggantungkan harapan pada sesuatu yang tidak kunjung memilihnya. Perlahan, ia mulai menurunkan ekspektasi dan menerima kenyataan bahwa keinginannya mungkin tidak akan terwujud. Ini bukan berarti ia sudah tidak ingin melihat atau mengharapkan sesuatu tersebut, tetapi ia mulai menyadari betapa menyakitkannya terus menunggu. Tulisan ini menggambarkan keputusan untuk melepaskan harapan, meskipun perasaan di baliknya belum sepenuhnya hilang.",
                simbol: "Tirai menjelang malam, terang & gelap",
                hubungan: "Menutup rangkaian fragmen RASA dengan pelepasan harapan sebelum memasuki arsip kenangan.",
              },
            },
          ],
          closing: {
            id: "rasa-penutup",
            title: "ARSIP YANG MENYIMPANMU",
            body: "Aku tak tahu cara terbaik mencintaimu, maka biarlah aku menulismu dan melukismu. Dalam aksara, suaramu tetap bergaung seperti gema yang enggan padam di ruang kosong. Dalam warna, bayanganmu menetap, samar tapi tak pernah pergi, seperti senja yang selalu kembali meski hilang di ufuk. Setiap baris, setiap garis, adalah perlawanan kecil pada waktu, agar keberadaanmu tak pudar meski hari-hari terus runtuh satu per satu.\n\nMenulismu berarti mengulang pertemuan yang tak lagi ada, menghadirkanmu di sela jeda yang sunyi. Melukismu adalah menyalin cahaya dari matamu ke kanvas meski ingatan kehilangan detail, meski warna perlahan memudar. Dan di antara kata serta goresan, kutemukan cinta yang tak butuh balasan cukup dengan tahu kau pernah ada, cukup dengan menjagamu di dalam karya.",
            highlight: "Cinta yang diabadikan.",
            meaning: {
              ringkas: "Karya menjadi tempat merawat jejak seseorang yang pernah ada tanpa menuntut balasan.",
              makna: "Ketika seseorang tidak lagi dapat ditemui, karya dapat menjadi tempat untuk mempertahankan jejak keberadaannya. Melalui tulisan dan gambar, kenangan tentang orang tersebut terus dihidupkan, meskipun detailnya perlahan memudar seiring waktu. Tidak semua cinta membutuhkan balasan atau kehadiran yang terus-menerus. Terkadang, cukup dengan mengetahui bahwa seseorang pernah ada dan menjaganya tetap hidup dalam karya yang diciptakan.",
              simbol: "Aksara, warna, kanvas, senja di ufuk",
              hubungan: "Menutup ARC 02 (RASA) dan mengantar pembaca ke wilayah gema pikiran pada ARC 03 (SEMU).",
            },
          },
        },
        {
          id: "semu",
          num: "ARC 03",
          code: "SKT-03",
          series: "SKETSA SEMU",
          themeTag: "ILUSI & PERSEPSI",
          question: "“Apa yang kurasakan ini nyata?”",
          status: "established",
          instagram: "https://www.instagram.com/p/DZeg8aSiYX5/?img_index=1",
          colors: {
            folderBack: "#0c111c",
            folderFront: "linear-gradient(135deg, #111827 0%, #3b426d 100%)",
            gradient: "linear-gradient(135deg, #111827 0%, #3b426d 100%)",
            paper: "#f1f2f7",
            closingPaper: "#d9dade",
            accent: "#3b426d",
            highlightBg: "rgba(59, 66, 109, 0.15)",
            folderInk: "#ffffff",
            isLightFolder: false,
            openingInk: "#ffffff",
            isLightOpening: false,
          },
          opening: {
            quote: "“Gemanya tak bernyawa namun terus hidup di kepalaku.”",
            author: "Nathara Archive's",
            project: "SKETSA SEMU",
          },
          issues: [
            {
              id: "semu-01",
              code: "#01",
              title: "RESONANSI SUNYI",
              body: "Malam membuat isi kepalaku terdengar lebih keras dari biasanya. Saat dunia mulai sunyi, hal-hal kecil yang seharusnya telah usai justru kembali hidup di antara pikiranku—seperti gema yang tak tahu jalan pulang. Mungkin ada kenangan yang tak pernah benar-benar pergi; mereka hanya berubah menjadi suara samar yang datang lagi setiap kali rātri menutup segalanya dengan diam.",
              highlight: "Kepalaku tak diam",
              meaning: {
                ringkas: "Kesunyian malam di luar sering kali membuat gema kenangan di dalam kepala terdengar lebih nyaring.",
                makna: "Ketika keadaan sekitar mulai tenang, pikiran justru dapat menjadi semakin ramai. Kenangan dan pengalaman yang sebelumnya dianggap telah selesai kembali muncul, seolah-olah masih memiliki sesuatu yang ingin disampaikan. Tulisan ini menggambarkan bagaimana sesuatu yang tidak lagi hadir secara nyata tetap dapat memengaruhi seseorang melalui ingatan yang terus berulang. Kesunyian di luar tidak selalu berarti ketenangan di dalam.",
                simbol: "Gema tanpa jalan pulang, rātri (malam)",
                hubungan: "Mengubah pemaknaan rātri dari pelukan sunyi di JIWA #03 menjadi ruang gema pikiran.",
              },
            },
            {
              id: "semu-02",
              code: "#02",
              title: "KABUT DARI DIRI YANG TAK SELESAI",
              body: "Aku tumbuh seperti seseorang yang selalu terlambat membaca dirinya sendiri. Perasaan, masa depan, dan alasan untuk bertahan kerap tampak samar, seperti cahaya temaram di ujung lorong berkabut. Semakin jauh langkah kuayun, semakin kabur pula arah yang hendak kutuju. Kadang aku tidak sedang mencari jalan keluar; aku hanya takut mendapati bahwa sejak awal aku telah tersesat di dalam diriku sendiri.",
              highlight: "Labirin diri sendiri",
              meaning: {
                ringkas: "Ketakutan bahwa kebingungan terbesar berasal dari tersesat di dalam diri sendiri.",
                makna: "Mengenali diri sendiri ternyata tidak selalu menjadi proses yang mudah. Seseorang dapat terus bertumbuh tanpa benar-benar memahami perasaan, keinginan, atau arah hidupnya. Semakin jauh ia mencoba mencari jawaban, semakin kabur pula jalan yang harus ditempuh. Tulisan ini menggambarkan ketakutan ketika seseorang mulai menyadari bahwa kebingungan terbesar mungkin bukan berasal dari dunia luar, melainkan dari dirinya sendiri.",
                simbol: "Lorong berkabut, cahaya temaram",
                hubungan: "Melanjutkan kegelisahan identitas dari JIWA ke tingkat keraguan persepsi diri.",
              },
            },
            {
              id: "semu-03",
              code: "#03",
              title: "TATAP YANG TAK PERNAH TINGGAL",
              body: "Ada beberapa wajah yang menetap terlalu lama di kepalaku, meski mereka tak pernah benar-benar tinggal di hidupku. Dari tatap yang singkat dan perhatian yang biasa saja, aku membangun ruang yang lebih hangat daripada kenyataannya. Pada akhirnya, yang kutunggu bukan mereka untuk kembali, melainkan bayangan yang telanjur kubuat sendiri.",
              highlight: "Membesarkan yang semu",
              meaning: {
                ringkas: "Kerinduan yang tumbuh bukan dari hubungan nyata, melainkan dari bayangan yang dibangun pikiran sendiri.",
                makna: "Terkadang, perhatian kecil dari seseorang dapat berkembang menjadi sesuatu yang jauh lebih besar di dalam pikiran kita. Dari tatapan singkat atau sikap sederhana, seseorang membangun harapan dan membayangkan kedekatan yang sebenarnya belum pernah terjadi. Pada akhirnya, yang terus dirindukan bukanlah sosok aslinya, melainkan gambaran tentang dirinya yang telah diciptakan sendiri. Tulisan ini berbicara tentang perasaan yang tumbuh dari persepsi, bukan dari hubungan yang benar-benar terjalin.",
                simbol: "Tatap singkat, ruang hangat buatan pikiran",
                hubungan: "Menjelaskan akar ilusi kedekatan yang sebelumnya terasa sebagai paradoks di RASA #07.",
              },
            },
            {
              id: "semu-04",
              code: "#04",
              title: "SISA KOTA",
              body: "Kadang aku pulang terlalu malam hanya supaya tidak perlu terlalu cepat bertemu kamarku sendiri. Jalanan telah lengang, lampu-lampu meredup satu per satu, meninggalkan semburat cahaya yang lamat-lamat menghilang di atas aspal. Bahkan saat akhirnya sampai, semuanya tetap terasa asing; seolah ada bagian dari diriku yang masih tertinggal di antara senyap kota, menyisakan tubuh yang melangkah masuk ke ruang yang tak lagi mengenalku.",
              highlight: "Pulang yang Asing",
              meaning: {
                ringkas: "Keterasingan emosional ketika rumah masih berdiri sama namun tidak lagi terasa sebagai tempat beristirahat.",
                makna: "Sebuah kota dapat menjadi tempat untuk menghindari sesuatu, termasuk kesepian yang menunggu di rumah. Seseorang memilih menghabiskan lebih banyak waktu di luar, membiarkan dirinya berjalan di antara jalanan yang semakin sepi, hanya untuk menunda saat harus kembali. Namun, ketika akhirnya pulang, rasa asing itu tetap ada. Tulisan ini menggambarkan keterasingan emosional: ketika rumah masih berdiri di tempat yang sama, tetapi tidak lagi terasa seperti tempat untuk beristirahat.",
                simbol: "Jalanan lengang, lampu kota, kamar yang asing",
                hubungan: "Menjadi titik kontras menuju pemaknaan baru tentang 'pulang' di akhir serial nanti.",
              },
            },
            {
              id: "semu-05",
              code: "#05",
              title: "TOPENG",
              body: "Beberapa malam aku merasa seperti bayang yang mengenakan wajahku sendiri. Aku bergerak, menjawab pertanyaan, bahkan tersenyum sebagaimana mestinya—namun aku hanya menonton semuanya dari balik mata yang bukan milikku. Seolah tubuhku telah lebih dulu menjalani hari-hari ini, sementara pikiranku tertinggal di ruang remang yang tak lagi kukenali namanya.",
              highlight: "Hidup tanpa hadir",
              meaning: {
                ringkas: "Menjalani rutinitas sosial secara otomatis sementara pikiran terasa terpisah dari tubuh sendiri.",
                makna: "Seseorang dapat menjalani hari seperti biasa, menjawab pertanyaan, tersenyum, dan melakukan apa yang diharapkan orang lain tanpa benar-benar merasa hadir. Dari luar, semuanya tampak normal, tetapi di dalam dirinya ada jarak antara tubuh dan pikiran. Tulisan ini menggambarkan keadaan ketika seseorang seolah hanya memainkan peran dalam kehidupannya sendiri, sementara dirinya yang sebenarnya terasa semakin jauh dan sulit dikenali.",
                simbol: "Wajah sebagai topeng, mata yang terasa asing",
                hubungan: "Berpasangan dengan SEMU #06 dalam memotret jarak antara tampilan luar dan batin.",
              },
            },
            {
              id: "semu-06",
              code: "#06",
              title: "PANTULAN YANG RETAK",
              body: "Aku kira menjadi kuat berarti mampu menanggung semuanya seorang diri. Namun semakin lama kupendam, semakin sesak pula ruang di dalam dada. Ada orang-orang yang dari kejauhan tampak utuh, padahal di dalamnya puing-puing telah runtuh perlahan tanpa bunyi. Seperti kaca yang masih memantulkan cahaya, meski retaknya telah menjalar sejak musim yang lama berlalu.",
              highlight: "Lelah memikul diri",
              meaning: {
                ringkas: "Perbedaan antara penampilan luar yang tampak utuh dan keruntuhan batin akibat memendam beban sendirian.",
                makna: "Menjadi kuat sering kali diartikan sebagai kemampuan untuk menanggung segala sesuatu sendirian. Namun, terus memendam perasaan tidak membuat seseorang benar-benar baik-baik saja. Seperti kaca yang masih mampu memantulkan cahaya meskipun telah retak, seseorang juga dapat terlihat baik dari luar ketika sebenarnya sedang mengalami keruntuhan di dalam. Tulisan ini menyoroti perbedaan antara penampilan yang terlihat utuh dan keadaan batin yang sesungguhnya.",
                simbol: "Kaca retak yang memantulkan cahaya, puing tanpa bunyi",
                hubungan: "Mengembangkan simbol cermin dari JIWA #05 menjadi kesadaran atas kelelahan memikul beban sendiri.",
              },
            },
            {
              id: "semu-07",
              code: "#07",
              title: "RUANG YANG TETAP ADA",
              body: "Aku pernah mengira ada bagian dari diriku yang hilang, lalu menghabiskan banyak waktu untuk mencarinya ke berbagai tempat. Namun setiap kali merasa telah menemukannya, kehampaan itu muncul lagi dengan bentuk yang berbeda. Mungkin ada ruang kosong yang memang tidak diciptakan untuk diisi; ia hanya tinggal di sana, menjadi bagian dari diriku yang tak pernah benar-benar selesai.",
              highlight: "Mungkin ini palsu",
              meaning: {
                ringkas: "Tidak semua ruang kosong di dalam diri diciptakan untuk diisi; sebagian memang tinggal sebagai bagian diri.",
                makna: "Seseorang terkadang menghabiskan banyak waktu untuk mencari bagian dirinya yang dianggap hilang. Ia berharap suatu hari dapat menemukan sesuatu yang akan membuat dirinya kembali utuh. Namun, kekosongan itu terus muncul dalam bentuk yang berbeda. Tulisan ini menawarkan kemungkinan bahwa tidak semua ruang kosong harus diisi atau diperbaiki. Ada bagian dari diri yang memang tetap kosong dan tidak selesai, tetapi tetap dapat diterima sebagai bagian dari keberadaan seseorang.",
                simbol: "Ruang kosong yang tak selesai",
                hubungan: "Menjadi benih penerimaan diri yang kelak mekar penuh pada SKETSA HENING.",
              },
            },
            {
              id: "semu-08",
              code: "#08",
              title: "REKAMAN USANG",
              body: "Beberapa hal telah lama usai, tetapi pikiranku terus memberinya kehidupan yang lain. Aku mengulang kemungkinan yang tak pernah terjadi dan menyimpan percakapan yang tak pernah sempat lahir, seolah semuanya masih memiliki jalan menuju kenyataan. Namun seperti rekaman usang yang berputar di ruangan kosong, mereka hanya terus mengulang adegan yang sama tanpa pernah mengubah akhir cerita.",
              highlight: "Mengulang yang tak ada",
              meaning: {
                ringkas: "Kebiasaan pikiran mengulang skenario dan percakapan yang tidak pernah terjadi tanpa mengubah akhir cerita.",
                makna: "Pikiran dapat terus mengulang kejadian yang sudah berlalu, termasuk percakapan yang tidak pernah terjadi atau kemungkinan yang tidak pernah terwujud. Seseorang menciptakan berbagai versi masa lalu seolah-olah masih ada kesempatan untuk mengubah hasil akhirnya. Namun, semua itu hanya menjadi pengulangan tanpa perubahan. Tulisan ini menggambarkan kesulitan melepaskan kemungkinan yang tidak pernah menjadi kenyataan dan kebiasaan hidup di dalam skenario yang hanya ada dalam pikiran.",
                simbol: "Rekaman usang, ruangan kosong",
                hubungan: "Melengkapi siklus pengulangan dari RASA #10 sebelum beralih ke kelelahan hening pada SEMU #09.",
              },
            },
            {
              id: "semu-09",
              code: "#09",
              title: "DIAM YANG HIDUP",
              body: "Aku tidak benar-benar sembuh; aku hanya lelah bersuara. Suara-suara itu masih ada, dan kini aku membiarkannya memenuhi kepala. Barangkali, aku telah kalah, dan membiarkan diri tenggelam dalam gema yang menolak pergi.",
              highlight: "Gemanya masih hidup",
              meaning: {
                ringkas: "Diam yang lahir bukan dari kesembuhan, melainkan dari kelelahan untuk terus melawan suara di kepala.",
                makna: "Tidak semua keheningan berarti seseorang telah menemukan ketenangan. Terkadang, seseorang berhenti berbicara bukan karena masalahnya selesai, melainkan karena ia sudah terlalu lelah untuk terus mengungkapkannya. Suara dan pikiran yang mengganggunya masih ada, tetapi ia tidak lagi berusaha melawan semuanya. Tulisan ini menggambarkan keadaan ketika kelelahan mulai menggantikan usaha untuk mencari penyelesaian, sementara hal-hal yang belum selesai tetap hidup di dalam diri.",
                simbol: "Diam yang lelah, gema yang menolak pergi",
                hubungan: "Menjadi ambang langsung menuju pemaknaan baru tentang 'diam' dan penerimaan di SKETSA HENING.",
              },
            },
          ],
          closing: {
            id: "semu-penutup",
            title: "YANG TAK PERNAH PULANG",
            body: "Aku pernah percaya hidup akan memberi kejelasan: siapa yang datang, siapa yang tinggal, dan apa yang benar-benar pantas disebut cinta. Tapi makin jauh aku berjalan, aku justru makin sering bertemu diriku sendiri di tempat-tempat yang tidak selesai. Seolah yang kucari sejak awal bukan orang lain, melainkan bagian dari diriku yang hilang tanpa pernah sempat kupahami bentuknya.\n\nSekarang aku tidak lagi berharap semuanya menjadi utuh. Aku hanya ingin cukup jujur untuk mengakui bahwa banyak hal di dalam diriku tidak pernah benar-benar selesai—dan mungkin memang tidak perlu selesai. Maka kuletakkan tulisan ini sebagai sisa kesadaran yang tidak sempat menjadi jawaban, hanya catatan bahwa aku pernah ada, pernah bertanya, lalu akhirnya membiarkan diriku hanyut bersama apa yang tak pernah pulang.",
            highlight: "Yang tinggal hanya jejak",
            meaning: {
              ringkas: "Kejujuran mengakui bahwa banyak hal di dalam diri memang tidak selesai dan tidak harus selalu memiliki jawaban.",
              makna: "Dalam perjalanan mencari kejelasan tentang cinta, kehidupan, dan orang lain, seseorang justru terus berhadapan dengan bagian dirinya yang belum selesai. Ia mulai menyadari bahwa hal yang selama ini dicari mungkin tidak pernah benar-benar berada di luar dirinya. Tidak semua pertanyaan harus memiliki jawaban dan tidak semua bagian yang hilang harus ditemukan kembali. Penutup ini menggambarkan penerimaan terhadap ketidakpastian dan keberanian untuk mengakui bahwa ada hal-hal yang akan tetap tinggal sebagai bagian dari diri.",
              simbol: "Catatan sisa kesadaran, jejak yang tertinggal",
              hubungan: "Menutup ARC 03 (SEMU) dan membuka fase ketenangan berdampingan pada ARC 04 (HENING).",
            },
          },
        },
        {
          id: "hening",
          num: "ARC 04",
          code: "SKT-04",
          series: "SKETSA HENING",
          themeTag: "PENERIMAAN",
          question: "“Apa aku bisa hidup berdampingan dengan semua ini?”",
          status: "established",
          instagram: "https://www.instagram.com/p/DeBJsi2CYBO/?img_index=1",
          colors: {
            folderBack: "#090c11",
            folderFront: "linear-gradient(135deg, #0d1117 0%, #2c3a4d 100%)",
            gradient: "linear-gradient(135deg, #0d1117 0%, #2c3a4d 100%)",
            paper: "#eff2f6",
            closingPaper: "#d7dade",
            accent: "#2c3a4d",
            highlightBg: "rgba(44, 58, 77, 0.15)",
            folderInk: "#ffffff",
            isLightFolder: false,
            openingInk: "#ffffff",
            isLightOpening: false,
          },
          opening: {
            quote: "“Kau tidak harus mengerti semuanya hari ini.”",
            author: "Nathara Archive's",
            project: "SKETSA HENING",
          },
          issues: [
            {
              id: "hening-01",
              code: "#01",
              title: "MENGULANG",
              body: "Pagi kembali datang dengan bunyi jam yang sama. Cahaya jatuh di sudut meja yang sama, menyentuh cangkir yang semalam lupa kubereskan. Dulu aku mengira hidup sedang berhenti setiap kali semuanya terasa berulang. Belakangan aku justru bertanya, barangkali yang sedang berubah bukan harinya. Melainkan caraku memandangnya.",
              highlight: "Bukan hari yang berubah",
              meaning: {
                ringkas: "Perubahan tidak selalu terjadi pada rutinitas hari, melainkan pada cara pandang seseorang dalam menjalaninya.",
                makna: "Hari-hari mungkin tetap berjalan dengan rutinitas yang sama, tetapi cara seseorang memandangnya dapat berubah. Hal yang dahulu terasa seperti kebuntuan perlahan mulai terlihat sebagai bagian biasa dari kehidupan. Tulisan ini menggambarkan perubahan yang tidak selalu terjadi pada keadaan sekitar, tetapi justru pada cara seseorang memahami dan menerima apa yang sedang dijalaninya.",
                simbol: "Bunyi jam pagi, cahaya di sudut meja, cangkir",
                hubungan: "Mengubah makna pengulangan yang sebelumnya terasa menyesakkan pada RASA #10 dan SEMU #08.",
              },
            },
            {
              id: "hening-02",
              code: "#02",
              title: "SUARA YANG REDA",
              body: "Ada hari ketika isi kepala masih sama riuhnya, hanya saja aku tidak lagi terburu-buru membungkamnya. Kubuka jendela, membiarkan angin membawa suara kendaraan, daun yang saling bergesekan, dan burung yang entah sejak kapan kembali hinggap di kabel. Barangkali tenang bukan ketika semua suara menghilang. Melainkan ketika satu suara tak lagi ingin mengalahkan yang lain.",
              highlight: "Hening tak selalu sunyi.",
              meaning: {
                ringkas: "Ketenangan bukan berarti hilangnya seluruh riuh di kepala, melainkan berhenti dikuasai olehnya.",
                makna: "Ketenangan tidak selalu datang ketika semua suara di dalam kepala berhenti. Ada saatnya seseorang mulai membiarkan pikirannya hadir tanpa harus terus-menerus dibungkam atau dilawan. Ia belajar bahwa berbagai perasaan dapat hidup berdampingan tanpa harus saling mengalahkan. Tulisan ini menggambarkan bentuk ketenangan yang lebih realistis: bukan menghilangkan seluruh kegaduhan, melainkan tidak lagi dikuasai olehnya.",
                simbol: "Jendela terbuka, angin, gesekan daun, burung di kabel",
                hubungan: "Menjawab kepenatan suara batin pada SEMU #01 dan SEMU #09 dengan penerimaan yang lembut.",
              },
            },
            {
              id: "hening-03",
              code: "#03",
              title: "BELUM MEKAR",
              body: "Tanaman di beranda tidak pernah terburu-buru menjadi tinggi. Ia tetap bertumbuh meski beberapa hari kulupa memperhatikannya, seolah tahu bahwa setiap musim memang punya waktunya sendiri. Barangkali hanya manusia yang gemar menganggap segala sesuatu terlambat, padahal sebagian hal memang baru menemukan bentuknya ketika kita berhenti menghitung.",
              highlight: "Punya musimnya sendiri.",
              meaning: {
                ringkas: "Kesabaran terhadap proses pertumbuhan diri sendiri tanpa membandingkan kecepatan dengan orang lain.",
                makna: "Setiap hal memiliki waktu dan prosesnya sendiri untuk berkembang. Seseorang tidak harus selalu tumbuh dengan kecepatan yang sama seperti orang lain, sebab perkembangan tidak dapat dipaksakan hanya karena merasa tertinggal. Seperti tanaman yang tetap bertumbuh tanpa harus selalu diperhatikan, manusia pun dapat berkembang dalam diam. Tulisan ini berbicara tentang kesabaran terhadap proses diri sendiri dan penerimaan bahwa belum mencapai sesuatu bukan berarti gagal.",
                simbol: "Tanaman di beranda, musim pertumbuhan",
                hubungan: "Menjawab kegelisahan merasa tertinggal yang muncul pada JIWA #06 (Bayang Waktu).",
              },
            },
            {
              id: "hening-04",
              code: "#04",
              title: "PEMBATAS BUKU",
              body: "Di rak buku masih ada pembatas halaman yang tak pernah kupindahkan. Aku bahkan sudah lupa bagaimana cerita itu berakhir, tetapi anehnya aku masih ingat siapa yang pernah menyelipkannya di sana. Ingatan rupanya tidak selalu menyimpan hal yang paling penting; kadang ia hanya memilih sesuatu yang paling sulit dilepaskan.",
              highlight: "Masih Terselip",
              meaning: {
                ringkas: "Ingatan kerap menetap bukan pada keseluruhan cerita, melainkan pada detail kecil yang bermakna emosional.",
                makna: "Tidak semua kenangan yang bertahan berasal dari peristiwa besar. Terkadang, benda sederhana justru menyimpan ingatan yang jauh lebih kuat daripada keseluruhan cerita. Sebuah pembatas buku mungkin tidak lagi mengingatkan seseorang pada isi buku yang dibacanya, tetapi tetap membuatnya mengingat orang yang pernah memberikannya. Tulisan ini menggambarkan bagaimana ingatan sering kali menetap pada detail kecil yang memiliki makna emosional.",
                simbol: "Pembatas halaman di rak buku",
                hubungan: "Menghadirkan wujud benda sehari-hari dari tema jejak ingatan pada JIWA #04 dan RASA #04.",
              },
            },
            {
              id: "hening-05",
              code: "#05",
              title: "CUACA",
              body: "Langit di luar jendela tidak berubah hanya karena hariku sedang buruk. Ia tetap menjalankan tugasnya menjadi mendung, menjadi cerah, tanpa pernah merasa perlu memahami kesedihan siapa pun. Anehnya, justru sikap netral itu terasa menenangkan—seolah dunia membiarkanku beristirahat tanpa meminta penjelasan mengapa hari ini terasa lebih berat.",
              highlight: "Langit yang Netral",
              meaning: {
                ringkas: "Ketenangan dalam menerima bahwa dunia tetap berjalan netral tanpa menuntut penjelasan atas kesedihan kita.",
                makna: "Dunia tidak selalu berubah mengikuti keadaan perasaan seseorang. Langit tetap mendung atau cerah tanpa harus mengetahui apa yang sedang dialami manusia di bawahnya. Justru ketidakpedulian alam terhadap keadaan pribadi itu dapat menghadirkan rasa lega. Seseorang tidak perlu menjelaskan kesedihannya kepada dunia atau menuntut keadaan sekitar untuk berubah. Tulisan ini berbicara tentang menemukan ketenangan dalam menerima bahwa kehidupan tetap berjalan, bahkan ketika diri sendiri sedang tidak baik-baik saja.",
                simbol: "Langit mendung & cerah, jendela",
                hubungan: "Memperluas simbol jendela dari JIWA #07 yang kini menghadirkan rasa lega alih-alih kekosongan.",
              },
            },
            {
              id: "hening-06",
              code: "#06",
              title: "BAYANGAN",
              body: "Bayangan selalu muncul ketika cahaya datang dari arah tertentu. Kadang ia memanjang di depanku, kadang berjalan diam-diam di belakangku, tetapi tidak pernah benar-benar meninggalkan langkah ini. Mungkin menerima diri sendiri bukan berarti menghilangkan bagian yang gelap, melainkan berhenti menganggapnya sebagai musuh.",
              highlight: "Mengikuti jejak Cahaya",
              meaning: {
                ringkas: "Berdamai dengan diri sendiri berarti berhenti memperlakukan sisi gelap dan masa lalu sebagai musuh.",
                makna: "Setiap orang memiliki sisi yang terang maupun gelap, dan keduanya merupakan bagian dari diri yang sama. Bayangan tidak selalu menjadi sesuatu yang harus dihilangkan, sebab keberadaannya tidak dapat dipisahkan sepenuhnya dari cahaya. Tulisan ini menggambarkan penerimaan terhadap kekurangan, masa lalu, dan sisi diri yang selama ini dianggap tidak menyenangkan. Berdamai dengan diri sendiri berarti berhenti memperlakukan bagian tersebut sebagai musuh.",
                simbol: "Bayangan & arah cahaya",
                hubungan: "Menyatukan kembali motif bayangan dari JIWA #01 dan JIWA #05 menjadi penerimaan utuh.",
              },
            },
            {
              id: "hening-07",
              code: "#07",
              title: "LAIN WAKTU",
              body: "Aku mulai percaya bahwa tidak semua hal harus selesai hari ini. Ada percakapan yang baru menemukan maknanya setelah beberapa malam, sebagaimana ada luka yang diam-diam menutup tanpa pernah memberi tahu kapan proses itu dimulai. Sejak itu, \"lain waktu\" terdengar bukan sebagai penundaan, melainkan bentuk kesabaran.",
              highlight: "Tak Hari Ini",
              meaning: {
                ringkas: "Memberi waktu dan jarak bagi persoalan maupun luka untuk menemukan maknanya secara perlahan.",
                makna: "Tidak semua persoalan harus diselesaikan pada hari yang sama ketika persoalan itu muncul. Ada hal-hal yang baru dapat dipahami setelah seseorang memiliki cukup waktu dan jarak untuk melihatnya kembali. Tulisan ini menggambarkan perubahan cara memandang penundaan: dari sesuatu yang dianggap sebagai kegagalan atau penghindaran menjadi bentuk kesabaran terhadap proses yang memang belum selesai.",
                simbol: "Jeda beberapa malam, luka yang menutup diam-diam",
                hubungan: "Menjawab kepedihan luka yang terus disentuh pada RASA #09 dengan kesabaran memberi jarak.",
              },
            },
            {
              id: "hening-08",
              code: "#08",
              title: "DIAM",
              body: "Diam sering disalahpahami sebagai kekosongan. Padahal kadang ia cuma ruang yang cukup luas untuk membiarkan sesuatu duduk tanpa diganggu. Di sana tidak ada jawaban besar, tidak ada penutupan yang rapi, hanya napas yang tetap masuk dan keluar seperti biasa. Untuk beberapa hal, itu sudah bentuk paling jujur dari tenang.",
              highlight: "Tanpa Jawaban",
              meaning: {
                ringkas: "Diam sebagai ruang luas untuk membiarkan pengalaman hadir tanpa dipaksa memiliki jawaban besar.",
                makna: "Keheningan tidak selalu menandakan kehampaan atau ketidakberdayaan. Terkadang, diam adalah ruang yang memberi seseorang kesempatan untuk merasakan sesuatu tanpa harus segera mencari jawaban atau membuat keputusan. Tidak semua pengalaman membutuhkan penjelasan yang panjang ataupun penutupan yang sempurna. Tulisan ini menggambarkan ketenangan sederhana dalam membiarkan sesuatu hadir tanpa terus-menerus berusaha mengendalikannya.",
                simbol: "Napas yang masuk dan keluar, ruang diam",
                hubungan: "Memulihkan makna 'diam' yang sebelumnya terasa kalah dan lelah pada SEMU #09.",
              },
            },
            {
              id: "hening-09",
              code: "#09",
              title: "PINTU TERBUKA",
              body: "Besok tidak pernah datang membawa kepastian. Ia hanya mengetuk pintu yang sama setiap pagi, memberi kesempatan lain untuk mencoba hal-hal yang kemarin belum sempat dilakukan. Barangkali hidup memang lebih sering bergerak lewat kesempatan kecil daripada keajaiban yang selalu kita tunggu.",
              highlight: "Aku Masih di sini",
              meaning: {
                ringkas: "Kesediaan membuka diri terhadap kesempatan kecil setiap pagi meski hari esok tidak menjanjikan kepastian.",
                makna: "Masa depan tidak menjanjikan kepastian tentang apa yang akan terjadi. Namun, setiap hari tetap memberi kesempatan untuk mencoba kembali hal-hal yang sebelumnya belum sempat dilakukan. Harapan tidak harus selalu datang dalam bentuk perubahan besar; terkadang, ia hadir melalui kesempatan kecil yang muncul dalam rutinitas sehari-hari. Tulisan ini berbicara tentang kesediaan untuk terus membuka diri terhadap hari esok meskipun belum mengetahui hasilnya.",
                simbol: "Ketukan pintu pagi, kesempatan kecil",
                hubungan: "Menyiapkan langkah awal menuju penemuan-penemuan baru pada SKETSA TEMU.",
              },
            },
            {
              id: "hening-10",
              code: "#10",
              title: "LANGKAH",
              body: "Tidak ada suara yang menandai kapan seseorang benar-benar mulai pulih. Yang ada hanya langkah-langkah kecil yang terasa biasa saja sampai suatu hari kita menoleh ke belakang dan menyadari betapa jauhnya jarak yang telah ditinggalkan. Rupanya hidup memang lebih sering berubah secara perlahan daripada sekaligus.",
              highlight: "Tetap Berjalan",
              meaning: {
                ringkas: "Pemulihan terjadi lewat langkah-langkah kecil yang baru terlihat jauhnya ketika kita menoleh ke belakang.",
                makna: "Perubahan dan pemulihan tidak selalu memiliki tanda yang jelas. Seseorang mungkin tidak menyadari bahwa dirinya telah berkembang karena setiap langkah kecil terasa biasa ketika sedang dijalani. Namun, ketika menoleh ke belakang, ia dapat melihat bahwa dirinya telah melewati jarak yang cukup jauh. Tulisan ini menggambarkan proses pertumbuhan yang berlangsung perlahan dan pentingnya menghargai kemajuan yang mungkin tidak terlihat secara langsung.",
                simbol: "Langkah kecil tanpa suara, menoleh ke belakang",
                hubungan: "Menjadi jembatan langsung menuju karya pembuka SKETSA TEMU #01 ('BERJALAN').",
              },
            },
          ],
          closing: {
            id: "hening-penutup",
            title: "SAMPAI NANTI",
            body: "Barangkali tidak semua yang kita temui di sepanjang halaman ini berhasil dipahami. Ada perasaan yang memang hanya bisa dikenali setelah ia berlalu, sebagaimana ada keheningan yang baru terdengar ketika dunia kembali riuh. Karena itu, tak ada yang perlu dipaksa selesai hari ini.\n\nBuku ini mungkin berhenti di halaman terakhir, tetapi perjalanan yang dibawanya tidak. Jika suatu saat kau kembali membukanya, semoga kau menemukan makna yang berbeda dari sebelumnya—bukan karena tulisannya berubah, melainkan karena dirimu telah berjalan sedikit lebih jauh. Sampai nanti.",
            highlight: "Belum Usai",
            meaning: {
              ringkas: "Makna sebuah tulisan terus bertumbuh seiring langkah pembacanya yang berjalan lebih jauh.",
              makna: "Tidak semua hal dalam hidup harus dipahami atau diselesaikan sebelum seseorang melangkah ke tahap berikutnya. Ada pengalaman yang maknanya baru akan terlihat setelah waktu berlalu dan diri sendiri mengalami perubahan. Penutup ini menjadi salam perpisahan yang tidak benar-benar mengakhiri perjalanan. Sebuah tulisan mungkin telah sampai pada halaman terakhir, tetapi pembacanya masih akan terus bertumbuh dan menemukan makna yang berbeda ketika suatu hari kembali membacanya.",
              simbol: "Halaman terakhir buku, salam perpisahan sementara",
              hubungan: "Menutup ARC 04 (HENING) dan mengantar perjalanan ke ruang perjumpaan baru pada ARC 05 (TEMU).",
            },
          },
        },
        {
          id: "temu",
          num: "ARC 05",
          code: "SKT-05",
          series: "SKETSA TEMU",
          themeTag: "PENEMUAN & ARAH",
          question: "“Apa yang sedang menungguku di depan sana?”",
          status: "established",
          instagram: "https://www.instagram.com/p/Dfi9CzAkq11/?img_index=1",
          colors: {
            folderBack: "#7b6755",
            folderFront: "linear-gradient(135deg, #927d69 0%, #eddfd3 100%)",
            gradient: "linear-gradient(135deg, #927d69 0%, #eddfd3 100%)",
            paper: "#f7f1eb",
            closingPaper: "#ded9d3",
            accent: "#6e5a49",
            highlightBg: "rgba(110, 90, 73, 0.16)",
            folderInk: "#1f1710",
            isLightFolder: true,
            openingInk: "#1f1710",
            isLightOpening: true,
          },
          opening: {
            quote: "“Beberapa hal datang tanpa dicari, lalu menetap.”",
            author: "Nathara Archive's",
            project: "SKETSA TEMU",
          },
          issues: [
            {
              id: "temu-01",
              code: "#01",
              title: "BERJALAN",
              body: "Aku tak selalu tahu ke mana arah membawa. Sering kali, aku hanya mengikuti jalan di depan, merangkai hari tanpa menyoal ujungnya. Saat itu, aku sekadar berjalan—tanpa menyadari bahwa langkah paling sederhana pun mampu mempertemukan kita dengan sesuatu di luar rencana.",
              highlight: "tanpa menyadari",
              meaning: {
                ringkas: "Langkah-langkah sederhana tanpa rencana besar sering kali justru mempertemukan kita dengan hal yang bermakna.",
                makna: "Tidak semua perjalanan dimulai dengan tujuan yang jelas. Terkadang, seseorang hanya menjalani hari dan mengikuti arah yang tersedia tanpa mengetahui apa yang akan ditemukan. Namun, langkah-langkah sederhana tersebut dapat membawanya menuju pengalaman yang tidak pernah direncanakan sebelumnya. Tulisan ini menggambarkan bahwa sesuatu yang berarti terkadang ditemukan ketika seseorang sekadar bersedia untuk terus berjalan.",
                simbol: "Jalan di depan, langkah sederhana",
                hubungan: "Melanjutkan langkah pemulihan dari HENING #10 ke ruang perjumpaan tak terduga.",
              },
            },
            {
              id: "temu-02",
              code: "#02",
              title: "SESUATU YANG BARU",
              body: "Aku sudah terlalu hafal susunan hariku; waktu yang berulang dan kejadian yang mudah ditebak. Lalu, sesuatu menyela di antara rutinitas itu. Tak banyak yang berubah di sekeliling, tetapi ada lipatan kecil dari hariku yang kini terasa berbeda. Hari yang sama, rupanya bisa menyimpan kejutan yang baru.",
              highlight: "yang belum kukenal",
              meaning: {
                ringkas: "Kehadiran satu hal kecil yang baru mampu memberi warna berbeda pada rutinitas yang tampak mudah ditebak.",
                makna: "Rutinitas yang berlangsung berulang kali dapat membuat seseorang merasa telah mengenal seluruh pola kehidupannya. Namun, kehadiran satu hal baru mampu mengubah cara ia memandang hari-hari yang sebelumnya terasa sama. Perubahannya mungkin kecil dan tidak terlihat oleh orang lain, tetapi cukup untuk menghadirkan pengalaman yang berbeda. Tulisan ini menggambarkan bagaimana sesuatu yang baru dapat muncul di tengah kehidupan yang tampaknya sudah mudah ditebak.",
                simbol: "Susunan rutinitas, lipatan kecil hari",
                hubungan: "Menandai masuknya kehadiran baru setelah rutinitas tenang pada HENING #01.",
              },
            },
            {
              id: "temu-03",
              code: "#03",
              title: "PENASARAN",
              body: "Awalnya, perhatianku sekadar singgah. Menoleh sebentar, lalu berlalu. Namun, tanpa sengaja aku mulai merekam detail yang biasa kulewatkan. Pikiranku diam-diam kembali ke sana. Rasa penasaran rupanya tak selalu berwujud pertanyaan; kadang ia sekadar perhatian yang enggan beranjak pergi.",
              highlight: "enggan beranjak",
              meaning: {
                ringkas: "Ketertarikan bermula dari perhatian sederhana yang diam-diam merekam detail dan enggan beranjak.",
                makna: "Perhatian yang awalnya hanya singgah sebentar dapat perlahan berubah menjadi rasa penasaran. Seseorang mulai memperhatikan detail yang dahulu tidak dianggap penting dan tanpa sadar terus memikirkan hal yang sama. Tulisan ini menggambarkan awal mula ketertarikan, ketika sesuatu yang sederhana mulai memiliki tempat dalam pikiran dan tidak lagi mudah diabaikan.",
                simbol: "Perhatian yang singgah, detail kecil",
                hubungan: "Menjadi tahap pertama ketertarikan yang berkembang menjadi keinginan memahami di TEMU #04.",
              },
            },
            {
              id: "temu-04",
              code: "#04",
              title: "PERTANYAAN",
              body: "Setelah lekat memperhatikan, aku terdorong memahami lebih jauh—mencari makna di balik sikap dan hal-hal yang tak terucap. Semakin kuselami, makin kusadari bahwa mengenal bukan sekadar mengumpulkan jawaban. Untuk pertama kalinya, aku tak sekadar ingin tahu; aku ingin mengerti.",
              highlight: "ingin mengerti",
              meaning: {
                ringkas: "Peralihan dari sekadar rasa ingin tahu menuju kesungguhan untuk benar-benar mengerti.",
                makna: "Rasa penasaran dapat berkembang menjadi keinginan untuk mengenal seseorang atau sesuatu dengan lebih mendalam. Perhatian tidak lagi berhenti pada apa yang terlihat, tetapi mulai mencari pemahaman terhadap sikap, kebiasaan, dan hal-hal yang tidak diucapkan. Tulisan ini menggambarkan perubahan dari sekadar ingin tahu menjadi keinginan untuk benar-benar mengerti.",
                simbol: "Hal-hal yang tak terucap, menyelami makna",
                hubungan: "Memperdalam rasa penasaran dari TEMU #03 menjadi keterbukaan ruang pada TEMU #05.",
              },
            },
            {
              id: "temu-05",
              code: "#05",
              title: "RUANG KECIL",
              body: "Aku mulai menyisakan ruang untuk hal yang sebelumnya tak pernah ada. Sedikit waktu, secuil perhatian, sebuah jeda di antara hariku yang penuh. Awalnya kulakukan dengan sadar, seperti membuka ruang di antara kebiasaan yang telah lama tersusun. Aku belum tahu seberapa besar ruang itu kelak tumbuh. Yang kutahu, aku tak lagi keberatan merombak kebiasaanku.",
              highlight: "menyisakan ruang",
              meaning: {
                ringkas: "Kesediaan merombak kebiasaan lama demi menyisakan waktu dan jeda bagi kehadiran yang baru.",
                makna: "Ketika sesuatu mulai dianggap penting, seseorang perlahan bersedia mengubah kebiasaannya untuk memberi tempat bagi hal tersebut. Ia mulai menyediakan waktu, perhatian, dan ruang dalam kehidupan yang sebelumnya telah tersusun. Tulisan ini menggambarkan tahap ketika kehadiran baru mulai diterima, meskipun seseorang belum mengetahui seberapa besar pengaruhnya kelak.",
                simbol: "Jeda di antara hari yang penuh, merombak kebiasaan",
                hubungan: "Berpasangan dengan TEMU #06 ketika ruang yang disengaja itu berubah menjadi bagian alami keseharian.",
              },
            },
            {
              id: "temu-06",
              code: "#06",
              title: "MENJADI BAGIAN",
              body: "Tiba masanya aku tak perlu lagi sengaja menyisihkan waktu. Kehadirannya menyusup dalam hal biasa: cerita yang ingin kubagi, atau sekadar nama yang spontan kucari saat hari terasa terlampau panjang. Sesuatu yang dulu harus kuberi tempat, kini lebur berjalan bersama hari-hariku.",
              highlight: "lebur berjalan",
              meaning: {
                ringkas: "Kehadiran seseorang melebur secara alami ke dalam keseharian tanpa perlu lagi sengaja diusahakan.",
                makna: "Sesuatu yang awalnya harus diberi ruang secara sengaja akhirnya mulai menjadi bagian alami dari kehidupan sehari-hari. Kehadiran seseorang tidak lagi terasa seperti tambahan dalam rutinitas, melainkan sesuatu yang secara spontan ikut hadir dalam berbagai aktivitas. Tulisan ini menggambarkan perkembangan kedekatan, ketika seseorang mulai menjadi bagian dari keseharian tanpa perlu terus-menerus diusahakan.",
                simbol: "Cerita yang dibagi, nama yang dicari spontan",
                hubungan: "Kelanjutan organik dari ruang kecil yang dibuka pada TEMU #05.",
              },
            },
            {
              id: "temu-07",
              code: "#07",
              title: "DUGAAN",
              body: "Dalam ketidaktahuan, aku kerap terburu-buru menyusun makna. Satu ucapan kutafsirkan terlalu jauh; satu sikap kuberi arti yang belum tentu tepat. Kini aku belajar memberi batas antara apa yang benar terjadi dan apa yang riuh kubayangkan. Sebab tak semua yang terasa masuk akal benar-benar terjadi.",
              highlight: "riuh kubayangkan",
              meaning: {
                ringkas: "Belajar memisahkan kenyataan dari tafsir dan bayangan berlebihan yang disusun pikiran sendiri.",
                makna: "Ketika mulai peduli terhadap seseorang, seseorang juga dapat menjadi lebih mudah menafsirkan setiap ucapan dan sikap secara berlebihan. Hal-hal sederhana terkadang diberi makna yang belum tentu sesuai dengan kenyataan. Tulisan ini menggambarkan pentingnya membedakan antara apa yang benar-benar terjadi dan apa yang hanya dibentuk oleh asumsi sendiri. Tidak semua hal yang terasa meyakinkan berarti benar.",
                simbol: "Batas antara kenyataan dan bayangan",
                hubungan: "Menunjukkan kedewasaan baru dibanding kecenderungan membesarkan yang semu pada SEMU #03.",
              },
            },
            {
              id: "temu-08",
              code: "#08",
              title: "MENDAHULUI WAKTU",
              body: "Sesekali aku memaksa tahu ke mana arah ini bermuara. Mencari petunjuk dari sesuatu yang belum selesai, berharap hari ini memberi gambaran tentang esok. Saking sibuknya menghitung kemungkinan, aku lupa merengkuh apa yang sedang berlangsung. Masa depan belum tiba. Untuk sekarang, biarkan waktu mengiringi apa yang tengah berjalan.",
              highlight: "merengkuh sekarang",
              meaning: {
                ringkas: "Berhenti memaksa meramal akhir cerita agar tidak kehilangan makna dari apa yang sedang dijalani hari ini.",
                makna: "Keinginan untuk mengetahui masa depan terkadang membuat seseorang terlalu sibuk memikirkan berbagai kemungkinan yang belum terjadi. Ia mencari kepastian dari hubungan atau keadaan yang masih berlangsung, hingga lupa menikmati apa yang sedang dimiliki saat ini. Tulisan ini mengingatkan bahwa masa depan tidak dapat dipastikan hanya dengan terus memikirkannya. Ada kalanya seseorang perlu membiarkan waktu berjalan dan memberi perhatian pada kehidupan yang sedang berlangsung.",
                simbol: "Muara perjalanan, menghitung kemungkinan",
                hubungan: "Melanjutkan semangat kesabaran waktu dari HENING #07 ke dalam konteks relasi baru.",
              },
            },
            {
              id: "temu-09",
              code: "#09",
              title: "PERMULAAN",
              body: "Saat menoleh ke belakang, aku kesulitan menunjuk satu hari sebagai garis mula. Tak ada dentuman besar yang mengubah keadaan. Hanya percakapan dan pertemuan sederhana yang saat itu terasa biasa. Baru setelah semuanya terangkai, kusadari bahwa sesuatu telah dimulai jauh sebelumnya. Rupanya, permulaan tak selalu datang membawa tanda.",
              highlight: "Jauh sebelumnya",
              meaning: {
                ringkas: "Permulaan sering kali tidak hadir lewat peristiwa besar, melainkan baru disadari setelah terangkai utuh.",
                makna: "Sebuah perjalanan atau hubungan tidak selalu memiliki satu titik awal yang dapat ditunjuk dengan jelas. Sesuatu mungkin telah dimulai melalui percakapan sederhana, pertemuan kecil, atau kejadian yang saat itu tampak biasa saja. Maknanya baru terlihat setelah berbagai pengalaman tersebut tersusun menjadi sebuah cerita. Tulisan ini menggambarkan bahwa permulaan terkadang baru disadari setelah seseorang melihat kembali perjalanan yang telah dilewati.",
                simbol: "Garis mula, percakapan sederhana",
                hubungan: "Sejalan dengan kesadaran menoleh ke belakang pada HENING #10.",
              },
            },
            {
              id: "temu-10",
              code: "#10",
              title: "YANG TAK KUKETAHUI",
              body: "Selama sibuk mengenal sosok lain, diam-diam kutemukan bagian diriku yang ikut terbuka. Terkadang, hal yang luput dari pandanganku justru tertangkap oleh matanya. Kukira proses mengenal hanya bergerak searah. Kini aku mengerti, terkadang seseorang dapat melihat bagian diriku yang selama ini tak pernah kusadari.",
              highlight: "tatapan seseorang",
              meaning: {
                ringkas: "Proses mengenal orang lain juga membuka sisi diri sendiri yang selama ini luput dari pandangan pribadi.",
                makna: "Dalam proses mengenal orang lain, seseorang terkadang justru menemukan sesuatu yang sebelumnya tidak ia ketahui tentang dirinya sendiri. Cara orang lain melihat dan memahami dirinya dapat memperlihatkan sisi yang selama ini luput dari perhatian pribadi. Tulisan ini menggambarkan hubungan sebagai proses yang tidak hanya membantu seseorang mengenal orang lain, tetapi juga membuka kesempatan untuk mengenali dirinya sendiri dengan cara yang berbeda.",
                simbol: "Tatapan mata orang lain sebagai cermin baru",
                hubungan: "Menjawab keterasingan diri pada JIWA #05 lewat kehadiran perspektif orang lain.",
              },
            },
            {
              id: "temu-11",
              code: "#11",
              title: "PERLAHAN",
              body: "Pada titik ini, semuanya tak lagi sekadar kebetulan yang numpang lewat. Ada perhatian yang tertinggal usai percakapan berakhir; ada cerita yang terbawa melintasi malam. Aku belum tahu nama dari rasa ini dan untuk pertama kalinya, aku tak tergesa melabelinya. Cukup bagiku mengakui, kehadirannya telah memiliki arti.",
              highlight: "tidak sekadar lewat",
              meaning: {
                ringkas: "Mengakui bahwa suatu kehadiran telah memiliki arti tanpa tergesa-gesa memberinya label.",
                makna: "Ada titik ketika kehadiran seseorang mulai memiliki arti yang lebih besar daripada sekadar kebetulan. Perhatian tetap terasa setelah percakapan selesai, dan pengalaman bersama mulai terbawa dalam pikiran bahkan ketika keduanya sedang berjauhan. Namun, seseorang tidak harus terburu-buru menentukan nama atau bentuk dari perasaan tersebut. Tulisan ini menggambarkan kesediaan untuk mengakui bahwa sesuatu telah menjadi berarti, sambil membiarkannya berkembang secara alami.",
                simbol: "Cerita yang melintasi malam, rasa tanpa label tergesa",
                hubungan: "Menjadi pijakan akhir sebelum sudut pandang beralih dari 'aku' menjadi 'kami' di TEMU #12.",
              },
            },
            {
              id: "temu-12",
              code: "#12",
              title: "SEBELUM MENJADI",
              body: "Sebuah awal tak lantas menyuguhkan jawaban tentang kelanjutannya. Masih banyak yang harus dipelajari dari seni berjalan berdampingan. Keinginan semata tak cukup menjamin arah, namun ada kesediaan untuk memberi ruang pada apa yang tengah ditapaki. Untuk saat ini, kami belum harus tahu akan menjadi apa. Kami hanya perlu melangkah—satu per satu, dengan sungguh-sungguh.",
              highlight: "satu per satu",
              meaning: {
                ringkas: "Kesungguhan untuk melangkah berdampingan satu per satu tanpa menuntut kepastian masa depan di awal.",
                makna: "Sebuah hubungan yang baru dimulai tidak harus langsung memiliki kepastian tentang masa depannya. Ada banyak hal yang masih perlu dipelajari ketika dua orang mulai mencoba berjalan berdampingan. Keinginan untuk bersama saja tidak cukup untuk menentukan arah, karena hubungan membutuhkan kesediaan, usaha, dan ruang bagi kedua pihak untuk berkembang. Tulisan ini menggambarkan tahap awal sebuah perjalanan bersama, ketika yang terpenting bukan mengetahui akan menjadi apa nantinya, melainkan kesungguhan dalam menjalani prosesnya.",
                simbol: "Seni berjalan berdampingan, langkah satu per satu",
                hubungan: "Menandai transisi penting sudut pandang dari 'aku' ke 'kami' menuju arc mendatang SKETSA JATUH.",
              },
            },
          ],
          closing: {
            id: "temu-penutup",
            title: "YANG KUTEMUKAN",
            body: "Aku tidak tahu apakah aku sudah menemukan apa yang kucari, sebab sejak awal pun aku tidak pernah benar-benar tahu apa yang sedang kucari. Ada banyak hal yang terjadi di sepanjang jalan, beberapa kulewati begitu saja, sementara yang lain membuatku berhenti dan melihat kembali. Mungkin tidak semuanya perlu kupahami sekarang.\n\nAku masih punya banyak hal untuk dipelajari, banyak jalan yang belum kulewati, dan banyak kemungkinan yang belum pernah terpikirkan sebelumnya. Aku tidak tahu ke mana semua ini akan membawaku, tetapi untuk saat ini, aku tidak keberatan jika perjalanan ini membawaku sedikit lebih jauh. Barangkali masih ada banyak hal yang belum kutemukan.",
            highlight: "Masih ada di depan",
            meaning: {
              ringkas: "Penemuan sejati bukanlah mencapai tujuan akhir, melainkan kesediaan terus berjalan terbuka.",
              makna: "Seseorang mungkin memulai perjalanan dengan harapan menemukan sesuatu, meskipun sejak awal tidak benar-benar tahu apa yang sedang dicari. Sepanjang perjalanan, berbagai pertemuan dan pengalaman memberinya pemahaman baru, tetapi tidak semuanya harus langsung menjadi jawaban. Penutup ini menggambarkan bahwa penemuan bukan selalu tentang mencapai tujuan akhir. Terkadang, hal yang paling berarti justru adalah kesediaan untuk terus berjalan dan terbuka terhadap kemungkinan yang belum diketahui.",
              simbol: "Jalan yang belum dilewati, kemungkinan di depan",
              hubungan: "Menutup ARC 05 (TEMU) — arc terakhir yang telah terbit — dan membuka cakrawala menuju SKETSA JATUH & PULANG.",
            },
          },
        },
        {
          id: "jatuh",
          num: "ARC 06",
          code: "SKT-06",
          series: "SKETSA JATUH",
          themeTag: "KERENTANAN & CINTA",
          question: "“Untuk pertama kalinya, bolehkah aku tinggal?”",
          status: "upcoming",
          statusLabel: "SEGERA HADIR",
          instagram: "https://www.instagram.com/natharaarchive/",
          colors: {
            folderBack: "#382420",
            folderFront: "linear-gradient(145deg, #52342e 0%, #2b1b18 100%)",
            gradient: "linear-gradient(135deg, #2b1a17 0%, #6b4139 100%)",
            paper: "#f6f0ed",
            closingPaper: "#ddd8d5",
            accent: "#b55d4c",
            highlightBg: "rgba(181, 93, 76, 0.16)",
            folderInk: "#ffffff",
            isLightFolder: false,
            openingInk: "#ffffff",
            isLightOpening: false,
          },
          opening: {
            quote: "“Untuk pertama kalinya, bolehkah aku tinggal?”",
            author: "Nathara Archive's",
            project: "SKETSA JATUH",
          },
          issues: [],
          closing: null,
        },
        {
          id: "pulang",
          num: "ARC 07",
          code: "SKT-07",
          series: "SKETSA PULANG",
          themeTag: "KEDAMAIAN UTUH",
          question: "“Apa semua ini akhirnya berarti?”",
          status: "upcoming",
          statusLabel: "SEGERA HADIR",
          instagram: "https://www.instagram.com/natharaarchive/",
          colors: {
            folderBack: "#24282b",
            folderFront: "linear-gradient(145deg, #373d42 0%, #1c2022 100%)",
            gradient: "linear-gradient(135deg, #1b1f22 0%, #465057 100%)",
            paper: "#f4f3ef",
            closingPaper: "#dcdbd7",
            accent: "#5e6d75",
            highlightBg: "rgba(94, 109, 117, 0.16)",
            folderInk: "#ffffff",
            isLightFolder: false,
            openingInk: "#ffffff",
            isLightOpening: false,
          },
          opening: {
            quote: "“Tujuan perjalanan bukanlah menjadi utuh, melainkan menyadari bahwa kita tetap bisa melanjutkan hidup.”",
            author: "Nathara Archive's",
            project: "SKETSA PULANG",
          },
          issues: [],
          closing: null,
        },
      ];

      // =======================================================================
      // 2. SANSKERTA & KAWI GLOSSARY DATA
      // =======================================================================
      const SANSKRIT_GLOSSARY = [
        {
          id: "silpa",
          term: "silpa",
          variants: ["silpa"],
          origin: "Kawi / Sanskerta (śilpa — alat & laku seni)",
          meaning: "Pena, alat menggurat, atau perkakas seni yang dipakai menorehkan garis di atas bidang.",
          context: "JIWA #01: “Aku menari dengan silpa, mengguratkan cahaya dan bayangan.” — metafora pena/kuas yang menggoreskan kisah.",
          issues: ["jiwa-01"],
        },
        {
          id: "tara",
          term: "tara",
          variants: ["tara"],
          origin: "Bahasa Indonesia Klasik / Kawi",
          meaning: "Imbangan, bandingan, atau tolok ukur yang sepadan.",
          context: "JIWA #01: “Bukan karena tara atau warna, tapi karena aku adalah aku...” — bukan karena penilaian maupun perbandingan.",
          issues: ["jiwa-01"],
        },
        {
          id: "rahasya",
          term: "rahasya",
          variants: ["rahasya"],
          origin: "Sanskerta (rahasya)",
          meaning: "Rahasia terdalam; sesuatu yang tersembunyi di balik permukaan kata dan tidak mudah diungkap.",
          context: "JIWA #01 (“dengan rahasya yang tak tersketsa”) & RASA #03 (“RAHASYA MENYEMBUNYIKAN AKU”).",
          issues: ["jiwa-01", "rasa-03"],
        },
        {
          id: "nirakala",
          term: "nirakala",
          variants: ["nirakala"],
          origin: "Sanskerta (nir + kāla)",
          meaning: "Tanpa waktu; alam keheningan yang membeku di luar batas detik, masa lalu, dan masa depan.",
          context: "JIWA #02: “biarlah aku hilang dalam Nirakala—menukar napasku dengan ilusi...”",
          issues: ["jiwa-02"],
        },
        {
          id: "arka",
          term: "arka",
          variants: ["arka"],
          origin: "Sanskerta (arka)",
          meaning: "Matahari; cahaya siang yang perlahan tenggelam ketika senja beranjak menuju malam.",
          context: "JIWA #03: “saat arka tenggelam dan tārakā menuntunku...”",
          issues: ["jiwa-03"],
        },
        {
          id: "taraka",
          term: "tārakā",
          variants: ["tārakā", "taraka"],
          origin: "Sanskerta (tārakā)",
          meaning: "Bintang-bintang di langit malam yang menjadi penunjuk arah di tengah gelap.",
          context: "JIWA #03: “tārakā menuntunku, membisikkan sunyi yang menyapa...”",
          issues: ["jiwa-03"],
        },
        {
          id: "ratri",
          term: "rātri",
          variants: ["rātri", "ratri"],
          origin: "Sanskerta (rātri)",
          meaning: "Malam; ruang sunyi tempat segala riuh mereda sekaligus saat ingatan terdengar lebih nyaring.",
          context: "JIWA #03 (“RATRI, TEMPAT PULANG”) & SEMU #01 (“setiap kali rātri menutup segalanya dengan diam”).",
          issues: ["jiwa-03", "semu-01"],
        },
        {
          id: "anvesana",
          term: "anvesana",
          variants: ["anvesana", "anveṣaṇa"],
          origin: "Sanskerta (anveṣaṇa)",
          meaning: "Pencarian atau penelusuran batin terhadap seseorang maupun makna yang belum ditemukan.",
          context: "RASA #02: “Aku menuliskanmu bukan karena sudah kutemukan, tapi karena kata-kata ini ingin mencarimu lebih dulu.”",
          issues: ["rasa-02"],
        },
        {
          id: "smrti",
          term: "smṛti",
          variants: ["smṛti", "smrti"],
          origin: "Sanskerta (smṛti)",
          meaning: "Ingatan atau kenangan yang melekat di dalam kesadaran dan terus berdenyut.",
          context: "RASA #04: “berharap dinginnya cukup untuk membuat smṛti kehilangan nadinya.”",
          issues: ["rasa-04"],
        },
        {
          id: "samskara",
          term: "saṁskāra",
          variants: ["saṁskāra", "samskara"],
          origin: "Sanskerta (saṁskāra)",
          meaning: "Jejak kesan batin dari pengalaman masa lalu yang tersimpan dan dapat terbangun kembali oleh pemicu kecil.",
          context: "RASA #05: “cukup untuk membangunkan saṁskāra yang kupikir telah usai.”",
          issues: ["rasa-05"],
        },
        {
          id: "dvandva",
          term: "dvandva",
          variants: ["dvandva"],
          origin: "Sanskerta (dvandva)",
          meaning: "Pasangan yang berseberangan; dualitas atau pertentangan yang memisahkan dua hal yang pernah sejalan.",
          context: "RASA #06: “Bukan salah atau benar — hanya dvandva yang memisahkan dua yang dulu membaca sampai halaman terakhir.”",
          issues: ["rasa-06"],
        },
      ];

      // =======================================================================
      // 3. SERIES EVOLUTION & EDITORIAL DOCUMENTATION (REVISED FROM PDF)
      // =======================================================================
      const EDITORIAL_REVIEW_DATA = {
        frequentWords: [
          { word: "aku", count: "118×", note: "Sudut pandang orang pertama yang dominan dari JIWA hingga TEMU." },
          { word: "seolah / seakan", count: "22×", note: "Banyak muncul di SEMU dan HENING, membangun jarak metaforis antara persepsi dan kenyataan." },
          { word: "mungkin / barangkali", count: "21×", note: "Lebih sering muncul di HENING dan TEMU, mencerminkan nada reflektif yang tidak memaksakan kepastian." },
          { word: "tetap", count: "18×", note: "Menegaskan keberlanjutan ingatan, bayangan, atau langkah di tengah perubahan." },
          { word: "bayangan / bayang", count: "14×", note: "Motif visual yang berulang dari JIWA hingga HENING." },
          { word: "rupanya / entah", count: "11×", note: "Menjadi penanda kesadaran atau pemahaman baru, terutama di bagian akhir fragmen HENING dan TEMU." },
        ],
        patterns: [
          {
            title: "1. Pola Penutup Reflektif — Tidak Selesai / Tidak Benar-Benar Hilang",
            observation:
              "Pada JIWA, RASA, dan SEMU, beberapa karya maupun penutup volume memiliki kecenderungan untuk kembali pada gagasan tentang jejak yang tertinggal atau sesuatu yang belum benar-benar usai.",
            suggestion:
              "Pola ini dapat dipertahankan sebagai benang merah tematik. Namun, variasi penutup melalui citraan konkret seperti benda, suara ruang, atau tindakan kecil dapat memberikan kesan yang lebih segar dan tidak selalu berakhir pada simpulan reflektif.",
          },
          {
            title: "2. Pergeseran Sudut Pandang TEMU #12 ('Aku' → 'Kami')",
            observation:
              "Dari JIWA #01 hingga TEMU #11, narator secara konsisten menggunakan sudut pandang orang pertama tunggal, yaitu aku. Pada TEMU #12, berjudul SEBELUM MENJADI, sudut pandang tersebut bergeser menjadi kami.",
            suggestion:
              "Perubahan ini menghadirkan perspektif yang lebih kolektif dan menandai perkembangan dalam cara narasi disampaikan. Pergeseran tersebut layak dipertahankan sebagai bagian dari eksplorasi sudut pandang, terutama jika memang memiliki fungsi dalam konteks cerita.",
          },
          {
            title: "3. Evolusi Diksi Sanskerta & Arkais menuju Bahasa Indonesia Liris Natural",
            observation:
              "JIWA dan RASA banyak menggunakan kosakata Sanskerta, seperti silpa, nirakala, tārakā, smrti, samskāra, dan dvandva. Sementara itu, HENING dan TEMU mulai bergerak menuju bahasa Indonesia yang lebih jernih dan membumi, dengan citraan seperti cangkir, beranda, pembatas buku, dan cuaca.",
            suggestion:
              "Perubahan ini menjadi bagian dari perkembangan identitas bahasa SKETSA. Glosarium dapat membantu pembaca memahami istilah pada karya-karya awal tanpa harus mengubah atau menghilangkan bentuk asli naskah.",
          },
        ],
      };

      // Lighten a dark volume accent so it stays visible on the dark panels
      function tintAccent(hex) {
        const m = /^#?([0-9a-f]{6})$/i.exec(hex || "");
        if (!m) return "#d8c39e";
        const n = parseInt(m[1], 16);
        const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
        let h = 0;
        if (d) {
          if (max === r) h = ((g - b) / d) % 6;
          else if (max === g) h = (b - r) / d + 2;
          else h = (r - g) / d + 4;
          h *= 60;
          if (h < 0) h += 360;
        }
        const l0 = (max + min) / 2;
        const s0 = d === 0 ? 0 : d / (1 - Math.abs(2 * l0 - 1));
        // keep the original hue, but make it bright and saturated enough to glow
        const S = Math.min(1, Math.max(s0, 0.6));
        const L = 0.6;
        const c = (1 - Math.abs(2 * L - 1)) * S;
        const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        const mm = L - c / 2;
        const [r1, g1, b1] =
          h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
        const to = (v) => Math.round((v + mm) * 255).toString(16).padStart(2, "0");
        return "#" + to(r1) + to(g1) + to(b1);
      }

      const PROJECT_TIMELINE_MILESTONES = [
        {
          volume: "SKETSA JIWA",
          volumeId: "jiwa",
          date: "05 Juli 2025",
          status: "Established",
          established: true,
          description:
            "Menjadi titik awal dari keseluruhan serial. JIWA berangkat dari eksplorasi identitas, keberadaan, dan hubungan seseorang dengan dirinya sendiri. Pada tahap ini, penggunaan istilah Sanskerta dan diksi Indonesia lama juga menjadi bagian dari eksperimen bahasa.",
        },
        {
          volume: "SKETSA RASA",
          volumeId: "rasa",
          date: "10 Februari 2026",
          status: "Established",
          established: true,
          description:
            "RASA membawa eksplorasi ke wilayah yang lebih emosional. Perhatian mulai tertuju pada perasaan, keterikatan, cinta, dan kehilangan, termasuk bagaimana pengalaman tersebut meninggalkan jejak dalam diri seseorang.",
        },
        {
          volume: "SKETSA SEMU",
          volumeId: "semu",
          date: "12 Juni 2026",
          status: "Established",
          established: true,
          description:
            "SEMU mengeksplorasi hubungan antara persepsi dan kenyataan. Tentang sesuatu yang terlihat meyakinkan, tetapi belum tentu benar; tentang ilusi, ingatan, dan ketidakpastian dalam memahami sesuatu.",
        },
        {
          volume: "SKETSA HENING",
          volumeId: "hening",
          date: "03 Oktober 2026",
          status: "Established",
          established: true,
          description:
            "HENING bergerak ke arah yang lebih tenang dan reflektif. Volume ini banyak membicarakan penerimaan, kesunyian, dan bagaimana seseorang belajar menjalani hal-hal yang tidak selalu dapat diubah.",
        },
        {
          volume: "SKETSA TEMU",
          volumeId: "temu",
          date: "10 November 2026",
          status: "Established",
          established: true,
          description:
            "TEMU mulai mengeksplorasi perjumpaan dan penemuan. Bukan hanya tentang bertemu dengan seseorang, tetapi juga tentang menemukan pemikiran, pengalaman, atau kemungkinan baru yang dapat mengubah arah perjalanan.",
        },
        {
          volume: "SKETSA JATUH",
          volumeId: "jatuh",
          date: "Segera Hadir",
          status: "SEGERA HADIR",
          established: false,
          description:
            "Dirancang untuk mengeksplorasi kerentanan, cinta, dan keberanian untuk membuka diri. Tentang bagaimana seseorang menghadapi kemungkinan untuk jatuh, terluka, dan memilih untuk tetap tinggal.",
        },
        {
          volume: "SKETSA PULANG",
          volumeId: "pulang",
          date: "Segera Hadir",
          status: "SEGERA HADIR",
          established: false,
          description:
            "Direncanakan sebagai bagian akhir dari perjalanan serial. PULANG akan mengeksplorasi kedamaian, penerimaan, dan gagasan tentang pulang sebagai sesuatu yang tidak selalu berkaitan dengan tempat, tetapi juga dengan diri sendiri.",
        },
      ];

      const CONCEPTUAL_PHASES = [
        {
          phase: "Phase I — The Initial Three-Volume Concept",
          paragraphs: [
            "Pada awalnya, SKETSA hanya dirancang sebagai proyek sastra dengan tiga volume. Ruang lingkupnya masih cukup sederhana, dengan penekanan pada ekspresi puitis dan eksplorasi tema.",
          ],
          bullets: [],
        },
        {
          phase: "Phase II — Expansion into Seven Volumes",
          paragraphs: [
            "Seiring berkembangnya gagasan dan bertambahnya tulisan, konsep awal tersebut perlahan diperluas menjadi tujuh volume. Perluasan ini memberikan ruang bagi eksplorasi pengalaman emosional, pemikiran, dan berbagai sisi kehidupan manusia yang lebih beragam.",
            "Struktur tujuh volume kemudian menjadi fondasi bagi SKETSA sebagai proyek literer yang terus berkembang.",
          ],
          bullets: [],
        },
        {
          phase: "Phase III — Linguistic and Stylistic Transition",
          paragraphs: [
            "Karya-karya awal banyak bereksperimen dengan kosakata Sanskerta, diksi Indonesia lama, dan bahasa puitis. Seiring waktu, pendekatan tersebut mulai bergeser menuju penggunaan bahasa Indonesia yang lebih natural, sederhana, dan langsung, tanpa sepenuhnya meninggalkan karakter puitisnya.",
            "Arah penulisan saat ini lebih mengutamakan kedalaman emosi, citraan, suasana, dan makna di balik kata-kata daripada sekadar kompleksitas bahasa.",
          ],
          bullets: [],
        },
        {
          phase: "Phase IV — Exploring a New Literary Format",
          paragraphs: [
            "Bentuk tulisan SKETSA juga masih terus dieksplorasi. Salah satu gagasan yang sedang dipertimbangkan adalah mengembangkan setiap issue menjadi narasi literer pendek yang lebih mandiri.",
            "Setiap issue berpotensi berkembang menjadi cerita pendek atau narasi mini dengan panjang sekitar satu hingga lima halaman. Namun, konsep ini masih dalam tahap eksperimen dan belum ditetapkan sebagai format akhir.",
            "Beberapa pendekatan yang memungkinkan untuk dieksplorasi:",
            "Eksplorasi ini bertujuan memberi ruang bagi bentuk narasi yang lebih beragam tanpa harus meninggalkan identitas puitis yang sudah menjadi bagian dari SKETSA.",
          ],
          bullets: [
            "Independent Short Stories: Cerita pendek yang berdiri sendiri, tetapi tetap berada dalam tema volume yang sama.",
            "Connected Narratives: Beberapa cerita yang saling terhubung melalui karakter, latar, atau gagasan tertentu.",
            "Continuous Narrative: Satu rangkaian cerita berkelanjutan yang dibagi ke dalam beberapa issue.",
            "Hybrid Literary Format: Gabungan prosa liris, fragmen puitis, dan cerita pendek.",
          ],
        },
      ];

      // =======================================================================
      // 4. STORAGE & STATE MANAGEMENT
      // =======================================================================
      const STORAGE_KEYS = {
        POSITION: "nathara_archive_last_position_v1",
        HISTORY: "nathara_archive_reading_history_v1",
        BOOKMARKS: "nathara_archive_bookmarks_v1",
        READ_SLIDES: "nathara_archive_read_slides_v1",
        READER_PREFS: "nathara_archive_reader_prefs_v4",
      };

      const DEFAULT_READER_PREFS = {
        fontScale: "sm",       // "sm" (default) | "normal" | "lg"
        lineHeight: "normal",  // "normal" | "relaxed"
        widthMode: "compact",  // "compact" | "standard"
        dropCap: true,
        showTerms: true,
      };

      function safeReadStorage(key, fallback) {
        try {
          const raw = window.localStorage.getItem(key);
          if (!raw) return fallback;
          const parsed = JSON.parse(raw);
          return parsed ?? fallback;
        } catch {
          return fallback;
        }
      }

      function safeWriteStorage(key, value) {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch {
          // Safe fallback
        }
      }

      const state = {
        activePage: "archive", // "archive" | "series" | "about"
        mobileMenuOpen: false,
        manifestoOpen: false,
        historyDrawerOpen: false,
        searchQuery: "",
        activeFolderId: null,
        activeSlideIndex: 0,
        slideDirection: null, // "next" | "prev" | null
        controlsOpen: false,
        glossaryModalOpen: false,
        selectedTermModal: null, // { termObj, workCode }
        meaningModalOpen: false,
        copiedUrl: false,
        copiedText: false,
        lastTriggerEl: null,
        lastPopupTriggerEl: null,
        lastPosition: safeReadStorage(STORAGE_KEYS.POSITION, null),
        readingHistory: safeReadStorage(STORAGE_KEYS.HISTORY, []),
        bookmarks: safeReadStorage(STORAGE_KEYS.BOOKMARKS, []),
        readSlidesMap: safeReadStorage(STORAGE_KEYS.READ_SLIDES, {}),
        readerPrefs: Object.assign({}, DEFAULT_READER_PREFS, safeReadStorage(STORAGE_KEYS.READER_PREFS, {})),
      };

      // =======================================================================
      // 5. HELPERS (ESCAPE, GLOSSARY WORD BOUNDARY MATCHER, ROUTING, PROGRESS)
      // =======================================================================
      function escapeHtml(str) {
        return String(str)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
      }

      function formatRelativeTime(timestamp) {
        if (!timestamp) return "";
        const diffSec = Math.max(1, Math.floor((Date.now() - timestamp) / 1000));
        if (diffSec < 60) return "Baru saja";
        const diffMin = Math.floor(diffSec / 60);
        if (diffMin < 60) return `${diffMin} mnt lalu`;
        const diffHr = Math.floor(diffMin / 60);
        if (diffHr < 24) return `${diffHr} jam lalu`;
        const diffDay = Math.floor(diffHr / 24);
        return `${diffDay} hari lalu`;
      }

      function getWorkByCode(workCode) {
        for (const folder of SKETSA_FOLDERS) {
          for (let i = 0; i < folder.issues.length; i++) {
            const iss = folder.issues[i];
            if (iss.id === workCode) {
              return {
                folder,
                issue: iss,
                slideIndex: i + 1,
                shortLabel: `${folder.series.replace("SKETSA ", "")} ${iss.code}`,
              };
            }
          }
        }
        return null;
      }

      const ALL_TERM_VARIANTS = [];
      SANSKRIT_GLOSSARY.forEach((entry) => {
        entry.variants.forEach((v) => ALL_TERM_VARIANTS.push({ variant: v, entry }));
      });
      ALL_TERM_VARIANTS.sort((a, b) => b.variant.length - a.variant.length);

      function isLetterChar(ch) {
        return Boolean(ch && /[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/.test(ch));
      }

      function renderAnnotatedText(rawText, workCode, accentColor) {
        if (!rawText) return "";
        if (!state.readerPrefs.showTerms) return escapeHtml(rawText);

        const lower = rawText.toLowerCase();
        const matches = [];

        for (const item of ALL_TERM_VARIANTS) {
          const needle = item.variant.toLowerCase();
          let pos = 0;
          while (pos < lower.length) {
            const idx = lower.indexOf(needle, pos);
            if (idx === -1) break;
            const endIdx = idx + needle.length;
            const prevCh = idx > 0 ? rawText[idx - 1] : "";
            const nextCh = endIdx < rawText.length ? rawText[endIdx] : "";

            if (!isLetterChar(prevCh) && !isLetterChar(nextCh)) {
              const overlaps = matches.some((m) => !(endIdx <= m.start || idx >= m.end));
              if (!overlaps) {
                matches.push({
                  start: idx,
                  end: endIdx,
                  matchedText: rawText.slice(idx, endIdx),
                  entry: item.entry,
                });
              }
            }
            pos = idx + 1;
          }
        }

        if (matches.length === 0) return escapeHtml(rawText);
        matches.sort((a, b) => a.start - b.start);

        let out = "";
        let cursor = 0;
        for (const m of matches) {
          if (m.start > cursor) out += escapeHtml(rawText.slice(cursor, m.start));
          out += `<button type="button" class="glossary-inline-term" style="--term-underline:${accentColor};--term-hover-color:${accentColor};--term-glow:${accentColor}55;" data-action="open-term-popup" data-term-id="${escapeHtml(
            m.entry.id
          )}" data-work-code="${escapeHtml(workCode || "")}" aria-label="Arti istilah ${escapeHtml(
            m.matchedText
          )}">${escapeHtml(m.matchedText)}</button>`;
          cursor = m.end;
        }
        if (cursor < rawText.length) out += escapeHtml(rawText.slice(cursor));
        return out;
      }

      function buildSlides(folder) {
        if (!folder || folder.status === "upcoming") return [];
        const items = [
          {
            type: "opening",
            issueSlug: "cover",
            label: "COVER",
            quote: folder.opening.quote,
            author: folder.opening.author,
            project: folder.opening.project,
          },
        ];

        folder.issues.forEach((iss) => {
          items.push({
            type: "content",
            issueSlug: iss.code.replace("#", ""),
            label: iss.code,
            workCode: iss.id,
            headerLeft: "Nathara Archive's",
            headerRight: `${folder.series} ${iss.code}`,
            title: iss.title,
            body: iss.body,
            highlight: iss.highlight,
            meaning: iss.meaning || null,
          });
        });

        items.push({
          type: "closing",
          issueSlug: "penutup",
          label: "PENUTUP",
          workCode: folder.closing.id,
          title: folder.closing.title,
          body: folder.closing.body,
          highlight: folder.closing.highlight,
          meaning: folder.closing.meaning || null,
          author: "Nathara Archive's",
          project: folder.series,
        });

        return items;
      }

      function updateDocumentMeta(title, description) {
        document.title = title;
        const setMeta = (selector, content) => {
          const tag = document.querySelector(selector);
          if (tag) tag.setAttribute("content", content);
        };
        setMeta('meta[name="description"]', description);
        setMeta('meta[property="og:title"]', title);
        setMeta('meta[property="og:description"]', description);
        setMeta('meta[name="twitter:title"]', title);
        setMeta('meta[name="twitter:description"]', description);
      }

      function setCleanHash(hashPath) {
        try {
          if (!hashPath) {
            window.history.replaceState(null, "", window.location.pathname + window.location.search);
          } else {
            window.history.replaceState(null, "", "#" + hashPath.replace(/^#\/?/, ""));
          }
        } catch {}
      }

      function recordSlideVisit(folder, slide, slideIdx, totalSlides, updateUrl = true) {
        if (!folder || !slide) return;
        if (updateUrl) setCleanHash(`${folder.id}/${slide.issueSlug}`);

        const issueTitle =
          slide.type === "content"
            ? `${slide.label} ${slide.title} — ${folder.series}`
            : slide.type === "closing"
            ? `Penutup: ${slide.title} — ${folder.series}`
            : `${folder.series} — Opening Cover`;

        updateDocumentMeta(
          `${issueTitle} | Nathara Archive's`,
          slide.body ? `${slide.highlight} — ${slide.body.slice(0, 140)}...` : `${slide.quote} — ${folder.series}`
        );

        const issueLabel =
          slide.type === "content"
            ? `${slide.label} — ${slide.title}`
            : slide.type === "closing"
            ? `PENUTUP — ${slide.title}`
            : "OPENING COVER";

        const entry = {
          volumeId: folder.id,
          volumeSeries: folder.series,
          issueId: slide.issueSlug,
          issueLabel,
          slideIndex: slideIdx,
          totalSlides,
          timestamp: Date.now(),
        };

        state.lastPosition = entry;
        safeWriteStorage(STORAGE_KEYS.POSITION, entry);

        const slideKey = `${folder.id}:${slide.issueSlug}`;
        if (!state.readSlidesMap[slideKey]) {
          state.readSlidesMap[slideKey] = true;
          safeWriteStorage(STORAGE_KEYS.READ_SLIDES, state.readSlidesMap);
        }

        const filtered = state.readingHistory.filter(
          (item) => `${item.volumeId}:${item.issueId}` !== slideKey
        );
        state.readingHistory = [entry, ...filtered].slice(0, 15);
        safeWriteStorage(STORAGE_KEYS.HISTORY, state.readingHistory);
      }

      function applyHashRoute(rawHash) {
        const cleaned = (rawHash || "").replace(/^#\/?/, "").replace(/\/+$/, "").toLowerCase();
        if (!cleaned) {
          state.activeFolderId = null;
          state.activePage = "archive";
          updateDocumentMeta(
            "REPOSITORY // NATHARA ARCHIVE — Serial SKETSA",
            "Repositori digital sastra dan serial prosa liris SKETSA oleh Nathara Archive's."
          );
          return;
        }

        if (cleaned === "about") {
          state.activeFolderId = null;
          state.activePage = "about";
          updateDocumentMeta(
            "Tentang Penulis — Nathara Archive's",
            "Profil dan catatan pribadi Nathara di balik Nathara Archive's."
          );
          return;
        }

        if (cleaned === "series" || cleaned === "series-notes") {
          state.activeFolderId = null;
          state.activePage = "series";
          updateDocumentMeta(
            "Series Notes — Perkembangan Serial SKETSA",
            "Dokumentasi perkembangan konsep, filosofi simbolisme, linimasa, dan tinjauan leksikal Serial SKETSA."
          );
          return;
        }

        const parts = cleaned.split("/").filter(Boolean);
        const volId = parts[0];
        const issueSlug = parts[1] || "cover";
        const matchedFolder = SKETSA_FOLDERS.find((f) => f.id === volId && f.status !== "upcoming");

        if (!matchedFolder) {
          state.activeFolderId = null;
          state.activePage = "archive";
          return;
        }

        const slides = buildSlides(matchedFolder);
        let targetIdx = 0;
        if (issueSlug === "cover") {
          targetIdx = 0;
        } else if (issueSlug === "penutup" || issueSlug === "closing") {
          targetIdx = slides.length - 1;
        } else {
          const normalized = issueSlug.padStart(2, "0");
          const foundIdx = slides.findIndex((s) => s.issueSlug === normalized);
          targetIdx = foundIdx >= 0 ? foundIdx : 0;
        }

        state.activePage = "archive";
        state.activeFolderId = matchedFolder.id;
        state.activeSlideIndex = targetIdx;
        state.meaningModalOpen = false;
        state.glossaryModalOpen = false;
        state.selectedTermModal = null;
        recordSlideVisit(matchedFolder, slides[targetIdx], targetIdx, slides.length, false);
      }

      // =======================================================================
      // 6. UI RENDERERS
      // =======================================================================
      function renderNavbar() {
        const totalIssuesCount = SKETSA_FOLDERS.reduce((acc, f) => acc + f.issues.length, 0);
        const availableCount = SKETSA_FOLDERS.filter((f) => f.status !== "upcoming").length;
        const availableLabel = String(availableCount).padStart(2, "0");
        const navItems = [
          { id: "archive", label: "ARCHIVE", tag: "01" },
          { id: "series", label: "SERIES NOTES", tag: "02" },
          { id: "about", label: "ABOUT AUTHOR", tag: "03" },
        ];

        return `
          <header class="smoky-navbar">
            <div class="navbar-inner">
              <button
                type="button"
                data-action="switch-page"
                data-page="archive"
                class="navbar-brand font-mono"
              >
                <span class="pulse-dot" style="width:8px;height:8px;border-radius:9999px;background:#d8c39e;box-shadow:0 0 12px #d8c39e;display:inline-block;flex-shrink:0;"></span>
                <span class="navbar-brand-text">REPOSITORY // NATHARA ARCHIVE</span>
              </button>

              <!-- Desktop Navigation -->
              <nav aria-label="Navigasi Utama" class="navbar-links font-mono">
                ${navItems
                  .map(
                    (item) => `
                  <button
                    type="button"
                    data-action="switch-page"
                    data-page="${item.id}"
                    class="navbar-link-btn ${state.activePage === item.id ? "is-active" : ""}"
                  >
                    ${item.label}
                  </button>
                `
                  )
                  .join("")}

                <span class="navbar-meta">
                  ${availableLabel} AVAILABLE • ${totalIssuesCount} ISSUES
                </span>
              </nav>

              <!-- Mobile Hamburger Button -->
              <button
                type="button"
                data-action="toggle-mobile-menu"
                aria-expanded="${state.mobileMenuOpen ? "true" : "false"}"
                aria-controls="mobile-nav-drawer"
                aria-label="${state.mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}"
                class="hamburger-btn"
              >
                <span class="hamburger-icon" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>

            <!-- Mobile Collapsible Navigation Drawer -->
            ${
              state.mobileMenuOpen
                ? `
              <nav id="mobile-nav-drawer" aria-label="Navigasi Mobile" class="mobile-nav-drawer font-mono">
                ${navItems
                  .map(
                    (item) => `
                  <button
                    type="button"
                    data-action="switch-page"
                    data-page="${item.id}"
                    class="mobile-nav-item ${state.activePage === item.id ? "is-active" : ""}"
                  >
                    <span>${item.label}</span>
                    <span style="font-size:10px;color:${state.activePage === item.id ? "#d8c39e" : "#8b8894"};">
                      ${state.activePage === item.id ? "AKTIF • " + item.tag : item.tag}
                    </span>
                  </button>
                `
                  )
                  .join("")}

                <div style="margin-top:0.35rem;padding-top:0.65rem;border-top:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:space-between;font-size:10px;letter-spacing:0.14em;color:#8b8894;">
                  <span>NATHARA ARCHIVE'S</span>
                  <span style="color:#d8c39e;">${availableLabel} AVAILABLE • ${totalIssuesCount} ISSUES</span>
                </div>
              </nav>
            `
                : ""
            }
          </header>
        `;
      }

      function renderArchiveHome() {
        const establishedFolders = SKETSA_FOLDERS.filter((f) => f.status !== "upcoming");
        const totalAvailableSlides = establishedFolders.reduce((acc, f) => acc + f.issues.length + 2, 0);
        const completedSlides = establishedFolders.reduce((acc, f) => {
          const slugs = ["cover", ...f.issues.map((i) => i.code.replace("#", "")), "penutup"];
          return acc + slugs.filter((s) => Boolean(state.readSlidesMap[`${f.id}:${s}`])).length;
        }, 0);
        const overallPct =
          totalAvailableSlides > 0 ? Math.min(100, Math.round((completedSlides / totalAvailableSlides) * 100)) : 0;

        return `
          <!-- Hero Section (Refined Homepage Description from PDF) -->
          <section class="main-container reveal-section is-revealed" style="padding-top:3rem;padding-bottom:2rem;">
            <div class="reveal-meta hero-eyebrow font-mono" style="font-size:11px;letter-spacing:0.24em;color:#8b8894;text-transform:uppercase;margin-bottom:0.75rem;--reveal-delay:20ms;">
              NATHARA ARCHIVE'S — LITERARY COLLECTION
            </div>

            <h1 class="reveal-heading font-serif" style="font-size:clamp(3rem, 6.5vw, 84px);font-weight:600;line-height:0.98;letter-spacing:-0.02em;margin:0 0 1.25rem 0;--reveal-delay:90ms;">
              Serial <span class="accent-sketsa">SKETSA</span>
            </h1>

            <p class="reveal-block hero-desc" style="max-width:42rem;font-size:15px;line-height:1.8;color:#b4b0be;margin:0 0 1.75rem 0;--reveal-delay:160ms;">
              Serial prosa liris yang mengangkat perasaan, kenangan, dan berbagai pengalaman manusia. Setiap tulisan menangkap makna di balik hal-hal sederhana yang sering kali meninggalkan kesan lebih dalam dari yang terlihat. Dari hal-hal tersebut, SKETSA merangkai perjalanan emosional tentang mengenali diri sendiri, memahami perasaan, menghadapi kehilangan, hingga belajar hidup berdampingan dengan berbagai hal yang telah dilewati.
            </p>

            <!-- Sleek Pill Action Row -->
            <div id="mount-home-actions" class="reveal-block" style="display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;--reveal-delay:230ms;">
              ${renderHomeActionButtons()}
            </div>

            <!-- Serial Reading Progress Bar -->
            <div id="mount-home-progress">
              ${
                completedSlides > 0
                  ? `
                <div class="hero-progress-row font-mono" style="margin-top:1.25rem;display:flex;align-items:center;gap:0.75rem;max-width:28rem;font-size:10.5px;color:#8b8894;">
                  <span style="flex-shrink:0;">PROGRES MEMBACA:</span>
                  <div style="flex:1;height:6px;border-radius:9999px;background:rgba(255,255,255,0.07);overflow:hidden;">
                    <div style="height:100%;background:#d8c39e;width:${overallPct}%;transition:width 0.5s ease;"></div>
                  </div>
                  <span style="color:#f2f0ec;flex-shrink:0;">${completedSlides}/${totalAvailableSlides} (${overallPct}%)</span>
                </div>
              `
                  : ""
              }
            </div>

            <!-- Collapsible Drawers & Search Issue Matches -->
            <div id="mount-home-drawers">
              ${renderHomeDrawersAndMatches()}
            </div>
          </section>

          <!-- 3D Physical Volumes Grid -->
          <main id="mount-home-folders" class="main-container folder-stage" style="padding-top:1rem;padding-bottom:6rem;flex:1;">
            ${renderHomeFoldersGrid()}
          </main>
        `;
      }

      function renderHomeActionButtons() {
        const hasHistoryOrBookmarks = state.readingHistory.length > 0 || state.bookmarks.length > 0;
        return `
          <button
            type="button"
            data-action="start-here"
            class="btn-primary-gold hero-action-btn font-mono"
          >
            <span>MULAI BACA: JIWA #01 →</span>
          </button>

          <button
            type="button"
            data-action="toggle-manifesto"
            aria-expanded="${state.manifestoOpen ? "true" : "false"}"
            class="smoky-pill hero-action-btn font-mono"
            style="padding:0.65rem 1.15rem;border-radius:9999px;font-size:11.5px;letter-spacing:0.12em;color:${
              state.manifestoOpen ? "#d8c39e" : "#f2f0ec"
            };border-color:${state.manifestoOpen ? "rgba(216,195,158,0.4)" : "rgba(255,255,255,0.12)"};"
          >
            ${state.manifestoOpen ? "TUTUP CATATAN SERIAL ▴" : "CATATAN SERIAL ▾"}
          </button>

          <button
            type="button"
            data-action="toggle-history"
            aria-expanded="${state.historyDrawerOpen ? "true" : "false"}"
            class="smoky-pill hero-action-btn font-mono"
            style="padding:0.65rem 1.15rem;border-radius:9999px;font-size:11.5px;letter-spacing:0.12em;color:${
              state.historyDrawerOpen || hasHistoryOrBookmarks ? "#d8c39e" : "#b4b0be"
            };border-color:${state.historyDrawerOpen ? "rgba(216,195,158,0.4)" : "rgba(255,255,255,0.12)"};"
          >
            RIWAYAT &amp; BOOKMARK (${state.readingHistory.length + state.bookmarks.length})
          </button>

          <div style="position:relative;flex:1 1 220px;min-width:200px;max-width:300px;">
            <input
              id="archive-search-input"
              type="search"
              value="${escapeHtml(state.searchQuery)}"
              placeholder="Cari judul, kata, atau volume..."
              aria-label="Cari karya dalam arsip"
              class="hero-search-input font-mono"
              style="width:100%;padding:0.62rem 2.1rem 0.62rem 0.95rem;border-radius:9999px;border:1px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.04);color:#f2f0ec;font-size:11.5px;letter-spacing:0.04em;"
            />
            ${
              state.searchQuery
                ? `<button type="button" data-action="clear-search" aria-label="Hapus pencarian" style="position:absolute;right:0.65rem;top:50%;transform:translateY(-50%);background:transparent;border:0;color:#8b8894;font-size:12px;padding:0.2rem;">✕</button>`
                : ""
            }
          </div>
        `;
      }

      function renderHomeDrawersAndMatches() {
        const q = state.searchQuery.trim().toLowerCase();
        const issueMatches = [];

        if (q.length >= 2) {
          SKETSA_FOLDERS.forEach((folder) => {
            if (folder.status === "upcoming") return;
            folder.issues.forEach((iss, idx) => {
              const hay = `${folder.series} ${iss.code} ${iss.title} ${iss.body} ${iss.highlight}`.toLowerCase();
              if (hay.includes(q)) {
                issueMatches.push({
                  folder,
                  issue: iss,
                  slideIndex: idx + 1,
                });
              }
            });
          });
        }

        const continueStripHtml =
          state.lastPosition && !q
            ? `
            <div class="smoky-glass-panel continue-strip" style="margin-top:1.25rem;padding:0.8rem 1.1rem;border-radius:0.9rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;max-width:44rem;">
              <div class="continue-strip-meta font-mono" style="font-size:11px;color:#b4b0be;display:flex;flex-wrap:wrap;align-items:center;gap:0.45rem;">
                <span style="color:#d8c39e;">TERAKHIR DIBACA:</span>
                <strong style="color:#f2f0ec;">${escapeHtml(state.lastPosition.volumeSeries)}</strong>
                <span>•</span>
                <span>${escapeHtml(state.lastPosition.issueLabel)}</span>
                <span style="color:#8b8894;">(${formatRelativeTime(state.lastPosition.timestamp)})</span>
              </div>
              <button
                type="button"
                data-action="open-folder"
                data-folder-id="${escapeHtml(state.lastPosition.volumeId)}"
                data-slide-index="${state.lastPosition.slideIndex}"
                class="btn-subtle font-mono"
                style="font-size:10.5px;letter-spacing:0.12em;padding:0.42rem 0.85rem;border-radius:9999px;border:1px solid rgba(216,195,158,0.35);background:rgba(216,195,158,0.12);color:#d8c39e;"
              >
                LANJUTKAN MEMBACA →
              </button>
            </div>
          `
            : "";

        const manifestoHtml = state.manifestoOpen
          ? `
            <div class="smoky-glass-panel page-view-enter" style="margin-top:1.25rem;padding:1.35rem 1.5rem;border-radius:1rem;max-width:48rem;">
              <div class="font-mono" style="font-size:10px;letter-spacing:0.18em;color:#d8c39e;margin-bottom:0.45rem;">
                ARSIP KONSEPTUAL // TUJUH VOLUME SKETSA
              </div>
              <p style="margin:0 0 0.85rem 0;font-size:14px;line-height:1.75;color:#d5d1dc;">
                <strong>Serial SKETSA</strong> disusun dalam tujuh fase perjalanan emosional: dimulai dari pencarian identitas (<em>JIWA</em>), keterikatan dan kehilangan (<em>RASA</em>), kabut persepsi dan ilusi (<em>SEMU</em>), ketenangan berdampingan (<em>HENING</em>), hingga perjumpaan arah baru (<em>TEMU</em>), sebelum berlanjut ke dua babak mendatang (<em>JATUH</em> dan <em>PULANG</em>).
              </p>
              <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;padding-top:0.75rem;border-top:1px solid rgba(255,255,255,0.08);">
                <span class="font-mono" style="font-size:10.5px;color:#8b8894;">
                  Klik istilah bergaris titik di dalam naskah untuk melihat arti kata Sanskerta &amp; Kawi.
                </span>
                <button
                  type="button"
                  data-action="switch-page"
                  data-page="series"
                  class="font-mono"
                  style="background:transparent;border:0;padding:0;font-size:11px;letter-spacing:0.12em;color:#d8c39e;"
                >
                  BACA SERIES NOTES LENGKAP →
                </button>
              </div>
            </div>
          `
          : "";

        const historyDrawerHtml = state.historyDrawerOpen
          ? `
            <div class="smoky-glass-panel page-view-enter" style="margin-top:1.25rem;padding:1.35rem 1.5rem;border-radius:1rem;display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:1.5rem;">
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.75rem;padding-bottom:0.5rem;border-bottom:1px solid rgba(255,255,255,0.08);">
                  <span class="font-mono" style="font-size:11px;letter-spacing:0.14em;color:#d8c39e;">
                    RIWAYAT BACA (${state.readingHistory.length})
                  </span>
                  ${
                    state.readingHistory.length > 0
                      ? `<button type="button" data-action="clear-history" class="font-mono" style="background:transparent;border:0;padding:0;font-size:10px;letter-spacing:0.1em;color:#8b8894;text-decoration:underline;">HAPUS RIWAYAT</button>`
                      : ""
                  }
                </div>
                ${
                  state.readingHistory.length === 0
                    ? `<p style="margin:0;font-size:12.5px;color:#8b8894;">Belum ada riwayat bacaan yang tercatat.</p>`
                    : `<div style="display:flex;flex-direction:column;gap:0.45rem;max-height:210px;overflow-y:auto;">
                        ${state.readingHistory
                          .map(
                            (item) => `
                          <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding:0.5rem 0.7rem;border-radius:0.65rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);">
                            <button
                              type="button"
                              data-action="open-folder"
                              data-folder-id="${escapeHtml(item.volumeId)}"
                              data-slide-index="${item.slideIndex}"
                              style="background:transparent;border:0;padding:0;text-align:left;color:#f2f0ec;font-size:12px;flex:1;min-width:0;"
                            >
                              <div class="font-mono" style="font-size:10px;color:#d8c39e;">${escapeHtml(item.volumeSeries)}</div>
                              <div class="line-clamp-1">${escapeHtml(item.issueLabel)}</div>
                            </button>
                            <button
                              type="button"
                              data-action="remove-history"
                              data-volume-id="${escapeHtml(item.volumeId)}"
                              data-issue-id="${escapeHtml(item.issueId)}"
                              aria-label="Hapus item riwayat"
                              style="background:transparent;border:0;color:#8b8894;font-size:11px;padding:0.25rem;"
                            >
                              ✕
                            </button>
                          </div>
                        `
                          )
                          .join("")}
                      </div>`
                }
              </div>

              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.75rem;padding-bottom:0.5rem;border-bottom:1px solid rgba(255,255,255,0.08);">
                  <span class="font-mono" style="font-size:11px;letter-spacing:0.14em;color:#d8c39e;">
                    BOOKMARK (${state.bookmarks.length})
                  </span>
                  ${
                    state.bookmarks.length > 0
                      ? `<button type="button" data-action="clear-bookmarks" class="font-mono" style="background:transparent;border:0;padding:0;font-size:10px;letter-spacing:0.1em;color:#8b8894;text-decoration:underline;">KOSONGKAN DAFTAR</button>`
                      : ""
                  }
                </div>
                ${
                  state.bookmarks.length === 0
                    ? `<p style="margin:0;font-size:12.5px;color:#8b8894;">Belum ada karya yang disimpan. Tekan tombol ☆ SIMPAN saat membaca.</p>`
                    : `<div style="display:flex;flex-direction:column;gap:0.45rem;max-height:210px;overflow-y:auto;">
                        ${state.bookmarks
                          .map(
                            (bm) => `
                          <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding:0.5rem 0.7rem;border-radius:0.65rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);">
                            <button
                              type="button"
                              data-action="open-folder"
                              data-folder-id="${escapeHtml(bm.volumeId)}"
                              data-slide-index="${bm.slideIndex}"
                              style="background:transparent;border:0;padding:0;text-align:left;color:#f2f0ec;font-size:12px;flex:1;min-width:0;"
                            >
                              <div class="font-mono" style="font-size:10px;color:#d8c39e;">${escapeHtml(bm.volumeSeries)}</div>
                              <div class="line-clamp-1">${escapeHtml(bm.label)}</div>
                            </button>
                            <button
                              type="button"
                              data-action="remove-bookmark"
                              data-key="${escapeHtml(bm.key)}"
                              aria-label="Hapus bookmark"
                              style="background:transparent;border:0;color:#8b8894;font-size:11px;padding:0.25rem;"
                            >
                              ✕
                            </button>
                          </div>
                        `
                          )
                          .join("")}
                      </div>`
                }
              </div>
            </div>
          `
          : "";

        const searchMatchesHtml =
          q.length >= 2
            ? `
            <div class="smoky-glass-panel" style="margin-top:1.25rem;padding:1.15rem 1.35rem;border-radius:1rem;">
              <div class="font-mono" style="font-size:10.5px;letter-spacing:0.14em;color:#d8c39e;margin-bottom:0.75rem;">
                HASIL PENCARIAN NASKAH (${issueMatches.length})
              </div>
              ${
                issueMatches.length === 0
                  ? `<p style="margin:0;font-size:13px;color:#8b8894;">Tidak ditemukan fragmen yang cocok dengan kata kunci “${escapeHtml(state.searchQuery)}”.</p>`
                  : `<div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(240px, 1fr));gap:0.65rem;">
                      ${issueMatches
                        .slice(0, 9)
                        .map(
                          (m) => `
                        <button
                          type="button"
                          data-action="open-folder"
                          data-folder-id="${escapeHtml(m.folder.id)}"
                          data-slide-index="${m.slideIndex}"
                          class="btn-subtle"
                          style="text-align:left;padding:0.75rem 0.9rem;border-radius:0.75rem;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.03);color:#f2f0ec;"
                        >
                          <div class="font-mono" style="font-size:10px;color:#d8c39e;margin-bottom:0.2rem;">
                            ${escapeHtml(m.folder.series)} ${escapeHtml(m.issue.code)}
                          </div>
                          <div class="font-serif" style="font-size:17px;font-weight:600;margin-bottom:0.2rem;">
                            ${escapeHtml(m.issue.title)}
                          </div>
                          <div class="line-clamp-2" style="font-size:11.5px;color:#8b8894;line-height:1.5;">
                            ${escapeHtml(m.issue.body)}
                          </div>
                        </button>
                      `
                        )
                        .join("")}
                    </div>`
              }
            </div>
          `
            : "";

        return `${continueStripHtml}${manifestoHtml}${historyDrawerHtml}${searchMatchesHtml}`;
      }

      function renderHomeFoldersGrid() {
        const q = state.searchQuery.trim().toLowerCase();
        const filteredFolders = !q
          ? SKETSA_FOLDERS
          : SKETSA_FOLDERS.filter((folder) => {
              const folderHay = `${folder.num} ${folder.code} ${folder.series} ${folder.themeTag} ${folder.question}`.toLowerCase();
              if (folderHay.includes(q)) return true;
              return folder.issues.some((iss) =>
                `${iss.code} ${iss.title} ${iss.body} ${iss.highlight}`.toLowerCase().includes(q)
              );
            });

        if (filteredFolders.length === 0) {
          return `
            <div class="smoky-glass-panel" style="padding:2.5rem 1.5rem;border-radius:1rem;text-align:center;">
              <p class="font-serif" style="font-size:22px;margin:0 0 0.5rem 0;">Volume tidak ditemukan</p>
              <p style="font-size:13px;color:#8b8894;margin:0 0 1rem 0;">Coba kata kunci lain atau tampilkan kembali seluruh folder arsip.</p>
              <button type="button" data-action="clear-search" class="btn-primary-gold font-mono">TAMPILKAN SEMUA VOLUME</button>
            </div>
          `;
        }

        return `
          <div class="folders-grid">
            ${filteredFolders
              .map((folder) => {
                const isUpcoming = folder.status === "upcoming";
                const folderInk = folder.colors.folderInk || "#ffffff";
                const borderStyle = folder.colors.isLightFolder
                  ? "rgba(102, 0, 0, 0.22)"
                  : "rgba(255, 255, 255, 0.16)";
                const previewIssue1 = folder.issues[0];
                const previewIssue2 = folder.issues[1] || folder.issues[0];

                const totalVolSlides = isUpcoming ? 0 : folder.issues.length + 2;
                const readVolSlides = isUpcoming
                  ? 0
                  : ["cover", ...folder.issues.map((i) => i.code.replace("#", "")), "penutup"].filter((slug) =>
                      Boolean(state.readSlidesMap[`${folder.id}:${slug}`])
                    ).length;

                return `
                  <article
                    class="folder-card ${isUpcoming ? "upcoming-folder" : ""}"
                    ${
                      isUpcoming
                        ? `aria-disabled="true"`
                        : `role="button" tabindex="0" data-action="open-folder" data-folder-id="${escapeHtml(
                            folder.id
                          )}" data-slide-index="0" aria-label="Buka volume ${escapeHtml(folder.series)}"`
                    }
                    style="--folder-back:${folder.colors.folderBack};--folder-front:${
                  folder.colors.folderFront
                };--folder-border:${borderStyle};--paper-bg:${folder.colors.paper};--paper-ink:${
                  folder.id === "jiwa" ? "#4a0000" : "#1b1a1e"
                };opacity:${isUpcoming ? "0.78" : "1"};"
                  >
                    <div class="folder-back">
                      <div class="folder-tab" style="color:${folderInk};">
                        ${escapeHtml(folder.num)} // ${escapeHtml(folder.code)}
                      </div>
                    </div>

                    ${
                      !isUpcoming && previewIssue1
                        ? `
                      <div class="paper-stack" aria-hidden="true">
                        <div class="paper-sheet sheet-1">
                          <div class="font-mono" style="font-size:8.5px;letter-spacing:0.1em;opacity:0.65;">
                            ${escapeHtml(folder.series)} ${escapeHtml(previewIssue2.code)}
                          </div>
                          <div class="font-serif" style="font-size:13px;font-weight:700;margin-top:2px;">
                            ${escapeHtml(previewIssue2.title)}
                          </div>
                        </div>
                        <div class="paper-sheet sheet-2">
                          <div class="font-mono" style="font-size:8.5px;letter-spacing:0.1em;opacity:0.65;">
                            ${escapeHtml(folder.series)} ${escapeHtml(previewIssue1.code)}
                          </div>
                          <div class="font-serif" style="font-size:14px;font-weight:700;margin-top:2px;">
                            ${escapeHtml(previewIssue1.title)}
                          </div>
                          <p class="line-clamp-2" style="font-size:10.5px;line-height:1.45;margin:4px 0 0 0;opacity:0.8;">
                            ${escapeHtml(previewIssue1.body)}
                          </p>
                        </div>
                      </div>
                    `
                        : ""
                    }

                    <div class="folder-front" style="color:${folderInk};">
                      <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">
                        <span class="folder-badge-text font-mono" style="font-size:10px;letter-spacing:0.14em;opacity:0.82;">
                          ${escapeHtml(folder.themeTag)}
                        </span>
                        <span class="folder-badge-text font-mono" style="font-size:10px;letter-spacing:0.1em;padding:0.2rem 0.55rem;border-radius:9999px;background:${
                          folder.colors.isLightFolder ? "rgba(102,0,0,0.08)" : "rgba(255,255,255,0.12)"
                        };">
                          ${
                            isUpcoming
                              ? escapeHtml(folder.statusLabel || "SEGERA HADIR")
                              : `${folder.issues.length} ISSUES`
                          }
                        </span>
                      </div>

                      <div style="margin:auto 0;">
                        <h2 class="font-serif" style="font-size:clamp(1.65rem, 2.5vw, 2.05rem);font-weight:700;letter-spacing:0.02em;margin:0 0 0.45rem 0;line-height:1.08;">
                          ${escapeHtml(folder.series)}
                        </h2>
                        <p class="folder-question-text font-serif" style="font-size:14.5px;font-style:italic;opacity:0.88;margin:0;line-height:1.45;">
                          ${escapeHtml(folder.question)}
                        </p>
                      </div>

                      <div
                        class="folder-footer-text font-mono"
                        style="padding-top:0.75rem;border-top:1px solid ${
                          folder.colors.isLightFolder ? "rgba(102,0,0,0.18)" : "rgba(255,255,255,0.18)"
                        };display:flex;align-items:center;justify-content:space-between;font-size:10px;letter-spacing:0.14em;"
                      >
                        <span>
                          ${
                            isUpcoming
                              ? "DALAM PENYUSUNAN"
                              : readVolSlides > 0
                              ? `DIBACA ${readVolSlides}/${totalVolSlides}`
                              : "ARSIP TERSEDIA"
                          }
                        </span>
                        <strong>${isUpcoming ? "SEGERA HADIR" : "BUKA VOLUME →"}</strong>
                      </div>
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>
        `;
      }

      function renderSeriesNotesPage() {
        return `
          <main class="main-container page-view-enter" style="padding-top:3rem;padding-bottom:6rem;flex:1;">
            <div class="subpage-header">
              <div class="subpage-header-title-wrap">
                <div class="subpage-eyebrow font-mono" style="font-size:11px;letter-spacing:0.22em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.5rem;">
                  SERIES NOTES // DOKUMENTASI ARSIP
                </div>
                <h1 class="font-serif" style="font-size:clamp(2.3rem, 5vw, 54px);font-weight:600;line-height:1.05;margin:0;">
                  Perkembangan Serial <span class="accent-sketsa">SKETSA</span>
                </h1>
              </div>
              <div class="subpage-header-actions">
                <button
                  type="button"
                  data-action="switch-page"
                  data-page="archive"
                  class="smoky-pill font-mono"
                  style="padding:0.6rem 1.1rem;border-radius:9999px;font-size:11px;letter-spacing:0.12em;color:#f2f0ec;"
                >
                  ← KEMBALI KE ARSIP
                </button>
              </div>
            </div>

            <div style="display:flex;flex-direction:column;gap:2rem;">
              <!-- Filosofi & Simbolisme -->
              <section class="smoky-glass-panel subpage-card" style="border-radius:1.25rem;">
                <div class="subpage-eyebrow font-mono" style="font-size:10.5px;letter-spacing:0.18em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.5rem;">
                  01 // FILOSOFI &amp; SIMBOLISME
                </div>
                <h2 class="font-serif" style="font-size:28px;font-weight:600;margin:0 0 1rem 0;">
                  Mengapa Bernama “SKETSA”?
                </h2>
                <div class="subpage-body-text" style="display:flex;flex-direction:column;gap:0.9rem;color:#d5d1dc;">
                  <p style="margin:0;">
                    Kata <strong>SKETSA</strong> dipilih sebagai metafora utama karena sketsa tidak pernah menuntut bentuk yang selesai sejak goresan pertama. Ia jujur memperlihatkan garis awal, keraguan tangan, bayangan yang belum utuh, serta ruang kosong yang sengaja dibiarkan bernapas.
                  </p>
                  <p style="margin:0;">
                    Setiap volume dalam serial ini merepresentasikan satu lapisan kesadaran manusia—bergerak dari upaya mengenali diri sendiri (<em>JIWA</em>), membuka hati terhadap keterikatan dan kehilangan (<em>RASA</em>), berhadapan dengan ilusi pikiran (<em>SEMU</em>), belajar berdamai dengan hal-hal yang tidak selalu punya jawaban (<em>HENING</em>), hingga keberanian melangkah menyambut perjumpaan baru (<em>TEMU</em>).
                  </p>
                </div>
              </section>

              <!-- Project Timeline -->
              <section class="smoky-glass-panel subpage-card reveal-section is-revealed" style="border-radius:1.25rem;">
                <div class="subpage-eyebrow font-mono" style="font-size:10.5px;letter-spacing:0.18em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.5rem;">
                  02 // LINIMASA PENERBITAN
                </div>
                <h2 class="font-serif" style="font-size:28px;font-weight:600;margin:0 0 1.5rem 0;">
                  Project Timeline (Tujuh Volume)
                </h2>

                <div style="position:relative;padding-left:1.5rem;display:flex;flex-direction:column;gap:1.35rem;">
                  <div class="timeline-rail" style="position:absolute;left:5px;top:6px;bottom:6px;width:2px;background:linear-gradient(180deg, #d8c39e 0%, rgba(216,195,158,0.2) 100%);"></div>

                  ${PROJECT_TIMELINE_MILESTONES.map(
                    (m) => {
                    const tint = tintAccent(((SKETSA_FOLDERS.find((f) => f.id === m.volumeId) || {}).colors || {}).accent);
                    return `
                    <div style="position:relative;padding:1rem 1.15rem;border-radius:0.9rem;background:linear-gradient(90deg, ${m.established ? tint + "26" : "rgba(255,255,255,0.05)"} 0%, rgba(255,255,255,0.05) 55%);border:1px solid rgba(216,195,158,0.18);border-left:3px solid ${m.established ? tint : "rgba(255,255,255,0.13)"};">
                      <span style="position:absolute;left:-1.5rem;top:1.3rem;width:12px;height:12px;border-radius:9999px;background:${
                        m.established ? tint : "#2c3a4d"
                      };border:2px solid #0b0b0d;box-shadow:0 0 10px rgba(216,195,158,0.35);"></span>

                      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.45rem;">
                        <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:0.65rem;">
                          <h3 class="font-serif" style="font-size:22px;font-weight:600;margin:0;color:#ffffff;">
                            ${escapeHtml(m.volume)}
                          </h3>
                          <span class="subpage-meta-text font-mono" style="font-size:11px;color:#d8c39e;">
                            ${escapeHtml(m.date)}
                          </span>
                        </div>

                        ${
                          m.established
                            ? `<button type="button" data-action="open-folder" data-folder-id="${escapeHtml(
                                m.volumeId
                              )}" data-slide-index="0" class="btn-subtle subpage-meta-text font-mono" style="font-size:10.5px;letter-spacing:0.12em;padding:0.35rem 0.8rem;border-radius:9999px;border:1px solid rgba(216,195,158,0.35);background:rgba(216,195,158,0.1);color:#d8c39e;">BUKA VOLUME →</button>`
                            : `<span class="subpage-meta-text font-mono" style="font-size:10.5px;letter-spacing:0.12em;padding:0.3rem 0.75rem;border-radius:9999px;background:rgba(255,255,255,0.05);color:#8b8894;">${escapeHtml(
                                m.status
                              )}</span>`
                        }
                      </div>

                      <p class="subpage-small-text" style="margin:0;font-size:13.5px;line-height:1.7;color:#b4b0be;">
                        ${escapeHtml(m.description)}
                      </p>
                    </div>
                  `;
                  }
                  ).join("")}
                </div>
              </section>

              <!-- Conceptual Evolution -->
              <section class="smoky-glass-panel subpage-card" style="border-radius:1.25rem;">
                <div class="subpage-eyebrow font-mono" style="font-size:10.5px;letter-spacing:0.18em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.5rem;">
                  03 // EVOLUSI KONSEP &amp; BENTUK
                </div>
                <h2 class="font-serif" style="font-size:28px;font-weight:600;margin:0 0 1.25rem 0;">
                  Conceptual Evolution
                </h2>

                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem;">
                  ${CONCEPTUAL_PHASES.map(
                    (ph) => `
                    <div style="padding:1.15rem 1.25rem;border-radius:0.9rem;background:rgba(216,195,158,0.05);border:1px solid rgba(216,195,158,0.16);display:flex;flex-direction:column;gap:0.65rem;">
                      <h3 class="font-serif" style="font-size:20px;font-weight:600;margin:0;color:#d8c39e;">
                        ${escapeHtml(ph.phase)}
                      </h3>
                      ${ph.paragraphs
                        .map(
                          (p) =>
                            `<p class="subpage-small-text" style="margin:0;font-size:13.5px;line-height:1.7;color:#d5d1dc;">${escapeHtml(
                              p
                            )}</p>`
                        )
                        .join("")}
                      ${
                        ph.bullets.length > 0
                          ? `<ul class="subpage-small-text" style="margin:0.25rem 0 0 0;padding-left:1.15rem;display:flex;flex-direction:column;gap:0.4rem;font-size:13px;line-height:1.65;color:#b4b0be;">
                              ${ph.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
                            </ul>`
                          : ""
                      }
                    </div>
                  `
                  ).join("")}
                </div>
              </section>

              <!-- Editorial Review & Lexical Notes -->
              <section class="smoky-glass-panel subpage-card" style="border-radius:1.25rem;">
                <div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:1rem;margin-bottom:1.25rem;">
                  <div>
                    <div class="subpage-eyebrow font-mono" style="font-size:10.5px;letter-spacing:0.18em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.5rem;">
                      04 // TINJAUAN REDAKSI &amp; DIKSI
                    </div>
                    <h2 class="font-serif" style="font-size:28px;font-weight:600;margin:0;">
                      Editorial Review &amp; Lexical Notes
                    </h2>
                  </div>

                  <button
                    type="button"
                    data-action="open-glossary-popup"
                    class="btn-primary-gold font-mono"
                  >
                    BUKA GLOSARIUM
                  </button>
                </div>

                <div style="margin-bottom:1.5rem;">
                  <div class="subpage-meta-text font-mono" style="font-size:10.5px;letter-spacing:0.14em;color:#8b8894;margin-bottom:0.75rem;">
                    JEJAK KATA BERULANG DALAM NASKAH
                  </div>
                  <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:0.75rem;">
                    ${EDITORIAL_REVIEW_DATA.frequentWords
                      .map(
                        (fw) => `
                      <div style="padding:0.85rem 1rem;border-radius:0.8rem;background:rgba(216,195,158,0.06);border:1px solid rgba(216,195,158,0.18);">
                        <div style="display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;margin-bottom:0.3rem;">
                          <span class="font-serif" style="font-size:19px;font-style:italic;font-weight:600;color:#ffffff;">“${escapeHtml(
                            fw.word
                          )}”</span>
                          <span class="font-mono" style="font-size:11px;color:#d8c39e;">${escapeHtml(fw.count)}</span>
                        </div>
                        <p class="subpage-small-text" style="margin:0;font-size:12.5px;line-height:1.55;color:#b4b0be;">
                          ${escapeHtml(fw.note)}
                        </p>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>

                <div style="display:flex;flex-direction:column;gap:0.9rem;">
                  ${EDITORIAL_REVIEW_DATA.patterns
                    .map(
                      (pat) => `
                    <div style="padding:1.1rem 1.25rem;border-radius:0.9rem;background:rgba(216,195,158,0.05);border:1px solid rgba(216,195,158,0.16);">
                      <h3 class="font-serif" style="font-size:20px;font-weight:600;margin:0 0 0.5rem 0;color:#f2f0ec;">
                        ${escapeHtml(pat.title)}
                      </h3>
                      <p class="subpage-small-text" style="margin:0 0 0.5rem 0;font-size:13.5px;line-height:1.68;color:#d5d1dc;">
                        <strong style="color:#d8c39e;">Observasi:</strong> ${escapeHtml(pat.observation)}
                      </p>
                      <p class="subpage-small-text" style="margin:0;font-size:13.5px;line-height:1.68;color:#b4b0be;">
                        <strong style="color:#d8c39e;">Catatan Arah:</strong> ${escapeHtml(pat.suggestion)}
                      </p>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </section>
            </div>
          </main>
        `;
      }

      function renderAboutAuthorPage() {
        return `
          <main class="main-container page-view-enter" style="padding-top:3rem;padding-bottom:6rem;flex:1;">
            <div class="subpage-header">
              <div class="subpage-header-title-wrap">
                <div class="subpage-eyebrow font-mono" style="font-size:11px;letter-spacing:0.22em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.5rem;">
                  ABOUT AUTHOR // PROFIL PENULIS
                </div>
                <h1 class="font-serif" style="font-size:clamp(2.3rem, 5vw, 54px);font-weight:600;line-height:1.05;margin:0;">
                  Nathara <span style="font-style:italic;font-weight:400;color:#c9b99f;">Archive's</span>
                </h1>
              </div>
              <div class="subpage-header-actions">
                <button
                  type="button"
                  data-action="switch-page"
                  data-page="archive"
                  class="smoky-pill font-mono"
                  style="padding:0.6rem 1.1rem;border-radius:9999px;font-size:11px;letter-spacing:0.12em;color:#f2f0ec;"
                >
                  ← KEMBALI KE ARSIP
                </button>
              </div>
            </div>

            <div class="about-author-grid">
              <!-- Left Column: Identity Card -->
              <aside class="smoky-glass-panel subpage-card" style="border-radius:1.25rem;display:flex;flex-direction:column;gap:1.25rem;">
                <div style="width:76px;height:76px;border-radius:18px;background:#ffffff;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 28px rgba(0,0,0,0.45);overflow:hidden;">
                  <img src="assets/portrait.png" width="76" height="76" alt="Potret Nathara" style="width:100%;height:100%;object-fit:cover;display:block;" />
                </div>

                <div>
                  <div class="subpage-meta-text font-mono" style="font-size:10px;letter-spacing:0.18em;color:#d8c39e;margin-bottom:0.25rem;">
                    PENULIS &amp; PENGARSIP
                  </div>
                  <h2 class="font-serif" style="font-size:28px;font-weight:600;margin:0 0 0.25rem 0;">
                    Nathara
                  </h2>
                  <p class="subpage-small-text" style="margin:0;font-size:13px;color:#8b8894;line-height:1.6;">
                    Prosa liris, fragmen reflektif, dan arsip visual sastra digital.
                  </p>
                </div>

                <div style="padding-top:1rem;border-top:1px solid rgba(255,255,255,0.08);display:flex;flex-direction:column;gap:0.6rem;">
                  <a
                    href="https://www.instagram.com/natharaarchive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary-gold font-mono"
                    style="justify-content:space-between;"
                  >
                    <span>INSTAGRAM @NATHARAARCHIVE</span>
                    <span>↗</span>
                  </a>

                  <button
                    type="button"
                    data-action="switch-page"
                    data-page="series"
                    class="smoky-pill font-mono"
                    style="padding:0.6rem 1rem;border-radius:9999px;font-size:11px;letter-spacing:0.12em;color:#f2f0ec;display:flex;align-items:center;justify-content:space-between;"
                  >
                    <span>DOKUMENTASI SERIES NOTES</span>
                    <span>→</span>
                  </button>
                </div>
              </aside>

              <!-- Right Column: Author Notes & Archive Info -->
              <div style="display:flex;flex-direction:column;gap:1.5rem;">
                <section class="smoky-glass-panel subpage-card" style="border-radius:1.25rem;">
                  <div class="subpage-eyebrow font-mono" style="font-size:10.5px;letter-spacing:0.18em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.5rem;">
                    CATATAN PENULIS
                  </div>
                  <h2 class="font-serif" style="font-size:28px;font-weight:600;margin:0 0 1rem 0;">
                    Menulis sebagai Ruang Mengingat &amp; Berdamai
                  </h2>
                  <div class="subpage-body-text" style="display:flex;flex-direction:column;gap:1rem;color:#d5d1dc;">
                    <p style="margin:0;">
                      <strong>Nathara Archive's</strong> lahir dari kebiasaan menyimpan potongan pikiran yang sering kali terlalu sunyi untuk diucapkan secara langsung. Bagi saya, menulis bukan upaya mencari jawaban paling benar atas hidup, melainkan cara jujur untuk mencatat apa yang pernah singgah, melukai, menenangkan, lalu perlahan membentuk cara pandang hari ini.
                    </p>
                    <p style="margin:0;">
                      Melalui <strong>Serial SKETSA</strong>, setiap fragmen disusun layaknya lembar catatan pribadi yang berdiri di batas antara puisi dan prosa pendek. Sebagian berangkat dari pengalaman emosional yang dekat, sebagian lain tumbuh dari pengamatan terhadap hal-hal kecil di sekitar—cahaya pagi di sudut meja, pembatas buku yang terlupa, hingga percakapan yang tidak pernah benar-benar terjadi.
                    </p>
                    <p style="margin:0;">
                      Repositori digital ini dibangun agar seluruh volume dapat dibaca secara utuh, terstruktur, dan tenang—memberi ruang bagi siapa pun yang datang untuk berhenti sejenak, membaca perlahan, dan barangkali menemukan pantulan dirinya sendiri di antara baris-baris kata.
                    </p>
                  </div>
                </section>

                <section class="smoky-glass-panel subpage-card" style="border-radius:1.25rem;">
                  <div class="subpage-eyebrow font-mono" style="font-size:10.5px;letter-spacing:0.18em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.5rem;">
                    ARSIP &amp; PUBLIKASI
                  </div>
                  <p class="subpage-small-text" style="margin:0 0 1rem 0;font-size:14px;line-height:1.75;color:#b4b0be;">
                    Seluruh manuskrip dalam repositori ini pertama kali dipublikasikan secara bertahap melalui kanal visual <strong>@natharaarchive</strong> sebelum dikurasi dan dilengkapi catatan pemaknaan serta glosarium istilah di laman arsip ini.
                  </p>

                  <div style="padding:1rem 1.15rem;border-radius:0.9rem;background:rgba(216,195,158,0.08);border-left:3px solid #d8c39e;">
                    <div class="subpage-meta-text font-mono" style="font-size:10px;letter-spacing:0.15em;color:#d8c39e;margin-bottom:0.35rem;">
                      CATATAN AKHIR
                    </div>
                    <blockquote class="font-serif" style="margin:0;font-size:20px;font-style:italic;line-height:1.5;color:#f2f0ec;">
                      “Selama masih ada yang menemukannya kembali, selama bisikan di antara garis-garis ini tetap terdengar, tak ada cerita yang benar-benar usai.”
                    </blockquote>
                  </div>
                </section>
              </div>
            </div>
          </main>
        `;
      }

      function renderReaderTopbarActions(folder, current, isBookmarked) {
        return `
          <button
            type="button"
            data-action="open-glossary-popup"
            class="btn-subtle reader-topbar-btn font-mono"
            style="border-radius:9999px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.04);color:#f2f0ec;"
          >
            GLOSARIUM
          </button>

          <button
            type="button"
            data-action="toggle-controls"
            aria-expanded="${state.controlsOpen ? "true" : "false"}"
            class="btn-subtle reader-topbar-btn font-mono"
            style="border-radius:9999px;border:1px solid ${
              state.controlsOpen ? "rgba(216,195,158,0.45)" : "rgba(255,255,255,0.15)"
            };background:${
              state.controlsOpen ? "rgba(216,195,158,0.2)" : "rgba(255,255,255,0.04)"
            };color:${state.controlsOpen ? "#d8c39e" : "#f2f0ec"};"
          >
            Aa TAMPILAN
          </button>

          <button
            type="button"
            data-action="toggle-bookmark"
            class="btn-subtle reader-topbar-btn font-mono"
            style="border-radius:9999px;border:1px solid ${
              isBookmarked ? "rgba(216,195,158,0.45)" : "rgba(255,255,255,0.15)"
            };background:${
              isBookmarked ? "rgba(216,195,158,0.2)" : "rgba(255,255,255,0.04)"
            };color:${isBookmarked ? "#d8c39e" : "#8b8894"};"
          >
            ${isBookmarked ? "★ TERSIMPAN" : "☆ SIMPAN"}
          </button>

          <button
            type="button"
            data-action="copy-url"
            title="Salin tautan langsung karya"
            class="btn-subtle reader-topbar-btn font-mono"
            style="border-radius:9999px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.04);color:#f2f0ec;"
          >
            ${state.copiedUrl ? "TERSALIN ✓" : `#${escapeHtml(folder.id)}/${escapeHtml(current.issueSlug)}`}
          </button>

          <button
            type="button"
            data-action="copy-text"
            title="Salin teks karya beserta atribusi"
            class="btn-subtle reader-topbar-btn font-mono"
            style="border-radius:9999px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.04);color:${state.copiedText ? "#d8c39e" : "#f2f0ec"};"
          >
            ${state.copiedText ? "TERSALIN ✓" : "SALIN TEKS"}
          </button>

          <button
            type="button"
            id="reader-close-btn"
            data-action="close-reader"
            aria-label="Tutup pembaca"
            class="btn-subtle"
            style="width:32px;height:32px;border-radius:9999px;border:1px solid transparent;background:rgba(255,255,255,0.1);color:#ffffff;font-size:12px;display:inline-flex;align-items:center;justify-content:center;"
          >
            ✕
          </button>
        `;
      }

      function renderReaderControlsDrawer() {
        if (!state.controlsOpen) return "";
        return `
          <div style="padding:0.85rem 1.25rem;background:#111116;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;font-size:12px;flex-shrink:0;">
            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:0.75rem;">
              <div style="display:flex;align-items:center;gap:0.35rem;">
                <span class="font-mono" style="font-size:10px;color:#8b8894;text-transform:uppercase;">Huruf:</span>
                ${[
                  { id: "sm", label: "A-" },
                  { id: "normal", label: "A" },
                  { id: "lg", label: "A+" },
                ]
                  .map(
                    (opt) => `
                  <button
                    type="button"
                    data-action="set-font-scale"
                    data-value="${opt.id}"
                    class="font-mono"
                    style="font-size:11px;padding:0.25rem 0.6rem;border-radius:6px;border:1px solid ${
                      state.readerPrefs.fontScale === opt.id ? "#f2f0ec" : "rgba(255,255,255,0.1)"
                    };background:${
                      state.readerPrefs.fontScale === opt.id ? "#f2f0ec" : "rgba(255,255,255,0.04)"
                    };color:${state.readerPrefs.fontScale === opt.id ? "#0b0b0d" : "#f2f0ec"};font-weight:${
                      state.readerPrefs.fontScale === opt.id ? "600" : "400"
                    };"
                  >
                    ${opt.label}
                  </button>
                `
                  )
                  .join("")}
              </div>

              <div style="display:flex;align-items:center;gap:0.35rem;">
                <span class="font-mono" style="font-size:10px;color:#8b8894;text-transform:uppercase;">Spasi:</span>
                ${[
                  { id: "normal", label: "Normal" },
                  { id: "relaxed", label: "Lega" },
                ]
                  .map(
                    (opt) => `
                  <button
                    type="button"
                    data-action="set-line-height"
                    data-value="${opt.id}"
                    class="font-mono"
                    style="font-size:11px;padding:0.25rem 0.6rem;border-radius:6px;border:1px solid ${
                      state.readerPrefs.lineHeight === opt.id ? "#f2f0ec" : "rgba(255,255,255,0.1)"
                    };background:${
                      state.readerPrefs.lineHeight === opt.id ? "#f2f0ec" : "rgba(255,255,255,0.04)"
                    };color:${state.readerPrefs.lineHeight === opt.id ? "#0b0b0d" : "#f2f0ec"};font-weight:${
                      state.readerPrefs.lineHeight === opt.id ? "600" : "400"
                    };"
                  >
                    ${opt.label}
                  </button>
                `
                  )
                  .join("")}
              </div>

              <div style="display:flex;align-items:center;gap:0.35rem;">
                <span class="font-mono" style="font-size:10px;color:#8b8894;text-transform:uppercase;">Lebar:</span>
                ${[
                  { id: "compact", label: "Ringkas" },
                  { id: "standard", label: "Nyaman" },
                ]
                  .map(
                    (opt) => `
                  <button
                    type="button"
                    data-action="set-width-mode"
                    data-value="${opt.id}"
                    class="font-mono"
                    style="font-size:11px;padding:0.25rem 0.6rem;border-radius:6px;border:1px solid ${
                      state.readerPrefs.widthMode === opt.id ? "#f2f0ec" : "rgba(255,255,255,0.1)"
                    };background:${
                      state.readerPrefs.widthMode === opt.id ? "#f2f0ec" : "rgba(255,255,255,0.04)"
                    };color:${state.readerPrefs.widthMode === opt.id ? "#0b0b0d" : "#f2f0ec"};font-weight:${
                      state.readerPrefs.widthMode === opt.id ? "600" : "400"
                    };"
                  >
                    ${opt.label}
                  </button>
                `
                  )
                  .join("")}
              </div>
            </div>

            <div style="display:flex;align-items:center;gap:0.45rem;">
              <button
                type="button"
                data-action="toggle-dropcap"
                class="font-mono"
                style="font-size:11px;padding:0.25rem 0.6rem;border-radius:6px;border:1px solid ${
                  state.readerPrefs.dropCap ? "rgba(216,195,158,0.4)" : "rgba(255,255,255,0.1)"
                };background:${
                  state.readerPrefs.dropCap ? "rgba(216,195,158,0.2)" : "rgba(255,255,255,0.04)"
                };color:${state.readerPrefs.dropCap ? "#d8c39e" : "#8b8894"};"
              >
                Drop Cap: ${state.readerPrefs.dropCap ? "ON" : "OFF"}
              </button>

              <button
                type="button"
                data-action="toggle-show-terms"
                class="font-mono"
                style="font-size:11px;padding:0.25rem 0.6rem;border-radius:6px;border:1px solid ${
                  state.readerPrefs.showTerms ? "rgba(216,195,158,0.4)" : "rgba(255,255,255,0.1)"
                };background:${
                  state.readerPrefs.showTerms ? "rgba(216,195,158,0.2)" : "rgba(255,255,255,0.04)"
                };color:${state.readerPrefs.showTerms ? "#d8c39e" : "#8b8894"};"
              >
                Tampilkan Istilah: ${state.readerPrefs.showTerms ? "ON" : "OFF"}
              </button>
            </div>
          </div>
        `;
      }

      function renderReaderTabStrip(folder, slides, safeIdx) {
        return slides
          .map((s, idx) => {
            const isRead = Boolean(state.readSlidesMap[`${folder.id}:${s.issueSlug}`]);
            const isSelected = idx === safeIdx;
            return `
              <button
                type="button"
                role="tab"
                aria-selected="${isSelected ? "true" : "false"}"
                data-action="go-slide"
                data-slide-index="${idx}"
                class="reader-tab-btn font-mono"
                style="border-radius:0.5rem;border:1px solid ${
                  isSelected ? "#f2f0ec" : "rgba(255,255,255,0.1)"
                };background:${isSelected ? "#f2f0ec" : "rgba(255,255,255,0.03)"};color:${
                  isSelected ? "#0b0b0d" : "#8b8894"
                };font-weight:${isSelected ? "600" : "400"};white-space:nowrap;flex-shrink:0;display:inline-flex;align-items:center;gap:0.375rem;transition:background-color 0.24s ease,color 0.24s ease,border-color 0.24s ease;"
              >
                <span>${escapeHtml(s.label)}</span>
                ${
                  isRead && !isSelected
                    ? `<span style="width:6px;height:6px;border-radius:9999px;background:rgba(216,195,158,0.75);"></span>`
                    : ""
                }
              </button>
            `;
          })
          .join("");
      }

      function renderReaderManuscriptContent(folder, slides, safeIdx, animateText = true) {
        const current = slides[safeIdx];
        const openingInk = folder.colors.openingInk || "#ffffff";
        const isLightOpening = Boolean(folder.colors.isLightOpening);
        const isJiwa = folder.id === "jiwa";

        // Default is "sm" (13px desktop / 11.5px mobile) so every 1:1 square card fits cleanly
        const fontSizePx =
          state.readerPrefs.fontScale === "sm"
            ? "13px"
            : state.readerPrefs.fontScale === "lg"
            ? "15.5px"
            : "14px";
        const fontSizeMobilePx =
          state.readerPrefs.fontScale === "sm"
            ? "11.5px"
            : state.readerPrefs.fontScale === "lg"
            ? "13.5px"
            : "12.5px";
        const lineHeightVal = state.readerPrefs.lineHeight === "relaxed" ? "1.88" : "1.68";
        const lineHeightMobileVal = state.readerPrefs.lineHeight === "relaxed" ? "1.72" : "1.55";
        const maxWidthPx = state.readerPrefs.widthMode === "standard" ? "520px" : "445px";
        const hasMeaning = Boolean(current.meaning && current.meaning.makna);

        const availableFolders = SKETSA_FOLDERS.filter((f) => f.status !== "upcoming");
        const fIdx = availableFolders.findIndex((f) => f.id === folder.id);
        const nextFolder = fIdx >= 0 && fIdx < availableFolders.length - 1 ? availableFolders[fIdx + 1] : null;
        const nextSlide = safeIdx < slides.length - 1 ? slides[safeIdx + 1] : null;

        const enterClass =
          state.slideDirection === "next"
            ? "phase-entering-next"
            : state.slideDirection === "prev"
            ? "phase-entering-prev"
            : "";

        const metaAnim = animateText ? "literary-meta-in" : "";
        const titleAnim = animateText ? "literary-title-in" : "";
        const quoteAnim = animateText ? "literary-quote-in" : "";
        const bodyAnim = animateText ? "literary-body-in" : "";
        const highlightAnim = animateText ? "literary-highlight-in" : "";

        if (current.type === "opening") {
          return `
            <div
              class="manuscript-sheet manuscript-square-card manuscript-opening-card ${enterClass}"
              style="margin:auto;--card-max-w:445px;border-radius:1rem;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 24px 50px rgba(0,0,0,0.45);background:${
                folder.colors.gradient
              };color:${openingInk};"
            >
              <div class="${metaAnim} manuscript-opening-meta font-mono" style="font-size:11px;letter-spacing:0.18em;opacity:0.78;display:flex;align-items:center;justify-content:space-between;">
                <span>${escapeHtml(folder.num)} // OPENING COVER</span>
                <span>${folder.issues.length} ISSUES</span>
              </div>

              <div style="margin:auto 0;">
                <blockquote class="${quoteAnim} font-serif" style="font-size:clamp(22px, 4.2vw, 32px);font-weight:600;line-height:1.34;letter-spacing:-0.01em;margin:0;">
                  ${escapeHtml(current.quote)}
                </blockquote>
              </div>

              <div
                class="${bodyAnim} manuscript-opening-footer font-mono"
                style="padding-top:1rem;border-top:1px solid ${
                  isLightOpening ? "rgba(102, 0, 0, 0.22)" : "rgba(255, 255, 255, 0.25)"
                };display:flex;align-items:flex-end;justify-content:space-between;font-size:12px;letter-spacing:0.1em;"
              >
                <span>${escapeHtml(current.author)}</span>
                <strong>${escapeHtml(current.project)}</strong>
              </div>
            </div>
          `;
        }

        if (current.type === "content") {
          return `
            <div
              class="manuscript-sheet manuscript-square-card manuscript-issue-card ${enterClass} paper-texture"
              style="margin:auto;--card-max-w:${maxWidthPx};--body-fs:${fontSizePx};--body-fs-mobile:${fontSizeMobilePx};--body-lh:${lineHeightVal};--body-lh-mobile:${lineHeightMobileVal};border-radius:1rem;display:flex;flex-direction:column;justify-content:space-between;gap:0.85rem;box-shadow:0 24px 50px rgba(0,0,0,0.45);background-color:${
                folder.colors.paper
              };color:${isJiwa ? "#4a0000" : "#1b1a1e"};"
            >
              <div
                class="${metaAnim} manuscript-card-header font-mono"
                style="border-bottom:1px solid ${
                  isJiwa ? "rgba(102, 0, 0, 0.16)" : "rgba(27, 26, 30, 0.12)"
                };display:flex;align-items:center;justify-content:space-between;gap:0.5rem;flex-shrink:0;"
              >
                <span style="opacity:0.75;">${escapeHtml(current.headerLeft)}</span>
                <span style="opacity:0.75;text-align:right;">${escapeHtml(current.headerRight)}</span>
              </div>

              <div style="margin:auto 0;padding:0.15rem 0;">
                <h3
                  class="${titleAnim} font-serif"
                  style="font-size:25px;font-weight:700;text-transform:uppercase;letter-spacing:0.035em;margin:0 0 0.6rem 0;line-height:1.18;color:${
                    isJiwa ? "#660000" : "#141316"
                  };"
                >
                  ${renderAnnotatedText(
                    current.title,
                    current.workCode,
                    folder.colors.accent
                  )}
                </h3>
                <p
                  class="${bodyAnim} manuscript-body-text ${state.readerPrefs.dropCap ? "editorial-dropcap" : ""}"
                  style="white-space:pre-line;opacity:0.95;margin:0;"
                >${renderAnnotatedText(
                  current.body,
                  current.workCode,
                  folder.colors.accent
                )}</p>
                <div style="margin-top:0.8rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.45rem;">
                  <div
                    class="${highlightAnim} manuscript-highlight-pill font-serif"
                    style="display:inline-block;border-radius:0.375rem;font-style:italic;font-weight:700;border-left:3px solid ${
                      folder.colors.accent
                    };background-color:${folder.colors.highlightBg};color:${
                      isJiwa ? "#660000" : "#141316"
                    };"
                  >
                    ${escapeHtml(current.highlight)}
                  </div>

                  ${
                    hasMeaning
                      ? `
                    <button
                      type="button"
                      data-action="open-meaning-popup"
                      class="manuscript-meaning-btn font-mono"
                      style="border-radius:9999px;border:1px solid ${
                        isJiwa ? "rgba(102, 0, 0, 0.25)" : "rgba(27, 26, 30, 0.22)"
                      };background:transparent;color:${isJiwa ? "#660000" : "#141316"};transition:opacity 0.25s ease;"
                    >
                      LIHAT MAKNA ↗
                    </button>
                  `
                      : ""
                  }
                </div>
              </div>

              <div class="manuscript-card-footer font-mono" style="opacity:0.72;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:0.5rem;">
                <span>— ISSUE ${escapeHtml(current.label)} (${safeIdx + 1}/${slides.length}) —</span>
                ${
                  nextSlide && nextSlide.type === "content"
                    ? `<button type="button" data-action="reader-next" class="font-mono" style="background:transparent;border:0;padding:0;font-size:inherit;letter-spacing:inherit;color:inherit;text-decoration:underline;text-underline-offset:3px;">KARYA BERIKUTNYA →</button>`
                    : `<span>SLIDE ${safeIdx + 1} OF ${slides.length}</span>`
                }
              </div>
            </div>
          `;
        }

        return `
          <div
            class="manuscript-sheet manuscript-closing-card ${enterClass} paper-texture"
            style="margin:auto;--card-max-w:${maxWidthPx};--body-fs:${fontSizePx};--body-fs-mobile:${fontSizeMobilePx};--body-lh:${lineHeightVal};--body-lh-mobile:${lineHeightMobileVal};border-radius:1rem;display:flex;flex-direction:column;justify-content:space-between;gap:1.25rem;box-shadow:0 24px 50px rgba(0,0,0,0.45);background-color:${
              folder.colors.closingPaper || folder.colors.paper
            };color:${isJiwa ? "#4a0000" : "#1b1a1e"};"
          >
            <div
              class="${metaAnim} manuscript-card-header font-mono"
              style="border-bottom:1px solid ${
                isJiwa ? "rgba(102, 0, 0, 0.16)" : "rgba(27, 26, 30, 0.12)"
              };display:flex;align-items:center;justify-content:space-between;gap:0.5rem;"
            >
              <span style="opacity:0.75;">PENUTUP // ${escapeHtml(current.project)}</span>
              <span style="opacity:0.65;">${escapeHtml(folder.themeTag)}</span>
            </div>

            <div>
              <h3
                class="${titleAnim} font-serif"
                style="font-size:26px;font-weight:700;text-transform:uppercase;letter-spacing:0.035em;margin:0 0 0.75rem 0;line-height:1.2;color:${
                  isJiwa ? "#660000" : "#141316"
                };"
              >
                ${escapeHtml(current.title)}
              </h3>
              <p class="manuscript-body-text" style="white-space:pre-line;opacity:0.95;margin:0;">${escapeHtml(
                current.body
              )}</p>
              <div style="margin-top:1rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.5rem;">
                <div
                  class="${highlightAnim} manuscript-highlight-pill font-serif"
                  style="display:inline-block;border-radius:0.375rem;font-style:italic;font-weight:700;border-left:3px solid ${
                    folder.colors.accent
                  };background-color:${folder.colors.highlightBg};color:${
                    isJiwa ? "#660000" : "#141316"
                  };"
                >
                  ${escapeHtml(current.highlight)}
                </div>

                ${
                  hasMeaning
                    ? `
                  <button
                    type="button"
                    data-action="open-meaning-popup"
                    class="manuscript-meaning-btn font-mono"
                    style="border-radius:9999px;border:1px solid ${
                      isJiwa ? "rgba(102, 0, 0, 0.25)" : "rgba(27, 26, 30, 0.22)"
                    };background:transparent;color:${isJiwa ? "#660000" : "#141316"};"
                  >
                    LIHAT MAKNA ↗
                  </button>
                `
                    : ""
                }
              </div>
            </div>

            <div
              style="padding-top:0.75rem;border-top:1px solid ${
                isJiwa ? "rgba(102, 0, 0, 0.18)" : "rgba(27, 26, 30, 0.14)"
              };display:flex;flex-direction:column;gap:0.75rem;"
            >
              <div class="manuscript-card-footer font-mono" style="display:flex;align-items:center;justify-content:space-between;opacity:0.8;">
                <span>${escapeHtml(current.author)}</span>
                <strong>${escapeHtml(current.project)}</strong>
              </div>

              ${
                nextFolder
                  ? `
                <button
                  type="button"
                  data-action="open-folder"
                  data-folder-id="${escapeHtml(nextFolder.id)}"
                  data-slide-index="0"
                  class="manuscript-meaning-btn font-mono"
                  style="width:100%;padding:0.65rem 1rem;border-radius:0.75rem;text-transform:uppercase;display:flex;align-items:center;justify-content:space-between;background-color:${
                    folder.colors.highlightBg
                  };color:${isJiwa ? "#660000" : "#141316"};border:1px solid ${
                    isJiwa ? "rgba(102, 0, 0, 0.25)" : "rgba(27, 26, 30, 0.2)"
                  };"
                >
                  <span>VOLUME BERIKUTNYA: ${escapeHtml(nextFolder.series)}</span>
                  <span>→</span>
                </button>
              `
                  : `
                <button
                  type="button"
                  data-action="close-reader"
                  class="manuscript-meaning-btn font-mono"
                  style="width:100%;padding:0.65rem 1rem;border-radius:0.75rem;text-transform:uppercase;display:flex;align-items:center;justify-content:space-between;background-color:${
                    folder.colors.highlightBg
                  };color:#141316;border:1px solid rgba(27, 26, 30, 0.2);"
                >
                  <span>KEMBALI KE ARSIP</span>
                  <span>↑</span>
                </button>
              `
              }
            </div>
          </div>
        `;
      }

      function renderReaderFooterControls(safeIdx, totalSlides) {
        return `
          <button
            type="button"
            data-action="reader-prev"
            ${safeIdx === 0 ? "disabled" : ""}
            class="btn-subtle reader-nav-btn font-mono"
            style="border-radius:0.75rem;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.04);color:#ffffff;opacity:${
              safeIdx === 0 ? "0.3" : "1"
            };"
          >
            ← SEBELUMNYA
          </button>

          <div class="reader-page-counter font-mono" style="color:#8b8894;">
            ${String(safeIdx + 1).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}
          </div>

          <button
            type="button"
            data-action="reader-next"
            ${safeIdx === totalSlides - 1 ? "disabled" : ""}
            class="btn-subtle reader-nav-btn font-mono"
            style="border-radius:0.75rem;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.04);color:#ffffff;opacity:${
              safeIdx === totalSlides - 1 ? "0.3" : "1"
            };"
          >
            SELANJUTNYA →
          </button>
        `;
      }

      function renderReaderModalsLayer(folder, slides, safeIdx) {
        const current = slides ? slides[safeIdx] : null;
        const hasMeaning = Boolean(current && current.meaning && current.meaning.makna);

        return `
          <!-- Meaning Pop-up Modal -->
          ${
            folder && current && state.meaningModalOpen && hasMeaning
              ? `
            <div
              id="meaning-popup-backdrop"
              class="animate-modal-backdrop"
              style="position:fixed;inset:0;z-index:60;background:rgba(0,0,0,0.72);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;padding:1rem;"
              role="dialog"
              aria-modal="true"
              aria-labelledby="meaning-popup-title"
            >
              <div class="smoky-glass-panel animate-modal-shell" style="width:100%;max-width:34rem;max-height:85vh;overflow-y:auto;border-radius:1rem;padding:1.5rem;color:#f2f0ec;">
                <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:1rem;margin-bottom:1rem;">
                  <div>
                    <div class="popup-meta-text font-mono" style="font-size:10px;letter-spacing:0.18em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.25rem;">
                      PEMAKNAAN KARYA // ${escapeHtml(folder.series)} ${escapeHtml(current.label)}
                    </div>
                    <h4 id="meaning-popup-title" class="font-serif" style="margin:0;font-size:24px;font-weight:600;color:#ffffff;">
                      ${escapeHtml(current.title)}
                    </h4>
                  </div>
                  <button
                    type="button"
                    id="meaning-popup-close"
                    data-action="close-meaning-popup"
                    aria-label="Tutup pemaknaan karya"
                    class="btn-subtle"
                    style="width:32px;height:32px;border-radius:9999px;border:1px solid transparent;background:rgba(255,255,255,0.1);color:#ffffff;font-size:12px;flex-shrink:0;"
                  >
                    ✕
                  </button>
                </div>

                <div style="display:flex;flex-direction:column;gap:1rem;font-size:14.5px;line-height:1.78;">
                  <div style="padding:0.85rem 1rem;border-radius:0.75rem;background:rgba(216,195,158,0.08);border:1px solid rgba(216,195,158,0.22);">
                    <div class="popup-meta-text font-mono" style="font-size:10px;letter-spacing:0.14em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.25rem;">
                      INTI GAGASAN
                    </div>
                    <p class="popup-body-text" style="margin:0;color:#f2f0ec;font-weight:500;">
                      ${escapeHtml(current.meaning.ringkas)}
                    </p>
                  </div>

                  <div>
                    <div class="popup-meta-text font-mono" style="font-size:10px;letter-spacing:0.14em;color:#8b8894;text-transform:uppercase;margin-bottom:0.35rem;">
                      PENJELASAN MAKNA
                    </div>
                    <p class="popup-body-text" style="margin:0;color:#d5d1dc;">
                      ${escapeHtml(current.meaning.makna)}
                    </p>
                  </div>

                  <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(190px, 1fr));gap:0.75rem;padding-top:0.75rem;border-top:1px solid rgba(255,255,255,0.1);">
                    <div style="padding:0.75rem;border-radius:0.75rem;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.08);">
                      <div class="popup-meta-text font-mono" style="font-size:9.5px;letter-spacing:0.14em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.25rem;">
                        SIMBOL UTAMA
                      </div>
                      <div style="font-size:12.5px;color:#f2f0ec;">
                        ${escapeHtml(current.meaning.simbol)}
                      </div>
                    </div>

                    <div style="padding:0.75rem;border-radius:0.75rem;background:rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.08);">
                      <div class="popup-meta-text font-mono" style="font-size:9.5px;letter-spacing:0.14em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.25rem;">
                        KETERKAITAN SERIAL
                      </div>
                      <div style="font-size:12.5px;color:#f2f0ec;">
                        ${escapeHtml(current.meaning.hubungan)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
              : ""
          }

          <!-- Inline Sanskrit/Kawi Term Pop-up Modal -->
          ${
            state.selectedTermModal && state.selectedTermModal.termObj
              ? `
            <div
              id="term-popup-backdrop"
              class="animate-modal-backdrop"
              style="position:fixed;inset:0;z-index:60;background:rgba(0,0,0,0.72);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;padding:1rem;"
              role="dialog"
              aria-modal="true"
              aria-labelledby="term-popup-title"
            >
              <div class="smoky-glass-panel animate-modal-shell" style="width:100%;max-width:28rem;border-radius:1rem;padding:1.5rem;color:#f2f0ec;">
                <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:1rem;margin-bottom:1rem;">
                  <div>
                    <div class="popup-meta-text font-mono" style="font-size:10px;letter-spacing:0.16em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.25rem;">
                      ${escapeHtml(state.selectedTermModal.termObj.origin)}
                    </div>
                    <h4 id="term-popup-title" class="font-serif" style="margin:0;font-size:28px;font-weight:600;font-style:italic;color:#ffffff;">
                      ${escapeHtml(state.selectedTermModal.termObj.term)}
                    </h4>
                  </div>
                  <button
                    type="button"
                    id="term-popup-close"
                    data-action="close-term-popup"
                    aria-label="Tutup arti istilah"
                    class="btn-subtle"
                    style="width:32px;height:32px;border-radius:9999px;border:1px solid transparent;background:rgba(255,255,255,0.1);color:#ffffff;font-size:12px;"
                  >
                    ✕
                  </button>
                </div>

                <div style="display:flex;flex-direction:column;gap:0.85rem;font-size:14.5px;line-height:1.7;">
                  <div>
                    <div class="popup-meta-text font-mono" style="font-size:10px;letter-spacing:0.14em;color:#8b8894;text-transform:uppercase;margin-bottom:0.25rem;">
                      MAKNA ISTILAH
                    </div>
                    <p class="popup-body-text" style="margin:0;color:#f2f0ec;">
                      ${escapeHtml(state.selectedTermModal.termObj.meaning)}
                    </p>
                  </div>

                  <div style="padding:0.75rem 0.9rem;border-radius:0.75rem;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.08);font-size:13px;color:#b4b0be;">
                    <div class="popup-meta-text font-mono" style="font-size:9.5px;letter-spacing:0.14em;color:#d8c39e;text-transform:uppercase;margin-bottom:0.25rem;">
                      KONTEKS DALAM NASKAH
                    </div>
                    ${escapeHtml(state.selectedTermModal.termObj.context)}
                  </div>
                </div>

                <div style="margin-top:1.25rem;padding-top:0.85rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:space-between;">
                  <button
                    type="button"
                    data-action="open-glossary-from-term"
                    class="popup-meta-text font-mono"
                    style="background:transparent;border:0;padding:0;font-size:11px;letter-spacing:0.12em;color:#d8c39e;"
                  >
                    BUKA GLOSARIUM →
                  </button>
                  <button
                    type="button"
                    data-action="close-term-popup"
                    class="btn-subtle popup-meta-text font-mono"
                    style="font-size:11px;padding:0.4rem 0.85rem;border-radius:0.5rem;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.04);color:#f2f0ec;"
                  >
                    TUTUP
                  </button>
                </div>
              </div>
            </div>
          `
              : ""
          }

          <!-- Full Sanskrit & Kawi Glossary Modal -->
          ${
            state.glossaryModalOpen
              ? `
            <div
              id="glossary-popup-backdrop"
              class="animate-modal-backdrop"
              style="position:fixed;inset:0;z-index:60;background:rgba(0,0,0,0.75);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;padding:1rem;"
              role="dialog"
              aria-modal="true"
              aria-labelledby="glossary-popup-title"
            >
              <div class="smoky-glass-panel animate-modal-shell" style="width:100%;max-width:44rem;max-height:85vh;display:flex;flex-direction:column;border-radius:1rem;overflow:hidden;color:#f2f0ec;">
                <div style="padding:1.15rem 1.5rem;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:space-between;background:rgba(11,11,13,0.88);">
                  <div>
                    <div class="popup-meta-text font-mono" style="font-size:10px;letter-spacing:0.18em;color:#d8c39e;text-transform:uppercase;">
                      GLOSARIUM ISTILAH // SANSKERTA &amp; KAWI
                    </div>
                    <h4 id="glossary-popup-title" class="font-serif" style="margin:0.15rem 0 0 0;font-size:22px;font-weight:600;color:#ffffff;">
                      Kamus Istilah Klasik Serial SKETSA
                    </h4>
                  </div>
                  <button
                    type="button"
                    id="glossary-popup-close"
                    data-action="close-glossary-popup"
                    aria-label="Tutup glosarium"
                    class="btn-subtle"
                    style="width:32px;height:32px;border-radius:9999px;border:1px solid transparent;background:rgba(255,255,255,0.1);color:#ffffff;font-size:12px;"
                  >
                    ✕
                  </button>
                </div>

                <div style="padding:1.25rem 1.5rem;overflow-y:auto;display:flex;flex-direction:column;gap:0.75rem;">
                  <p style="margin:0 0 0.5rem 0;font-size:13px;color:#b4b0be;line-height:1.6;">
                    Referensi istilah klasik yang digunakan dalam Serial SKETSA. Setiap entri memuat penjelasan dan konteks penggunaannya dalam karya. Pilih kode karya untuk membuka tulisan terkait.
                  </p>

                  ${SANSKRIT_GLOSSARY.map(
                    (entry) => `
                    <div style="border-radius:0.75rem;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.3);padding:1rem;display:flex;flex-direction:column;gap:0.4rem;">
                      <div style="display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:0.5rem;">
                        <span class="font-serif" style="font-size:21px;font-weight:600;font-style:italic;color:#ffffff;">
                          ${escapeHtml(entry.term)}
                        </span>
                        <span class="popup-meta-text font-mono" style="font-size:10px;letter-spacing:0.1em;color:#d8c39e;">
                          ${escapeHtml(entry.origin)}
                        </span>
                      </div>
                      <p style="margin:0;font-size:13.5px;line-height:1.65;color:#f2f0ec;">
                        ${escapeHtml(entry.meaning)}
                      </p>
                      <p style="margin:0;font-size:12px;line-height:1.55;color:#8b8894;font-style:italic;">
                        ${escapeHtml(entry.context)}
                      </p>
                      <div style="padding-top:0.35rem;display:flex;flex-wrap:wrap;align-items:center;gap:0.4rem;">
                        <span class="popup-meta-text font-mono" style="font-size:10px;color:#8b8894;">MUNCUL DI:</span>
                        ${entry.issues
                          .map((code) => {
                            const w = getWorkByCode(code);
                            if (!w) return "";
                            return `<button type="button" data-action="jump-work" data-work-code="${escapeHtml(
                              code
                            )}" class="popup-meta-text font-mono" style="font-size:10px;padding:0.15rem 0.55rem;border-radius:9999px;background:rgba(216,195,158,0.12);border:1px solid rgba(216,195,158,0.28);color:#d8c39e;">${escapeHtml(
                              w.shortLabel
                            )} →</button>`;
                          })
                          .join("")}
                      </div>
                    </div>
                  `
                  ).join("")}
                </div>
              </div>
            </div>
          `
              : ""
          }
        `;
      }

      function renderReaderModal() {
        const folder = SKETSA_FOLDERS.find((f) => f.id === state.activeFolderId && f.status !== "upcoming");
        if (!folder) {
          if (state.glossaryModalOpen) {
            return `
              <div id="mount-reader-submodals">
                ${renderReaderModalsLayer(null, [], 0)}
              </div>
            `;
          }
          return "";
        }

        const slides = buildSlides(folder);
        const safeIdx = Math.min(Math.max(0, state.activeSlideIndex), slides.length - 1);
        const current = slides[safeIdx];
        const bookmarkKey = `${folder.id}:${current.issueSlug}`;
        const isBookmarked = state.bookmarks.some((b) => b.key === bookmarkKey);

        return `
          <div
            id="reader-modal-backdrop"
            class="reader-modal-backdrop animate-modal-backdrop"
            style="position:fixed;inset:0;z-index:50;background:rgba(5,5,8,0.82);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);display:flex;align-items:center;justify-content:center;"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reader-modal-title"
          >
            <div class="smoky-glass-panel animate-modal-shell" style="width:100%;max-width:56rem;max-height:94dvh;display:flex;flex-direction:column;border-radius:1rem;overflow:hidden;">
              <!-- Reader Top Bar -->
              <div class="reader-topbar" style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:0.75rem;border-bottom:1px solid rgba(255,255,255,0.1);flex-shrink:0;">
                <div style="display:flex;align-items:center;gap:0.75rem;min-width:0;">
                  <span id="reader-modal-dot" style="width:12px;height:12px;border-radius:9999px;flex-shrink:0;transition:background 0.3s ease, box-shadow 0.3s ease;background:${tintAccent(folder.colors.accent)};box-shadow:0 0 0 3px ${tintAccent(folder.colors.accent)}40, 0 0 16px 2px ${tintAccent(folder.colors.accent)};"></span>
                  <span id="reader-modal-title" class="reader-topbar-title font-mono" style="color:#ffffff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">
                    ${escapeHtml(folder.series)} — ${escapeHtml(current.label)}
                  </span>
                </div>

                <div id="mount-reader-topbar-actions" style="display:flex;align-items:center;gap:0.45rem;flex-wrap:wrap;">
                  ${renderReaderTopbarActions(folder, current, isBookmarked)}
                </div>
              </div>

              <!-- Collapsible Reading Controls -->
              <div id="mount-reader-controls">
                ${renderReaderControlsDrawer()}
              </div>

              <!-- Slide Tab Strip -->
              <div
                id="reader-tab-strip"
                class="reader-tabstrip"
                style="display:flex;align-items:center;gap:0.375rem;overflow-x:auto;border-bottom:1px solid rgba(255,255,255,0.1);background:rgba(13,13,17,0.85);flex-shrink:0;"
                role="tablist"
                aria-label="Daftar Karya dalam Folder"
              >
                ${renderReaderTabStrip(folder, slides, safeIdx)}
              </div>

              <!-- Manuscript Display Area -->
              <div id="reader-viewport" class="reader-viewport-area" style="flex:1;overflow-y:auto;display:flex;align-items:center;justify-content:center;">
                ${renderReaderManuscriptContent(folder, slides, safeIdx, true)}
              </div>

              <!-- Bottom Navigation -->
              <div id="mount-reader-footer" class="reader-footer-bar" style="display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(255,255,255,0.1);background:rgba(11,11,13,0.92);flex-shrink:0;">
                ${renderReaderFooterControls(safeIdx, slides.length)}
              </div>
            </div>
          </div>

          <div id="mount-reader-submodals">
            ${renderReaderModalsLayer(folder, slides, safeIdx)}
          </div>
        `;
      }

      function renderFooter() {
        return `
          <footer style="position:relative;z-index:10;border-top:1px solid rgba(255,255,255,0.08);padding:2.5rem 5vw;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;font-size:11px;letter-spacing:0.15em;color:#8b8894;margin-top:auto;" class="font-mono">
            <div>REPOSITORY // NATHARA ARCHIVE — THE LITERARY ARCHIVE</div>
            <div style="display:flex;align-items:center;gap:1.5rem;">
              <button
                type="button"
                data-action="switch-page"
                data-page="series"
                class="font-mono"
                style="background:transparent;border:0;padding:0;font-size:11px;letter-spacing:0.15em;color:#d8c39e;"
              >
                SERIES NOTES
              </button>
              <button
                type="button"
                data-action="switch-page"
                data-page="about"
                class="font-mono"
                style="background:transparent;border:0;padding:0;font-size:11px;letter-spacing:0.15em;color:#d8c39e;"
              >
                ABOUT AUTHOR
              </button>
              <a
                href="https://www.instagram.com/natharaarchive/"
                target="_blank"
                rel="noopener noreferrer"
                style="color:#f2f0ec;text-decoration:underline;text-underline-offset:4px;"
              >
                @NATHARAARCHIVE ↗
              </a>
            </div>
          </footer>
        `;
      }

      // =======================================================================
      // 10. GRANULAR & FULL RENDER FUNCTIONS (ZERO RE-ANIMATION FLICKER)
      // =======================================================================
      function refreshHomeSection() {
        const actionsEl = document.getElementById("mount-home-actions");
        const drawersEl = document.getElementById("mount-home-drawers");
        const foldersEl = document.getElementById("mount-home-folders");
        if (!actionsEl || !drawersEl || !foldersEl) {
          renderApp();
          return;
        }
        actionsEl.innerHTML = renderHomeActionButtons();
        drawersEl.innerHTML = renderHomeDrawersAndMatches();
        foldersEl.innerHTML = renderHomeFoldersGrid();
      }

      function refreshReaderInPlace(animateText = false) {
        const folder = SKETSA_FOLDERS.find((f) => f.id === state.activeFolderId && f.status !== "upcoming");
        if (!folder) {
          renderApp();
          return;
        }
        const slides = buildSlides(folder);
        const safeIdx = Math.min(Math.max(0, state.activeSlideIndex), slides.length - 1);
        const current = slides[safeIdx];
        const bookmarkKey = `${folder.id}:${current.issueSlug}`;
        const isBookmarked = state.bookmarks.some((b) => b.key === bookmarkKey);

        const titleEl = document.getElementById("reader-modal-title");
        if (titleEl) titleEl.textContent = `${folder.series} — ${current.label}`;
        const dotEl = document.getElementById("reader-modal-dot");
        if (dotEl) {
          const dotTint = tintAccent(folder.colors.accent);
          dotEl.style.background = dotTint;
          dotEl.style.boxShadow = `0 0 0 3px ${dotTint}40, 0 0 16px 2px ${dotTint}`;
        }

        const topbarEl = document.getElementById("mount-reader-topbar-actions");
        if (topbarEl) topbarEl.innerHTML = renderReaderTopbarActions(folder, current, isBookmarked);

        const controlsEl = document.getElementById("mount-reader-controls");
        if (controlsEl) controlsEl.innerHTML = renderReaderControlsDrawer();

        const tabStripEl = document.getElementById("reader-tab-strip");
        if (tabStripEl) {
          tabStripEl.innerHTML = renderReaderTabStrip(folder, slides, safeIdx);
          const activeTab = tabStripEl.querySelector('[aria-selected="true"]');
          if (activeTab && typeof activeTab.scrollIntoView === "function") {
            activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        }

        const viewportEl = document.getElementById("reader-viewport");
        if (viewportEl) {
          viewportEl.innerHTML = renderReaderManuscriptContent(folder, slides, safeIdx, animateText);
        }

        const footerEl = document.getElementById("mount-reader-footer");
        if (footerEl) footerEl.innerHTML = renderReaderFooterControls(safeIdx, slides.length);

        const submodalsEl = document.getElementById("mount-reader-submodals");
        if (submodalsEl) submodalsEl.innerHTML = renderReaderModalsLayer(folder, slides, safeIdx);
      }

      function renderApp() {
        const app = document.getElementById("app");
        let mainPageHtml = "";
        if (state.activePage === "series") {
          mainPageHtml = renderSeriesNotesPage();
        } else if (state.activePage === "about") {
          mainPageHtml = renderAboutAuthorPage();
        } else {
          mainPageHtml = renderArchiveHome();
        }

        app.innerHTML = `
          ${renderNavbar()}
          ${mainPageHtml}
          ${renderFooter()}
          <div id="mount-reader-root">${renderReaderModal()}</div>
        `;
      }

      // =======================================================================
      // 11. SMOOTH READER SLIDE TRANSITION & MODAL CLOSE HELPERS
      // =======================================================================
      let isSlideTransitioning = false;

      function goToSlide(targetIdx, directionOverride = null) {
        if (!state.activeFolderId || isSlideTransitioning) return;
        const folder = SKETSA_FOLDERS.find((f) => f.id === state.activeFolderId);
        if (!folder) return;

        const slides = buildSlides(folder);
        const clamped = Math.min(Math.max(0, targetIdx), slides.length - 1);
        if (clamped === state.activeSlideIndex) return;

        const dir = directionOverride || (clamped > state.activeSlideIndex ? "next" : "prev");
        const viewport = document.getElementById("reader-viewport");
        const sheet = viewport ? viewport.querySelector(".manuscript-sheet") : null;

        const commitSlideChange = () => {
          state.activeSlideIndex = clamped;
          state.slideDirection = dir;
          state.meaningModalOpen = false;
          state.selectedTermModal = null;
          recordSlideVisit(folder, slides[clamped], clamped, slides.length, true);
          refreshReaderInPlace(true);
          isSlideTransitioning = false;
        };

        if (sheet && !prefersReducedMotion) {
          isSlideTransitioning = true;
          sheet.classList.remove("phase-entering-next", "phase-entering-prev");
          sheet.classList.add(dir === "next" ? "phase-exiting-next" : "phase-exiting-prev");
          window.setTimeout(commitSlideChange, 180);
        } else {
          commitSlideChange();
        }
      }

      function openFolderAtSlide(folderId, slideIndex, triggerEl) {
        const folder = SKETSA_FOLDERS.find((f) => f.id === folderId && f.status !== "upcoming");
        if (!folder) return;

        const wasAlreadyOpen = Boolean(state.activeFolderId);
        if (triggerEl && !wasAlreadyOpen) state.lastTriggerEl = triggerEl;

        const slides = buildSlides(folder);
        const clamped = Math.min(Math.max(0, slideIndex || 0), slides.length - 1);

        state.activePage = "archive";
        state.mobileMenuOpen = false;
        state.activeFolderId = folder.id;
        state.activeSlideIndex = clamped;
        state.slideDirection = null;
        state.meaningModalOpen = false;
        state.glossaryModalOpen = false;
        state.selectedTermModal = null;
        recordSlideVisit(folder, slides[clamped], clamped, slides.length, true);

        if (wasAlreadyOpen) {
          refreshReaderInPlace(true);
        } else {
          renderApp();
          const closeBtn = document.getElementById("reader-close-btn");
          if (closeBtn) closeBtn.focus({ preventScroll: true });
        }
      }

      function closeReaderModal() {
        const backdrop = document.getElementById("reader-modal-backdrop");
        const shell = backdrop ? backdrop.querySelector(".animate-modal-shell") : null;

        const finalizeClose = () => {
          state.activeFolderId = null;
          state.meaningModalOpen = false;
          state.glossaryModalOpen = false;
          state.selectedTermModal = null;
          setCleanHash("");
          updateDocumentMeta(
            "REPOSITORY // NATHARA ARCHIVE — Serial SKETSA",
            "Repositori digital sastra dan serial prosa liris SKETSA oleh Nathara Archive's."
          );
          renderApp();
          if (state.lastTriggerEl && typeof state.lastTriggerEl.focus === "function") {
            state.lastTriggerEl.focus({ preventScroll: true });
          }
        };

        if (backdrop && shell && !prefersReducedMotion) {
          backdrop.classList.add("is-closing");
          shell.classList.add("is-closing");
          window.setTimeout(finalizeClose, 210);
        } else {
          finalizeClose();
        }
      }

      function closeSubModal(backdropId, onDone) {
        const backdrop = document.getElementById(backdropId);
        const shell = backdrop ? backdrop.querySelector(".animate-modal-shell") : null;
        if (backdrop && shell && !prefersReducedMotion) {
          backdrop.classList.add("is-closing");
          shell.classList.add("is-closing");
          window.setTimeout(onDone, 190);
        } else {
          onDone();
        }
      }

      // =======================================================================
      // 12. EVENT DELEGATION & INTERACTION HANDLERS
      // =======================================================================
      document.addEventListener("click", (e) => {
        const actionEl = e.target.closest("[data-action]");

        // Backdrop clicks for modals
        if (!actionEl) {
          if (e.target.id === "meaning-popup-backdrop") {
            closeSubModal("meaning-popup-backdrop", () => {
              state.meaningModalOpen = false;
              refreshReaderInPlace(false);
            });
            return;
          }
          if (e.target.id === "term-popup-backdrop") {
            closeSubModal("term-popup-backdrop", () => {
              state.selectedTermModal = null;
              refreshReaderInPlace(false);
            });
            return;
          }
          if (e.target.id === "glossary-popup-backdrop") {
            closeSubModal("glossary-popup-backdrop", () => {
              state.glossaryModalOpen = false;
              refreshReaderInPlace(false);
            });
            return;
          }
          if (e.target.id === "reader-modal-backdrop") {
            closeReaderModal();
            return;
          }
          return;
        }

        const action = actionEl.getAttribute("data-action");

        switch (action) {
          case "toggle-mobile-menu": {
            state.mobileMenuOpen = !state.mobileMenuOpen;
            renderApp();
            break;
          }

          case "switch-page": {
            const targetPage = actionEl.getAttribute("data-page") || "archive";
            state.activePage = targetPage;
            state.mobileMenuOpen = false;
            state.activeFolderId = null;
            if (targetPage === "series") {
              setCleanHash("series");
              updateDocumentMeta(
                "Series Notes — Perkembangan Serial SKETSA",
                "Dokumentasi perkembangan konsep, filosofi simbolisme, linimasa, dan tinjauan leksikal Serial SKETSA."
              );
            } else if (targetPage === "about") {
              setCleanHash("about");
              updateDocumentMeta(
                "Tentang Penulis — Nathara Archive's",
                "Profil dan catatan pribadi Nathara di balik Nathara Archive's."
              );
            } else {
              setCleanHash("");
              updateDocumentMeta(
                "REPOSITORY // NATHARA ARCHIVE — Serial SKETSA",
                "Repositori digital sastra dan serial prosa liris SKETSA oleh Nathara Archive's."
              );
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
            renderApp();
            break;
          }

          case "start-here": {
            e.preventDefault();
            openFolderAtSlide("jiwa", 0, actionEl);
            break;
          }

          case "open-folder": {
            const folderId = actionEl.getAttribute("data-folder-id");
            const slideIdx = parseInt(actionEl.getAttribute("data-slide-index") || "0", 10);
            openFolderAtSlide(folderId, slideIdx, actionEl);
            break;
          }

          case "close-reader": {
            closeReaderModal();
            break;
          }

          case "toggle-manifesto": {
            state.manifestoOpen = !state.manifestoOpen;
            refreshHomeSection();
            break;
          }

          case "toggle-history": {
            state.historyDrawerOpen = !state.historyDrawerOpen;
            refreshHomeSection();
            break;
          }

          case "clear-history": {
            state.readingHistory = [];
            safeWriteStorage(STORAGE_KEYS.HISTORY, []);
            refreshHomeSection();
            break;
          }

          case "clear-bookmarks": {
            state.bookmarks = [];
            safeWriteStorage(STORAGE_KEYS.BOOKMARKS, []);
            refreshHomeSection();
            break;
          }

          case "remove-history": {
            const vId = actionEl.getAttribute("data-volume-id");
            const iId = actionEl.getAttribute("data-issue-id");
            state.readingHistory = state.readingHistory.filter(
              (item) => !(item.volumeId === vId && item.issueId === iId)
            );
            safeWriteStorage(STORAGE_KEYS.HISTORY, state.readingHistory);
            refreshHomeSection();
            break;
          }

          case "remove-bookmark": {
            const key = actionEl.getAttribute("data-key");
            state.bookmarks = state.bookmarks.filter((bm) => bm.key !== key);
            safeWriteStorage(STORAGE_KEYS.BOOKMARKS, state.bookmarks);
            refreshHomeSection();
            break;
          }

          case "clear-search": {
            state.searchQuery = "";
            refreshHomeSection();
            const input = document.getElementById("archive-search-input");
            if (input) input.focus();
            break;
          }

          case "toggle-controls": {
            state.controlsOpen = !state.controlsOpen;
            refreshReaderInPlace(false);
            break;
          }

          case "set-font-scale": {
            state.readerPrefs.fontScale = actionEl.getAttribute("data-value");
            safeWriteStorage(STORAGE_KEYS.READER_PREFS, state.readerPrefs);
            refreshReaderInPlace(false);
            break;
          }

          case "set-line-height": {
            state.readerPrefs.lineHeight = actionEl.getAttribute("data-value");
            safeWriteStorage(STORAGE_KEYS.READER_PREFS, state.readerPrefs);
            refreshReaderInPlace(false);
            break;
          }

          case "set-width-mode": {
            state.readerPrefs.widthMode = actionEl.getAttribute("data-value");
            safeWriteStorage(STORAGE_KEYS.READER_PREFS, state.readerPrefs);
            refreshReaderInPlace(false);
            break;
          }

          case "toggle-dropcap": {
            state.readerPrefs.dropCap = !state.readerPrefs.dropCap;
            safeWriteStorage(STORAGE_KEYS.READER_PREFS, state.readerPrefs);
            refreshReaderInPlace(false);
            break;
          }

          case "toggle-show-terms": {
            state.readerPrefs.showTerms = !state.readerPrefs.showTerms;
            safeWriteStorage(STORAGE_KEYS.READER_PREFS, state.readerPrefs);
            refreshReaderInPlace(false);
            break;
          }

          case "toggle-bookmark": {
            const folder = SKETSA_FOLDERS.find((f) => f.id === state.activeFolderId);
            if (!folder) return;
            const slides = buildSlides(folder);
            const current = slides[state.activeSlideIndex];
            const key = `${folder.id}:${current.issueSlug}`;
            const exists = state.bookmarks.some((b) => b.key === key);

            if (exists) {
              state.bookmarks = state.bookmarks.filter((b) => b.key !== key);
            } else {
              const label =
                current.type === "content"
                  ? `${current.label} — ${current.title}`
                  : current.type === "closing"
                  ? `PENUTUP — ${current.title}`
                  : "OPENING COVER";
              state.bookmarks = [
                {
                  key,
                  volumeId: folder.id,
                  volumeSeries: folder.series,
                  issueId: current.issueSlug,
                  label,
                  slideIndex: state.activeSlideIndex,
                  timestamp: Date.now(),
                },
                ...state.bookmarks,
              ];
            }
            safeWriteStorage(STORAGE_KEYS.BOOKMARKS, state.bookmarks);
            refreshReaderInPlace(false);
            break;
          }

          case "copy-url": {
            const folder = SKETSA_FOLDERS.find((f) => f.id === state.activeFolderId);
            if (!folder) return;
            const slides = buildSlides(folder);
            const current = slides[state.activeSlideIndex];
            const shareUrl = `${window.location.origin}${window.location.pathname}#${folder.id}/${current.issueSlug}`;
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(shareUrl).catch(() => {});
            }
            state.copiedUrl = true;
            refreshReaderInPlace(false);
            setTimeout(() => {
              state.copiedUrl = false;
              if (state.activeFolderId) refreshReaderInPlace(false);
            }, 1800);
            break;
          }

          case "copy-text": {
            const folder = SKETSA_FOLDERS.find((f) => f.id === state.activeFolderId);
            if (!folder) break;
            const slides = buildSlides(folder);
            const current = slides[state.activeSlideIndex];
            if (!current) break;
            const link = `${window.location.origin}${window.location.pathname}#${folder.id}/${current.issueSlug}`;
            const main =
              current.type === "opening"
                ? current.quote
                : `${current.title}\n\n${current.body}`;
            const label = current.type === "opening" ? folder.series : `${folder.series} ${current.label}`;
            const text = `${main}\n\n— Nathara Archive's, ${label}\n${link}`;
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(text).catch(() => {});
            }
            state.copiedText = true;
            refreshReaderInPlace(false);
            setTimeout(() => {
              state.copiedText = false;
              if (state.activeFolderId) refreshReaderInPlace(false);
            }, 1800);
            break;
          }

          case "go-slide": {
            const idx = parseInt(actionEl.getAttribute("data-slide-index") || "0", 10);
            goToSlide(idx);
            break;
          }

          case "reader-prev": {
            goToSlide(state.activeSlideIndex - 1, "prev");
            break;
          }

          case "reader-next": {
            goToSlide(state.activeSlideIndex + 1, "next");
            break;
          }

          case "open-meaning-popup": {
            state.lastPopupTriggerEl = actionEl;
            state.meaningModalOpen = true;
            refreshReaderInPlace(false);
            const btn = document.getElementById("meaning-popup-close");
            if (btn) btn.focus({ preventScroll: true });
            break;
          }

          case "close-meaning-popup": {
            closeSubModal("meaning-popup-backdrop", () => {
              state.meaningModalOpen = false;
              refreshReaderInPlace(false);
              if (state.lastPopupTriggerEl && typeof state.lastPopupTriggerEl.focus === "function") {
                state.lastPopupTriggerEl.focus({ preventScroll: true });
              }
            });
            break;
          }

          case "open-term-popup": {
            const termId = actionEl.getAttribute("data-term-id");
            const workCode = actionEl.getAttribute("data-work-code");
            const termObj = SANSKRIT_GLOSSARY.find((t) => t.id === termId);
            if (!termObj) return;
            state.lastPopupTriggerEl = actionEl;
            state.selectedTermModal = { termObj, workCode };
            refreshReaderInPlace(false);
            const btn = document.getElementById("term-popup-close");
            if (btn) btn.focus({ preventScroll: true });
            break;
          }

          case "close-term-popup": {
            closeSubModal("term-popup-backdrop", () => {
              state.selectedTermModal = null;
              refreshReaderInPlace(false);
              if (state.lastPopupTriggerEl && typeof state.lastPopupTriggerEl.focus === "function") {
                state.lastPopupTriggerEl.focus({ preventScroll: true });
              }
            });
            break;
          }

          case "open-glossary-popup": {
            state.lastPopupTriggerEl = actionEl;
            state.glossaryModalOpen = true;
            refreshReaderInPlace(false);
            const btn = document.getElementById("glossary-popup-close");
            if (btn) btn.focus({ preventScroll: true });
            break;
          }

          case "open-glossary-from-term": {
            state.selectedTermModal = null;
            state.glossaryModalOpen = true;
            refreshReaderInPlace(false);
            const btn = document.getElementById("glossary-popup-close");
            if (btn) btn.focus({ preventScroll: true });
            break;
          }

          case "close-glossary-popup": {
            closeSubModal("glossary-popup-backdrop", () => {
              state.glossaryModalOpen = false;
              refreshReaderInPlace(false);
              if (state.lastPopupTriggerEl && typeof state.lastPopupTriggerEl.focus === "function") {
                state.lastPopupTriggerEl.focus({ preventScroll: true });
              }
            });
            break;
          }

          case "jump-work": {
            const workCode = actionEl.getAttribute("data-work-code");
            const work = getWorkByCode(workCode);
            if (!work) return;
            state.glossaryModalOpen = false;
            state.selectedTermModal = null;
            openFolderAtSlide(work.folder.id, work.slideIndex);
            break;
          }
        }
      });

      // Live search input handler (updates only drawers & folders grid without rebuilding input)
      document.addEventListener("input", (e) => {
        if (e.target && e.target.id === "archive-search-input") {
          state.searchQuery = e.target.value;
          const drawersEl = document.getElementById("mount-home-drawers");
          const foldersEl = document.getElementById("mount-home-folders");
          if (drawersEl) drawersEl.innerHTML = renderHomeDrawersAndMatches();
          if (foldersEl) foldersEl.innerHTML = renderHomeFoldersGrid();
        }
      });

      // Keyboard navigation (Enter/Space on folder cards, Escape & Arrow keys in reader)
      document.addEventListener("keydown", (e) => {
        if ((e.key === "Enter" || e.key === " ") && document.activeElement) {
          const activeEl = document.activeElement;
          if (activeEl.classList.contains("folder-card") && !activeEl.classList.contains("upcoming-folder")) {
            e.preventDefault();
            const folderId = activeEl.getAttribute("data-folder-id");
            openFolderAtSlide(folderId, 0, activeEl);
            return;
          }
        }

        if (e.key === "Escape") {
          if (state.mobileMenuOpen) {
            e.preventDefault();
            state.mobileMenuOpen = false;
            renderApp();
            return;
          }
          if (state.meaningModalOpen) {
            e.preventDefault();
            closeSubModal("meaning-popup-backdrop", () => {
              state.meaningModalOpen = false;
              refreshReaderInPlace(false);
            });
            return;
          }
          if (state.selectedTermModal) {
            e.preventDefault();
            closeSubModal("term-popup-backdrop", () => {
              state.selectedTermModal = null;
              refreshReaderInPlace(false);
            });
            return;
          }
          if (state.glossaryModalOpen) {
            e.preventDefault();
            closeSubModal("glossary-popup-backdrop", () => {
              state.glossaryModalOpen = false;
              refreshReaderInPlace(false);
            });
            return;
          }
          if (state.activeFolderId) {
            e.preventDefault();
            closeReaderModal();
            return;
          }
        }

        if (state.activeFolderId && !state.meaningModalOpen && !state.selectedTermModal && !state.glossaryModalOpen) {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            goToSlide(state.activeSlideIndex + 1, "next");
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            goToSlide(state.activeSlideIndex - 1, "prev");
          }
        }
      });

      // Touch swipe navigation inside reader viewport
      let touchStartX = null;
      let touchStartY = null;

      document.addEventListener(
        "touchstart",
        (e) => {
          if (!state.activeFolderId || state.meaningModalOpen || state.selectedTermModal || state.glossaryModalOpen) return;
          const viewport = e.target.closest("#reader-viewport");
          if (!viewport || e.touches.length !== 1) return;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        },
        { passive: true }
      );

      document.addEventListener(
        "touchend",
        (e) => {
          if (touchStartX === null || touchStartY === null) return;
          if (!state.activeFolderId || state.meaningModalOpen || state.selectedTermModal || state.glossaryModalOpen) {
            touchStartX = null;
            touchStartY = null;
            return;
          }
          const touch = e.changedTouches[0];
          const dx = touch.clientX - touchStartX;
          const dy = touch.clientY - touchStartY;
          touchStartX = null;
          touchStartY = null;

          if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.35) {
            if (dx < 0) {
              goToSlide(state.activeSlideIndex + 1, "next");
            } else {
              goToSlide(state.activeSlideIndex - 1, "prev");
            }
          }
        },
        { passive: true }
      );

      // =======================================================================
      // 13. DESKTOP POINTER 3D TILT + MOBILE TOUCH PEEK & AMBIENT GLOW
      // =======================================================================
      let activeTiltCard = null;
      let activeTouchCard = null;
      let lastTouchPoint = null;
      let touchResetTimer = null;
      let touchRafPending = false;
      let rafPending = false;
      let latestPointerX = window.innerWidth * 0.5;
      let latestPointerY = window.innerHeight * 0.3;

      function isPointInsideCard(card, clientX, clientY) {
        if (!card) return false;
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return false;
        return (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        );
      }

      function applyCardTilt(card, clientX, clientY, isTouch = false) {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const normX = Math.max(-1, Math.min(1, ((clientX - rect.left) / rect.width - 0.5) * 2));
        const normY = Math.max(-1, Math.min(1, ((clientY - rect.top) / rect.height - 0.5) * 2));

        const ry = (normX * (isTouch ? 8 : 7.5)).toFixed(2);
        const rx = (-normY * (isTouch ? 6 : 6)).toFixed(2);
        const px = (normX * 7).toFixed(2);
        const py = (normY * 6).toFixed(2);
        const mxPull = (normX * 4.5).toFixed(2);
        const lx = (((normX + 1) * 0.5) * 100).toFixed(1);
        const ly = (((normY + 1) * 0.5) * 100).toFixed(1);

        card.style.setProperty("--rx", `${rx}deg`);
        card.style.setProperty("--ry", `${ry}deg`);
        card.style.setProperty("--ty", isTouch ? "-8px" : "-7px");
        card.style.setProperty("--mx-pull", `${mxPull}px`);
        card.style.setProperty("--px", `${px}px`);
        card.style.setProperty("--py", `${py}px`);
        card.style.setProperty("--lx", `${lx}%`);
        card.style.setProperty("--ly", `${ly}%`);
      }

      function resetCardTilt(card) {
        if (!card) return;
        card.classList.remove("is-pointer-active", "is-touched");
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--ty", "0px");
        card.style.setProperty("--mx-pull", "0px");
        card.style.setProperty("--px", "0px");
        card.style.setProperty("--py", "0px");
        card.style.setProperty("--lx", "50%");
        card.style.setProperty("--ly", "35%");
      }

      if (!isCoarsePointer && !prefersReducedMotion) {
        document.addEventListener(
          "pointermove",
          (e) => {
            if (e.pointerType !== "mouse") return;
            latestPointerX = e.clientX;
            latestPointerY = e.clientY;

            const hoveredCard =
              e.target && e.target.closest
                ? e.target.closest(".folder-card:not(.upcoming-folder)")
                : null;

            if (activeTiltCard && activeTiltCard !== hoveredCard) {
              resetCardTilt(activeTiltCard);
              activeTiltCard = null;
            }

            if (hoveredCard) {
              activeTiltCard = hoveredCard;
              hoveredCard.classList.add("is-pointer-active");
            }

            if (rafPending) return;
            rafPending = true;

            window.requestAnimationFrame(() => {
              rafPending = false;
              document.documentElement.style.setProperty("--mx", `${latestPointerX}px`);
              document.documentElement.style.setProperty("--my", `${latestPointerY}px`);

              if (activeTiltCard) {
                applyCardTilt(activeTiltCard, latestPointerX, latestPointerY, false);
              }
            });
          },
          { passive: true }
        );

        document.addEventListener(
          "pointerleave",
          () => {
            if (activeTiltCard) {
              resetCardTilt(activeTiltCard);
              activeTiltCard = null;
            }
          },
          { passive: true }
        );
      }

      // Mobile & Touch 3D Folder Open / Tilt Feedback (stays open while finger is inside folder area even during scroll)
      function syncTouchFolderState(clientX, clientY) {
        if (activeTouchCard && isPointInsideCard(activeTouchCard, clientX, clientY)) {
          activeTouchCard.classList.add("is-touched");
          applyCardTilt(activeTouchCard, clientX, clientY, true);
          return;
        }

        if (activeTouchCard) {
          resetCardTilt(activeTouchCard);
          activeTouchCard = null;
        }

        const elUnderFinger = document.elementFromPoint(clientX, clientY);
        const nextCard =
          elUnderFinger && elUnderFinger.closest
            ? elUnderFinger.closest(".folder-card:not(.upcoming-folder)")
            : null;

        if (nextCard) {
          activeTouchCard = nextCard;
          activeTouchCard.classList.add("is-touched");
          applyCardTilt(activeTouchCard, clientX, clientY, true);
        }
      }

      document.addEventListener(
        "touchstart",
        (e) => {
          const card = e.target.closest ? e.target.closest(".folder-card:not(.upcoming-folder)") : null;
          if (!card || e.touches.length !== 1) return;

          if (touchResetTimer) {
            window.clearTimeout(touchResetTimer);
            touchResetTimer = null;
          }

          if (activeTouchCard && activeTouchCard !== card) {
            resetCardTilt(activeTouchCard);
          }

          const touch = e.touches[0];
          activeTouchCard = card;
          lastTouchPoint = { x: touch.clientX, y: touch.clientY };
          card.classList.add("is-touched");
          applyCardTilt(card, touch.clientX, touch.clientY, true);
        },
        { passive: true }
      );

      document.addEventListener(
        "touchmove",
        (e) => {
          if (!lastTouchPoint || e.touches.length !== 1) return;
          const touch = e.touches[0];
          lastTouchPoint = { x: touch.clientX, y: touch.clientY };

          if (touchRafPending) return;
          touchRafPending = true;

          window.requestAnimationFrame(() => {
            touchRafPending = false;
            if (!lastTouchPoint) return;
            syncTouchFolderState(lastTouchPoint.x, lastTouchPoint.y);
          });
        },
        { passive: true }
      );

      window.addEventListener(
        "scroll",
        () => {
          if (!lastTouchPoint || touchRafPending) return;
          touchRafPending = true;

          window.requestAnimationFrame(() => {
            touchRafPending = false;
            if (!lastTouchPoint) return;
            syncTouchFolderState(lastTouchPoint.x, lastTouchPoint.y);
          });
        },
        { passive: true }
      );

      document.addEventListener(
        "touchend",
        (e) => {
          if (e.touches && e.touches.length > 0) return;
          lastTouchPoint = null;
          if (!activeTouchCard) return;
          const cardToReset = activeTouchCard;
          activeTouchCard = null;
          touchResetTimer = window.setTimeout(() => {
            resetCardTilt(cardToReset);
            touchResetTimer = null;
          }, 260);
        },
        { passive: true }
      );

      document.addEventListener(
        "touchcancel",
        () => {
          if (touchResetTimer) {
            window.clearTimeout(touchResetTimer);
            touchResetTimer = null;
          }
          if (activeTouchCard) {
            resetCardTilt(activeTouchCard);
            activeTouchCard = null;
          }
          lastTouchPoint = null;
        },
        { passive: true }
      );

      // Hash routing listener
      window.addEventListener("hashchange", () => {
        applyHashRoute(window.location.hash);
        renderApp();
      });

      // =======================================================================
      // 14. INITIAL BOOTSTRAP
      // =======================================================================
      applyHashRoute(window.location.hash);

      // =======================================================================
      // BACK-TO-TOP BUTTON
      // =======================================================================
      (function initBackToTop() {
        const btn = document.getElementById("back-to-top");
        if (!btn) return;
        let ticking = false;
        function update() {
          ticking = false;
          btn.classList.toggle("is-visible", window.scrollY > 400);
        }
        window.addEventListener(
          "scroll",
          function () {
            if (!ticking) {
              ticking = true;
              window.requestAnimationFrame(update);
            }
          },
          { passive: true }
        );
        btn.addEventListener("click", function () {
          window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
        });
        update();
      })();

      // Safety net: if the first render ever fails, keep the pre-rendered content visible
      const staticFallbackHtml = (document.getElementById("app") || {}).innerHTML || "";
      try {
        renderApp();
      } catch (err) {
        console.error("Initial render failed:", err);
        const appEl = document.getElementById("app");
        if (appEl && staticFallbackHtml) appEl.innerHTML = staticFallbackHtml;
      }
    })();
