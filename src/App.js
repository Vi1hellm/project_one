import logo from './logo.svg';
import './App.css';
import CustomComponents from "./components/customComponents/CustomComponents"

const mockData = ["count:", 0];

function App() {


  return (
    <>

      <CustomComponents array = {mockData} />

    </>
  );
}

export default App;
