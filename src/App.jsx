import './App.css'
import Container from './Container/Index'
import './App.css'
import Mcqcomp from './Components/Index'
import { questions } from './Data/Index'
import Button from './Widgets/Index'
function App() {


  return (
    <>
      <Container>
        <div className="titlecontainer">
          <h1><span className="jstitle">javacript</span> interview mcq`s</h1>
          {
            questions.map((item)=>{
              return  <Mcqcomp  ans={item.answer}  key={item.id} no={item.id} question={item.question} a={item.options.A} b={item.options.B} c={item.options.C} d={item.options.D}/>
            })
          }
          <div className="btncontainer">
          <Button name="Submit" />
          </div>
        </div>
      </Container> 
    </>
  )
}

export default App
