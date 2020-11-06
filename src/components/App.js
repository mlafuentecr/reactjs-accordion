import './css/App.css';
import Header from './Header'
import Accordian from './Accordion'

///Array for accordion
const items =[
  {
    title: 'What is React?',
    content: 'React is a front end js framework'
  },
  {
    title: 'why use react?',
    content: `It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components`
  },
  {
    title: 'Why You Should Use react?',
    content: `7 Reasons why you should use React. Kutlu Sahin. ...
    Fast Learning Curve. React is very a simple and lightweight library that only deals with the view layer. ...
    Reusable Components. React provides a component based structure. ...
    Fast render with Virtual DOM. ...
    Clean Abstraction. ...
    Flux and Redux. ...
    Great Developer Tools. ...
    React Native.`
  }
]



function App() {
  return (
    <div className='App'>
      <Header />
      <Accordian items={items}/>
  </div>
  );
}

export default App;
