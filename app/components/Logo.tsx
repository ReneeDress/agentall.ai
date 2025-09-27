interface LogoProps {
    size?: number;
    showText?: boolean;
    className?: string;
}

export default function Logo({ size = 40, showText = true, className = "" }: LogoProps) {
    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 200 200"
                className="logo-icon"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#A855F7"></stop>
                        <stop offset="30%" stopColor="#8B5CF6"></stop>
                        <stop offset="60%" stopColor="#7C3AED"></stop>
                        <stop offset="100%" stopColor="#6366F1"></stop>
                    </linearGradient>
                    <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C084FC"></stop>
                        <stop offset="100%" stopColor="#A855F7"></stop>
                    </linearGradient>
                    <animateTransform
                        id="rotate"
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 100 100"
                        to="360 100 100"
                        dur="8s"
                        repeatCount="indefinite"
                    ></animateTransform>
                </defs>
                <g>
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 100 100"
                        to="360 100 100"
                        dur="12s"
                        repeatCount="indefinite"
                    ></animateTransform>
                    <path
                        d="M 100 20 A 80 80 0 1 1 20 100 A 80 80 0 0 1 100 20"
                        fill="none"
                        stroke="url(#spiralGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="120 40"
                        opacity="0.9"
                    ></path>
                    <path
                        d="M 100 35 A 65 65 0 1 1 35 100 A 65 65 0 0 1 100 35"
                        fill="none"
                        stroke="url(#spiralGradient)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray="100 35"
                        opacity="0.8"
                    ></path>
                    <path
                        d="M 100 50 A 50 50 0 1 1 50 100 A 50 50 0 0 1 100 50"
                        fill="none"
                        stroke="url(#spiralGradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="80 30"
                        opacity="0.7"
                    ></path>
                    <path
                        d="M 100 65 A 35 35 0 1 1 65 100 A 35 35 0 0 1 100 65"
                        fill="none"
                        stroke="url(#spiralGradient)"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="60 25"
                        opacity="0.6"
                    ></path>
                    <path
                        d="M 100 80 A 20 20 0 1 1 80 100 A 20 20 0 0 1 100 80"
                        fill="none"
                        stroke="url(#spiralGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="40 20"
                        opacity="0.5"
                    ></path>
                </g>
                <g>
                    <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="360 100 100"
                        to="0 100 100"
                        dur="10s"
                        repeatCount="indefinite"
                    ></animateTransform>
                    <path
                        d="M 100 70 A 30 30 0 0 0 70 100 A 30 30 0 0 0 100 130"
                        fill="none"
                        stroke="url(#centerGradient)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        opacity="0.8"
                    ></path>
                    <path
                        d="M 100 85 A 15 15 0 0 1 115 100 A 15 15 0 0 1 100 115"
                        fill="none"
                        stroke="url(#centerGradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity="0.7"
                    ></path>
                </g>
                <circle
                    cx="100"
                    cy="100"
                    r="25"
                    fill="url(#centerGradient)"
                    opacity="0.9"
                >
                    <animate
                        attributeName="r"
                        values="25;28;25"
                        dur="3s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
                <text
                    x="100"
                    y="110"
                    textAnchor="middle"
                    fontSize="28"
                    fontWeight="bold"
                    fill="#FFFFFF"
                    fontFamily="Inter, sans-serif"
                >
                    A
                    <animate
                        attributeName="opacity"
                        values="1;0.7;1"
                        dur="2s"
                        repeatCount="indefinite"
                    ></animate>
                </text>
                <circle
                    cx="60"
                    cy="60"
                    r="2"
                    fill="#A855F7"
                    opacity="0.6"
                >
                    <animate
                        attributeName="cy"
                        values="60;40;60"
                        dur="4s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="4s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
                <circle
                    cx="140"
                    cy="140"
                    r="2"
                    fill="#8B5CF6"
                    opacity="0.6"
                >
                    <animate
                        attributeName="cx"
                        values="140;160;140"
                        dur="5s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="opacity"
                        values="0.6;1;0.6"
                        dur="5s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
                <circle
                    cx="160"
                    cy="60"
                    r="2"
                    fill="#7C3AED"
                    opacity="0.6"
                >
                    <animate
                        attributeName="cy"
                        values="60;80;60"
                        dur="3.5s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
                <circle
                    cx="40"
                    cy="140"
                    r="2"
                    fill="#6366F1"
                    opacity="0.6"
                >
                    <animate
                        attributeName="cx"
                        values="40;20;40"
                        dur="4.5s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
            </svg>
            {showText && (
                <span className="text-2xl font-serif-display font-normal text-primary">
                    agentall.ai
                </span>
            )}
        </div>
    );
}
