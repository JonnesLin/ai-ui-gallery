export default function MaterialSteps() {
  const steps = [
    { id: 1, title: "Account", description: "Create your account", status: "completed" },
    { id: 2, title: "Profile", description: "Setup your profile", status: "current" },
    { id: 3, title: "Preferences", description: "Choose preferences", status: "upcoming" },
    { id: 4, title: "Complete", description: "Get started", status: "upcoming" },
  ];

  const verticalSteps = [
    { id: 1, title: "Order Received", description: "We got your order", status: "completed" },
    { id: 2, title: "Processing", description: "Preparing items", status: "current" },
    { id: 3, title: "Shipping", description: "On the way", status: "upcoming" },
    { id: 4, title: "Delivered", description: "Enjoy your purchase", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Horizontal Steps */}
        <div>
          <h2 className="text-2xl font-medium text-gray-900 mb-8">Horizontal Stepper</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium z-10 transition-all duration-300
                    ${step.status === "completed" ? "bg-blue-600 text-white shadow-lg" : ""}
                    ${step.status === "current" ? "bg-blue-600 text-white shadow-lg ring-4 ring-blue-100" : ""}
                    ${step.status === "upcoming" ? "bg-gray-200 text-gray-500" : ""}
                  `}>
                    {step.status === "completed" ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : step.id}
                  </div>

                  {/* Step Content */}
                  <div className="mt-4 text-center">
                    <p className={`text-sm font-medium transition-colors ${
                      step.status === "upcoming" ? "text-gray-400" : "text-gray-900"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className={`
                      absolute top-6 left-1/2 w-full h-0.5 -z-0 transition-all duration-300
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
          <h2 className="text-2xl font-medium text-gray-900 mb-8">Vertical Stepper</h2>
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
            {verticalSteps.map((step, index) => (
              <div key={step.id} className="flex gap-4 relative">
                {/* Step Circle and Connector */}
                <div className="flex flex-col items-center">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 transition-all duration-300
                    ${step.status === "completed" ? "bg-blue-600 text-white shadow-lg" : ""}
                    ${step.status === "current" ? "bg-blue-600 text-white shadow-lg ring-4 ring-blue-100" : ""}
                    ${step.status === "upcoming" ? "bg-gray-200 text-gray-500" : ""}
                  `}>
                    {step.status === "completed" ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : step.id}
                  </div>

                  {/* Connector Line */}
                  {index < verticalSteps.length - 1 && (
                    <div className={`
                      w-0.5 h-20 mt-2 transition-all duration-300
                      ${step.status === "completed" ? "bg-blue-600" : "bg-gray-300"}
                    `} />
                  )}
                </div>

                {/* Step Content */}
                <div className={`pb-20 pt-2 ${index === verticalSteps.length - 1 ? "pb-0" : ""}`}>
                  <p className={`text-base font-medium transition-colors ${
                    step.status === "upcoming" ? "text-gray-400" : "text-gray-900"
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* With Icons */}
        <div>
          <h2 className="text-2xl font-medium text-gray-900 mb-8">Steps with Icons</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-between">
              {[
                { id: 1, title: "Cart", icon: "🛒", status: "completed" },
                { id: 2, title: "Checkout", icon: "💳", status: "current" },
                { id: 3, title: "Confirm", icon: "✅", status: "upcoming" },
              ].map((step, index, arr) => (
                <div key={step.id} className="flex-1 flex flex-col items-center relative">
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center text-2xl z-10 transition-all duration-300
                    ${step.status === "completed" ? "bg-blue-600 shadow-lg" : ""}
                    ${step.status === "current" ? "bg-blue-600 shadow-lg ring-4 ring-blue-100" : ""}
                    ${step.status === "upcoming" ? "bg-gray-200" : ""}
                  `}>
                    {step.icon}
                  </div>
                  <p className={`mt-3 text-sm font-medium transition-colors ${
                    step.status === "upcoming" ? "text-gray-400" : "text-gray-900"
                  }`}>
                    {step.title}
                  </p>
                  {index < arr.length - 1 && (
                    <div className={`
                      absolute top-7 left-1/2 w-full h-0.5 -z-0 transition-all duration-300
                      ${step.status === "completed" ? "bg-blue-600" : "bg-gray-300"}
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
