export default function Footer() {
  return (
    <footer className="bg-blue-200 text-gray-800 py-8 shadow-inner mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* O nás */}
        <div>
          <h3 className="font-bold mb-2">O nás</h3>
          <p>Jsme tým mladých vývojářů, kteří tvoří moderní e-shopové řešení.</p>
        </div>

        {/* Navigace */}
        <nav>
          <h3 className="font-bold mb-2">Navigace</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Domů</a></li>
            <li><a href="/all-products" className="hover:underline">Produkty</a></li>
            <li><a href="/contact" className="hover:underline">Kontakt</a></li>
          </ul>
        </nav>

        {/* Kontakt */}
        <address className="not-italic">
          <h3 className="font-bold mb-2">Kontakt</h3>
          <p>Email: <a href="mailto:info@autoformula.cz" className="hover:underline">info@autoformula.cz</a></p>
          <p>Telefon: <a href="tel:+420777456789" className="hover:underline">+420 777 456 789</a></p>
        </address>
      </div>

      <div className="text-center text-xs text-gray-600 mt-6">
        &copy; 2025 Eshop Team Red. Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
