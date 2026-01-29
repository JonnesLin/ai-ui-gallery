export default function GradientSteps() {
  const steps = [
    { id: 1, title: "Discovery", description: "Find your style", status: "completed" },
    { id: 2, title: "Selection", description: "Choose options", status: "current" },
    { id: 3, title: "Customization", description: "Personalize details", status: "upcoming" },
    { id: 4, title: "Finalization", description: "Review & complete", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Sign Up", description: "Create account", status: "completed" },
    { id: 2, title: "Onboarding", description: "Learn the basics", status: "current" },
    { id: 3, title: "Ready", description: "Start exploring", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Horizontal Steps</h2>
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-base font-bold z-10 transition-all
                    ${step.status === "completed" ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/50" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-fuchsia-500 to-orange-500 text-white shadow-xl shadow-fuchsia-500/50 scale-110" : ""}
                    ${step.status === "upcoming" ? "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-500" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-bold bg-clip-text ${
                      step.status === "upcoming"
                        ? "text-gray-400"
                        : "text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-7 left-1/2 w-full h-1 -z-0 rounded-full
                      ${step.status === "completed"
                        ? "bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        : "bg-gray-200"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Vertical Steps</h2>
          <div className="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-2xl max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-5 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 transition-all
                    ${step.status === "completed" ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/50" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-fuchsia-500 to-orange-500 text-white shadow-xl shadow-fuchsia-500/50 scale-110" : ""}
                    ${step.status === "upcoming" ? "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-500" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-1 h-20 mt-3 rounded-full
                      ${step.status === "completed"
                        ? "bg-gradient-to-b from-violet-500 to-fuchsia-500"
                        : "bg-gray-200"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-3 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-bold bg-clip-text ${
                    step.status === "upcoming"
                      ? "text-gray-400"
                      : "text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600"
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
