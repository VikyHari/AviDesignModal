import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  Search, 
  Settings, 
  ChevronDown, 
  User, 
  LogOut, 
  Menu,
  Plane,
  Sun,
  Moon,
  Globe
} from 'lucide-react';

import axios from 'axios';


function Header({ onMenuToggle, }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const notifications = [
    { id: 1, title: 'Flight FL001 Delayed', message: 'Expected delay of 30 minutes', time: '5m ago', type: 'warning' },
    { id: 2, title: 'Drone Mission Complete', message: 'Survey mission completed successfully', time: '12m ago', type: 'success' },
    { id: 3, title: 'System Update Available', message: 'New features and bug fixes available', time: '1h ago', type: 'info' },
    { id: 4, title: 'Weather Alert', message: 'High winds expected in Zone B', time: '2h ago', type: 'alert' }
  ];

  const unreadCount = notifications.filter(n => n.time.includes('m ago')).length;

  const getNotificationIcon = (type) => {
    const iconClass = "w-3 h-3 rounded-full flex-shrink-0";
    switch (type) {
      case 'warning': return <div className={`${iconClass} bg-yellow-400`} />;
      case 'success': return <div className={`${iconClass} bg-green-400`} />;
      case 'info': return <div className={`${iconClass} bg-blue-400`} />;
      case 'alert': return <div className={`${iconClass} bg-red-400`} />;
      default: return <div className={`${iconClass} bg-gray-400`} />;
    }
  };


  const handleLogin = async () => {
    // const token = 'your_google_id_token_here'; // You'd get this from Google login

    // try {
    //   const response = await axios.get('https://o6ix1si9kh.execute-api.ap-south-1.amazonaws.com/login?action=login', {
    //     // token: token,
    //   });

    //   console.log('Login success:', response?.data);
    // } catch (error) {
    //   console.error('Login failed:', error.response?.data || error.message);
    // }

    window.location.href = 'https://o6ix1si9kh.execute-api.ap-south-1.amazonaws.com/login?action=login';
    

  };

  

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-4 lg:px-6">
        
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Plane size={16} className="text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Avironix
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Aviation Control</p>
            </div>
          </div>

          {/* <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className={`relative w-full transition-all duration-200 ${
              searchFocused ? 'transform scale-105' : ''
            }`}>
              <Search 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
              <input
                type="text"
                placeholder="Search flights, drones, locations..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div> */}
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          
          <div className="hidden lg:flex flex-col items-end text-right">
            <div className="text-sm font-medium text-gray-900">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              All Systems Operational
            </div>
          </div>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="hidden sm:flex p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-gray-600" />
            ) : (
              <Moon size={18} className="text-gray-600" />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => {
                setIsNotificationOpen(!isNotificationOpen);
                setIsProfileOpen(false);
              }}
              className="relative p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105"
              aria-label="Notifications"
            >
              <Bell size={18} className="text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium animate-pulse">
                  {unreadCount}
                </span>
              )}
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                      {unreadCount} new
                    </span>
                  </div>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-3 hover:bg-gray-50 border-b border-gray-50 last:border-b-0 cursor-pointer transition-colors">
                      <div className="flex items-start gap-3">
                        {getNotificationIcon(notification.type)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-100">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors" onClick={handleLogin}>
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button
            className="hidden sm:flex p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105"
            aria-label="Settings"
          >
            <Settings size={18} className="text-gray-600" />
          </button>

          {/* User Profile */}
          <div className="relative">
            <button
              onClick={() => {
                setIsProfileOpen(!isProfileOpen);
                setIsNotificationOpen(false);
              }}
              className="flex items-center gap-2 lg:gap-3 p-1.5 lg:p-2 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105"
            >
              <div className="w-8 h-8 lg:w-9 lg:h-9 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-sm lg:text-base font-bold text-white">K</span>
              </div>
              <div className="hidden lg:block text-left">
                <div className="text-sm font-semibold text-gray-900">Krishna Kumar</div>
                <div className="text-xs text-gray-500">Administrator</div>
              </div>
              <ChevronDown 
                size={16} 
                className={`hidden lg:block text-gray-400 transition-transform duration-200 ${
                  isProfileOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 animate-in slide-in-from-top-2 duration-200">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">K</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Krishna Kumar</div>
                      <div className="text-sm text-gray-500">krishna@avironix.com</div>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                    <User size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-700">My Profile</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                    <Settings size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-700">Account Settings</span>
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                    <Globe size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-700">Language</span>
                  </button>
                  <hr className="my-2 border-gray-100" />
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-red-50 rounded-lg transition-colors text-left text-red-600">
                    <LogOut size={16} />
                    <span className="text-sm">Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Click outside handler */}
      {(isProfileOpen || isNotificationOpen) && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => {
            setIsProfileOpen(false);
            setIsNotificationOpen(false);
          }}
        />
      )}
    </header>
  );
}

export default Header;