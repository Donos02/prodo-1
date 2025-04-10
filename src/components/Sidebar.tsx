"use client"

import React from 'react'
import Link from 'next/link'

// Menu item interface
interface MenuItem {
  title: string;
  icon: JSX.Element;
  href: string;
  active?: boolean;
  submenu?: MenuItem[];
}

interface SidebarProps {
  toggled: boolean;
}

const Sidebar = ({ toggled }: SidebarProps) => {
  // Sample menu data
  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: (
        <span className="material-icons-outlined">dashboard</span>
      ),
      href: '/',
      active: true
    },
    {
      title: 'Analytics',
      icon: (
        <span className="material-icons-outlined">bar_chart</span>
      ),
      href: '/analytics'
    },
    {
      title: 'Products',
      icon: (
        <span className="material-icons-outlined">inventory_2</span>
      ),
      href: '/products',
      submenu: [
        {
          title: 'Product List',
          icon: <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>,
          href: '/products/list'
        },
        {
          title: 'Add Product',
          icon: <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>,
          href: '/products/add'
        }
      ]
    },
    {
      title: 'Orders',
      icon: (
        <span className="material-icons-outlined">shopping_bag</span>
      ),
      href: '/orders'
    },
    {
      title: 'Customers',
      icon: (
        <span className="material-icons-outlined">people</span>
      ),
      href: '/customers'
    },
    {
      title: 'Settings',
      icon: (
        <span className="material-icons-outlined">settings</span>
      ),
      href: '/settings'
    }
  ]

  return (
    <aside className={`fixed left-0 top-[70px] bottom-0 ${toggled ? 'w-[70px]' : 'w-[260px]'} bg-[#0f1535]/70 backdrop-blur-md border-r border-[rgba(255,255,255,0.15)] overflow-y-auto z-50 transition-all duration-300 ease-in-out`}>
      {/* Sidebar header */}
      <div className={`p-4 border-b border-[rgba(255,255,255,0.15)] ${toggled ? 'flex justify-center' : ''} transition-all duration-300 ease-in-out`}>
        <div className={`flex items-center ${toggled ? 'justify-center' : 'gap-2'} transition-all duration-300 ease-in-out`}>
          <div className="h-10 w-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
          <div className={`text-white text-lg font-semibold transition-opacity duration-300 ease-in-out ${toggled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'}`}>Admin</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-4">
        <ul className="metismenu">
          {menuItems.map((item, index) => (
            <li key={index} className={`relative ${item.active ? 'mm-active' : ''}`}>
              <Link 
                href={item.href}
                className={`flex items-center ${toggled ? 'justify-center' : 'gap-3'} px-4 py-3 text-[#d3d7dc] hover:text-white ${item.active ? 'bg-[#181f4a]/70 text-white' : ''} transition-all duration-300 ease-in-out`}
                title={toggled ? item.title : ''}
              >
                <span className="parent-icon transition-transform duration-300 ease-in-out">{item.icon}</span>
                <div className={`flex items-center gap-3 transition-all duration-300 ease-in-out ${toggled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 flex-1'}`}>
                  <span className="menu-title whitespace-nowrap">{item.title}</span>
                  {item.submenu && (
                    <span className="material-icons-outlined ml-auto">expand_more</span>
                  )}
                </div>
              </Link>
              
              {/* Submenu - only show when not toggled */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${item.submenu && !toggled ? 'max-h-96' : 'max-h-0'}`}>
                {item.submenu && (
                  <ul className="pl-12 bg-[#070c29]/50">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          href={subItem.href}
                          className="flex items-center gap-2 px-2 py-3 text-[#d3d7dc] hover:text-white text-sm"
                        >
                          {subItem.icon}
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar footer - only show when not toggled */}
      <div className={`transition-all duration-300 ease-in-out absolute bottom-0 left-0 right-0 border-t border-[rgba(255,255,255,0.15)] ${toggled ? 'opacity-0 p-0 max-h-0 overflow-hidden' : 'opacity-100 p-4 max-h-20'}`}>
        <div className="flex items-center justify-between text-gray-400">
          <button className="p-2 hover:bg-[#181f4a] hover:text-white rounded-full">
            <span className="material-icons-outlined">help</span>
          </button>
          <button className="p-2 hover:bg-[#181f4a] hover:text-white rounded-full">
            <span className="material-icons-outlined">settings</span>
          </button>
          <button className="p-2 hover:bg-[#181f4a] hover:text-white rounded-full">
            <span className="material-icons-outlined">logout</span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
