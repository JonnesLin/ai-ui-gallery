export default function ThreeDSteps() {
  const steps = [
    { id: 1, title: "Start", description: "Begin your journey", status: "completed", icon: "🚀" },
    { id: 2, title: "Build", description: "Create something amazing", status: "current", icon: "🔨" },
    { id: 3, title: "Test", description: "Verify quality", status: "upcoming", icon: "✓" },
    { id: 4, title: "Launch", description: "Go live", status: "upcoming", icon: "🎉" },
  ];

  const verticalSteps = [
    { id: 1, title: "Register", description: "Create your account", status: "completed", icon: "👤" },
    { id: 2, title: "Setup", description: "Configure settings", status: "current", icon: "⚙️" },
    { id: 3, title: "Connect", description: "Link your data", status: "upcoming", icon: "🔗" },
    { id: 4, title: "Activate", description: "Start using", status: "upcoming", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-lg">Horizontal Steps</h2>
          <div className="relative">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle with 3D effect */}
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold z-10 transition-all
                    shadow-[0_8px_0_0_rgba(0,0,0,0.2),0_12px_20px_-8px_rgba(0,0,0,0.3)]
                    hover:translate-y-1 hover:shadow-[0_4px_0_0_rgba(0,0,0,0.2),0_6px_12px_-4px_rgba(0,0,0,0.3)]
                    ${step.status === "completed"
                      ? "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white"
                      : ""}
                    ${step.status === "current"
                      ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white animate-pulse scale-110"
                      : ""}
                    ${step.status === "upcoming"
                      ? "bg-gradient-to-br from-slate-600 to-slate-700 text-slate-400"
                      : ""}
                  `}>
                    {step.icon}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-bold drop-shadow ${
                      step.status === "upcoming" ? "text-slate-400" : "text-white"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line with 3D effect */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-1/2 w-full h-2 -z-0">
                      <div className={`
                        h-full rounded-full shadow-[0_2px_0_0_rgba(0,0,0,0.2)]
                        ${step.status === "completed"
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                          : "bg-gradient-to-r from-slate-700 to-slate-700"}
                      `} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-lg">Vertical Steps</h2>
          <div className="max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6 relative">
                {/* Step Circle with 3D effect */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 transition-all
                    shadow-[0_8px_0_0_rgba(0,0,0,0.2),0_12px_20px_-8px_rgba(0,0,0,0.3)]
                    hover:translate-y-1 hover:shadow-[0_4px_0_0_rgba(0,0,0,0.2),0_6px_12px_-4px_rgba(0,0,0,0.3)]
                    ${step.status === "completed"
                      ? "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white"
                      : ""}
                    ${step.status === "current"
                      ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white animate-pulse scale-110"
                      : ""}
                    ${step.status === "upcoming"
                      ? "bg-gradient-to-br from-slate-600 to-slate-700 text-slate-400"
                      : ""}
                  `}>
                    {step.icon}
                  </div>

                  {/* Connector Line with 3D effect */}
                  {index < verticalSteps.length - 1 && (
                    <div className="w-2 mt-3 flex-1 min-h-[80px]">
                      <div className={`
                        w-full h-full rounded-full shadow-[2px_0_0_0_rgba(0,0,0,0.2)]
                        ${step.status === "completed"
                          ? "bg-gradient-to-b from-emerald-500 to-emerald-600"
                          : "bg-gradient-to-b from-slate-700 to-slate-700"}
                      `} />
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-4 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-bold drop-shadow ${
                    step.status === "upcoming" ? "text-slate-400" : "text-white"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps with Icons and Descriptions */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 drop-shadow-lg">With Icons & Descriptions</h2>
          <div className="bg-slate-800/50 backdrop-blur rounded-3xl p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle with 3D effect */}
                  <div className={`
                    w-20 h-20 rounded-3xl flex items-center justify-center text-3xl font-bold z-10 transition-all
                    shadow-[0_10px_0_0_rgba(0,0,0,0.2),0_15px_25px_-10px_rgba(0,0,0,0.4)]
                    hover:translate-y-2 hover:shadow-[0_5px_0_0_rgba(0,0,0,0.2),0_8px_15px_-5px_rgba(0,0,0,0.4)]
                    ${step.status === "completed"
                      ? "bg-gradient-to-br from-emerald-400 to-emerald-600 text-white"
                      : ""}
                    ${step.status === "current"
                      ? "bg-gradient-to-br from-blue-400 to-blue-600 text-white scale-110"
                      : ""}
                    ${step.status === "upcoming"
                      ? "bg-gradient-to-br from-slate-600 to-slate-700 text-slate-400"
                      : ""}
                  `}>
                    {step.icon}
                  </div>

                  {/* Step Content */}
                  <div className="mt-5 text-center">
                    <p className={`text-base font-bold drop-shadow ${
                      step.status === "upcoming" ? "text-slate-400" : "text-white"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Connector Line with 3D effect */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-1/2 w-full h-2 -z-0">
                      <div className={`
                        h-full rounded-full shadow-[0_2px_0_0_rgba(0,0,0,0.2)]
                        ${step.status === "completed"
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                          : "bg-gradient-to-r from-slate-700 to-slate-700"}
                      `} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
