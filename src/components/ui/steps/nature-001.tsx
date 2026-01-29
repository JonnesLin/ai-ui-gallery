export default function NatureSteps() {
  const steps = [
    { id: 1, title: "Plant", description: "Sow the seeds", status: "completed" },
    { id: 2, title: "Nurture", description: "Water and care", status: "current" },
    { id: 3, title: "Grow", description: "Watch it flourish", status: "upcoming" },
    { id: 4, title: "Harvest", description: "Enjoy the fruits", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Dawn", description: "Day begins", status: "completed" },
    { id: 2, title: "Noon", description: "Sun shines bright", status: "current" },
    { id: 3, title: "Dusk", description: "Day concludes", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-8">Growth Journey</h2>
          <div className="bg-white/70 backdrop-blur border-2 border-green-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-sm font-semibold z-10 transition-all
                    ${step.status === "completed" ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-md" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-teal-400 to-green-500 text-white shadow-lg animate-pulse" : ""}
                    ${step.status === "upcoming" ? "bg-green-50 text-green-300 border-2 border-green-200" : ""}
                  `}>
                    {step.status === "completed" ? "🌱" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-semibold ${
                      step.status === "upcoming" ? "text-green-300" : "text-green-800"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-green-600 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-7 left-1/2 w-full h-1 -z-0 rounded-full
                      ${step.status === "completed"
                        ? "bg-gradient-to-r from-green-400 to-emerald-500"
                        : "bg-green-200"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-8">Natural Cycle</h2>
          <div className="bg-white/70 backdrop-blur border-2 border-green-200 rounded-2xl p-8 shadow-lg max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-5 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 transition-all
                    ${step.status === "completed" ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-md" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-teal-400 to-green-500 text-white shadow-lg animate-pulse" : ""}
                    ${step.status === "upcoming" ? "bg-green-50 text-green-300 border-2 border-green-200" : ""}
                  `}>
                    {step.status === "completed" ? "🌱" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-1 h-20 mt-3 rounded-full
                      ${step.status === "completed"
                        ? "bg-gradient-to-b from-green-400 to-emerald-500"
                        : "bg-green-200"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-3 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-semibold ${
                    step.status === "upcoming" ? "text-green-300" : "text-green-800"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-green-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
