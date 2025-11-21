import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiThumbUp, HiThumbDown } from 'react-icons/hi'; // íconos rellenos!
import { HiOutlineThumbUp, HiOutlineThumbDown } from 'react-icons/hi';
import { FaUserCircle } from 'react-icons/fa';

export default function CommentCard({ comment, userVote, onVote }) {
  // Ya no usamos estado para los likes, vienen de 'comment'
  const { userAvatarUrl, username, date, text, likes, dislikes } = comment;
  const [isExpanded, setIsExpanded] = useState(false);

  // Lógica de "Ver más" (esto sí es estado local)
  const canTruncate = text.length > 150;
  const displayText = canTruncate && !isExpanded 
    ? text.substring(0, 150) + '...' 
    : text;

  // Determina si los íconos de like/dislike deben estar rellenos
  const LikeIcon = userVote === 'liked' ? HiThumbUp : HiOutlineThumbUp;
  const DislikeIcon = userVote === 'disliked' ? HiThumbDown : HiOutlineThumbDown;
  // Determina el color del ícono
  const likeColor = userVote === 'liked' ? 'text-blue-600' : 'text-gray-600';
  const dislikeColor = userVote === 'disliked' ? 'text-red-600' : 'text-gray-600';

  return (
    <div className="bg-slate-100 rounded-xl p-4 w-full shadow-sm">
      
      {/* --- Encabezado --- */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          {userAvatarUrl ? (
            <img src={userAvatarUrl} alt={username} className="w-8 h-8 rounded-full object-cover" />
          ) : (
            <FaUserCircle className="w-8 h-8 text-gray-400" />
          )}
          <span className="font-semibold text-sm text-gray-900">{username}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">{date}</span>
          <button className="text-gray-500 hover:text-gray-800" aria-label="Opciones">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      {/* --- Cuerpo  --- */}
      <div className="mb-3">
        <p className="text-sm text-gray-700 leading-relaxed">
          {displayText}
          {canTruncate && (
            <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-600 font-medium ml-1 hover:underline">
              {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
          )}
        </p>
      </div>

      {/* --- Pie --- */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onVote('like')}
          className={`flex items-center gap-1.5 ${likeColor} hover:text-blue-600 transition-colors group`}
        >
          <LikeIcon className="w-5 h-5 group-hover:scale-110" />
          <span className="text-sm font-medium">{likes}</span>
        </button>
        <button 
          onClick={() => onVote('dislike')}
          className={`flex items-center gap-1.5 ${dislikeColor} hover:text-red-600 transition-colors group`}
        >
          <DislikeIcon className="w-5 h-5 group-hover:scale-110" />
          <span className="text-sm font-medium">{dislikes}</span>
        </button>
      </div>

    </div>
  );
}