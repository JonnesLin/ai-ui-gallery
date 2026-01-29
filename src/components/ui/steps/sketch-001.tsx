export default function SketchSteps() {
  const steps = [
    { id: 1, title: "Sketch", description: "Draw initial concept", status: "completed" },
    { id: 2, title: "Refine", description: "Add details", status: "current" },
    { id: 3, title: "Ink", description: "Finalize lines", status: "upcoming" },
    { id: 4, title: "Color", description: "Apply finishing touches", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Idea", description: "Brainstorm concept", status: "completed" },
    { id: 2, title: "Draft", description: "Create rough sketch", status: "current" },
    { id: 3, title: "Final", description: "Complete artwork", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8" style={{ fontFamily: "cursive" }}>
            Creative Process
          </h2>
          <div className="bg-white border-2 border-gray-900 rounded-none p-8 relative"
               style={{ boxShadow: "4px 4px 0 0 #000" }}>
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold z-10 border-2 border-gray-900 transition-all
                    ${step.status === "completed" ? "bg-gray-900 text-white" : ""}
                    ${step.status === "current" ? "bg-white text-gray-900" : ""}
                    ${step.status === "upcoming" ? "bg-white text-gray-400" : ""}
                  `} style={
                    step.status === "current"
                      ? { boxShadow: "2px 2px 0 0 #000" }
                      : {}
                  }>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-semibold ${
                      step.status === "upcoming" ? "text-gray-400" : "text-gray-900"
                    }`} style={{ fontFamily: "cursive" }}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-7 left-1/2 w-full h-0.5 -z-0
                      ${step.status === "completed" ? "bg-gray-900" : "bg-gray-300"}
                    `} style={{
                      backgroundImage: step.status === "completed" ? "repeating-linear-gradient(90deg, #000 0px, #000 8px, transparent 8px, transparent 12px)" : undefined
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8" style={{ fontFamily: "cursive" }}>
            Design Journey
          </h2>
          <div className="bg-white border-2 border-gray-900 rounded-none p-8 max-w-md relative"
               style={{ boxShadow: "4px 4px 0 0 #000" }}>
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-5 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 border-2 border-gray-900 transition-all
                    ${step.status === "completed" ? "bg-gray-900 text-white" : ""}
                    ${step.status === "current" ? "bg-white text-gray-900" : ""}
                    ${step.status === "upcoming" ? "bg-white text-gray-400" : ""}
                  `} style={
                    step.status === "current"
                      ? { boxShadow: "2px 2px 0 0 #000" }
                      : {}
                  }>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-0.5 h-20 mt-3
                      ${step.status === "completed" ? "bg-gray-900" : "bg-gray-300"}
                    `} style={{
                      backgroundImage: step.status === "completed" ? "repeating-linear-gradient(0deg, #000 0px, #000 8px, transparent 8px, transparent 12px)" : undefined
                    }} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-3 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-semibold ${
                    step.status === "upcoming" ? "text-gray-400" : "text-gray-900"
                  }`} style={{ fontFamily: "cursive" }}>
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
