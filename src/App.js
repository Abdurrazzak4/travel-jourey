import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import data from './data';

function App() {
  const content = data.map((item) => {
    return (
      <Content
        key={item.id}
        {...item}
      />
    );
  });





  return (
    <div className="App">
      <Navbar />
      {content}
    </div>
  );
}

export default App;
