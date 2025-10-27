'use client';

import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import DemoForm from '../../components/DemoForm';
import GradientDivider from '../../components/GradientDivider';
import { getImagePath } from '@/app/utils/images';
import Image from 'next/image';

export default function PlatformProduct() {
    const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

    return (
        <div className="min-h-screen">
            <Navigation onDemoClick={() => setIsDemoFormOpen(true)} />

            {/* Hero Section */}
            <section className="min-h-screen lg:min-h-0 lg:h-auto lg:max-h-5xl flex flex-col justify-between">
                <div className="w-full mx-auto pt-20 flex-1 flex flex-col justify-between">
                    <div className="max-w-7xl mx-auto px-8 pt-16 text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="text-sm text-primary uppercase tracking-wider font-bold">
                                Agentic AI Build Platform
                            </div>
                        </div>
                        <h1 className="hero-title gradient-text">
                            Low-code agentic workflow
                            <br />
                            build and customization platform
                            <br />
                            infuse AI into SAP Business One,<br />
                            add-ons and beyond
                        </h1>
                        {/* <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
                            Role based, seamlessly integrated, out-of-box adoption with enterprise security
                        </p> */}
                    </div>

                    {/* Hero Image */}
                    <div className="flex flex-col items-center space-y-8 pt-8">
                        <div className="w-full max-w-6xl mx-auto px-8">
                            <div className="relative overflow-hidden h-[600px] w-auto">
                                <Image
                                    src={getImagePath("/images/platform/platform.png")}
                                    alt="Platform Solution"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gradient Divider */}
            <GradientDivider />

            {/* Section 1: Customize and build agentic workflows */}
            <section className="py-20 px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left side: Content */}
                        <div className="flex flex-col items-start gap-12">
                            <h2 className="section-title font-serif-display text-foreground">
                                Customize and build agentic workflows with built-in business skills
                            </h2>
                            <div className="flex justify-center">
                                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">
                                    Intuitive Canvas to customize and build workflows easily
                                </p>
                                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">
                                    Built-in with SAP Business One business services, i.e. encapsulated APIs
                                </p>
                                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">
                                    Built-in with MCP tools: Document Extraction, ChatBI etc.
                                </p>
                            </div>
                        </div>

                        {/* Right side: Image */}
                        <div className="relative">
                            <div className="card-shadow-white p-6 min-h-120">
                                <Image
                                    src={getImagePath("/images/platform/platform-1.png")}
                                    alt="Choose your preferred Large Language Models"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Role based authorization control */}
            <section className="py-20 px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left side: Image */}
                        <div className="relative">
                            <div className="card-shadow-white p-6 min-h-120">
                                <Image
                                    src={getImagePath("/images/platform/platform-2.png")}
                                    alt="Choose your preferred Large Language Models"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Right side: Content */}
                        <div className="flex flex-col items-start gap-12">
                            <h2 className="section-title font-serif-display text-foreground">
                                Role based authorization control and data security applies everywhere
                            </h2>
                            <div className="flex justify-center">
                                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">
                                    Authorization control applied at different level from agents to workflows, and associated with SAP Business One user roles
                                </p>
                                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">
                                    Data access control strictly defined at object-level granularity
                                </p>
                                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">
                                    Enterprise level security and data privacy protection rules compliant
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Choose your preferred Large Language Models */}
            <section className="py-20 px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Left side: Content */}
                        <div className="flex flex-col items-start gap-12">
                            <h2 className="section-title font-serif-display text-foreground">
                                Choose your preferred Large Language Models
                            </h2>
                            <div className="flex justify-center">
                                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">
                                    Model-as-a-Service to plug in any global large language model or consume agentall.ai proprietary LLM offering
                                </p>
                            </div>
                        </div>

                        {/* Right side: Image */}
                        <div className="relative">
                            <div className="card-shadow-white p-6 min-h-120">
                                <Image
                                    src={getImagePath("/images/platform/platform-3.png")}
                                    alt="Choose your preferred Large Language Models"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Demo Form Modal */}
            <DemoForm
                isOpen={isDemoFormOpen}
                onClose={() => setIsDemoFormOpen(false)}
            />
        </div>
    );
}
