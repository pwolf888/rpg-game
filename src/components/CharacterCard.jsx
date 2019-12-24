import React from 'react';

const CharacterCard = props => {

    return (

        <div className="col-3">
            <h1>{props.stats.name}</h1>
            <h2>{props.stats.race}

            </h2>
            
            <span className="badge badge-danger">{(props.stats.bonus.bravery > 0
                    ? '+' + props.stats.bonus.bravery
                    : props.stats.bonus.bravery)}
            </span>
            <span className="badge badge-success">{(props.stats.bonus.reflex > 0
                    ? '+' + props.stats.bonus.reflex
                    : props.stats.bonus.reflex)}
            </span>
            <span className="badge badge-primary">{(props.stats.bonus.wisdom > 0
                    ? '+' + props.stats.bonus.wisdom
                    : props.stats.bonus.wisdom)}
            </span>
            <h3>{props.stats.class}</h3>
            Bravery
            <div className="progress">

                <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{
                    width: (props.stats.bravery * 100) / 20 + "%"
                }}
                    aria-valuenow={props.stats.bravery}
                    aria-valuemin="1"
                    aria-valuemax="100">
                    {props.stats.bravery}
                </div>
                
            </div>

            Reflex
            <div className="progress">
                <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{
                    width: (props.stats.reflex * 100) / 20 + "%"
                }}
                    aria-valuenow={props.stats.reflex}
                    aria-valuemin="1"
                    aria-valuemax="100">
                    {props.stats.reflex}
                </div>
                
            </div>
            Wisdom
            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                    width: (props.stats.wisdom * 100) / 20 + "%"
                }}
                    aria-valuenow={props.stats.wisdom}
                    aria-valuemin="1"
                    aria-valuemax="100">
                    {props.stats.wisdom}
                </div>
                
            </div>

        </div>

    );
}
export default CharacterCard;