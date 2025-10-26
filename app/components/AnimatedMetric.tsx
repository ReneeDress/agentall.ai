'use client';

import { useState, useEffect } from 'react';

interface AnimatedMetricProps {
    value: string;
    isActive: boolean;
    className?: string;
}

export default function AnimatedMetric({ value, isActive, className = '' }: AnimatedMetricProps) {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isActive) {
            // 不活跃时保持当前值
            return;
        }

        // 开始增长动画
        const duration = numericValue * 50;
        const steps = numericValue;
        const increment = numericValue / steps;
        let current = 1;

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
    }, [isActive, numericValue]);

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
