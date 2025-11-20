"use client";
import { useState, useEffect } from "react";
import GSAPSmootherProvider from "@/components/GSAPSmootherProvider";
import Footer from "@/components/footer";

export default function Render({
    className,
    children,
}: Readonly<{
    className?: string;
    children: React.ReactNode;
}>) {
    const [isMobile, setIsMobile] = useState(true);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isMobile == true ? (
                <div className={`${className}`}>
                    {children}
                    <Footer />
                </div>
                
            ) : (
                <GSAPSmootherProvider className={`${className}`} >
                    {children}
                    <Footer />
                </GSAPSmootherProvider>
            )}
        </>
    );
}