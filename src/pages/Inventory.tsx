import { useState } from 'react';
import { Filter, Plus, Search, ArrowLeft } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { AddUnitForm } from '../components/inventory/AddUnitForm';
import styles from './Inventory.module.css';

const inventoryData = [
  { id: 'BU-10492', type: 'O+', volume: '450ml', collection: '2023-10-12', expiry: '2023-11-23', location: 'RBC Main Hub', status: 'Available' },
  { id: 'BU-10493', type: 'A-', volume: '450ml', collection: '2023-10-10', expiry: '2023-11-21', location: 'CHUK Hospital', status: 'Reserved' },
  { id: 'BU-10494', type: 'B+', volume: '450ml', collection: '2023-09-28', expiry: '2023-11-09', location: 'RBC Regional South', status: 'Expiring Soon' },
  { id: 'BU-10495', type: 'O-', volume: '450ml', collection: '2023-10-15', expiry: '2023-11-26', location: 'RBC Main Hub', status: 'Available' },
  { id: 'BU-10496', type: 'AB+', volume: '450ml', collection: '2023-09-15', expiry: '2023-10-27', location: 'King Faisal', status: 'Expired' },
  { id: 'BU-10497', type: 'O+', volume: '450ml', collection: '2023-10-18', expiry: '2023-11-29', location: 'RBC Main Hub', status: 'Available' },
  { id: 'BU-10498', type: 'A+', volume: '450ml', collection: '2023-10-11', expiry: '2023-11-22', location: 'RBC Regional East', status: 'Available' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Available': return <Badge variant="success">{status}</Badge>;
    case 'Reserved': return <Badge variant="info">{status}</Badge>;
    case 'Expiring Soon': return <Badge variant="warning">{status}</Badge>;
    case 'Expired': return <Badge variant="danger">{status}</Badge>;
    default: return <Badge>{status}</Badge>;
  }
};

export function Inventory() {
  const [isAddingUnit, setIsAddingUnit] = useState(false);

  const handleAddSubmit = (data: any) => {
    console.log("New unit data:", data);
    setIsAddingUnit(false);
    // In a real app, you would update the inventoryData state here
  };

  if (isAddingUnit) {
    return (
      <div className={styles.inventory}>
        <div className={styles.header}>
          <div>
             <Button variant="ghost" onClick={() => setIsAddingUnit(false)} icon={<ArrowLeft size={18} />}>
               Back to Inventory
             </Button>
          </div>
        </div>
        <AddUnitForm onCancel={() => setIsAddingUnit(false)} onSubmit={handleAddSubmit} />
      </div>
    );
  }

  return (
    <div className={styles.inventory}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Blood Inventory Management</h1>
          <p className={styles.subtitle}>Track and manage blood units across all storage hubs</p>
        </div>
        <Button variant="primary" icon={<Plus size={18} />} onClick={() => setIsAddingUnit(true)}>
          Add New Blood Unit
        </Button>
      </div>

      <Card className={styles.tableCard} noPadding>
        <div className={styles.tableToolbar}>
          <div className={styles.searchBox}>
            <Search size={18} className={styles.icon} />
            <input type="text" placeholder="Search by Unit ID, Type, or Location..." className={styles.input} />
          </div>
          <div className={styles.filters}>
            <Button variant="ghost" icon={<Filter size={18} />}>Filters</Button>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Unit ID</th>
                <th>Blood Type</th>
                <th>Volume</th>
                <th>Collection Date</th>
                <th>Expiry Date</th>
                <th>Storage Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((unit) => (
                <tr key={unit.id}>
                  <td className={styles.unitId}>{unit.id}</td>
                  <td>
                    <span className={styles.bloodType}>{unit.type}</span>
                  </td>
                  <td>{unit.volume}</td>
                  <td>{unit.collection}</td>
                  <td>
                    <span className={unit.status === 'Expiring Soon' || unit.status === 'Expired' ? styles.dangerText : ''}>
                      {unit.expiry}
                    </span>
                  </td>
                  <td>{unit.location}</td>
                  <td>{getStatusBadge(unit.status)}</td>
                  <td>
                    <button className={styles.actionBtn}>View</button>
                    <button className={styles.actionBtn}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className={styles.pagination}>
          <p className={styles.pageInfo}>Showing <strong>1</strong> to <strong>7</strong> of <strong>1,290</strong> entries</p>
          <div className={styles.pageControls}>
            <Button variant="ghost" size="sm" disabled>Previous</Button>
            <Button variant="primary" size="sm">1</Button>
            <Button variant="ghost" size="sm">2</Button>
            <Button variant="ghost" size="sm">3</Button>
            <Button variant="ghost" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
