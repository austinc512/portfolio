import './Content.css';

export default function Content() {
  return (
    <div className="content">
      <section id="home">
        <h1>Home</h1>
        <p>Welcome to the homepage!</p>
      </section>
      <section id="about">
        <h1>About</h1>
        <p>About us section.</p>
      </section>
      <section id="services">
        <h1>Services</h1>
        <p>Our services.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>Contact us here.</p>
      </section>
    </div>
  );
}
