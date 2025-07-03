// components/FactHighlight.tsx
'use client';

/** Lightweight component for emphasising a single fact/value pair. */

export default function FactHighlight({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/70 rounded-xl p-6 text-center shadow-lg max-w-xs">
      <p className="text-4xl sm:text-5xl font-bold text-black mb-2">{value}</p>
      <p className="text-black/80 text-sm sm:text-base font-medium">{label}</p>
    </div>
  );
}