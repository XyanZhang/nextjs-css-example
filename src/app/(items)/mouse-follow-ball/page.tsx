"use client";
import { Metadata } from "next"
import MouseTrail from "@pjsalita/react-mouse-trail";

const config = {
  color: "#000000",
  idleAnimation: true,
  idleAnimationCount: 10,
  inverted: true,
  size: 20,
  trailCount: 20,
};

export default function BackgroundCSS() {
  return (
    <MouseTrail {...config} />
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'follow ball css',
}