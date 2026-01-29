export default function CyberpunkSteps() {
  const steps = [
    { id: 1, title: "CONNECT", description: "Link neural interface", status: "completed" },
    { id: 2, title: "UPLOAD", description: "Transfer data stream", status: "current" },
    { id: 3, title: "DECRYPT", description: "Break encryption", status: "upcoming" },
    { id: 4, title: "EXECUTE", description: "Run protocol", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "JACK IN", description: "Enter the matrix", status: "completed" },
    { id: 2, title: "HACK", description: "Bypass security", status: "current" },
    { id: 3, title: "ESCAPE", description: "Exit clean", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-8 uppercase tracking-widest"
              style={{ textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff" }}>
            &gt; Horizontal Protocol
          </h2>
          <div className="bg-black border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00ffff 2px, #00ffff 4px)" }} />

            <div className="flex items-center justify-between relative z-10">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-16 h-16 clip-path-polygon flex items-center justify-center text-sm font-bold z-10 transition-all uppercase
                    ${step.status === "completed" ? "bg-cyan-400 text-black" : ""}
                    ${step.status === "current" ? "bg-fuchsia-500 text-black animate-pulse" : ""}
                    ${step.status === "upcoming" ? "bg-gray-900 text-gray-700 border-2 border-gray-800" : ""}
                  `} style={
                    step.status !== "upcoming"
                      ? { boxShadow: step.status === "completed" ? "0 0 20px #00ffff" : "0 0 20px #ff00ff" }
                      : {}
                  }>
                    {step.status === "completed" ? "OK" : `0${step.id}`}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-bold uppercase tracking-wide ${
                      step.status === "completed" ? "text-cyan-400" :
                      step.status === "current" ? "text-fuchsia-400" :
                      "text-gray-700"
                    }`} style={
                      step.status !== "upcoming"
                        ? { textShadow: step.status === "completed" ? "0 0 10px #00ffff" : "0 0 10px #ff00ff" }
                        : {}
                    }>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-8 left-1/2 w-full h-0.5 -z-0
                      ${step.status === "completed" ? "bg-cyan-400" : "bg-gray-800"}
                    `} style={
                      step.status === "completed"
                        ? { boxShadow: "0 0 10px #00ffff" }
                        : {}
                    } />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-8 uppercase tracking-widest"
              style={{ textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff" }}>
            &gt; Vertical Protocol
          </h2>
          <div className="bg-black border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.3)] p-8 max-w-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00ffff 2px, #00ffff 4px)" }} />

            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6 relative z-10">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-16 h-16 flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all uppercase
                    ${step.status === "completed" ? "bg-cyan-400 text-black" : ""}
                    ${step.status === "current" ? "bg-fuchsia-500 text-black animate-pulse" : ""}
                    ${step.status === "upcoming" ? "bg-gray-900 text-gray-700 border-2 border-gray-800" : ""}
                  `} style={
                    step.status !== "upcoming"
                      ? { boxShadow: step.status === "completed" ? "0 0 20px #00ffff" : "0 0 20px #ff00ff" }
                      : {}
                  }>
                    {step.status === "completed" ? "OK" : `0${step.id}`}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-0.5 h-20 mt-3
                      ${step.status === "completed" ? "bg-cyan-400" : "bg-gray-800"}
                    `} style={
                      step.status === "completed"
                        ? { boxShadow: "0 0 10px #00ffff" }
                        : {}
                    } />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-4 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-lg font-bold uppercase tracking-wide ${
                    step.status === "completed" ? "text-cyan-400" :
                    step.status === "current" ? "text-fuchsia-400" :
                    "text-gray-700"
                  }`} style={
                    step.status !== "upcoming"
                      ? { textShadow: step.status === "completed" ? "0 0 10px #00ffff" : "0 0 10px #ff00ff" }
                      : {}
                  }>
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
