'use client';

import { upload } from '@vercel/blob/client';
import Image from 'next/image';
import { useState, useRef } from 'react';
 
export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [uploadProgress, setUploadProgress] = useState({ current: 0, total: 0 });
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className='flex justify-center items-center flex-col h-screen w-screen'>
      <h1>Ajout d&apos;images</h1>
      <div className='w-[50vw] h-[50vh] flex justify-center items-center border-2 border-gray-500 shadow-2xl rounded-md'>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
  
            if (!images?.length) {
              throw new Error('No file selected');
            }
  
            setIsUploading(true);
            setUploadProgress({ current: 0, total: images.length });

            const titleInput = document.querySelector<HTMLInputElement>('#title');
            const yearInput = document.querySelector<HTMLInputElement>('#year');
            const projectInput = document.querySelector<HTMLInputElement>('#project');

            const payload = titleInput?.value ? JSON.stringify({ title: titleInput.value, year: yearInput?.value, project: projectInput?.value }) : undefined;

            for (const img of images) {
              const response = await fetch(img.src);
              const blobData = await response.blob();
              console.log('image:', img);
              await upload(img.title, blobData, {
                  access: 'public',
                  handleUploadUrl: `/api/upload`,
                  clientPayload: payload,
              });
              
              setUploadProgress(prev => ({ ...prev, current: prev.current + 1 }));
            }
            
            setIsUploading(false);
          }}
        >
          <div className='flex flex-col justify-center items-center gap-2'>
            <label htmlFor="title">Titre:</label>
            <input type="text" name="title" id="title" placeholder='Le Monstre'/>
            <label htmlFor="year">Année:</label>
            <input type="number" name="year" id="year" placeholder={`${new Date().getFullYear()}`}/>
            <label htmlFor="project">Projet:</label>
            <input type="text" name="project" id="project" placeholder='Le Soulier'/>
            <input name="file" ref={inputFileRef} type="file" multiple className='border-2 border-gray-400 rounded-md' onChange={(e) => {
              const files = e.target.files;
              if (files) {
                Array.from(files).forEach((file) => {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                  const img = document.createElement('img') as HTMLImageElement;
                  img.src = event.target?.result as string;
                  img.title = file.name;
                  setImages((prevImages) => [...prevImages, img]);
                  };
                  reader.readAsDataURL(file);
                });
                e.target.value = '';
              }
            }} />
            {images.length > 0 && (
              <div>
                <h2>Images à uploader:</h2>
                <ul className='h-32 overflow-x-auto flex flex-row gap-2 border-2 border-gray-300'>
                  {images.map((img, index) => (
                    <li key={index} className='flex-shrink-0'>
                      <Image src={img.src} alt={`Image ${index}`} className='h-32 w-auto object-cover' />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {isUploading && (
              <div className='mt-4 text-lg font-semibold'>
                Uploading: {uploadProgress.current} / {uploadProgress.total}
              </div>
            )}
            {uploadProgress.current === uploadProgress.total && uploadProgress.total > 0 && (
              <div className='mt-4 text-lg font-semibold'>
                Upload complete!
              </div>
            )}
            <div className='mt-4'>
              <button type="submit" disabled={isUploading}>Upload</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}