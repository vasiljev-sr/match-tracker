import './assets/styles/main.css';
import { Header } from './components';
import { MatchList } from './components/MatchList/MatchList.tsx';

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
