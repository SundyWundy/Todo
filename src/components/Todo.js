import React, {useState} from "react"
import {Row, Col, Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Todo.css'
import DeleteIcon from '@mui/icons-material/Delete';


export default function Todo({theTodo, settheTodo, To, name, description, complete}) {
    const [toggleDescription, settoggleDescription] = useState(false)
    const deleteTodo = () =>{
        settheTodo(theTodo.filter((element) => element.id !== To.id))
    }
    const toggleTodo =(e) =>{
        e.stopPropagation()
        settheTodo(theTodo.map((element) =>{
            if(element.id === To.id){
                return {
                    ...element, complete: !element.complete
                }
            }
            return element;
        }))
    }

    const togDescription = () =>{
        settoggleDescription(!toggleDescription)
    }

    return (
        <div>
            <Container>
            <div className="box" onClick={togDescription}>
                 <Row>
                <Col className="Leftside" xs lg="1">
                      <input className="checkBox" onClick={toggleTodo} type="checkbox" defaultChecked={complete} />
                   </Col>            
               <Col className="Mid" md="auto">
                       {name}
                 </Col>
                <Col className="Rightside">
                    <button className="Iconbtn" onClick={deleteTodo}><DeleteIcon className="Icon" fontSize="large"/></button>
               </Col>
                       {
                         toggleDescription === true && description.length > 0 &&
                         <div>
                            <h4>Description</h4>
                            <div className="descriptionLay">
                            {description}
                            </div>
                         </div>
                     }
               </Row>
 </div>
                
                     </Container>
        </div>
        
    )
}

