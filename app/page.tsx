'use client';

import Image from "next/image";
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import HeroCarouselItem from './components/HeroCarouselItem';
import GradientDivider from './components/GradientDivider';
import TransformAnimation from './components/TransformAnimation';
import DemoForm from './components/DemoForm';
import { IMAGES } from './utils/images';

export default function Home() {
  const [uxActiveIndex, setUxActiveIndex] = useState(0);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  // Carousel data for Hero section
  const heroCarouselItems = [
    {
      id: 'hero-1',
      content: (
        <HeroCarouselItem
          image={IMAGES.HERO_1}
          title="Harness Power of AI for SAP Business One with the Agentic Layer"
          subtitle="Efficiency Improvement"
          fullWidth={false}
          isActive={true}
          animationDelay={0}
          cardPosition={{ x: -150, y: 100, anchor: 'center' }}
          subtitlePosition={{ x: 220, y: -50, anchor: 'center' }}
        />
      )
    },
    {
      id: 'hero-2',
      content: (
        <HeroCarouselItem
          image={IMAGES.HERO_2}
          title="Empower SMBs with Digital Workers"
          subtitle="Productivity Gain"
          fullWidth={false}
          isActive={false}
          animationDelay={200}
          cardPosition={{ x: 150, y: 100, anchor: 'center' }}
          subtitlePosition={{ x: -250, y: -80, anchor: 'center' }}
        />
      )
    },
    {
      id: 'hero-3',
      content: (
        <HeroCarouselItem
          image={IMAGES.HERO_3}
          title="Transform the way SMBs Operates"
          subtitle="Profits Optimization"
          fullWidth={false}
          isActive={false}
          animationDelay={400}
          cardPosition={{ x: -200, y: 100, anchor: 'center' }}
          subtitlePosition={{ x: 250, y: -50, anchor: 'center' }}
        />
      )
    }
  ];

  return (
    <div className="min-h-screen h-screen">
      <Navigation onDemoClick={() => setIsDemoFormOpen(true)} />

      {/* Hero Section */}
      <section className="min-h-screen lg:min-h-0 lg:h-auto lg:max-h-5xl flex flex-col justify-between">
        <div className="w-full mx-auto pt-16 lg:pt-20 flex-1 flex flex-col justify-between">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 lg:pt-16 text-center space-y-4 lg:space-y-6">
            {/* Decorative dot */}
            <div className="flex justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h1 className="hero-title gradient-text">
              Future-Proof<br />
              SAP Business One Success<br />
              in the AI Era
            </h1>

            <p className="text-base lg:text-lg text-black max-w-xl lg:max-w-3xl mx-auto leading-relaxed">
              Purpose-built agentic AI for SAP Business One, empowering your enterprise
              with digital workers to maximize efficiency and optimize performance
            </p>

            <div className="flex justify-center space-x-4 pt-2">
              {/* <button className="border border-black px-6 py-4 hover:bg-black hover:text-white transition-colors cursor-pointer">
                Start Free Trial
              </button> */}
              <button
                onClick={() => setIsDemoFormOpen(true)}
                className="bg-primary text-white px-4 py-3 text-sm lg:px-6 lg:py-4 lg:text-base hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Get A Demo
              </button>
            </div>
          </div>

          {/* Bottom Carousel */}
          <Carousel
            items={heroCarouselItems}
            fullWidth={true}
            autoPlay={true}
            autoPlayInterval={5000}
            showNavigation={false}
            showDots={false}
            showProgressBar={false}
            infiniteScroll={true}
            height="h-auto"
          />
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      {/* Digital Workers Section */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* 顶部居中大标题 */}
          <div className="text-center space-y-6 lg:space-y-9 mb-8 lg:mb-16">
            <div className="group cursor-pointer space-y-9">
              <div className="flex justify-center">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h2 className="section-title text-foreground">
                Harness Power of AI for SAP Business One with the Agentic Layer
              </h2>
              <p className="text-base lg:text-lg text-foreground/70">
                best of breed, easily extensible, compliant and secure
              </p>
              <div className="flex justify-center">
                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-9">
            <div className="w-full lg:flex-1 lg:max-w-lg space-y-4 lg:space-y-6 py-4 lg:py-8">
              <h3 className="text-xl lg:text-2xl font-serif-display text-foreground">
                Empower SMBs with Digital Workers
              </h3>
              <div className="group cursor-pointer">
                <p className="text-sm lg:text-base text-black leading-relaxed">
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-1">AI agents as Digital Workers</span><br />
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-2">monitor business data and performance,</span><br />
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-3">proactively plan and recommend actions, automate business</span><br />
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-4">processes, engage with human workers, and drive continuous,</span><br />
                  <span className="relative inline-block break-words lg:whitespace-nowrap group-hover:before:animate-highlight-5">nonstop optimization</span>
                </p>
              </div>
            </div>
            <div className="w-full lg:flex-1 flex flex-col items-center space-y-4 lg:space-y-6">
              <Carousel
                items={[
                  {
                    id: 'digital-workers-1',
                    content: (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={IMAGES.DIGITAL_WORKERS_1}
                          alt="Digital Workers Dashboard 1"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-lg h-full w-auto object-contain"
                        />
                      </div>
                    )
                  },
                  {
                    id: 'digital-workers-2',
                    content: (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={IMAGES.DIGITAL_WORKERS_2}
                          alt="Digital Workers Dashboard 2"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-lg h-full w-auto object-contain"
                        />
                      </div>
                    )
                  },
                  {
                    id: 'digital-workers-3',
                    content: (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={IMAGES.DIGITAL_WORKERS_3}
                          alt="Digital Workers Dashboard 3"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="rounded-lg h-full w-auto object-contain"
                        />
                      </div>
                    )
                  }
                ]}
                autoPlay={true}
                autoPlayInterval={4000}
                showNavigation={false}
                showDots={false}
                showProgressBar={true}
                fullWidth={true}
                infiniteScroll={false}
                height="h-80 lg:h-140"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
            <video
              src={IMAGES.ANALYTICS_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg lg:rounded-2xl card-shadow w-full lg:w-auto h-auto max-h-[400px] lg:h-[722px]"
            >
              Your browser does not support the video tag.
            </video>
            <div className="flex-1 space-y-6 lg:space-y-9 py-4 lg:py-8">
              <div className="group cursor-pointer space-y-9">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h2 className="section-title text-foreground">Reinvent Analytics</h2>
                <div className="w-30 h-px bg-primary group-hover:w-40 transition-all duration-500"></div>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">Query your business data anywhere, any time</p>
                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">Generate real-time report and dashboard with reasoning and visualization</p>
                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">Make manual, static report generation a thing of the past</p>
                <p className="text-lg text-black relative inline-block hover:text-xl hover:before:animate-highlight-1 cursor-pointer transition-all duration-300">Provide insights and Recommendations - more than just reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience Section */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6 lg:space-y-9">
            <div className="group cursor-pointer space-y-9">
              <div className="flex justify-center">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h2 className="section-title text-foreground">Modernize User Experience</h2>
              <div className="flex justify-center">
                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-0">
              <div className="flex-1 space-y-6 lg:space-y-12 text-left">
                <div className={`backdrop-blur-sm p-4 lg:p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group ${uxActiveIndex === 0
                  ? 'bg-purple-200/30 card-shadow-small hover:bg-purple-300/40'
                  : 'bg-white/50 card-shadow-white hover:bg-purple-100/50'
                  }`}>
                  <p className="text-lg lg:text-xl text-black group-hover:text-purple-700 transition-colors duration-300">
                    <span className="font-serif-display text-2xl lg:text-3xl group-hover:text-purple-800 transition-colors duration-300">Nature language interaction </span>
                    for seamless integrated and intuitive experience like never before
                  </p>
                  <div className="w-0 group-hover:w-full h-0.5 bg-purple-600 transition-all duration-500 mt-4"></div>
                </div>
                <div className={`backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group ${uxActiveIndex === 1
                  ? 'bg-purple-200/30 card-shadow-small hover:bg-purple-300/40'
                  : 'bg-white/50 card-shadow-white hover:bg-purple-100/50'
                  }`}>
                  <p className="text-xl text-black group-hover:text-purple-700 transition-colors duration-300">
                    <span className="font-serif-display text-3xl group-hover:text-purple-800 transition-colors duration-300">Let digital workers </span>
                    plan and act to optimize profits and performance
                  </p>
                  <div className="w-0 group-hover:w-full h-0.5 bg-purple-600 transition-all duration-500 mt-4"></div>
                </div>
                <div className={`backdrop-blur-sm p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group ${uxActiveIndex === 2
                  ? 'bg-purple-200/30 card-shadow-small hover:bg-purple-300/40'
                  : 'bg-white/50 card-shadow-white hover:bg-purple-100/50'
                  }`}>
                  <p className="text-xl text-black group-hover:text-purple-700 transition-colors duration-300">
                    <span className="font-serif-display text-3xl group-hover:text-purple-800 transition-colors duration-300">Available on mobile </span>
                    with WhatsApp integration
                  </p>
                  <div className="w-0 group-hover:w-full h-0.5 bg-purple-600 transition-all duration-500 mt-4"></div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center space-y-6">
                <Carousel
                  items={[
                    {
                      id: 'ux-1',
                      content: (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={IMAGES.UX_IMAGE_1}
                            alt="User Experience Interface 1"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-2xl h-[722px] w-auto object-contain"
                          />
                        </div>
                      )
                    },
                    {
                      id: 'ux-2',
                      content: (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <video
                            src={IMAGES.UX_VIDEO}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-2xl h-[800px] w-auto object-contain"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )
                    },
                    {
                      id: 'ux-3',
                      content: (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={IMAGES.UX_IMAGE_3}
                            alt="User Experience Interface 3"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="rounded-2xl h-[722px] w-auto object-contain"
                          />
                        </div>
                      )
                    }
                  ]}
                  autoPlay={true}
                  autoPlayInterval={6000}
                  showNavigation={false}
                  showDots={false}
                  showProgressBar={true}
                  fullWidth={true}
                  infiniteScroll={false}
                  height="h-[400px] lg:h-[800px]"
                  onIndexChange={setUxActiveIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform SMBs Section */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6 lg:space-y-9 pb-16 lg:pb-32">
            <div className="group cursor-pointer space-y-9">
              <div className="flex justify-center">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <h2 className="section-title text-foreground">
                Transform the way SMBs Operates<br />
                by Digital Workers
              </h2>
              <div className="flex justify-center">
                <div className="w-30 h-px bg-primary group-hover:w-60 transition-all duration-500"></div>
              </div>
            </div>

            <div className="flex justify-center px-0">
              <div className="flex-1 space-y-8">
                <TransformAnimation className="w-full" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 text-left">
                  <div className="bg-pink-200/30 p-6 lg:p-8 space-y-3 lg:space-y-4 transition-all duration-500 hover:bg-pink-300/40 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 cursor-pointer group">
                    <h3 className="text-2xl lg:text-3xl font-serif-display text-black group-hover:text-pink-800 transition-colors duration-300">
                      Improve<br />
                      Efficiency and<br />
                      Reduce Cost
                    </h3>
                    <p className="text-base lg:text-lg text-black group-hover:text-pink-700 transition-colors duration-300">
                      Digital workers automate tasks, reducing manual workload carried out by end users
                    </p>
                    <div className="w-0 group-hover:w-full h-0.5 bg-pink-600 transition-all duration-500 mt-4"></div>
                  </div>
                  <div className="bg-purple-200/30 p-6 lg:p-8 space-y-3 lg:space-y-4 transition-all duration-500 hover:bg-purple-300/40 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group">
                    <h3 className="text-2xl lg:text-3xl font-serif-display text-black group-hover:text-purple-800 transition-colors duration-300">
                      Make Impact with Business Data and Knowledge
                    </h3>
                    <p className="text-base lg:text-lg text-black group-hover:text-purple-700 transition-colors duration-300">
                      Harness power of AI to unlock value from business data, maximize profits and business performance
                    </p>
                    <div className="w-0 group-hover:w-full h-0.5 bg-purple-600 transition-all duration-500 mt-4"></div>
                  </div>
                  <div className="bg-orange-200/30 p-6 lg:p-8 space-y-3 lg:space-y-4 transition-all duration-500 hover:bg-orange-300/40 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer group">
                    <h3 className="text-2xl lg:text-3xl font-serif-display text-black group-hover:text-orange-800 transition-colors duration-300">
                      Foster Collaboration and Harmonize Productivity
                    </h3>
                    <p className="text-base lg:text-lg text-black group-hover:text-orange-700 transition-colors duration-300">
                      Create a holistic and seamless digital and human teamwork experience to streamline productivity
                    </p>
                    <div className="w-0 group-hover:w-full h-0.5 bg-orange-600 transition-all duration-500 mt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}
      <GradientDivider />

      <Footer />

      {/* Demo Form Modal */}
      <DemoForm
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </div>
  );
}
