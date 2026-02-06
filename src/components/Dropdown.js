import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
export default function CustomSelect({ label, options = [], onChange, selectedVal }) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    const filtered = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()));
    const handleSelect = (val) => {
        onChange(val);
        setIsOpen(false);
        setSearch("");
    };
    const selectedLabel = options.find(o => o.value === selectedVal)?.label;
    return (_jsxs("div", { className: "w-full items-center flex gap-5", ref: wrapperRef, children: [label && _jsx("label", { className: "block mb-1 text-sm font-semibold text-gray-600", children: label }), _jsxs("div", { onClick: () => setIsOpen(!isOpen), className: `border p-2 rounded flex justify-between cursor-pointer bg-white transition-all w-full
          ${isOpen ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300 hover:border-gray-400'}`, children: [_jsx("span", { className: selectedLabel ? "text-gray-800" : "text-gray-400", children: selectedLabel || "Pilih opsi..." }), _jsx("svg", { className: `w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2" }) })] }), isOpen && (_jsxs("div", { className: "absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded shadow-lg max-h-60 overflow-auto", children: [_jsx("div", { className: "p-2 border-b sticky top-0 bg-white", children: _jsx("input", { autoFocus: true, type: "text", placeholder: "Cari...", className: "w-full p-1 border rounded text-sm focus:outline-none focus:border-blue", value: search, onChange: (e) => setSearch(e.target.value) }) }), _jsx("ul", { children: filtered.length > 0 ? (filtered.map((opt, idx) => (_jsx("li", { onClick: () => handleSelect(opt), className: `p-2 text-sm cursor-pointer hover:bg-blue-50 
                    ${selectedVal === opt.value ? 'bg-blue-100 font-medium text-blue-700' : 'text-gray-700'}`, children: opt.label }, idx)))) : (_jsx("li", { className: "p-2 text-sm text-gray-400 text-center", children: "Gak ketemu bro" })) })] }))] }));
}
