'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { IMAGES } from '../utils/images';

export default function Company() {
    return (
        <div className="min-h-screen">
            <Navigation currentPage="company" />

            {/* Company Video Section */}
            <section className="min-h-screen flex items-center justify-center py-24 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
                    {/* Title Section */}
                    <div className="text-center space-y-6 lg:space-y-9 mb-12 lg:mb-16">
                        <div className="group cursor-pointer space-y-9">
                            <div className="flex justify-center">
                                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                            </div>
                            <h1 className="section-title text-foreground">
                                About Our Company
                            </h1>
                            <p className="text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto">
                                Discover the innovation and vision behind our products
                            </p>
                            <div className="flex justify-center">
                                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Video Player */}
                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-6xl">
                            <video
                                src={IMAGES.COMPANY_VIDEO}
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls
                                className="w-full card-shadow transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

