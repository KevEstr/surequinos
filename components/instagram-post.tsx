'use client'

import Image from 'next/image'
import { useState } from 'react'

interface InstagramPostProps {
  profileImage?: string
  username: string
  followers?: string
  postImage: string
  isCarousel?: boolean
  imagePosition?: string
}

export function InstagramPost({ 
  profileImage, 
  username, 
  followers, 
  postImage, 
  isCarousel = false,
  imagePosition = "center"
}: InstagramPostProps) {
  const [imageError, setImageError] = useState(false)

  // Debug temporal
  console.log('InstagramPost render:', { postImage, imageError })

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/surequinos/', '_blank')
  }

  // Determinar la posición CSS basada en imagePosition
  const getImageStyle = () => {
    if (imagePosition === "center top") {
      return { transform: 'translateY(-10%)' }
    }
    if (imagePosition === "second image") {
      return { transform: 'translateY(-15%)' }
    }
    return {}
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-full border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-1 border-b border-gray-200">
        <div className="flex items-center space-x-1.5">
          <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center">
            <Image
              src="/ig.jpg"
              alt={`${username} profile`}
              width={20}
              height={20}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-[11px] text-gray-900">Surequinos</div>
            {followers && (
              <div className="text-[9px] text-gray-500">{followers}</div>
            )}
          </div>
        </div>
        <button 
          onClick={handleInstagramClick}
          className="text-gray-600 hover:text-pink-500 transition-colors"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </button>
      </div>

      {/* Post Image */}
      <div className="relative flex-1 overflow-hidden">
        <a 
          href="https://www.instagram.com/surequinos/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full cursor-pointer"
        >
          <Image
            src={imageError ? "/placeholder.jpg" : postImage}
            alt={`Post de ${username}`}
            width={192}
            height={150}
            className="w-full h-full object-cover"
            style={getImageStyle()}
            unoptimized={postImage.startsWith('http')}
            onError={() => {
              console.log('Image error for:', postImage)
              setImageError(true)
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', postImage)
            }}
          />
        </a>
        {isCarousel && (
          <div className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md">
            <svg className="w-2.5 h-2.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
