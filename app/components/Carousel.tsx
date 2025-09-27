'use client';

import React, { useState, useEffect, ReactNode } from 'react';

interface CarouselItem {
    id: string;
    content: ReactNode;
}

interface CarouselProps {
    items: CarouselItem[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
    showNavigation?: boolean;
    showDots?: boolean;
    showProgressBar?: boolean;
    fullWidth?: boolean;
    infiniteScroll?: boolean;
    className?: string;
}

export default function Carousel({
    items,
    autoPlay = true,
    autoPlayInterval = 5000,
    showNavigation = false,
    showDots = false,
    showProgressBar = false,
    fullWidth = false,
    infiniteScroll = false,
    className = ""
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // Auto-rotate carousel
    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            if (infiniteScroll) {
                setCurrentIndex((prevIndex) => {
                    const nextIndex = prevIndex + 1;
                    // 如果到达克隆的最后一个元素，无缝跳转到真实的第一个元素
                    if (nextIndex >= items.length) {
                        setTimeout(() => {
                            setIsTransitioning(false);
                            setCurrentIndex(0);
                            setTimeout(() => setIsTransitioning(true), 50);
                        }, 500);
                        return nextIndex;
                    }
                    return nextIndex;
                });
            } else {
                setCurrentIndex((prevIndex) =>
                    prevIndex === items.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, items.length, infiniteScroll]);

    const goToSlide = (index: number) => {
        if (infiniteScroll) {
            setCurrentIndex(index + 1); // +1 因为第一个是克隆的最后一个元素
        } else {
            setCurrentIndex(index);
        }
    };

    const goToPrevious = () => {
        if (infiniteScroll) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (infiniteScroll) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
        }
    };

    const containerClass = fullWidth ? "w-full" : "w-full max-w-md";

    // 为无限滚动准备数据：克隆第一个元素到末尾，克隆最后一个元素到开头
    const infiniteItems = infiniteScroll ? [
        { ...items[items.length - 1], id: `clone-last-${items[items.length - 1].id}` },
        ...items,
        { ...items[0], id: `clone-first-${items[0].id}` }
    ] : items;

    const displayItems = infiniteScroll ? infiniteItems : items;
    const transformValue = infiniteScroll ?
        `translateX(-${(currentIndex + 1) * 100}%)` :
        `translateX(-${currentIndex * 100}%)`;

    return (
        <div className={`flex justify-center items-end pt-8 relative ${className}`}>
            <div className={`relative ${containerClass}`}>
                {/* Carousel Container */}
                <div className={`relative overflow-hidden ${fullWidth ? '' : 'rounded-lg'}`}>
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                        style={{ transform: transformValue }}
                    >
                        {displayItems.map((item, index) => {
                            // 计算真实索引（排除克隆元素）
                            const realIndex = infiniteScroll ?
                                (index === 0 ? items.length - 1 : index === displayItems.length - 1 ? 0 : index - 1) :
                                index;

                            // 检查是否为当前活跃项
                            const isActive = infiniteScroll ?
                                (realIndex === currentIndex) :
                                (index === currentIndex);

                            // 克隆React元素并传递isActive属性
                            const enhancedContent = item.content && typeof item.content === 'object' && 'type' in item.content ?
                                React.cloneElement(item.content as React.ReactElement<{ isActive?: boolean }>, { isActive }) :
                                item.content;

                            return (
                                <div key={item.id} className="w-full flex-shrink-0">
                                    {enhancedContent}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Arrows */}
                {showNavigation && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 z-10"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Dots Indicator */}
                {showDots && (
                    <div className="flex justify-center space-x-2 mt-4">
                        {items.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                                    ? 'bg-primary scale-110'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Progress Bar */}
                {showProgressBar && (
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
                        <div
                            className="bg-primary h-1 rounded-full transition-all duration-100 ease-linear"
                            style={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}