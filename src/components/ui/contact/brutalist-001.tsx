export default function BrutalistContact() {
  return (
    <div className="min-h-screen bg-yellow-400 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="border-8 border-black bg-white p-8 mb-8">
          <h1 className="text-6xl md:text-8xl font-black uppercase mb-4">CONTACT</h1>
          <p className="text-2xl font-bold uppercase">WE DON'T BITE. PROBABLY.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border-8 border-black bg-white p-8">
            <h2 className="text-3xl font-black uppercase mb-6 bg-black text-white p-4">SEND MESSAGE</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-xl font-black uppercase mb-2">NAME*</label>
                <input
                  type="text"
                  className="w-full border-4 border-black p-4 text-xl font-bold focus:outline-none focus:border-red-600"
                  placeholder="YOUR NAME"
                />
              </div>

              <div>
                <label className="block text-xl font-black uppercase mb-2">EMAIL*</label>
                <input
                  type="email"
                  className="w-full border-4 border-black p-4 text-xl font-bold focus:outline-none focus:border-red-600"
                  placeholder="YOUR@EMAIL.COM"
                />
              </div>

              <div>
                <label className="block text-xl font-black uppercase mb-2">MESSAGE*</label>
                <textarea
                  rows={5}
                  className="w-full border-4 border-black p-4 text-xl font-bold focus:outline-none focus:border-red-600 resize-none"
                  placeholder="WHAT'S ON YOUR MIND?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white text-2xl font-black uppercase py-6 border-4 border-black hover:bg-red-600 hover:border-red-600 transition-colors"
              >
                SUBMIT NOW →
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="border-8 border-black bg-red-500 p-8">
              <h3 className="text-2xl font-black uppercase mb-4">LOCATION</h3>
              <p className="text-xl font-bold">
                999 BRUTALIST BLVD<br />
                CONCRETE CITY, BC 99999<br />
                PLANET EARTH
              </p>
            </div>

            <div className="border-8 border-black bg-blue-500 p-8">
              <h3 className="text-2xl font-black uppercase mb-4">EMAIL</h3>
              <p className="text-xl font-bold break-all">HELLO@BRUTAL.DESIGN</p>
            </div>

            <div className="border-8 border-black bg-green-500 p-8">
              <h3 className="text-2xl font-black uppercase mb-4">PHONE</h3>
              <p className="text-xl font-bold">+1 (555) 000-0000</p>
            </div>

            <div className="border-8 border-black bg-purple-500 p-8">
              <h3 className="text-2xl font-black uppercase mb-4">SOCIAL</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="bg-black text-white px-6 py-3 text-lg font-black border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors">
                  TWITTER
                </a>
                <a href="#" className="bg-black text-white px-6 py-3 text-lg font-black border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors">
                  LINKEDIN
                </a>
                <a href="#" className="bg-black text-white px-6 py-3 text-lg font-black border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors">
                  INSTAGRAM
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
