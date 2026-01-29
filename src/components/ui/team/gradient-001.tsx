export default function GradientTeam() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "15 years of experience in scaling tech companies",
      gradient: "from-pink-500 to-rose-500",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Marcus Williams",
      role: "Chief Technology Officer",
      bio: "Former principal engineer at major tech firms",
      gradient: "from-purple-500 to-indigo-500",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Design",
      bio: "Award-winning product designer and design systems expert",
      gradient: "from-cyan-500 to-blue-500",
      social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Built and led distributed teams across 3 continents",
      gradient: "from-orange-500 to-amber-500",
      social: { twitter: "#", linkedin: "#", github: "#" }
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <h2 className="mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-5xl font-black text-transparent">
            Meet The Team
          </h2>
          <p className="text-xl text-purple-200">Creative minds building the future</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/5 p-1 backdrop-blur-sm transition-all duration-500 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>

              <div className="relative rounded-[22px] bg-gray-900 p-6">
                <div className={`mb-6 aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br ${member.gradient} p-1`}>
                  <div className="h-full w-full rounded-[14px] bg-gray-800"></div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white">{member.name}</h3>
                <p className={`mb-3 text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                <p className="mb-6 text-sm leading-relaxed text-gray-300">{member.bio}</p>

                <div className="flex gap-3">
                  <a
                    href={member.social.twitter}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${member.gradient} text-white transition-transform hover:scale-110`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${member.gradient} text-white transition-transform hover:scale-110`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href={member.social.github}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${member.gradient} text-white transition-transform hover:scale-110`}
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
