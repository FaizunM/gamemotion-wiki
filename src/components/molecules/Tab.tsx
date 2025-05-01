"use client";

import { useEffect, useRef, useState } from "react";

const tabs = ["Information", "Skills", "Build", "Teams", "Reviews"];

export const Tab = ({
  onSelectTab,
}: {
  onSelectTab: (index: number) => void;
}) => {
  const [ActiveTab, setActiveTab] = useState<string>("Information");
  const [UnderlineStyle, setUnderlineStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });
  const tabsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const currentTab = tabsRef.current[ActiveTab];
    if (currentTab) {
      const { offsetLeft, offsetWidth } = currentTab;
      setUnderlineStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [ActiveTab]);

  const [Floating, setFloating] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${
          Floating ? "fixed top-[190px] left-12 w-[calc(100vw-48px)] bg-[#141415]" : "w-full"
        }`}
      >
        <div className="w-full flex items-center px-8 relative">
          {tabs.map((item, index) => {
            return (
              <div
                className={`px-4 py-3 ${
                  ActiveTab == item ? "text-white" : "text-gray-400"
                } hover:text-white text-sm font-semibold`}
                key={index}
                ref={(el) => (tabsRef.current[item] = el)}
                onClick={() => {
                  onSelectTab(index);
                  setActiveTab(item);
                }}
              >
                {item}
              </div>
            );
          })}
          <span
            className="absolute bottom-0 h-0.5 bg-white transition-all duration-200"
            style={{
              ...UnderlineStyle,
              position: "absolute",
            }}
          ></span>
        </div>
      </div>
    </>
  );
};
