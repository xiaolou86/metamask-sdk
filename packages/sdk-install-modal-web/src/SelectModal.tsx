import React, { CSSProperties, useState } from 'react';
import { WidgetWrapper } from './WidgetWrapper';
import CloseButton from './components/CloseButton';
import ConnectIcon from './components/ConnectIcon';
import Logo from './components/Logo';
import { MetamaskExtensionImage } from './components/MetamaskExtensionImage';
import styles from './styles';

export interface SelectModalProps {
  onClose: () => void;
  link: string;
  connectWithExtension: () => void;
}

export const SelectModal = (props: SelectModalProps) => {
  const [tab, setTab] = useState<number>(1);

  return (
    <WidgetWrapper className="select-modal">
      <div style={styles.backdrop} onClick={props.onClose}></div>
      <div style={styles.modal}>
        <div style={styles.closeButtonContainer}>
          <div style={styles.right}>
            <span style={styles.closeButton} onClick={props.onClose}>
              <CloseButton />
            </span>
          </div>
        </div>
        <div style={styles.logoContainer}>
          <Logo />
        </div>
        <div>
          <div style={styles.tabcontainer}>
            <div style={styles.flexContainer}>
              <div
                onClick={() => setTab(1)}
                style={
                  {
                    ...styles.tab,
                    ...(tab === 1 ? styles.tabactive : {}),
                    ...styles.flexItem,
                  } as CSSProperties
                }
              >
                Desktop
              </div>
              <div
                onClick={() => setTab(2)}
                style={
                  {
                    ...styles.tab,
                    ...(tab === 2 ? styles.tabactive : {}),
                    ...styles.flexItem,
                  } as CSSProperties
                }
              >
                Mobile
              </div>
            </div>
          </div>
          <div style={{ display: tab === 1 ? 'none' : 'block' }}>
            <div style={styles.flexContainer}>
              <div
                style={{
                  textAlign: 'center',
                  marginTop: 4,
                  ...styles.flexItem,
                }}
              >
                <div
                  id="sdk-qrcode-container"
                  style={styles.center}
                />
                <div style={styles.connectMobileText}>
                  Scan to connect and sign with <br />
                  <span style={styles.blue}>
                    <b>MetaMask mobile app</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: tab === 2 ? 'none' : 'block' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                height: 300,
                marginTop: -20,
              }}
            >
              <MetamaskExtensionImage />
            </div>
            <div style={styles.extensionLabel}>
              Take control of your crypto and explore the blockchain with the
              wallet trusted by over 30 million people worldwide
            </div>

            <button style={styles.button} onClick={props.connectWithExtension}>
              <ConnectIcon />
              <span style={styles.installExtensionText}>
                Connect With MetaMask Extension
              </span>
            </button>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
};
