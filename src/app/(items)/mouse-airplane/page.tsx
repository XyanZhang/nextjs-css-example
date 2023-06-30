'use client';
import { Metadata } from "next"
import { useRef, useEffect, RefObject } from "react"
import { useMove } from "./mouseMove";

let timer: any = null;
export default function BackgroundCSS() {
  let ref = useRef<HTMLElement>(null);
  useEffect(() => {
    useMove(ref.current as HTMLElement, timer);
    return () => {
      clearInterval(timer);
    }
  }, [])
  return (
    <div>
      <div className="fixed text-[#FFEB3B] text-2xl" id="plane" ref={ref as RefObject<HTMLDivElement>}>
        🛨
      </div>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'mouse airplane css',
}
 
