"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function NiveauxPage() {
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            id: `section-pin-${index}`,
          });
        }
      });
    }, sectionsRef);

    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <>
      <div className="bg-gray-100 relative">
        <section
          ref={el => { if (el) sectionsRef.current[0] = el; }}
          className="h-screen w-full flex items-center justify-center bg-white px-6"
        >
          <div className="max-w-6xl w-full p-10">
            <span className="inline-block h-1 w-20 bg-blue-500 mb-4"></span>
            <h1 className="text-5xl font-bold mb-6 text-gray-800">Secondaire 1</h1>
            <p className="text-2xl text-gray-600 mb-10 leading-relaxed">Inkscape, Lego Mindstorm, Sketchup</p>
            <div className="h-64 w-full bg-gray-200 flex items-center justify-center mb-8 overflow-hidden">
              <span className="text-gray-500">Image: sec1-projects.jpg</span>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <div className="h-2 w-2 bg-blue-300 rounded-full"></div>
              <div className="h-2 w-2 bg-blue-100 rounded-full"></div>
            </div>
          </div>
        </section>
        
        <section
          ref={el => { if (el) sectionsRef.current[1] = el; }}
          className="h-screen w-full flex items-center justify-center bg-gray-50 px-6"
        >
          <div className="max-w-6xl w-full p-10">
            <span className="inline-block h-1 w-20 bg-green-500 mb-4"></span>
            <h1 className="text-5xl font-bold mb-6 text-gray-800">Secondaire 2</h1>
            <p className="text-2xl text-gray-600 mb-10 leading-relaxed">Photoshop, Site web HTML et CSS, Onshape, Sketchup</p>
            <div className="h-64 w-full bg-gray-200 flex items-center justify-center mb-8 overflow-hidden">
              <span className="text-gray-500">Image: sec2-webdesign.jpg</span>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <div className="h-2 w-2 bg-green-300 rounded-full"></div>
              <div className="h-2 w-2 bg-green-100 rounded-full"></div>
            </div>
          </div>
        </section>
        
        <section
          ref={el => { if (el) sectionsRef.current[2] = el; }}
          className="h-screen w-full flex items-center justify-center bg-white px-6"
        >
          <div className="max-w-6xl w-full p-10">
            <span className="inline-block h-1 w-20 bg-purple-500 mb-4"></span>
            <h1 className="text-5xl font-bold mb-6 text-gray-800">Secondaire 3</h1>
            <p className="text-2xl text-gray-600 mb-10 leading-relaxed">Photoshop, Onshape, Premier pro, Projet Libre</p>
            <div className="h-64 w-full bg-gray-200 flex items-center justify-center mb-8 overflow-hidden">
              <span className="text-gray-500">Image: sec3-multimedia.jpg</span>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <div className="h-2 w-2 bg-purple-300 rounded-full"></div>
              <div className="h-2 w-2 bg-purple-100 rounded-full"></div>
            </div>
          </div>
        </section>
        
        <section
          ref={el => { if (el) sectionsRef.current[3] = el; }}
          className="h-screen w-full flex items-center justify-center bg-gray-50 px-6"
        >
          <div className="max-w-6xl w-full p-10">
            <span className="inline-block h-1 w-20 bg-amber-500 mb-4"></span>
            <h1 className="text-5xl font-bold mb-6 text-gray-800">Secondaire 4</h1>
            <p className="text-2xl text-gray-600 mb-10 leading-relaxed">Projet Libre ou au choix des profs</p>
            <div className="h-64 w-full bg-gray-200 flex items-center justify-center mb-8 overflow-hidden">
              <span className="text-gray-500">Image: sec4-projects.jpg</span>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 bg-amber-500 rounded-full"></div>
              <div className="h-2 w-2 bg-amber-300 rounded-full"></div>
              <div className="h-2 w-2 bg-amber-100 rounded-full"></div>
            </div>
          </div>
        </section>
        
        <section
          ref={el => { if (el) sectionsRef.current[4] = el; }}
          className="h-screen w-full flex items-center justify-center bg-white px-6"
        >
          <div className="max-w-6xl w-full p-10">
            <span className="inline-block h-1 w-20 bg-red-500 mb-4"></span>
            <h1 className="text-5xl font-bold mb-6 text-gray-800">Secondaire 5</h1>
            <p className="text-2xl text-gray-600 mb-10 leading-relaxed">Projet Libre ou au choix des profs</p>
            <div className="h-64 w-full bg-gray-200 flex items-center justify-center mb-8 overflow-hidden">
              <span className="text-gray-500">Image: sec5-capstone.jpg</span>
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-2 bg-red-500 rounded-full"></div>
              <div className="h-2 w-2 bg-red-300 rounded-full"></div>
              <div className="h-2 w-2 bg-red-100 rounded-full"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}