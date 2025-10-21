'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
        <div ref={containerRef} className={`relative overflow-hidden mx-auto ${className}`} style={{ width: '1051px', height: '520px' }}>
            {/* 背景层 - 最底层 */}
            <div
                className={`absolute bottom-0 left-0 right-0`}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-main.png"
                    alt="Background"
                    width={2103}
                    height={180}
                    className="w-full h-auto"
                    style={{
                        aspectRatio: '1402/120'
                    }}
                />
                {/* 添加居中的文字 */}
                <div className="absolute inset-0 flex items-center justify-center pt-4">
                    <h2 className="text-white text-2xl font-bold text-center">
                        Enterprise AI Agent Build Platform
                    </h2>
                </div>
            </div>

            {/* Layer 1 - 597x297, 位置: x:52, y:0 */}
            <div
                className={`absolute transition-all duration-1000 ease-out transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{
                    left: '50%',
                    top: '0px',
                    width: '896px',
                    height: '446px',
                    transform: 'translateX(-50%)',
                    animationDelay: '0.5s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer1.png"
                    alt="Layer 1"
                    width={896}
                    height={446}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Layer 2 - 536x268, 位置: x:83, y:33 */}
            <div
                className={`absolute transition-all duration-1000 ease-out transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{
                    left: '50%',
                    top: '50px',
                    width: '804px',
                    height: '402px',
                    transform: 'translateX(-50%)',
                    animationDelay: '0.7s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer2.png"
                    alt="Layer 2"
                    width={804}
                    height={402}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Layer 3 - 477x238, 位置: x:112, y:67 */}
            <div
                className={`absolute transition-all duration-1000 ease-out transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{
                    left: '50%',
                    top: '101px',
                    width: '716px',
                    height: '357px',
                    transform: 'translateX(-50%)',
                    animationDelay: '0.9s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer3.png"
                    alt="Layer 3"
                    width={716}
                    height={357}
                    className="w-full h-full object-cover"
                />
                {/* Curved texts along the outer edge of Layer 3 */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 716 357" style={{ pointerEvents: 'none' }}>
                    <defs>
                        {/* Path for the outer arc of the semi-circle */}
                        <path id="outerArc" d="M 30 357 A 305 305 0 0 1 686 357" fill="none" stroke="none" />
                    </defs>

                    {/* Text 1: Ecosystem Solutions */}
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#outerArc" startOffset="10%">Ecosystem Solutions</textPath>
                    </text>

                    {/* Text 2: Integrated, Intelligent and Extensible */}
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#outerArc" startOffset="40%">Integrated, Intelligent and Extensible</textPath>
                    </text>

                    {/* Text 3: Business Intelligence */}
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#outerArc" startOffset="65%">Business Intelligence</textPath>
                    </text>

                    {/* Text 4: Choose Your Own LLM */}
                    <text fill="white" fontSize="16" fontWeight="600" textAnchor="middle">
                        <textPath href="#outerArc" startOffset="90%">Choose Your Own LLM</textPath>
                    </text>
                </svg>
            </div>

            {/* Layer 4 - 415x207, 位置: x:143, y:98 */}
            <div
                className={`absolute transition-all duration-1000 ease-out transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{
                    left: '50%',
                    top: '147px',
                    width: '623px',
                    height: '311px',
                    transform: 'translateX(-50%)',
                    animationDelay: '1.1s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer4.png"
                    alt="Layer 4"
                    width={623}
                    height={311}
                    className="w-full h-full object-cover"
                />
                {/* Agentic AI Layer text */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold">
                    Agentic AI Layer
                </div>

                {/* Upper fan-shaped texts */}
                <div className="absolute text-white text-sm font-semibold whitespace-nowrap" style={{ left: '15%', top: '60%', transform: 'translateX(-50%)' }}>Sales Agent</div>
                <div className="absolute text-white text-sm font-semibold whitespace-nowrap" style={{ left: '35%', top: '50%', transform: 'translateX(-50%)' }}>Purchasing Agent</div>
                <div className="absolute text-white text-sm font-semibold whitespace-nowrap" style={{ left: '50%', top: '45%', transform: 'translateX(-50%)' }}>Finance Agent</div>
                <div className="absolute text-white text-sm font-semibold whitespace-nowrap" style={{ left: '65%', top: '50%', transform: 'translateX(-50%)' }}>Inventory Agent</div>
                <div className="absolute text-white text-sm font-semibold whitespace-nowrap" style={{ left: '85%', top: '60%', transform: 'translateX(-50%)' }}>Production Agent</div>
            </div>

            {/* Layer 5 - 140x67, 位置: x:281, y:238 */}
            <div
                className={`absolute transition-all duration-1000 ease-out transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{
                    left: '50%',
                    top: '357px',
                    width: '210px',
                    height: '101px',
                    transform: 'translateX(-50%)',
                    animationDelay: '1.3s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer5.png"
                    alt="Layer 5"
                    width={210}
                    height={101}
                    className="w-full h-full object-cover"
                />
                {/* 添加居中的文字 */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold text-center">
                        SAP Business One
                    </span>
                </div>
            </div>

            {/* Layer 6 - 674x272, 位置: x:0, y:0 */}
            <div
                className={`absolute transition-all duration-1000 ease-out transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{
                    left: '50%',
                    bottom: '152px',
                    width: '504px',
                    height: '202px',
                    transform: 'translateX(-50%)',
                    animationDelay: '0.7s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer6.png"
                    alt="Layer 6"
                    width={504}
                    height={202}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Layer 7 - 420x210, 位置: x:64, y:92 */}
            <div
                className={`absolute transition-all duration-1000 ease-out transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{
                    left: '50%',
                    bottom: '64px',
                    width: '320px',
                    height: '160px',
                    transform: 'translateX(-50%)',
                    animationDelay: '0.8s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer7.png"
                    alt="Layer 7"
                    width={360}
                    height={180}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Layer 8 - 868x232, 位置: x:0, y:0 */}
            <div
                className={`absolute transition-all duration-1000 ease-out transform ${isVisible
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-full opacity-0'
                    }`}
                style={{
                    left: '50%',
                    bottom: '280px',
                    width: '656px',
                    height: '164px',
                    transform: 'translateX(-50%)',
                    animationDelay: '0.9s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer8.png"
                    alt="Layer 8"
                    width={656}
                    height={164}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
