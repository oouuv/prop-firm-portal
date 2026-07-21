interface ComparisonTableProps {
  headers: string[];
  rows: string[][];
}

export function ComparisonTable({ headers, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse text-[0.9rem]">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="bg-accent-blue/8 text-accent-blue px-3.5 py-2.5 text-left font-semibold border-b-2 border-border"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-accent-blue/4 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3.5 py-2.5 border-b border-border text-text-secondary">
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
