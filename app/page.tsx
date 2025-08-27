import Image from "next/image"
import { InstagramEmbed } from "@/components/instagram-embed"
import { InstagramPost } from "@/components/instagram-post"

export default function SurequinosLanding() {
  return (
    <div className="min-h-screen bg-[#a13815]">
      {/* Logo */}
      <div className="flex justify-center items-center h-20 md:h-24">
        <Image
          src="/logo.png"
          alt="Talabartería Surequinos - Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-32 md:h-48 w-auto"
          priority
        />
      </div>

      {/* Main Image Area - Unificada con "El arte de ensillar" */}
      <section className="w-full overflow-hidden">
        <Image
          src="/arte.webp"
          alt="El arte de ensillar - Talabartería Surequinos"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[300px] md:h-auto object-cover md:object-contain"
          priority
        />
      </section>

      {/* Main Content Section */}
      <section className="w-full overflow-hidden">
        <Image
          src="/preparando.png"
          alt="Estamos preparando nuestra nueva página web"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[180px] md:h-auto object-cover md:object-contain"
          priority
        />
      </section>

      {/* Instagram Banner - Full Width */}
      <section className="w-full">
        <Image
          src="/siguenos.png"
          alt="Síguenos en instagram"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[60px] md:h-auto object-cover md:object-contain"
          priority
        />
      </section>

      {/* Instagram Posts Gallery */}
      <section className="pt-2 pb-2 md:py-6 bg-[#ddd0bd]">
        <div className="container mx-auto px-0 md:px-2">
          {/* Mobile: Instagram Posts Personalizados */}
          <div className="md:hidden">
            <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide px-2 snap-x snap-mandatory">
              <div className="flex-shrink-0 w-40 h-[160px] overflow-hidden snap-start">
                <InstagramPost
                  username="surequinos"
                  postImage="/primera.jpg"
                  isCarousel={false}
                  imagePosition="center top"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-[160px] overflow-hidden snap-start">
                <InstagramPost
                  username="surequinos"
                  postImage="/medio.jpg"
                  isCarousel={false}
                  imagePosition="second image"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-[160px] overflow-hidden snap-start">
                <InstagramPost
                  username="surequinos"
                  postImage="/tercero.jpg"
                  isCarousel={true}
                />
              </div>
            </div>
          </div>
          
          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="transform hover:scale-105 transition-transform duration-300 flex justify-center cursor-pointer relative group">
              <a 
                href="https://www.instagram.com/p/C85T9sUJjDH/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Ver post completo en Instagram"
              />
              <InstagramEmbed
                postUrl="https://www.instagram.com/p/C85T9sUJjDH/"
                width={500}
                height={600}
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 flex justify-center cursor-pointer relative group">
              <a 
                href="https://www.instagram.com/p/DL8fC_sOdw_/?img_index=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Ver post completo en Instagram"
              />
              <InstagramEmbed
                postUrl="https://www.instagram.com/p/DL8fC_sOdw_/?img_index=1"
                width={500}
                height={600}
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 flex justify-center cursor-pointer relative group">
              <a 
                href="https://www.instagram.com/p/C9tKqQKJhEj/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label="Ver post completo en Instagram"
              />
              <InstagramEmbed
                postUrl="https://www.instagram.com/p/C9tKqQKJhEj/"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 md:py-6 text-white">
        <div className="container mx-auto px-3 md:px-4">
          <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-4xl mx-auto">
            {/* Sedes */}
            <div className="md:pl-0 md:-ml-16">
              <h5 className="font-merriweather font-bold text-[10px] md:text-xl mb-1" style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af' }}>Sedes:</h5>
              <div style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af' }} className="text-[9px] leading-tight md:text-lg">
                <p style={{ margin: '0', padding: '0', lineHeight: '1.3' }}>Sabaneta: Cra. 46A #68 Sur-86</p>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.3' }}>Girardota: Auto Norte, Km 20 vía Girardota</p>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.3' }}>Llanogrande: km7 Mall Plaza Toledo</p>
              </div>
            </div>

            {/* Contacto */}
            <div className="md:ml-auto">
              <h5 className="font-merriweather font-bold text-[10px] md:text-xl mb-1" style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af' }}>Contacto:</h5>
              {/* Mobile: sin la palabra "Whatsapp" y en dos líneas */}
              <div style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af' }} className="text-[9px] leading-tight md:hidden">
                <p style={{ margin: '0', padding: '0', lineHeight: '1.3' }}>Sabaneta: +573163902625</p>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.3' }}>Girardota: +573245176873</p>
              </div>
              {/* Desktop: texto completo como antes */}
              <div style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af' }} className="hidden md:block md:text-lg">
                <p style={{ margin: '0', padding: '0', lineHeight: '1.3' }}>Whatsapp Sede Sabaneta: +573163902625</p>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.3' }}>Whatsapp Sede Girardota: +573245176873</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
