export default function MonochromeSteps() {
  const steps = [
    { id: 1, title: "Research", description: "Gather information", status: "completed" },
    { id: 2, title: "Analysis", description: "Process data", status: "current" },
    { id: 3, title: "Report", description: "Generate findings", status: "upcoming" },
    { id: 4, title: "Publish", description: "Share results", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Plan", description: "Define objectives", status: "completed" },
    { id: 2, title: "Execute", description: "Implement strategy", status: "current" },
    { id: 3, title: "Review", description: "Assess outcomes", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-8">Horizontal Process</h2>
          <div className="bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold z-10 transition-all
                    ${step.status === "completed" ? "bg-black text-white" : ""}
                    ${step.status === "current" ? "bg-gray-700 text-white" : ""}
                    ${step.status === "upcoming" ? "bg-gray-200 text-gray-500" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-bold ${
                      step.status === "upcoming" ? "text-gray-400" : "text-black"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-6 left-1/2 w-full h-0.5 -z-0
                      ${step.status === "completed" ? "bg-black" : "bg-gray-300"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-8">Vertical Process</h2>
          <div className="bg-white p-8 shadow-sm max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-5 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all
                    ${step.status === "completed" ? "bg-black text-white" : ""}
                    ${step.status === "current" ? "bg-gray-700 text-white" : ""}
                    ${step.status === "upcoming" ? "bg-gray-200 text-gray-500" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-0.5 h-20 mt-3
                      ${step.status === "completed" ? "bg-black" : "bg-gray-300"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-2 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-bold ${
                    step.status === "upcoming" ? "text-gray-400" : "text-black"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
