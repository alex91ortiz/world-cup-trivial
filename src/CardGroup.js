
import "/node_modules/flag-icons/css/flag-icons.min.css";

function CardGroup({ handle, category, source, section, name }) {
    
    const groups = {
        "group1": [
            "groupa",
            "groupb",
            "groupc",
            "groupd"],
        "group2": [
            "groupe",
            "groupf",
            "groupg",
            "grouph"]
    };
    return (
        <div className="card">
            <div className="card__body">
                <h3 className="card__title">{name}</h3>
                <div id="resp-table">
                    <div id="resp-table-body">
                        <div className="resp-table-row">
                            <div className="table-body-cell">
                                Grupo A
                            </div>
                            <div className="table-body-cell">
                                Grupo B
                            </div>
                            <div className="table-body-cell">
                                Grupo C
                            </div>
                            <div className="table-body-cell">
                                Grupo D
                            </div>
                        </div>
                        <div className="resp-table-row">

                            {groups["group1"].map(g => {
                                return <div key={g} className="table-body-cell">
                                    {source[g].map((subElement, index) => {
                                        return (
                                            <div key={index}>
                                                <input
                                                    type="checkbox"
                                                    id={`control_01_${index} ${g} ${category}`}
                                                    onChange={handle}
                                                    data-index={index}
                                                    data-group={g}
                                                    data-category={category}
                                                    name={`win_${index} ${g} ${category}`}
                                                    value="1"
                                                />
                                                <label className="group" htmlFor={`control_01_${index} ${g} ${category}`}>
                                                    <span className={`fi fi-${subElement.icon}`}></span>
                                                    <p>{subElement.player}</p>
                                                </label>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            })}
                        </div>
                        <div className="resp-table-row">
                            <div className="table-body-cell">
                                Grupo A
                            </div>
                            <div className="table-body-cell">
                                Grupo B
                            </div>
                            <div className="table-body-cell">
                                Grupo C
                            </div>
                            <div className="table-body-cell">
                                Grupo D
                            </div>
                        </div>
                        <div className="resp-table-row">
                            {groups["group2"].map(g => {
                                return <div key={g} className="table-body-cell">
                                    {source[g].map((subElement, index) => {
                                        return (
                                            <div key={index}>
                                                <input
                                                    type="checkbox"
                                                    id={`control_01_${index} ${g} ${category}`}
                                                    onChange={handle}
                                                    data-index={index}
                                                    data-group={g}
                                                    data-category={category}
                                                    name={`win_${index} ${g} ${category}`}
                                                    value="1"
                                                />
                                                <label className="group" htmlFor={`control_01_${index} ${g} ${category}`}>
                                                    <span className={`fi fi-${subElement.icon}`}></span>
                                                    <p>{subElement.player}</p>
                                                </label>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <button className="card__btn" onClick={section}>Confirmar</button>
            </div>
        </div>
    );
}


export default CardGroup;