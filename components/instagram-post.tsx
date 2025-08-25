import Image from "next/image"
import { Heart, MessageCircle, Bookmark, MoreHorizontal } from "lucide-react"

interface InstagramPostProps {
  imageSrc: string
  alt: string
  likes: string
  comments: string
  caption: string
  username: string
  timeAgo: string
  instagramUrl: string
}

export function InstagramPost({
  imageSrc,
  alt,
  likes,
  comments,
  caption,
  username,
  timeAgo,
  instagramUrl
}: InstagramPostProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">TS</span>
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-900">{username}</p>
            <p className="text-xs text-gray-500">{timeAgo}</p>
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>

      {/* Image */}
      <div className="relative">
        <Image
          src={imageSrc}
          alt={alt}
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-3 right-3">
          <Bookmark className="w-6 h-6 text-white drop-shadow-lg cursor-pointer" />
        </div>
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center space-x-4 mb-3">
          <Heart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-red-500 transition-colors" />
          <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer hover:text-blue-500 transition-colors" />
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm text-gray-900 mb-2">{likes} me gusta</p>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm text-gray-900">{username}</span>
          <span className="text-sm text-gray-700 ml-2">{caption}</span>
        </div>

        {/* Comments */}
        <p className="text-sm text-gray-500 mb-3">
          Ver los {comments} comentarios
        </p>

        {/* Time */}
        <p className="text-xs text-gray-400">{timeAgo}</p>

        {/* Instagram Link Button */}
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
        >
          Ver en Instagram
        </a>
      </div>
    </div>
  )
}
