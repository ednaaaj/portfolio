import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation, Route, glide } from "react-tiger-transition"

import "react-tiger-transition/styles/main.min.css";

glide({
  name: 'glide-left',
  direction: 'left'
});

glide({
  name: 'glide-right',
  direction: 'right'
});


function App() {
  return (
    <Router>
      <Navigation>
        <Route exact path="/" screen>
          <Hero />
        </Route>
        <Route exact path="/about" screen>
          <AboutMe />
        </Route>
      </Navigation>
    </Router>
  );
}

export default App;
