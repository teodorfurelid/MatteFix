import Image from "next/image";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
      <main className="bg-white text-gray-800">

        <Navbar />

        {/* Hero section */}
        <section className="bg-[#1E3A5F] text-white min-h-screen flex flex-col items-center justify-center px-6 gap-8 pt-24 pb-10">
          <p className="bg-[#2E6DB4] font-semibold tracking-widest uppercase text-sm">Matematikk privatundervisning</p>
          <h1 className="text-5xl font-bold text-center max-w-2xl leading-tight">
            Forstå mamtematikk - på din måte
          </h1>
          <p className="text-lg text-center max-w-xl text-blue-100">
            Vi hjelper studenter ved HVL Bergen med å mestre Matematikk. Book en time med oss i dag.
          </p>
          <a href="#book" className="bg-[#2E6DB4] hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-colors">
            Book en time med oss
          </a>
          <div className="mt-8 w-full max-w-3xl aspect-video bg-white/10 rounded-2xl flex items-center justify-center border border-white-200">
            <p className="text-white/50">Video kommer snart</p>
          </div>
        </section>

        {/* Om Oss Section */}
        <section className="py-24 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-16">Om oss</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* PERAON 1 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                Foto
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A5F]">Teodor Haaland Furelid</h3>
              <p className="text-gray-600 leading-relaxed">
                Kort beskrivelse om deg. Hva du studerer, hva er din styrke i matematikk?
              </p>
            </div>

            {/* PERAON 2 */}
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                Foto
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A5F]">Henrik Augen Egge</h3>
              <p className="text-gray-600 leading-relaxed">
                Kort beskrivelse om deg. Hva du studerer, hva er din styrke i matematikk?
              </p>
            </div>
          </div>
        </section>

        {/* Booking + Kart Section */}
        <section id="book" className="py-24 px-6 bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-16">Book en time</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Booking Placeholer */}
            <div
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-center justify-center min-h-96 md:col-span-2">
              <p className="text-gray-400">Kalender kommer her</p>
            </div>

            {/* Kart/Map Placeholer */}
            <div
                className="rounded-2xl overflow-hidden shadow-sm border-gray-100 min-h-96">
              <iframe
                  src="https://maps.google.com/maps?q=HVL+Bergen&z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </div>
        </section>
      </main>
  );
}