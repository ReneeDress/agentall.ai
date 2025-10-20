'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TransformAnimationProps {
    className?: string;
}

export default function TransformAnimation({ className = "" }: TransformAnimationProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 延迟显示，让组件先渲染
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`relative overflow-hidden mx-auto ${className}`} style={{ width: '1051px', height: '520px' }}>
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
                    animationDelay: '0.2s'
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
                    animationDelay: '0.3s'
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
                    animationDelay: '0.4s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer3.png"
                    alt="Layer 3"
                    width={716}
                    height={357}
                    className="w-full h-full object-cover"
                />
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
                    animationDelay: '0.5s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer4.png"
                    alt="Layer 4"
                    width={623}
                    height={311}
                    className="w-full h-full object-cover"
                />
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
                    animationDelay: '0.6s'
                }}
            >
                <Image
                    src="/agentall.ai/images/transform-animation/transform-animation-layer5.png"
                    alt="Layer 5"
                    width={210}
                    height={101}
                    className="w-full h-full object-cover"
                />
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
