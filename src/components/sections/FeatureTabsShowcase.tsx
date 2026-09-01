"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FeatureTabsShowcase() {
  const [activeTab, setActiveTab] = useState('travel');

  const tabs = [
    { id: 'travel', label: 'Travel' },
    { id: 'spend', label: 'Spend' },
    { id: 'events', label: 'Events' }
  ];

  return (
    <>
      <div className="w-full relative bg-white pb-12" data-component="featureTabsShowcase">
        <div className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout feature-tabs-showcase">
          <div className="bg-[#F5F5EB] relative overflow-hidden p-4 md:p-0 rounded-small md:rounded-medium">
            
            <div className="tabs-switch relative mx-auto md:absolute md:top-6 md:left-6 flex w-fit items-center gap-1 bg-white p-2 rounded-full shadow-raised z-20" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  onClick={() => setActiveTab(tab.id)}
                  className={`tabs-switch-btn relative rounded-full px-4 py-2 text-body-xs z-10 transition-colors duration-300 ${activeTab === tab.id ? 'text-[#14140F] font-medium' : 'text-[#475569]'}`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[#B5F34D] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 font-sono">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="showcase-panels grid relative ">
              <AnimatePresence mode="wait">
                {activeTab === 'travel' && (
                  <motion.div
                    key="travel"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="showcase-panel flex flex-col-reverse overflow-hidden md:flex-row md:gap-[130px] md:h-[350px] "
                  >
                    <div className="flex flex-col justify-end gap-6 w-full mt-4 md:mt-0 md:p-6 md:pt-[108px] md:w-[440px] ">
                      <p className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular">
                        Book and manage travel in more than 178 countries with the widest inventory of flights, hotels, trains, and cars. Our AI handles everything from enforcing policy and tracking budgets to assigning per diems and creating expenses.
                      </p>
                      <a data-style-type="tertiary" className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start" style={{ borderRadius: "26px" }} href="/platform/?tab=Travel">
                        <span className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]">
                          <span className="text-body-m-mobile md:text-body-xs font-sono font-medium"> Explore travel </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            <svg fill="none" fontSize="18px" viewBox="0 0 24 24" width="1em" height="1em"><path d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z" fill="currentColor"></path></svg>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="mt-4 md:mt-6 flex-1 flex items-center md:justify-end md:items-end overflow-hidden">
                      <video src="https://a.storyblok.com/f/287723338557348/x/4c0cd46c12/travel_01.mp4" className="object-contain max-h-full rounded-small md:rounded-none md:rounded-tl-medium" preload="auto" autoPlay muted loop playsInline></video>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'spend' && (
                  <motion.div
                    key="spend"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="showcase-panel flex flex-col-reverse overflow-hidden md:flex-row md:gap-[130px] md:h-[350px]"
                  >
                    <div className="flex flex-col justify-end gap-6 w-full mt-4 md:mt-0 md:p-6 md:pt-[108px] md:w-[440px]">
                      <p className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular">
                        Cards and expenses with all the back-and-forth handled for you. Our AI captures receipts, matches transactions, enforces policy, and routes approvals. Finance teams get control, visibility, and with cashback on every Perk card purchase, money back in the bank, too.
                      </p>
                      <a data-style-type="tertiary" className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start" style={{ borderRadius: "26px" }} href="/expense-management-nam/">
                        <span className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]">
                          <span className="text-body-m-mobile md:text-body-xs font-sono font-medium"> Explore spend </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            <svg fill="none" fontSize="18px" viewBox="0 0 24 24" width="1em" height="1em"><path d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z" fill="currentColor"></path></svg>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="mt-4 md:mt-6 flex-1 flex items-center md:justify-end md:items-end overflow-hidden">
                      <video src="https://a.storyblok.com/f/287723338557348/x/a475668c57/spend_02.mp4" className="object-contain max-h-full rounded-small md:rounded-none md:rounded-tl-medium" preload="auto" autoPlay muted loop playsInline></video>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'events' && (
                  <motion.div
                    key="events"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="showcase-panel flex flex-col-reverse overflow-hidden md:flex-row md:gap-[130px] md:h-[350px]"
                  >
                    <div className="flex flex-col justify-end gap-6 w-full mt-4 md:mt-0 md:p-6 md:pt-[108px] md:w-[440px]">
                      <p className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular">
                        Our AI searches thousands of venues, negotiates the rates, and brings you the best options—you just pick one. RSVPs, travel, accommodation, and comms are all handled for you in one easy-to-use interface.
                      </p>
                      <a data-style-type="tertiary" className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start" style={{ borderRadius: "26px" }} href="/platform/events/">
                        <span className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]">
                          <span className="text-body-m-mobile md:text-body-xs font-sono font-medium"> Explore events </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            <svg fill="none" fontSize="18px" viewBox="0 0 24 24" width="1em" height="1em"><path d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z" fill="currentColor"></path></svg>
                          </span>
                        </span>
                      </a>
                    </div>
                    <div className="mt-4 md:mt-6 flex-1 flex items-center md:justify-end md:items-end overflow-hidden">
                      <video src="https://a.storyblok.com/f/287723338557348/x/10edeea76d/events_03.mp4" className="object-contain max-h-full rounded-small md:rounded-none md:rounded-tl-medium" preload="auto" autoPlay muted loop playsInline></video>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="proof-bar-panels bg-brand-light relative p-4 md:p-6 mt-2.5 md:mt-5 rounded-small md:rounded-medium min-h-max md:min-h-[140px]">
            <AnimatePresence mode="wait">
              {activeTab === 'travel' && (
                <motion.div
                  key="travel-proof"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="proof-bar-panel flex flex-col md:flex-row"
                >
                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex md:justify-center items-center pb-3.5 border-b border-solid border-neutral-80 md:w-40 md:pb-0 md:border-b-0">
                      <img src="https://a.storyblok.com/f/287723338557348/640x228/3be4e03075/fabletics_logo.png/m/640x0/filters:quality(75):format(webp)" alt="Fabletics Logo" className="object-contain max-w-32 md:max-w-40" />
                    </div>
                    <div className="flex justify-start mt-1 md:mt-0 gap-4 md:gap-8">
                      <div className="flex flex-col justify-center md:gap-1 md:border-l border-solid border-neutral-80 md:pl-3 h-full">
                        <span className="text-[36px] leading-[38px] tracking-[-0.03em] text-secondary text-nowrap"> 60hrs </span>
                        <span className="text-nowrap text-secondary text-caption font-sono font-regular"> manual work saved </span>
                      </div>
                      <div className="flex flex-col justify-center md:gap-1 md:border-l border-solid border-neutral-80 md:pl-3 h-full">
                        <span className="text-[36px] leading-[38px] tracking-[-0.03em] text-secondary text-nowrap"> $37.5K </span>
                        <span className="text-nowrap text-secondary text-caption font-sono font-regular"> savings per year </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 mt-6 md:mt-0 md:flex-row md:items-center md:gap-12 md:pl-12 w-full">
                    <div className="flex flex-col flex-1">
                      <p className="text-primary text-body-s-mobile md:text-body-s font-sono font-regular">
                        “It’s not just about visibility—it’s about being able to act on it. If one entity is spending double on flights compared to another, I can see that immediately and investigate.”
                      </p>
                      <span className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular mt-0.5"> Sören Heise, VP of Financial Planning Europe at Fabletics </span>
                    </div>
                    <div className="shrink-0 flex justify-end">
                      <a data-style-type="tertiary" className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap w-auto self-start md:self-center" style={{ borderRadius: "26px" }} href="/case-studies/fabletics/">
                        <span className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]">
                          <span className="text-body-m-mobile md:text-body-xs font-sono font-medium"> View case study </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            <svg fill="none" fontSize="18px" viewBox="0 0 24 24" width="1em" height="1em"><path d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z" fill="currentColor"></path></svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'spend' && (
                <motion.div
                  key="spend-proof"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="proof-bar-panel flex flex-col md:flex-row"
                >
                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex md:justify-center items-center pb-3.5 border-b border-solid border-neutral-80 md:w-40 md:pb-0 md:border-b-0">
                      <img src="https://a.storyblok.com/f/287723338557348/572x240/3ea29137e2/on-logo.png/m/572x0/filters:quality(75):format(webp)" alt="On Logo" className="object-contain max-w-32 md:max-w-40" />
                    </div>
                    <div className="flex justify-start mt-1 md:mt-0 gap-4 md:gap-8">
                      <div className="flex flex-col justify-center md:gap-1 md:border-l border-solid border-neutral-80 md:pl-3 h-full">
                        <span className="text-[36px] leading-[38px] tracking-[-0.03em] text-secondary text-nowrap"> 90% </span>
                        <span className="text-nowrap text-secondary text-caption font-sono font-regular"> expense automation </span>
                      </div>
                      <div className="flex flex-col justify-center md:gap-1 md:border-l border-solid border-neutral-80 md:pl-3 h-full">
                        <span className="text-[36px] leading-[38px] tracking-[-0.03em] text-secondary text-nowrap"> 79% </span>
                        <span className="text-nowrap text-secondary text-caption font-sono font-regular"> cost reduction </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 mt-6 md:mt-0 md:flex-row md:items-center md:gap-12 md:pl-12 w-full">
                    <div className="flex flex-col flex-1">
                      <p className="text-primary text-body-s-mobile md:text-body-s font-sono font-regular">
                        “Perk is so invaluable for us that it’s hard to put a number on it. It saves us so much time and energy.”
                      </p>
                      <span className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular mt-0.5"> Martin Hoffmann, CFO and CO-CEO at On Running </span>
                    </div>
                    <div className="shrink-0 flex justify-end">
                      <a data-style-type="tertiary" className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap w-auto self-start md:self-center" style={{ borderRadius: "26px" }} href="/case-studies/on-running/">
                        <span className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]">
                          <span className="text-body-m-mobile md:text-body-xs font-sono font-medium"> View case study </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            <svg fill="none" fontSize="18px" viewBox="0 0 24 24" width="1em" height="1em"><path d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z" fill="currentColor"></path></svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'events' && (
                <motion.div
                  key="events-proof"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="proof-bar-panel flex flex-col md:flex-row"
                >
                  <div className="flex flex-col md:flex-row md:gap-8">
                    <div className="flex md:justify-center items-center pb-3.5 border-b border-solid border-neutral-80 md:w-40 md:pb-0 md:border-b-0">
                      <img src="https://a.storyblok.com/f/287723338557348/640x228/6576f49509/storyblock_logo.png/m/640x0/filters:quality(75):format(webp)" alt="Storyblock Logo" className="object-contain max-w-32 md:max-w-40" />
                    </div>
                    <div className="flex justify-start mt-1 md:mt-0 gap-4 md:gap-8">
                      <div className="flex flex-col justify-center md:gap-1 md:border-l border-solid border-neutral-80 md:pl-3 h-full">
                        <span className="text-[36px] leading-[38px] tracking-[-0.03em] text-secondary text-nowrap"> 60+  </span>
                        <span className="text-nowrap text-secondary text-caption font-sono font-regular"> monthly trips </span>
                      </div>
                      <div className="flex flex-col justify-center md:gap-1 md:border-l border-solid border-neutral-80 md:pl-3 h-full">
                        <span className="text-[36px] leading-[38px] tracking-[-0.03em] text-secondary text-nowrap"> 43 </span>
                        <span className="text-nowrap text-secondary text-caption font-sono font-regular"> global offices </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 mt-6 md:mt-0 md:flex-row md:items-center md:gap-12 md:pl-12 w-full">
                    <div className="flex flex-col flex-1">
                      <p className="text-primary text-body-s-mobile md:text-body-s font-sono font-regular">
                        “It saves time, while making sure you can control the budget and give people freedom. It’s a 21st century tool.”
                      </p>
                      <span className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular mt-0.5"> Michal Zadrobilek, Expenses Manager at Storyblok </span>
                    </div>
                    <div className="shrink-0 flex justify-end">
                      <a data-style-type="tertiary" className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap w-auto self-start md:self-center" style={{ borderRadius: "26px" }} href="/case-studies/storyblok/">
                        <span className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]">
                          <span className="text-body-m-mobile md:text-body-xs font-sono font-medium"> View case study </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            <svg fill="none" fontSize="18px" viewBox="0 0 24 24" width="1em" height="1em"><path d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z" fill="currentColor"></path></svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
