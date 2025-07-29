import Image from "next/image"

export default function SurequinosLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#a13815] py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-white text-2xl font-bold tracking-wider">
              <span className="text-lg">Talabartería</span>
              <br />
              <span className="text-3xl font-bold">SUREQUINOS</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Image Area */}
      <section className="bg-gray-200 h-[500px] md:h-[600px]">
        <div className="w-full h-full">
          <Image
            src="/principal.jpg"
            alt="Talabartería Surequinos - Imagen principal"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover object-[center_35%]"
            priority
          />
        </div>
      </section>

      {/* "El arte de ensillar" Banner - Full Width */}
      <section className="relative">
        <div className="py-6" style={{ background: 'linear-gradient(to bottom, #f8f6f4 0%, #cf9a8d 20%, #a13815 40%, #632416 75%, #2f1d17 100%)' }}>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl text-[#F5E6D3] font-great-vibes">
              El <span className="italic">arte</span> de <span className="italic">ensillar</span>
            </h2>
          </div>
        </div>
        {/* Línea de separación */}
        <div className="h-1 bg-[#2f1d17]"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 relative" style={{ backgroundImage: 'url(/fondo.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-merriweather font-normal tracking-wide">ESTAMOS PREPARANDO</h3>
            <h4 className="text-2xl md:text-3xl font-merriweather italic text-[#F5E6D3]">NUESTRA NUEVA PÁGINA WEB</h4>
            <p className="text-lg md:text-xl font-merriweather text-[#F5E6D3] max-w-2xl mx-auto leading-relaxed">
              Muy pronto podrás conocer cada detalle de
              <br />
              nuestras sillas, riendas, talabartería y más.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram Banner - Full Width */}
      <section className="bg-[#a13815] py-6">
        <div className="text-center">
          <p className="text-xl md:text-2xl font-merriweather text-white">
            Síguenos <span className="font-great-vibes italic text-2xl md:text-3xl">en </span>
            <span className="font-great-vibes italic text-2xl md:text-3xl">instagram</span>
          </p>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-12 bg-[#ddd0bd]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Product Images */}
            <div className="transform hover:scale-105 transition-transform duration-300">
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
            <div className="transform hover:scale-105 transition-transform duration-300">
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
            <div className="transform hover:scale-105 transition-transform duration-300">
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
      <footer className="bg-[#a13815] py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sedes */}
            <div>
              <h5 className="font-merriweather font-bold text-lg mb-4">Sedes:</h5>
              <div className="space-y-2 font-myriad text-sm">
                <p>Sabaneta: Cra. 43A #65 Sur-86</p>
                <p>Girardota: Auto Norte Km 20 vía Girardota</p>
                <p>Abingardota: Km 7 vía Finca Toledo</p>
              </div>
            </div>

            {/* Contacto */}
            <div className="text-right">
              <h5 className="font-merriweather font-bold text-lg mb-4">Contacto:</h5>
              <div className="space-y-2 font-myriad text-sm">
                <p>WhatsApp Sede Sabaneta: +57 3163902629</p>
                <p>WhatsApp Sede Girardota: +57</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
