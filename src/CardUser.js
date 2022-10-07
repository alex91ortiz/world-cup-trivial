import "/node_modules/flag-icons/css/flag-icons.min.css";

function CardUser(props) {
    return (
        <div className="card">
            <div className="card__body">
                <h2 className="card__title">{props.name}</h2>
                    <img alt="World-Cup" src="fifa-world-cup-qatar-2022-logo.png" />
                    <div className="input-contain">
                        <input type="text" id="name" name="name" onChange={(event) => props.handle(event.target.value)} autoComplete="off"  aria-labelledby="placeholder-name" />
                        <span className="placeholder-text" htmlFor="name" id="placeholder-name">
                            <div className="text">Nombre Participante</div>
                        </span>
                    </div>
                <button className="card__btn" onClick={props.section}>Comenzar</button>
            </div>
        </div>
    );
}

export default CardUser;