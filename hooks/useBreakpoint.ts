
import { ScreenSize } from "model";
import { useEffect, useMemo, useState } from "react";


export default function useBreakpoint(): ScreenSize {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(getWidth())
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWidth(getWidth());
      }, 150);
    };
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const getBreakpoint = (size: number): ScreenSize => {
    const breakpoints: { [k in ScreenSize]: number } = {
      sm: 320,
      md: 768,
      lg: 960,
      xl: 1200,
    }
    const entries = Object.entries(breakpoints)
    return (entries.find((entry) => size <= entry[1]) ?? ["xl"])[0] as ScreenSize
  }
  return useMemo(() => getBreakpoint(width), [width])
}

export const useUtilsBreakpoint = () => {
  const breakpoint = useBreakpoint()
  return {
    isBigScreen: ["lg", "xl"].includes(breakpoint)
  }
}
