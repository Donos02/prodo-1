"use client"

import React from 'react'
import StatCard from './StatCard'
import ChartCard from './ChartCard'
// Comment out unused import
// import BackgroundTest from '../BackgroundTest'
// Comment out components that don't exist yet
// import DashboardCard from "../card/DashboardCard"
// import MonthlyEarnings from "../monthlyEarnings/MonthlyEarnings"
// import RecentTransactions from "../recentTransactions/RecentTransactions"
// import ProductPerformance from "../productPerformance/ProductPerformance"

const Dashboard = () => {
  // Actions for chart cards
  const chartActions = (
    <div className="flex items-center space-x-2">
      <button className="text-gray-400 hover:text-white p-1 rounded-full">
        <span className="material-icons-outlined">more_vert</span>
      </button>
    </div>
  )

  // Top statistics cards
  const TopCards = () => {
    return (
      <>
        <StatCard 
          title="Monthly Earnings" 
          value="$7,890" 
          icon={<span className="material-icons-outlined text-xl">account_balance_wallet</span>} 
          increase="12.5%" 
          color="blue" 
        />
        <StatCard 
          title="New Customers" 
          value="1,568" 
          icon={<span className="material-icons-outlined text-xl">person_add</span>}  
          increase="5.8%" 
          color="green" 
        />
        <StatCard 
          title="Total Orders" 
          value="8,547" 
          icon={<span className="material-icons-outlined text-xl">shopping_cart</span>}  
          decrease="2.3%" 
          color="red" 
        />
        <StatCard 
          title="Revenue" 
          value="$35,750" 
          icon={<span className="material-icons-outlined text-xl">attach_money</span>}  
          increase="9.1%" 
          color="purple" 
        />
      </>
    );
  }

  // Sales overview chart
  const SalesOverview = () => {
    return (
      <ChartCard 
        title="Sales Overview" 
        subtitle="Monthly sales performance"
        actions={chartActions} 
      >
        <div className="h-80 flex items-center justify-center text-gray-400">
          Chart will be displayed here
        </div>
      </ChartCard>
    );
  }

  // Placeholder for missing components
  const MonthlyEarnings = () => (
    <ChartCard title="Monthly Earnings">
      <div className="h-40 flex items-center justify-center text-gray-400">
        Monthly earnings chart
      </div>
    </ChartCard>
  );

  const RecentTransactions = () => (
    <ChartCard title="Recent Transactions">
      <div className="h-40 flex items-center justify-center text-gray-400">
        Recent transactions list
      </div>
    </ChartCard>
  );

  const ProductPerformance = () => (
    <ChartCard title="Product Performance">
      <div className="h-80 flex items-center justify-center text-gray-400">
        Product performance table
      </div>
    </ChartCard>
  );

  return (
    <div className="p-3 bg-transparent backdrop-blur-sm bg-white/5 rounded-lg">
      {/* Remove BackgroundTest component */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <TopCards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <SalesOverview />
        <div className="space-y-4">
          <MonthlyEarnings />
          <RecentTransactions />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="col-span-1 lg:col-span-3">
          <ProductPerformance />
        </div>
      </div>
    </div>
  )
}

export default Dashboard 