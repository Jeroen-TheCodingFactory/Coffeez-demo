import "./Card.css";
 
const Card = (props) => {
    let cardImage = <img src={"/img/" + props.image} alt="" />
    if(props.image === undefined){
        cardImage = <img src={"/img/bonen.jpg"} alt="" />;
    }

    return(
        <article class="card">
            <figure class="card__figure">
               {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.text || "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quisquam blanditiis sequi quod sed inventore quia ipsam ut a necessitatibus quo iure quae earum ad consequuntur perspiciatis corporis soluta exercitationem."}</p>
            </section>
        </article>
    )
}

export default Card;