import React from 'react';
import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'John Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: mechanic2,
        name: 'Anthony Gonsalves',
        expertize: '-Polish Expert-'
    },
    {
        img: mechanic3,
        name: 'Tony Stark',
        expertize: '-Allrounder Expert-'
    },
    {
        img: mechanic4,
        name: 'Randy Orton',
        expertize: '-Coloring Expert-'
    },
    {
        img: mechanic5,
        name: 'Salman Khan',
        expertize: '-Denting Expert-'
    }

]

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;