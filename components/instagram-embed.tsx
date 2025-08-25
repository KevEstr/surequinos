'use client'

import { useEffect } from 'react'

// Declaración de tipos para Instagram Embed API
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void
      }
    }
  }
}

interface InstagramEmbedProps {
  postUrl: string
  width?: number
  height?: number
}

export function InstagramEmbed({ postUrl, width = 400, height = 500 }: InstagramEmbedProps) {
  useEffect(() => {
    // Cargar el script oficial de Instagram si no está cargado
    if (!window.instgrm) {
      const script = document.createElement('script')
      script.src = '//www.instagram.com/embed.js'
      script.async = true
      document.head.appendChild(script)
    } else {
      // Si ya está cargado, actualizar los embeds
      window.instgrm.Embeds.process()
    }
  }, [postUrl])

  return (
    <div className="instagram-embed-container" style={{ width: '100%', maxWidth: width }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          margin: '0',
          padding: '0',
          width: '100%',
          maxWidth: '100%',
          minWidth: 'auto'
        }}
      />
    </div>
  )
}
