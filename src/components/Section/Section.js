import "./Section.css";

const Section = (props) => {
    return (
        <section class="section">
            <header class="section__header">
                <i class="fa-solid fa-mug-saucer"></i>
                <h2 class="section__h2">{props.headerTitle || "Placeholder Title"}</h2>
            </header>
            <div class="section__wrapper">
                {props.children}
            </div>
        </section>
    )
}

export default Section;