import '../index.css'
function Card({name,children}){
    return (
        <section className = "card">
        <h1>{name}</h1>
        {children}
        </section>
        );
}

export default Card;