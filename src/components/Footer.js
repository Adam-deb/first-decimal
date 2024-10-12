import styles from "./Footer.module.css"; // Create this CSS module file for styling

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} FirstDecimal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;