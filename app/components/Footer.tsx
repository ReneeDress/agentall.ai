import Logo from './Logo';

export default function Footer() {
    return (
        <footer className="bg-foreground text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Logo size={40} showText={true} className="text-white" />
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Purpose-built agentic AI for SAP Business One. Empowering SMBs with intelligent digital workers to maximize competency and value in the AI era.
                        </p>
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                                LinkedIn
                            </button>
                            <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                                Twitter
                            </button>
                            <button className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                                GitHub
                            </button>
                        </div>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><button className="hover:text-white transition-colors text-left">Agentic AI for SAP Business One</button></li>
                            <li><button className="hover:text-white transition-colors text-left">Enterprise AI Agent Build Platform</button></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><button className="hover:text-white transition-colors text-left">Product Documentation</button></li>
                            <li><button className="hover:text-white transition-colors text-left">User Manual</button></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><button className="hover:text-white transition-colors text-left">About Us</button></li>
                            <li><button className="hover:text-white transition-colors text-left">Our Mission</button></li>
                            <li><button className="hover:text-white transition-colors text-left">Our Team</button></li>
                            <li><button className="hover:text-white transition-colors text-left">The LinkedWorld</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-400">
                            © 2025 AgentAll.ai. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm text-gray-400">
                            <button className="hover:text-white transition-colors">Privacy Policy</button>
                            <button className="hover:text-white transition-colors">Terms of Service</button>
                            <button className="hover:text-white transition-colors">Cookies</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
