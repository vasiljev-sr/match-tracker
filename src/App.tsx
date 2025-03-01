import './assets/styles/main.css';
import { Header } from './components/Header/Header';
import { MatchList } from './components/MatchList/MatchList';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <MatchList />
      </main>
    </>
  );
};

export default App;
