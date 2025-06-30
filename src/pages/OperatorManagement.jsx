import { useEffect, useState } from 'react';
import { Plus, Search, Edit2, Eye, UserX } from 'lucide-react';
import DaaSSkeletonLoader from '../components/Skeleton';

const OperatorManagement = () => {
  
  const initialOperators = [
    {
      operatorId: 'OP001',
      fullName: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      mobileNumber: '+1 (555) 123-4567',
      certificationLevel: 'Certified Commercial',
      assignedDrones: ['DRN001', 'DRN005', 'DRN008'],
      licenseExpiryDate: '2024-12-15',
      status: 'Active'
    },
    {
      operatorId: 'OP002',
      fullName: 'Michael Chen',
      email: 'michael.chen@example.com',
      mobileNumber: '+1 (555) 987-6543',
      certificationLevel: 'Advanced',
      assignedDrones: ['DRN003'],
      licenseExpiryDate: '2023-11-30',
      status: 'License Expired'
    },
    {
      operatorId: 'OP003',
      fullName: 'Emma Rodriguez',
      email: 'emma.rod@example.com',
      mobileNumber: '+1 (555) 456-7890',
      certificationLevel: 'Intermediate',
      assignedDrones: ['DRN002', 'DRN007'],
      licenseExpiryDate: '2024-05-20',
      status: 'Active'
    },
    {
      operatorId: 'OP004',
      fullName: 'David Kim',
      email: 'david.kim@example.com',
      mobileNumber: '+1 (555) 234-5678',
      certificationLevel: 'Basic',
      assignedDrones: [],
      licenseExpiryDate: '2024-03-10',
      status: 'Inactive'
    },
    {
      operatorId: 'OP005',
      fullName: 'Olivia Martinez',
      email: 'olivia.m@example.com',
      mobileNumber: '+1 (555) 345-6789',
      certificationLevel: 'Advanced',
      assignedDrones: ['DRN004', 'DRN006'],
      licenseExpiryDate: '2025-01-25',
      status: 'Active'
    }
  ];

  const [operators, setOperators] = useState(initialOperators);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCertification, setFilterCertification] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

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

  const filteredOperators = operators.filter(operator => {
    const matchesSearch = operator.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         operator.operatorId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCertification = filterCertification === 'All' || 
                                operator.certificationLevel === filterCertification;
    const matchesStatus = filterStatus === 'All' || operator.status === filterStatus;
    
    return matchesSearch && matchesCertification && matchesStatus;
  });

  const StatusBadge = ({ status }) => {
    let bgColor = '';
    let textColor = '';
    
    switch(status) {
      case 'Active':
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
        break;
      case 'Inactive':
        bgColor = 'bg-gray-100';
        textColor = 'text-gray-800';
        break;
      case 'License Expired':
        bgColor = 'bg-red-100';
        textColor = 'text-red-800';
        break;
      default:
        bgColor = 'bg-blue-100';
        textColor = 'text-blue-800';
    }
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
        {status}
      </span>
    );
  };

  const ActionButtons = ({ operatorId }) => {
    return (
      <div className="flex space-x-2">
        <button 
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
          title="Edit"
          onClick={() => handleEdit(operatorId)}
        >
          <Edit2 className="w-4 h-4" />
        </button>
        <button 
          className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
          title="View Profile"
          onClick={() => handleViewProfile(operatorId)}
        >
          <Eye className="w-4 h-4" />
        </button>
        <button 
          className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
          title="Deactivate"
          onClick={() => handleDeactivate(operatorId)}
        >
          <UserX className="w-4 h-4" />
        </button>
      </div>
    );
  };

  const handleEdit = (operatorId) => {
    console.log(`Edit operator ${operatorId}`);
  };

  const handleViewProfile = (operatorId) => {
    console.log(`View profile for operator ${operatorId}`);
  };

  const handleDeactivate = (operatorId) => {
    console.log(`Deactivate operator ${operatorId}`);
  };

  const handleAddNew = () => {
    console.log('Add new operator');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Operator Management</h1>
          <p className="text-gray-600">Manage all registered drone operators and their certifications</p>
        </div>
        <button 
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center"
          onClick={handleAddNew}
        >
          <Plus className="w-4 h-4 mr-2" /> Add New Operator
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div>
            <select
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={filterCertification}
              onChange={(e) => setFilterCertification(e.target.value)}
            >
              <option value="All">All Certification Levels</option>
              <option value="Basic">Basic</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Certified Commercial">Certified Commercial</option>
            </select>
          </div>

          <div>
            <select
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="License Expired">License Expired</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operator ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Drones</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">License Expiry</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOperators.length > 0 ? (
                filteredOperators.map((operator) => (
                  <tr key={operator.operatorId} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{operator.operatorId}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{operator.fullName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div>{operator.email}</div>
                      <div>{operator.mobileNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{operator.certificationLevel}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {operator.assignedDrones.length > 0 ? (
                        <div className="flex flex-wrap gap-1">
                          {operator.assignedDrones.map(drone => (
                            <span key={drone} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                              {drone}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-gray-400">None assigned</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(operator.licenseExpiryDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={operator.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ActionButtons operatorId={operator.operatorId} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                    No operators found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OperatorManagement;