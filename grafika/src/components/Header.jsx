import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold tracking-tight text-slate-900">
                    GRAFIKA
                </Link>
                <nav className="flex space-x-8">
                    <Link to="/services" className="text-slate-600 hover:text-slate-900 transition-colors">
                        Послуги
                    </Link>
                    <Link to="/builder" className="text-slate-600 hover:text-slate-900 transition-colors">
                        Конструктор
                    </Link>
                    <Link to="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                        Про нас
                    </Link>
                </nav>
                <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
                    Замовити
                </button>
            </div>
        </header>
    );
}
