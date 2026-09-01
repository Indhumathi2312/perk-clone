// @ts-nocheck
"use client";
import React, { useState } from "react";

export function HorizontalCardsAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section aria-label="Featured case studies">
        <div className="hidden md:block">
          <div
            id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726"
            className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout horizontal-cards-accordion [--accordion-gap:20px] [--collapsed-card-width:100px] [--card-height:400px]"
            style={{
              "--active-card-width": "min(702px, calc(100% - 600px))",
              "--collapsed-card-width":
                "max(100px, calc((100% - var(--active-card-width) - 100px) / 5))",
            }}
            data-horizontal-cards-accordion=""
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured case studies"
          >
            <div
              className="horizontal-cards-accordion__rail flex min-w-0 gap-[var(--accordion-gap)] pb-[2px]"
              data-horizontal-cards-accordion-rail=""
            >
              <article
                id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-0"
                className={`group relative flex h-[var(--card-height)] w-[var(--collapsed-card-width)] min-w-[var(--collapsed-card-width)] flex-[0_0_var(--collapsed-card-width)] overflow-hidden bg-brand-offwhite isolate transition-[flex-basis,min-width] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [&.is-active]:min-w-[var(--active-card-width)] [&.is-active]:basis-[var(--active-card-width)] rounded-small md:rounded-medium ${activeIndex === 0 ? "is-active" : ""}`}
                data-horizontal-cards-accordion-card=""
                data-index="0"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-[3] scale-[1.01] bg-cover bg-center opacity-[0.98] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:scale-100"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/800x0/filters:quality(75):format(webp)"
                    alt="Lush"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/800x0/filters:quality(75):format(webp) 800w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[2] bg-cover bg-center opacity-[0.38] saturate-[0.7] contrast-[0.9] transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-0"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/800x0/filters:quality(75):format(webp)"
                    alt="Lush"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/800x0/filters:quality(75):format(webp) 800w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-black/40 via-black/20 to-black/10 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-100"
                  aria-hidden="true"
                ></div>
                <button
                  id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-0-trigger"
                  className="absolute inset-0 z-10 cursor-pointer border-0 bg-transparent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-brand-perk focus-visible:outline-offset-[-5px]"
                  type="button" onClick={() => setActiveIndex(0)}
                  aria-pressed={activeIndex === 0}
                  data-horizontal-cards-accordion-trigger=""
                >
                  <span className="sr-only">Show case study 1</span>
                </button>
                <div className="pointer-events-none absolute top-10 left-1/2 z-20 flex h-8 w-[84px] -translate-x-1/2 items-center justify-center transition-[top] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:top-6 group-[.is-active]:left-6 group-[.is-active]:translate-x-0">
                  <img
                    src="https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/84x0/filters:quality(75):format(webp)"
                    alt="Lush Handmade Cosmetics"
                    width="84"
                    height="24"
                    className="h-6 w-auto max-w-full object-contain"
                    sizes="84px"
                    srcSet="https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none relative z-20 flex h-full w-full flex-col items-start px-6 py-6">
                  <div className="h-[25px]" aria-hidden="true"></div>
                  <div className="invisible pointer-events-none mt-4 flex w-full flex-1 transition-[visibility] delay-[360ms] group-[.is-active]:visible group-[.is-active]:pointer-events-auto group-[.is-active]:delay-0">
                    <div className="flex w-full max-w-[333px] shrink-0 translate-y-4 flex-col opacity-0 transition-[opacity,transform] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 group-[.is-active]:delay-[130ms]">
                      <p className="text-white text-body-l-mobile md:text-body-l font-sono font-regular">
                        {" "}
                        How Lush reimagined work travel with Perk{" "}
                      </p>
                      <div className="mt-auto flex items-center gap-6 opacity-0 transition-opacity duration-150 ease-out motion-reduce:transition-none group-[.is-active]:opacity-100">
                        <div className="horizontal-cards-accordion__button">
                          <a
                            data-style-type="secondary"
                            data-button-name="horizontal-cards-accordion-0"
                            data-disabled="false"
                            data-theme-type="dark"
                            data-loading="false"
                            data-focus-theme="dark"
                            className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                            style={{
                              borderRadius: "26px",
                              padding: "16px 12px 16px 16px",
                              height: "40px",
                            }}
                            href="/case-studies/lush/"
                            data-astro-cid-56wynlmn="true"
                          >
                            {" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="button-loader block"
                              data-size="small"
                              aria-hidden="true"
                              data-astro-cid-6agqfusc=""
                            >
                              {" "}
                              <img
                                className="button-loader__img"
                                src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                                alt=""
                                width="75"
                                height="75"
                                data-astro-cid-6agqfusc=""
                              />{" "}
                            </span>{" "}
                            <span
                              data-size="small"
                              data-loading="false"
                              data-direction="right"
                              className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                              data-astro-cid-2duvei3v=""
                            >
                              {" "}
                              <span
                                className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                                data-button-label="true"
                              >
                                {" "}
                                Read more{" "}
                              </span>
                              <span
                                className="relative block"
                                style={{ width: "20px", height: "20px" }}
                              >
                                {" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIcon"
                                >
                                  {" "}
                                  <path
                                    d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIconHover"
                                >
                                  {" "}
                                  <path
                                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                              </span>{" "}
                            </span>{" "}
                          </a>
                        </div>
                        <a
                          data-style-type="tertiary"
                          data-button-name="horizontal-cards-accordion-browse-all-1d4af3ae-2048-48d8-a88e-7110c5c8e726"
                          data-disabled="false"
                          data-theme-type="dark"
                          data-loading="false"
                          data-focus-theme="dark"
                          className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto"
                          style={{ borderRadius: "26px" }}
                          href="/customers/"
                          data-astro-cid-56wynlmn="true"
                        >
                          {" "}
                          <span
                            className="button-loader block"
                            data-size="default"
                            aria-hidden="true"
                            data-astro-cid-6agqfusc=""
                          >
                            {" "}
                            <img
                              className="button-loader__img"
                              src="images/lottie_animation_logo_default.DisJTIXT.gif"
                              alt=""
                              width="75"
                              height="75"
                              data-astro-cid-6agqfusc=""
                            />{" "}
                          </span>{" "}
                          <span
                            data-size="default"
                            data-loading="false"
                            data-direction="right"
                            className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                            data-astro-cid-2duvei3v=""
                          >
                            {" "}
                            <span
                              className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium underline"
                              data-button-label="true"
                            >
                              {" "}
                              Browse all stories{" "}
                            </span>
                            <span
                              className="relative block"
                              style={{ width: "18px", height: "18px" }}
                            >
                              {" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIcon"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIconHover"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-1"
                className={`group relative flex h-[var(--card-height)] w-[var(--collapsed-card-width)] min-w-[var(--collapsed-card-width)] flex-[0_0_var(--collapsed-card-width)] overflow-hidden bg-brand-offwhite isolate transition-[flex-basis,min-width] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [&.is-active]:min-w-[var(--active-card-width)] [&.is-active]:basis-[var(--active-card-width)] rounded-small md:rounded-medium ${activeIndex === 1 ? "is-active" : ""}`}
                data-horizontal-cards-accordion-card=""
                data-index="1"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-[3] scale-[1.01] bg-cover bg-center opacity-[0.98] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:scale-100"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/1200x0/filters:quality(75):format(webp)"
                    alt="Brietling Customer"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[2] bg-cover bg-center opacity-[0.38] saturate-[0.7] contrast-[0.9] transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-0"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/1200x0/filters:quality(75):format(webp)"
                    alt="Brietling Customer"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-black/40 via-black/20 to-black/10 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-100"
                  aria-hidden="true"
                ></div>
                <button
                  id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-1-trigger"
                  className="absolute inset-0 z-10 cursor-pointer border-0 bg-transparent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-brand-perk focus-visible:outline-offset-[-5px]"
                  type="button" onClick={() => setActiveIndex(1)}
                  aria-pressed={activeIndex === 1}
                  data-horizontal-cards-accordion-trigger=""
                >
                  <span className="sr-only">Show case study 2</span>
                </button>
                <div className="pointer-events-none absolute top-10 left-1/2 z-20 flex h-8 w-[84px] -translate-x-1/2 items-center justify-center transition-[top] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:top-6 group-[.is-active]:left-6 group-[.is-active]:translate-x-0">
                  <img
                    src="https://a.storyblok.com/f/287723338557348/252x96/968743407c/breitling.png/m/84x0/filters:quality(75):format(webp)"
                    alt="Breitling"
                    width="84"
                    height="24"
                    className="h-6 w-auto max-w-full object-contain"
                    sizes="84px"
                    srcSet="https://a.storyblok.com/f/287723338557348/252x96/968743407c/breitling.png/m/252x0/filters:quality(75):format(webp) 252w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none relative z-20 flex h-full w-full flex-col items-start px-6 py-6">
                  <div className="h-[25px]" aria-hidden="true"></div>
                  <div className="invisible pointer-events-none mt-4 flex w-full flex-1 transition-[visibility] delay-[360ms] group-[.is-active]:visible group-[.is-active]:pointer-events-auto group-[.is-active]:delay-0">
                    <div className="flex w-full max-w-[333px] shrink-0 translate-y-4 flex-col opacity-0 transition-[opacity,transform] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 group-[.is-active]:delay-[130ms]">
                      <p className="text-white text-body-l-mobile md:text-body-l font-sono font-regular">
                        {" "}
                        We now have a single source of truth with unmatched data
                        quality for the audit trail. That gives us exactly the
                        level of transparency we need.{" "}
                      </p>
                      <div className="mt-auto flex items-center gap-6 opacity-0 transition-opacity duration-150 ease-out motion-reduce:transition-none group-[.is-active]:opacity-100">
                        <div className="horizontal-cards-accordion__button">
                          <a
                            data-style-type="secondary"
                            data-button-name="horizontal-cards-accordion-1"
                            data-disabled="false"
                            data-theme-type="dark"
                            data-loading="false"
                            data-focus-theme="dark"
                            className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                            style={{
                              borderRadius: "26px",
                              padding: "16px 12px 16px 16px",
                              height: "40px",
                            }}
                            href="/case-studies/breitling/"
                            data-astro-cid-56wynlmn="true"
                          >
                            {" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="button-loader block"
                              data-size="small"
                              aria-hidden="true"
                              data-astro-cid-6agqfusc=""
                            >
                              {" "}
                              <img
                                className="button-loader__img"
                                src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                                alt=""
                                width="75"
                                height="75"
                                data-astro-cid-6agqfusc=""
                              />{" "}
                            </span>{" "}
                            <span
                              data-size="small"
                              data-loading="false"
                              data-direction="right"
                              className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                              data-astro-cid-2duvei3v=""
                            >
                              {" "}
                              <span
                                className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                                data-button-label="true"
                              >
                                {" "}
                                Read more{" "}
                              </span>
                              <span
                                className="relative block"
                                style={{ width: "20px", height: "20px" }}
                              >
                                {" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIcon"
                                >
                                  {" "}
                                  <path
                                    d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIconHover"
                                >
                                  {" "}
                                  <path
                                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                              </span>{" "}
                            </span>{" "}
                          </a>
                        </div>
                        <a
                          data-style-type="tertiary"
                          data-button-name="horizontal-cards-accordion-browse-all-1d4af3ae-2048-48d8-a88e-7110c5c8e726"
                          data-disabled="false"
                          data-theme-type="dark"
                          data-loading="false"
                          data-focus-theme="dark"
                          className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto"
                          style={{ borderRadius: "26px" }}
                          href="/customers/"
                          data-astro-cid-56wynlmn="true"
                        >
                          {" "}
                          <span
                            className="button-loader block"
                            data-size="default"
                            aria-hidden="true"
                            data-astro-cid-6agqfusc=""
                          >
                            {" "}
                            <img
                              className="button-loader__img"
                              src="images/lottie_animation_logo_default.DisJTIXT.gif"
                              alt=""
                              width="75"
                              height="75"
                              data-astro-cid-6agqfusc=""
                            />{" "}
                          </span>{" "}
                          <span
                            data-size="default"
                            data-loading="false"
                            data-direction="right"
                            className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                            data-astro-cid-2duvei3v=""
                          >
                            {" "}
                            <span
                              className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium underline"
                              data-button-label="true"
                            >
                              {" "}
                              Browse all stories{" "}
                            </span>
                            <span
                              className="relative block"
                              style={{ width: "18px", height: "18px" }}
                            >
                              {" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIcon"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIconHover"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-2"
                className={`group relative flex h-[var(--card-height)] w-[var(--collapsed-card-width)] min-w-[var(--collapsed-card-width)] flex-[0_0_var(--collapsed-card-width)] overflow-hidden bg-brand-offwhite isolate transition-[flex-basis,min-width] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [&.is-active]:min-w-[var(--active-card-width)] [&.is-active]:basis-[var(--active-card-width)] rounded-small md:rounded-medium ${activeIndex === 2 ? "is-active" : ""}`}
                data-horizontal-cards-accordion-card=""
                data-index="2"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-[3] scale-[1.01] bg-cover bg-center opacity-[0.98] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:scale-100"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/1200x0/filters:quality(75):format(webp)"
                    alt="Renata Jasiuniene Nord Security"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[2] bg-cover bg-center opacity-[0.38] saturate-[0.7] contrast-[0.9] transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-0"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/1200x0/filters:quality(75):format(webp)"
                    alt="Renata Jasiuniene Nord Security"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-black/40 via-black/20 to-black/10 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-100"
                  aria-hidden="true"
                ></div>
                <button
                  id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-2-trigger"
                  className="absolute inset-0 z-10 cursor-pointer border-0 bg-transparent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-brand-perk focus-visible:outline-offset-[-5px]"
                  type="button" onClick={() => setActiveIndex(2)}
                  aria-pressed={activeIndex === 2}
                  data-horizontal-cards-accordion-trigger=""
                >
                  <span className="sr-only">Show case study 3</span>
                </button>
                <div className="pointer-events-none absolute top-10 left-1/2 z-20 flex h-8 w-[84px] -translate-x-1/2 items-center justify-center transition-[top] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:top-6 group-[.is-active]:left-6 group-[.is-active]:translate-x-0">
                  <img
                    src="https://a.storyblok.com/f/287723338557348/252x96/2799efc70b/nordsecurity.png/m/84x0/filters:quality(75):format(webp)"
                    alt="Nord Security"
                    width="84"
                    height="24"
                    className="h-6 w-auto max-w-full object-contain"
                    sizes="84px"
                    srcSet="https://a.storyblok.com/f/287723338557348/252x96/2799efc70b/nordsecurity.png/m/252x0/filters:quality(75):format(webp) 252w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none relative z-20 flex h-full w-full flex-col items-start px-6 py-6">
                  <div className="h-[25px]" aria-hidden="true"></div>
                  <div className="invisible pointer-events-none mt-4 flex w-full flex-1 transition-[visibility] delay-[360ms] group-[.is-active]:visible group-[.is-active]:pointer-events-auto group-[.is-active]:delay-0">
                    <div className="flex w-full max-w-[333px] shrink-0 translate-y-4 flex-col opacity-0 transition-[opacity,transform] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 group-[.is-active]:delay-[130ms]">
                      <p className="text-white text-body-l-mobile md:text-body-l font-sono font-regular">
                        {" "}
                        How Nord Security simplified, scaled, and saved on
                        travel management with Perk{" "}
                      </p>
                      <div className="mt-auto flex items-center gap-6 opacity-0 transition-opacity duration-150 ease-out motion-reduce:transition-none group-[.is-active]:opacity-100">
                        <div className="horizontal-cards-accordion__button">
                          <a
                            data-style-type="secondary"
                            data-button-name="horizontal-cards-accordion-2"
                            data-disabled="false"
                            data-theme-type="dark"
                            data-loading="false"
                            data-focus-theme="dark"
                            className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                            style={{
                              borderRadius: "26px",
                              padding: "16px 12px 16px 16px",
                              height: "40px",
                            }}
                            href="/case-studies/nord-security/"
                            data-astro-cid-56wynlmn="true"
                          >
                            {" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="button-loader block"
                              data-size="small"
                              aria-hidden="true"
                              data-astro-cid-6agqfusc=""
                            >
                              {" "}
                              <img
                                className="button-loader__img"
                                src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                                alt=""
                                width="75"
                                height="75"
                                data-astro-cid-6agqfusc=""
                              />{" "}
                            </span>{" "}
                            <span
                              data-size="small"
                              data-loading="false"
                              data-direction="right"
                              className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                              data-astro-cid-2duvei3v=""
                            >
                              {" "}
                              <span
                                className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                                data-button-label="true"
                              >
                                {" "}
                                Read more{" "}
                              </span>
                              <span
                                className="relative block"
                                style={{ width: "20px", height: "20px" }}
                              >
                                {" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIcon"
                                >
                                  {" "}
                                  <path
                                    d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIconHover"
                                >
                                  {" "}
                                  <path
                                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                              </span>{" "}
                            </span>{" "}
                          </a>
                        </div>
                        <a
                          data-style-type="tertiary"
                          data-button-name="horizontal-cards-accordion-browse-all-1d4af3ae-2048-48d8-a88e-7110c5c8e726"
                          data-disabled="false"
                          data-theme-type="dark"
                          data-loading="false"
                          data-focus-theme="dark"
                          className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto"
                          style={{ borderRadius: "26px" }}
                          href="/customers/"
                          data-astro-cid-56wynlmn="true"
                        >
                          {" "}
                          <span
                            className="button-loader block"
                            data-size="default"
                            aria-hidden="true"
                            data-astro-cid-6agqfusc=""
                          >
                            {" "}
                            <img
                              className="button-loader__img"
                              src="images/lottie_animation_logo_default.DisJTIXT.gif"
                              alt=""
                              width="75"
                              height="75"
                              data-astro-cid-6agqfusc=""
                            />{" "}
                          </span>{" "}
                          <span
                            data-size="default"
                            data-loading="false"
                            data-direction="right"
                            className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                            data-astro-cid-2duvei3v=""
                          >
                            {" "}
                            <span
                              className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium underline"
                              data-button-label="true"
                            >
                              {" "}
                              Browse all stories{" "}
                            </span>
                            <span
                              className="relative block"
                              style={{ width: "18px", height: "18px" }}
                            >
                              {" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIcon"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIconHover"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-3"
                className={`group relative flex h-[var(--card-height)] w-[var(--collapsed-card-width)] min-w-[var(--collapsed-card-width)] flex-[0_0_var(--collapsed-card-width)] overflow-hidden bg-brand-offwhite isolate transition-[flex-basis,min-width] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [&.is-active]:min-w-[var(--active-card-width)] [&.is-active]:basis-[var(--active-card-width)] rounded-small md:rounded-medium ${activeIndex === 3 ? "is-active" : ""}`}
                data-horizontal-cards-accordion-card=""
                data-index="3"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-[3] scale-[1.01] bg-cover bg-center opacity-[0.98] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:scale-100"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/1200x0/filters:quality(75):format(webp)"
                    alt="Website Thumb Case Studies 2"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 1920w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 2560w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 3200w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 4000w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[2] bg-cover bg-center opacity-[0.38] saturate-[0.7] contrast-[0.9] transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-0"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/1200x0/filters:quality(75):format(webp)"
                    alt="Website Thumb Case Studies 2"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 1920w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 2560w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 3200w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 4000w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-black/40 via-black/20 to-black/10 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-100"
                  aria-hidden="true"
                ></div>
                <button
                  id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-3-trigger"
                  className="absolute inset-0 z-10 cursor-pointer border-0 bg-transparent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-brand-perk focus-visible:outline-offset-[-5px]"
                  type="button" onClick={() => setActiveIndex(3)}
                  aria-pressed={activeIndex === 3}
                  data-horizontal-cards-accordion-trigger=""
                >
                  <span className="sr-only">Show case study 4</span>
                </button>
                <div className="pointer-events-none absolute top-10 left-1/2 z-20 flex h-8 w-[84px] -translate-x-1/2 items-center justify-center transition-[top] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:top-6 group-[.is-active]:left-6 group-[.is-active]:translate-x-0">
                  <img
                    src="https://a.storyblok.com/f/287723338557348/252x96/6452804731/bitpanda.png/m/84x0/filters:quality(75):format(webp)"
                    alt="Bitpanda"
                    width="84"
                    height="24"
                    className="h-6 w-auto max-w-full object-contain"
                    sizes="84px"
                    srcSet="https://a.storyblok.com/f/287723338557348/252x96/6452804731/bitpanda.png/m/252x0/filters:quality(75):format(webp) 252w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none relative z-20 flex h-full w-full flex-col items-start px-6 py-6">
                  <div className="h-[25px]" aria-hidden="true"></div>
                  <div className="invisible pointer-events-none mt-4 flex w-full flex-1 transition-[visibility] delay-[360ms] group-[.is-active]:visible group-[.is-active]:pointer-events-auto group-[.is-active]:delay-0">
                    <div className="flex w-full max-w-[333px] shrink-0 translate-y-4 flex-col opacity-0 transition-[opacity,transform] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 group-[.is-active]:delay-[130ms]">
                      <p className="text-white text-body-l-mobile md:text-body-l font-sono font-regular">
                        {" "}
                        How Bitpanda reduced expense management operating costs
                        by 62.4%{" "}
                      </p>
                      <div className="mt-auto flex items-center gap-6 opacity-0 transition-opacity duration-150 ease-out motion-reduce:transition-none group-[.is-active]:opacity-100">
                        <div className="horizontal-cards-accordion__button">
                          <a
                            data-style-type="secondary"
                            data-button-name="horizontal-cards-accordion-3"
                            data-disabled="false"
                            data-theme-type="dark"
                            data-loading="false"
                            data-focus-theme="dark"
                            className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                            style={{
                              borderRadius: "26px",
                              padding: "16px 12px 16px 16px",
                              height: "40px",
                            }}
                            href="/case-studies/bitpanda/"
                            data-astro-cid-56wynlmn="true"
                          >
                            {" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="button-loader block"
                              data-size="small"
                              aria-hidden="true"
                              data-astro-cid-6agqfusc=""
                            >
                              {" "}
                              <img
                                className="button-loader__img"
                                src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                                alt=""
                                width="75"
                                height="75"
                                data-astro-cid-6agqfusc=""
                              />{" "}
                            </span>{" "}
                            <span
                              data-size="small"
                              data-loading="false"
                              data-direction="right"
                              className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                              data-astro-cid-2duvei3v=""
                            >
                              {" "}
                              <span
                                className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                                data-button-label="true"
                              >
                                {" "}
                                Read more{" "}
                              </span>
                              <span
                                className="relative block"
                                style={{ width: "20px", height: "20px" }}
                              >
                                {" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIcon"
                                >
                                  {" "}
                                  <path
                                    d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIconHover"
                                >
                                  {" "}
                                  <path
                                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                              </span>{" "}
                            </span>{" "}
                          </a>
                        </div>
                        <a
                          data-style-type="tertiary"
                          data-button-name="horizontal-cards-accordion-browse-all-1d4af3ae-2048-48d8-a88e-7110c5c8e726"
                          data-disabled="false"
                          data-theme-type="dark"
                          data-loading="false"
                          data-focus-theme="dark"
                          className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto"
                          style={{ borderRadius: "26px" }}
                          href="/customers/"
                          data-astro-cid-56wynlmn="true"
                        >
                          {" "}
                          <span
                            className="button-loader block"
                            data-size="default"
                            aria-hidden="true"
                            data-astro-cid-6agqfusc=""
                          >
                            {" "}
                            <img
                              className="button-loader__img"
                              src="images/lottie_animation_logo_default.DisJTIXT.gif"
                              alt=""
                              width="75"
                              height="75"
                              data-astro-cid-6agqfusc=""
                            />{" "}
                          </span>{" "}
                          <span
                            data-size="default"
                            data-loading="false"
                            data-direction="right"
                            className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                            data-astro-cid-2duvei3v=""
                          >
                            {" "}
                            <span
                              className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium underline"
                              data-button-label="true"
                            >
                              {" "}
                              Browse all stories{" "}
                            </span>
                            <span
                              className="relative block"
                              style={{ width: "18px", height: "18px" }}
                            >
                              {" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIcon"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIconHover"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-4"
                className={`group relative flex h-[var(--card-height)] w-[var(--collapsed-card-width)] min-w-[var(--collapsed-card-width)] flex-[0_0_var(--collapsed-card-width)] overflow-hidden bg-brand-offwhite isolate transition-[flex-basis,min-width] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [&.is-active]:min-w-[var(--active-card-width)] [&.is-active]:basis-[var(--active-card-width)] rounded-small md:rounded-medium ${activeIndex === 4 ? "is-active" : ""}`}
                data-horizontal-cards-accordion-card=""
                data-index="4"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-[3] scale-[1.01] bg-cover bg-center opacity-[0.98] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:scale-100"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/1200x0/filters:quality(75):format(webp)"
                    alt="1f Story Hero Min 1"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 1920w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 2560w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 3200w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 4000w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[2] bg-cover bg-center opacity-[0.38] saturate-[0.7] contrast-[0.9] transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-0"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/1200x0/filters:quality(75):format(webp)"
                    alt="1f Story Hero Min 1"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 1920w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 2560w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 3200w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 4000w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-black/40 via-black/20 to-black/10 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-100"
                  aria-hidden="true"
                ></div>
                <button
                  id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-4-trigger"
                  className="absolute inset-0 z-10 cursor-pointer border-0 bg-transparent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-brand-perk focus-visible:outline-offset-[-5px]"
                  type="button" onClick={() => setActiveIndex(4)}
                  aria-pressed={activeIndex === 4}
                  data-horizontal-cards-accordion-trigger=""
                >
                  <span className="sr-only">Show case study 5</span>
                </button>
                <div className="pointer-events-none absolute top-10 left-1/2 z-20 flex h-8 w-[84px] -translate-x-1/2 items-center justify-center transition-[top] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:top-6 group-[.is-active]:left-6 group-[.is-active]:translate-x-0">
                  <img
                    src="https://a.storyblok.com/f/287723338557348/168x64/120bffc124/on.png/m/84x0/filters:quality(75):format(webp)"
                    alt="On"
                    width="84"
                    height="24"
                    className="h-6 w-auto max-w-full object-contain"
                    sizes="84px"
                    srcSet="https://a.storyblok.com/f/287723338557348/168x64/120bffc124/on.png/m/168x0/filters:quality(75):format(webp) 168w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none relative z-20 flex h-full w-full flex-col items-start px-6 py-6">
                  <div className="h-[25px]" aria-hidden="true"></div>
                  <div className="invisible pointer-events-none mt-4 flex w-full flex-1 transition-[visibility] delay-[360ms] group-[.is-active]:visible group-[.is-active]:pointer-events-auto group-[.is-active]:delay-0">
                    <div className="flex w-full max-w-[333px] shrink-0 translate-y-4 flex-col opacity-0 transition-[opacity,transform] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 group-[.is-active]:delay-[130ms]">
                      <p className="text-white text-body-l-mobile md:text-body-l font-sono font-regular">
                        {" "}
                        How On automates 90% of their expenses with Perk{" "}
                      </p>
                      <div className="mt-auto flex items-center gap-6 opacity-0 transition-opacity duration-150 ease-out motion-reduce:transition-none group-[.is-active]:opacity-100">
                        <div className="horizontal-cards-accordion__button">
                          <a
                            data-style-type="secondary"
                            data-button-name="horizontal-cards-accordion-4"
                            data-disabled="false"
                            data-theme-type="dark"
                            data-loading="false"
                            data-focus-theme="dark"
                            className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                            style={{
                              borderRadius: "26px",
                              padding: "16px 12px 16px 16px",
                              height: "40px",
                            }}
                            href="/case-studies/on-running/"
                            data-astro-cid-56wynlmn="true"
                          >
                            {" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="button-loader block"
                              data-size="small"
                              aria-hidden="true"
                              data-astro-cid-6agqfusc=""
                            >
                              {" "}
                              <img
                                className="button-loader__img"
                                src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                                alt=""
                                width="75"
                                height="75"
                                data-astro-cid-6agqfusc=""
                              />{" "}
                            </span>{" "}
                            <span
                              data-size="small"
                              data-loading="false"
                              data-direction="right"
                              className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                              data-astro-cid-2duvei3v=""
                            >
                              {" "}
                              <span
                                className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                                data-button-label="true"
                              >
                                {" "}
                                Read more{" "}
                              </span>
                              <span
                                className="relative block"
                                style={{ width: "20px", height: "20px" }}
                              >
                                {" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIcon"
                                >
                                  {" "}
                                  <path
                                    d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIconHover"
                                >
                                  {" "}
                                  <path
                                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                              </span>{" "}
                            </span>{" "}
                          </a>
                        </div>
                        <a
                          data-style-type="tertiary"
                          data-button-name="horizontal-cards-accordion-browse-all-1d4af3ae-2048-48d8-a88e-7110c5c8e726"
                          data-disabled="false"
                          data-theme-type="dark"
                          data-loading="false"
                          data-focus-theme="dark"
                          className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto"
                          style={{ borderRadius: "26px" }}
                          href="/customers/"
                          data-astro-cid-56wynlmn="true"
                        >
                          {" "}
                          <span
                            className="button-loader block"
                            data-size="default"
                            aria-hidden="true"
                            data-astro-cid-6agqfusc=""
                          >
                            {" "}
                            <img
                              className="button-loader__img"
                              src="images/lottie_animation_logo_default.DisJTIXT.gif"
                              alt=""
                              width="75"
                              height="75"
                              data-astro-cid-6agqfusc=""
                            />{" "}
                          </span>{" "}
                          <span
                            data-size="default"
                            data-loading="false"
                            data-direction="right"
                            className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                            data-astro-cid-2duvei3v=""
                          >
                            {" "}
                            <span
                              className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium underline"
                              data-button-label="true"
                            >
                              {" "}
                              Browse all stories{" "}
                            </span>
                            <span
                              className="relative block"
                              style={{ width: "18px", height: "18px" }}
                            >
                              {" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIcon"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIconHover"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-5"
                className={`group relative flex h-[var(--card-height)] w-[var(--collapsed-card-width)] min-w-[var(--collapsed-card-width)] flex-[0_0_var(--collapsed-card-width)] overflow-hidden bg-brand-offwhite isolate transition-[flex-basis,min-width] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [&.is-active]:min-w-[var(--active-card-width)] [&.is-active]:basis-[var(--active-card-width)] rounded-small md:rounded-medium ${activeIndex === 5 ? "is-active" : ""}`}
                data-horizontal-cards-accordion-card=""
                data-index="5"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-[3] scale-[1.01] bg-cover bg-center opacity-[0.98] transition-transform duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:scale-100"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp)"
                    alt="Umb Customer Story"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp) 1800w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[2] bg-cover bg-center opacity-[0.38] saturate-[0.7] contrast-[0.9] transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-0"
                  aria-hidden="true"
                >
                  <img
                    draggable="false"
                    src="https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp)"
                    alt="Umb Customer Story"
                    className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                    sizes="(min-width: 1092px) 702px, calc(100vw - 66px)"
                    srcSet="https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp) 1800w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-r from-black/40 via-black/20 to-black/10 opacity-0 transition-opacity duration-300 motion-reduce:transition-none group-[.is-active]:opacity-100"
                  aria-hidden="true"
                ></div>
                <button
                  id="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-card-5-trigger"
                  className="absolute inset-0 z-10 cursor-pointer border-0 bg-transparent focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-brand-perk focus-visible:outline-offset-[-5px]"
                  type="button" onClick={() => setActiveIndex(5)}
                  aria-pressed={activeIndex === 5}
                  data-horizontal-cards-accordion-trigger=""
                >
                  <span className="sr-only">Show case study 6</span>
                </button>
                <div className="pointer-events-none absolute top-10 left-1/2 z-20 flex h-8 w-[84px] -translate-x-1/2 items-center justify-center transition-[top] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:top-6 group-[.is-active]:left-6 group-[.is-active]:translate-x-0">
                  <img
                    src="https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/84x0/filters:quality(75):format(webp)"
                    alt="UMB"
                    width="84"
                    height="24"
                    className="h-6 w-auto max-w-full object-contain"
                    sizes="84px"
                    srcSet="https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <div className="pointer-events-none relative z-20 flex h-full w-full flex-col items-start px-6 py-6">
                  <div className="h-[25px]" aria-hidden="true"></div>
                  <div className="invisible pointer-events-none mt-4 flex w-full flex-1 transition-[visibility] delay-[360ms] group-[.is-active]:visible group-[.is-active]:pointer-events-auto group-[.is-active]:delay-0">
                    <div className="flex w-full max-w-[333px] shrink-0 translate-y-4 flex-col opacity-0 transition-[opacity,transform] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none group-[.is-active]:translate-y-0 group-[.is-active]:opacity-100 group-[.is-active]:delay-[130ms]">
                      <p className="text-white text-body-l-mobile md:text-body-l font-sono font-regular">
                        {" "}
                        How UMB streamlined expenses with Perk{" "}
                      </p>
                      <div className="mt-auto flex items-center gap-6 opacity-0 transition-opacity duration-150 ease-out motion-reduce:transition-none group-[.is-active]:opacity-100">
                        <div className="horizontal-cards-accordion__button">
                          <a
                            data-style-type="secondary"
                            data-button-name="horizontal-cards-accordion-5"
                            data-disabled="false"
                            data-theme-type="dark"
                            data-loading="false"
                            data-focus-theme="dark"
                            className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                            style={{
                              borderRadius: "26px",
                              padding: "16px 12px 16px 16px",
                              height: "40px",
                            }}
                            href="/case-studies/umb/"
                            data-astro-cid-56wynlmn="true"
                          >
                            {" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                              style={{ borderRadius: "26px" }}
                              data-astro-cid-i44k2awd="true"
                            >
                              {" "}
                            </span>{" "}
                            <span
                              className="button-loader block"
                              data-size="small"
                              aria-hidden="true"
                              data-astro-cid-6agqfusc=""
                            >
                              {" "}
                              <img
                                className="button-loader__img"
                                src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                                alt=""
                                width="75"
                                height="75"
                                data-astro-cid-6agqfusc=""
                              />{" "}
                            </span>{" "}
                            <span
                              data-size="small"
                              data-loading="false"
                              data-direction="right"
                              className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                              data-astro-cid-2duvei3v=""
                            >
                              {" "}
                              <span
                                className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                                data-button-label="true"
                              >
                                {" "}
                                Read more{" "}
                              </span>
                              <span
                                className="relative block"
                                style={{ width: "20px", height: "20px" }}
                              >
                                {" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIcon"
                                >
                                  {" "}
                                  <path
                                    d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                                <svg
                                  fill="none"
                                  fontSize="20px"
                                  overflow="hidden"
                                  preserveAspectRatio="xMinYMin"
                                  viewBox="0 0 24 24"
                                  width="1em"
                                  height="1em"
                                  className="buttonIconHover"
                                >
                                  {" "}
                                  <path
                                    d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                    fill="currentColor"
                                  ></path>{" "}
                                </svg>{" "}
                              </span>{" "}
                            </span>{" "}
                          </a>
                        </div>
                        <a
                          data-style-type="tertiary"
                          data-button-name="horizontal-cards-accordion-browse-all-1d4af3ae-2048-48d8-a88e-7110c5c8e726"
                          data-disabled="false"
                          data-theme-type="dark"
                          data-loading="false"
                          data-focus-theme="dark"
                          className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto"
                          style={{ borderRadius: "26px" }}
                          href="/customers/"
                          data-astro-cid-56wynlmn="true"
                        >
                          {" "}
                          <span
                            className="button-loader block"
                            data-size="default"
                            aria-hidden="true"
                            data-astro-cid-6agqfusc=""
                          >
                            {" "}
                            <img
                              className="button-loader__img"
                              src="images/lottie_animation_logo_default.DisJTIXT.gif"
                              alt=""
                              width="75"
                              height="75"
                              data-astro-cid-6agqfusc=""
                            />{" "}
                          </span>{" "}
                          <span
                            data-size="default"
                            data-loading="false"
                            data-direction="right"
                            className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                            data-astro-cid-2duvei3v=""
                          >
                            {" "}
                            <span
                              className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium underline"
                              data-button-label="true"
                            >
                              {" "}
                              Browse all stories{" "}
                            </span>
                            <span
                              className="relative block"
                              style={{ width: "18px", height: "18px" }}
                            >
                              {" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIcon"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                              <svg
                                fill="none"
                                fontSize="18px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="buttonIconHover"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div
            className="mobile-carousel md:hidden"
            data-mobile-carousel="horizontal-cards-accordion-1d4af3ae-2048-48d8-a88e-7110c5c8e726-mobile"
            data-theme="light"
            data-clone-count="1"
            data-animation-duration="300"
            data-autoplay-interval="0"
            data-slide-width-class="w-[85vw] max-w-[500px]"
            data-breakpoint-width="1092"
            data-disable-center-scale="true"
            data-astro-cid-dxmshzi4=""
          >
            {" "}
            <div className="overflow-hidden" data-astro-cid-dxmshzi4="">
              {" "}
              <div
                className="flex transition-transform duration-[400ms] ease-out"
                data-mobile-carousel-track=""
                data-astro-cid-dxmshzi4=""
              >
                {" "}
                <div
                  className="flex-shrink-0 transition-transform duration-[400ms] ease-out mx-4 w-[calc(100%_-_66px)] px-0 scale-[0.95]"
                  data-slide-index="0"
                  data-original-index="5"
                  data-mobile-slide=""
                  aria-roledescription="slide"
                  role="group"
                  aria-label="Slide 6"
                >
                  {" "}
                  <article className="relative flex min-h-[420px] flex-col overflow-hidden bg-brand-offblack p-4 md:p-6 rounded-small md:rounded-medium">
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center"
                      aria-hidden="true"
                    >
                      <img
                        draggable="false"
                        src="https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp)"
                        alt="Umb Customer Story"
                        className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                        sizes="calc(100vw - 66px)"
                        srcSet="https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp) 1800w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative z-10 flex h-8 w-[84px] items-center justify-center">
                      <img
                        src="https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/84x0/filters:quality(75):format(webp)"
                        alt="UMB"
                        width="84"
                        height="24"
                        className="h-6 w-auto max-w-full object-contain"
                        sizes="84px"
                        srcSet="https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="text-white text-body-m-mobile md:text-body-m font-sono font-regular">
                        {" "}
                        How UMB streamlined expenses with Perk{" "}
                      </p>
                      <a
                        data-style-type="secondary"
                        data-button-name="horizontal-cards-accordion-mobile-0"
                        data-disabled="false"
                        data-theme-type="dark"
                        data-loading="false"
                        data-focus-theme="dark"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed mt-6 w-full"
                        style={{
                          borderRadius: "26px",
                          padding: "16px 16px 16px 24px",
                          height: "48px",
                        }}
                        href="/case-studies/umb/"
                        data-astro-cid-56wynlmn="true"
                      >
                        {" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="button-loader block"
                          data-size="fullWidth"
                          aria-hidden="true"
                          data-astro-cid-6agqfusc=""
                        >
                          {" "}
                          <img
                            className="button-loader__img"
                            src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                            alt=""
                            width="75"
                            height="75"
                            data-astro-cid-6agqfusc=""
                          />{" "}
                        </span>{" "}
                        <span
                          data-size="fullWidth"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span
                            className="relative block"
                            style={{ width: "22px", height: "22px" }}
                          >
                            {" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIcon"
                            >
                              {" "}
                              <path
                                d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIconHover"
                            >
                              {" "}
                              <path
                                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </article>{" "}
                </div>
                <div
                  className="flex-shrink-0 transition-transform duration-[400ms] ease-out mx-4 w-[calc(100%_-_66px)] px-0 scale-100"
                  data-slide-index="1"
                  data-original-index="0"
                  data-mobile-slide=""
                  aria-roledescription="slide"
                  role="group"
                  aria-label="Slide 1"
                >
                  {" "}
                  <article className="relative flex min-h-[420px] flex-col overflow-hidden bg-brand-offblack p-4 md:p-6 rounded-small md:rounded-medium">
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center"
                      aria-hidden="true"
                    >
                      <img
                        draggable="false"
                        src="https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/800x0/filters:quality(75):format(webp)"
                        alt="Lush"
                        className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                        sizes="calc(100vw - 66px)"
                        srcSet="https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/800x0/filters:quality(75):format(webp) 800w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative z-10 flex h-8 w-[84px] items-center justify-center">
                      <img
                        src="https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/84x0/filters:quality(75):format(webp)"
                        alt="Lush Handmade Cosmetics"
                        width="84"
                        height="24"
                        className="h-6 w-auto max-w-full object-contain"
                        sizes="84px"
                        srcSet="https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="text-white text-body-m-mobile md:text-body-m font-sono font-regular">
                        {" "}
                        How Lush reimagined work travel with Perk{" "}
                      </p>
                      <a
                        data-style-type="secondary"
                        data-button-name="horizontal-cards-accordion-mobile-1"
                        data-disabled="false"
                        data-theme-type="dark"
                        data-loading="false"
                        data-focus-theme="dark"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed mt-6 w-full"
                        style={{
                          borderRadius: "26px",
                          padding: "16px 16px 16px 24px",
                          height: "48px",
                        }}
                        href="/case-studies/lush/"
                        data-astro-cid-56wynlmn="true"
                      >
                        {" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="button-loader block"
                          data-size="fullWidth"
                          aria-hidden="true"
                          data-astro-cid-6agqfusc=""
                        >
                          {" "}
                          <img
                            className="button-loader__img"
                            src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                            alt=""
                            width="75"
                            height="75"
                            data-astro-cid-6agqfusc=""
                          />{" "}
                        </span>{" "}
                        <span
                          data-size="fullWidth"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span
                            className="relative block"
                            style={{ width: "22px", height: "22px" }}
                          >
                            {" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIcon"
                            >
                              {" "}
                              <path
                                d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIconHover"
                            >
                              {" "}
                              <path
                                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </article>{" "}
                </div>
                <div
                  className="flex-shrink-0 transition-transform duration-[400ms] ease-out mx-4 w-[calc(100%_-_66px)] px-0 scale-[0.95]"
                  data-slide-index="2"
                  data-original-index="1"
                  data-mobile-slide=""
                  aria-roledescription="slide"
                  role="group"
                  aria-label="Slide 2"
                >
                  {" "}
                  <article className="relative flex min-h-[420px] flex-col overflow-hidden bg-brand-offblack p-4 md:p-6 rounded-small md:rounded-medium">
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center"
                      aria-hidden="true"
                    >
                      <img
                        draggable="false"
                        src="https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/1200x0/filters:quality(75):format(webp)"
                        alt="Brietling Customer"
                        className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                        sizes="calc(100vw - 66px)"
                        srcSet="https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x720/54d0f996c0/brietling-customer.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative z-10 flex h-8 w-[84px] items-center justify-center">
                      <img
                        src="https://a.storyblok.com/f/287723338557348/252x96/968743407c/breitling.png/m/84x0/filters:quality(75):format(webp)"
                        alt="Breitling"
                        width="84"
                        height="24"
                        className="h-6 w-auto max-w-full object-contain"
                        sizes="84px"
                        srcSet="https://a.storyblok.com/f/287723338557348/252x96/968743407c/breitling.png/m/252x0/filters:quality(75):format(webp) 252w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="text-white text-body-m-mobile md:text-body-m font-sono font-regular">
                        {" "}
                        We now have a single source of truth with unmatched data
                        quality for the audit trail. That gives us exactly the
                        level of transparency we need.{" "}
                      </p>
                      <a
                        data-style-type="secondary"
                        data-button-name="horizontal-cards-accordion-mobile-2"
                        data-disabled="false"
                        data-theme-type="dark"
                        data-loading="false"
                        data-focus-theme="dark"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed mt-6 w-full"
                        style={{
                          borderRadius: "26px",
                          padding: "16px 16px 16px 24px",
                          height: "48px",
                        }}
                        href="/case-studies/breitling/"
                        data-astro-cid-56wynlmn="true"
                      >
                        {" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="button-loader block"
                          data-size="fullWidth"
                          aria-hidden="true"
                          data-astro-cid-6agqfusc=""
                        >
                          {" "}
                          <img
                            className="button-loader__img"
                            src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                            alt=""
                            width="75"
                            height="75"
                            data-astro-cid-6agqfusc=""
                          />{" "}
                        </span>{" "}
                        <span
                          data-size="fullWidth"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span
                            className="relative block"
                            style={{ width: "22px", height: "22px" }}
                          >
                            {" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIcon"
                            >
                              {" "}
                              <path
                                d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIconHover"
                            >
                              {" "}
                              <path
                                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </article>{" "}
                </div>
                <div
                  className="flex-shrink-0 transition-transform duration-[400ms] ease-out mx-4 w-[calc(100%_-_66px)] px-0 scale-[0.95]"
                  data-slide-index="3"
                  data-original-index="2"
                  data-mobile-slide=""
                  aria-roledescription="slide"
                  role="group"
                  aria-label="Slide 3"
                >
                  {" "}
                  <article className="relative flex min-h-[420px] flex-col overflow-hidden bg-brand-offblack p-4 md:p-6 rounded-small md:rounded-medium">
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center"
                      aria-hidden="true"
                    >
                      <img
                        draggable="false"
                        src="https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/1200x0/filters:quality(75):format(webp)"
                        alt="Renata Jasiuniene Nord Security"
                        className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                        sizes="calc(100vw - 66px)"
                        srcSet="https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x800/6ca15a74a9/renata-jasiuniene-nord-security.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative z-10 flex h-8 w-[84px] items-center justify-center">
                      <img
                        src="https://a.storyblok.com/f/287723338557348/252x96/2799efc70b/nordsecurity.png/m/84x0/filters:quality(75):format(webp)"
                        alt="Nord Security"
                        width="84"
                        height="24"
                        className="h-6 w-auto max-w-full object-contain"
                        sizes="84px"
                        srcSet="https://a.storyblok.com/f/287723338557348/252x96/2799efc70b/nordsecurity.png/m/252x0/filters:quality(75):format(webp) 252w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="text-white text-body-m-mobile md:text-body-m font-sono font-regular">
                        {" "}
                        How Nord Security simplified, scaled, and saved on
                        travel management with Perk{" "}
                      </p>
                      <a
                        data-style-type="secondary"
                        data-button-name="horizontal-cards-accordion-mobile-3"
                        data-disabled="false"
                        data-theme-type="dark"
                        data-loading="false"
                        data-focus-theme="dark"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed mt-6 w-full"
                        style={{
                          borderRadius: "26px",
                          padding: "16px 16px 16px 24px",
                          height: "48px",
                        }}
                        href="/case-studies/nord-security/"
                        data-astro-cid-56wynlmn="true"
                      >
                        {" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="button-loader block"
                          data-size="fullWidth"
                          aria-hidden="true"
                          data-astro-cid-6agqfusc=""
                        >
                          {" "}
                          <img
                            className="button-loader__img"
                            src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                            alt=""
                            width="75"
                            height="75"
                            data-astro-cid-6agqfusc=""
                          />{" "}
                        </span>{" "}
                        <span
                          data-size="fullWidth"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span
                            className="relative block"
                            style={{ width: "22px", height: "22px" }}
                          >
                            {" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIcon"
                            >
                              {" "}
                              <path
                                d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIconHover"
                            >
                              {" "}
                              <path
                                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </article>{" "}
                </div>
                <div
                  className="flex-shrink-0 transition-transform duration-[400ms] ease-out mx-4 w-[calc(100%_-_66px)] px-0 scale-[0.95]"
                  data-slide-index="4"
                  data-original-index="3"
                  data-mobile-slide=""
                  aria-roledescription="slide"
                  role="group"
                  aria-label="Slide 4"
                >
                  {" "}
                  <article className="relative flex min-h-[420px] flex-col overflow-hidden bg-brand-offblack p-4 md:p-6 rounded-small md:rounded-medium">
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center"
                      aria-hidden="true"
                    >
                      <img
                        draggable="false"
                        src="https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/1200x0/filters:quality(75):format(webp)"
                        alt="Website Thumb Case Studies 2"
                        className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                        sizes="calc(100vw - 66px)"
                        srcSet="https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 1920w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 2560w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 3200w, https://a.storyblok.com/f/287723338557348/029766336a/website-thumb_case-studies-2.png/m/filters:quality(75):format(webp) 4000w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative z-10 flex h-8 w-[84px] items-center justify-center">
                      <img
                        src="https://a.storyblok.com/f/287723338557348/252x96/6452804731/bitpanda.png/m/84x0/filters:quality(75):format(webp)"
                        alt="Bitpanda"
                        width="84"
                        height="24"
                        className="h-6 w-auto max-w-full object-contain"
                        sizes="84px"
                        srcSet="https://a.storyblok.com/f/287723338557348/252x96/6452804731/bitpanda.png/m/252x0/filters:quality(75):format(webp) 252w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="text-white text-body-m-mobile md:text-body-m font-sono font-regular">
                        {" "}
                        How Bitpanda reduced expense management operating costs
                        by 62.4%{" "}
                      </p>
                      <a
                        data-style-type="secondary"
                        data-button-name="horizontal-cards-accordion-mobile-4"
                        data-disabled="false"
                        data-theme-type="dark"
                        data-loading="false"
                        data-focus-theme="dark"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed mt-6 w-full"
                        style={{
                          borderRadius: "26px",
                          padding: "16px 16px 16px 24px",
                          height: "48px",
                        }}
                        href="/case-studies/bitpanda/"
                        data-astro-cid-56wynlmn="true"
                      >
                        {" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="button-loader block"
                          data-size="fullWidth"
                          aria-hidden="true"
                          data-astro-cid-6agqfusc=""
                        >
                          {" "}
                          <img
                            className="button-loader__img"
                            src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                            alt=""
                            width="75"
                            height="75"
                            data-astro-cid-6agqfusc=""
                          />{" "}
                        </span>{" "}
                        <span
                          data-size="fullWidth"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span
                            className="relative block"
                            style={{ width: "22px", height: "22px" }}
                          >
                            {" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIcon"
                            >
                              {" "}
                              <path
                                d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIconHover"
                            >
                              {" "}
                              <path
                                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </article>{" "}
                </div>
                <div
                  className="flex-shrink-0 transition-transform duration-[400ms] ease-out mx-4 w-[calc(100%_-_66px)] px-0 scale-[0.95]"
                  data-slide-index="5"
                  data-original-index="4"
                  data-mobile-slide=""
                  aria-roledescription="slide"
                  role="group"
                  aria-label="Slide 5"
                >
                  {" "}
                  <article className="relative flex min-h-[420px] flex-col overflow-hidden bg-brand-offblack p-4 md:p-6 rounded-small md:rounded-medium">
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center"
                      aria-hidden="true"
                    >
                      <img
                        draggable="false"
                        src="https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/1200x0/filters:quality(75):format(webp)"
                        alt="1f Story Hero Min 1"
                        className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                        sizes="calc(100vw - 66px)"
                        srcSet="https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 1920w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 2560w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 3200w, https://a.storyblok.com/f/287723338557348/cc0c35bf04/1f_-_story_hero-min-1.png/m/filters:quality(75):format(webp) 4000w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative z-10 flex h-8 w-[84px] items-center justify-center">
                      <img
                        src="https://a.storyblok.com/f/287723338557348/168x64/120bffc124/on.png/m/84x0/filters:quality(75):format(webp)"
                        alt="On"
                        width="84"
                        height="24"
                        className="h-6 w-auto max-w-full object-contain"
                        sizes="84px"
                        srcSet="https://a.storyblok.com/f/287723338557348/168x64/120bffc124/on.png/m/168x0/filters:quality(75):format(webp) 168w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="text-white text-body-m-mobile md:text-body-m font-sono font-regular">
                        {" "}
                        How On automates 90% of their expenses with Perk{" "}
                      </p>
                      <a
                        data-style-type="secondary"
                        data-button-name="horizontal-cards-accordion-mobile-5"
                        data-disabled="false"
                        data-theme-type="dark"
                        data-loading="false"
                        data-focus-theme="dark"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed mt-6 w-full"
                        style={{
                          borderRadius: "26px",
                          padding: "16px 16px 16px 24px",
                          height: "48px",
                        }}
                        href="/case-studies/on-running/"
                        data-astro-cid-56wynlmn="true"
                      >
                        {" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="button-loader block"
                          data-size="fullWidth"
                          aria-hidden="true"
                          data-astro-cid-6agqfusc=""
                        >
                          {" "}
                          <img
                            className="button-loader__img"
                            src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                            alt=""
                            width="75"
                            height="75"
                            data-astro-cid-6agqfusc=""
                          />{" "}
                        </span>{" "}
                        <span
                          data-size="fullWidth"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span
                            className="relative block"
                            style={{ width: "22px", height: "22px" }}
                          >
                            {" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIcon"
                            >
                              {" "}
                              <path
                                d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIconHover"
                            >
                              {" "}
                              <path
                                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </article>{" "}
                </div>
                <div
                  className="flex-shrink-0 transition-transform duration-[400ms] ease-out mx-4 w-[calc(100%_-_66px)] px-0 scale-[0.95]"
                  data-slide-index="6"
                  data-original-index="5"
                  data-mobile-slide=""
                  aria-roledescription="slide"
                  role="group"
                  aria-label="Slide 6"
                >
                  {" "}
                  <article className="relative flex min-h-[420px] flex-col overflow-hidden bg-brand-offblack p-4 md:p-6 rounded-small md:rounded-medium">
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center"
                      aria-hidden="true"
                    >
                      <img
                        draggable="false"
                        src="https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp)"
                        alt="Umb Customer Story"
                        className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                        sizes="calc(100vw - 66px)"
                        srcSet="https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/1200x0/filters:quality(75):format(webp) 1200w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp) 1600w, https://a.storyblok.com/f/287723338557348/1800x1200/856f2cc3c0/umb-customer-story.png/m/filters:quality(75):format(webp) 1800w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative z-10 flex h-8 w-[84px] items-center justify-center">
                      <img
                        src="https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/84x0/filters:quality(75):format(webp)"
                        alt="UMB"
                        width="84"
                        height="24"
                        className="h-6 w-auto max-w-full object-contain"
                        sizes="84px"
                        srcSet="https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x504/66ed4621ca/umb.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="text-white text-body-m-mobile md:text-body-m font-sono font-regular">
                        {" "}
                        How UMB streamlined expenses with Perk{" "}
                      </p>
                      <a
                        data-style-type="secondary"
                        data-button-name="horizontal-cards-accordion-mobile-6"
                        data-disabled="false"
                        data-theme-type="dark"
                        data-loading="false"
                        data-focus-theme="dark"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed mt-6 w-full"
                        style={{
                          borderRadius: "26px",
                          padding: "16px 16px 16px 24px",
                          height: "48px",
                        }}
                        href="/case-studies/umb/"
                        data-astro-cid-56wynlmn="true"
                      >
                        {" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="button-loader block"
                          data-size="fullWidth"
                          aria-hidden="true"
                          data-astro-cid-6agqfusc=""
                        >
                          {" "}
                          <img
                            className="button-loader__img"
                            src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                            alt=""
                            width="75"
                            height="75"
                            data-astro-cid-6agqfusc=""
                          />{" "}
                        </span>{" "}
                        <span
                          data-size="fullWidth"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span
                            className="relative block"
                            style={{ width: "22px", height: "22px" }}
                          >
                            {" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIcon"
                            >
                              {" "}
                              <path
                                d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIconHover"
                            >
                              {" "}
                              <path
                                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </article>{" "}
                </div>
                <div
                  className="flex-shrink-0 transition-transform duration-[400ms] ease-out mx-4 w-[calc(100%_-_66px)] px-0 scale-[0.95]"
                  data-slide-index="7"
                  data-original-index="0"
                  data-mobile-slide=""
                  aria-roledescription="slide"
                  role="group"
                  aria-label="Slide 1"
                >
                  {" "}
                  <article className="relative flex min-h-[420px] flex-col overflow-hidden bg-brand-offblack p-4 md:p-6 rounded-small md:rounded-medium">
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-center"
                      aria-hidden="true"
                    >
                      <img
                        draggable="false"
                        src="https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/800x0/filters:quality(75):format(webp)"
                        alt="Lush"
                        className="absolute inset-0 h-full w-full max-w-full select-none object-cover object-center"
                        sizes="calc(100vw - 66px)"
                        srcSet="https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/800x400/8a68971cb9/lush.png/m/800x0/filters:quality(75):format(webp) 800w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                      aria-hidden="true"
                    ></div>
                    <div className="relative z-10 flex h-8 w-[84px] items-center justify-center">
                      <img
                        src="https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/84x0/filters:quality(75):format(webp)"
                        alt="Lush Handmade Cosmetics"
                        width="84"
                        height="24"
                        className="h-6 w-auto max-w-full object-contain"
                        sizes="84px"
                        srcSet="https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/320x0/filters:quality(75):format(webp) 320w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/480x0/filters:quality(75):format(webp) 480w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/640x0/filters:quality(75):format(webp) 640w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/768x0/filters:quality(75):format(webp) 768w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/960x0/filters:quality(75):format(webp) 960w, https://a.storyblok.com/f/287723338557348/1200x504/d255169ea3/lush.png/m/1200x0/filters:quality(75):format(webp) 1200w"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative z-10 mt-auto">
                      <p className="text-white text-body-m-mobile md:text-body-m font-sono font-regular">
                        {" "}
                        How Lush reimagined work travel with Perk{" "}
                      </p>
                      <a
                        data-style-type="secondary"
                        data-button-name="horizontal-cards-accordion-mobile-7"
                        data-disabled="false"
                        data-theme-type="dark"
                        data-loading="false"
                        data-focus-theme="dark"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed mt-6 w-full"
                        style={{
                          borderRadius: "26px",
                          padding: "16px 16px 16px 24px",
                          height: "48px",
                        }}
                        href="/case-studies/lush/"
                        data-astro-cid-56wynlmn="true"
                      >
                        {" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                          style={{ borderRadius: "26px" }}
                          data-astro-cid-i44k2awd="true"
                        >
                          {" "}
                        </span>{" "}
                        <span
                          className="button-loader block"
                          data-size="fullWidth"
                          aria-hidden="true"
                          data-astro-cid-6agqfusc=""
                        >
                          {" "}
                          <img
                            className="button-loader__img"
                            src="images/lottie_animation_logo_secondary.Dvtd1iCP.gif"
                            alt=""
                            width="75"
                            height="75"
                            data-astro-cid-6agqfusc=""
                          />{" "}
                        </span>{" "}
                        <span
                          data-size="fullWidth"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span
                            className="relative block"
                            style={{ width: "22px", height: "22px" }}
                          >
                            {" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIcon"
                            >
                              {" "}
                              <path
                                d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                            <svg
                              fill="none"
                              fontSize="22px"
                              overflow="hidden"
                              preserveAspectRatio="xMinYMin"
                              viewBox="0 0 24 24"
                              width="1em"
                              height="1em"
                              className="buttonIconHover"
                            >
                              {" "}
                              <path
                                d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                fill="currentColor"
                              ></path>{" "}
                            </svg>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>
                    </div>
                  </article>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div
              className="flex justify-center gap-2 mt-6"
              data-mobile-carousel-dots=""
              data-astro-cid-dxmshzi4=""
            >
              {" "}
              <button
                type="button"
                className="mobile-carousel-dot-button relative h-2 w-2 rounded-full transition-all duration-300 bg-brand-offblack"
                data-dot-index="0"
                data-focus-theme="light"
                aria-label="Go to slide 1"
                data-astro-cid-dxmshzi4=""
              ></button>
              <button
                type="button"
                className="mobile-carousel-dot-button relative h-2 w-2 rounded-full transition-all duration-300 bg-brand-offblack/30"
                data-dot-index="1"
                data-focus-theme="light"
                aria-label="Go to slide 2"
                data-astro-cid-dxmshzi4=""
              ></button>
              <button
                type="button"
                className="mobile-carousel-dot-button relative h-2 w-2 rounded-full transition-all duration-300 bg-brand-offblack/30"
                data-dot-index="2"
                data-focus-theme="light"
                aria-label="Go to slide 3"
                data-astro-cid-dxmshzi4=""
              ></button>
              <button
                type="button"
                className="mobile-carousel-dot-button relative h-2 w-2 rounded-full transition-all duration-300 bg-brand-offblack/30"
                data-dot-index="3"
                data-focus-theme="light"
                aria-label="Go to slide 4"
                data-astro-cid-dxmshzi4=""
              ></button>
              <button
                type="button"
                className="mobile-carousel-dot-button relative h-2 w-2 rounded-full transition-all duration-300 bg-brand-offblack/30"
                data-dot-index="4"
                data-focus-theme="light"
                aria-label="Go to slide 5"
                data-astro-cid-dxmshzi4=""
              ></button>
              <button
                type="button"
                className="mobile-carousel-dot-button relative h-2 w-2 rounded-full transition-all duration-300 bg-brand-offblack/30"
                data-dot-index="5"
                data-focus-theme="light"
                aria-label="Go to slide 6"
                data-astro-cid-dxmshzi4=""
              ></button>{" "}
            </div>{" "}
          </div>{" "}
          <div className="mt-6 flex justify-center">
            <a
              data-style-type="tertiary"
              data-button-name="horizontal-cards-accordion-browse-all-mobile-1d4af3ae-2048-48d8-a88e-7110c5c8e726"
              data-disabled="false"
              data-theme-type="light"
              data-loading="false"
              data-focus-theme="light"
              className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto"
              style={{ borderRadius: "26px" }}
              href="/customers/"
              data-astro-cid-56wynlmn="true"
            >
              {" "}
              <span
                className="button-loader block"
                data-size="fullWidth"
                aria-hidden="true"
                data-astro-cid-6agqfusc=""
              >
                {" "}
                <img
                  className="button-loader__img"
                  src="images/lottie_animation_logo_default.DisJTIXT.gif"
                  alt=""
                  width="75"
                  height="75"
                  data-astro-cid-6agqfusc=""
                />{" "}
              </span>{" "}
              <span
                data-size="fullWidth"
                data-loading="false"
                data-direction="right"
                className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                data-astro-cid-2duvei3v=""
              >
                {" "}
                <span
                  className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium underline"
                  data-button-label="true"
                >
                  {" "}
                  Browse all stories{" "}
                </span>
                <span
                  className="relative block"
                  style={{ width: "22px", height: "22px" }}
                >
                  {" "}
                  <svg
                    fill="none"
                    fontSize="22px"
                    overflow="hidden"
                    preserveAspectRatio="xMinYMin"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="buttonIcon"
                  >
                    {" "}
                    <path
                      d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                      fill="currentColor"
                    ></path>{" "}
                  </svg>{" "}
                  <svg
                    fill="none"
                    fontSize="22px"
                    overflow="hidden"
                    preserveAspectRatio="xMinYMin"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="buttonIconHover"
                  >
                    {" "}
                    <path
                      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                      fill="currentColor"
                    ></path>{" "}
                  </svg>{" "}
                </span>{" "}
              </span>{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
