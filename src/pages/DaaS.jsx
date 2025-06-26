import React, { useState } from 'react';
import { 
  LineChart, BarChart, PieChart, Line, Bar, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell 
} from 'recharts';
import { 
  DollarSign, Drone, Calendar, Users, Map, Clock, 
  BatteryFull, Shield, PieChart as PieChartIcon, BarChart2 
} from 'lucide-react';

const DaaS = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  
  const revenueData = [
    { month: 'Jan', revenue: 12500 },
    { month: 'Feb', revenue: 18900 },
    { month: 'Mar', revenue: 14200 },
    { month: 'Apr', revenue: 21000 },
    { month: 'May', revenue: 24800 },
    { month: 'Jun', revenue: 27500 },
  ];

  const droneUsageData = [
    { name: 'DJI Phantom 4', hours: 120 },
    { name: 'Autel EVO II', hours: 85 },
    { name: 'Parrot Anafi', hours: 65 },
    { name: 'Skydio 2', hours: 45 },
    { name: 'Yuneec Typhoon', hours: 30 },
  ];

  const serviceBreakdown = [
    { name: 'Aerial Photography', value: 35 },
    { name: 'Surveying', value: 25 },
    { name: 'Inspections', value: 20 },
    { name: 'Delivery', value: 12 },
    { name: 'Other', value: 8 },
  ];

  const statusData = [
    { name: 'Active', value: 78 },
    { name: 'Maintenance', value: 12 },
    { name: 'Charging', value: 8 },
    { name: 'Idle', value: 2 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const metrics = [
    { title: 'Total Revenue', value: '$142,800', change: '+12%', icon: <DollarSign className="w-6 h-6" /> },
    { title: 'Active Drones', value: '18/25', change: '+2', icon: <Drone className="w-6 h-6" /> },
    { title: 'Monthly Requests', value: '47', change: '+8%', icon: <Calendar className="w-6 h-6" /> },
    { title: 'Active Clients', value: '32', change: '+5', icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="bg-white shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Drone className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">DaaS Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                New Mission
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 flex items-start">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
              {metric.icon}
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
              <p className="text-2xl font-semibold text-gray-800">{metric.value}</p>
              <p className="text-sm text-green-600">{metric.change}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <BarChart2 className="w-5 h-5 mr-2 text-blue-600" />
              Revenue Trend
            </h2>
            <select className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg px-3 py-1">
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>Last Quarter</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <PieChartIcon className="w-5 h-5 mr-2 text-blue-600" />
              Drone Utilization (Flight Hours)
            </h2>
            <div className="text-sm text-gray-500">Last 30 Days</div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={droneUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Bar dataKey="hours" fill="#155DFC" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Service Breakdown */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
            <Map className="w-5 h-5 mr-2 text-purple-600" />
            Service Type Breakdown
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={serviceBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {serviceBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Drone Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
            <BatteryFull className="w-5 h-5 mr-2 text-yellow-600" />
            Fleet Status Overview
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

     <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
         <div className="bg-white rounded-lg shadow p-6 mt-6 ">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center mb-4">
          <Clock className="w-5 h-5 mr-2 text-gray-600" />
          Recent Service Requests
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drone Model</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { client: 'GeoSurvey Inc.', service: 'Land Survey', drone: 'DJI Phantom 4', duration: '4 hours', revenue: '$850', status: 'Completed' },
                { client: 'MediaWorks', service: 'Aerial Photography', drone: 'Autel EVO II', duration: '2 hours', revenue: '$600', status: 'In Progress' },
                { client: 'PowerGrid Co.', service: 'Infrastructure Inspection', drone: 'Skydio 2', duration: '3 hours', revenue: '$720', status: 'Scheduled' },
                { client: 'AgriTech Farms', service: 'Crop Monitoring', drone: 'Parrot Anafi', duration: '5 hours', revenue: '$950', status: 'Completed' },
                { client: 'QuickDrop', service: 'Package Delivery', drone: 'DJI Matrice 300', duration: '1 hour', revenue: '$400', status: 'Completed' },
              ].map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.drone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.revenue}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${item.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                        item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                        'bg-yellow-100 text-yellow-800'}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     </div>
    </div>
  );
};

export default DaaS;