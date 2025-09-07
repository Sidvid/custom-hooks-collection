import { useEffect, useState } from "react";
interface DeviceProps {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  height: null | number;
  width: null | number;
}
export default function useResponsive() {
  const [device, setDevice] = useState<DeviceProps>({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    height: null,
    width: null,
  });
  const handler = () => {
    const innerHeight = window.innerHeight;
    const innerWidth = window.outerWidth;
    setDevice((previous) => ({
      ...previous,
      width: innerWidth,
      height: innerHeight,
      isMobile: innerWidth <= 680,
      isTablet: innerWidth > 680 && innerWidth < 1280,
      isLaptop: innerWidth >= 1280,
    }));
  };
  useEffect(() => {
    const fallbackHeight = window.innerHeight;
    const fallbackWidth = window.innerWidth;
    if (!device.height && !device.width) {
      setDevice((previous) => ({
        ...previous,
        width: fallbackWidth,
        height: fallbackHeight,
        isMobile: fallbackWidth <= 680,
        isTablet: fallbackWidth > 680 && fallbackWidth < 1280,
        isLaptop: fallbackWidth >= 1280,
      }));
    }
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handler, true);
    return () => window.removeEventListener("resize", handler);
  }, []);
  console.log("DEC", device);
  return {
    ...device,
  };
}
