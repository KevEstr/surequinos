"use client"

import Image from "next/image"
import { useState } from "react"

export function ComunicadoModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Botón compacto para ver documento */}
      <button
        className="flex items-center gap-2 md:gap-3 bg-[#a13815] text-[#d3c4af] px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:bg-[#8a2f12] transition-colors"
        onClick={() => setIsOpen(true)}
        style={{ fontFamily: '"Merriweather24pt"' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="text-sm md:text-lg">Ver comunicado</span>
      </button>

      {/* Modal/Lightbox */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-50"
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar"
          >
            ×
          </button>
          
          <div 
            className="relative max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/comunicado.jpg"
              alt="Comunicado Oficial SUREQUINOS"
              width={800}
              height={1200}
              className="w-auto h-auto max-h-[90vh] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}
