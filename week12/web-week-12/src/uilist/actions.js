export default function actions(dispatch){
  return {
    select(id){ // action
       dispatch({type:"select", id});
    }
  }
}
