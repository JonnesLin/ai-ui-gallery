export default function BrutalistSteps() {
  const steps = [
    { id: 1, title: "START", description: "BEGIN PROCESS", status: "completed" },
    { id: 2, title: "BUILD", description: "CREATE OUTPUT", status: "current" },
    { id: 3, title: "TEST", description: "VERIFY QUALITY", status: "upcoming" },
    { id: 4, title: "SHIP", description: "DEPLOY LIVE", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "INPUT", description: "DATA ENTRY", status: "completed" },
    { id: 2, title: "PROCESS", description: "COMPUTATION", status: "current" },
    { id: 3, title: "OUTPUT", description: "RESULTS", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-yellow-400 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-3xl font-black text-black mb-8 uppercase border-b-8 border-black pb-2">Horizontal Steps</h2>
          <div className="bg-white border-8 border-black shadow-[12px_12px_0_0_#000] p-8">
            <div className="flex items-center justify-between gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-16 h-16 flex items-center justify-center text-xl font-black z-10 border-4 border-black transition-all
                    ${step.status === "completed" ? "bg-black text-yellow-400" : ""}
                    ${step.status === "current" ? "bg-yellow-400 text-black shadow-[4px_4px_0_0_#000]" : ""}
                    ${step.status === "upcoming" ? "bg-white text-gray-400" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-black uppercase ${
                      step.status === "upcoming" ? "text-gray-400" : "text-black"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs font-bold text-gray-600 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-8 left-1/2 w-full h-2 -z-0 border-t-4 border-b-4 border-black
                      ${step.status === "completed" ? "bg-black" : "bg-white"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-3xl font-black text-black mb-8 uppercase border-b-8 border-black pb-2">Vertical Steps</h2>
          <div className="bg-white border-8 border-black shadow-[12px_12px_0_0_#000] p-8 max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-6 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-16 h-16 flex items-center justify-center text-xl font-black flex-shrink-0 border-4 border-black transition-all
                    ${step.status === "completed" ? "bg-black text-yellow-400" : ""}
                    ${step.status === "current" ? "bg-yellow-400 text-black shadow-[4px_4px_0_0_#000]" : ""}
                    ${step.status === "upcoming" ? "bg-white text-gray-400" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-2 h-24 mt-3 border-l-4 border-r-4 border-black
                      ${step.status === "completed" ? "bg-black" : "bg-white"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-24 pt-4 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-lg font-black uppercase ${
                    step.status === "upcoming" ? "text-gray-400" : "text-black"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm font-bold text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
