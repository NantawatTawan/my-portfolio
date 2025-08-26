// src/components/SkillBadge.tsx
import React from 'react';

interface SkillBadgeProps {
  children: React.ReactNode;
}

export default function SkillBadge({ children }: SkillBadgeProps) {
  return (
    <span className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-md">
      {children}
    </span>
  );
}