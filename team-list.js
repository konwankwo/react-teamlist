import React from 'react';

const Team = ({member}) => {
    return (
    <>
        {member.map((staff)=>{
            // destructuring data from data.js
            const {id,name,position,image} = staff;
            return <article key={id} className='staff'>
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <p>{position}</p>
                </div>
            </article>
        }

        )}
    </>
    );
};

export default Team;
