import React, { useState } from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa'; // Ícono de fallback

export default function CommentCard({ comment }) {
  const { userAvatarUrl, username, date, text, likes, dislikes } = comment;

  const [isExpanded, setIsExpanded] = useState(false);

  const canTruncate = text.length > 150;
  const displayText = canTruncate && !isExpanded 
    ? text.substring(0, 150) + '...' 
    : text;

  return (
    <div className="bg-slate-100 rounded-xl p-4 w-full shadow-sm">
      
      {/* --- Encabezado --- */}
      <div className="flex items-start justify-between mb-2">
        {/* Info del usuario (Avatar + Nombre) */}
        <div className="flex items-center gap-2">
          {userAvatarUrl ? (
            <img
              src={userAvatarUrl}
              alt={username}
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }} // Esconde la img si falla
            />
          ) : (
            // Ícono de fallback si no hay avatar
            <FaUserCircle className="w-8 h-8 text-gray-400" />
          )}
          
          <span className="font-semibold text-sm text-gray-900">{username}</span>
        </div>

        {/* Fecha y Opciones */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">{date}</span>
          <button 
            className="text-gray-500 hover:text-gray-800"
            aria-label="Opciones de comentario"
          >
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      {/* --- Cuerpo del Comentario --- */}
      <div className="mb-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          {displayText}
          {canTruncate && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 font-medium ml-1 hover:underline"
            >
              {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>
      </div>

      {/* --- Pie (Likes/Dislikes) --- */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors group">
          <HiOutlineThumbUp className="w-5 h-5 group-hover:scale-110" />
          <span className="text-sm font-medium">{likes}</span>
        </button>
        <button className="flex items-center gap-1.5 text-gray-600 hover:text-red-600 transition-colors group">
          <HiOutlineThumbDown className="w-5 h-5 group-hover:scale-110" />
          <span className="text-sm font-medium">{dislikes}</span>
        </button>
      </div>

    </div>
  );
}