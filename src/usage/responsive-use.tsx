import React, { useMemo, useState, useEffect } from "react";
import useResponsive from "../hooks/use-responsive";
import { FcIpad, FcIphone, FcSelfServiceKiosk } from "react-icons/fc";
import "../css/responsive-use.css";

function ResponsiveUse() {
  const { isLaptop, isMobile, isTablet, width, height } = useResponsive();
  console.log({ isLaptop, isMobile, isTablet, width, height });
  const getTypeOfDevice = useMemo(() => {
    switch (true) {
      case isLaptop:
        return {
          icon: <FcSelfServiceKiosk size={70} />,
          label: "Laptop/Desktop",
        };
      case isMobile:
        return {
          icon: <FcIphone size={70} />,
          label: "Mobile",
        };
      case isTablet:
        return {
          icon: <FcIpad size={70} />,
          label: "Tablet",
        };
      default:
        return {
          icon: <FcSelfServiceKiosk size={70} />,
          label: "Device",
        };
    }
  }, [isLaptop, isMobile, isTablet, width, height]);

  return (
    <div className="responsive-card">
      <div className="responsive-icon">{getTypeOfDevice.icon}</div>
      <div className="responsive-label">{getTypeOfDevice.label}</div>
      <div className="responsive-dimensions">
        <span>
          Width: <b>{width}px</b>
        </span>
        <span>
          Height: <b>{height}px</b>
        </span>
      </div>
    </div>
  );
}

export default ResponsiveUse;
