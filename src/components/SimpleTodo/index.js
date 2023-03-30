import {useState} from 'react'
import TodoItem from '../TodoItem'

import {MainContainer,Container,Heading,Ul} from './styledComponents'


const initialTodosList = [
    {
      id: 1,
      title: 'Book the ticket for today evening',
    },
    {
      id: 2,
      title: 'Rent the movie for tomorrow movie night',
    },
    {
      id: 3,
      title: 'Confirm the slot for the yoga session tomorrow morning',
    },
    {
      id: 4,
      title: 'Drop the parcel at Bloomingdale',
    },
    {
      id: 5,
      title: 'Order fruits on Big Basket',
    },
    {
      id: 6,
      title: 'Fix the production issue',
    },
    {
      id: 7,
      title: 'Confirm my slot for Saturday Night',
    },
    {
      id: 8,
      title: 'Get essentials for Sunday car wash',
    },
  ]

const SimpleTodo=()=>{
    const [list,setList]=useState(initialTodosList);

    const deleteList=(id)=>{
        const filteredList=list.filter(each=>each.id!==id)
        setList(filteredList)
    }

    return(
        <MainContainer>
            <Container>
                <Heading>Simple Todo</Heading>
                <Ul>
                    {list.map(each=><TodoItem details={each} ondelete={deleteList} key={each.id}/>)}
                </Ul>
            </Container>
        </MainContainer>
    )
}

export default SimpleTodo