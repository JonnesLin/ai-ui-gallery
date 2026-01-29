export default function NeonSteps() {
  const steps = [
    { id: 1, title: "Initialize", description: "System startup", status: "completed" },
    { id: 2, title: "Configure", description: "Setup parameters", status: "current" },
    { id: 3, title: "Deploy", description: "Launch system", status: "upcoming" },
    { id: 4, title: "Monitor", description: "Track performance", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Connect", description: "Establish connection", status: "completed" },
    { id: 2, title: "Sync", description: "Synchronize data", status: "current" },
    { id: 3, title: "Verify", description: "Validate integrity", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-8" style={{ textShadow: "0 0 20px #22d3ee" }}>
            Horizontal Progress
          </h2>
          <div className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-8 relative overflow-hidden"
               style={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)" }}>
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold z-10 transition-all duration-300 border-2
                    ${step.status === "completed"
                      ? "bg-cyan-500 text-black border-cyan-400"
                      : ""}
                    ${step.status === "current"
                      ? "bg-cyan-500 text-black border-cyan-400 animate-pulse"
                      : ""}
                    ${step.status === "upcoming"
                      ? "bg-gray-800 text-gray-500 border-gray-700"
                      : ""}
                  `} style={
                    step.status !== "upcoming"
                      ? { boxShadow: "0 0 30px #22d3ee, inset 0 0 20px #06b6d4" }
                      : {}
                  }>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-bold transition-all ${
                      step.status === "upcoming" ? "text-gray-600" : "text-cyan-400"
                    }`} style={
                      step.status !== "upcoming"
                        ? { textShadow: "0 0 10px #22d3ee" }
                        : {}
                    }>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-7 left-1/2 w-full h-0.5 -z-0 transition-all duration-300
                      ${step.status === "completed" ? "bg-cyan-500" : "bg-gray-700"}
                    `} style={
                      step.status === "completed"
                        ? { boxShadow: "0 0 10px #22d3ee" }
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
          <h2 className="text-2xl font-bold text-pink-400 mb-8" style={{ textShadow: "0 0 20px #ec4899" }}>
            Vertical Progress
          </h2>
          <div className="bg-gray-900 border border-pink-500/30 rounded-2xl p-8 max-w-md relative overflow-hidden"
               style={{ boxShadow: "0 0 30px rgba(236, 72, 153, 0.3)" }}>
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-5 relative">
                {/* Step Circle and Connector */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300 border-2
                    ${step.status === "completed"
                      ? "bg-pink-500 text-black border-pink-400"
                      : ""}
                    ${step.status === "current"
                      ? "bg-pink-500 text-black border-pink-400 animate-pulse"
                      : ""}
                    ${step.status === "upcoming"
                      ? "bg-gray-800 text-gray-500 border-gray-700"
                      : ""}
                  `} style={
                    step.status !== "upcoming"
                      ? { boxShadow: "0 0 30px #ec4899, inset 0 0 20px #db2777" }
                      : {}
                  }>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-0.5 h-20 mt-3 transition-all duration-300
                      ${step.status === "completed" ? "bg-pink-500" : "bg-gray-700"}
                    `} style={
                      step.status === "completed"
                        ? { boxShadow: "0 0 10px #ec4899" }
                        : {}
                    } />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-3 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-bold transition-all ${
                    step.status === "upcoming" ? "text-gray-600" : "text-pink-400"
                  }`} style={
                    step.status !== "upcoming"
                      ? { textShadow: "0 0 10px #ec4899" }
                      : {}
                  }>
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-color Neon */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-8" style={{ textShadow: "0 0 20px #a855f7" }}>
            Rainbow Progress
          </h2>
          <div className="bg-gray-900 border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden"
               style={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)" }}>
            <div className="flex items-center justify-between">
              {[
                { id: 1, title: "Start", color: "cyan", status: "completed" },
                { id: 2, title: "Process", color: "pink", status: "current" },
                { id: 3, title: "Finish", color: "purple", status: "upcoming" },
              ].map((step, index, arr) => {
                const colors = {
                  cyan: { bg: "bg-cyan-500", border: "border-cyan-400", text: "text-cyan-400", shadow: "#22d3ee" },
                  pink: { bg: "bg-pink-500", border: "border-pink-400", text: "text-pink-400", shadow: "#ec4899" },
                  purple: { bg: "bg-purple-500", border: "border-purple-400", text: "text-purple-400", shadow: "#a855f7" },
                };
                const c = colors[step.color as keyof typeof colors];

                return (
                  <div key={step.id} className="flex-1 flex flex-col items-center relative">
                    <div className={`
                      w-16 h-16 rounded-full flex items-center justify-center text-base font-bold z-10 transition-all duration-300 border-2
                      ${step.status === "completed" || step.status === "current"
                        ? `${c.bg} text-black ${c.border}`
                        : "bg-gray-800 text-gray-500 border-gray-700"}
                      ${step.status === "current" ? "animate-pulse" : ""}
                    `} style={
                      step.status !== "upcoming"
                        ? { boxShadow: `0 0 30px ${c.shadow}, inset 0 0 20px ${c.shadow}` }
                        : {}
                    }>
                      {step.status === "completed" ? "✓" : step.id}
                    </div>
                    <p className={`mt-3 text-sm font-bold transition-all ${
                      step.status === "upcoming" ? "text-gray-600" : c.text
                    }`} style={
                      step.status !== "upcoming"
                        ? { textShadow: `0 0 10px ${c.shadow}` }
                        : {}
                    }>
                      {step.title}
                    </p>
                    {index < arr.length - 1 && (
                      <div className={`
                        absolute top-8 left-1/2 w-full h-0.5 -z-0 transition-all duration-300
                        ${step.status === "completed" ? c.bg : "bg-gray-700"}
                      `} style={
                        step.status === "completed"
                          ? { boxShadow: `0 0 10px ${c.shadow}` }
                          : {}
                      } />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
