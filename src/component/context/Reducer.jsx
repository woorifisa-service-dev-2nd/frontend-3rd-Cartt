export const reducer = () => {

}
// const [state, change] = useState(0);

export const reducerForSlider = (viewItem, action) => {


  switch (action.type) {
    case 'right':
      if(viewItem.id === 3){
        return {
          ...viewItem,
          id: 1
        }
      }
      else{
        return {
        ...viewItem,
          id: viewItem.id + 1
        }
      }

    case 'left':
      if(viewItem.id === 1){
        return {
          ...viewItem,
          id: 3
        }
      }
      else{
        return {
        ...viewItem,
          id: viewItem.id - 1
        }
      }
    // default:
    //   return viewItem
    }
}

export const reducerAmount = (viewItem, action) => {
  console.log(viewItem);
  console.log(action);
}

// export default {reducer, reducerForSlider, reducerAmount}