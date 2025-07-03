// components/InfoTable.tsx
'use client';

/**
 * Generic table component with a title, used to present small datasets within
 * the story sections.
 */

import { ReactNode } from 'react';

interface InfoTableProps {
  title: string;
  headers: string[];
  rows: ReactNode[][];
};

export default function InfoTable({ title, headers, rows }: InfoTableProps) {
  return (
    <div className="overflow-x-auto w-full max-w-4xl mx-auto rounded-lg shadow">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>

      <table className="min-w-full text-left border-collapse bg-black/10  text-sm sm:text-base">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="border-b border-black/20 px-4 py-2 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-black/5 even:bg-black/0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 border-b border-black/10">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
