import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const jobSearchUrl =
  'https://careers.ultimatestaffing.com/?City=Boca+Raton&Distance=15&DivisionId=3&StateId=14';
const hireTalentUrl = 'https://www.ultimatestaffing.com/hire-talent/get-in-touch/';

const roles = [
  ['01', 'Office & administrative', 'Office managers · Executive assistants · Data entry'],
  ['02', 'Customer service', 'Customer support · Call centers · Reception'],
  ['03', 'Human resources', 'HR professionals · Recruiting · Talent acquisition'],
  ['04', 'Marketing & sales', 'Marketing specialists · Events · Sales professionals'],
  ['05', 'Manufacturing & production', 'Assembly · Quality assurance · Production'],
  ['06', 'Business operations', 'Project management · Purchasing · Procurement'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="utility">
        <div className="wrap">
          <span>Local connections. National possibilities.</span>
          <a href="tel:5617501688">Boca Raton · (561) 750-1688 ↗</a>
        </div>
      </div>

      <header className="wrap">
        <a className="brand" href="#" aria-label="Ultimate Staffing home">
          <img src="/assets/ultimate-logo.png" alt="Ultimate Staffing Services" />
        </a>
        <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
          <a href="#opportunities" onClick={closeMenu}>
            Job seekers
          </a>
          <a href="#expertise" onClick={closeMenu}>
            Employers
          </a>
          <a href="#approach" onClick={closeMenu}>
            Our approach
          </a>
          <a href="#contact" onClick={closeMenu}>
            Our location
          </a>
        </nav>
        <a className="button small" href="#contact">
          Let's connect <span>↗</span>
        </a>
        <button
          className="menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
      </header>

      <main>
        <Hero />
        <ServiceStrip />
        <Opportunities />
        <Expertise />
        <Approach />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="pin">⌖</span> YOUR BOCA RATON STAFFING PARTNER
        </p>
        <h1>
          Great people.
          <br />
          Real possibilities.
          <br />
          <span>Right here.</span>
        </h1>
        <p className="intro">
          Your next chapter starts with a connection. We bring talented people and great businesses
          together across Southeast Florida.
        </p>
        <div className="actions">
          <a className="button" href={jobSearchUrl}>
            Find a job <span>↗</span>
          </a>
          <a className="button outline" href={hireTalentUrl}>
            Find your next hire <span>↗</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="check">✓</span> A personal approach. A partner in your corner.
        </div>
      </div>

      <div className="hero-visual">
        <img
          className="hero-photo"
          src="/assets/robot-blue.png"
          alt="Blue illustrated robot in a business suit holding a clipboard"
        />
        <div className="floating">
          <span className="circle-icon">↗</span>
          <div>
            <strong>
              Good things start
              <br />
              with the right connection.
            </strong>
            <span>Let's find yours.</span>
          </div>
        </div>
        <div className="vertical">BOCA RATON, FLORIDA</div>
      </div>
    </section>
  );
}

function ServiceStrip() {
  return (
    <section className="service-strip">
      <div className="wrap">
        <p>
          THE RIGHT FIT.
          <br />
          <strong>However you work.</strong>
        </p>
        <span>Temporary</span>
        <i>✦</i>
        <span>Temporary-to-hire</span>
        <i>✦</i>
        <span>Direct hire</span>
        <i>✦</i>
        <span>Workforce solutions</span>
      </div>
    </section>
  );
}

function Opportunities() {
  return (
    <section id="opportunities" className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TWO PATHS. ONE PEOPLE-FIRST PARTNER.</p>
          <h2>What's your next move?</h2>
        </div>
        <p>
          Wherever you're headed, we'll help
          <br />
          you take the next step.
        </p>
      </div>
      <div className="path-grid">
        <article className="path">
          <span className="tag">FOR JOB SEEKERS</span>
          <div className="path-icon">↗</div>
          <h3>
            A job that fits your life.
            <br />A future that feels like you.
          </h3>
          <p>
            Explore opportunities that put your skills to work. Our recruiters take the time to
            understand what matters to you.
          </p>
          <a className="text-link" href={jobSearchUrl}>
            Explore local jobs <span>↗</span>
          </a>
        </article>

        <article className="path blue">
          <span className="tag">FOR EMPLOYERS</span>
          <div className="path-icon">＋</div>
          <h3>
            Your next great hire.
            <br />
            Our shared commitment.
          </h3>
          <p>
            Build a team that moves your business forward, with local recruiting expertise and
            flexible staffing support.
          </p>
          <a className="text-link" href={hireTalentUrl}>
            Let's talk talent <span>↗</span>
          </a>
        </article>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="expertise">
      <div className="wrap section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">LOCAL KNOWLEDGE. THE RIGHT CONNECTIONS.</p>
            <h2>
              People who make
              <br />
              your business work.
            </h2>
          </div>
          <p>
            From the front desk to the production floor,
            <br />
            we connect experience with opportunity.
          </p>
        </div>
        <div className="roles">
          {roles.map(([number, title, description]) => (
            <a href={hireTalentUrl} key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <b>↗</b>
            </a>
          ))}
        </div>
        <img
          className="expertise-robot"
          src="/assets/robot-pointing.png"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="section wrap approach">
      <div>
        <p className="eyebrow">MORE THAN A MATCH</p>
        <h2>
          We get to know you.
          <br />
          Then we get to work.
        </h2>
        <p className="intro">
          Real conversations. Thoughtful connections. Support from people who know the local market
          and care about your next step.
        </p>
        <a className="button" href="#contact">
          Meet your local partner <span>↗</span>
        </a>
      </div>
      <div className="steps">
        <article>
          <span>01</span>
          <div>
            <h3>Start with a conversation</h3>
            <p>Tell us about your goals, your experience, or the people your business needs.</p>
          </div>
        </article>
        <article>
          <span>02</span>
          <div>
            <h3>Make the right connection</h3>
            <p>We bring our local network and personal attention to finding the right fit.</p>
          </div>
        </article>
        <article>
          <span>03</span>
          <div>
            <h3>Move forward, together</h3>
            <p>From your first introduction to your next chapter, we're here to help.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">ROOTED IN BOCA RATON</p>
          <h2>
            Local people.
            <br />
            On your side.
          </h2>
          <p>
            Serving Boca Raton, Delray Beach, Deerfield Beach,
            <br />
            Pompano Beach and communities across Southeast Florida.
          </p>
          <a className="button white" href="mailto:bocaraton@ultimatestaffing.com">
            Let's start a conversation <span>↗</span>
          </a>
        </div>
        <div className="contact-card">
          <h3>Come say hello.</h3>
          <p>
            433 Plaza Real, Suite 275
            <br />
            Boca Raton, FL 33432
          </p>
          <span className="appointment">Visits by appointment only</span>
          <a href="tel:5617501688">(561) 750-1688 ↗</a>
          <a href="mailto:bocaraton@ultimatestaffing.com">bocaraton@ultimatestaffing.com ↗</a>
          <div className="hours">
            <span>Monday-Thursday</span>
            <strong>8:00 am-5:30 pm</strong>
            <span>Friday</span>
            <strong>8:00 am-5:00 pm</strong>
            <span>Saturday-Sunday</span>
            <strong>Closed</strong>
          </div>
          <a
            className="directions"
            href="https://www.google.com/maps/search/?api=1&query=433+Plaza+Real+Suite+275+Boca+Raton+FL+33432"
            target="_blank"
            rel="noopener"
          >
            Get directions <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="wrap">
      <div className="footer-top">
        <a className="brand" href="#">
          <img src="/assets/ultimate-logo.png" alt="Ultimate Staffing Services" />
        </a>
        <p>
          A Roth Staffing Company.
          <br />
          Creating remarkable experiences, every person, every time.
        </p>
        <a href="#">Back to top ↑</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Ultimate Staffing · An equal opportunity employer</span>
        <a href="https://www.rothstaffing.com/privacy-policy/">Privacy policy</a>
        <a href="https://www.rothstaffing.com/terms-of-service/">Terms of service</a>
      </div>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(<App />);
