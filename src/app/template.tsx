'use client'
import { useState } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
  const [templateData, setTemplateData] = useState({name: 'template'})
  return <div>{children}</div>
}