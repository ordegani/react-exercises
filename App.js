import logo from './logo.svg';
import './App.css';

function Card(props) {
  return <card>{props.title}</card>;
}




function App(title) {
  return (
    <div>
      <Card description="text">
        <a href="#">link 1</a>
        
      </Card>
      <Card title="2" description="text">
        <a href="#">link 2</a>
        
      </Card>
      <Card title="text" description="text"
      >
        <a href="#">link 3</a>
      </Card>
      
      <Card title="2" description="text">
        <a href="#">link 2</a>
        
      </Card>
    </div>

    
  );
  }




export default App;
