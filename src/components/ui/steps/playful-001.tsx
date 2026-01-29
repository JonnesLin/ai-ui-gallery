export default function PlayfulSteps() {
  const steps = [
    { id: 1, title: "Start", description: "Let's begin the fun", status: "completed", emoji: "🎉" },
    { id: 2, title: "Play", description: "Enjoy the journey", status: "current", emoji: "🎮" },
    { id: 3, title: "Learn", description: "Discover new things", status: "upcoming", emoji: "📚" },
    { id: 4, title: "Win", description: "Celebrate success", status: "upcoming", emoji: "🏆" },
  ];

  const verticalSteps = [
    { id: 1, title: "Wake Up", description: "Good morning", status: "completed", emoji: "☀️" },
    { id: 2, title: "Breakfast", description: "Fuel up", status: "current", emoji: "🥞" },
    { id: 3, title: "Adventure", description: "Explore the world", status: "upcoming", emoji: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-3xl font-bold text-purple-700 mb-8">Your Fun Journey</h2>
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl z-10 transition-all transform
                    ${step.status === "completed" ? "bg-gradient-to-br from-green-400 to-emerald-500 scale-100 rotate-0" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-orange-400 to-pink-500 scale-110 animate-bounce" : ""}
                    ${step.status === "upcoming" ? "bg-gray-200 scale-90" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.emoji}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-bold ${
                      step.status === "upcoming" ? "text-gray-400" : "text-purple-700"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-8 left-1/2 w-full h-2 -z-0 rounded-full
                      ${step.status === "completed"
                        ? "bg-gradient-to-r from-green-400 to-emerald-500"
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
          <h2 className="text-3xl font-bold text-purple-700 mb-8">Daily Adventure</h2>
          <div className="bg-white rounded-3xl p-8 shadow-xl max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0 transition-all transform
                    ${step.status === "completed" ? "bg-gradient-to-br from-green-400 to-emerald-500 scale-100 rotate-0" : ""}
                    ${step.status === "current" ? "bg-gradient-to-br from-orange-400 to-pink-500 scale-110 animate-bounce" : ""}
                    ${step.status === "upcoming" ? "bg-gray-200 scale-90" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.emoji}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-2 h-24 mt-3 rounded-full
                      ${step.status === "completed"
                        ? "bg-gradient-to-b from-green-400 to-emerald-500"
                        : "bg-gray-200"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-24 pt-4 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-lg font-bold ${
                    step.status === "upcoming" ? "text-gray-400" : "text-purple-700"
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
