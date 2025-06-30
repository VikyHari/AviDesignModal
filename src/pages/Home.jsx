import React, { useState, useEffect } from "react";
import {
  Plane,
  Zap,
  Building2,
  Activity,
  Calendar,
  TrendingUp,
  Eye,
  Clock,
  MapPin,
  Battery,
  Signal,
} from "lucide-react";
import { Skeleton } from "@mui/material";
import { toast } from "react-toastify";

import DaaSSkeletonLoader from "../components/Skeleton";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);



  const [liveCounts, setLiveCounts] = useState({
    flights: 1247,
    drones: 89,
    aircraft: 342,
    activeDrones: 23,
  });

  const recentFlights = [
    {
      id: "FL001",
      route: "NYC → LAX",
      status: "In Flight",
      time: "14:30",
      aircraft: "Boeing 737",
    },
    {
      id: "FL002",
      route: "CHI → MIA",
      status: "Landed",
      time: "13:45",
      aircraft: "Airbus A320",
    },
    {
      id: "FL003",
      route: "SEA → DEN",
      status: "Scheduled",
      time: "16:20",
      aircraft: "Boeing 777",
    },
    {
      id: "FL004",
      route: "ATL → BOS",
      status: "Delayed",
      time: "12:15",
      aircraft: "Embraer 190",
    },
  ];

  const dronePerformance = [
    {
      id: "DR001",
      name: "Patrol Drone Alpha",
      battery: 85,
      signal: 92,
      flightTime: "2h 34m",
      missions: 12,
      status: "Active",
      location: "Sector A-1",
      data: [
        { metric: "Average Speed", value: "45 km/h", trend: "+5%" },
        { metric: "Flight Hours", value: "847h", trend: "+12%" },
        { metric: "Mission Success", value: "96.8%", trend: "+2.1%" },
        { metric: "Maintenance Due", value: "72h", trend: "-" },
      ],
    },
    {
      id: "DR002",
      name: "Survey Drone Beta",
      battery: 67,
      signal: 88,
      flightTime: "1h 18m",
      missions: 8,
      status: "Charging",
      location: "Base Station",
      data: [
        { metric: "Coverage Area", value: "234 km²", trend: "+8%" },
        { metric: "Data Collected", value: "15.6 GB", trend: "+23%" },
        { metric: "Image Quality", value: "4K Ultra", trend: "-" },
        { metric: "Weather Resistance", value: "IP67", trend: "-" },
      ],
    },
    {
      id: "DR003",
      name: "Cargo Drone Gamma",
      battery: 43,
      signal: 95,
      flightTime: "45m",
      missions: 15,
      status: "Returning",
      location: "En Route",
      data: [
        { metric: "Payload Capacity", value: "25 kg", trend: "-" },
        { metric: "Delivery Success", value: "98.2%", trend: "+1.4%" },
        { metric: "Energy Efficiency", value: "87%", trend: "+3%" },
        { metric: "Route Optimization", value: "94%", trend: "+6%" },
      ],
    },
  ];

  const recentPlans = [
    {
      id: "PLN001",
      title: "Morning Patrol Route",
      type: "Surveillance",
      scheduled: "06:00",
      duration: "3h",
      status: "Active",
    },
    {
      id: "PLN002",
      title: "Cargo Delivery - Zone B",
      type: "Logistics",
      scheduled: "09:30",
      duration: "1h 30m",
      status: "Pending",
    },
    {
      id: "PLN003",
      title: "Emergency Response Drill",
      type: "Training",
      scheduled: "14:00",
      duration: "2h",
      status: "Completed",
    },
    {
      id: "PLN004",
      title: "Infrastructure Inspection",
      type: "Survey",
      scheduled: "16:45",
      duration: "2h 15m",
      status: "Scheduled",
    },
  ];

  const weeklyFlights = [
    { day: "Mon", flights: 156, drones: 23 },
    { day: "Tue", flights: 142, drones: 19 },
    { day: "Wed", flights: 167, drones: 27 },
    { day: "Thu", flights: 134, drones: 21 },
    { day: "Fri", flights: 189, drones: 31 },
    { day: "Sat", flights: 98, drones: 15 },
    { day: "Sun", flights: 87, drones: 12 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCounts((prev) => ({
        flights: prev.flights + Math.floor(Math.random() * 3) - 1,
        drones: prev.drones + Math.floor(Math.random() * 2) - 1,
        aircraft: prev.aircraft + Math.floor(Math.random() * 2) - 1,
        activeDrones: Math.max(
          0,
          prev.activeDrones + Math.floor(Math.random() * 3) - 1
        ),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  const StatCard = ({ title, value, icon: Icon, color, subtitle }) => (
    <div
      className="bg-white rounded-xl shadow-lg p-6 border-l-4"
      style={{ borderLeftColor: color }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div
          className="p-3 rounded-full"
          style={{ backgroundColor: color + "20" }}
        >
          <Icon size={24} style={{ color }} />
        </div>
      </div>
    </div>
  );

  const DataCard = ({ title, children, onViewAll }) => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <button
          onClick={onViewAll}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
        >
          <Eye size={16} />
          View All
        </button>
      </div>
      {children}
    </div>
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active":
      case "in flight":
        return "text-green-600 bg-green-100";
      case "landed":
      case "completed":
        return "text-blue-600 bg-blue-100";
      case "delayed":
      case "charging":
        return "text-yellow-600 bg-yellow-100";
      case "returning":
      case "pending":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <DaaSSkeletonLoader />
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Aviation Control Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time monitoring and analytics for flights, drones, and aircraft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Flights"
            value={liveCounts.flights.toLocaleString()}
            icon={Plane}
            color="#3B82F6"
            subtitle="Last 24 hours"
          />
          <StatCard
            title="Drone Fleet"
            value={liveCounts.drones}
            icon={Zap}
            color="#10B981"
            subtitle="Registered units"
          />
          <StatCard
            title="Aircraft"
            value={liveCounts.aircraft}
            icon={Building2}
            color="#F59E0B"
            subtitle="In network"
          />
          <StatCard
            title="Live Drones"
            value={liveCounts.activeDrones}
            icon={Activity}
            color="#EF4444"
            subtitle="Currently active"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DataCard
            title="Recent Flights"
            onViewAll={() => alert("Opening full flights data...")}
          >
            <div className="space-y-3">
              {recentFlights.map((flight) => (
                <div
                  key={flight.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Plane size={16} className="text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">
                        {flight.route}
                      </p>
                      <p className="text-sm text-gray-600">{flight.aircraft}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        flight.status
                      )}`}
                    >
                      {flight.status}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{flight.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard
            title="Weekly Flight Activity"
            onViewAll={() => alert("Opening detailed analytics...")}
          >
            <div className="space-y-4">
              {weeklyFlights.map((day) => (
                <div key={day.day} className="flex items-center gap-4">
                  <div className="w-12 text-sm font-medium text-gray-600">
                    {day.day}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(day.flights / 200) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">
                        {day.flights}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${(day.drones / 35) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">
                        {day.drones}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Flights</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Drones</span>
                </div>
              </div>
            </div>
          </DataCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <DataCard
            title="Recent Flight Plans"
            onViewAll={() => alert("Opening all flight plans...")}
          >
            <div className="space-y-3">
              {recentPlans.map((plan) => (
                <div
                  key={plan.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Calendar size={16} className="text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900">{plan.title}</p>
                      <p className="text-sm text-gray-600">
                        {plan.type} • {plan.duration}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        plan.status
                      )}`}
                    >
                      {plan.status}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">
                      {plan.scheduled}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>

          <DataCard
            title="Drone Fleet Overview"
            onViewAll={() => alert("Opening detailed drone analytics...")}
          >
            <div className="space-y-4">
              {dronePerformance.slice(0, 2).map((drone) => (
                <div key={drone.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Zap size={16} className="text-green-600" />
                      <div>
                        <p className="font-medium text-gray-900">
                          {drone.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {drone.location}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        drone.status
                      )}`}
                    >
                      {drone.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Battery size={14} className="text-gray-500" />
                      <span>{drone.battery}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Signal size={14} className="text-gray-500" />
                      <span>{drone.signal}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gray-500" />
                      <span>{drone.flightTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DataCard>
        </div>

        <DataCard
          title="Detailed Drone Performance Data"
          onViewAll={() => alert("Opening comprehensive drone data...")}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Drone
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Performance Metrics
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {dronePerformance.map((drone) => (
                  <tr
                    key={drone.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Zap size={16} className="text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {drone.name}
                          </p>
                          <p className="text-sm text-gray-600">{drone.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                          drone.status
                        )}`}
                      >
                        {drone.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-gray-500" />
                        <span className="text-sm text-gray-700">
                          {drone.location}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        {drone.data.slice(0, 2).map((metric, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-gray-600">
                              {metric.metric}:
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">
                                {metric.value}
                              </span>
                              {metric.trend !== "-" && (
                                <span
                                  className={`text-xs ${
                                    metric.trend.startsWith("+")
                                      ? "text-green-600"
                                      : "text-red-600"
                                  }`}
                                >
                                  {metric.trend}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                        <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                          View all {drone.data.length} metrics →
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium hover:bg-blue-200 transition-colors">
                          Monitor
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
                          Control
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DataCard>
      </div>
    </div>
  );
};

export default Dashboard;
