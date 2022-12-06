import SidebarView from "../views/sidebarView.js";

export default
function Sidebar(props){
    function numberChangeCB(nr){ 
        props.model.setNumberOfGuests(nr);
    }
    function removeDishCB(dish){
        // props.model.dishes = props.model.dishes.filter((d) => d.id !== dish.id)
        props.model.removeFromMenu(dish);
    }
    function currentDishCB(dish){
        // props.model.currentDish = dish.id;
        props.model.setCurrentDish(dish);
    }
    return <SidebarView number={props.model.numberOfGuests} onNumberChange={numberChangeCB} dishes={props.model.dishes} onRemoveDish={removeDishCB} onCurrentDish={currentDishCB}/>;
}