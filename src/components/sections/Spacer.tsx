import React from 'react';

export function Spacer({ className }: { className?: string }) {
  return (
    <div className="w-full relative" data-component="spacer">
      <div className={className || "h-10 md:h-10 lg:h-10"}></div>
    </div>
  );
}
