import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Unleashing the potential of you and your business</h1>
        </div>
      </section>
        <section className={styles.whoWeAre}>
          <h2>Who are we?</h2>
          <p>We are a group of entrepreneurs with over 30 years of experience in acquiring, building, and managing startups and small to mid-sized businesses. We specialize in adding value to new ideas and emerging companies. We bring capital, expertise, and a wealth of knowledge to support the success of new ventures.</p>
        </section>
      <section className={styles.managementWork}>
        <h2>Working with management teams</h2>
        <p>A key differentiator of FirstDecimal UK is our active involvement in strategic oversight and support for management, in addition to raising capital. This approach enables us to contribute to value creation after the investment.</p>
        <p>Once we identify a team, we fully support them in achieving their goals. Open communication is essential to ensure we always understand each other's positions.</p>
        <p>The support we provide includes access to high-quality non-executive directors from a group of entrepreneurs with over 30 years of experience in acquiring, building, and managing startups and small to mid-sized businesses. They bring extensive expertise in raising capital, strategic planning, operational efficiency, and market expansion, ensuring our portfolio companies receive valuable insights and guidance to drive their growth and success.</p>
      </section>
      <section className={styles.smeSupport}>
        <div className={styles.smeSupportHeading}>
          <h2>Support for our SMEs</h2>
          <p className={styles.smeSupportSubheading}>Leveraging our strong relationships with companies that support SMEs, we can provide immediate assistance to your business</p>
        </div>
        <div className={styles.smeSupportContainer}>
          <div className={styles.smeProductContainer} id={styles.finance}>
            <div className={styles.smeSupportIcon}>
              <Image src="/finance.png" height={80} width={80}/>          
            </div>
            <div className={styles.smeSupportText}>
              <h3>Alternative Finance Brokers</h3>
              <p>Our connections with alternative finance brokers facilitate access to diverse funding options, ensuring you find the right financial support tailored to your needs.</p>
            </div>
          </div>
          <div className={styles.smeProductContainer} id={styles.security}>
            <div className={styles.smeSupportIcon}>
              <Image src="/security.png" height={80} width={80}/>          
            </div>
            <div className={styles.smeSupportText}>
              <h3>Smart Property Security Providers</h3>
              <p>Collaborating with smart property security providers enhances the safety and efficiency of your operations.</p>
            </div>
          </div>
          <div className={styles.smeProductContainer} id={styles.merchantServices}>
            <div className={styles.smeSupportIcon}>
              <Image src="/merchantServices.png" height={80} width={80}/>          
            </div>
            <div className={styles.smeSupportText}>
              <h3>Merchant Services and Smart POS Providers</h3>
              <p>Partnerships with merchant services and smart POS providers streamline transactions and improve customer experiences.</p>
            </div>
          </div>
          <div className={styles.smeProductContainer} id={styles.energyBills}>
            <div className={styles.smeSupportIcon}>
              <Image src="/energyBills.png" height={80} width={80}/>          
            </div>
            <div className={styles.smeSupportText}>
              <h3>Smart Energy Management Providers</h3>
              <p>Engaging with smart energy management providers helps you optimize energy usage, reducing costs and promoting sustainability.</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.managementTeam}>
        <div className={styles.managementTeamHeading}>
          <h2>Meet our Team</h2>
        </div> 
        <div className={styles.managementTeamMember}>
          <div className={styles.managementTeamText}>
            <h3>Manoj Karkhanis</h3>
            <p>In 2008, at the height of the financial crisis when no high street bank was willing to help small businesses, Manoj left the position of CEO to create Decimal Factor. Today, Decimal Factor has grown into a leading and recognised Credit Brokerage Firm in the UK & USA, regulated by the Financial Conduct Authority of UK (FCA).</p>
          </div>
          <div className={styles.managementTeamImage} id={styles.manojImage}>
            <Image src="/manoj.jpeg" height={300} width={300}/>
          </div>
        </div>
        <div className={styles.managementTeamMember}>
          <div className={styles.managementTeamImage} id={styles.hassanImage}>
            <Image src="/hassan.png" height={300} width={300}/>
          </div>
          <div className={styles.managementTeamText}>
            <h3>Hassan Saduddeen</h3>
            <p>Hassan brings over 27 years of expertise in digital payments, SMEs lending, and fintech innovation. As co-founder of PayTabs, he helped build a $100M payment gateway startup and has a deep understanding of both lender and broker perspectives. He has since joined Decimal Factor, where he has focused on enhancing the tech infrastructure and driving business growth.</p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
