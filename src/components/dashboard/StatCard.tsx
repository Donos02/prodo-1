"use client"

import React from 'react'

interface StatCardProps {
  title: string;
  value: string | number;
  increase?: string;
  decrease?: string;
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'red' | 'orange';
}

const StatCard = ({ title, value, increase, decrease, icon, color }: StatCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return 'from-blue-500/20 to-blue-600/20 text-blue-500';
      case 'green':
        return 'from-green-500/20 to-green-600/20 text-green-500';
      case 'purple':
        return 'from-purple-500/20 to-purple-600/20 text-purple-500';
      case 'red':
        return 'from-red-500/20 to-red-600/20 text-red-500';
      case 'orange':
        return 'from-orange-500/20 to-orange-600/20 text-orange-500';
      default:
        return 'from-blue-500/20 to-blue-600/20 text-blue-500';
    }
  }

  return (
    <div className="card bg-[#070c29]/40 backdrop-blur-md rounded-xl border border-[rgba(255,255,255,0.1)] p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-gray-400 text-sm mb-1">{title}</h6>
          <h3 className="text-2xl text-white font-semibold mb-1">{value}</h3>
          {increase && (
            <span className="text-green-500 text-sm flex items-center gap-1">
              <span className="material-icons-outlined text-base">arrow_upward</span>
              {increase}
            </span>
          )}
          {decrease && (
            <span className="text-red-500 text-sm flex items-center gap-1">
              <span className="material-icons-outlined text-base">arrow_downward</span>
              {decrease}
            </span>
          )}
        </div>
        <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${getColorClasses()} flex items-center justify-center shadow-md`}>
          {icon}
        </div>
      </div>
    </div>
  )
}

export default StatCard 