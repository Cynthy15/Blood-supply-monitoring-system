import { Activity, AlertTriangle, Droplet, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import styles from './Dashboard.module.css';

const bloodTypes = [
  { type: 'O+', units: 450, status: 'safe', trend: '+12%' },
  { type: 'O-', units: 85, status: 'warning', trend: '-5%' },
  { type: 'A+', units: 320, status: 'safe', trend: '+8%' },
  { type: 'A-', units: 45, status: 'danger', trend: '-15%' },
  { type: 'B+', units: 210, status: 'safe', trend: '+2%' },
  { type: 'B-', units: 30, status: 'danger', trend: '-20%' },
  { type: 'AB+', units: 150, status: 'safe', trend: '+5%' },
  { type: 'AB-', units: 15, status: 'danger', trend: '-10%' },
];

const recentAlerts = [
  { id: 1, hospital: 'CHUK', type: 'O-', urgency: 'Critical', time: '10 mins ago' },
  { id: 2, hospital: 'King Faisal Hospital', type: 'AB-', urgency: 'High', time: '1 hour ago' },
  { id: 3, hospital: 'Muhima Maternity', type: 'A-', urgency: 'Critical', time: '2 hours ago' },
];

export function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard Overview</h1>
          <p className={styles.subtitle}>Real-time Blood Supply Flow Monitoring System</p>
        </div>
        <div className={styles.headerActions}>
          <Button variant="secondary" icon={<TrendingUp size={16} />}>Generate Report</Button>
          <Button variant="primary" icon={<Droplet size={16} />}>Register New Donation</Button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <div className={styles.statContent}>
            <div className={styles.statIconWrapper} style={{ backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary)' }}>
              <Droplet size={24} />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Total Units Available</p>
              <h2 className={styles.statValue}>1,290</h2>
              <p className={styles.statSubInfo}><span className={styles.positive}>↑ 4.5%</span> vs last week</p>
            </div>
          </div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statContent}>
            <div className={styles.statIconWrapper} style={{ backgroundColor: 'var(--color-warning-light)', color: 'var(--color-warning)' }}>
              <Activity size={24} />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Pending Requests</p>
              <h2 className={styles.statValue}>24</h2>
              <p className={styles.statSubInfo}>From 8 different hospitals</p>
            </div>
          </div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statContent}>
            <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(0, 229, 255, 0.1)', color: 'var(--color-accent)' }}>
              <AlertTriangle size={24} />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statLabel}>Expiring Soon (Next 7 Days)</p>
              <h2 className={styles.statValue}>115</h2>
              <p className={styles.statSubInfo}><span className={styles.negative}>↑ +12</span> units added today</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className={styles.mainGrid}>
        <Card title="Current Blood Stock" subtitle="Live inventory across all RBC centers" className={styles.stockCard}>
          <div className={styles.bloodGrid}>
            {bloodTypes.map((blood) => (
              <div key={blood.type} className={styles.bloodItem}>
                <div className={styles.bloodHeader}>
                  <div className={styles.bloodTypeIcon}>{blood.type}</div>
                  <Badge variant={blood.status === 'safe' ? 'success' : blood.status as 'warning' | 'danger'} dot>
                    {blood.status === 'safe' ? 'Adequate' : blood.status === 'warning' ? 'Low' : 'Critical'}
                  </Badge>
                </div>
                <div className={styles.bloodDetails}>
                  <p className={styles.bloodUnits}>{blood.units} <span>units</span></p>
                  <p className={styles.bloodTrend}>{blood.trend}</p>
                </div>
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill} 
                    style={{ 
                      width: `${Math.min(100, (blood.units / 500) * 100)}%`,
                      backgroundColor: blood.status === 'safe' ? 'var(--color-success)' : blood.status === 'warning' ? '#E9C46A' : 'var(--color-danger)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Emergency Requests" subtitle="Critical dispatches needed immediately" className={styles.urgentCard} noPadding>
          <div className={styles.urgentList}>
            {recentAlerts.map(alert => (
              <div key={alert.id} className={styles.urgentItem}>
                <div className={styles.urgentIcon}>
                  <AlertTriangle size={20} color="var(--color-danger)" />
                </div>
                <div className={styles.urgentInfo}>
                  <h4>{alert.hospital}</h4>
                  <p>Needs <strong>{alert.type}</strong> blood units</p>
                </div>
                <div className={styles.urgentMeta}>
                  <Badge variant="danger">{alert.urgency}</Badge>
                  <span className={styles.time}>{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cardFooter}>
            <Button variant="ghost" fullWidth>View All Requests</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
