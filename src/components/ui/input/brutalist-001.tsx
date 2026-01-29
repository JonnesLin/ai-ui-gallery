export default function BrutalistInput() {
  return (
    <div className="min-h-screen p-8 flex flex-col gap-8 max-w-md bg-white">
      {/* Basic Brutalist Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest text-black">
          Email
        </label>
        <input
          type="email"
          placeholder="TYPE HERE"
          className="w-full px-4 py-4 text-black placeholder-gray-400 bg-white border-4 border-black focus:outline-none focus:bg-yellow-300 transition-colors duration-100"
        />
      </div>

      {/* Brutalist Input with Offset Shadow */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest text-black">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-0 bg-black translate-x-2 translate-y-2" />
          <input
            type="text"
            placeholder="FIND STUFF"
            className="relative w-full px-4 py-4 text-black placeholder-gray-400 bg-white border-4 border-black focus:outline-none focus:bg-cyan-300 transition-colors duration-100"
          />
        </div>
      </div>

      {/* Inverted Brutalist */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest text-white bg-black px-2 py-1 inline-block">
          Username
        </label>
        <input
          type="text"
          placeholder="YOUR NAME"
          className="w-full px-4 py-4 text-white placeholder-gray-400 bg-black border-4 border-black focus:outline-none focus:border-white transition-colors duration-100"
        />
      </div>

      {/* Focused State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest text-black">
          Active Input
        </label>
        <div className="relative">
          <div className="absolute inset-0 bg-black translate-x-2 translate-y-2" />
          <input
            type="text"
            defaultValue="TYPING..."
            className="relative w-full px-4 py-4 text-black bg-yellow-300 border-4 border-black focus:outline-none"
          />
        </div>
        <p className="text-xs font-bold uppercase text-black">* ACTIVE STATE</p>
      </div>

      {/* Error State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest text-red-600">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-0 bg-red-600 translate-x-2 translate-y-2" />
          <input
            type="password"
            defaultValue="wrong"
            className="relative w-full px-4 py-4 text-red-600 bg-white border-4 border-red-600 focus:outline-none"
          />
        </div>
        <p className="text-xs font-black uppercase text-red-600 flex items-center gap-2">
          <span className="inline-block w-4 h-4 bg-red-600" />
          ERROR: INVALID
        </p>
      </div>

      {/* Disabled State */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-black uppercase tracking-widest text-gray-400">
          Disabled
        </label>
        <input
          type="text"
          value="LOCKED"
          disabled
          className="w-full px-4 py-4 text-gray-400 bg-gray-200 border-4 border-gray-400 border-dashed cursor-not-allowed"
        />
      </div>

      {/* Brutalist Card Form */}
      <div className="relative mt-4">
        <div className="absolute inset-0 bg-black translate-x-3 translate-y-3" />
        <div className="relative p-6 bg-white border-4 border-black">
          <h3 className="text-xl font-black uppercase mb-6 border-b-4 border-black pb-2">
            Sign Up
          </h3>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="NAME"
              className="w-full px-4 py-3 text-black placeholder-gray-400 bg-white border-4 border-black focus:outline-none focus:bg-lime-300"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full px-4 py-3 text-black placeholder-gray-400 bg-white border-4 border-black focus:outline-none focus:bg-lime-300"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full px-4 py-3 text-black placeholder-gray-400 bg-white border-4 border-black focus:outline-none focus:bg-lime-300"
            />
            <button className="w-full py-3 text-white font-black uppercase bg-black border-4 border-black hover:bg-white hover:text-black transition-colors duration-100">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Striped Input */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="text-sm font-black uppercase tracking-widest text-black">
          Striped Style
        </label>
        <div
          className="p-1"
          style={{
            background: 'repeating-linear-gradient(45deg, #000, #000 2px, #fff 2px, #fff 8px)',
          }}
        >
          <input
            type="text"
            placeholder="PATTERN INPUT"
            className="w-full px-4 py-4 text-black placeholder-gray-400 bg-white border-none focus:outline-none focus:bg-yellow-300"
          />
        </div>
      </div>
    </div>
  );
}
