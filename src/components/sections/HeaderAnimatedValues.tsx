// @ts-nocheck
import React from 'react';
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function HeaderAnimatedValue4() {
  return (
    <>
      <div className="w-full relative bg-white py-12" data-component="headerAnimatedValue" data-testid="tabs-header">
        <div className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            
            <h2 className="text-[#14140F] text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] font-sono font-medium md:whitespace-pre-wrap text-center tracking-tight"> 
              One platform.<br className="hidden md:block" />
              <span className="inline-grid justify-items-end ml-2 md:ml-0"> 
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true"> 200,000 </span> 
                <AnimatedCounter className='col-start-1 row-start-1 whitespace-nowrap' from={200000} to={225000} decimals={0} /> 
              </span>
              <span className="align-super text-[0.6em] leading-none">*</span> hours saved. 
            </h2> 
            
            <p className="text-[#475569] text-base md:text-[18px] leading-[26px] font-sono font-regular mt-4 md:mt-6 max-w-[700px] text-center mx-auto"> 
              One policy layer, one data layer, one AI across travel, spend, and events. Every hour<br className="hidden md:block"/> that used to disappear between systems, now back in your team’s hands. 
            </p> 
            
            <div className="mt-8 w-full flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4"> 
              <a className="relative flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap font-sono font-medium hover:opacity-80" style={{ backgroundColor: "#BEFF50", color: "#14140F", borderRadius: "9999px", padding: "12px 24px", height: "48px" }} href="/platform-overview/">
                <span className="text-base">Explore Platform</span>
                <span className="relative block ml-2"> 
                  <svg fill="none" fontSize="18px" viewBox="0 0 24 24" width="1em" height="1em"><path d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z" fill="currentColor"></path></svg> 
                </span> 
              </a>
            </div> 
          </div> 
        </div>  
      </div>
    </>
  );
}

export function HeaderAnimatedValue8() {
  return (
    <>
      <div className="w-full relative bg-white py-12" data-component="headerAnimatedValue" data-testid="cards-header">
        <div className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            
            <h2 className="text-[#14140F] text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] font-sono font-medium md:whitespace-pre-wrap text-center tracking-tight"> 
              $<span className="inline-grid justify-items-end"> 
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true"> 3.72 </span> 
                <AnimatedCounter className='col-start-1 row-start-1 whitespace-nowrap' from={3.22} to={3.72} decimals={2} /> 
              </span>M<span className="align-super text-[0.6em] leading-none">*</span> off the books<br className="hidden md:block"/>
              and onto the bottom line. 
            </h2> 
            
            <p className="text-[#475569] text-base md:text-[18px] leading-[26px] font-sono font-regular mt-4 md:mt-6 max-w-[700px] text-center mx-auto"> 
              That's what happens when you have control over company spend, full sight of<br className="hidden md:block"/> what's happening, and a tool people actually want to use. 
            </p> 
            
            <div className="mt-8 w-full flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4"> 
              <a className="relative flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap font-sono font-medium bg-[#BEFF50] text-[#14140F] hover:bg-[#aee63e]" style={{ borderRadius: "26px", padding: "12px 24px", height: "48px" }} href="/demo-request/">
                <span className="text-base">Switch today and save</span>
                <span className="relative block ml-2"> 
                  <svg fill="none" fontSize="18px" viewBox="0 0 24 24" width="1em" height="1em"><path d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z" fill="currentColor"></path></svg> 
                </span> 
              </a>
            </div> 
          </div> 
        </div>  
      </div>
    </>
  );
}

export function HeaderAnimatedValue12() {
  return (
    <>
      <div className="w-full relative bg-white py-12" data-component="headerAnimatedValue" data-testid="carousel-header">
        <div className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            
            <h2 className="text-[#14140F] text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] font-sono font-medium md:whitespace-pre-wrap text-center tracking-tight"> 
              <span className="inline-grid justify-items-end"> 
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true"> 111,800 </span> 
                <AnimatedCounter className='col-start-1 row-start-1 whitespace-nowrap' from={100000} to={111800} decimals={0} /> 
              </span><span className="align-super text-[0.6em] leading-none">*</span> tasks handled everyday.<br className="hidden md:block"/> 
              None of them yours. 
            </h2> 
            
            <p className="text-[#475569] text-base md:text-[18px] leading-[26px] font-sono font-regular mt-4 md:mt-6 max-w-[700px] text-center mx-auto"> 
              Every receipt matched, every exception flagged, every approval routed. Perk AI<br className="hidden md:block"/> handles every bit of work that was never really your job in the first place. 
            </p> 
            
          </div> 
        </div>  
      </div>
    </>
  );
}

export function HeaderAnimatedValue16() {
  return (
    <>
      <div className="w-full relative bg-white py-12" data-component="headerAnimatedValue" data-testid="stacked-cards-header">
        <div className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            
            <h2 className="text-[#14140F] text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] font-sono font-medium md:whitespace-pre-wrap text-center tracking-tight"> 
              Powerful for companies,<br className="hidden md:block"/> 
              effortless for employees. 
            </h2> 
            
            <p className="text-[#475569] text-base md:text-[18px] leading-[26px] font-sono font-regular mt-4 md:mt-6 max-w-[700px] text-center mx-auto"> 
              Whatever your role, Perk is built to take on the work that gets in your way. 
            </p> 
            
          </div> 
        </div>  
      </div>
    </>
  );
}

export function HeaderAnimatedValue20() {
  return (
    <>
      <div className="w-full relative bg-white py-12" data-component="headerAnimatedValue" data-testid="expandable-cards-header">
        <div className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            
            <h2 className="text-[#14140F] text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] font-sono font-medium md:whitespace-pre-wrap text-center tracking-tight"> 
              <span className="inline-grid justify-items-end"> 
                <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden="true"> 12,000 </span> 
                <AnimatedCounter className='col-start-1 row-start-1 whitespace-nowrap' from={10000} to={12000} decimals={0} /> 
              </span>+ real businesses,<br className="hidden md:block"/> 
              getting real work done 
            </h2> 
            
          </div> 
        </div>  
      </div>
    </>
  );
}

export function HeaderAnimatedValue26() {
  return (
    <>
      <div className="w-full relative bg-white py-12" data-component="headerAnimatedValue">
        <div className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            
            <h2 className="text-[#14140F] text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] font-sono font-medium md:whitespace-pre-wrap text-center tracking-tight"> 
              Let’s get to work 
            </h2> 
            
            <p className="text-[#475569] text-base md:text-[18px] leading-[26px] font-sono font-regular mt-4 md:mt-6 max-w-[700px] text-center mx-auto"> 
              The reports, insights, and tools you need to power real work. 
            </p> 
            
          </div> 
        </div>  
      </div>
    </>
  );
}
