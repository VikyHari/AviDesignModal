import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Plane, Leaf, DollarSign, MapPin, Droplets, Calendar, TrendingUp, Battery, AlertTriangle, Users, Clock, Target } from 'lucide-react';

const Green = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalRevenue: 245680,
    totalSpray: 1250.5,
    areaCovered: 3420,
    totalDrones: 12,
    activeDrones: 8,
    completedMissions: 156,
    pendingMissions: 23,
    fuelSaved: 2340,
    pesticideUsed: 890.2,
    farmsServed: 45,
    avgFlightTime: 2.3,
    batteryHealth: 89
  };

  const revenueData = [
    { month: 'Jan', revenue: 32000, missions: 15 },
    { month: 'Feb', revenue: 28000, missions: 12 },
    { month: 'Mar', revenue: 35000, missions: 18 },
    { month: 'Apr', revenue: 42000, missions: 22 },
    { month: 'May', revenue: 38000, missions: 19 },
    { month: 'Jun', revenue: 45000, missions: 25 },
    { month: 'Jul', revenue: 48000, missions: 28 }
  ];

  const sprayData = [
    { day: 'Mon', spray: 45.2, area: 120 },
    { day: 'Tue', spray: 52.1, area: 140 },
    { day: 'Wed', spray: 38.7, area: 95 },
    { day: 'Thu', spray: 61.3, area: 165 },
    { day: 'Fri', spray: 49.8, area: 135 },
    { day: 'Sat', spray: 44.6, area: 110 },
    { day: 'Sun', spray: 35.2, area: 85 }
  ];

  const droneStatusData = [
    { name: 'Active', value: 8, color: '#10B981' },
    { name: 'Maintenance', value: 2, color: '#F59E0B' },
    { name: 'Offline', value: 2, color: '#EF4444' }
  ];

  const cropTypeData = [
    { name: 'Wheat', value: 35, color: '#F59E0B' },
    { name: 'Corn', value: 28, color: '#10B981' },
    { name: 'Rice', value: 22, color: '#3B82F6' },
    { name: 'Soybean', value: 15, color: '#8B5CF6' }
  ];

  const StatCard = ({ title, value, icon: Icon, color, suffix = '', trend = null }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">
            {typeof value === 'number' ? value.toLocaleString() : value}
            <span className="text-sm text-gray-500 ml-1">{suffix}</span>
          </p>
          {trend && (
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600">{trend}% vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );

  const DroneCard = ({ droneId, status, batteryLevel, currentMission, flightHours }) => (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <Plane className="h-5 w-5 text-blue-600 mr-2" />
          <span className="font-semibold text-gray-900">Drone {droneId}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'Active' ? 'bg-green-100 text-green-800' :
          status === 'Maintenance' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Battery</span>
          <div className="flex items-center">
            <Battery className="h-4 w-4 text-gray-400 mr-1" />
            <span className="text-sm font-medium">{batteryLevel}%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Flight Hours</span>
          <span className="text-sm font-medium">{flightHours}h</span>
        </div>
        {currentMission && (
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Current Mission</span>
            <span className="text-sm font-medium text-blue-600">{currentMission}</span>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">AgroTech Dashboard</h1>
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
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                New Mission
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex space-x-8 border-b border-gray-200">
          {['overview', 'analytics', 'fleet', 'missions'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                activeTab === tab
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Total Revenue"
                value={stats.totalRevenue}
                icon={DollarSign}
                color="bg-green-500"
                suffix="USD"
                trend={12.5}
              />
              <StatCard
                title="Area Covered"
                value={stats.areaCovered}
                icon={MapPin}
                color="bg-blue-500"
                suffix="hectares"
                trend={8.3}
              />
              <StatCard
                title="Total Spray Volume"
                value={stats.totalSpray}
                icon={Droplets}
                color="bg-purple-500"
                suffix="liters"
                trend={15.2}
              />
              <StatCard
                title="Active Drones"
                value={`${stats.activeDrones}/${stats.totalDrones}`}
                icon={Plane}
                color="bg-orange-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Completed Missions"
                value={stats.completedMissions}
                icon={Target}
                color="bg-green-500"
              />
              <StatCard
                title="Farms Served"
                value={stats.farmsServed}
                icon={Users}
                color="bg-blue-500"
              />
              <StatCard
                title="Avg Flight Time"
                value={stats.avgFlightTime}
                icon={Clock}
                color="bg-purple-500"
                suffix="hours"
              />
              <StatCard
                title="Fuel Saved"
                value={stats.fuelSaved}
                icon={Leaf}
                color="bg-green-600"
                suffix="liters"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                    <Area type="monotone" dataKey="revenue" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Spray Activity</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sprayData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="spray" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Drone Status Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={droneStatusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {droneStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Crop Types Served</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={cropTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {cropTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Area Coverage vs Spray Volume</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sprayData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="area" stroke="#10B981" strokeWidth={2} name="Area (hectares)" />
                  <Line yAxisId="right" type="monotone" dataKey="spray" stroke="#3B82F6" strokeWidth={2} name="Spray (liters)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === 'fleet' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Drone Fleet Status</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Active</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Offline</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 12 }, (_, i) => (
                  <DroneCard
                    key={i + 1}
                    droneId={`AG-${String(i + 1).padStart(3, '0')}`}
                    status={i < 8 ? 'Active' : i < 10 ? 'Maintenance' : 'Offline'}
                    batteryLevel={i < 8 ? Math.floor(Math.random() * 30) + 70 : Math.floor(Math.random() * 50) + 20}
                    currentMission={i < 8 ? `Field ${Math.floor(Math.random() * 50) + 1}` : null}
                    flightHours={(Math.random() * 500 + 100).toFixed(1)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'missions' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Mission Overview</h3>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Completed Today</span>
                    <span className="text-lg font-semibold text-green-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">In Progress</span>
                    <span className="text-lg font-semibold text-blue-600">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Scheduled</span>
                    <span className="text-lg font-semibold text-orange-600">15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Pending Review</span>
                    <span className="text-lg font-semibold text-red-600">3</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Alerts</h3>
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">Low Battery - Drone AG-003</p>
                    <p className="text-xs text-yellow-600">15 minutes ago</p>
                  </div>
                  <div className="p-3 bg-red-50 rounded-lg">
                    <p className="text-sm font-medium text-red-800">Weather Alert - High Winds</p>
                    <p className="text-xs text-red-600">1 hour ago</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">Mission Completed - Field 27</p>
                    <p className="text-xs text-blue-600">2 hours ago</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Efficiency Metrics</h3>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Mission Success Rate</span>
                      <span className="text-sm font-semibold">96.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '96.5%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Avg Coverage/Hour</span>
                      <span className="text-sm font-semibold">45.2 ha</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Cost per Hectare</span>
                      <span className="text-sm font-semibold">$12.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Missions</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mission ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farm</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { id: 'M-001', farm: 'Green Valley Farm', drone: 'AG-001', area: '25.5 ha', status: 'Completed', duration: '2.3h' },
                      { id: 'M-002', farm: 'Sunrise Agriculture', drone: 'AG-003', area: '18.2 ha', status: 'In Progress', duration: '1.1h' },
                      { id: 'M-003', farm: 'Meadow Fields', drone: 'AG-005', area: '32.1 ha', status: 'Scheduled', duration: '-' },
                      { id: 'M-004', farm: 'Harvest Haven', drone: 'AG-002', area: '41.8 ha', status: 'Completed', duration: '3.2h' },
                      { id: 'M-005', farm: 'Golden Grain Co.', drone: 'AG-007', area: '28.7 ha', status: 'In Progress', duration: '0.8h' }
                    ].map((mission) => (
                      <tr key={mission.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{mission.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mission.farm}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mission.drone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mission.area}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            mission.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            mission.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {mission.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{mission.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Green;