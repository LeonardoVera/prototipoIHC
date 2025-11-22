// src/components/itinerary/ActivityTimeline.jsx
import React from 'react';
import ActivityItem from './ActivityItem';

export default function ActivityTimeline({ activities }) {
  if (!activities || activities.length === 0) return null;

  return (
    <div className="flex flex-col mt-2">
      {activities.map((act, index) => (
        <ActivityItem 
          key={index}
          time={act.time}
          placeName={act.placeName}
          placeId={act.placeId}
        />
      ))}
    </div>
  );
}