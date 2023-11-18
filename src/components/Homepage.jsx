import React from 'react';
import Navigation from './Navigation'; // Adjust the path if necessary

function HomePage() {
  return (
    <div>
      <h1 className='nameHeader'>Alexa Lester</h1>
      <Navigation />
      {/* Additional content for the homepage */}
      {/* About Me Section */}
      <section className='aboutMe'>
        <h2>About Me</h2>
        <p>
          Hi, I'm Alexa Lester!
        </p>
        <p>
          In my free time, I enjoy getting outdoors.
          Feel free to browse through my portfolio or contact me for any
          collaborations and opportunities.
        </p>
      </section>
    </div>
  );
}

export default HomePage;