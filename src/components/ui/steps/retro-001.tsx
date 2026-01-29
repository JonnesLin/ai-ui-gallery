export default function RetroSteps() {
  const steps = [
    { id: 1, title: "Login", description: "Enter your credentials", status: "completed" },
    { id: 2, title: "Dashboard", description: "View your overview", status: "current" },
    { id: 3, title: "Settings", description: "Configure options", status: "upcoming" },
    { id: 4, title: "Complete", description: "All set to go", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Select Game", description: "Choose your adventure", status: "completed" },
    { id: 2, title: "Load Level", description: "Preparing world", status: "current" },
    { id: 3, title: "Play", description: "Start gaming", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a2e] p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-[#f39c12] mb-8 font-mono" style={{ textShadow: "2px 2px 0 #000" }}>
            HORIZONTAL_STEPS.EXE
          </h2>
          <div className="bg-[#16213e] border-4 border-[#0f3460] rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-14 h-14 rounded-sm flex items-center justify-center text-base font-bold z-10 font-mono border-2 transition-all
                    ${step.status === "completed" ? "bg-[#00ff00] text-black border-[#00ff00]" : ""}
                    ${step.status === "current" ? "bg-[#f39c12] text-black border-[#f39c12] animate-pulse" : ""}
                    ${step.status === "upcoming" ? "bg-[#1a1a2e] text-gray-600 border-gray-700" : ""}
                  `} style={step.status !== "upcoming" ? { textShadow: "1px 1px 0 rgba(0,0,0,0.5)" } : {}}>
                    {step.status === "completed" ? "OK" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-bold font-mono uppercase ${
                      step.status === "completed" ? "text-[#00ff00]" :
                      step.status === "current" ? "text-[#f39c12]" :
                      "text-gray-600"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 font-mono">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-7 left-1/2 w-full h-1 -z-0
                      ${step.status === "completed" ? "bg-[#00ff00]" : "bg-gray-800"}
                    `} style={{
                      backgroundImage: step.status === "completed" ? "repeating-linear-gradient(90deg, #00ff00 0px, #00ff00 4px, transparent 4px, transparent 8px)" : undefined
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-bold text-[#f39c12] mb-8 font-mono" style={{ textShadow: "2px 2px 0 #000" }}>
            VERTICAL_STEPS.EXE
          </h2>
          <div className="bg-[#16213e] border-4 border-[#0f3460] rounded-lg p-8 shadow-lg max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-5 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-14 h-14 rounded-sm flex items-center justify-center text-base font-bold flex-shrink-0 font-mono border-2 transition-all
                    ${step.status === "completed" ? "bg-[#00ff00] text-black border-[#00ff00]" : ""}
                    ${step.status === "current" ? "bg-[#f39c12] text-black border-[#f39c12] animate-pulse" : ""}
                    ${step.status === "upcoming" ? "bg-[#1a1a2e] text-gray-600 border-gray-700" : ""}
                  `} style={step.status !== "upcoming" ? { textShadow: "1px 1px 0 rgba(0,0,0,0.5)" } : {}}>
                    {step.status === "completed" ? "OK" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-1 h-20 mt-3
                      ${step.status === "completed" ? "bg-[#00ff00]" : "bg-gray-800"}
                    `} style={{
                      backgroundImage: step.status === "completed" ? "repeating-linear-gradient(0deg, #00ff00 0px, #00ff00 4px, transparent 4px, transparent 8px)" : undefined
                    }} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-3 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-bold font-mono uppercase ${
                    step.status === "completed" ? "text-[#00ff00]" :
                    step.status === "current" ? "text-[#f39c12]" :
                    "text-gray-600"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 font-mono">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
