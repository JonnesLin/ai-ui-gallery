export default function FuturisticSteps() {
  const steps = [
    { id: 1, title: "Initialize", description: "System boot sequence", status: "completed" },
    { id: 2, title: "Calibrate", description: "Sensor alignment", status: "current" },
    { id: 3, title: "Synchronize", description: "Network connection", status: "upcoming" },
    { id: 4, title: "Activate", description: "Full system online", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Scan", description: "Biometric verification", status: "completed" },
    { id: 2, title: "Analyze", description: "Data processing", status: "current" },
    { id: 3, title: "Execute", description: "Action initiated", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-8 tracking-wider uppercase">
            System Protocol
          </h2>
          <div className="bg-slate-900/50 backdrop-blur border border-blue-500/30 rounded-xl p-8 shadow-2xl shadow-blue-500/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent" />

            <div className="flex items-center justify-between relative z-10">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-16 h-16 rounded-lg flex items-center justify-center text-sm font-bold z-10 transition-all
                    ${step.status === "completed" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-blue-400 to-cyan-400 text-white shadow-xl shadow-blue-400/70 ring-2 ring-blue-400" : ""}
                    ${step.status === "upcoming" ? "bg-slate-800/50 text-slate-600 border border-slate-700" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : `0${step.id}`}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-bold uppercase tracking-wide ${
                      step.status === "upcoming" ? "text-slate-600" : "text-blue-400"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-8 left-1/2 w-full h-0.5 -z-0
                      ${step.status === "completed"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
                        : "bg-slate-800"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-8 tracking-wider uppercase">
            Process Sequence
          </h2>
          <div className="bg-slate-900/50 backdrop-blur border border-blue-500/30 rounded-xl p-8 shadow-2xl shadow-blue-500/10 max-w-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6 relative z-10">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-16 h-16 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all
                    ${step.status === "completed" ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-blue-400 to-cyan-400 text-white shadow-xl shadow-blue-400/70 ring-2 ring-blue-400" : ""}
                    ${step.status === "upcoming" ? "bg-slate-800/50 text-slate-600 border border-slate-700" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : `0${step.id}`}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-0.5 h-24 mt-3
                      ${step.status === "completed"
                        ? "bg-gradient-to-b from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50"
                        : "bg-slate-800"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-24 pt-4 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-bold uppercase tracking-wide ${
                    step.status === "upcoming" ? "text-slate-600" : "text-blue-400"
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
