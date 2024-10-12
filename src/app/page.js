import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Unleashing Your Business Potential</h1>
            <p>Consulting services that help startups and SMEs secure funding, optimize operations, and scale faster.</p>
          </div>
        </section>

        <section className={styles.whoWeAre}>
          <h2>About FirstDecimal</h2>
          <p>FirstDecimal is a leading consulting firm with over 30 years of expertise in supporting startups and SMEs. We specialize in securing funding, optimizing operations, and accelerating growth by leveraging strategic partnerships with industry leaders.</p>
          <p>Our team brings a wealth of knowledge to help new ventures scale efficiently and successfully. We work closely with businesses to provide capital, smart solutions, and hands-on support.</p>
        </section>

        <section className={styles.partnerships}>
          <h2>Strategic Partnerships</h2>
          <p>At FirstDecimal, our partnerships provide businesses with a competitive edge through cutting-edge solutions:</p>
          <div className={styles.partnershipsContainer}>
            <div className={styles.partner}>
              <Image src="/DF-logo-only.png" height={80} width={80}/> 
              <h3>Funding Solutions with Decimal Factor</h3>
              <p>Unlock alternative funding options tailored to your business needs with our partner, Decimal Factor.</p>
            </div>
            <div className={styles.partner}>
              <Image src="/tutum.png" height={80} width={80}/> 
              <h3>Smart Property Security with Tutum</h3>
              <p>Enhance your property’s security with cutting-edge smart security solutions from Tutum.</p>
            </div>
            <div className={styles.partner}>
              <Image src="/merchantServices.png" height={80} width={80}/> 
              <h3>Smart POS</h3>
              <p>Improve customer experiences and streamline transactions with smart POS systems.</p>
            </div>
            <div className={styles.partner}>
              <Image src="/utilidex.png" height={80} width={80}/> 
              <h3>Energy Optimization with Utilidex</h3>
              <p>Reduce energy costs and boost efficiency with our energy management solutions from Utilidex.</p>
            </div>
          </div>
        </section>

        <section className={styles.managementTeam}>
          <h2>Our Leadership Team</h2>
          <div className={styles.managementTeamGrid}>
            <div className={styles.managementTeamMember}>
              <div className={styles.managementTeamImage}>
                <Image src="/manoj.jpeg" height={200} width={200} alt="Manoj Karkhanis" />
              </div>
              <div className={styles.managementTeamText}>
                <h3>Manoj Karkhanis</h3>
                <p>
                  Founder of Decimal Factor, Manoj led the company to become a leading credit brokerage firm in the UK and USA. His leadership has helped numerous SMEs secure funding and grow their businesses during challenging times.
                </p>
              </div>
            </div>
            <div className={styles.managementTeamMember}>
              <div className={styles.managementTeamImage}>
                <Image src="/hassanImage.png" height={200} width={200} alt="Hassan Saduddeen" />
              </div>
              <div className={styles.managementTeamText}>
                <h3>Hassan Saduddeen</h3>
                <p>
                  With over 27 years of fintech and SME lending experience, Hassan co-founded PayTabs and built a $100M payment gateway startup. He now drives innovation at Decimal Factor, focusing on digital payments and SME growth strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}