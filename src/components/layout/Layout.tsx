import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  activeView: string;
  setActiveView: (view: string) => void;
  onLogout: () => void;
}

export function Layout({ children, activeView, setActiveView, onLogout }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar activeView={activeView} setActiveView={setActiveView} onLogout={onLogout} />
      <div className={styles.mainWrapper}>
        <Header />
        <main className={styles.content}>
          <div className="page-enter">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
