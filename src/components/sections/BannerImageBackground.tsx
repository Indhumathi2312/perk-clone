// @ts-nocheck
import React from "react";

export function BannerImageBackground() {
  return (
    <>
      <div className="w-full relative" data-component="bannerImageBackground">
        {" "}
        <div className="mx-sm sm:mx-md md:mx-lg lg:mx-auto max-w-full lg:max-w-layout">
          {" "}
          <div
            style={{
              "--banner-bg-mobile":
                "url('https://a.storyblok.com/f/287723338557348/1176x1176/322606a666/f1_banner_image_mobile.png/m/1156x0/filters:quality(75):format(webp)')",
              "--banner-bg-desktop":
                "url('https://a.storyblok.com/f/287723338557348/3844x1358/9b787ffaee/forumula1_bg.png/m/2184x0/filters:quality(75):format(webp)')",
            }}
            className="p-6 md:p-20 relative isolate overflow-hidden flex flex-col gap-2.5 md:gap-10 items-center min-h-[300px] bg-no-repeat bg-cover bg-center bg-[image:var(--banner-bg-mobile)] md:bg-[image:var(--banner-bg-desktop)] rounded-small md:rounded-medium"
          >
            {" "}
            <div
              className="absolute inset-0 -z-10 bg-black/45"
              aria-hidden="true"
            ></div>{" "}
            <div className="flex items-center justify-center gap-2.5 rounded-full md:border md:border-white md:border-solid px-3 py-2 max-w-[360px] md:max-w-none">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 11 11"
                aria-hidden="true"
                className="hidden size-[11px] text-white md:block"
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
              <span className="text-ondark-primary text-annotation-mobile md:text-annotation font-sono uppercase text-center md:text-left">
                {" "}
                Perk · Official Partner of the Audi Revolut F1Ⓡ Team{" "}
              </span>{" "}
            </div>{" "}
            <h2 className="text-ondark-primary text-heading-xs-mobile md:text-heading-m font-sono max-w-[360px] md:max-w-none md:whitespace-pre-line text-center">
              {" "}
              The team does the real work. We handle everything they shouldn't
              have to.{" "}
            </h2>{" "}
            <div className="hidden md:flex items-center gap-2">
              {" "}
              <a
                data-style-type="primary"
                data-button-name="button-embedded-12ef2450-2a8e-49b9-961a-4e7236e3bd53"
                data-disabled="false"
                data-theme-type="light"
                data-loading="false"
                data-focus-theme="light"
                className="styled-button-with-overlay relative items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start hidden sm:inline-flex"
                style={{
                  borderRadius: "26px",
                  padding: "16px 12px 16px 16px",
                  height: "40px",
                }}
                href="/demo-request/"
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
                  className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                  data-astro-cid-2duvei3v=""
                >
                  {" "}
                  <span
                    className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                    data-button-label="true"
                  >
                    {" "}
                    Switch to Perk{" "}
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
              <a
                data-style-type="primary"
                data-button-name="button-embedded-12ef2450-2a8e-49b9-961a-4e7236e3bd53-mobile"
                data-disabled="false"
                data-theme-type="light"
                data-loading="false"
                data-focus-theme="light"
                className="styled-button-with-overlay relative items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed inline-flex sm:hidden w-full"
                style={{
                  borderRadius: "26px",
                  padding: "16px 16px 16px 24px",
                  height: "48px",
                }}
                href="/demo-request/"
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
                  className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                  data-astro-cid-2duvei3v=""
                >
                  {" "}
                  <span
                    className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                    data-button-label="true"
                  >
                    {" "}
                    Switch to Perk{" "}
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
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex justify-center md:hidden gap-2 mt-4">
            {" "}
            <a
              data-style-type="primary"
              data-button-name="button-embedded-12ef2450-2a8e-49b9-961a-4e7236e3bd53"
              data-disabled="false"
              data-theme-type="light"
              data-loading="false"
              data-focus-theme="light"
              className="styled-button-with-overlay relative items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start hidden sm:inline-flex"
              style={{
                borderRadius: "26px",
                padding: "16px 12px 16px 16px",
                height: "40px",
              }}
              href="/demo-request/"
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
                className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                data-astro-cid-2duvei3v=""
              >
                {" "}
                <span
                  className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                  data-button-label="true"
                >
                  {" "}
                  Switch to Perk{" "}
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
            <a
              data-style-type="primary"
              data-button-name="button-embedded-12ef2450-2a8e-49b9-961a-4e7236e3bd53-mobile"
              data-disabled="false"
              data-theme-type="light"
              data-loading="false"
              data-focus-theme="light"
              className="styled-button-with-overlay relative items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed inline-flex sm:hidden w-full"
              style={{
                borderRadius: "26px",
                padding: "16px 16px 16px 24px",
                height: "48px",
              }}
              href="/demo-request/"
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
                className="button-content relative z-[10] flex overflow-visible items-center justify-center h-[8px]"
                data-astro-cid-2duvei3v=""
              >
                {" "}
                <span
                  className="text-body-m-mobile md:text-body-m font-sono font-regular !font-medium"
                  data-button-label="true"
                >
                  {" "}
                  Switch to Perk{" "}
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
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
}
