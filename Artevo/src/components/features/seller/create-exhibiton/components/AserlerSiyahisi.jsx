// src/features/seller/sergi-tesdiq/components/AserlerSiyahisi.jsx
import { useRef } from "react";

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#900B00" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

export default function AserlerSiyahisi({ files, onChange }) {
  const inputRef = useRef(null);

  const addFile = (newFile) => {
    if (newFile) onChange([...files, newFile]);
  };

  const removeFile = (index) => {
    onChange(files.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-3 font-inter">
      {/* Mövcud fayllar */}
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-[#FFF5F5] border border-[#F5C6C6] rounded-lg px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <FileIcon />
            <div>
              <p className="text-sm font-medium text-black">{file.name}</p>
              <p className="text-xs text-[#5F5E5E]">
                {(file.size / 1024).toFixed(0)} KB
              </p>
            </div>
          </div>
          <button
            onClick={() => removeFile(index)}
            className="text-[#900B00] hover:text-red-700"
          >
            <TrashIcon />
          </button>
        </div>
      ))}

      {/* Yeni fayl əlavə et */}
      <button
        onClick={() => inputRef.current?.click()}
        className="w-full border border-dashed border-[#D9D9D9] rounded-lg py-3 text-sm text-[#5F5E5E] hover:border-[#900B00] hover:text-[#900B00] transition-colors"
      >
        + Yeni fayl əlavə et
      </button>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          addFile(e.target.files?.[0]);
          e.target.value = "";
        }}
      />
    </div>
  );
}
