
import Card from "../card/card.component";

import './card-list.styles.css'

const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map(monster => {
            // const { name, email, id } = monster;  //we pass as a prop that we setted up in <Card />.
            return (
                <Card monster={monster} key={monster.id} />
            )
        })}
    </div>
);

export default CardList;