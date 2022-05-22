import "../stylesheets/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h3>Welcome Back, Guest</h3>
      <section className="home-section">
        <header className="section-header">Summary</header>
        <p>Workouts completed this week</p>
        <p>Most frequent exercise</p>
      </section>
      <section className="home-section">
        <header className="section-header">This week's challenge</header>
        <p>Challenge</p>
      </section>
      <section className="home-section">
        <header className="section-header">Recent Workouts</header>
        <p>workout</p>
      </section>
    </div>
  );
};

export default Home;
