import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Facebook, 
  Users, 
  MapPin, 
  Phone, 
  ChevronRight, 
  MessageCircle, 
  ShoppingBag,
  ExternalLink,
  ArrowRight
} from "lucide-react";

const PRODUCTS = [
  "https://i.postimg.cc/C1fDxgPG/687065816-941242915610814-5785426078056121005-n.jpg",
  "https://i.postimg.cc/ZqQpmRcB/687669987-941242155610890-3882524642508268469-n.jpg",
  "https://i.postimg.cc/vmKfyBzr/687797016-941242412277531-2088883363496138934-n.jpg",
  "https://i.postimg.cc/XvPdWJ8Q/688299431-941242828944156-8041396637673498826-n.jpg",
  "https://i.postimg.cc/cJzwWHmf/688443263-941242278944211-7466691562790434093-n.jpg",
  "https://i.postimg.cc/jj1PT5Xz/689046971-941242345610871-8040513569303058908-n.jpg",
  "https://i.postimg.cc/0N4DvQfd/689507169-941242228944216-2232473010014045767-n.jpg",
  "https://i.postimg.cc/fbPmsLKv/689910929-941242475610858-744985549211313451-n.jpg",
  "https://i.postimg.cc/9fkZ2Mp1/691913106-941242675610838-8427670467025004362-n.jpg",
  "https://i.postimg.cc/GpfGR2QK/691996972-941242572277515-7256287032788546408-n.jpg"
];

const LOGO_URL = "https://i.postimg.cc/GtCB3ssd/692072920-941185728949866-5891611187200166620-n.jpg";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="M&P Logo" className="w-12 h-12 rounded-lg" />
              <span className="font-display font-bold text-xl tracking-tight">M&P <span className="text-blue-600">Hurtownia</span></span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#produkty" className="hover:text-blue-600 transition-colors">Produkty</a>
              <a href="#o-nas" className="hover:text-blue-600 transition-colors">O nas</a>
              <a href="#kontakt" className="hover:text-blue-600 transition-colors">Kontakt</a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="tel:729558704" 
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                <Phone className="w-4 h-4" />
                729 558 704
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-br from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                  Twój zaufany dostawca w Warszawie
                </span>
                <h1 className="font-display text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-8">
                  M&P Hurtownia <br />
                  <span className="text-blue-600">Najlepsze Oferty</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Profesjonalna hurtownia z szerokim asortymentem. Sprawdź nasze najnowsze kolekcje i ceny dostępne wyłącznie dla członków naszej grupy na Facebooku.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.facebook.com/groups/3616227628627709/"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 shadow-xl"
                  >
                    <Users className="w-6 h-6" />
                    Dołącz do grupy (Ceny)
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.facebook.com/profile.php?id=100091753424881"
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:border-slate-300 shadow-sm"
                  >
                    <Facebook className="w-6 h-6 text-blue-600" />
                    Nasz Profil Facebook
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[120px] opacity-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-slate-200 rounded-full blur-[120px] opacity-20 pointer-events-none" />
        </section>

        {/* Info Banner */}
        <div className="bg-blue-600 py-6 overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee">
             {[...Array(5)].map((_, i) => (
               <div key={i} className="flex items-center mx-8 text-white font-bold text-lg uppercase tracking-widest gap-4">
                 <ShoppingBag className="w-6 h-6" />
                 Najlepsze Ceny na Grupie FB
                 <ArrowRight className="w-6 h-6" />
                 Nowe Dostawy Co Tydzień
               </div>
             ))}
          </div>
        </div>

        {/* Gallery Section */}
        <section id="produkty" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="relative">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3 block">Galeria Premium</span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">Nasza Oferta</h2>
                <div className="w-20 h-1.5 bg-blue-600 mt-6 rounded-full" />
              </div>
              <p className="text-slate-600 text-lg max-w-xl text-right md:text-right hidden lg:block">
                To tylko ułamek tego, co oferujemy. Codziennie nowe okazje cenowe publikujemy na naszej grupie dla stałych odbiorców.
              </p>
            </div>

            {/* Bento Grid Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6">
              {PRODUCTS.map((url, idx) => {
                // Dynamic spanning logic for Bento look
                let spanClass = "col-span-1 row-span-1";
                if (idx === 0) spanClass = "col-span-2 row-span-2"; // First image is large
                if (idx === 2) spanClass = "col-span-1 row-span-2"; // Third is tall
                if (idx === 4) spanClass = "col-span-2 row-span-1"; // Fifth is wide
                if (idx === 7) spanClass = "col-span-1 row-span-2"; // Eighth is tall

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.6 }}
                    whileHover={{ scale: 0.98 }}
                    onClick={() => setSelectedImage(url)}
                    className={`group relative overflow-hidden rounded-[32px] cursor-pointer bg-slate-100 ${spanClass} shadow-md hover:shadow-2xl transition-all duration-500`}
                  >
                    <img 
                      src={url} 
                      alt={`Produkt ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-lg">M&P Hurtownia</span>
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <ExternalLink className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/groups/3616227628627709/"
                target="_blank"
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-xl shadow-blue-200"
              >
                Sprawdź Ceny na Grupie <Users className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
              onClick={() => setSelectedImage(null)}
            >
              <motion.button 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <ExternalLink className="w-8 h-8 rotate-45" />
              </motion.button>
              
              <motion.img 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                src={selectedImage} 
                alt="Maximised product" 
                className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Why Us Section */}
        <section id="o-nas" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src={PRODUCTS[9]} 
                  alt="Wholesale store" 
                  className="rounded-[40px] shadow-2xl relative z-10"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-600 rounded-full -z-0 opacity-10 animate-pulse" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-slate-300 rounded-[40px] -z-0" />
              </div>
              
              <div>
                <h2 className="font-display text-4xl font-bold text-slate-900 mb-8">Dlaczego warto z nami współpracować?</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      icon: <ShoppingBag className="w-6 h-6" />,
                      title: "Wyjątkowe Ceny",
                      desc: "Jako hurtownia zapewniamy ceny, których nie znajdziesz w tradycyjnych sklepach detalicznych."
                    },
                    {
                      icon: <MessageCircle className="w-6 h-6" />,
                      title: "Aktualne Oferty",
                      desc: "Nasza grupa na Facebooku jest codziennie aktualizowana o nowe dostawy i specjalne okazje."
                    },
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Lokalizacja: Warszawa",
                      desc: "Zapraszamy do kontaktu i odbioru osobistego w naszej siedzibie w Warszawie."
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[48px] p-12 md:p-20 text-center relative z-10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-blue-600 translate-x-[70%] -translate-y-[60%] blur-[100px] opacity-30" />
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
                Nie przegap najlepszych ofert!
              </h2>
              <p className="text-slate-300 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                Wszystkie aktualne ceny i najnowsze dostawy publikujemy najpierw na naszej grupie Facebook. Dołącz już teraz!
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.facebook.com/groups/3616227628627709/"
                target="_blank"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl hover:bg-slate-100 transition-all shadow-xl relative z-10"
              >
                Dołącz do Grupy Teraz <ExternalLink className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="kontakt" className="bg-slate-950 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-lg brightness-110" />
                <span className="font-display font-bold text-white text-xl">M&P Hurtownia</span>
              </div>
              <p className="leading-relaxed mb-8">
                Twój profesjonalny partner w handlu hurtowym. Zawsze najlepsze ceny i szeroki wybór produktów w Warszawie.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Kontakt</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-blue-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:729558704" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">729 558 704</a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-blue-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-white">Warszawa, Polska</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Media Społecznościowe</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100091753424881" target="_blank" className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/groups/3616227628627709/" target="_blank" className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all">
                  <Users className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Oferta</h4>
              <p className="text-sm italic">
                Informacja: Pełna oferta cenowa dostępna wyłącznie na grupie Facebook.
              </p>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-900 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} M&P Hurtownia Warszawa. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons for Mobile */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 sm:hidden z-[60]">
         <a 
          href="tel:729558704"
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a 
          href="https://www.facebook.com/groups/3616227628627709/"
          target="_blank"
          className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <Users className="w-6 h-6" />
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
