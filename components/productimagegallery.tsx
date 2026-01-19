"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function ProductImageGallery({
    mainImage,
    items,
    cols,
    rows,
    title
}: {
    mainImage: string;
    items?: {[key: string]: {tumb: string}};
    cols?: number;
    rows?: number;
    title: string;
}) {
    const [currentImage, setCurrentImage] = React.useState(mainImage);

    useEffect(() => {
        setCurrentImage(mainImage);
    }, [mainImage]);

    return (
        <div className='p-2'>
            <h2 className='w-full text-center text-2xl font-bold mb-4'>{title}</h2>
            <Image src={currentImage} alt={title} width={500} height={500} className="w-auto h-auto object-cover pointer-events-none" />
            <div className={`grid grid-cols-${cols} grid-rows-${rows ? rows : 1} gap-2`}>
                {items && Object.keys(items).map((key, index) => (
                    <div onClick={() => setCurrentImage(key)} key={index} className="w-full h-auto overflow-hidden rounded-lg shadow-md cursor-pointer border-2 border-transparent hover:border-blue-600 transition-all duration-300">
                        <Image
                            src={items[key].tumb}
                            alt={`Product thumbnail ${index + 1}`}
                            width={500}
                            height={500}
                            className="object-cover hover:scale-105 transition-transform duration-300 pointer-events-none"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}