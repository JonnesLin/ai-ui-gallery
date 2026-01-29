export default function SketchDivider() {
  return (
    <div className="w-full min-h-screen bg-white p-8 space-y-12">
      {/* Horizontal Dividers */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-800 mb-6" style={{ fontFamily: 'cursive' }}>Horizontal</h2>

        {/* Hand Drawn Line */}
        <svg viewBox="0 0 1200 8" className="w-full h-2">
          <path d="M0,4 Q50,2 100,4 T200,4 T300,4 T400,4 T500,4 T600,4 T700,4 T800,4 T900,4 T1000,4 T1100,4 T1200,4"
                fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        {/* Dashed Sketch */}
        <svg viewBox="0 0 1200 8" className="w-full h-2">
          <path d="M0,4 L80,4 M100,4 L180,4 M200,4 L280,4 M300,4 L380,4 M400,4 L480,4 M500,4 L580,4 M600,4 L680,4 M700,4 L780,4 M800,4 L880,4 M900,4 L980,4 M1000,4 L1080,4 M1100,4 L1180,4"
                fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
        </svg>

        {/* Scribble */}
        <svg viewBox="0 0 1200 12" className="w-full h-3">
          <path d="M0,6 Q10,4 20,6 Q30,8 40,6 Q50,4 60,6 Q70,8 80,6 Q90,4 100,6 Q110,8 120,6 Q130,4 140,6 Q150,8 160,6 Q170,4 180,6 Q190,8 200,6 Q210,4 220,6 Q230,8 240,6 Q250,4 260,6 Q270,8 280,6 Q290,4 300,6 Q310,8 320,6 Q330,4 340,6 Q350,8 360,6 Q370,4 380,6 Q390,8 400,6 Q410,4 420,6 Q430,8 440,6 Q450,4 460,6 Q470,8 480,6 Q490,4 500,6 Q510,8 520,6 Q530,4 540,6 Q550,8 560,6 Q570,4 580,6 Q590,8 600,6 Q610,4 620,6 Q630,8 640,6 Q650,4 660,6 Q670,8 680,6 Q690,4 700,6 Q710,8 720,6 Q730,4 740,6 Q750,8 760,6 Q770,4 780,6 Q790,8 800,6 Q810,4 820,6 Q830,8 840,6 Q850,4 860,6 Q870,8 880,6 Q890,4 900,6 Q910,8 920,6 Q930,4 940,6 Q950,8 960,6 Q970,4 980,6 Q990,8 1000,6 Q1010,4 1020,6 Q1030,8 1040,6 Q1050,4 1060,6 Q1070,8 1080,6 Q1090,4 1100,6 Q1110,8 1120,6 Q1130,4 1140,6 Q1150,8 1160,6 Q1170,4 1180,6 Q1190,8 1200,6"
                fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

        {/* Double Sketch */}
        <div className="space-y-1">
          <svg viewBox="0 0 1200 6" className="w-full h-1.5">
            <path d="M0,3 Q60,2 120,3 T240,3 T360,3 T480,3 T600,3 T720,3 T840,3 T960,3 T1080,3 T1200,3"
                  fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg viewBox="0 0 1200 6" className="w-full h-1.5">
            <path d="M0,3 Q60,4 120,3 T240,3 T360,3 T480,3 T600,3 T720,3 T840,3 T960,3 T1080,3 T1200,3"
                  fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* With Text */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-800 mb-6" style={{ fontFamily: 'cursive' }}>With Text</h2>

        {/* Sketch Text */}
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 400 8" className="flex-1 h-2">
            <path d="M0,4 Q50,2 100,4 T200,4 T300,4 T400,4"
                  fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-base text-gray-700 font-medium px-2" style={{ fontFamily: 'cursive' }}>or</span>
          <svg viewBox="0 0 400 8" className="flex-1 h-2">
            <path d="M0,4 Q50,2 100,4 T200,4 T300,4 T400,4"
                  fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Framed Text */}
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 400 6" className="flex-1 h-1.5">
            <path d="M0,3 Q80,4 160,3 T320,3 T400,3"
                  fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div className="relative px-6 py-2 border-2 border-gray-700" style={{
            borderRadius: '2% 98% 3% 97% / 95% 4% 96% 5%'
          }}>
            <span className="text-sm text-gray-700 font-medium" style={{ fontFamily: 'cursive' }}>Note</span>
          </div>
          <svg viewBox="0 0 400 6" className="flex-1 h-1.5">
            <path d="M0,3 Q80,2 160,3 T320,3 T400,3"
                  fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Cloud Style */}
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 400 8" className="flex-1 h-2">
            <path d="M0,4 L400,4" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5,5"/>
          </svg>
          <div className="px-8 py-3 bg-gray-50 border-2 border-gray-400 rounded-3xl">
            <span className="text-sm text-gray-700 font-medium" style={{ fontFamily: 'cursive' }}>Think</span>
          </div>
          <svg viewBox="0 0 400 8" className="flex-1 h-2">
            <path d="M0,4 L400,4" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5,5"/>
          </svg>
        </div>
      </section>

      {/* With Icon */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-800 mb-6" style={{ fontFamily: 'cursive' }}>With Icon</h2>

        {/* Sketch Circle */}
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 400 8" className="flex-1 h-2">
            <path d="M0,4 Q50,3 100,4 T200,4 T300,4 T400,4"
                  fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg viewBox="0 0 40 40" className="w-10 h-10">
            <circle cx="20" cy="20" r="18" fill="none" stroke="#374151" strokeWidth="2"
                    style={{ strokeDasharray: '1, 2' }}/>
            <path d="M12 20 L18 26 L28 14" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg viewBox="0 0 400 8" className="flex-1 h-2">
            <path d="M0,4 Q50,5 100,4 T200,4 T300,4 T400,4"
                  fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>

        {/* Star Sketch */}
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 400 6" className="flex-1 h-1.5">
            <path d="M0,3 L400,3" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <svg viewBox="0 0 40 40" className="w-10 h-10">
            <path d="M20,5 L24,16 L35,18 L26,25 L29,36 L20,30 L11,36 L14,25 L5,18 L16,16 Z"
                  fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg viewBox="0 0 400 6" className="flex-1 h-1.5">
            <path d="M0,3 L400,3" fill="none" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* Vertical Dividers */}
      <section>
        <h2 className="text-sm font-medium text-gray-800 mb-6" style={{ fontFamily: 'cursive' }}>Vertical</h2>
        <div className="flex items-center justify-center gap-8 h-32 border-2 border-gray-300 p-6" style={{
          borderRadius: '3% 97% 4% 96% / 94% 5% 95% 6%'
        }}>
          <div className="text-sm text-gray-700 font-medium" style={{ fontFamily: 'cursive' }}>Item 1</div>
          <svg viewBox="0 0 8 120" className="w-2 h-full">
            <path d="M4,0 Q2,30 4,60 T4,120"
                  fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className="text-sm text-gray-700 font-medium" style={{ fontFamily: 'cursive' }}>Item 2</div>
          <svg viewBox="0 0 8 120" className="w-2 h-full">
            <path d="M4,0 Q6,30 4,60 T4,120"
                  fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className="text-sm text-gray-700 font-medium" style={{ fontFamily: 'cursive' }}>Item 3</div>
        </div>
      </section>

      {/* Special Effects */}
      <section className="space-y-8">
        <h2 className="text-sm font-medium text-gray-800 mb-6" style={{ fontFamily: 'cursive' }}>Special</h2>

        {/* Arrow Line */}
        <svg viewBox="0 0 1200 16" className="w-full h-4">
          <path d="M0,8 Q300,6 600,8 T1180,8"
                fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
          <path d="M1180,4 L1200,8 L1180,12"
                fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Dotted Sketch */}
        <div className="flex gap-3 justify-center">
          {[...Array(20)].map((_, i) => (
            <svg key={i} viewBox="0 0 8 8" className="w-2 h-2">
              <circle cx="4" cy="4" r="3" fill="none" stroke="#6b7280" strokeWidth="1.5"/>
            </svg>
          ))}
        </div>
      </section>
    </div>
  );
}