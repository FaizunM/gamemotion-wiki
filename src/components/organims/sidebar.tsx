"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Sidebar = () => {
  const [Expand, setExpand] = useState<boolean>(false);

  return (
    <>
      <AnimatePresence>
        <motion.div
          className={`fixed top-0 left-0 h-screen bg-[#141415] border-r border-r-[rgba(255,255,255,0.1)] p-2 z-9999`}
          onMouseEnter={() => setExpand(true)}
          onMouseLeave={() => setExpand(false)}
          variants={{
            expand: {
              width: "250px",
            },
            release: {
              width: "48px",
            },
          }}
          transition={{duration: 0.2, ease: 'easeInOut'}}
          animate={Expand ? "expand" : "release"}
        >
          <div className="flex items-center ">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="fa-brands fa-facebook text-2xl"></i>
            </div>
            {Expand && (
              <div className="px-2 font-semibold text-sm text-ellipsis line-clamp-1">Gamemotion Wiki</div>
            )}
          </div>
          <div className="flex flex-col flex-1">
            {[
              {
                icon: <i className="fa-light fa-compass"></i>,
                text: "Discover",
              },
              { icon: <i className="fa-light fa-list"></i>, text: "Activity" },
              { icon: <i className="fa-light fa-signal"></i>, text: "Stats" },
              {
                icon: <i className="fa-light fa-user-circle"></i>,
                text: "Profile",
              },
              { icon: <i className="fa-light fa-cog"></i>, text: "Settings" },
            ].map((item, index) => {
              return (
                <div
                  className="flex items-center hover:bg-[rgba(255,255,255,0.1)] rounded"
                  key={index}
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  {Expand && (
                    <div className="px-2 font-semibold text-sm text-ellipsis line-clamp-1">
                      {item.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
