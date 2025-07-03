// components/SectionHeader.tsx
'use client';

/** Simple centred heading used at the top of section intro/outro screens. */

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">
        {title}
      </h2>
      <div className="mx-auto h-1 w-24 bg-black/60 rounded-full" />
    </div>
  );
}
