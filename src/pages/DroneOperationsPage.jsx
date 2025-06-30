import React, { useEffect, useState } from 'react';
import { 
  Package, 
  Wrench, 
  Calendar, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Battery, 
  Camera, 
  Plane, 
  Droplets, 
  MapPin, 
  User,
  Eye,
  Edit,
  Plus,
  Filter,
  Search
} from 'lucide-react';
import DaaSSkeletonLoader from '../components/Skeleton';

export default function DroneOperationsPage() {
  const [activeSection, setActiveSection] = useState('inventory');
  const [searchTerm, setSearchTerm] = useState('');
   const [loading, setLoading] = useState(true);
  


   useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 5000); // 5 seconds loading time
  
      return () => clearTimeout(timer);
    }, []);

    
  if(loading){

   return <div className='min-h-screen'>
    <DaaSSkeletonLoader/>

   </div>   }

  // Dummy data for inventory
  const inventoryData = [
    {
      itemId: 'INV001',
      itemName: 'Li-Po Battery 4S 5000mAh',
      category: 'Battery',
      quantityAvailable: 12,
      lastRestocked: '2024-06-15',
      supplierName: 'PowerTech Solutions',
      lowStockThreshold: 5,
      status: 'In Stock'
    },
    {
      itemId: 'INV002',
      itemName: 'Carbon Fiber Propeller 15"',
      category: 'Propeller',
      quantityAvailable: 3,
      lastRestocked: '2024-06-10',
      supplierName: 'AeroGear Ltd',
      lowStockThreshold: 8,
      status: 'Low'
    },
    {
      itemId: 'INV003',
      itemName: '4K Gimbal Camera',
      category: 'Camera',
      quantityAvailable: 0,
      lastRestocked: '2024-05-28',
      supplierName: 'VisionTech Corp',
      lowStockThreshold: 2,
      status: 'Out of Stock'
    },
    {
      itemId: 'INV004',
      itemName: 'Organic Pesticide Concentrate',
      category: 'Pesticide',
      quantityAvailable: 25,
      lastRestocked: '2024-06-20',
      supplierName: 'Green Solutions Inc',
      lowStockThreshold: 10,
      status: 'In Stock'
    },
    {
      itemId: 'INV005',
      itemName: 'Multi-Rotor ESC 30A',
      category: 'Electronics',
      quantityAvailable: 6,
      lastRestocked: '2024-06-12',
      supplierName: 'ElectroMax',
      lowStockThreshold: 8,
      status: 'Low'
    }
  ];

  // Dummy data for maintenance
  const maintenanceData = [
    {
      maintenanceId: 'MNT001',
      droneId: 'DRN-001',
      model: 'AgriDrone Pro X1',
      lastServiceDate: '2024-05-15',
      nextServiceDue: '2024-07-15',
      status: 'Upcoming',
      technicianName: 'John Smith',
      issuesReported: 'None',
      serviceNotes: 'Routine inspection and calibration'
    },
    {
      maintenanceId: 'MNT002',
      droneId: 'DRN-002',
      model: 'SurveyMaster 4K',
      lastServiceDate: '2024-06-01',
      nextServiceDue: '2024-06-25',
      status: 'Overdue',
      technicianName: 'Sarah Johnson',
      issuesReported: 'GPS calibration issues',
      serviceNotes: 'Requires GPS module replacement'
    },
    {
      maintenanceId: 'MNT003',
      droneId: 'DRN-003',
      model: 'CropGuard Elite',
      lastServiceDate: '2024-06-22',
      nextServiceDue: '2024-08-22',
      status: 'Completed',
      technicianName: 'Mike Davis',
      issuesReported: 'Battery degradation',
      serviceNotes: 'Battery replaced, all systems optimal'
    },
    {
      maintenanceId: 'MNT004',
      droneId: 'DRN-004',
      model: 'AgriDrone Pro X2',
      lastServiceDate: '2024-04-10',
      nextServiceDue: '2024-07-02',
      status: 'Upcoming',
      technicianName: 'Emily Wilson',
      issuesReported: 'Camera gimbal drift',
      serviceNotes: 'Scheduled for gimbal recalibration'
    },
    {
      maintenanceId: 'MNT005',
      droneId: 'DRN-005',
      model: 'SprayMaster Pro',
      lastServiceDate: '2024-06-18',
      nextServiceDue: '2024-09-18',
      status: 'Completed',
      technicianName: 'Robert Chen',
      issuesReported: 'Spray nozzle blockage',
      serviceNotes: 'Nozzles cleaned and replaced'
    }
  ];

  // Dummy data for calendar/missions
  const missionData = [
    {
      eventId: 'EVT001',
      title: 'Wheat Field Survey - North Farm',
      date: '2024-06-28',
      startTime: '08:00',
      endTime: '10:30',
      location: 'North Farm Block A-12',
      droneId: 'DRN-001',
      assignedPilot: 'Alex Rodriguez',
      serviceType: 'DAAS'
    },
    {
      eventId: 'EVT002',
      title: 'Pesticide Application - East Fields',
      date: '2024-06-29',
      startTime: '06:00',
      endTime: '09:00',
      location: 'East Fields Section 3-7',
      droneId: 'DRN-003',
      assignedPilot: 'Maria Santos',
      serviceType: 'Go Green'
    },
    {
      eventId: 'EVT003',
      title: 'Irrigation Assessment',
      date: '2024-06-30',
      startTime: '14:00',
      endTime: '16:00',
      location: 'Central Irrigation Zone',
      droneId: 'DRN-002',
      assignedPilot: 'David Kim',
      serviceType: 'DAAS'
    },
    {
      eventId: 'EVT004',
      title: 'Crop Health Monitoring',
      date: '2024-07-01',
      startTime: '07:30',
      endTime: '11:00',
      location: 'South Farm Organic Section',
      droneId: 'DRN-004',
      assignedPilot: 'Lisa Thompson',
      serviceType: 'Go Green'
    },
    {
      eventId: 'EVT005',
      title: 'Boundary Mapping Survey',
      date: '2024-07-02',
      startTime: '09:00',
      endTime: '12:00',
      location: 'Property Boundary Northwest',
      droneId: 'DRN-005',
      assignedPilot: 'James Wilson',
      serviceType: 'DAAS'
    }
  ];

  const getStatusColor = (status, type) => {
    const colors = {
      inventory: {
        'In Stock': 'bg-green-100 text-green-800',
        'Low': 'bg-yellow-100 text-yellow-800',
        'Out of Stock': 'bg-red-100 text-red-800'
      },
      maintenance: {
        'Upcoming': 'bg-blue-100 text-blue-800',
        'Completed': 'bg-green-100 text-green-800',
        'Overdue': 'bg-red-100 text-red-800'
      },
      service: {
        'Go Green': 'bg-green-100 text-green-800',
        'DAAS': 'bg-blue-100 text-blue-800'
      }
    };
    return colors[type]?.[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status, type) => {
    if (type === 'inventory') {
      switch (status) {
        case 'In Stock': return <CheckCircle className="w-4 h-4" />;
        case 'Low': return <AlertTriangle className="w-4 h-4" />;
        case 'Out of Stock': return <AlertTriangle className="w-4 h-4" />;
        default: return null;
      }
    }
    if (type === 'maintenance') {
      switch (status) {
        case 'Upcoming': return <Clock className="w-4 h-4" />;
        case 'Completed': return <CheckCircle className="w-4 h-4" />;
        case 'Overdue': return <AlertTriangle className="w-4 h-4" />;
        default: return null;
      }
    }
    return null;
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Battery': return <Battery className="w-4 h-4" />;
      case 'Propeller': return <Plane className="w-4 h-4" />;
      case 'Camera': return <Camera className="w-4 h-4" />;
      case 'Pesticide': return <Droplets className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const sections = [
    { id: 'inventory', label: 'Inventory Management', icon: Package },
    { id: 'maintenance', label: 'Maintenance Schedule', icon: Wrench },
    { id: 'calendar', label: 'Mission Calendar', icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Drone Operations Center</h1>
              <p className="text-gray-600">Comprehensive management system for drone fleet operations</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span>New Entry</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeSection === section.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <section.icon className="w-5 h-5" />
                <span>{section.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Inventory Section */}
        {activeSection === 'inventory' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Inventory Management</h2>
                <p className="text-gray-600">Track drone parts, components, and consumables</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Add Item</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Details</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supplier</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Restocked</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {inventoryData.map((item) => (
                      <tr key={item.itemId} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                {getCategoryIcon(item.category)}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{item.itemName}</div>
                              <div className="text-sm text-gray-500">ID: {item.itemId}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status, 'inventory')}`}>
                              {getStatusIcon(item.status, 'inventory')}
                              <span>{item.status}</span>
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {item.quantityAvailable} / {item.lowStockThreshold} threshold
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.supplierName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(item.lastRestocked).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Maintenance Section */}
        {activeSection === 'maintenance' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Maintenance Schedule</h2>
                <p className="text-gray-600">Monitor drone maintenance status and schedules</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Schedule Service</span>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drone Info</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technician</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issues & Notes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Dates</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {maintenanceData.map((maintenance) => (
                      <tr key={maintenance.maintenanceId} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                                <Plane className="w-5 h-5 text-orange-600" />
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{maintenance.model}</div>
                              <div className="text-sm text-gray-500">ID: {maintenance.droneId}</div>
                              <div className="text-xs text-gray-400">MNT: {maintenance.maintenanceId}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(maintenance.status, 'maintenance')}`}>
                            {getStatusIcon(maintenance.status, 'maintenance')}
                            <span>{maintenance.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-8 w-8">
                              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-600" />
                              </div>
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">{maintenance.technicianName}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">{maintenance.issuesReported}</div>
                          <div className="text-xs text-gray-500 mt-1">{maintenance.serviceNotes}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div>Last: {new Date(maintenance.lastServiceDate).toLocaleDateString()}</div>
                          <div>Next: {new Date(maintenance.nextServiceDue).toLocaleDateString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Calendar Section */}
        {activeSection === 'calendar' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Mission Calendar</h2>
                <p className="text-gray-600">Scheduled drone missions and operations</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Schedule Mission</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {missionData.map((mission) => (
                <div key={mission.eventId} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{mission.title}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(mission.serviceType, 'service')}`}>
                          {mission.serviceType}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(mission.date).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{mission.startTime} - {mission.endTime}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{mission.location}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Plane className="w-4 h-4" />
                      <span>Drone: {mission.droneId}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      <span>Pilot: {mission.assignedPilot}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">ID: {mission.eventId}</span>
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}