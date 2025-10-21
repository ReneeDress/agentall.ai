'use client';

import { useState, useEffect, useRef } from 'react';

interface TransformAnimationProps {
    className?: string;
}

export default function TransformAnimation({ className = "" }: TransformAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // 一旦触发就停止观察，避免重复触发
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.3, // 当30%的元素进入视口时触发
                rootMargin: '0px 0px -50px 0px' // 提前50px触发
            }
        );

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className={`relative overflow-hidden mx-auto ${className}`} style={{ width: '1050px', height: '600px' }}>
            {/* 合并的SVG动画 */}
            <svg className="w-full h-full" viewBox="0 0 1050 600" style={{ pointerEvents: 'none' }}>
                <defs>
                    {/* Gradients - 使用项目配色方案 */}
                    <linearGradient id="layer1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6b5be1" />
                        <stop offset="50%" stopColor="#6b5be1" />
                        <stop offset="100%" stopColor="#6b5be1" />
                    </linearGradient>

                    <linearGradient id="layer2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a8a2ff" />
                        <stop offset="50%" stopColor="#a8a2ff" />
                        <stop offset="100%" stopColor="#a8a2ff" />
                    </linearGradient>

                    <linearGradient id="layer3Gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f68454" />
                        <stop offset="50%" stopColor="#f68454" />
                        <stop offset="100%" stopColor="#f68454" />
                    </linearGradient>

                    <radialGradient id="layer4Gradient" cx="50%" cy="30%" r="70%">
                        <stop offset="0%" stopColor="#ffb6e9" />
                        <stop offset="50%" stopColor="#ffb6e9" />
                        <stop offset="100%" stopColor="#f68454" />
                    </radialGradient>

                    <radialGradient id="layer5Gradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#6b5be1" />
                        <stop offset="50%" stopColor="#6b5be1" />
                        <stop offset="100%" stopColor="#8776ff" />
                    </radialGradient>

                    {/* Background gradient - 使用项目背景色 */}
                    <linearGradient id="backgroundGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stopColor="#8776ff" />
                        <stop offset="100%" stopColor="#262052" />
                    </linearGradient>

                    {/* Clip paths */}
                    <clipPath id="layer1Clip">
                        <rect x="0" y="0" width="1050" height="520" />
                    </clipPath>

                    <clipPath id="layer2Clip">
                        <rect x="0" y="0" width="1050" height="540" />
                    </clipPath>

                    <clipPath id="layer3Clip">
                        <rect x="0" y="0" width="1050" height="540" />
                    </clipPath>

                    <clipPath id="layer4Clip">
                        <rect x="0" y="0" width="1050" height="540" />
                    </clipPath>

                    <clipPath id="layer5Clip">
                        <rect x="0" y="0" width="1050" height="540" />
                    </clipPath>

                    {/* Path for curved text */}
                    <path id="layer1TextArc" d="M 100 540 A 415 415 0 0 1 950 540" fill="none" stroke="none" />
                    <path id="layer2TextArc" d="M 200 510 A 300 300 0 0 1 850 510" fill="none" stroke="none" />
                    <path id="layer3TextArc" d="M 260 515 A 265 265 0 0 1 790 515" fill="none" stroke="none" />
                </defs>

                {/* Main background - 等腰梯形 */}
                <path d="M 50 600 L 1000 600 L 950 500 L 100 500 Z" fill="url(#backgroundGradient)" />

                {/* Main title */}
                <text x="525" y="575" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle">
                    Enterprise AI Agent Build Platform
                </text>

                {/* Layer 1 - Blue */}
                <g className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ animationDelay: '0.5s' }}>
                    <circle cx="525" cy="500" r="420" fill="url(#layer1Gradient)" clipPath="url(#layer1Clip)" />
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer1TextArc" startOffset="50%">Copilot for SAP Business One</textPath>
                    </text>
                </g>

                {/* Layer 2 - Green */}
                <g className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ animationDelay: '0.7s' }}>
                    <circle cx="525" cy="510" r="370" fill="url(#layer2Gradient)" clipPath="url(#layer2Clip)" />
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer2TextArc" startOffset="8%">Agent Customization</textPath>
                    </text>
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer2TextArc" startOffset="28%">MCP Integration</textPath>
                    </text>
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer2TextArc" startOffset="48%">Document Extraction</textPath>
                    </text>
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer2TextArc" startOffset="68%">Nature Language Query</textPath>
                    </text>
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer2TextArc" startOffset="90%">Enterprise Knowledge Base</textPath>
                    </text>
                </g>

                {/* Layer 3 - Purple */}
                <g className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ animationDelay: '0.9s' }}>
                    <circle cx="525" cy="515" r="305" fill="url(#layer3Gradient)" clipPath="url(#layer3Clip)" />

                    {/* Curved texts */}
                    <text fill="white" fontSize="15" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer3TextArc" startOffset="9%">Ecosystem Solutions</textPath>
                    </text>
                    <text fill="white" fontSize="24" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer3TextArc" startOffset="20.5%">·</textPath>
                    </text>
                    <text fill="white" fontSize="15" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer3TextArc" startOffset="39%">Integrated, Intelligent and Extensible</textPath>
                    </text>
                    <text fill="white" fontSize="24" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer3TextArc" startOffset="57%">·</textPath>
                    </text>
                    <text fill="white" fontSize="15" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer3TextArc" startOffset="68%">Business Intelligence</textPath>
                    </text>
                    <text fill="white" fontSize="24" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer3TextArc" startOffset="79.5%">·</textPath>
                    </text>
                    <text fill="white" fontSize="15" fontWeight="600" textAnchor="middle">
                        <textPath href="#layer3TextArc" startOffset="91%">Choose Your Own LLM</textPath>
                    </text>
                </g>

                {/* Layer 4 - Red */}
                <g className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ animationDelay: '1.1s' }}>
                    <circle cx="525" cy="510" r="240" fill="url(#layer4Gradient)" clipPath="url(#layer4Clip)" />

                    <path d="M 390 540 A 135 135 0 0 1 660 540" stroke="#f6845480" strokeWidth="1" fill="none" />


                    {/* Agentic AI Layer text */}
                    <text x="525" y="435" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">
                        Agentic AI Layer
                    </text>


                    {/* Upper fan-shaped texts with line breaks */}
                    <text x="350" y="470" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">
                        <tspan x="350" dy="0">Sales</tspan>
                        <tspan x="350" dy="16">Agent</tspan>
                    </text>
                    <text x="400" y="380" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">
                        <tspan x="400" dy="0">Purchasing</tspan>
                        <tspan x="400" dy="16">Agent</tspan>
                    </text>
                    <text x="525" y="325" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">
                        <tspan x="525" dy="0">Finance</tspan>
                        <tspan x="525" dy="16">Agent</tspan>
                    </text>
                    <text x="650" y="380" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">
                        <tspan x="650" dy="0">Inventory</tspan>
                        <tspan x="650" dy="16">Agent</tspan>
                    </text>
                    <text x="700" y="470" fill="white" fontSize="14" fontWeight="600" textAnchor="middle">
                        <tspan x="700" dy="0">Production</tspan>
                        <tspan x="700" dy="16">Agent</tspan>
                    </text>
                </g>

                {/* Layer 5 - Orange */}
                <g className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`} style={{ animationDelay: '1.3s' }}>
                    <circle cx="525" cy="540" r="95" fill="url(#layer5Gradient)" clipPath="url(#layer5Clip)" />

                    {/* SAP Business One text */}
                    <text x="525" y="520" fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        SAP Business One
                    </text>
                </g>
            </svg>
        </div>
    );
}
