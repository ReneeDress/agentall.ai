interface GradientDividerProps {
    height?: string;
    textSize?: string;
    textColor?: string; // RGB color like "196 181 253" for purple-200
    textOpacity?: number;
    animationDuration?: number;
    gradientAnimationDuration?: number;
    text?: string;
    className?: string;
}

export default function GradientDivider({
    height = "h-28",
    textSize = "text-9xl",
    textColor = "196 181 253", // purple-200 RGB values
    textOpacity = 20,
    animationDuration = 120,
    gradientAnimationDuration = 24,
    text = "agentall.ai",
    className = "",
}: GradientDividerProps) {
    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            {/* 渐变背景分割线 */}
            <div
                className={`${height} bg-gradient-to-r from-[#1a1a2e] via-[#2d1b69] via-[#4c1d95] via-[#f472b6] via-[#4c1d95] via-[#2d1b69] to-[#1a1a2e] bg-[length:800%_100%] animate-gradient`}
                style={{
                    animationDuration: `${gradientAnimationDuration}s`
                }}
            >
                {/* 滚动文字 */}
                <div className="absolute inset-0 flex items-center justify-center select-none">
                    <div
                        className={`scrolling-text ${textSize} uppercase font-[Poiret_One] font-normal`}
                        style={{
                            animationDuration: `${animationDuration}s`,
                            color: `rgb(${textColor} / ${textOpacity / 100})`
                        }}
                    >
                        {Array.from({ length: 100 }, () => text).join('  ')}
                    </div>
                </div>
            </div>
        </div>
    );
}
