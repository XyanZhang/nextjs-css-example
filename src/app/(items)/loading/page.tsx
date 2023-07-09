"use client";
import { Metadata } from "next"
import { Phrase, Char } from "animatedtxt";

export default function BackgroundCSS() {
  return (
    <div className="text-center">
      <h1>loading</h1>
      <Phrase color="var(--theme1-2)" margin={10}>
        <Char char="L" />
        <Char char="O" delay={0.5} />
        <Char char="A" delay={1} />
        <Char char="D" delay={1.5} />
        <Char char="I" delay={2} />
        <Char char="N" delay={2.5} />
        <Char char="D" delay={3} />
      </Phrase>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'loading css',
}
 