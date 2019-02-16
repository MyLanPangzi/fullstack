export default function updater(state , event){

  switch(event.type){

    case "select":
      let list = state.list.slice();
      let selecteId = event.id;

      for(let i=0;i<list.length;i++){
        const item = list[i];
        if(item.id === selecteId){
          item.selected = true;
        }
      }

      return Object.assign({}, state , {list}); // new state

    break;
    default:
      return state;
  }
}
