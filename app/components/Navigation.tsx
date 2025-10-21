'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState, useEffect } from 'react';

interface NavigationProps {
    currentPage?: string;
    onDemoClick?: () => void;
}

export default function Navigation({ currentPage, onDemoClick }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showProductsPanel, setShowProductsPanel] = useState(false);
    const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (hideTimeout) {
            clearTimeout(hideTimeout);
            setHideTimeout(null);
        }
        setShowProductsPanel(true);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setShowProductsPanel(false);
        }, 200); // 200ms延迟
        setHideTimeout(timeout);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50); // 滚动超过50px时显示背景
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (hideTimeout) {
                clearTimeout(hideTimeout);
            }
        };
    }, [hideTimeout]);

    return (
        <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 w-full border-b ${isScrolled
            ? 'bg-white/80 backdrop-blur-sm border-gray-200'
            : 'bg-transparent border-transparent'
            }`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
            <div className="mx-auto px-8 py-4">
                <div className="grid grid-cols-3 items-center">
                    {/* 左侧 - Logo */}
                    <div className="flex items-center justify-start">
                        <Link href="/" className="flex items-center cursor-pointer">
                            <Logo size={32} showText={true} />
                        </Link>
                    </div>

                    {/* 中间 - 导航链接 */}
                    <div className="hidden md:flex items-center justify-center space-x-8">
                        {/* Products dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'products' ? 'text-primary font-semibold' : 'text-black'}`}>
                                Products
                            </div>

                            {/* Dropdown Panel */}
                            {showProductsPanel && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/60 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 py-4 min-w-[600px] animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="grid grid-cols-2 gap-4 px-4">
                                        <Link
                                            href="/products/agentic-ai"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 rounded-md"
                                        >
                                            <div className="font-medium">Agentic AI for SAP Business One</div>
                                            <div className="text-sm text-gray-500 mt-1">Purpose-built AI automation</div>
                                        </Link>
                                        <Link
                                            href="/products/platform"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200 rounded-md"
                                        >
                                            <div className="font-medium">AI Agent Build Platform</div>
                                            <div className="text-sm text-gray-500 mt-1">Enterprise platform solution</div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'resources' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            Resources
                        </Link>
                        <Link
                            href="/"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'company' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            Company
                        </Link>
                        <Link
                            href="/pricing"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'pricing' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* 右侧 - 登录和按钮 */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* <Link href="/" className="text-black relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2">Login</Link> */}
                        {/* <Link href="/" className="text-black relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2">Free Trial</Link> */}
                        <button
                            onClick={onDemoClick}
                            className="bg-primary text-white px-4 py-2 hover:bg-primary/90 transition-colors cursor-pointer"
                        >
                            Get A Demo
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}