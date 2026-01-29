export default function LuxurySteps() {
  const steps = [
    { id: 1, title: "Consultation", description: "Personal style assessment", status: "completed" },
    { id: 2, title: "Selection", description: "Curated collection review", status: "current" },
    { id: 3, title: "Customization", description: "Bespoke modifications", status: "upcoming" },
    { id: 4, title: "Delivery", description: "White glove service", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Reserve", description: "Secure your appointment", status: "completed" },
    { id: 2, title: "Experience", description: "Exclusive preview", status: "current" },
    { id: 3, title: "Acquire", description: "Complete purchase", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-serif text-amber-400 mb-8 tracking-wide">Your Journey</h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/30 rounded-lg p-10 shadow-2xl">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-sm font-semibold z-10 transition-all border-2
                    ${step.status === "completed" ? "bg-gradient-to-br from-amber-500 to-yellow-600 text-slate-900 border-amber-400 shadow-lg shadow-amber-500/50" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 border-amber-300 shadow-xl shadow-amber-500/70 scale-110" : ""}
                    ${step.status === "upcoming" ? "bg-slate-800 text-slate-600 border-slate-700" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-serif tracking-wide ${
                      step.status === "upcoming" ? "text-slate-600" : "text-amber-400"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-7 left-1/2 w-full h-px -z-0
                      ${step.status === "completed"
                        ? "bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-500/50"
                        : "bg-slate-700"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-serif text-amber-400 mb-8 tracking-wide">Acquisition Process</h2>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-amber-500/30 rounded-lg p-10 shadow-2xl max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-all border-2
                    ${step.status === "completed" ? "bg-gradient-to-br from-amber-500 to-yellow-600 text-slate-900 border-amber-400 shadow-lg shadow-amber-500/50" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 border-amber-300 shadow-xl shadow-amber-500/70 scale-110" : ""}
                    ${step.status === "upcoming" ? "bg-slate-800 text-slate-600 border-slate-700" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-px h-24 mt-3
                      ${step.status === "completed"
                        ? "bg-gradient-to-b from-amber-500 to-amber-600 shadow-lg shadow-amber-500/50"
                        : "bg-slate-700"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-24 pt-3 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-serif tracking-wide ${
                    step.status === "upcoming" ? "text-slate-600" : "text-amber-400"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
