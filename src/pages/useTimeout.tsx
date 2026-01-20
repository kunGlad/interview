import { useEffect, useMemo, useRef, useState } from "react";

const useTimeout = (cb: () => void, delay: number) => {
  const memorizeCb = useMemo(() => cb, [cb]);

  useEffect(() => {
    const timer = setTimeout(() => {
      memorizeCb();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
};

export default useTimeout;
