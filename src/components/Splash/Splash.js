import React, {
  Component
} from 'react';
import { Link } from 'react-router-dom';
import './Splash.scss';
import { Button } from '../Utils/Utils';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <h2 className="Splash__hero">
          Send Frenmos and make friends.
        </h2>
        <h3 className="Splash__sub">
          Create some favors and start
          swapping them with your
          friends, your family, your
          neighbors, your community,
          your world.
        </h3>
        <Link to="/register">
          <Button className="Splash__link">
            Register!
          </Button>
        </Link>
        <Link to="/login">
          <Button className="Splash__link">
            Login
          </Button>
        </Link>
        <footer>
          Frenmo. Making the world a
          better place since 2020.
        </footer>
      </div>
    );
  }
}

export default Splash;
