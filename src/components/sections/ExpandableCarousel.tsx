"use client";
import React, { useState } from "react";
// @ts-nocheck

export function ExpandableCarousel() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  return (
    <>
      <div
        className="w-full relative"
        data-component="expandableCarousel"
        data-carousel="true"
        data-carousel-slide-count="7"
      >
        {" "}
        <div
          data-carousel-viewport=""
          className="overflow-hidden md:ml-12 max:ml-[calc((100%-1300px)/2)]"
        >
          {" "}
          <div className="flex touch-pan-y pinch-zoom -ml-5">
            {" "}
            <div
              className="w-full relative"
              data-component="expandableCarouselSlide"
              onMouseEnter={() => setExpandedIndex(0)}

              data-astro-cid-x6mcryqi="true"
            >
              {" "}
              <div
                data-carousel-slide=""
                className="pl-5 shrink-0"
                data-astro-cid-x6mcryqi=""
              >
                {" "}
                <div
                  data-expanded={expandedIndex === 0}
                  data-carousel-slide-content=""
                  className="group shrink-0 p-4 md:p-6 relative bg-brand-offwhite h-[450px] md:h-[420px] w-[min(420px,100vw-32px)] md:data-[expanded=true]:w-[860px] border-2 border-solid border-transparent transition-[width] will-change-[width,background-image] duration-700 flex flex-col overflow-hidden justify-end md:items-start rounded-small md:rounded-medium"
                  data-astro-cid-x6mcryqi=""
                >
                  {" "}
                  <div
                    className="hidden md:absolute md:top-5 md:left-5 md:z-[1] rounded-full py-2 px-3 w-fit border border-solid border-neutral-60 md:flex items-center gap-2"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11 11"
                      className="size-3 text-neutral-60"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      <path
                        d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                        fill="currentColor"
                      ></path>{" "}
                    </svg>{" "}
                    <span
                      className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      AI Policy{" "}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="flex min-h-0 flex-1 flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:hidden md:group-data-[expanded=true]:flex md:flex-none md:items-end md:w-[460px] md:h-full md:pt-6"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <div
                      className="shrink-0 rounded-full border border-solid border-neutral-60 py-2 px-3 w-fit flex items-center gap-2 md:hidden"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        className="size-3 text-neutral-60"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        <path
                          d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                          fill="currentColor"
                        ></path>{" "}
                      </svg>{" "}
                      <span
                        className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        AI Policy{" "}
                      </span>{" "}
                    </div>{" "}
                    <video
                      data-carousel-video=""
                      data-video-src="https://a.storyblok.com/f/287723338557348/x/90249160d0/01_rules_approved.mp4"
                      className="min-h-0 md:max-h-none aspect-[860/840] flex-1 rounded-small md:rounded-none md:rounded-tl-medium opacity-0 group-data-[expanded=true]:opacity-100 transition-opacity duration-700"
                      preload="none"
                      muted
                      playsInline
                      aria-hidden="true"
                      data-astro-cid-x6mcryqi=""
                    ></video>{" "}
                  </div>{" "}
                  <div
                    className="flex shrink-0 flex-col md:max-w-[320px] mt-4 md:mt-0 md:z-[1]"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <h4
                      className="text-primary text-heading-xs-mobile md:text-heading-xs font-sono whitespace-pre-line"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Rules that police themselves{" "}
                    </h4>{" "}
                    <p
                      className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular md:hidden md:group-data-[expanded=true]:block mt-2"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Our AI reads your policies and applies them everywhere,
                      automatically — so the rules enforce themselves and
                      exceptions never slip through.{" "}
                    </p>{" "}
                    <div
                      className="mt-6 flex items-center gap-2 md:hidden md:group-data-[expanded=true]:flex"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <a
                        data-style-type="tertiary"
                        data-button-name="expandable-carousel-slide-82409f39-68b1-4950-88e9-65a908e2d5bc-0"
                        data-disabled="false"
                        data-theme-type="light"
                        data-loading="false"
                        data-focus-theme="light"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                        style={{ borderRadius: "26px" }}
                        href="/spend-solutions/artificial-intelligence/"
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
                          data-size="responsive"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-xs font-sono font-medium underline"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            {" "}
                            <span className="buttonIcon">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                            <span className="buttonIconHover">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div
              className="w-full relative"
              data-component="expandableCarouselSlide"
              onMouseEnter={() => setExpandedIndex(1)}

              data-astro-cid-x6mcryqi="true"
            >
              {" "}
              <div
                data-carousel-slide=""
                className="pl-5 shrink-0"
                data-astro-cid-x6mcryqi=""
              >
                {" "}
                <div
                  data-expanded={expandedIndex === 1}
                  data-carousel-slide-content=""
                  className="group shrink-0 p-4 md:p-6 relative bg-brand-offwhite h-[450px] md:h-[420px] w-[min(420px,100vw-32px)] md:data-[expanded=true]:w-[860px] border-2 border-solid border-transparent transition-[width] will-change-[width,background-image] duration-700 flex flex-col overflow-hidden justify-end md:items-start rounded-small md:rounded-medium"
                  data-astro-cid-x6mcryqi=""
                >
                  {" "}
                  <div
                    className="hidden md:absolute md:top-5 md:left-5 md:z-[1] rounded-full py-2 px-3 w-fit border border-solid border-neutral-60 md:flex items-center gap-2"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11 11"
                      className="size-3 text-neutral-60"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      <path
                        d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                        fill="currentColor"
                      ></path>{" "}
                    </svg>{" "}
                    <span
                      className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Personalization{" "}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="flex min-h-0 flex-1 flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:hidden md:group-data-[expanded=true]:flex md:flex-none md:items-end md:w-[460px] md:h-full md:pt-6"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <div
                      className="shrink-0 rounded-full border border-solid border-neutral-60 py-2 px-3 w-fit flex items-center gap-2 md:hidden"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        className="size-3 text-neutral-60"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        <path
                          d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                          fill="currentColor"
                        ></path>{" "}
                      </svg>{" "}
                      <span
                        className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        Personalization{" "}
                      </span>{" "}
                    </div>{" "}
                    <video
                      data-carousel-video=""
                      data-video-src="https://a.storyblok.com/f/287723338557348/x/5aba3d72e9/02_already_knows.mp4"
                      className="min-h-0 md:max-h-none aspect-[860/840] flex-1 rounded-small md:rounded-none md:rounded-tl-medium opacity-0 group-data-[expanded=true]:opacity-100 transition-opacity duration-700"
                      preload="none"
                      muted
                      playsInline
                      aria-hidden="true"
                      data-astro-cid-x6mcryqi=""
                    ></video>{" "}
                  </div>{" "}
                  <div
                    className="flex shrink-0 flex-col md:max-w-[320px] mt-4 md:mt-0 md:z-[1]"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <h4
                      className="text-primary text-heading-xs-mobile md:text-heading-xs font-sono whitespace-pre-line"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Already knows, already handled{" "}
                    </h4>{" "}
                    <p
                      className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular md:hidden md:group-data-[expanded=true]:block mt-2"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Window seat or aisle? Loyalty tier? Visa required? Perk
                      has the answers before you even think to ask the
                      questions.{" "}
                    </p>{" "}
                    <div
                      className="mt-6 flex items-center gap-2 md:hidden md:group-data-[expanded=true]:flex"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <a
                        data-style-type="tertiary"
                        data-button-name="expandable-carousel-slide-bb669292-c49b-4bd8-aedd-ef154f1b51fe-0"
                        data-disabled="false"
                        data-theme-type="light"
                        data-loading="false"
                        data-focus-theme="light"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                        style={{ borderRadius: "26px" }}
                        href="/travel-solutions/persona-traveler/"
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
                          data-size="responsive"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-xs font-sono font-medium underline"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            {" "}
                            <span className="buttonIcon">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                            <span className="buttonIconHover">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div
              className="w-full relative"
              data-component="expandableCarouselSlide"
              onMouseEnter={() => setExpandedIndex(2)}

              data-astro-cid-x6mcryqi="true"
            >
              {" "}
              <div
                data-carousel-slide=""
                className="pl-5 shrink-0"
                data-astro-cid-x6mcryqi=""
              >
                {" "}
                <div
                  data-expanded={expandedIndex === 2}
                  data-carousel-slide-content=""
                  className="group shrink-0 p-4 md:p-6 relative bg-brand-offwhite h-[450px] md:h-[420px] w-[min(420px,100vw-32px)] md:data-[expanded=true]:w-[860px] border-2 border-solid border-transparent transition-[width] will-change-[width,background-image] duration-700 flex flex-col overflow-hidden justify-end md:items-start rounded-small md:rounded-medium"
                  data-astro-cid-x6mcryqi=""
                >
                  {" "}
                  <div
                    className="hidden md:absolute md:top-5 md:left-5 md:z-[1] rounded-full py-2 px-3 w-fit border border-solid border-neutral-60 md:flex items-center gap-2"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11 11"
                      className="size-3 text-neutral-60"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      <path
                        d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                        fill="currentColor"
                      ></path>{" "}
                    </svg>{" "}
                    <span
                      className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Transaction matching{" "}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="flex min-h-0 flex-1 flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:hidden md:group-data-[expanded=true]:flex md:flex-none md:items-end md:w-[460px] md:h-full md:pt-6"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <div
                      className="shrink-0 rounded-full border border-solid border-neutral-60 py-2 px-3 w-fit flex items-center gap-2 md:hidden"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        className="size-3 text-neutral-60"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        <path
                          d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                          fill="currentColor"
                        ></path>{" "}
                      </svg>{" "}
                      <span
                        className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        Transaction matching{" "}
                      </span>{" "}
                    </div>{" "}
                    <video
                      data-carousel-video=""
                      data-video-src="https://a.storyblok.com/f/287723338557348/x/4f1fb706cc/03_tap_to_pay.mp4"
                      className="min-h-0 md:max-h-none aspect-[860/840] flex-1 rounded-small md:rounded-none md:rounded-tl-medium opacity-0 group-data-[expanded=true]:opacity-100 transition-opacity duration-700"
                      preload="none"
                      muted
                      playsInline
                      aria-hidden="true"
                      data-astro-cid-x6mcryqi=""
                    ></video>{" "}
                  </div>{" "}
                  <div
                    className="flex shrink-0 flex-col md:max-w-[320px] mt-4 md:mt-0 md:z-[1]"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <h4
                      className="text-primary text-heading-xs-mobile md:text-heading-xs font-sono whitespace-pre-line"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Every transaction, exactly where it belongs{" "}
                    </h4>{" "}
                    <p
                      className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular md:hidden md:group-data-[expanded=true]:block mt-2"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Receipts matched, transactions coded, and your ERP updated
                      in real time. Month-end has never been easier.{" "}
                    </p>{" "}
                    <div
                      className="mt-6 flex items-center gap-2 md:hidden md:group-data-[expanded=true]:flex"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <a
                        data-style-type="tertiary"
                        data-button-name="expandable-carousel-slide-b3f90d3b-7dc3-479f-9e21-96667c21d1e3-0"
                        data-disabled="false"
                        data-theme-type="light"
                        data-loading="false"
                        data-focus-theme="light"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                        style={{ borderRadius: "26px" }}
                        href="/spend-solutions/expense-processing/"
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
                          data-size="responsive"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-xs font-sono font-medium underline"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            {" "}
                            <span className="buttonIcon">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                            <span className="buttonIconHover">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div
              className="w-full relative"
              data-component="expandableCarouselSlide"
              onMouseEnter={() => setExpandedIndex(3)}

              data-astro-cid-x6mcryqi="true"
            >
              {" "}
              <div
                data-carousel-slide=""
                className="pl-5 shrink-0"
                data-astro-cid-x6mcryqi=""
              >
                {" "}
                <div
                  data-expanded={expandedIndex === 3}
                  data-carousel-slide-content=""
                  className="group shrink-0 p-4 md:p-6 relative bg-brand-offwhite h-[450px] md:h-[420px] w-[min(420px,100vw-32px)] md:data-[expanded=true]:w-[860px] border-2 border-solid border-transparent transition-[width] will-change-[width,background-image] duration-700 flex flex-col overflow-hidden justify-end md:items-start rounded-small md:rounded-medium"
                  data-astro-cid-x6mcryqi=""
                >
                  {" "}
                  <div
                    className="hidden md:absolute md:top-5 md:left-5 md:z-[1] rounded-full py-2 px-3 w-fit border border-solid border-neutral-60 md:flex items-center gap-2"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11 11"
                      className="size-3 text-neutral-60"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      <path
                        d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                        fill="currentColor"
                      ></path>{" "}
                    </svg>{" "}
                    <span
                      className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Recoverable taxes{" "}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="flex min-h-0 flex-1 flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:hidden md:group-data-[expanded=true]:flex md:flex-none md:items-end md:w-[460px] md:h-full md:pt-6"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <div
                      className="shrink-0 rounded-full border border-solid border-neutral-60 py-2 px-3 w-fit flex items-center gap-2 md:hidden"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        className="size-3 text-neutral-60"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        <path
                          d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                          fill="currentColor"
                        ></path>{" "}
                      </svg>{" "}
                      <span
                        className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        Recoverable taxes{" "}
                      </span>{" "}
                    </div>{" "}
                    <video
                      data-carousel-video=""
                      data-video-src="https://a.storyblok.com/f/287723338557348/x/2e7e49ecb0/04_reclaim.mp4"
                      className="min-h-0 md:max-h-none aspect-[860/840] flex-1 rounded-small md:rounded-none md:rounded-tl-medium opacity-0 group-data-[expanded=true]:opacity-100 transition-opacity duration-700"
                      preload="none"
                      muted
                      playsInline
                      aria-hidden="true"
                      data-astro-cid-x6mcryqi=""
                    ></video>{" "}
                  </div>{" "}
                  <div
                    className="flex shrink-0 flex-col md:max-w-[320px] mt-4 md:mt-0 md:z-[1]"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <h4
                      className="text-primary text-heading-xs-mobile md:text-heading-xs font-sono whitespace-pre-line"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Reclaim everything that’s yours{" "}
                    </h4>{" "}
                    <p
                      className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular md:hidden md:group-data-[expanded=true]:block mt-2"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Perk tracks every recoverable tax as your teams cross
                      borders and tells you exactly what to claim. No chasing,
                      no missed reclaims.{" "}
                    </p>{" "}
                    <div
                      className="mt-6 flex items-center gap-2 md:hidden md:group-data-[expanded=true]:flex"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <a
                        data-style-type="tertiary"
                        data-button-name="expandable-carousel-slide-4e1fa13c-95eb-4644-b432-57ef957a2783-0"
                        data-disabled="false"
                        data-theme-type="light"
                        data-loading="false"
                        data-focus-theme="light"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                        style={{ borderRadius: "26px" }}
                        href="/travel-solutions/vat/"
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
                          data-size="responsive"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-xs font-sono font-medium underline"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            {" "}
                            <span className="buttonIcon">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                            <span className="buttonIconHover">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div
              className="w-full relative"
              data-component="expandableCarouselSlide"
              onMouseEnter={() => setExpandedIndex(4)}

              data-astro-cid-x6mcryqi="true"
            >
              {" "}
              <div
                data-carousel-slide=""
                className="pl-5 shrink-0"
                data-astro-cid-x6mcryqi=""
              >
                {" "}
                <div
                  data-expanded={expandedIndex === 4}
                  data-carousel-slide-content=""
                  className="group shrink-0 p-4 md:p-6 relative bg-brand-offwhite h-[450px] md:h-[420px] w-[min(420px,100vw-32px)] md:data-[expanded=true]:w-[860px] border-2 border-solid border-transparent transition-[width] will-change-[width,background-image] duration-700 flex flex-col overflow-hidden justify-end md:items-start rounded-small md:rounded-medium"
                  data-astro-cid-x6mcryqi=""
                >
                  {" "}
                  <div
                    className="hidden md:absolute md:top-5 md:left-5 md:z-[1] rounded-full py-2 px-3 w-fit border border-solid border-neutral-60 md:flex items-center gap-2"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11 11"
                      className="size-3 text-neutral-60"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      <path
                        d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                        fill="currentColor"
                      ></path>{" "}
                    </svg>{" "}
                    <span
                      className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Disruption alerts and rebooking{" "}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="flex min-h-0 flex-1 flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:hidden md:group-data-[expanded=true]:flex md:flex-none md:items-end md:w-[460px] md:h-full md:pt-6"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <div
                      className="shrink-0 rounded-full border border-solid border-neutral-60 py-2 px-3 w-fit flex items-center gap-2 md:hidden"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        className="size-3 text-neutral-60"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        <path
                          d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                          fill="currentColor"
                        ></path>{" "}
                      </svg>{" "}
                      <span
                        className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        Disruption alerts and rebooking{" "}
                      </span>{" "}
                    </div>{" "}
                    <video
                      data-carousel-video=""
                      data-video-src="https://a.storyblok.com/f/287723338557348/x/d6cae5838a/06_disruption.mp4"
                      className="min-h-0 md:max-h-none aspect-[860/840] flex-1 rounded-small md:rounded-none md:rounded-tl-medium opacity-0 group-data-[expanded=true]:opacity-100 transition-opacity duration-700"
                      preload="none"
                      muted
                      playsInline
                      aria-hidden="true"
                      data-astro-cid-x6mcryqi=""
                    ></video>{" "}
                  </div>{" "}
                  <div
                    className="flex shrink-0 flex-col md:max-w-[320px] mt-4 md:mt-0 md:z-[1]"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <h4
                      className="text-primary text-heading-xs-mobile md:text-heading-xs font-sono whitespace-pre-line"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Disruption? What disruption?{" "}
                    </h4>{" "}
                    <p
                      className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular md:hidden md:group-data-[expanded=true]:block mt-2"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      When something goes wrong, Perk already knows. Travelers
                      are automatically re-booked or re-routed. You just get the
                      notification that it's handled.{" "}
                    </p>{" "}
                    <div
                      className="mt-6 flex items-center gap-2 md:hidden md:group-data-[expanded=true]:flex"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <a
                        data-style-type="tertiary"
                        data-button-name="expandable-carousel-slide-7cc23844-bf46-4dc5-9100-6a671be7849b-0"
                        data-disabled="false"
                        data-theme-type="light"
                        data-loading="false"
                        data-focus-theme="light"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                        style={{ borderRadius: "26px" }}
                        href="/travel-solutions/corporate-travel-assistance/"
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
                          data-size="responsive"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-xs font-sono font-medium underline"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            {" "}
                            <span className="buttonIcon">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                            <span className="buttonIconHover">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div
              className="w-full relative"
              data-component="expandableCarouselSlide"
              onMouseEnter={() => setExpandedIndex(5)}

              data-astro-cid-x6mcryqi="true"
            >
              {" "}
              <div
                data-carousel-slide=""
                className="pl-5 shrink-0"
                data-astro-cid-x6mcryqi=""
              >
                {" "}
                <div
                  data-expanded={expandedIndex === 5}
                  data-carousel-slide-content=""
                  className="group shrink-0 p-4 md:p-6 relative bg-brand-offwhite h-[450px] md:h-[420px] w-[min(420px,100vw-32px)] md:data-[expanded=true]:w-[860px] border-2 border-solid border-transparent transition-[width] will-change-[width,background-image] duration-700 flex flex-col overflow-hidden justify-end md:items-start rounded-small md:rounded-medium"
                  data-astro-cid-x6mcryqi=""
                >
                  {" "}
                  <div
                    className="hidden md:absolute md:top-5 md:left-5 md:z-[1] rounded-full py-2 px-3 w-fit border border-solid border-neutral-60 md:flex items-center gap-2"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11 11"
                      className="size-3 text-neutral-60"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      <path
                        d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                        fill="currentColor"
                      ></path>{" "}
                    </svg>{" "}
                    <span
                      className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Approval context{" "}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="flex min-h-0 flex-1 flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:hidden md:group-data-[expanded=true]:flex md:flex-none md:items-end md:w-[460px] md:h-full md:pt-6"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <div
                      className="shrink-0 rounded-full border border-solid border-neutral-60 py-2 px-3 w-fit flex items-center gap-2 md:hidden"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        className="size-3 text-neutral-60"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        <path
                          d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                          fill="currentColor"
                        ></path>{" "}
                      </svg>{" "}
                      <span
                        className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        Approval context{" "}
                      </span>{" "}
                    </div>{" "}
                    <video
                      data-carousel-video=""
                      data-video-src="https://a.storyblok.com/f/287723338557348/x/3cc71f9aa3/05_approval.mp4"
                      className="min-h-0 md:max-h-none aspect-[860/840] flex-1 rounded-small md:rounded-none md:rounded-tl-medium opacity-0 group-data-[expanded=true]:opacity-100 transition-opacity duration-700"
                      preload="none"
                      muted
                      playsInline
                      aria-hidden="true"
                      data-astro-cid-x6mcryqi=""
                    ></video>{" "}
                  </div>{" "}
                  <div
                    className="flex shrink-0 flex-col md:max-w-[320px] mt-4 md:mt-0 md:z-[1]"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <h4
                      className="text-primary text-heading-xs-mobile md:text-heading-xs font-sono whitespace-pre-line"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Approvals without the chasing{" "}
                    </h4>{" "}
                    <p
                      className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular md:hidden md:group-data-[expanded=true]:block mt-2"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Every approval request comes with full context including
                      trip, policy, cost, and reason. There’s no chasing, and no
                      back and forth to get the full picture.{" "}
                    </p>{" "}
                    <div
                      className="mt-6 flex items-center gap-2 md:hidden md:group-data-[expanded=true]:flex"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <a
                        data-style-type="tertiary"
                        data-button-name="expandable-carousel-slide-b505f964-802c-4a35-b3a3-61efe83d423f-0"
                        data-disabled="false"
                        data-theme-type="light"
                        data-loading="false"
                        data-focus-theme="light"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                        style={{ borderRadius: "26px" }}
                        href="/travel-solutions/policies-approvals/"
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
                          data-size="responsive"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-xs font-sono font-medium underline"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            {" "}
                            <span className="buttonIcon">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                            <span className="buttonIconHover">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div
              className="w-full relative"
              data-component="expandableCarouselSlide"
              onMouseEnter={() => setExpandedIndex(6)}

              data-astro-cid-x6mcryqi="true"
            >
              {" "}
              <div
                data-carousel-slide=""
                className="pl-5 shrink-0"
                data-astro-cid-x6mcryqi=""
              >
                {" "}
                <div
                  data-expanded={expandedIndex === 6}
                  data-carousel-slide-content=""
                  className="group shrink-0 p-4 md:p-6 relative bg-brand-offwhite h-[450px] md:h-[420px] w-[min(420px,100vw-32px)] md:data-[expanded=true]:w-[860px] border-2 border-solid border-transparent transition-[width] will-change-[width,background-image] duration-700 flex flex-col overflow-hidden justify-end md:items-start rounded-small md:rounded-medium"
                  data-astro-cid-x6mcryqi=""
                >
                  {" "}
                  <div
                    className="hidden md:absolute md:top-5 md:left-5 md:z-[1] rounded-full py-2 px-3 w-fit border border-solid border-neutral-60 md:flex items-center gap-2"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 11 11"
                      className="size-3 text-neutral-60"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      <path
                        d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                        fill="currentColor"
                      ></path>{" "}
                      <path
                        d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                        fill="currentColor"
                      ></path>{" "}
                    </svg>{" "}
                    <span
                      className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      MCP{" "}
                    </span>{" "}
                  </div>{" "}
                  <div
                    className="flex min-h-0 flex-1 flex-col gap-4 md:absolute md:right-0 md:bottom-0 md:hidden md:group-data-[expanded=true]:flex md:flex-none md:items-end md:w-[460px] md:h-full md:pt-6"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <div
                      className="shrink-0 rounded-full border border-solid border-neutral-60 py-2 px-3 w-fit flex items-center gap-2 md:hidden"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        className="size-3 text-neutral-60"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        <path
                          d="M4.97039 0.102666C4.97841 0.0438499 5.02863 0 5.08799 0H5.91201C5.97137 0 6.02161 0.0438498 6.02963 0.102666L6.50949 3.62164C6.52029 3.70088 6.45123 3.76791 6.37235 3.75477L5.51952 3.61263C5.50659 3.61047 5.49341 3.61047 5.48049 3.61263L4.62765 3.75477C4.54877 3.76791 4.47972 3.70088 4.49052 3.62164L4.97039 0.102666Z"
                          fill="currentColor"
                        ></path>{" "}
                        <path
                          d="M10.8912 6.36844C10.9527 6.36332 11 6.31189 11 6.25015V5.43622C11 5.37496 10.9534 5.32375 10.8924 5.31803L5.51109 4.81354C5.50372 4.81285 5.49629 4.81285 5.48892 4.81354L0.107626 5.31803C0.0466273 5.32375 0 5.37496 0 5.43622V6.25015C0 6.31189 0.0473388 6.36332 0.108863 6.36844L4.08167 6.69951C4.10965 6.70184 4.13589 6.71402 4.15575 6.73387L4.44021 7.01833C4.45872 7.03684 4.47059 7.06095 4.47397 7.08691L4.9709 10.8966C4.97861 10.9558 5.02898 11 5.0886 11H5.91141C5.97103 11 6.02139 10.9558 6.0291 10.8966L6.52603 7.08691C6.52941 7.06095 6.54128 7.03684 6.55979 7.01833L6.84425 6.73387C6.86411 6.71402 6.89036 6.70184 6.91834 6.69951L10.8912 6.36844Z"
                          fill="currentColor"
                        ></path>{" "}
                      </svg>{" "}
                      <span
                        className="text-secondary text-annotation-mobile md:text-annotation font-sono uppercase"
                        data-astro-cid-x6mcryqi="true"
                      >
                        {" "}
                        MCP{" "}
                      </span>{" "}
                    </div>{" "}
                    <video
                      data-carousel-video=""
                      data-video-src="https://a.storyblok.com/f/287723338557348/x/b19d380f46/07_one_less_tab.mp4"
                      className="min-h-0 md:max-h-none aspect-[860/840] flex-1 rounded-small md:rounded-none md:rounded-tl-medium opacity-0 group-data-[expanded=true]:opacity-100 transition-opacity duration-700"
                      preload="none"
                      muted
                      playsInline
                      aria-hidden="true"
                      data-astro-cid-x6mcryqi=""
                    ></video>{" "}
                  </div>{" "}
                  <div
                    className="flex shrink-0 flex-col md:max-w-[320px] mt-4 md:mt-0 md:z-[1]"
                    data-astro-cid-x6mcryqi=""
                  >
                    {" "}
                    <h4
                      className="text-primary text-heading-xs-mobile md:text-heading-xs font-sono whitespace-pre-line"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      One less tab. Four times faster.{" "}
                    </h4>{" "}
                    <p
                      className="text-secondary text-body-s-mobile md:text-body-s font-sono font-regular md:hidden md:group-data-[expanded=true]:block mt-2"
                      data-astro-cid-x6mcryqi="true"
                    >
                      {" "}
                      Connect Perk to Claude, ChatGPT, Copilot, or Gemini. Run
                      reports, approve expenses and get trip information in the
                      AI tools you use every day.{" "}
                    </p>{" "}
                    <div
                      className="mt-6 flex items-center gap-2 md:hidden md:group-data-[expanded=true]:flex"
                      data-astro-cid-x6mcryqi=""
                    >
                      {" "}
                      <a
                        data-style-type="tertiary"
                        data-button-name="expandable-carousel-slide-acedd041-b20f-45e4-8252-eccca690c2c2-0"
                        data-disabled="false"
                        data-theme-type="light"
                        data-loading="false"
                        data-focus-theme="light"
                        className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start"
                        style={{ borderRadius: "26px" }}
                        href="/travel-solutions/mcp/"
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
                          data-size="responsive"
                          data-loading="false"
                          data-direction="right"
                          className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[18px]"
                          data-astro-cid-2duvei3v=""
                        >
                          {" "}
                          <span
                            className="text-body-m-mobile md:text-body-xs font-sono font-medium underline"
                            data-button-label="true"
                          >
                            {" "}
                            Read more{" "}
                          </span>
                          <span className="relative block w-[22px] h-[22px] md:w-[18px] md:h-[18px]">
                            {" "}
                            <span className="buttonIcon">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                            <span className="buttonIconHover">
                              {" "}
                              <svg
                                fill="none"
                                fontSize="22px"
                                overflow="hidden"
                                preserveAspectRatio="xMinYMin"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                                className="block md:hidden"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
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
                                className="hidden md:block"
                              >
                                {" "}
                                <path
                                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                                  fill="currentColor"
                                ></path>{" "}
                              </svg>{" "}
                            </span>{" "}
                          </span>{" "}
                        </span>{" "}
                      </a>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="relative flex justify-center items-center mt-6 md:mt-10 min-h-10 mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout">
          {" "}
          <div
            data-carousel-dots=""
            className="flex items-center gap-3"
          ></div>{" "}
          <div className="hidden md:flex gap-2 absolute right-0">
            {" "}
            <button
              type="button"
              className="pagination-button relative inline-flex items-center justify-center border-[1px] border-solid rounded-full transition-colors h-10 w-10 border-button-secondary bg-button-secondary text-button-secondary hover:bg-overlay-dark-alpha05 active:bg-overlay-dark-alpha10 disabled:bg-button-disabled disabled:cursor-not-allowed"
              data-focus-theme="light"
              data-carousel-prev="true"
            >
              {" "}
              <svg
                fill="none"
                color="currentColor"
                fontSize="24px"
                overflow="hidden"
                preserveAspectRatio="xMinYMin"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                {" "}
                <g clipPath="url(#caret-left-clip-c5fa4637-c2e9-40ed-822e-acb783f09109)">
                  {" "}
                  <path
                    d="M16.16 16.59L11.58 12L16.16 7.41L14.75 6L8.75 12L14.75 18L16.16 16.59Z"
                    fill="currentColor"
                  ></path>{" "}
                </g>{" "}
                <defs>
                  {" "}
                  <clipPath id="caret-left-clip-c5fa4637-c2e9-40ed-822e-acb783f09109">
                    {" "}
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.75)"
                    ></rect>{" "}
                  </clipPath>{" "}
                </defs>{" "}
              </svg>{" "}
            </button>{" "}
            <button
              type="button"
              className="pagination-button relative inline-flex items-center justify-center border-[1px] border-solid rounded-full transition-colors h-10 w-10 border-button-secondary bg-button-secondary text-button-secondary hover:bg-overlay-dark-alpha05 active:bg-overlay-dark-alpha10 disabled:bg-button-disabled disabled:cursor-not-allowed"
              data-focus-theme="light"
              data-carousel-next="true"
            >
              {" "}
              <svg
                fill="none"
                color="currentColor"
                fontSize="24px"
                overflow="hidden"
                preserveAspectRatio="xMinYMin"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                {" "}
                <path
                  d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                  fill="currentColor"
                ></path>{" "}
              </svg>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
