import "/node_modules/flag-icons/css/flag-icons.min.css";

function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <h2 className="card__title">{props.name}</h2>
                <div id="resp-table">
                    {props.source !== undefined && props.source.map((element, index) => {
                        return (<div key={index} id="resp-table-body">
                            <div className="resp-table-row">
                            <div className="table-body-cell"></div>
                                <div className="table-body-cell">
                                    {element.date}
                                </div>
                                <div className="table-body-cell"></div>
                            </div>
                            <div className="resp-table-row">
                                <div className="table-body-cell">
                                    <input 
                                         type="radio" 
                                         id={`control_01_${index + props.group}`} 
                                         onChange={props.handle} 
                                         className="radio" 
                                         name={`win_${index + props.group}`}
                                         data-group={props.group}
                                         data-index={index}
                                         value="1" />
                                    <label htmlFor={`control_01_${index + props.group}`}>
                                        <span className={`fi fi-${element.player1.icon}`}></span>
                                        <p>{element.player1.name}</p>
                                        
                                    </label>
                                </div>
                                <div className="table-body-cell">
                                    <input 
                                        type="radio" 
                                        id={`control_03_${index + props.group}`} 
                                        onChange={props.handle} 
                                        name={`win_${index + props.group}`} 
                                        data-group={props.group}
                                        data-index={index}
                                        value="0" />
                                    <label htmlFor={`control_03_${index + props.group}`}>
                                        <span> &nbsp;</span>
                                        <p>Empate</p>
                                    </label>
                                </div>
                                <div className="table-body-cell">
                                    <input 
                                        type="radio" 
                                        id={`control_02_${index + props.group}`} 
                                        onChange={props.handle} 
                                        name={`win_${index + props.group}`} 
                                        data-group={props.group}
                                        data-index={index}
                                        value="2" />
                                    <label htmlFor={`control_02_${index + props.group}`}>
                                        <span className={`fi fi-${element.player2.icon}`}></span>
                                        &nbsp;
                                        <p>{element.player2.name}</p>
                                    </label>
                                </div>

                            </div>
                        </div>)
                    })}
                </div>
                <button className="card__btn" onClick={props.section}>Confirmar</button>
            </div>
        </div>
    );
}

export default Card;