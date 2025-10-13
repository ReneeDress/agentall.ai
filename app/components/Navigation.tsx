'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState, useEffect } from 'react';

interface NavigationProps {
    currentPage?: string;
}

export default function Navigation({ currentPage }: NavigationProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50); // 滚动超过50px时显示背景
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                        <Link
                            href="/"
                            className={`relative inline-block hover:before:animate-highlight-nav cursor-pointer px-2 ${currentPage === 'products' ? 'text-primary font-semibold' : 'text-black'
                                }`}
                        >
                            Products
                        </Link>
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
                        <button className="bg-primary text-white px-4 py-2 hover:bg-primary/90 transition-colors cursor-pointer">
                            Get A Demo
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}