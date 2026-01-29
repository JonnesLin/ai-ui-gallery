export default function CyberpunkTeam() {
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
    <section className="min-h-screen bg-black px-4 py-24" style={{ fontFamily: '"Orbitron", sans-serif' }}>
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-6xl font-black uppercase text-cyan-400" style={{
            textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)'
          }}>
            &lt;TEAM/&gt;
          </h2>
          <p className="text-xl font-bold uppercase tracking-widest text-pink-500">NEURAL NETWORK ACTIVATED</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border-2 border-cyan-500 bg-gradient-to-b from-gray-900 to-black p-6 transition-all duration-300 hover:border-pink-500"
              style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}
            >
              <div className="absolute right-0 top-0 h-2 w-2 animate-pulse bg-pink-500" style={{ boxShadow: '0 0 10px rgba(236, 72, 153, 0.8)' }}></div>
              <div className="absolute left-0 bottom-0 h-2 w-2 animate-pulse bg-cyan-500" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)' }}></div>

              <div className="mb-6 aspect-square w-full overflow-hidden border-2 border-cyan-400 bg-gradient-to-br from-cyan-900 to-purple-900 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-cyan-500/20 mix-blend-overlay"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0, 255, 255, 0.1) 4px, rgba(0, 255, 255, 0.1) 8px)',
                }}></div>
              </div>

              <div className="mb-2 border-l-4 border-cyan-500 pl-3">
                <h3 className="text-xl font-black uppercase text-white">{member.name}</h3>
              </div>

              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-pink-400">&gt; {member.role}</p>
              <p className="mb-6 text-xs leading-relaxed text-cyan-100/70">{member.bio}</p>

              <div className="flex gap-3">
                <a
                  href={member.social.twitter}
                  className="flex h-10 w-10 items-center justify-center border border-cyan-500 bg-black/50 text-cyan-400 transition-all hover:border-pink-500 hover:bg-pink-500/20 hover:text-pink-400"
                  style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={member.social.linkedin}
                  className="flex h-10 w-10 items-center justify-center border border-cyan-500 bg-black/50 text-cyan-400 transition-all hover:border-pink-500 hover:bg-pink-500/20 hover:text-pink-400"
                  style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={member.social.github}
                  className="flex h-10 w-10 items-center justify-center border border-cyan-500 bg-black/50 text-cyan-400 transition-all hover:border-pink-500 hover:bg-pink-500/20 hover:text-pink-400"
                  style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}
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
    </section>
  );
}
