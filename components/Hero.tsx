"use client";

import React, { useEffect, useState } from "react";



// Benefits list for the component
const benefits = [
  "50+ hours of recorded content already",
  "Weekly Interactive LIVE classes",
  "Structured learning for real results",
  "Start at any level, no more stagnation",
  "Mentorship guidance & community support",
];

// Highlight Text Component - Key component focusing on the font styling
function HighlightText() {
  // const { isMobile } = useWindowDimension();

  return (
    <div className="flex flex-col gap-6 lg:gap-16 pb-8 lg:pb-12">
      {/* This div structure avoids DOM nesting validation errors */}
      <div className="pt-8 lg:pt-20 text-3xl lg:text-4xl xl:text-[42px] tracking-tight leading-[1.3] lg:leading-[1.3] text-center lg:text-left">
        <div 
          style={{ 
            fontFamily: '"Roboto", serif',
            fontOpticalSizing: 'auto',
            fontWeight: 500,
            fontStyle: 'normal',
            fontVariationSettings: '"wdth" 86.3'
          }}
        >
          Learn your deen,{" "}
          <br className="hidden lg:inline" />
          master life skills and{" "}
          <br className="hidden lg:inline" />
          prepare for{" "}
          <span className="text-slate-900">marriage </span>
          <br className="hidden lg:inline" />
          in <span className="font-semibold">months</span> <span className="bg-black text-white px-2.5 py-1 -rotate-1 inline-block font-medium tracking-wide">— not years</span>
        </div>
      </div>

      <ul className="space-y-2.5 lg:space-y-2 text-slate-600 max-w-[90%] lg:max-w-full mx-auto lg:mx-0 pl-4 lg:pl-6">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start lg:items-center gap-2 text-base lg:text-lg">
            <span className={`h-1.5 w-1.5 mt-1.5 lg:mt-0 rounded-full ${index === 0 ? 'bg-green-500 animate-pulse' : 'bg-slate-900'} flex-shrink-0`} />
            <span className="leading-snug">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main Hero Section Component
export default function HeroSection() {
  return (
    <div className="relative min-h-[85vh] w-full my-8 lg:my-12 mb-24 lg:mb-25">
      <div className="min-h-[85vh] w-full">
        <div className="lg:container z-10 h-full lg:px-4 xl:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center lg:items-center h-full max-w-6xl mx-auto">
            <div className="lg:col-span-5 pt-16 lg:pt-0 px-4 lg:px-0 md:pl-8 lg:pl-12 xl:pl-0">
              <div className="flex flex-col items-center gap-4 lg:gap-8">
                <HighlightText />
              </div>
            </div>
            <div className="lg:col-span-7 pb-8 lg:pb-0 w-full px-4 md:px-12 lg:pl-0 lg:pr-6">
              {/* Video section would go here */}
              <div className="aspect-[1920/1080] rounded-2xl bg-gray-100"></div>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-16">
            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-black px-10 py-5 text-base lg:text-lg font-medium text-white">
              Join community & transform
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


