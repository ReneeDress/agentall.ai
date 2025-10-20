'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Pie Chart Data
const PIE_CHART_DATA = [
    {
        id: 1,
        label: 'Sales Order Processing',
        percentage: 15,
        color: '#6b5be1',
        image: '/agentall.ai/images/agentic-ai/sales-automation.png',
        bullets: [
            'Automated sales order creation',
            'Intelligent pricing calculation',
            'Real-time inventory verification'
        ]
    },
    {
        id: 2,
        label: 'Purchase Management',
        percentage: 14,
        color: '#ec4899',
        image: '/agentall.ai/images/agentic-ai/purchaseing-automation.png',
        bullets: [
            'Automatic vendor matching',
            'Purchase request approval',
            'Order tracking management'
        ]
    },
    {
        id: 3,
        label: 'Inventory Control',
        percentage: 15,
        color: '#f97316',
        image: '/agentall.ai/images/agentic-ai/inventory-automation.png',
        bullets: [
            'Smart inventory alerts',
            'Automated stock counting',
            'Batch traceability'
        ]
    },
    {
        id: 4,
        label: 'Financial Reporting',
        percentage: 14,
        color: '#8b5cf6',
        image: '/agentall.ai/images/agentic-ai/finance-automation.png',
        bullets: [
            'Automated financial statements',
            'Cost center analysis',
            'Budget comparison'
        ]
    },
    {
        id: 5,
        label: 'Production Planning',
        percentage: 14,
        color: '#10b981',
        image: '/agentall.ai/images/agentic-ai/document-processing.png',
        bullets: [
            'Automated MRP calculation',
            'Capacity optimization',
            'Intelligent work order scheduling'
        ]
    },
    {
        id: 6,
        label: 'Customer Service',
        percentage: 14,
        color: '#06b6d4',
        image: '/agentall.ai/images/agentic-ai/knowledge-management.png',
        bullets: [
            '24/7 intelligent customer service',
            'Automatic ticket assignment',
            'Service quality tracking'
        ]
    },
    {
        id: 7,
        label: 'Analytics & Insights',
        percentage: 14,
        color: '#f59e0b',
        image: '/agentall.ai/images/agentic-ai/query-and-insights.png',
        bullets: [
            'Real-time KPI monitoring',
            'Predictive analytics',
            'Business intelligence reporting'
        ]
    }
];

// Tabs Data
const TABS_DATA = [
    {
        id: 'process-automation',
        title: 'Process Automation',
        video: '/images/ux-video-2.mov',
        kpis: [
            { label: 'Efficiency Gain', value: '80%' },
            { label: 'Error Reduction', value: '95%' }
        ],
        highlights: [
            'End-to-end process automation',
            'Intelligent exception handling',
            'Cross-system data synchronization',
            'Adaptive workflow engine'
        ]
    },
    {
        id: 'nlq',
        title: 'Nature Language Query',
        video: '/images/ux-video-2.mov',
        kpis: [
            { label: 'Query Response', value: '<2s' },
            { label: 'Accuracy Rate', value: '98%' }
        ],
        highlights: [
            'Natural language understanding',
            'Multi-dimensional data analysis',
            'Context-aware querying',
            'Intelligent recommendations'
        ]
    },
    {
        id: 'ekm',
        title: 'Enterprise Knowledge Management',
        video: '/images/ux-video-2.mov',
        kpis: [
            { label: 'Knowledge Reuse', value: '3x' },
            { label: 'Learning Time', value: '-60%' }
        ],
        highlights: [
            'Enterprise knowledge graph',
            'Intelligent knowledge retrieval',
            'Version control management',
            'Role-based access control'
        ]
    },
    {
        id: 'whatsapp',
        title: 'WhatsApp Integration',
        video: '/images/ux-video-2.mov',
        kpis: [
            { label: 'Customer Satisfaction', value: '4.8/5' },
            { label: 'Response Speed', value: 'Instant' }
        ],
        highlights: [
            'Seamless multi-channel integration',
            'Real-time message synchronization',
            'Intelligent conversation management',
            'Business process triggering'
        ]
    }
];

// Pie Chart Component
function PieChart() {
    const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);

    // Calculate trapezoid slice path
    const createTrapezoidSlicePath = (startAngle: number, endAngle: number) => {
        const centerX = 400;
        const centerY = 400;
        const innerRadius = 120; // Inner radius (center circle radius + gap)
        const outerRadius = 350; // Outer radius

        const startRad = (startAngle - 90) * Math.PI / 180;
        const endRad = (endAngle - 90) * Math.PI / 180;

        // Outer arc points
        const outerX1 = centerX + outerRadius * Math.cos(startRad);
        const outerY1 = centerY + outerRadius * Math.sin(startRad);
        const outerX2 = centerX + outerRadius * Math.cos(endRad);
        const outerY2 = centerY + outerRadius * Math.sin(endRad);

        // Inner arc points
        const innerX1 = centerX + innerRadius * Math.cos(startRad);
        const innerY1 = centerY + innerRadius * Math.sin(startRad);
        const innerX2 = centerX + innerRadius * Math.cos(endRad);
        const innerY2 = centerY + innerRadius * Math.sin(endRad);

        const largeArc = endAngle - startAngle > 180 ? 1 : 0;

        return `M ${outerX1} ${outerY1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerX2} ${outerY2} L ${innerX2} ${innerY2} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerX1} ${innerY1} Z`;
    };

    let currentAngle = 0;

    return (
        <div className="relative flex items-center justify-center">
            <svg width="800" height="800" viewBox="0 0 800 800" className="transform transition-transform duration-300">
                {PIE_CHART_DATA.map((slice) => {
                    const gapAngle = 2; // 2 degrees gap between slices
                    const totalGaps = PIE_CHART_DATA.length * gapAngle * 2; // Total gap space needed
                    const availableAngle = 360 - totalGaps; // Available angle for slices
                    const startAngle = currentAngle + gapAngle;
                    const sliceAngle = (slice.percentage / 100) * availableAngle;
                    const endAngle = startAngle + sliceAngle;
                    currentAngle = endAngle + gapAngle;

                    const path = createTrapezoidSlicePath(startAngle, endAngle);
                    const isHovered = hoveredSlice === slice.id;

                    // Calculate label position (middle of trapezoid)
                    const labelAngle = (startAngle + endAngle) / 2;
                    const labelRad = (labelAngle - 90) * Math.PI / 180;
                    const labelRadius = 235; // Position between inner and outer radius
                    const labelX = 400 + labelRadius * Math.cos(labelRad);
                    const labelY = 400 + labelRadius * Math.sin(labelRad);

                    return (
                        <g key={slice.id}>
                            <path
                                d={path}
                                fill="transparent"
                                stroke={slice.color}
                                strokeWidth="3"
                                opacity={hoveredSlice === null ? 0.8 : isHovered ? 1 : 0.3}
                                className="transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setHoveredSlice(slice.id)}
                                onMouseLeave={() => setHoveredSlice(null)}
                                style={{
                                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                    transformOrigin: '400px 400px'
                                }}
                            />
                            {/* Label text */}

                            <text
                                x={labelX}
                                y={labelY - 15}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill="#262052"
                                fontSize="14"
                                fontWeight="bold"
                                className="pointer-events-none"
                            >
                                {slice.label}
                            </text>
                        </g>
                    );
                })}

                {/* Center circle */}
                <circle
                    cx="400"
                    cy="400"
                    r="100"
                    fill="#6b5be1"
                    className="pointer-events-none"
                />
            </svg>

            {/* Images positioned absolutely over SVG */}
            {PIE_CHART_DATA.map((slice) => {
                const gapAngle = 2;
                const totalGaps = PIE_CHART_DATA.length * gapAngle * 2;
                const availableAngle = 360 - totalGaps;
                let currentAngle = 0;

                // Find the slice's position
                for (let i = 0; i < slice.id - 1; i++) {
                    currentAngle += gapAngle + (PIE_CHART_DATA[i].percentage / 100) * availableAngle + gapAngle;
                }

                const startAngle = currentAngle + gapAngle;
                const sliceAngle = (slice.percentage / 100) * availableAngle;
                const endAngle = startAngle + sliceAngle;
                const labelAngle = (startAngle + endAngle) / 2;
                const labelRad = (labelAngle - 90) * Math.PI / 180;
                const labelRadius = 235;
                const labelX = 400 + labelRadius * Math.cos(labelRad);
                const labelY = 400 + labelRadius * Math.sin(labelRad);

                return (
                    <div
                        key={`image-${slice.id}`}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${labelX - 20}px`,
                            top: `${labelY + 10}px`,
                            width: '40px',
                            height: '40px',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <img
                            src={slice.image}
                            alt={slice.label}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                console.log('Image failed to load:', slice.image);
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>
                );
            })}

            {/* Hover tooltip */}
            {hoveredSlice !== null && (
                <div className="absolute left-full ml-8 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-gray-200 min-w-[280px] animate-in fade-in slide-in-from-left-2 duration-200">
                    {(() => {
                        const slice = PIE_CHART_DATA.find(s => s.id === hoveredSlice);
                        if (!slice) return null;
                        return (
                            <>
                                <h4 className="text-lg font-semibold mb-3" style={{ color: slice.color }}>
                                    {slice.label}
                                </h4>
                                <ul className="space-y-2">
                                    {slice.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-700">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: slice.color }}></span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        );
                    })()}
                </div>
            )}
        </div>
    );
}

export default function AgenticAIProduct() {
    const [activeTab, setActiveTab] = useState('process-automation');

    const activeTabData = TABS_DATA.find(tab => tab.id === activeTab);

    return (
        <div className="min-h-screen">
            <Navigation />

            {/* Hero Section */}
            <section className="min-h-screen lg:min-h-0 lg:h-auto lg:max-h-5xl flex flex-col justify-between">
                <div className="w-full mx-auto pt-20 flex-1 flex flex-col justify-between">
                    <div className="max-w-7xl mx-auto px-8 pt-16 text-center space-y-6">
                        <div className="flex justify-center">
                            <div className="text-sm text-primary uppercase tracking-wider font-bold">
                                Product
                            </div>
                        </div>
                        <h1 className="hero-title gradient-text">
                            Purpose-built Agentic AI<br />
                            for SAP Business One
                            and its add-ons
                        </h1>
                        <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
                            Role based, seamlessly integrated, out-of-box adoption with enterprise security
                        </p>
                    </div>

                    {/* Pie chart section */}
                    <div className="flex flex-col items-center space-y-8">
                        <h2 className="section-title text-center text-foreground">
                            Built-in Process Automation<br />
                            Capabilities and Beyond
                        </h2>

                        <PieChart />
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="py-20 px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    {/* Tab navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {TABS_DATA.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Tab content */}
                    {activeTabData && (
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left side: Video */}
                            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                                <video
                                    key={activeTab}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={activeTabData.video} type="video/mp4" />
                                    Your browser does not support video playback
                                </video>
                            </div>

                            {/* Right side: Metrics and highlights */}
                            <div className="space-y-8">
                                {/* KPI Metrics */}
                                <div className="grid grid-cols-2 gap-6">
                                    {activeTabData.kpis.map((kpi, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center"
                                        >
                                            <div className="text-4xl lg:text-5xl font-serif-display text-primary mb-2">
                                                {kpi.value}
                                            </div>
                                            <div className="text-sm text-gray-600">{kpi.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Value Highlights */}
                                <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                                    <h3 className="text-2xl font-serif-display text-foreground mb-6">
                                        Key Benefits
                                    </h3>
                                    <ul className="space-y-4">
                                        {activeTabData.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <span className="mr-3 mt-1.5 w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                                                <span className="text-lg">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

