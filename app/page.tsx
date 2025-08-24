import Image from "next/image"

export default function SurequinosLanding() {
  return (
    <div className="min-h-screen bg-white">
                  {/* Logo */}
      <div className="bg-[#a13815] flex justify-center items-center h-24">
        <Image
          src="/logo.png"
          alt="Talabartería Surequinos - Logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-48 w-auto"
          priority
        />
      </div>

      {/* Main Image Area - Unificada con "El arte de ensillar" */}
      <section className="w-full">
        <Image
          src="/arte.png"
          alt="El arte de ensillar - Talabartería Surequinos"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain"
          priority
        />
      </section>

      {/* Main Content Section */}
      <section className="w-full">
        <Image
          src="/preparando.png"
          alt="Estamos preparando nuestra nueva página web"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain"
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
          className="w-full h-auto object-contain"
          priority
        />
      </section>

      {/* Product Gallery */}
      <section className="py-6 md:py-12 bg-[#ddd0bd]">
        <div className="container mx-auto px-4">
          {/* Mobile: Horizontal Scrollable, Desktop: Grid */}
          <div className="md:hidden">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center">
              <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/Recurso 1.png"
                  alt="Producto talabartería 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-h-40"
                  priority
                />
              </div>
              <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/Recurso 2.png"
                  alt="Producto talabartería 2"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-h-40"
                  priority
                />
              </div>
              <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/Recurso 3.png"
                  alt="Producto talabartería 3"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-h-40"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="transform hover:scale-105 transition-transform duration-300 flex justify-center">
              <Image
                src="/Recurso 1.png"
                alt="Producto talabartería 1"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto"
                priority
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 flex justify-center">
              <Image
                src="/Recurso 2.png"
                alt="Producto talabartería 2"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto"
                priority
              />
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300 flex justify-center">
              <Image
                src="/Recurso 3.png"
                alt="Producto talabartería 3"
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#a13815] py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sedes */}
            <div className="md:pl-0 md:-ml-16">
              <h5 className="font-merriweather font-bold text-lg mb-1" style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af' }}>Sedes:</h5>
              <div style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af', fontSize: '16px' }}>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.4' }}>Sabaneta: Cra. 46A #68 Sur-86</p>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.4' }}>Girardota: Auto Norte, Km 20 vía Girardota</p>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.4' }}>Llanogrande: km7 Mall Plaza Toledo</p>
              </div>
            </div>

            {/* Contacto */}
            <div className="md:ml-auto">
              <h5 className="font-merriweather font-bold text-lg mb-1" style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af' }}>Contacto:</h5>
              <div style={{ fontFamily: '"Merriweather24pt"', color: '#d3c4af', fontSize: '16px' }}>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.4' }}>Whatsapp Sede Sabaneta: +573163902625</p>
                <p style={{ margin: '0', padding: '0', lineHeight: '1.4' }}>Whatsapp Sede Girardota: +57</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
