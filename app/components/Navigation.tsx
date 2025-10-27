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
    const [showMobileMenu, setShowMobileMenu] = useState(false);
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
            <div className="mx-auto px-4 lg:px-8 py-3 lg:py-4">
                <div className="flex justify-between items-center lg:grid lg:grid-cols-3">
                    {/* 左侧 - Logo */}
                    <div className="flex items-center justify-start">
                        <Link href="/" className="flex items-center cursor-pointer">
                            <Logo size={32} showText={true} />
                        </Link>
                    </div>

                    {/* 中间 - 导航链接 */}
                    <div className="hidden lg:flex items-center justify-center space-x-8">
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
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/60 backdrop-blur-sm shadow-xl border border-gray-200 py-4 min-w-[600px] animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="grid grid-cols-2 gap-4 px-4">
                                        <Link
                                            href="/products/agentic-ai"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                                        >
                                            <div className="font-medium">Agentic AI for SAP Business One</div>
                                            <div className="text-sm text-gray-500 mt-1">Purpose-built AI automation</div>
                                        </Link>
                                        <Link
                                            href="/products/platform"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors duration-200"
                                        >
                                            <div className="font-medium">AI Agent Build Platform</div>
                                            <div className="text-sm text-gray-500 mt-1">Enterprise platform solution</div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                        <Link
                            href="/resources"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'resources' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            Resources
                        </Link>
                        <Link
                            href="/company"
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
                        {/* 移动端汉堡菜单按钮 */}
                        <button
                            className="lg:hidden text-black p-2"
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {showMobileMenu ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        {/* Demo 按钮 */}
                        <button
                            onClick={onDemoClick}
                            className="bg-primary text-white px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base hover:bg-primary/90 transition-colors cursor-pointer"
                        >
                            Get A Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* 移动端全屏菜单 */}
            {showMobileMenu && (
                <div className="fixed inset-0 bg-white z-[9998] lg:hidden pt-20">
                    <div className="flex flex-col items-center space-y-6 p-8">
                        <Link href="/" className="text-xl text-black" onClick={() => setShowMobileMenu(false)}>
                            Products
                        </Link>
                        <Link href="/" className="text-xl text-black" onClick={() => setShowMobileMenu(false)}>
                            Resources
                        </Link>
                        <Link href="/company" className="text-xl text-black" onClick={() => setShowMobileMenu(false)}>
                            Company
                        </Link>
                        <Link href="/pricing" className="text-xl text-black" onClick={() => setShowMobileMenu(false)}>
                            Pricing
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}