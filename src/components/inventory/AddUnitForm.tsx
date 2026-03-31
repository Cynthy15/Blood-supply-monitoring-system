import { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Droplet, Calendar, MapPin, Hash } from 'lucide-react';
import styles from './AddUnitForm.module.css';

interface AddUnitFormProps {
  onCancel: () => void;
  onSubmit: (data: any) => void;
}

export function AddUnitForm({ onCancel, onSubmit }: AddUnitFormProps) {
  const [formData, setFormData] = useState({
    unitId: `RBC-${Math.floor(Math.random() * 10000)}`,
    bloodType: 'O+',
    volume: 450,
    collectionDate: new Date().toISOString().split('T')[0],
    expiryDate: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    storageLocation: 'Kigali Main Center',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card title="Register New Blood Unit" subtitle="Enter details for the collected blood donation" className={styles.formCard}>
      <form onSubmit={handleSubmit} className={styles.form}>
        
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Unit ID Number</label>
            <div className={styles.inputWrapper}>
              <Hash size={16} className={styles.icon} />
              <input type="text" name="unitId" value={formData.unitId} onChange={handleChange} required />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label>Blood Type</label>
            <div className={styles.inputWrapper}>
              <Droplet size={16} className={styles.icon} />
              <select name="bloodType" value={formData.bloodType} onChange={handleChange} required>
                <option value="O+">O Positive (O+)</option>
                <option value="O-">O Negative (O-)</option>
                <option value="A+">A Positive (A+)</option>
                <option value="A-">A Negative (A-)</option>
                <option value="B+">B Positive (B+)</option>
                <option value="B-">B Negative (B-)</option>
                <option value="AB+">AB Positive (AB+)</option>
                <option value="AB-">AB Negative (AB-)</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Collection Date</label>
            <div className={styles.inputWrapper}>
              <Calendar size={16} className={styles.icon} />
              <input type="date" name="collectionDate" value={formData.collectionDate} onChange={handleChange} required />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Expiry Date</label>
            <div className={styles.inputWrapper}>
              <Calendar size={16} className={styles.icon} />
              <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
            </div>
            <span className={styles.helperText}>Standard blood shelf life is 35 days.</span>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Volume (ml)</label>
            <input type="number" name="volume" value={formData.volume} onChange={handleChange} className={styles.standardInput} required />
          </div>

          <div className={styles.formGroup}>
            <label>Storage Location</label>
            <div className={styles.inputWrapper}>
              <MapPin size={16} className={styles.icon} />
              <select name="storageLocation" value={formData.storageLocation} onChange={handleChange} required>
                <option value="Kigali Main Center">Kigali Main Center</option>
                <option value="Huye Regional Center">Huye Regional Center</option>
                <option value="Rwanda Military Hospital Bank">Rwanda Military Hospital Bank</option>
                <option value="CHUK Blood Bank">CHUK Blood Bank</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>
          <Button type="submit" variant="primary">Register Unit</Button>
        </div>
      </form>
    </Card>
  );
}
