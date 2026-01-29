export default function CorporateProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-40 h-40 bg-white rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-2">Robert Anderson</h1>
                <p className="text-xl text-blue-100 mb-4">Chief Technology Officer</p>
                <p className="text-blue-50 mb-6 max-w-2xl">
                  Strategic technology leader with 15+ years of experience driving digital transformation
                  and innovation across Fortune 500 companies.
                </p>
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded hover:bg-blue-50 transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white/10 transition-colors">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-8 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-3xl font-bold text-blue-900 mb-1">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-3xl font-bold text-blue-900 mb-1">127</div>
              <div className="text-gray-600 text-sm">Projects Led</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-3xl font-bold text-blue-900 mb-1">8.2k</div>
              <div className="text-gray-600 text-sm">Connections</div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="text-3xl font-bold text-blue-900 mb-1">42</div>
              <div className="text-gray-600 text-sm">Publications</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-6">
              {/* Professional Summary */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Professional Summary</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Results-driven technology executive with a proven track record of leading digital
                  transformation initiatives and building high-performing engineering teams.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Expertise in cloud architecture, enterprise software development, and strategic
                  technology planning. Passionate about leveraging technology to drive business growth
                  and operational excellence.
                </p>
              </div>

              {/* Experience */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Experience</h2>
                <div className="space-y-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border-l-4 border-blue-900 pl-4">
                      <h3 className="font-semibold text-gray-900">Chief Technology Officer</h3>
                      <p className="text-blue-900 font-medium">TechCorp Global Inc.</p>
                      <p className="text-sm text-gray-600 mb-2">2020 - Present</p>
                      <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>Led digital transformation initiatives across organization</li>
                        <li>Managed technology budget of $50M+ annually</li>
                        <li>Built and scaled engineering team to 200+ professionals</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">MBA, Technology Management</h3>
                    <p className="text-blue-900 font-medium">Stanford University</p>
                    <p className="text-sm text-gray-600">2015 - 2017</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">BS, Computer Science</h3>
                    <p className="text-blue-900 font-medium">MIT</p>
                    <p className="text-sm text-gray-600">2002 - 2006</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span className="text-gray-700">r.anderson@company.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-gray-700">New York, NY</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                    </svg>
                    <span className="text-gray-700">linkedin.com/in/randerson</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Core Competencies</h2>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'Cloud Architecture', 'DevOps', 'AI/ML', 'Agile', 'Strategy'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-blue-50 text-blue-900 rounded text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Certifications</h2>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900">AWS Solutions Architect</p>
                    <p className="text-gray-600">Amazon Web Services</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">PMP Certification</p>
                    <p className="text-gray-600">PMI</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">TOGAF Certified</p>
                    <p className="text-gray-600">The Open Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
