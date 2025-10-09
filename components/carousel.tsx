"use client";
import { ReactNode, useState, useEffect, useCallback, Children, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type CarouselProps = {
    children: ReactNode;
    autoSlide?: boolean;
    autoSlideInterval?: number;
    slidesToShow?: 1 | 2 | 3 | 4 | 5;
};

export default function Carousel({
    children,
    autoSlide = false,
    autoSlideInterval = 5000,
    slidesToShow = 1
}: CarouselProps) {
    const [curr, setCurr] = useState(0);
    
    const childrenArray = Children.toArray(children);
    const childCount = childrenArray.length;
    const maxIndex = Math.max(0, childCount - slidesToShow);

    const slideIntervalRef = useCallback((ref: React.MutableRefObject<NodeJS.Timeout | null>) => {
        return {
            set: () => {
                if (ref.current) clearInterval(ref.current);
                if (autoSlide) ref.current = setInterval(() => {
                    setCurr((curr) => (curr >= maxIndex ? 0 : curr + 1));
                }, autoSlideInterval);
            },
            clear: () => {
                if (ref.current) clearInterval(ref.current);
                ref.current = null;
            }
        };
    }, [autoSlide, autoSlideInterval, maxIndex]);
    
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const intervalManager = slideIntervalRef(intervalRef);

    useEffect(() => {
        intervalManager.set();
        return intervalManager.clear;
    }, [autoSlide, autoSlideInterval, intervalManager]);

    const resetAutoSlideTimer = useCallback(() => {
        intervalManager.set();
    }, [intervalManager]);
    
    const prev = useCallback(() => {
        setCurr((curr) => (curr === 0 ? maxIndex : curr - 1));
        resetAutoSlideTimer();
    }, [resetAutoSlideTimer, maxIndex]);

    const next = useCallback(() => {
        setCurr((curr) => (curr >= maxIndex ? 0 : curr + 1));
        resetAutoSlideTimer();
    }, [resetAutoSlideTimer, maxIndex]);

    return (
        <div className="relative overflow-hidden">
            <div 
                className="flex transition-transform ease-out duration-800"
                style={{ transform: `translateX(-${curr * (100 / slidesToShow)}%)` }}
            >
                {Children.map(children, (child, index) => (
                    <div 
                        key={index} 
                        className={`flex-shrink-0 pr-3`} 
                        style={{ 
                            width: `${100 / slidesToShow}%`
                        }}
                    >
                        {child}
                    </div>
                ))}
            </div>
            
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button 
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className={`flex items-center justify-center gap-2`}>
                    {maxIndex > 0 &&
                        Array.from({ length: maxIndex + 1 }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setCurr(i);
                                    resetAutoSlideTimer();
                                }}
                                className={`
                                    transition-all w-2 h-2 bg-white rounded-full
                                    ${curr === i ? "p-1.5" : "bg-opacity-50"}
                                `}>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}