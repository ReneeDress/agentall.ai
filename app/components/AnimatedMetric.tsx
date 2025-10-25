'use client';

import { useState, useEffect } from 'react';

interface AnimatedMetricProps {
    value: string;
    isActive: boolean;
    className?: string;
}

export default function AnimatedMetric({ value, isActive, className = '' }: AnimatedMetricProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

    useEffect(() => {
        if (!isActive) {
            // 不活跃时保持当前值，不重置
            return;
        }

        // 如果已经在目标值，直接显示
        if (displayValue === numericValue) {
            return;
        }

        // 开始增长动画
        const duration = 1500;
        const steps = 60;
        const increment = numericValue / steps;
        let current = displayValue; // 从当前值开始，而不是0

        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                setDisplayValue(numericValue);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isActive, numericValue, displayValue]);

    // 格式化显示（添加X、%、+等符号）
    const formatValue = () => {
        if (value.includes('X')) return `${displayValue}X`;
        if (value.includes('+')) return `+${displayValue}%`;
        return `${displayValue}%`;
    };

    return (
        <span className={`text-6xl lg:text-8xl font-thin text-gray-800 font-sans bg-primary/20 leading-20 ${className}`}>
            {formatValue()}
        </span>
    );
}
