// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";

export function Header() {
  const [isTop, setIsTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-full h-[80px] bg-transparent" />
      <header
        id="navigation-bar"
        className={`navigation-bar w-full flex flex-row items-center fixed top-0 left-0 z-[40] transition-colors duration-300 ${isTop ? "bg-brand-offwhite h-[80px]" : "bg-transparent h-[80px] pointer-events-none"}`}
        data-is-top={isTop.toString()}
        data-is-mobile="false"
        data-theme="light"
      >
        {" "}
        <div
          data-theme="light"
          data-is-top={isTop.toString()}
          className={`navigation-bar-content w-full rounded-medium flex flex-row items-center justify-between mx-sm sm:mx-md md:mx-lg lg:mx-auto lg:w-[1380px] z-[32] transition-all duration-300 pointer-events-auto ${isTop ? "h-full lg:!px-[40px] bg-transparent" : "h-[64px] mt-6 lg:!px-[40px] bg-brand-offwhite shadow-z1"}`}
          style={
            isTop
              ? { padding: "12px 12px 12px 32px" }
              : { padding: "12px 12px 12px 32px" }
          }
        >
          {" "}
          <div className="items-center justify-between w-full hidden lg:flex">
            <div className="flex items-center gap-10">
              <div className="flex-shrink-0">
                <a
                  href="/"
                  aria-label="Perk home"
                  data-focus-theme="light"
                  className="desktop-logo-link -m-1 inline-flex p-1"
                >
                  <svg
                    data-testid="logo-perk"
                    width="78"
                    viewBox="0 0 138 71"
                    fill="#14140F"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M48.3146 28.488C39.4161 28.488 33.4059 34.8839 33.4059 44.2723C33.4059 53.6607 39.6203 59.9393 48.5772 59.9393C55.5209 59.9393 61.2685 55.5678 62.4355 49.612C62.4647 49.4066 62.3188 49.2306 62.1438 49.2306H55.9586C55.8127 49.2306 55.696 49.3186 55.6668 49.436C54.5581 52.3992 51.9615 53.9835 48.5188 53.9835C43.8216 53.9835 40.8165 50.9322 40.3205 45.8859H62.2896C62.4647 45.8859 62.5814 45.7686 62.6106 45.5926C62.6689 44.6244 62.6397 43.8029 62.5814 43.0988C62.2313 33.857 56.863 28.488 48.3146 28.488ZM40.6123 40.6343C41.5459 36.2628 44.1717 33.9744 48.2562 33.9744C52.3408 33.9744 54.9666 36.3802 55.5209 40.6343H40.6123ZM101.414 41.7785L113.113 29.7202C113.142 29.6909 113.142 29.6616 113.142 29.6322C113.142 29.5442 113.084 29.4855 112.997 29.4855H104.623C104.536 29.4855 104.448 29.5149 104.39 29.5736L92.9531 41.5145V17.75C92.9531 17.574 92.8072 17.4273 92.6321 17.4273H86.3011C86.126 17.4273 85.9801 17.574 85.9801 17.75V58.619C85.9801 58.795 86.126 58.9417 86.3011 58.9417H92.6321C92.8072 58.9417 92.9531 58.795 92.9531 58.619V47.1182H97.0668L105.499 58.8244C105.557 58.9124 105.644 58.9417 105.761 58.9417H113.522C113.638 58.9417 113.755 58.8244 113.755 58.707C113.755 58.6483 113.726 58.619 113.697 58.5603L101.414 41.7785ZM16.6884 28.488C11.9911 28.488 8.66512 31.9207 8.11078 33.4463H6.73953V29.8376C6.73953 29.6616 6.59366 29.5149 6.4186 29.5149H0.32093C0.145877 29.5149 0 29.6616 0 29.8376C0.058351 31.0112 0.116702 32.8302 0.116702 34.9426V70.6773C0.116702 70.8533 0.262579 71 0.437632 71H6.71036C6.88541 71 7.03129 70.8533 7.03129 70.6773V56.6826H8.40254C9.68626 58.7364 12.8956 59.9686 16.3966 59.9686C25.2368 59.9686 30.8677 52.9273 30.8677 44.1843C30.8677 35.4413 25.7036 28.488 16.6884 28.488ZM15.2296 53.8368C10.2114 53.8368 6.65201 49.964 6.65201 44.2136C6.65201 38.4632 10.2114 34.7079 15.2296 34.7079C20.2478 34.7079 23.6905 38.4339 23.6905 44.2136C23.6905 49.9934 20.1894 53.8368 15.2296 53.8368ZM74.1641 32.5368H72.7928L72.7636 29.8083C72.7636 29.6322 72.6178 29.4855 72.4427 29.4855H66.1408C65.9658 29.4855 65.8199 29.6322 65.8199 29.8083C65.8782 31.1285 65.9366 33.0062 65.9366 34.9132V58.619C65.9366 58.795 66.0825 58.9417 66.2575 58.9417H72.5886C72.7636 58.9417 72.9095 58.795 72.9095 58.619V44.3017C72.9095 38.6686 76.0313 35.5587 81.312 35.5587C81.8372 35.5587 82.3332 35.588 82.8584 35.6467C83.0334 35.676 83.2085 35.5293 83.2085 35.324V29.4562C83.2085 29.3095 83.1209 29.1921 82.9751 29.1628C82.6249 29.0748 82.0998 29.0161 81.5746 28.9868C78.307 29.0748 75.5645 29.955 74.1641 32.5368ZM121.924 0.26405C121.953 0.117355 122.099 0 122.245 0H124.433C124.579 0 124.725 0.117355 124.754 0.26405L126.038 9.71116C126.067 9.91653 125.892 10.0926 125.659 10.0632L123.383 9.68182H123.266L120.991 10.0632C120.786 10.0926 120.582 9.91653 120.611 9.71116L121.924 0.26405ZM137.708 17.0752C137.883 17.0752 138 16.9285 138 16.7525V14.5814C138 14.4054 137.883 14.288 137.708 14.2587L123.383 12.9091H123.325L108.97 14.2587C108.795 14.288 108.679 14.4054 108.679 14.5814V16.7525C108.679 16.9285 108.795 17.0459 108.97 17.0752L119.561 17.9554C119.649 17.9554 119.707 17.9847 119.765 18.0434L120.524 18.8062C120.582 18.8649 120.611 18.9236 120.611 18.9822L121.924 29.1921C121.953 29.3388 122.07 29.4562 122.245 29.4562H124.433C124.579 29.4562 124.725 29.3388 124.754 29.1921L126.067 18.9822C126.067 18.9236 126.096 18.8355 126.155 18.8062L126.913 18.0434C126.972 17.9847 127.03 17.9554 127.118 17.9554L137.708 17.0752Z"
                    fill="#14140F"
                  />
                </svg>
              </a>
            </div>
            <nav className="desktop-menu-list flex items-center gap-8">
              {" "}
              <button
                type="button"
                className="desktop-menu-item h-full flex items-center cursor-pointer bg-transparent border-0 p-0"
                data-menu-item-id="09ca69d7-2b6e-4bdf-a75f-e95c2e38755e"
                data-theme="light"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <span className="inherit text-body-xs-mobile md:text-body-xs font-sono font-regular">
                  {" "}
                  Product{" "}
                </span>{" "}
              </button>
              <button
                type="button"
                className="desktop-menu-item h-full flex items-center cursor-pointer bg-transparent border-0 p-0"
                data-menu-item-id="d15a64f5-aaf2-4b59-9427-7905f424eed0"
                data-theme="light"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <span className="inherit text-body-xs-mobile md:text-body-xs font-sono font-regular">
                  {" "}
                  Solutions{" "}
                </span>{" "}
              </button>
              <a
                href="/customers/"
                className="desktop-menu-link h-full flex items-center no-underline"
                data-theme="light"
                data-region="top_nav"
              >
                {" "}
                <span className="inherit text-body-xs-mobile md:text-body-xs font-sono font-regular">
                  {" "}
                  Customers{" "}
                </span>{" "}
              </a>
              <a
                href="/pricing/"
                className="desktop-menu-link h-full flex items-center no-underline"
                data-theme="light"
                data-region="top_nav"
              >
                {" "}
                <span className="inherit text-body-xs-mobile md:text-body-xs font-sono font-regular">
                  {" "}
                  Pricing{" "}
                </span>{" "}
              </a>
              <a
                href="/travel-solutions/marketplace/"
                className="desktop-menu-link h-full flex items-center no-underline"
                data-theme="light"
                data-region="top_nav"
              >
                {" "}
                <span className="inherit text-body-xs-mobile md:text-body-xs font-sono font-regular">
                  {" "}
                  Integrations{" "}
                </span>{" "}
              </a>
            </nav>
            </div>
            <div className="flex items-center gap-4">
              {" "}
              <div
                className="relative"
                data-language-select-icon-root="true"
                data-focus-theme="light"
              >
                {" "}
                <button
                  type="button"
                  className="flex items-center transition-colors focus-visible:rounded-xsmall text-brand-offblack hover:text-neutral-60"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  aria-label="Select language"
                  aria-controls="language-select-icon-listbox"
                  data-language-select-icon-trigger="true"
                >
                  {" "}
                  <svg
                    fill="none"
                    fontSize="16px"
                    overflow="hidden"
                    preserveAspectRatio="xMinYMin"
                    viewBox="0 0 16 16"
                    width="1em"
                    height="1em"
                    className="shrink-0"
                  >
                    {" "}
                    <path
                      d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM13.536 4.8H11.176C10.92 3.8 10.552 2.84 10.072 1.952C11.544 2.456 12.768 3.48 13.536 4.8ZM8 1.632C8.664 2.592 9.184 3.656 9.528 4.8H6.472C6.816 3.656 7.336 2.592 8 1.632ZM1.808 9.6C1.68 9.088 1.6 8.552 1.6 8C1.6 7.448 1.68 6.912 1.808 6.4H4.512C4.448 6.928 4.4 7.456 4.4 8C4.4 8.544 4.448 9.072 4.512 9.6H1.808ZM2.464 11.2H4.824C5.08 12.2 5.448 13.16 5.928 14.048C4.456 13.544 3.232 12.528 2.464 11.2ZM4.824 4.8H2.464C3.232 3.472 4.456 2.456 5.928 1.952C5.448 2.84 5.08 3.8 4.824 4.8ZM8 14.368C7.336 13.408 6.816 12.344 6.472 11.2H9.528C9.184 12.344 8.664 13.408 8 14.368ZM9.872 9.6H6.128C6.056 9.072 6 8.544 6 8C6 7.456 6.056 6.92 6.128 6.4H9.872C9.944 6.92 10 7.456 10 8C10 8.544 9.944 9.072 9.872 9.6ZM10.072 14.048C10.552 13.16 10.92 12.2 11.176 11.2H13.536C12.768 12.52 11.544 13.544 10.072 14.048ZM11.488 9.6C11.552 9.072 11.6 8.544 11.6 8C11.6 7.456 11.552 6.928 11.488 6.4H14.192C14.32 6.912 14.4 7.448 14.4 8C14.4 8.552 14.32 9.088 14.192 9.6H11.488Z"
                      fill="currentColor"
                    />{" "}
                  </svg>{" "}
                  <svg
                    fill="none"
                    fontSize="24px"
                    overflow="hidden"
                    preserveAspectRatio="xMinYMin"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    className="shrink-0 transition-transform"
                    data-language-select-icon-caret="true"
                  >
                    {" "}
                    <path
                      d="M16.59 8.20163L12 12.8971L7.41 8.20163L6 9.64717L12 15.7984L18 9.64717L16.59 8.20163Z"
                      fill="currentColor"
                    />{" "}
                  </svg>{" "}
                </button>{" "}
                <div
                  className="absolute left-1/2 top-full mt-3 hidden w-[200px] -translate-x-1/2 rounded-xsmall border-2 border-solid p-2 shadow-dropdown bg-default border-interactive-selected z-[40]"
                  role="listbox"
                  id="language-select-icon-listbox"
                  aria-label="Select language"
                  data-select-menu="true"
                  data-focus-theme="light"
                >
                  {" "}
                  <ul className="max-h-[450px] overflow-auto">
                    {" "}
                    <li>
                      {" "}
                      <a
                        href="/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/"
                        data-label="English"
                        data-selected="true"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {" "}
                              <circle
                                cx="7.5"
                                cy="7.5"
                                r="7.5"
                                fill="#144FCC"
                              ></circle>{" "}
                              <path
                                d="M8.50133 0.0818696C9.19616 0.163613 9.85011 0.327101 10.4632 0.613205C12.0163 1.30803 13.2425 2.3707 14.0599 3.84209C14.6321 4.82301 14.9182 5.88568 15 7.0301C15.0817 8.46062 14.7956 9.76852 14.1417 11.0355C13.5286 12.18 12.6703 13.12 11.5667 13.8148C10.5858 14.4688 9.48226 14.8366 8.29697 14.9593C6.9482 15.0819 5.68117 14.8775 4.45501 14.3462C3.63757 13.9783 2.86101 13.4879 2.24793 12.8339C1.14439 11.7304 0.408692 10.3816 0.16346 8.82846C-0.204387 6.58051 0.326948 4.53691 1.75747 2.73855C2.37054 1.96198 3.14711 1.30803 4.04629 0.858436C4.16891 0.899308 4.20978 0.981052 4.25065 1.0628C4.49589 1.635 4.70025 2.24808 4.65937 2.90203C4.6185 3.3925 4.78199 3.80122 4.98635 4.25081C5.19071 4.65953 5.39507 5.10912 5.6403 5.51784C5.76292 5.68132 5.88553 5.84481 6.00815 6.0083C6.29425 6.37615 6.70297 6.53964 7.15256 6.62138C7.35692 6.66225 7.56128 6.70312 7.76564 6.74399C8.09262 6.82574 8.29698 7.0301 8.33785 7.35707C8.37872 7.64318 8.41959 7.88841 8.66482 8.09277C8.78744 8.17451 8.78744 8.338 8.74657 8.46062C8.66482 8.70585 8.62395 8.95108 8.62395 9.23718C8.66482 9.68677 8.82831 10.0546 9.11441 10.3816C9.15529 10.4225 9.19616 10.4633 9.23703 10.5042C9.64575 10.8312 9.68662 11.2808 9.56401 11.7712C9.48226 12.1391 9.2779 12.4252 9.15529 12.7522C9.07354 12.8748 8.9918 13.0383 9.11441 13.2018C9.23703 13.3244 9.40052 13.2835 9.56401 13.2018C10.1771 12.9157 10.7084 12.5478 11.1171 11.9756C11.4032 11.6078 11.6485 11.2399 11.9754 10.9538C12.0163 10.9129 12.0981 10.8312 12.0981 10.7494C12.2207 10.4225 12.3433 10.0955 12.425 9.72765C12.4659 9.48241 12.425 9.27805 12.1798 9.15544C11.9346 8.99195 11.812 8.74672 11.6485 8.54236C11.5259 8.338 11.3624 8.09277 11.1989 7.88841C11.1171 7.76579 10.9945 7.68405 10.8719 7.68405C10.6675 7.64318 10.4632 7.56143 10.2588 7.47969C10.0953 7.39795 9.93185 7.39795 9.72749 7.47969C9.40052 7.68405 9.11441 7.60231 8.95093 7.23446C8.86918 7.07097 8.78744 6.94835 8.62395 6.90748C8.50134 6.86661 8.41959 6.74399 8.41959 6.62138C8.41959 6.45789 8.33785 6.37615 8.17436 6.41702C7.92913 6.41702 7.52041 6.21266 7.39779 5.96743C7.23431 5.68132 7.39779 5.35435 7.72477 5.31348C7.92913 5.2726 8.13349 5.23173 8.33785 5.19086C8.62395 5.10912 8.86918 5.27261 8.95093 5.55871C8.95093 5.59958 8.95093 5.64045 8.9918 5.68132C8.9918 5.7222 9.03267 5.80394 9.11441 5.80394C9.19616 5.80394 9.19616 5.7222 9.23703 5.68132C9.23703 5.64045 9.23703 5.64045 9.23703 5.59958C9.15529 5.31348 9.2779 5.10912 9.48226 4.90476C10.0136 4.25081 10.6675 3.80122 11.4441 3.55598C11.7711 3.43337 11.812 3.35162 11.7302 2.98378C11.6485 2.69767 11.5667 2.3707 11.4032 2.08459C11.2806 1.83936 11.158 1.67588 10.9128 1.59413C10.7902 1.55326 10.7084 1.47152 10.6675 1.3489C10.6267 1.26716 10.5858 1.14454 10.5041 1.0628C10.4223 0.94018 10.3406 0.899308 10.218 0.858436C10.0545 0.817564 9.89098 0.899308 9.85011 1.0628C9.80924 1.18541 9.80924 1.26716 9.80924 1.38977C9.80924 1.47152 9.80924 1.55326 9.80924 1.635C9.76836 2.00285 9.56401 2.12547 9.23703 1.92111C8.86918 1.635 8.54221 1.30803 8.29697 0.899308C8.17436 0.654077 8.21523 0.449717 8.37872 0.286229C8.37872 0.0818696 8.41959 0.0409976 8.50133 0.0818696Z"
                                fill="#144FCC"
                              />{" "}
                              <path
                                d="M8.50134 0.0818087C8.25611 0.32704 8.1335 0.408784 8.33786 0.694888C8.58309 1.10361 8.91006 1.43058 9.27791 1.67581C9.48227 1.79843 9.60489 1.75756 9.64576 1.51233C9.68663 1.30797 9.68663 1.06274 9.68663 0.858375C9.7275 0.613144 9.93186 0.490528 10.1771 0.572272C10.4223 0.654016 10.5449 0.817504 10.6267 1.02186C10.7084 1.18535 10.831 1.30797 10.9945 1.38971C11.1989 1.47145 11.3215 1.67581 11.4033 1.8393C11.5667 2.16628 11.6485 2.53412 11.7711 2.90197C11.8528 3.1472 11.7711 3.31069 11.5259 3.39244C11.158 3.51505 10.7493 3.67854 10.4223 3.92377C10.0136 4.20987 9.68663 4.57772 9.35965 4.94557C9.27791 5.02731 9.27791 5.14993 9.27791 5.27254C9.27791 5.35429 9.31878 5.43603 9.27791 5.55865C9.27791 5.72214 9.19617 5.76301 9.03268 5.76301C8.91006 5.76301 8.86919 5.68126 8.86919 5.55865C8.86919 5.51778 8.86919 5.4769 8.86919 5.43603C8.78745 5.06818 8.62396 4.94557 8.25611 5.06818C8.09263 5.10906 7.92914 5.14993 7.76565 5.1908C7.47955 5.23167 7.3978 5.31342 7.3978 5.55865C7.3978 5.76301 7.56129 5.96737 7.80652 6.00824C7.88827 6.00824 7.97001 5.96737 7.97001 6.13085C7.97001 6.17173 8.05175 6.17173 8.09262 6.17173C8.17437 6.17173 8.25611 6.13086 8.33786 6.17173C8.46047 6.2126 8.54222 6.25347 8.50134 6.37609C8.46047 6.58045 8.58309 6.66219 8.74658 6.74393C8.86919 6.78481 8.95094 6.90742 8.99181 7.03004C9.15529 7.39788 9.40053 7.47963 9.7275 7.27527C9.89099 7.15265 10.0545 7.15265 10.2588 7.2344C10.5041 7.35701 10.7084 7.43876 10.9537 7.47963C11.2398 7.56137 11.3215 7.8066 11.485 8.01096C11.6076 8.21532 11.7302 8.41968 11.8528 8.62404C11.9755 8.78753 12.0572 8.95102 12.2616 9.03276C12.5068 9.15538 12.5477 9.40061 12.5068 9.64584C12.4659 10.0546 12.3024 10.4224 12.1389 10.8311C12.1389 10.872 12.0981 10.9129 12.0981 10.9129C11.6485 11.2807 11.3624 11.8529 10.9537 12.2616C10.5449 12.7521 10.0136 13.0791 9.40053 13.3243C9.27791 13.3652 9.11442 13.3652 8.99181 13.2426C8.86919 13.12 8.91006 12.9973 8.95093 12.8339C9.11442 12.466 9.31878 12.139 9.4414 11.7712C9.48227 11.6077 9.52314 11.4033 9.52314 11.2398C9.52314 11.0355 9.4414 10.8311 9.27791 10.6676C8.99181 10.3815 8.7057 10.0954 8.58309 9.68671C8.46047 9.35974 8.4196 8.99189 8.54222 8.66492C8.62396 8.37881 8.66483 8.13358 8.37873 7.97009C8.33786 7.92922 8.29698 7.84748 8.29698 7.8066C8.25611 7.72486 8.25611 7.60224 8.21524 7.5205C8.1335 7.07091 8.01088 6.94829 7.56129 6.82568C7.31606 6.78481 7.07083 6.74393 6.86647 6.70306C6.29426 6.58045 5.92641 6.2126 5.64031 5.76301C5.23159 5.1908 4.98636 4.57772 4.70025 3.96464C4.57764 3.71941 4.53677 3.47418 4.53677 3.22895C4.57764 2.45238 4.37328 1.75756 4.00543 1.06274C4.0463 0.940119 4.00543 0.899247 4.00543 0.858375C4.53677 0.5314 5.10897 0.32704 5.72205 0.204424C6.62124 6.47964e-05 7.47955 -0.0408071 8.37873 0.0409367C8.4196 0.0409367 8.46047 0.0818087 8.50134 0.0818087Z"
                                fill="#1DC479"
                              />{" "}
                            </svg>{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            English{" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 transition-opacity duration-200 w-4 text-interactive-selected opacity-100"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="/en-ca/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/en-ca/"
                        data-label="English (CA)"
                        data-selected="false"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <img
                              src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-ca'%20viewBox='0%200%20640%20480'%3e%3cpath%20fill='%23fff'%20d='M150.1%200h339.7v480H150z'/%3e%3cpath%20fill='%23d52b1e'%20d='M-19.7%200h169.8v480H-19.7zm509.5%200h169.8v480H489.9zM201%20232l-13.3%204.4%2061.4%2054c4.7%2013.7-1.6%2017.8-5.6%2025l66.6-8.4-1.6%2067%2013.9-.3-3.1-66.6%2066.7%208c-4.1-8.7-7.8-13.3-4-27.2l61.3-51-10.7-4c-8.8-6.8%203.8-32.6%205.6-48.9%200%200-35.7%2012.3-38%205.8l-9.2-17.5-32.6%2035.8c-3.5.9-5-.5-5.9-3.5l15-74.8-23.8%2013.4c-2%20.9-4%20.1-5.2-2.2l-23-46-23.6%2047.8c-1.8%201.7-3.6%201.9-5%20.7L264%20130.8l13.7%2074.1c-1.1%203-3.7%203.8-6.7%202.2l-31.2-35.3c-4%206.5-6.8%2017.1-12.2%2019.5-5.4%202.3-23.5-4.5-35.6-7%204.2%2014.8%2017%2039.6%209%2047.7'/%3e%3c/svg%3e"
                              alt="true"
                              width="15"
                              height="11"
                              loading="lazy"
                              decoding="async"
                            />{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            English (CA){" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 opacity-0 transition-opacity duration-200 w-4 text-interactive-selected"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="/uk/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/uk/"
                        data-label="English (UK)"
                        data-selected="false"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <img
                              src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-gb'%20viewBox='0%200%20640%20480'%3e%3cpath%20fill='%23012169'%20d='M0%200h640v480H0z'/%3e%3cpath%20fill='%23FFF'%20d='m75%200%20244%20181L562%200h78v62L400%20241l240%20178v61h-80L320%20301%2081%20480H0v-60l239-178L0%2064V0z'/%3e%3cpath%20fill='%23C8102E'%20d='m424%20281%20216%20159v40L369%20281zm-184%2020%206%2035L54%20480H0zM640%200v3L391%20191l2-44L590%200zM0%200l239%20176h-60L0%2042z'/%3e%3cpath%20fill='%23FFF'%20d='M241%200v480h160V0zM0%20160v160h640V160z'/%3e%3cpath%20fill='%23C8102E'%20d='M0%20193v96h640v-96zM273%200v480h96V0z'/%3e%3c/svg%3e"
                              alt="true"
                              width="15"
                              height="11"
                              loading="lazy"
                              decoding="async"
                            />{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            English (UK){" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 opacity-0 transition-opacity duration-200 w-4 text-interactive-selected"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="/de/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/de/"
                        data-label="Deutsch (DE)"
                        data-selected="false"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <img
                              src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-de'%20viewBox='0%200%20640%20480'%3e%3cpath%20fill='%23fc0'%20d='M0%20320h640v160H0z'/%3e%3cpath%20fill='%23000001'%20d='M0%200h640v160H0z'/%3e%3cpath%20fill='red'%20d='M0%20160h640v160H0z'/%3e%3c/svg%3e"
                              alt="true"
                              width="15"
                              height="11"
                              loading="lazy"
                              decoding="async"
                            />{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            Deutsch (DE){" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 opacity-0 transition-opacity duration-200 w-4 text-interactive-selected"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="/de-ch/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/de-ch/"
                        data-label="Deutsch (CH)"
                        data-selected="false"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <img
                              src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-ch'%20viewBox='0%200%20640%20480'%3e%3cg%20fill-rule='evenodd'%20stroke-width='1pt'%3e%3cpath%20fill='red'%20d='M0%200h640v480H0z'/%3e%3cg%20fill='%23fff'%3e%3cpath%20d='M170%20195h300v90H170z'/%3e%3cpath%20d='M275%2090h90v300h-90z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
                              alt="true"
                              width="15"
                              height="11"
                              loading="lazy"
                              decoding="async"
                            />{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            Deutsch (CH){" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 opacity-0 transition-opacity duration-200 w-4 text-interactive-selected"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="/es/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/es/"
                        data-label="Español"
                        data-selected="false"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <img
                              src="images/es.DL6RIaKh.svg"
                              alt="true"
                              width="15"
                              height="11"
                              loading="lazy"
                              decoding="async"
                            />{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            Español{" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 opacity-0 transition-opacity duration-200 w-4 text-interactive-selected"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="/fr/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/fr/"
                        data-label="Français"
                        data-selected="false"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <img
                              src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-fr'%20viewBox='0%200%20640%20480'%3e%3cpath%20fill='%23fff'%20d='M0%200h640v480H0z'/%3e%3cpath%20fill='%23000091'%20d='M0%200h213.3v480H0z'/%3e%3cpath%20fill='%23e1000f'%20d='M426.7%200H640v480H426.7z'/%3e%3c/svg%3e"
                              alt="true"
                              width="15"
                              height="11"
                              loading="lazy"
                              decoding="async"
                            />{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            Français{" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 opacity-0 transition-opacity duration-200 w-4 text-interactive-selected"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="/nl/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/nl/"
                        data-label="Nederlands"
                        data-selected="false"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <img
                              src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-nl'%20viewBox='0%200%20640%20480'%3e%3cpath%20fill='%23ae1c28'%20d='M0%200h640v160H0z'/%3e%3cpath%20fill='%23fff'%20d='M0%20160h640v160H0z'/%3e%3cpath%20fill='%2321468b'%20d='M0%20320h640v160H0z'/%3e%3c/svg%3e"
                              alt="true"
                              width="15"
                              height="11"
                              loading="lazy"
                              decoding="async"
                            />{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            Nederlands{" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 opacity-0 transition-opacity duration-200 w-4 text-interactive-selected"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        href="/it/"
                        className="group relative flex w-full items-center justify-between gap-0 rounded-xsmall px-2 py-2 text-left transition-colors bg-default text-secondary data-[selected=true]:bg-interactive-selected data-[selected=true]:text-interactive-selected"
                        data-select-option="true"
                        data-value="/it/"
                        data-label="Italiano"
                        data-selected="false"
                      >
                        {" "}
                        <span className="flex min-w-0 flex-1 items-center gap-2">
                          {" "}
                          <span
                            className="shrink-0"
                            data-select-option-icon="true"
                          >
                            {" "}
                            <img
                              src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-it'%20viewBox='0%200%20640%20480'%3e%3cg%20fill-rule='evenodd'%20stroke-width='1pt'%3e%3cpath%20fill='%23fff'%20d='M0%200h640v480H0z'/%3e%3cpath%20fill='%23009246'%20d='M0%200h213.3v480H0z'/%3e%3cpath%20fill='%23ce2b37'%20d='M426.7%200H640v480H426.7z'/%3e%3c/g%3e%3c/svg%3e"
                              alt="true"
                              width="15"
                              height="11"
                              loading="lazy"
                              decoding="async"
                            />{" "}
                          </span>{" "}
                          <span
                            className="truncate text-body-s"
                            data-select-option-label="true"
                          >
                            {" "}
                            Italiano{" "}
                          </span>{" "}
                        </span>{" "}
                        <span
                          className="shrink-0 opacity-0 transition-opacity duration-200 w-4 text-interactive-selected"
                          data-select-check="true"
                        >
                          {" "}
                          <svg
                            fill="none"
                            fontSize="16px"
                            overflow="hidden"
                            preserveAspectRatio="xMinYMin"
                            viewBox="0 0 17 17"
                            width="1em"
                            height="1em"
                          >
                            {" "}
                            <path
                              d="M6.50001 11.2799L3.72001 8.4999L2.77335 9.4399L6.50001 13.1666L14.5 5.16656L13.56 4.22656L6.50001 11.2799Z"
                              fill="currentColor"
                            />{" "}
                          </svg>{" "}
                        </span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha05 group-hover:opacity-100"
                          data-select-option-hover="true"
                        ></span>{" "}
                        <span
                          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-overlay-dark-alpha10 group-active:opacity-100"
                          data-select-option-pressed="true"
                        ></span>{" "}
                      </a>{" "}
                    </li>{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
              <div
                style={{
                  paddingTop: "0px",
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  paddingLeft: "8px",
                }}
              >
                {" "}
              </div>{" "}
              <a
                data-style-type="primary"
                data-button-name="Book a demo"
                data-disabled="false"
                data-theme-type="light"
                data-loading="false"
                data-focus-theme="light"
                className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start group"
                style={{
                  borderRadius: "26px",
                  padding: "16px 12px 16px 16px",
                  height: "40px",
                  backgroundColor: "#BEFF50",
                  color: "#14140F",
                }}
                href="/demo-request/"
              >
                {" "}
                <span
                  className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                  style={{ borderRadius: "26px" }}
                >
                  {" "}
                </span>{" "}
                <span
                  className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                  style={{ borderRadius: "26px" }}
                >
                  {" "}
                </span>{" "}
                <span
                  data-size="small"
                  data-loading="false"
                  data-direction="right"
                  className="button-content relative z-[10] flex overflow-visible items-center justify-center"
                >
                  <span
                    className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                    data-button-label="true"
                  >
                    Book a demo
                  </span>
                  <span className="relative block ml-1" style={{ width: "20px", height: "20px" }}>
                    <svg
                      fill="none"
                      fontSize="20px"
                      overflow="hidden"
                      preserveAspectRatio="xMinYMin"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      className="absolute top-0 left-0 opacity-100 group-hover:opacity-0 transition-opacity duration-200"
                    >
                      <path
                        d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      fill="none"
                      fontSize="20px"
                      overflow="hidden"
                      preserveAspectRatio="xMinYMin"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <path
                        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </a>
              <div
                style={{
                  paddingTop: "0px",
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  paddingLeft: "8px",
                }}
              >
                {" "}
              </div>{" "}
              <a
                data-style-type="secondary"
                data-button-name="Get started"
                data-disabled="false"
                data-theme-type="light"
                data-loading="false"
                data-focus-theme="light"
                className="styled-button-with-overlay relative inline-flex items-center justify-center box-border transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap active:outline-none disabled:cursor-not-allowed w-auto self-start group"
                style={{
                  borderRadius: "26px",
                  padding: "16px 12px 16px 16px",
                  height: "40px",
                  backgroundColor: "transparent",
                  border: "1px solid #14140F",
                  color: "#14140F",
                }}
                href="https://app.perk.com/en-US/signup"
              >
                {" "}
                <span
                  className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha05 transition-opacity duration-300 pointer-events-none opacity-0 hover-overlay block"
                  style={{ borderRadius: "26px" }}
                >
                  {" "}
                </span>{" "}
                <span
                  className="overlay absolute top-0 left-0 right-0 bottom-0 z-[8] bg-overlay-dark-alpha10 transition-opacity duration-300 pointer-events-none opacity-0 pressed-overlay block"
                  style={{ borderRadius: "26px" }}
                >
                  {" "}
                </span>{" "}
                <span
                  data-size="small"
                  data-loading="false"
                  data-direction="right"
                  className="button-content relative z-[10] flex overflow-visible items-center justify-center"
                >
                  <span
                    className="text-body-xs-mobile md:text-body-xs font-sono font-regular !font-medium"
                    data-button-label="true"
                  >
                    Get started
                  </span>
                  <span className="relative block ml-1" style={{ width: "20px", height: "20px" }}>
                    <svg
                      fill="none"
                      fontSize="20px"
                      overflow="hidden"
                      preserveAspectRatio="xMinYMin"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      className="absolute top-0 left-0 opacity-100 group-hover:opacity-0 transition-opacity duration-200"
                    >
                      <path
                        d="M9.64714 6L8.2016 7.41L12.897 12L8.2016 16.59L9.64714 18L15.7984 12L9.64714 6Z"
                        fill="currentColor"
                      />
                    </svg>
                    <svg
                      fill="none"
                      fontSize="20px"
                      overflow="hidden"
                      preserveAspectRatio="xMinYMin"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <path
                        d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </span>
              </a>
              <div
                style={{
                  paddingTop: "0px",
                  paddingRight: "0px",
                  paddingBottom: "0px",
                  paddingLeft: "20px",
                }}
              >
                {" "}
              </div>{" "}
              <div className="flex items-center">
                {" "}
                <a
                  href="https://app.perk.com/login"
                  aria-label="Log in"
                  className="button-icon group relative inline-flex min-h-6 min-w-6 items-center justify-center rounded overflow-hidden p-1 transition-colors cursor-pointer text-primary active:bg-overlay-dark-alpha10"
                >
                  {" "}
                  <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-200 pointer-events-none bg-overlay-dark-alpha05 group-hover:opacity-100"
                    aria-hidden="true"
                  ></span>{" "}
                  <svg
                    data-testid="icon"
                    fill="none"
                    color="currentColor"
                    fontSize="32px"
                    overflow="hidden"
                    preserveAspectRatio="xMinYMin"
                    viewBox="0 0 32 32"
                    width="1em"
                    height="1em"
                    className="buttonIcon"
                  >
                    {" "}
                    <path
                      d="M16 16C18.21 16 20 14.21 20 12C20 9.79 18.21 8 16 8C13.79 8 12 9.79 12 12C12 14.21 13.79 16 16 16ZM16 18C13.33 18 8 19.34 8 22V24H24V22C24 19.34 18.67 18 16 18Z"
                      fill="currentColor"
                    />{" "}
                  </svg>{" "}
                </a>{" "}
                <div
                  style={{
                    paddingTop: "0px",
                    paddingRight: "0px",
                    paddingBottom: "0px",
                    paddingLeft: "4px",
                  }}
                >
                  {" "}
                </div>{" "}
                <button
                  type="button"
                  className="desktop-more-button relative w-10 h-10 flex items-center justify-center cursor-pointer bg-transparent border-0 p-0"
                  data-theme="light"
                  data-dropdown-menu-id="a723cf08-ae35-4abf-85ee-557c98a8749e"
                  aria-label="More menu"
                >
                  {" "}
                  <span className="desktop-more-icon-open">
                    {" "}
                    <svg
                      fill="none"
                      color="#14140F"
                      fontSize="32px"
                      overflow="hidden"
                      preserveAspectRatio="xMinYMin"
                      viewBox="0 0 32 32"
                      width="1em"
                      height="1em"
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M7 20H25V18H7V20ZM7 12V14H25V12H7Z"
                      />{" "}
                    </svg>{" "}
                  </span>{" "}
                  <span className="desktop-more-icon-close hidden">
                    {" "}
                    <svg
                      fill="none"
                      color="#14140F"
                      fontSize="28px"
                      overflow="hidden"
                      preserveAspectRatio="xMinYMin"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                    >
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <g clipPath="url(#cross-clip-a186a431-87f1-42c8-afca-952fbe5499cf)">
                          {" "}
                          <path
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                            fill="currentColor"
                          />{" "}
                        </g>{" "}
                        <defs>
                          {" "}
                          <clipPath id="cross-clip-a186a431-87f1-42c8-afca-952fbe5499cf">
                            {" "}
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                            ></rect>{" "}
                          </clipPath>{" "}
                        </defs>{" "}
                      </svg>{" "}
                    </svg>{" "}
                  </span>{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="flex items-center justify-between w-full lg:hidden">
            {" "}
            <a
              href="/"
              aria-label="Perk home"
              data-focus-theme="light"
              className="mobile-logo-link -m-1 inline-flex flex-shrink-0 p-1"
            >
              {" "}
              <svg
                data-testid="logo-perk"
                width="60"
                viewBox="0 0 138 71"
                fill="#14140F"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {" "}
                <path
                  d="M48.3146 28.488C39.4161 28.488 33.4059 34.8839 33.4059 44.2723C33.4059 53.6607 39.6203 59.9393 48.5772 59.9393C55.5209 59.9393 61.2685 55.5678 62.4355 49.612C62.4647 49.4066 62.3188 49.2306 62.1438 49.2306H55.9586C55.8127 49.2306 55.696 49.3186 55.6668 49.436C54.5581 52.3992 51.9615 53.9835 48.5188 53.9835C43.8216 53.9835 40.8165 50.9322 40.3205 45.8859H62.2896C62.4647 45.8859 62.5814 45.7686 62.6106 45.5926C62.6689 44.6244 62.6397 43.8029 62.5814 43.0988C62.2313 33.857 56.863 28.488 48.3146 28.488ZM40.6123 40.6343C41.5459 36.2628 44.1717 33.9744 48.2562 33.9744C52.3408 33.9744 54.9666 36.3802 55.5209 40.6343H40.6123ZM101.414 41.7785L113.113 29.7202C113.142 29.6909 113.142 29.6616 113.142 29.6322C113.142 29.5442 113.084 29.4855 112.997 29.4855H104.623C104.536 29.4855 104.448 29.5149 104.39 29.5736L92.9531 41.5145V17.75C92.9531 17.574 92.8072 17.4273 92.6321 17.4273H86.3011C86.126 17.4273 85.9801 17.574 85.9801 17.75V58.619C85.9801 58.795 86.126 58.9417 86.3011 58.9417H92.6321C92.8072 58.9417 92.9531 58.795 92.9531 58.619V47.1182H97.0668L105.499 58.8244C105.557 58.9124 105.644 58.9417 105.761 58.9417H113.522C113.638 58.9417 113.755 58.8244 113.755 58.707C113.755 58.6483 113.726 58.619 113.697 58.5603L101.414 41.7785ZM16.6884 28.488C11.9911 28.488 8.66512 31.9207 8.11078 33.4463H6.73953V29.8376C6.73953 29.6616 6.59366 29.5149 6.4186 29.5149H0.32093C0.145877 29.5149 0 29.6616 0 29.8376C0.058351 31.0112 0.116702 32.8302 0.116702 34.9426V70.6773C0.116702 70.8533 0.262579 71 0.437632 71H6.71036C6.88541 71 7.03129 70.8533 7.03129 70.6773V56.6826H8.40254C9.68626 58.7364 12.8956 59.9686 16.3966 59.9686C25.2368 59.9686 30.8677 52.9273 30.8677 44.1843C30.8677 35.4413 25.7036 28.488 16.6884 28.488ZM15.2296 53.8368C10.2114 53.8368 6.65201 49.964 6.65201 44.2136C6.65201 38.4632 10.2114 34.7079 15.2296 34.7079C20.2478 34.7079 23.6905 38.4339 23.6905 44.2136C23.6905 49.9934 20.1894 53.8368 15.2296 53.8368ZM74.1641 32.5368H72.7928L72.7636 29.8083C72.7636 29.6322 72.6178 29.4855 72.4427 29.4855H66.1408C65.9658 29.4855 65.8199 29.6322 65.8199 29.8083C65.8782 31.1285 65.9366 33.0062 65.9366 34.9132V58.619C65.9366 58.795 66.0825 58.9417 66.2575 58.9417H72.5886C72.7636 58.9417 72.9095 58.795 72.9095 58.619V44.3017C72.9095 38.6686 76.0313 35.5587 81.312 35.5587C81.8372 35.5587 82.3332 35.588 82.8584 35.6467C83.0334 35.676 83.2085 35.5293 83.2085 35.324V29.4562C83.2085 29.3095 83.1209 29.1921 82.9751 29.1628C82.6249 29.0748 82.0998 29.0161 81.5746 28.9868C78.307 29.0748 75.5645 29.955 74.1641 32.5368ZM121.924 0.26405C121.953 0.117355 122.099 0 122.245 0H124.433C124.579 0 124.725 0.117355 124.754 0.26405L126.038 9.71116C126.067 9.91653 125.892 10.0926 125.659 10.0632L123.383 9.68182H123.266L120.991 10.0632C120.786 10.0926 120.582 9.91653 120.611 9.71116L121.924 0.26405ZM137.708 17.0752C137.883 17.0752 138 16.9285 138 16.7525V14.5814C138 14.4054 137.883 14.288 137.708 14.2587L123.383 12.9091H123.325L108.97 14.2587C108.795 14.288 108.679 14.4054 108.679 14.5814V16.7525C108.679 16.9285 108.795 17.0459 108.97 17.0752L119.561 17.9554C119.649 17.9554 119.707 17.9847 119.765 18.0434L120.524 18.8062C120.582 18.8649 120.611 18.9236 120.611 18.9822L121.924 29.1921C121.953 29.3388 122.07 29.4562 122.245 29.4562H124.433C124.579 29.4562 124.725 29.3388 124.754 29.1921L126.067 18.9822C126.067 18.9236 126.096 18.8355 126.155 18.8062L126.913 18.0434C126.972 17.9847 127.03 17.9554 127.118 17.9554L137.708 17.0752Z"
                  fill="#14140F"
                />{" "}
              </svg>{" "}
            </a>{" "}
            <div className="flex items-center gap-2">
              {" "}
              <div className="desktop-icon-button">
                {" "}
                <a
                  href="https://app.perk.com/login"
                  aria-label="Log in"
                  className="button-icon group relative inline-flex min-h-6 min-w-6 items-center justify-center rounded overflow-hidden p-1 transition-colors cursor-pointer text-primary active:bg-overlay-dark-alpha10"
                >
                  {" "}
                  <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-200 pointer-events-none bg-overlay-dark-alpha05 group-hover:opacity-100"
                    aria-hidden="true"
                  ></span>{" "}
                  <svg
                    data-testid="icon"
                    fill="none"
                    color="currentColor"
                    fontSize="32px"
                    overflow="hidden"
                    preserveAspectRatio="xMinYMin"
                    viewBox="0 0 32 32"
                    width="1em"
                    height="1em"
                    className="buttonIcon"
                    aria-hidden="true"
                  >
                    {" "}
                    <path
                      d="M16 16C18.21 16 20 14.21 20 12C20 9.79 18.21 8 16 8C13.79 8 12 9.79 12 12C12 14.21 13.79 16 16 16ZM16 18C13.33 18 8 19.34 8 22V24H24V22C24 19.34 18.67 18 16 18Z"
                      fill="currentColor"
                    />{" "}
                  </svg>{" "}
                </a>{" "}
              </div>{" "}
              <button
                type="button"
                className="mobile-menu-button p-1 rounded-lg hover:bg-black/5 transition-colors"
                style={{ color: "#14140F" }}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {" "}
                <svg
                  data-testid="burger-icon"
                  fill="none"
                  color="#14140F"
                  fontSize="32px"
                  overflow="hidden"
                  preserveAspectRatio="xMinYMin"
                  viewBox="0 0 32 32"
                  width="1em"
                  height="1em"
                  className={`menu-icon-open ${isMobileMenuOpen ? "hidden" : ""}`}
                >
                  {" "}
                  <path
                    fill="currentColor"
                    d="M7 20H25V18H7V20ZM7 12V14H25V12H7Z"
                  />{" "}
                </svg>{" "}
                <svg
                  data-testid="cross-icon"
                  fill="none"
                  color="#14140F"
                  fontSize="28px"
                  overflow="hidden"
                  preserveAspectRatio="xMinYMin"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  className={`menu-icon-close ${isMobileMenuOpen ? "" : "hidden"}`}
                >
                  {" "}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <g clipPath="url(#cross-clip-dbfc6317-39a4-4ef7-a6cf-03b16a94f4a6)">
                      {" "}
                      <path
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        fill="currentColor"
                      />{" "}
                    </g>{" "}
                    <defs>
                      {" "}
                      <clipPath id="cross-clip-dbfc6317-39a4-4ef7-a6cf-03b16a94f4a6">
                        {" "}
                        <rect width="24" height="24" fill="white"></rect>{" "}
                      </clipPath>{" "}
                    </defs>{" "}
                  </svg>{" "}
                </svg>{" "}
              </button>{" "}
            </div>{" "}
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown - placed OUTSIDE the header flex container */}
      {isMobileMenuOpen && (
        <>
          <div className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} style={{ zIndex: 9998 }} />
          <div 
            className="lg:hidden fixed top-[80px] left-4 right-4 rounded-[24px] shadow-2xl flex flex-col p-6 z-50 overflow-y-auto max-h-[calc(100vh-100px)]"
            style={{ zIndex: 9999, border: "1px solid rgba(0,0,0,0.05)", backgroundColor: "#F5F5EB" }}
          >
          <nav className="flex flex-col">
            <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="flex justify-between items-center py-4 border-b border-black/10 text-brand-offblack hover:bg-black/5 rounded px-2 -mx-2 transition-colors">
              <span className="text-[16px] font-sans font-medium">Product</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="flex justify-between items-center py-4 border-b border-black/10 text-brand-offblack hover:bg-black/5 rounded px-2 -mx-2 transition-colors">
              <span className="text-[16px] font-sans font-medium">Solutions</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="/customers/" className="flex justify-between items-center py-4 border-b border-black/10 text-brand-offblack hover:bg-black/5 rounded px-2 -mx-2 transition-colors">
              <span className="text-[16px] font-sans font-medium">Customers</span>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="/pricing/" className="flex justify-between items-center py-4 border-b border-black/10 text-brand-offblack hover:bg-black/5 rounded px-2 -mx-2 transition-colors">
              <span className="text-[16px] font-sans font-medium">Pricing</span>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="/travel-solutions/marketplace/" className="flex justify-between items-center py-4 border-b border-black/10 text-brand-offblack hover:bg-black/5 rounded px-2 -mx-2 transition-colors">
              <span className="text-[16px] font-sans font-medium">Integrations</span>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="#" className="flex justify-between items-center py-4 border-b border-black/10 text-brand-offblack hover:bg-black/5 rounded px-2 -mx-2 transition-colors">
              <span className="text-[16px] font-sans font-medium">More</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
            </a>
          </nav>
          <div className="flex flex-col gap-3 mt-6">
            <a onClick={() => setIsMobileMenuOpen(false)} href="/demo-request/" className="w-full text-[#14140F] rounded-[26px] py-4 px-4 flex justify-center items-center font-sans font-medium text-[16px] transition-colors shadow-sm" style={{ backgroundColor: "#BEFF50" }}>
              Book a demo
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><path d="M9 18l6-6-6-6" /></svg>
            </a>
            <a onClick={() => setIsMobileMenuOpen(false)} href="https://app.perk.com/en-US/signup" className="w-full bg-transparent border border-[#14140F] text-[#14140F] rounded-[26px] py-4 px-4 flex justify-center items-center font-sans font-medium text-[16px] transition-colors">
              Get started
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1"><path d="M9 18l6-6-6-6" /></svg>
            </a>
          </div>
        </div>
        </>
      )}
    </>
  );
}
