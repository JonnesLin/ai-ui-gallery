export default function SketchTeam() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "15 years of experience in scaling tech companies",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Marcus Williams",
      role: "Chief Technology Officer",
      bio: "Former principal engineer at major tech firms",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Design",
      bio: "Award-winning product designer and design systems expert",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Built and led distributed teams across 3 continents",
      social: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  return (
    <section className="min-h-screen bg-white px-4 py-24" style={{ fontFamily: '"Permanent Marker", cursive, sans-serif' }}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="mb-6 inline-block -rotate-2 transform rounded-lg border-4 border-black bg-yellow-200 p-6" style={{
            boxShadow: '6px 6px 0px rgba(0,0,0,0.2)',
            filter: 'url(#sketch-filter)'
          }}>
            <h2 className="text-5xl font-black text-black">The Dream Team</h2>
          </div>
          <p className="rotate-1 transform text-xl text-gray-700">Drawn to excellence</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative rounded-none border-4 border-black bg-white p-6 transition-transform hover:-rotate-1"
              style={{
                boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                filter: 'url(#sketch-filter)'
              }}
            >
              <div className="mb-6 aspect-square w-full border-3 border-black bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 relative">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5%" y="5%" width="90%" height="90%" fill="none" stroke="black" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="black" strokeWidth="1" opacity="0.3" />
                  <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="black" strokeWidth="1" opacity="0.3" />
                  <circle cx="50%" cy="50%" r="30%" fill="none" stroke="black" strokeWidth="2" opacity="0.2" />
                </svg>
              </div>

              <div className="mb-4 inline-block -rotate-1 transform border-b-3 border-black bg-yellow-100 px-3 py-1">
                <h3 className="text-lg font-black text-black">{member.name}</h3>
              </div>

              <p className="mb-3 text-sm font-bold text-blue-600">{member.role}</p>
              <p className="mb-6 text-xs leading-relaxed text-gray-700" style={{ fontFamily: 'sans-serif' }}>
                {member.bio}
              </p>

              <div className="flex gap-3">
                <a
                  href={member.social.twitter}
                  className="flex h-10 w-10 rotate-3 items-center justify-center border-3 border-black bg-blue-200 text-black transition-all hover:rotate-6 hover:bg-blue-300"
                  style={{ boxShadow: '3px 3px 0px rgba(0,0,0,1)' }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={member.social.linkedin}
                  className="flex h-10 w-10 -rotate-2 items-center justify-center border-3 border-black bg-pink-200 text-black transition-all hover:-rotate-6 hover:bg-pink-300"
                  style={{ boxShadow: '3px 3px 0px rgba(0,0,0,1)' }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={member.social.github}
                  className="flex h-10 w-10 rotate-1 items-center justify-center border-3 border-black bg-green-200 text-black transition-all hover:rotate-3 hover:bg-green-300"
                  style={{ boxShadow: '3px 3px 0px rgba(0,0,0,1)' }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <svg width="0" height="0">
        <defs>
          <filter id="sketch-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
      </svg>
    </section>
  );
}
