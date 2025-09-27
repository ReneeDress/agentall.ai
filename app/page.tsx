import Image from "next/image";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center space-y-6">
            {/* Decorative dot */}
            <div className="flex justify-center">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>

            <h1 className="hero-title text-foreground">
              Future-Proof<br />
              SAP Business One Success<br />
              in the AI Era
            </h1>

            <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
              Purpose-built agentic AI for SAP Business One,<br />
              empowering your enterprise with digital workers<br />
              to maximize efficiency and optimize performance
            </p>

            <div className="flex justify-center space-x-4 pt-6">
              <button className="border border-black px-6 py-4 rounded-lg hover:bg-black hover:text-white transition-colors">
                Start Free Trial
              </button>
              <button className="bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors">
                Get A Demo
              </button>
            </div>
          </div>

          {/* Bottom Carousel */}
          <div className="flex justify-center items-end pt-16 relative">
            <div className="relative">
              <Image
                src="/images/hero-image-232e22.png"
                alt="SAP Business One AI Integration"
                width={400}
                height={411}
                className="rounded-lg"
              />
              <div className="absolute bottom-6 left-6 bg-white/50 backdrop-blur-sm rounded-lg p-4 dashed-border">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-serif-display text-black">
                  Harness Power of AI<br />
                  for SAP Business One<br />
                  with the Agentic Layer
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Workers Section */}
      <section className="gradient-section-1 py-24">
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
      <section className="gradient-section-2 py-16">
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
      <section className="gradient-section-3 py-24">
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
      <section className="gradient-section-4 py-24">
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
