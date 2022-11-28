import Game from '../components/Game';
import Header from '../components/Header';
import ModalComp from '../components/Modal';

const Home = (): JSX.Element => {
  return (
    <div className="container">
      <ModalComp />
      <Header />
      <Game />
    </div>
  );
};

export default Home;
