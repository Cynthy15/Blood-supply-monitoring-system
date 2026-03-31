import type { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  noPadding?: boolean;
}

export function Card({ children, className = '', title, subtitle, action, noPadding = false }: CardProps) {
  return (
    <div className={`glass-panel ${styles.card} ${className}`}>
      {(title || subtitle || action) && (
        <div className={styles.header}>
          <div>
            {title && <h3 className={styles.title}>{title}</h3>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          {action && <div className={styles.action}>{action}</div>}
        </div>
      )}
      <div className={`${styles.body} ${noPadding ? styles.noPadding : ''}`}>
        {children}
      </div>
    </div>
  );
}
