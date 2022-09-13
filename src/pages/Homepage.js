import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

const HomePage = () => {
    return (
        <>
            <Navigation />
            <Header
                bigTitle="Coffeez"
                smallTitle="Coffee that will make you smile"
                buttonText="order now"
            />
            <Section headerTitle="Our Kwalities">
                <Card text="The most fresh beans from in- and outside the country!" />
                <Card text="Freshly grinded coffee with the flavor intact!" image="koffiemolen.jpg" />
                <Card text="Smell and taste different aromas from around the world. Chocolate, flowers, wood, you name it!" image="ruiken.jpg" />
                <Card text="Fair traded coffee, paid with real money and love for our employees!" image="vruchten.jpg" />
            </Section>
        </>
    )
}

export default HomePage;