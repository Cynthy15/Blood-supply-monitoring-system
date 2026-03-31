import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { User, Bell, Shield, MapPin, Mail, Phone, Lock } from 'lucide-react';
import styles from './Settings.module.css';

export function Settings() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className={styles.settings}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>System Settings</h1>
          <p className={styles.subtitle}>Manage your profile, notifications, and security preferences.</p>
        </div>
        <Button variant="primary">Save Changes</Button>
      </div>

      <div className={styles.layout}>
        {/* Settings Sidebar */}
        <div className={styles.sidebar}>
          <button 
            className={`${styles.tab} ${activeTab === 'general' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('general')}
          >
            <User size={18} />
            <span>General Profile</span>
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'notifications' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} />
            <span>Notifications</span>
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'security' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Shield size={18} />
            <span>Security</span>
          </button>
        </div>

        {/* Settings Content */}
        <div className={styles.content}>
          
          {activeTab === 'general' && (
            <Card title="General Profile" subtitle="Update your facility's contact and basic information" className={styles.sectionCard}>
              <div className={styles.formGroup}>
                <div className={styles.inputRow}>
                  <div className={styles.inputField}>
                    <label>Facility Name</label>
                    <div className={styles.inputWrapper}>
                      <User size={16} className={styles.inputIcon} />
                      <input type="text" defaultValue="RBC Main Hub" />
                    </div>
                  </div>
                  <div className={styles.inputField}>
                    <label>Facility Type</label>
                    <select defaultValue="central">
                      <option value="central">Central Blood Bank</option>
                      <option value="regional">Regional Hub</option>
                      <option value="hospital">Hospital</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.inputField}>
                    <label>Email Address</label>
                    <div className={styles.inputWrapper}>
                      <Mail size={16} className={styles.inputIcon} />
                      <input type="email" defaultValue="admin@rbc.gov.rw" />
                    </div>
                  </div>
                  <div className={styles.inputField}>
                    <label>Phone Number</label>
                    <div className={styles.inputWrapper}>
                      <Phone size={16} className={styles.inputIcon} />
                      <input type="tel" defaultValue="+250 788 123 456" />
                    </div>
                  </div>
                </div>

                <div className={styles.inputField}>
                  <label>Physical Address</label>
                  <div className={styles.inputWrapper}>
                    <MapPin size={16} className={styles.inputIcon} />
                    <input type="text" defaultValue="KG 17 Ave, Kigali, Rwanda" />
                  </div>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card title="Notification Preferences" subtitle="Control how and when you receive alerts" className={styles.sectionCard}>
              <div className={styles.toggleList}>
                <div className={styles.toggleItem}>
                  <div className={styles.toggleInfo}>
                    <h4>Emergency Blood Requests</h4>
                    <p>Receive immediate alerts for critical blood shortages at hospitals.</p>
                  </div>
                  <label className={styles.switch}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.slider}></span>
                  </label>
                </div>

                <div className={styles.toggleItem}>
                  <div className={styles.toggleInfo}>
                    <h4>Expiry Warnings</h4>
                    <p>Get notified when blood units are within 7 days of expiration.</p>
                  </div>
                  <label className={styles.switch}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.slider}></span>
                  </label>
                </div>

                <div className={styles.toggleItem}>
                  <div className={styles.toggleInfo}>
                    <h4>Dispatch Updates</h4>
                    <p>Alerts when a requested blood unit is dispatched and delivered.</p>
                  </div>
                  <label className={styles.switch}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.slider}></span>
                  </label>
                </div>

                <div className={styles.toggleItem}>
                  <div className={styles.toggleInfo}>
                    <h4>Email Digest</h4>
                    <p>Receive a daily summary of inventory status and pending requests.</p>
                  </div>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card title="Security Settings" subtitle="Keep your account and system access secure" className={styles.sectionCard}>
              <div className={styles.securitySection}>
                <h3>Change Password</h3>
                <div className={styles.formGroup}>
                  <div className={styles.inputField}>
                    <label>Current Password</label>
                    <div className={styles.inputWrapper}>
                      <Lock size={16} className={styles.inputIcon} />
                      <input type="password" placeholder="Enter current password" />
                    </div>
                  </div>
                  <div className={styles.inputRow}>
                    <div className={styles.inputField}>
                      <label>New Password</label>
                      <div className={styles.inputWrapper}>
                        <Lock size={16} className={styles.inputIcon} />
                        <input type="password" placeholder="New password" />
                      </div>
                    </div>
                    <div className={styles.inputField}>
                      <label>Confirm Password</label>
                      <div className={styles.inputWrapper}>
                        <Lock size={16} className={styles.inputIcon} />
                        <input type="password" placeholder="Confirm new password" />
                      </div>
                    </div>
                  </div>
                  <Button variant="secondary" className={styles.mt}>Update Password</Button>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.securitySection}>
                <h3>Two-Factor Authentication (2FA)</h3>
                <p className={styles.securityDesc}>
                  Add an extra layer of security to your account by requiring an authentication code in addition to your password.
                </p>
                <div className={styles.twoFactorBox}>
                  <div className={styles.twoFactorStatus}>
                    <Shield size={24} className={styles.iconSafe} />
                    <div>
                      <h4>2FA is currently Disabled</h4>
                      <p>Recommendations: Enable 2FA for administrative accounts.</p>
                    </div>
                  </div>
                  <Button variant="primary">Enable 2FA</Button>
                </div>
              </div>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
}
