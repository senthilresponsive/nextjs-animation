// components/PartnerTypesSection.tsx
export default function PartnerTypes() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Tech Partner Block */}
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technology partners (ISVs)</h2>
          <p className="mb-4 text-gray-700">
            Integrate Responsive into your product ecosystem to unlock new value for your customers...
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://images.prismic.io/responsiveio/aG9vAkMqNJQqHvi3_illustration-3-.png?auto=format,compress"
            alt="Tech partner"
            className="w-full animate-zoom-once"
          />
        </div>
      </div>

      {/* Reseller Block */}
      <div className="grid md:grid-cols-2 items-center gap-10 md:flex-row-reverse">
        <div className="flex justify-center">
          <img
            src="https://images.prismic.io/responsiveio/aG9vBEMqNJQqHvi5_illustration.png?auto=format,compress"
            alt="Reseller"
            className="w-full animate-zoom-once"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Resellers</h2>
          <p className="mb-4 text-gray-700">
            Expand your portfolio with a proven platform trusted by nearly 2,000 organizations worldwide...
          </p>
        </div>
      </div>
    </section>
  );
}
