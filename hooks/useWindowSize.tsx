import { useState, useEffect } from "react";

export default function useWindowSize() {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);

  const onResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return { width, height };
}
