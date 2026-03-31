import { Droplet, Shield, Activity, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import styles from './Landing.module.css';

interface LandingProps {
  onLogin: () => void;
}

export function Landing({ onLogin }: LandingProps) {
  return (
    <div className={styles.landingContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Droplet size={24} strokeWidth={2.5} />
          </div>
          <div className={styles.logoText}>
            RBC<span>BloodFlow</span>
          </div>
        </div>
        <div className={styles.navActions}>
          <Button variant="ghost" className={styles.desktopOnly}>About Us</Button>
          <Button variant="ghost" className={styles.desktopOnly}>Contact Support</Button>
          <Button variant="primary" onClick={onLogin}>Staff Login</Button>
        </div>
      </nav>

      <main className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.pulse}></span>
            Live Monitoring System Active
          </div>
          <h1 className={styles.headline}>
            Revolutionizing Blood 
            <span className={styles.highlight}> Supply Visibility</span>
          </h1>
          <p className={styles.subHeadline}>
            A centralized digital platform connecting hospitals and the Rwanda Biomedical Centre (RBC) for real-time blood inventory tracking and rapid emergency dispatch.
          </p>
          <div className={styles.ctaGroup}>
            <Button variant="primary" className={styles.ctaButton} onClick={onLogin}>
              Access Dashboard <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" className={styles.ctaButton}>
              Read Documentation
            </Button>
          </div>
        </div>

        <div className={styles.featuresSection}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Activity size={28} />
            </div>
            <h3>Real-Time Tracking</h3>
            <p>Monitor blood stock levels across all RBC distribution hubs instantly.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Shield size={28} />
            </div>
            <h3>Secure Dispatch</h3>
            <p>End-to-end tracking for hospital requests from approval to physical delivery.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <Droplet size={28} />
            </div>
            <h3>Automated Alerts</h3>
            <p>Predictive warnings for critical shortages and near-expiry blood units.</p>
          </div>
        </div>
      </main>
      
      {/* Decorative background elements */}
      <div className={styles.glowTop}></div>
      <div className={styles.glowBottom}></div>
    </div>
  );
}
