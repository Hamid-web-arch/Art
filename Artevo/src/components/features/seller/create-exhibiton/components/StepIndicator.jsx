// src/features/seller/sergi-tesdiq/components/StepIndicator.jsx

const steps = [
  { id: 1, label: "Təsdiq Məlumatları" },
  { id: 2, label: "Yoxlanış" },
  { id: 3, label: "Tamamlandı" },
];

export default function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center gap-0 font-inter mb-8">
      {steps.map((step, index) => {
        const isDone = currentStep > step.id;
        const isActive = currentStep === step.id;

        return (
          <div key={step.id} className="flex items-center">
            {/* Step nöqtəsi + label */}
            <div className="flex items-center gap-2">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 ${
                  isDone
                    ? "bg-[#900B00] text-white"
                    : isActive
                    ? "border-2 border-[#900B00] text-[#900B00]"
                    : "border-2 border-[#C4C4C4] text-[#C4C4C4]"
                }`}
              >
                {isDone ? (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`text-sm whitespace-nowrap ${
                  isActive
                    ? "text-[#900B00] font-medium"
                    : isDone
                    ? "text-[#900B00]"
                    : "text-[#C4C4C4]"
                }`}
              >
                {step.label}
              </span>
            </div>

            {/* Xətt (sonuncu step-dən sonra yoxdur) */}
            {index < steps.length - 1 && (
              <div
                className={`w-16 h-px mx-3 ${
                  currentStep > step.id ? "bg-[#900B00]" : "bg-[#C4C4C4]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
