import React from 'react';
import type { Icard } from '../types/card';

const AllCard = ({ card }:{card:Icard}) => {



    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body space-y-3">

                <div className="flex justify-between">
                    <img className='w-10' src={card.icon} alt="" />
                    <span className="badge badge-xs badge-warning text-[17px] p-4 rounded-2xl">{card.badge}</span>
                </div>
                <div className='text-2xl font-bold'>{card.name}</div>
                <div>{card.description}</div>

                <div className='divider'></div>

                <div className='flex justify-between items-center'>
                    <div className='bg-[#F1F5F9] px-3 rounded-md'>{card.category}</div>
                    <div>{card.difficulty}</div>
                    <div className='font-semibold'>
                        <span className='text-yellow-400 p-1'>★</span>
                        {card.rating}
                    </div>
                </div>

                <div className="mt-6">
                    <button className="btn btn-neutral btn-block rounded-md">Add to Stack</button>
                </div>
            </div>

        </div>
    );
};

export default AllCard;