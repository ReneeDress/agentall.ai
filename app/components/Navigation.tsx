import Link from 'next/link';
import Logo from './Logo';

interface NavigationProps {
    currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Logo size={32} showText={true} />
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        className={`hover:text-primary transition-colors ${currentPage === 'products' ? 'text-primary font-semibold' : 'text-black'
                            }`}
                    >
                        Products
                    </Link>
                    <Link
                        href="/"
                        className={`hover:text-primary transition-colors ${currentPage === 'resources' ? 'text-primary font-semibold' : 'text-black'
                            }`}
                    >
                        Resources
                    </Link>
                    <Link
                        href="/"
                        className={`hover:text-primary transition-colors ${currentPage === 'company' ? 'text-primary font-semibold' : 'text-black'
                            }`}
                    >
                        Company
                    </Link>
                    <Link
                        href="/pricing"
                        className={`hover:text-primary transition-colors ${currentPage === 'pricing' ? 'text-primary font-semibold' : 'text-black'
                            }`}
                    >
                        Pricing
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/" className="text-black hover:text-primary transition-colors">Login</Link>
                    <Link href="/" className="text-black hover:text-primary transition-colors">Free Trial</Link>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                        Get A Demo
                    </button>
                </div>
            </div>
        </nav>
    );
}