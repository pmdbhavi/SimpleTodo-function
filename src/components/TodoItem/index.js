import {Li,Para,Button} from './styledComponents'

const TodoItem=(props)=>{
    const {details,ondelete}=props
    const {id,title}=details

    const onDeleteList=()=>{
        ondelete(id)
    }
    
    return(
        <Li>
            <Para>{title}</Para>
            <Button type="button" onClick={onDeleteList}>Delete</Button>
        </Li>
    )
}

export default TodoItem