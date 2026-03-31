import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CheckCircle2, MapPin, Truck } from 'lucide-react';
import styles from './Requests.module.css';

const requestsData = [
  { id: 'REQ-8739', hospital: 'Muhima Maternity', urgency: 'Critical', bloodType: 'AB-', units: 4, status: 'Pending', time: '10 mins ago', distance: '3.2 km' },
  { id: 'REQ-8738', hospital: 'CHUK', urgency: 'High', bloodType: 'O+', units: 10, status: 'Processing', time: '30 mins ago', distance: '1.5 km' },
  { id: 'REQ-8737', hospital: 'King Faisal', urgency: 'Routine', bloodType: 'A+', units: 20, status: 'Dispatched', time: '2 hours ago', distance: '5.8 km' },
  { id: 'REQ-8736', hospital: 'Kibagabaga Hospital', urgency: 'Routine', bloodType: 'O-', units: 5, status: 'Delivered', time: '6 hours ago', distance: '7.1 km' },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Pending': return <Badge variant="danger">{status}</Badge>;
    case 'Processing': return <Badge variant="warning">{status}</Badge>;
    case 'Dispatched': return <Badge variant="info">{status}</Badge>;
    case 'Delivered': return <Badge variant="success">{status}</Badge>;
    default: return <Badge>{status}</Badge>;
  }
};

export function Requests() {
  return (
    <div className={styles.requests}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Hospital Requests & Dispatch</h1>
          <p className={styles.subtitle}>Manage blood requisitions, track delivery pipelines, and coordinate emergency responses.</p>
        </div>
        <div className={styles.tabsContainer}>
          <button className={`${styles.tab} ${styles.activeTab}`}>Active Requests (3)</button>
          <button className={styles.tab}>History</button>
        </div>
      </div>

      <div className={styles.layoutGrid}>
        {/* Requests List */}
        <div className={styles.requestsList}>
          {requestsData.map(req => (
            <Card key={req.id} className={`${styles.requestCard} ${req.status === 'Pending' ? styles.urgentBorder : ''}`}>
              <div className={styles.reqHeader}>
                <div className={styles.reqId}>
                  <span>{req.id}</span>
                  <span className={styles.timeLabel}>{req.time}</span>
                </div>
                {getStatusBadge(req.status)}
              </div>
              
              <div className={styles.reqBody}>
                <h3 className={styles.hospitalName}>{req.hospital}</h3>
                <div className={styles.distanceInfo}>
                  <MapPin size={14} />
                  <span>{req.distance} from RBC Main Hub</span>
                </div>
                
                <div className={styles.bloodReqInfo}>
                  <div className={styles.bloodBadgeContainer}>
                    <div className={styles.bloodTypeMini}>{req.bloodType}</div>
                    <span className={styles.unitsCount}>{req.units} Units</span>
                  </div>
                  <Badge variant={req.urgency === 'Critical' ? 'danger' : req.urgency === 'High' ? 'warning' : 'default'} dot>
                    {req.urgency} Priority
                  </Badge>
                </div>
              </div>

              <div className={styles.reqFooter}>
                <Button variant={req.status === 'Pending' ? 'primary' : 'ghost'} fullWidth>
                  {req.status === 'Pending' ? 'Process Request' : 'View Details'}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Pipeline / Dispatch Dashboard */}
        <div className={styles.dispatchView}>
          <Card title="Active Dispatch Tracking" subtitle="Real-time delivery monitoring" className={styles.dispatchCard}>
            <div className={styles.pipeline}>
              
              <div className={styles.pipelineStep}>
                <div className={styles.stepIconCompleted}><CheckCircle2 size={20} /></div>
                <div className={styles.stepContent}>
                  <h4>Request Approved</h4>
                  <p>King Faisal Hospital • A+ (20 Units)</p>
                  <span className={styles.stepTime}>10:15 AM</span>
                </div>
              </div>

              <div className={styles.pipelineStep}>
                <div className={styles.stepIconCompleted}><CheckCircle2 size={20} /></div>
                <div className={styles.stepContent}>
                  <h4>Blood Packed & Ready</h4>
                  <p>Cold chain validation successful (4°C)</p>
                  <span className={styles.stepTime}>10:45 AM</span>
                </div>
              </div>

              <div className={styles.pipelineStep}>
                <div className={styles.stepIconActive}>
                  <Truck size={20} />
                  <span className={styles.ping}></span>
                  <span className={styles.pingCore}></span>
                </div>
                <div className={styles.stepContent}>
                  <h4>In Transit (RBC Vehicle 4)</h4>
                  <p>ETA: 15 minutes • Driver: John T.</p>
                  <span className={styles.stepTime}>Current Status</span>
                </div>
              </div>

              <div className={styles.pipelineStep}>
                <div className={styles.stepIconPending}><MapPin size={20} /></div>
                <div className={styles.stepContent}>
                  <h4 className={styles.pendingText}>Hospital Delivery & Confirmation</h4>
                  <p className={styles.pendingText}>Awaiting scan at King Faisal Hospital receiver bay.</p>
                </div>
              </div>

            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
