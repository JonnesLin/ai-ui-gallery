export default function PastelSteps() {
  const steps = [
    { id: 1, title: "Welcome", description: "Nice to meet you", status: "completed" },
    { id: 2, title: "Explore", description: "Discover features", status: "current" },
    { id: 3, title: "Enjoy", description: "Have fun with it", status: "upcoming" },
    { id: 4, title: "Share", description: "Tell your friends", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Create", description: "Make something new", status: "completed" },
    { id: 2, title: "Design", description: "Add your touch", status: "current" },
    { id: 3, title: "Publish", description: "Share with world", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-600 mb-8">Horizontal Steps</h2>
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-base font-semibold z-10 transition-all
                    ${step.status === "completed" ? "bg-gradient-to-br from-pink-300 to-purple-300 text-white" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-purple-300 to-blue-300 text-white shadow-lg" : ""}
                    ${step.status === "upcoming" ? "bg-gray-100 text-gray-400" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-semibold ${
                      step.status === "upcoming" ? "text-gray-400" : "text-purple-600"
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
                        ? "bg-gradient-to-r from-pink-300 to-purple-300"
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
          <h2 className="text-2xl font-semibold text-purple-600 mb-8">Vertical Steps</h2>
          <div className="bg-white/80 backdrop-blur rounded-3xl p-8 shadow-lg max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-5 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-base font-semibold flex-shrink-0 transition-all
                    ${step.status === "completed" ? "bg-gradient-to-br from-pink-300 to-purple-300 text-white" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-purple-300 to-blue-300 text-white shadow-lg" : ""}
                    ${step.status === "upcoming" ? "bg-gray-100 text-gray-400" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-1 h-20 mt-3 rounded-full
                      ${step.status === "completed"
                        ? "bg-gradient-to-b from-pink-300 to-purple-300"
                        : "bg-gray-200"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-3 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-semibold ${
                    step.status === "upcoming" ? "text-gray-400" : "text-purple-600"
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
