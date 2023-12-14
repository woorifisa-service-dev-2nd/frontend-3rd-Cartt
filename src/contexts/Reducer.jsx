export const reducer = (items, action) => {
    switch (action.type) {
        case "inc":
            return items.map((item) => {
                if (item.id === action.item.id) {
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
                if (item.id === action.item.id) {
                    return {
                        ...item,
                        amount: item.amount - 1
                    };
                }
                else{
                    return item;
                }
            });
    }
}
