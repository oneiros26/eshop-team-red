// src/components/common/footer/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-200 text-gray-800 py-8 shadow-inner mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* O nás */}
        <div>
          <h3 className="font-bold mb-2">O nás</h3>
          <p>
            Jsme tým mladých vývojářů, kteří tvoří moderní e-shopové řešení.
          </p>
        </div>

        {/* Odkazy */}
        <div>
          <h3 className="font-bold mb-2">Navigace</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Domů</a></li>
            <li><a href="/all-products" className="hover:underline">Produkty</a></li>
            <li><a href="/contact" className="hover:underline">Kontakt</a></li>
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <h3 className="font-bold mb-2">Kontakt</h3>
          <p>Email: info@eshop.cz</p>
          <p>Telefon: +420 123 456 789</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-600 mt-6">
        &copy; 2025 Eshop Team Red. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
