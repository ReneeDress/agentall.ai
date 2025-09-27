import Image from "next/image";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import HeroCarouselItem from './components/HeroCarouselItem';

export default function Home() {
  // Carousel data for Hero section
  const heroCarouselItems = [
    {
      id: 'hero-1',
      content: (
        <HeroCarouselItem
          image="/images/heros/olena-bohovyk-XttWKETqCCQ-unsplash.png"
          title="Harness Power of AI for SAP Business One with the Agentic Layer"
          fullWidth={false}
          isActive={true}
          animationDelay={0}
          cardPosition={{ x: -150, y: 100, anchor: 'center' }}
        />
      )
    },
    {
      id: 'hero-2',
      content: (
        <HeroCarouselItem
          image="/images/heros/ivana-cajina-dnL6ZIpht2s-unsplash.png"
          title="Digital Workers Revolutionize Your Workflow"
          fullWidth={false}
          isActive={false}
          animationDelay={200}
          cardPosition={{ x: 150, y: 100, anchor: 'center' }}
        />
      )
    },
    {
      id: 'hero-3',
      content: (
        <HeroCarouselItem
          image="/images/heros/ivana-cajina-_7LbC5J-jw4-unsplash.png"
          title="Advanced Analytics Drive Smart Decisions"
          fullWidth={false}
          isActive={false}
          animationDelay={400}
          cardPosition={{ x: -200, y: 100, anchor: 'center' }}
        />
      )
    }
  ];

  return (
    <div className="min-h-screen h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-between">
        <div className="w-full mx-auto pt-20 flex-1 flex flex-col justify-between">
          <div className="max-w-7xl mx-auto px-8 pt-16 text-center space-y-6">
            {/* Decorative dot */}
            <div className="flex justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h1 className="hero-title gradient-text">
              Future-Proof<br />
              SAP Business One Success<br />
              in the AI Era
            </h1>

            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Purpose-built agentic AI for SAP Business One, empowering your enterprise<br />
              with digital workers to maximize efficiency and optimize performance
            </p>

            <div className="flex justify-center space-x-4 pt-2">
              <button className="border border-black px-6 py-4 rounded-lg hover:bg-black hover:text-white transition-colors">
                Start Free Trial
              </button>
              <button className="bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors">
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
          />
        </div>
      </section>

      {/* Digital Workers Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-center gap-9">
            <div className="flex-1 max-w-lg space-y-9 py-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <h2 className="section-title text-foreground">
                Empower SMBs<br />
                with Digital Workers
              </h2>
              <div className="w-30 h-px bg-primary"></div>
              <p className="text-lg text-black leading-relaxed">
                AI agents as Digital Workers<br />
                monitor business data and performance,<br />
                proactively plan and recommend actions,<br />
                engage with human workers,<br />
                and drive continuous, nonstop optimization
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center space-y-6">
              <Image
                src="/images/digital-workers-image.png"
                alt="Digital Workers Dashboard"
                width={600}
                height={529}
                className="rounded-lg card-shadow"
              />
              <div className="flex justify-center items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
                <div className="w-2 h-2 bg-primary/30 rounded-full"></div>
              </div>
              <p className="text-lg text-black text-right">
                Harness Power of AI for SAP Business One with the Agentic Layer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-center gap-16">
            <Image
              src="/images/analytics-image.png"
              alt="Analytics Dashboard"
              width={394}
              height={722}
              className="rounded-2xl card-shadow"
            />
            <div className="flex-1 space-y-9 py-8">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
              </div>
              <h2 className="section-title text-foreground">Reinvent Analytics</h2>
              <div className="w-30 h-px bg-primary"></div>
              <div className="space-y-6">
                <p className="text-xl text-black">Query your business data anywhere, any time</p>
                <p className="text-xl text-black">Generate real-time report and dashboard with reasoning and visualization</p>
                <p className="text-xl text-black">Make manual, static report generation a thing of the past</p>
                <p className="text-xl text-black">Provide insights and Recommendations - more than just reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center space-y-9">
            <div className="flex justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <h2 className="section-title text-foreground">Modernize User Experience</h2>
            <div className="flex justify-center">
              <div className="w-30 h-px bg-primary"></div>
            </div>

            <div className="flex items-center justify-center gap-24 px-32">
              <div className="flex-1 space-y-12">
                <div className="bg-purple-200/30 backdrop-blur-sm rounded-lg p-6 card-shadow-small">
                  <p className="text-2xl text-black">
                    Nature language interaction for seamless integrated and intuitive experience like never before
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 card-shadow-white">
                  <p className="text-2xl text-black">
                    Let digital workers plan and act for to optimize profits and performance
                  </p>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 card-shadow-white">
                  <p className="text-2xl text-black">
                    Available on mobile with WhatsApp integration
                  </p>
                </div>
              </div>
              <Image
                src="/images/ux-image-247452.png"
                alt="User Experience Interface"
                width={402}
                height={722}
                className="rounded-2xl card-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transform SMBs Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center space-y-9 pb-32">
            <div className="flex justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <h2 className="section-title text-foreground">
              Transform the way SMBs Operates<br />
              by Digital Workers
            </h2>
            <div className="flex justify-center">
              <div className="w-30 h-px bg-primary"></div>
            </div>

            <div className="flex justify-center px-16">
              <div className="flex-1 space-y-8">
                <Image
                  src="/images/transform-image.png"
                  alt="Transform SMBs Operations"
                  width={914}
                  height={456}
                  className="w-full rounded-lg card-shadow"
                />
                <div className="grid grid-cols-3 gap-12">
                  <div className="bg-pink-200/30 rounded-lg p-8 space-y-4">
                    <h3 className="text-2xl font-serif-display text-black">
                      Improve<br />
                      Efficiency and<br />
                      Reduce Cost
                    </h3>
                    <p className="text-lg text-black">
                      Digital workers automate tasks, reducing manual workload carried out by end users
                    </p>
                  </div>
                  <div className="bg-purple-200/30 rounded-lg p-8 space-y-4">
                    <h3 className="text-2xl font-serif-display text-black">
                      Make Impact with Business Data and Knowledge
                    </h3>
                    <p className="text-lg text-black">
                      Harness power of AI to unlock value from business data, maximize profits and business performance
                    </p>
                  </div>
                  <div className="bg-orange-200/30 rounded-lg p-8 space-y-4">
                    <h3 className="text-2xl font-serif-display text-black">
                      Foster Collaboration and Harmonize Productivity
                    </h3>
                    <p className="text-lg text-black">
                      Create a holistic and seamless digital and human teamwork experience to streamline productivity
                    </p>
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
