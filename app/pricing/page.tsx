import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Pricing() {
    return (
        <div className="min-h-screen">
            <Navigation currentPage="pricing" />

            {/* Hero Section */}
            <section className="gradient-hero min-h-screen flex items-center justify-center pt-20">
                <div className="max-w-7xl mx-auto px-8 py-24">
                    <div className="flex flex-col lg:flex-row justify-center gap-16">
                        {/* B1 Agent Subscription Card */}
                        <div className="flex-1 max-w-lg space-y-9 py-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                            </div>
                            <h2 className="text-5xl font-serif-display text-black">
                                Agentic AI for<br />
                                SAP Business One
                            </h2>
                            <div className="w-30 h-px bg-primary dashed-border"></div>
                            <p className="text-lg text-black">Description</p>

                            {/* Main Pricing Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-primary/30 card-shadow-small">
                                <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl lg:text-4xl font-serif-display text-black">
                                            10 users,<br />
                                            10 million tokens,<br />
                                            12 months
                                        </h3>
                                        <p className="text-lg text-black">B1 Agent Subscription</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl lg:text-6xl font-serif-display text-primary">3,000</div>
                                        <div className="text-2xl lg:text-4xl font-serif-display text-primary">Euro</div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Usage Section */}
                            <div className="space-y-6">
                                <h3 className="text-2xl lg:text-4xl font-serif-display text-black">Additional Usage</h3>

                                {/* Additional User */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 lg:p-6 border border-primary/30 card-shadow-small">
                                    <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                                        <div className="space-y-2">
                                            <p className="text-lg lg:text-2xl font-serif-display text-black">1 additional user, 1 month</p>
                                            <p className="text-lg text-black">B1 Agent Subscription</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl lg:text-5xl font-serif-display text-primary">30</div>
                                            <div className="text-xl lg:text-2xl font-serif-display text-primary">Euro</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Agent */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 lg:p-6 border border-primary/30 card-shadow-small">
                                    <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                                        <div className="space-y-2">
                                            <p className="text-lg lg:text-2xl font-serif-display text-black">1 additional agent, 1 month</p>
                                            <p className="text-lg text-black">B1 Agent Subscription</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl lg:text-5xl font-serif-display text-primary">30</div>
                                            <div className="text-xl lg:text-2xl font-serif-display text-primary">Euro</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Tokens */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 lg:p-6 border border-primary/30 card-shadow-small">
                                    <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                                        <div className="space-y-2">
                                            <p className="text-lg lg:text-2xl font-serif-display text-black">1 million tokens</p>
                                            <p className="text-lg text-black">B1 Agent Subscription</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl lg:text-5xl font-serif-display text-primary">30</div>
                                            <div className="text-xl lg:text-2xl font-serif-display text-primary">Euro</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise AI Agent Build Platform Card */}
                        <div className="flex-1 max-w-lg space-y-9 py-8">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-primary rounded-full"></div>
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-serif-display text-black">
                                Enterprise AI Agent Build Platform
                            </h2>
                            <div className="w-30 h-px bg-primary dashed-border"></div>
                            <p className="text-lg text-black">
                                Agentic Platform Professional<br />
                                (user and agent # limit to B1 agent subscription)
                            </p>

                            {/* Enterprise Pricing Card */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 lg:p-8 border border-primary/30 card-shadow-small">
                                <div className="flex flex-col lg:flex-row justify-between items-end gap-4">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl lg:text-4xl font-serif-display text-black">
                                            user and agent<br />
                                            # limit to B1 agent subscription<br />
                                            12 months
                                        </h3>
                                        <p className="text-lg text-black">B1 Agent Subscription</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-4xl lg:text-6xl font-serif-display text-primary">2,000</div>
                                        <div className="text-2xl lg:text-4xl font-serif-display text-primary">Euro</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
