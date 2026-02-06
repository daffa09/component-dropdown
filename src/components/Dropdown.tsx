import { useState, useEffect, useRef } from "react";

type Option = {
  label: string;
  value: string | number;
};

export default function CustomSelect({
  label,
  options = [],
  onChange,
  selectedVal
}: {
  label?: string;
  options: Option[];
  onChange: (val: any) => void;
  selectedVal?: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (val: Option) => {
    onChange(val);
    setIsOpen(false);
    setSearch("");
  };

  const selectedLabel = options.find(o => o.value === selectedVal)?.label;

  return (
    <div className="w-full items-center flex gap-5" ref={wrapperRef}>
      {label && <label className="block mb-1 text-sm font-semibold text-gray-600">{label}</label>}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`border p-2 rounded flex justify-between cursor-pointer bg-white transition-all w-full
          ${isOpen ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'}`}
      >
        <span className={selectedLabel ? "text-gray-800" : "text-gray-400"}>
          {selectedLabel || "Pilih opsi..."}
        </span>

        <svg className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto">

          <div className="p-2 border-b sticky top-0 bg-white">
            <input
              autoFocus
              type="text"
              placeholder="Cari..."
              className="w-full p-1 border rounded text-sm focus:outline-none focus:border-blue"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <ul>
            {filtered.length > 0 ? (
              filtered.map((opt, idx) => (
                <li
                  key={idx}
                  onClick={() => handleSelect(opt)}
                  className={`p-2 text-sm cursor-pointer hover:bg-blue-50 
                    ${selectedVal === opt.value ? 'bg-blue-100 font-medium text-blue-700' : 'text-gray-700'}`}
                >
                  {opt.label}
                </li>
              ))
            ) : (
              <li className="p-2 text-sm text-gray-400 text-center">Gak ketemu bro</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}