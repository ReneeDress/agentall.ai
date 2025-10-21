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
            {
                label: 'Significant <strong>multiline, complex order processing efficiency gains</strong>', value: null
            },
            {
                label: 'Increase in efficiency by more than 10 times compared to labor',
                value: ['1-2 Min', '10x Up'],
                color: '#10b981'
            },
            {
                label: 'Individual sales staff can save about <strong>450 hours</strong> per year (<em>56 person days</em>)',
                value: ['450', 'Hours'],
                color: '#f59e0b'
            },

        ],
        highlights: [
            'Auto-parsing improves accuracy and avoids manual errors.',
            'No training required to process  various document format, reducing maintenance costs.',
            'Role based authorization control ensures security and reliability',
        ]
    },
    {
        id: 'nlq',
        title: 'Nature Language Query',
        video: '/images/ux-video-2.mov',
        kpis: [
            {
                label: 'Significant efficiency gains in <strong>underlying reporting queries</strong>', value: null
            },
            {
                label: 'Word query takes only 30 seconds<br />99%+ efficiency improvement compared to traditional manual writing', value: ['30 s', '99 % Up'], color: '#06b6d4'
            },
            { label: 'Daily use by multiple departments, saving <strong>17,420 hours</strong> per year (<em>2178 person days</em>)', value: ['17,420', 'Hours'], color: '#8b5cf6' }
        ],
        highlights: [
            'AI Agent delivers reports in 20–35s vs. 2–4h manually, freeing implementation resources.',
            'No SQL / HANA knowledge needed—business users query data via natural language.',
            'Generate insights, visuals and recommendations real - time effortlessly',
            'Boost data usage and empower businesses to make faster  decisions and respond smarter'
        ]
    },
    {
        id: 'ekm',
        title: 'Enterprise Knowledge Management',
        video: '/images/ux-video-2.mov',
        kpis: [
            { label: 'Knowledge Reuse', value: '3x', color: '#f97316' },
            { label: 'Learning Time', value: '-60%', color: '#ec4899' }
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
            { label: 'Customer Satisfaction', value: '4.8/5', color: '#10b981' },
            { label: 'Response Speed', value: 'Instant', color: '#f59e0b' }
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
                            {slice.label.split(' ').length > 2 ? (
                                // Two-line text for longer labels
                                <>
                                    <text
                                        x={labelX}
                                        y={labelY + 50}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="#262052"
                                        fontSize="16"
                                        fontWeight="bold"
                                        className="pointer-events-none"
                                        opacity={hoveredSlice === null ? 1 : isHovered ? 1 : 0.5}
                                        style={{
                                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                            transformOrigin: `${labelX}px ${labelY + 50}px`,
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {slice.label.split(' ').slice(0, Math.ceil(slice.label.split(' ').length / 2)).join(' ')}
                                    </text>
                                    <text
                                        x={labelX}
                                        y={labelY + 70}
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fill="#262052"
                                        fontSize="16"
                                        fontWeight="bold"
                                        className="pointer-events-none"
                                        opacity={hoveredSlice === null ? 1 : isHovered ? 1 : 0.5}
                                        style={{
                                            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                            transformOrigin: `${labelX}px ${labelY + 70}px`,
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {slice.label.split(' ').slice(Math.ceil(slice.label.split(' ').length / 2)).join(' ')}
                                    </text>
                                </>
                            ) : (
                                // Single line text for shorter labels
                                <text
                                    x={labelX}
                                    y={labelY + 60}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill="#262052"
                                    fontSize="16"
                                    fontWeight="bold"
                                    className="pointer-events-none"
                                    opacity={hoveredSlice === null ? 1 : isHovered ? 1 : 0.5}
                                    style={{
                                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                        transformOrigin: `${labelX}px ${labelY + 60}px`,
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {slice.label}
                                </text>
                            )}
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
                const isHovered = hoveredSlice === slice.id;

                return (
                    <div
                        key={`image-${slice.id}`}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${labelX}px`,
                            top: `${labelY}px`,
                            width: '80px',
                            height: '80px',
                            transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.2)' : 'scale(1)'}`,
                            transition: 'transform 0.3s ease',
                            opacity: hoveredSlice === null ? 1 : isHovered ? 1 : 0.5
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
                    <div className="flex flex-col items-center space-y-8 pt-8">
                        <h2 className="section-title-small text-center text-foreground">
                            Built-in Process Automation Capabilities and Beyond
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
                        <div className="space-y-12">
                            {/* First row: Video and Value Highlights */}
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
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

                                {/* Right side: Value Highlights */}
                                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    <h3 className="text-2xl font-serif-display text-foreground mb-6">
                                        Value Highlights
                                    </h3>
                                    <ul className="space-y-4 ">
                                        {activeTabData.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start text-gray-700">
                                                <span className="mr-3 mt-1.5 w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                                                <span className="text-lg">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Second row: KPI Metrics */}
                            <div className="grid grid-cols-3 gap-6">
                                {activeTabData.kpis.map((kpi, idx) => (
                                    <div
                                        key={idx}
                                        style={{ height: '200px' }}
                                    >
                                        {kpi.value ? (
                                            // Has value - Flip card
                                            <div className="group perspective-1000 h-full">
                                                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                                                    {/* Front side - Data metric */}
                                                    <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div
                                                                className="text-4xl lg:text-5xl font-serif-display"
                                                                style={{ color: kpi.color || '#6b5be1' }}
                                                            >
                                                                {Array.isArray(kpi.value) ? (
                                                                    <div className="space-y-2">
                                                                        {kpi.value.map((item, itemIdx) => (
                                                                            <div key={itemIdx} className="text-3xl lg:text-4xl">
                                                                                {item}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    kpi.value
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Back side - Description */}
                                                    <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg shadow-md border border-gray-200 rotate-y-180 flex items-center justify-center p-6">
                                                        <div
                                                            className="text-default text-gray-600 leading-relaxed text-center"
                                                            dangerouslySetInnerHTML={{ __html: kpi.label }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            // No value - Simple card with bounce animation
                                            <div className="bounce-hover bg-white rounded-lg shadow-md border border-gray-200 h-full flex items-center justify-center p-6">
                                                <div
                                                    className="text-default text-gray-600 leading-relaxed text-center"
                                                    dangerouslySetInnerHTML={{ __html: kpi.label }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}

