export const reducer = (items, action) => {
  console.log(items);
  console.log(action);

  switch (action.type) {
 
    case "inc":
            return items.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        amount: item.amount + 1
                    };
                }
                else{
                    return item;
                }
            });
        case "dec":
            return items.map((item) => {
                if (item.id === action.id) {
                  if(item.amount === 0){
                    return {
                      ...item,
                      amount: 0
                  };
                  }
                  else{
                    return {
                        ...item,
                        amount: item.amount - 1
                    };
                  }
                }
                else{
                    return item;
                }
            });
          }

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



// export default {reducer, reducerForSlider, reducerAmount}