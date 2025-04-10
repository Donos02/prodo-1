"use client"

import React from 'react'

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const ChartCard = ({ title, subtitle, children, actions, className = '' }: ChartCardProps) => {
  return (
    <div className={`card bg-[#070c29]/40 backdrop-blur-md rounded-xl border border-[rgba(255,255,255,0.1)] p-4 shadow-lg ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h6 className="text-white text-lg font-semibold">{title}</h6>
          {subtitle && <p className="text-gray-400 text-sm">{subtitle}</p>}
        </div>
        {actions && (
          <div className="flex items-center">
            {actions}
          </div>
        )}
      </div>
      <div className="chart-content">
        {children}
      </div>
    </div>
  )
}

export default ChartCard 