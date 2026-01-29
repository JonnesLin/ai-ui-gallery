export default function CorporateSteps() {
  const steps = [
    { id: 1, title: "Application", description: "Submit your application", status: "completed" },
    { id: 2, title: "Review", description: "Under review by team", status: "current" },
    { id: 3, title: "Interview", description: "Schedule interview", status: "upcoming" },
    { id: 4, title: "Decision", description: "Final decision", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Registration", description: "Complete registration form", status: "completed" },
    { id: 2, title: "Verification", description: "Verify your information", status: "current" },
    { id: 3, title: "Approval", description: "Wait for approval", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Application Process</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold z-10 transition-all
                    ${step.status === "completed" ? "bg-blue-600 text-white" : ""}
                    ${step.status === "current" ? "bg-blue-600 text-white ring-4 ring-blue-100" : ""}
                    ${step.status === "upcoming" ? "bg-gray-100 text-gray-400 border-2 border-gray-300" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-semibold ${
                      step.status === "upcoming" ? "text-gray-400" : "text-gray-800"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-6 left-1/2 w-full h-0.5 -z-0
                      ${step.status === "completed" ? "bg-blue-600" : "bg-gray-300"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">Onboarding Steps</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-5 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-all
                    ${step.status === "completed" ? "bg-blue-600 text-white" : ""}
                    ${step.status === "current" ? "bg-blue-600 text-white ring-4 ring-blue-100" : ""}
                    ${step.status === "upcoming" ? "bg-gray-100 text-gray-400 border-2 border-gray-300" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-0.5 h-20 mt-3
                      ${step.status === "completed" ? "bg-blue-600" : "bg-gray-300"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-2 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-semibold ${
                    step.status === "upcoming" ? "text-gray-400" : "text-gray-800"
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
