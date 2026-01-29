export default function FlatSteps() {
  const steps = [
    { id: 1, title: "Account", description: "Create your account", status: "completed" },
    { id: 2, title: "Profile", description: "Add personal info", status: "current" },
    { id: 3, title: "Settings", description: "Configure preferences", status: "upcoming" },
    { id: 4, title: "Complete", description: "All set to go", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Order Received", description: "We got your order", status: "completed" },
    { id: 2, title: "Processing", description: "Preparing items", status: "current" },
    { id: 3, title: "Shipped", description: "On the way", status: "upcoming" },
    { id: 4, title: "Delivered", description: "Enjoy!", status: "upcoming" },
  ];

  const iconSteps = [
    { id: 1, title: "Select", description: "Choose your plan", status: "completed", icon: "📋" },
    { id: 2, title: "Payment", description: "Enter details", status: "current", icon: "💳" },
    { id: 3, title: "Confirm", description: "Review order", status: "upcoming", icon: "✓" },
    { id: 4, title: "Done", description: "Start using", status: "upcoming", icon: "🎉" },
  ];

  return (
    <div className="min-h-screen bg-[#ecf0f1] p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Horizontal Steps</h2>
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle - Pure flat design */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-base font-bold z-10 transition-colors
                    ${step.status === "completed" ? "bg-[#27ae60] text-white" : ""}
                    ${step.status === "current" ? "bg-[#3498db] text-white" : ""}
                    ${step.status === "upcoming" ? "bg-[#bdc3c7] text-white" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-3 text-center">
                    <p className={`text-sm font-bold ${
                      step.status === "upcoming" ? "text-[#95a5a6]" : "text-[#2c3e50]"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-[#7f8c8d] mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line - Flat design */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-6 left-1/2 w-full h-1 -z-0
                      ${step.status === "completed" ? "bg-[#27ae60]" : "bg-[#bdc3c7]"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Steps */}
        <div>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Vertical Steps</h2>
          <div className="bg-white rounded-lg p-8 max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-4 relative">
                {/* Step Circle */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0 transition-colors
                    ${step.status === "completed" ? "bg-[#27ae60] text-white" : ""}
                    ${step.status === "current" ? "bg-[#3498db] text-white" : ""}
                    ${step.status === "upcoming" ? "bg-[#bdc3c7] text-white" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-1 h-16 mt-2
                      ${step.status === "completed" ? "bg-[#27ae60]" : "bg-[#bdc3c7]"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-16 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-bold ${
                    step.status === "upcoming" ? "text-[#95a5a6]" : "text-[#2c3e50]"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-[#7f8c8d] mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps with Icons */}
        <div>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">With Icons & Descriptions</h2>
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-start justify-between gap-6">
              {iconSteps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle with Icon */}
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center text-2xl z-10 transition-colors
                    ${step.status === "completed" ? "bg-[#27ae60] text-white" : ""}
                    ${step.status === "current" ? "bg-[#3498db] text-white" : ""}
                    ${step.status === "upcoming" ? "bg-[#bdc3c7] text-white" : ""}
                  `}>
                    {step.icon}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-base font-bold ${
                      step.status === "upcoming" ? "text-[#95a5a6]" : "text-[#2c3e50]"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-sm text-[#7f8c8d] mt-2">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < iconSteps.length - 1 && (
                    <div className={`
                      absolute top-8 left-1/2 w-full h-1 -z-0
                      ${step.status === "completed" ? "bg-[#27ae60]" : "bg-[#bdc3c7]"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-8">Minimal Variant</h2>
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  {/* Step Number */}
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                    ${step.status === "completed" ? "bg-[#27ae60] text-white" : ""}
                    ${step.status === "current" ? "bg-[#3498db] text-white" : ""}
                    ${step.status === "upcoming" ? "bg-[#ecf0f1] text-[#95a5a6]" : ""}
                  `}>
                    {step.status === "completed" ? "✓" : step.id}
                  </div>

                  {/* Step Label */}
                  <div className="ml-3 flex-1">
                    <p className={`text-sm font-bold ${
                      step.status === "upcoming" ? "text-[#95a5a6]" : "text-[#2c3e50]"
                    }`}>
                      {step.title}
                    </p>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div className={`
                      h-1 flex-1 mx-4
                      ${step.status === "completed" ? "bg-[#27ae60]" : "bg-[#ecf0f1]"}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
