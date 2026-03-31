import { Bell, Search } from 'lucide-react';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <Search size={18} className={styles.searchIcon} />
        <input 
          type="text" 
          placeholder="Search blood units, hospitals, or requests..." 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.actions}>
        <button className={styles.iconBtn}>
          <Bell size={20} />
          <span className={styles.badge}>3</span>
        </button>

        <div className={styles.profile}>
          <div className={styles.avatar}>DR</div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Dr. Rutaganda</span>
            <span className={styles.userRole}>RBC Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}
