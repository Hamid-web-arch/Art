// src/features/seller/sergi-tesdiq/components/FileUploadZone.jsx
import { useRef, useState } from "react";

function UploadIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#900B00" strokeWidth="1.5">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

export default function FileUploadZone({ label, hint, accept, value, onChange }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file) => {
    if (file) onChange(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  return (
    <div>
      {label && (
        <p className="text-xs text-[#5F5E5E] uppercase tracking-wide mb-2 font-inter">
          {label}
        </p>
      )}

      {value ? (
        /* Fayl seçilmişdir */
        <div className="flex items-center justify-between bg-[#FFF5F5] border border-[#F5C6C6] rounded-lg px-4 py-3 font-inter">
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#900B00" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <div>
              <p className="text-sm font-medium text-black">{value.name}</p>
              <p className="text-xs text-[#5F5E5E]">
                {(value.size / 1024).toFixed(0)} KB
              </p>
            </div>
          </div>
          <button
            onClick={() => onChange(null)}
            className="text-[#900B00] hover:text-red-700"
          >
            <TrashIcon />
          </button>
        </div>
      ) : (
        /* Upload zonası */
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-2 py-8 cursor-pointer transition-colors ${
            dragging
              ? "border-[#900B00] bg-[#FFF5F5]"
              : "border-[#D9D9D9] bg-[#FAFAFA] hover:border-[#900B00] hover:bg-[#FFF5F5]"
          }`}
        >
          <UploadIcon />
          <p className="text-sm text-[#5F5E5E] font-inter">
            Faylı seçin və ya bura sürükləyin
          </p>
          {hint && (
            <p className="text-xs text-[#9C9C9C] font-inter">{hint}</p>
          )}
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
        </div>
      )}
    </div>
  );
}
