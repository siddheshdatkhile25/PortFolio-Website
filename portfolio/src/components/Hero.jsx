import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        
        <img src={profile} alt="Siddhesh" className="hero-img" />

        <div className="hero-text">
          <h1>Siddhesh Mahendra Datkhile</h1>
          <p>Full Stack Java Developer | PG-DAC @ Sunbeam Pune</p>
          <p>
            Java • Spring Boot • React • MySQL • MERN
          </p>
        </div>

      </div>
    </section>
  );
}
