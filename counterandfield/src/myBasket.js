function MyBasket(props) {
    return (
        <div>
            <h4>your message and fruit selection so far</h4>
           <h4>
            {props.input}
            </h4> 
            <h4>{props.fruit}</h4>
        </div>
    )
}
export default MyBasket;