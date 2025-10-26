'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AnimatedMetric from './AnimatedMetric';

interface HeroCarouselItemProps {
    image: string;
    title: string;
    subtitle?: string;
    metricValue?: string;  // 新增：数值字段，如 "10X", "+50%", "+10%"
    description?: string;
    fullWidth?: boolean;
    isActive?: boolean;
    animationDelay?: number;
    cardPosition?: {
        x?: number; // 水平偏移，正数向右，负数向左
        y?: number; // 垂直偏移，正数向下，负数向上
        anchor?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    };
    subtitlePosition?: {
        x?: number; // subtitle 水平偏移
        y?: number; // subtitle 垂直偏移
        anchor?: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    };
}

export default function HeroCarouselItem({
    image,
    title,
    subtitle,
    metricValue,
    description,
    fullWidth = false,
    isActive = false,
    animationDelay = 0,
    cardPosition = { x: 0, y: 0, anchor: 'center' },
    subtitlePosition = { x: 0, y: 0, anchor: 'top-right' }
}: HeroCarouselItemProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldAnimateTitle, setShouldAnimateTitle] = useState(false);
    const [shouldAnimateSubtitle, setShouldAnimateSubtitle] = useState(false);
    const imageClass = fullWidth ? "w-full h-auto object-cover" : "rounded-lg w-auto h-106 mx-auto object-cover";


    useEffect(() => {
        if (isActive) {
            // 重置状态
            setIsVisible(false);
            setShouldAnimateTitle(false);
            setShouldAnimateSubtitle(false);

            // 延迟显示，创建分阶段动画效果
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, animationDelay);

            // 在卡片完全显示后触发 title 动画
            // 总延迟 = animationDelay + cardTransitionDelay(300ms) + transitionDuration(1000ms)
            const titleAnimationTimer = setTimeout(() => {
                setShouldAnimateTitle(true);
            }, animationDelay + 1300);

            // 在 subtitle 完全显示后触发强调动画
            // subtitle 延迟 = animationDelay + 500ms + transitionDuration(1000ms)
            const subtitleAnimationTimer = setTimeout(() => {
                setShouldAnimateSubtitle(true);
            }, animationDelay + 1500);

            return () => {
                clearTimeout(timer);
                clearTimeout(titleAnimationTimer);
                clearTimeout(subtitleAnimationTimer);
            };
        } else {
            setIsVisible(false);
            setShouldAnimateTitle(false);
            setShouldAnimateSubtitle(false);
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
            <div className={`absolute bg-white/50 backdrop-blur-sm rounded-lg p-3 lg:p-4 dashed-border max-w-xs lg:max-w-md w-sm transition-all duration-1000 ease-out ${isVisible
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
                {/* 标题 - 带放大缩小动画 */}
                <h3 className={`text-lg lg:text-3xl font-serif-display text-black whitespace-pre-line ${shouldAnimateTitle ? 'animate-pulse-once' : ''}`}>
                    {title}
                </h3>

                {/* 描述 - 静态显示，跟随卡片一起动画 */}
                {description && (
                    <p className="text-sm text-gray-600 mt-2">
                        {description}
                    </p>
                )}
            </div>

            {/* 副标题 - 相对于外部容器独立定位，作为次级信息展示 */}
            {subtitle && (
                <div className={`absolute hidden lg:block transition-all duration-1000 ease-out ${isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-12'
                    }`}
                    style={{
                        transitionDelay: `${animationDelay + 500}ms`,
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${subtitlePosition.x || 0}px), calc(-50% + ${subtitlePosition.y || 0}px))`,
                        ...(subtitlePosition.anchor === 'top-left' && {
                            left: '0',
                            top: '0',
                            transform: `translate(${subtitlePosition.x || 0}px, ${subtitlePosition.y || 0}px)`
                        }),
                        ...(subtitlePosition.anchor === 'top-right' && {
                            right: '0',
                            top: '0',
                            left: 'auto',
                            transform: `translate(${subtitlePosition.x || 0}px, ${subtitlePosition.y || 0}px)`
                        }),
                        ...(subtitlePosition.anchor === 'bottom-left' && {
                            left: '0',
                            bottom: '0',
                            top: 'auto',
                            transform: `translate(${subtitlePosition.x || 0}px, ${subtitlePosition.y || 0}px)`
                        }),
                        ...(subtitlePosition.anchor === 'bottom-right' && {
                            right: '0',
                            bottom: '0',
                            top: 'auto',
                            left: 'auto',
                            transform: `translate(${subtitlePosition.x || 0}px, ${subtitlePosition.y || 0}px)`
                        })
                    }}
                >
                    <div className="flex flex-col items-start gap-2">
                        {/* 数值显示 - 大号粗体 */}
                        {metricValue && (
                            <AnimatedMetric
                                value={metricValue}
                                isActive={isVisible && shouldAnimateSubtitle}
                            />
                        )}

                        {/* Subtitle文字 */}
                        <h4 className={`text-2xl font-medium text-foreground/80 whitespace-nowrap transition-all duration-500 font-serif-display ${shouldAnimateSubtitle ? 'animate-subtitle-emphasis' : ''}`}>
                            {subtitle}
                        </h4>
                    </div>
                </div>
            )}
        </div>
    );
}
