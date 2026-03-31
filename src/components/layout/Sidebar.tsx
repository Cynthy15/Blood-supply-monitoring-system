import { Activity, LayoutDashboard, Database, LogOut, Settings } from 'lucide-react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onLogout: () => void;
}

export function Sidebar({ activeView, setActiveView, onLogout }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'inventory', label: 'Inventory', icon: Database },
    { id: 'requests', label: 'Hospital Requests', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoIcon}>
          <Activity size={24} />
        </div>
        <div className={styles.logoText}>
          RBC<span>BloodFlow</span>
        </div>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeView === item.id ? styles.active : ''}`}
              onClick={() => setActiveView(item.id)}
            >
              <div className={styles.navIcon}>
                <Icon size={20} />
              </div>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <button className={styles.logoutBtn} onClick={onLogout}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
