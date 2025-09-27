'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface HeroCarouselItemProps {
    image: string;
    title: string;
    description?: string;
    fullWidth?: boolean;
    isActive?: boolean;
    animationDelay?: number;
    cardPosition?: {
        x?: number; // 水平偏移，正数向右，负数向左
        y?: number; // 垂直偏移，正数向下，负数向上
        anchor?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    };
}

export default function HeroCarouselItem({
    image,
    title,
    description,
    fullWidth = false,
    isActive = false,
    animationDelay = 0,
    cardPosition = { x: 0, y: 0, anchor: 'center' }
}: HeroCarouselItemProps) {
    const [isVisible, setIsVisible] = useState(false);
    const imageClass = fullWidth ? "w-full h-auto object-cover" : "rounded-lg w-auto h-106 mx-auto object-cover";

    useEffect(() => {
        if (isActive) {
            // 重置状态
            setIsVisible(false);

            // 延迟显示，创建分阶段动画效果
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, animationDelay);

            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isActive, animationDelay]);

    return (
        <div className="relative flex items-end justify-center h-full min-h-80">
            <Image
                src={image}
                alt={title}
                width={fullWidth ? 1920 : 400}
                height={fullWidth ? 1080 : 480}
                className={`${imageClass} transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                    }`}
            />
            <div className={`absolute bg-white/50 backdrop-blur-sm rounded-lg p-4 dashed-border max-w-xs transition-all duration-1000 ease-out ${isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
                }`}
                style={{
                    transitionDelay: `${animationDelay + 300}ms`,
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${cardPosition.x || 0}px), calc(-50% + ${cardPosition.y || 0}px))`,
                    ...(cardPosition.anchor === 'top-left' && {
                        left: '0',
                        top: '0',
                        transform: `translate(${cardPosition.x || 0}px, ${cardPosition.y || 0}px)`
                    }),
                    ...(cardPosition.anchor === 'top-right' && {
                        right: '0',
                        top: '0',
                        transform: `translate(${(cardPosition.x || 0) - 100}%, ${cardPosition.y || 0}px)`
                    }),
                    ...(cardPosition.anchor === 'bottom-left' && {
                        left: '0',
                        bottom: '0',
                        transform: `translate(${cardPosition.x || 0}px, ${(cardPosition.y || 0) - 100}%)`
                    }),
                    ...(cardPosition.anchor === 'bottom-right' && {
                        right: '0',
                        bottom: '0',
                        transform: `translate(${(cardPosition.x || 0) - 100}%, ${(cardPosition.y || 0) - 100}%)`
                    })
                }}
            >
                {/* 装饰点 - 静态显示，跟随卡片一起动画 */}
                <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>

                {/* 标题 - 静态显示，跟随卡片一起动画 */}
                <h3 className="text-xl font-serif-display text-black whitespace-pre-line">
                    {title}
                </h3>

                {/* 描述 - 静态显示，跟随卡片一起动画 */}
                {description && (
                    <p className="text-sm text-gray-600 mt-2">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
