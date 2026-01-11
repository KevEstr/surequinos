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
          className="w-full h-[170px] md:h-auto object-cover md:object-contain"
          priority
        />
      </section>

      {/* Comunicado Oficial - Título en franja naranja */}
      <section className="w-full bg-[#a13815] py-5 md:py-8">
        <h2
          className="text-center text-[#d3c4af] text-2xl md:text-5xl italic"
          style={{ fontFamily: '"Merriweather24pt"' }}
        >
          Comunicado Oficial
        </h2>
      </section>

      {/* Comunicado Oficial - Contenido */}
      <section className="w-full bg-[#ddd0bd] py-6 md:py-10">
        <div className="px-5 md:px-12 lg:px-24 max-w-6xl mx-auto">
          <div
            className="text-[#3d2314] text-sm md:text-lg leading-relaxed space-y-4 md:space-y-5 text-center font-medium"
            style={{ fontFamily: '"Merriweather24pt"' }}
          >
            <p>
              <span className="font-bold">SUREQUINOS®</span> informa a sus clientes, distribuidores y al público en general que la marca SUREQUINOS® se encuentra debidamente registrada ante la Superintendencia de Industria y Comercio de Colombia y protegida por la normativa vigente en materia de propiedad industrial.
            </p>

            <p>
              En desarrollo de sus labores de vigilancia y defensa marcaria, SUREQUINOS® ha identificado el uso no autorizado de su marca y la presunta reproducción de sus productos por parte del señor <span className="font-bold text-[#a13815]">Hugo Rivera</span>, sin autorización, licencia ni vínculo comercial alguno con la empresa. Estas conductas se encuentran actualmente bajo análisis y siendo objeto de las acciones legales correspondientes.
            </p>

            <p>
              En consecuencia, advertimos que los productos ofrecidos por el mencionado tercero <span className="font-bold italic text-[#a13815]">no son fabricados, distribuidos ni garantizados por SUREQUINOS®</span>, por lo cual la marca no se hace responsable por su calidad, autenticidad, procedencia o condiciones.
            </p>

            <p>
              Recordamos que los únicos canales oficiales de comercialización de SUREQUINOS® son su página web <a href="https://www.surequinos.com/" target="_blank" rel="noopener noreferrer" className="text-[#a13815] font-bold underline hover:text-[#5c1a0a] transition-colors">www.surequinos.com</a>, sus sedes físicas y líneas de contacto oficiales.
            </p>

            <p>
              SUREQUINOS® reafirma su compromiso con la autenticidad, la calidad y la protección de sus consumidores, y continuará ejerciendo las acciones necesarias para prevenir y sancionar cualquier uso no autorizado de su marca. Agradecemos a nuestros clientes y aliados por su confianza y por adquirir siempre productos a través de los canales oficiales.
            </p>
          </div>
        </div>
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
