import React from 'react'

export function Card({ children }) {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition p-4">
      {children}
    </div>
  )
}

export function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>
}
