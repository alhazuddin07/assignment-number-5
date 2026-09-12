import React, { use, useState } from 'react';
import type { Icard } from '../types/card';


interface CardsProps {
    cardsPromise: Promise<Icard[]>
};


const Card = ({ cardsPromise }: CardsProps) => {
    const cards = use(cardsPromise);
    // console.log(cards, "cards")

    const [stack, setStack] = useState<Icard[]>([]);

    return (
        <div className='container mx-auto'>

            {/* Title */}
            <div>
                <h1 className='text-4xl font-bold py-1.5'>Explore the <span
                    className='text-pink-500'> Technologies</span>
                </h1>
                <p className='text-[#64748B] mb-6'>Pick one technology per category to build your ideal stack.</p>


            </div>


            {/* Card */}
            <div className='flex justify-between gap-5'>
                <div className='grid grid-cols-3 gap-4 mt-6'>
                    {cards.map((card: Icard, ind: number) => {
                        return (
                            <div className="card card-body shadow-sm space-y-3">
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
                                    <button
                                        onClick={() => setStack([...stack, card])}
                                        className="btn btn-neutral btn-block rounded-md"
                                    >
                                        Add to Stack
                                    </button>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>

                {/* scound card */}
                <div className="w-150 h-65 shadow-sm mt-6 rounded-2xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Your Stack</h2>
                        <p className='pb-3 text-[#94A3B8] text-[18px]'>No technologies selected yet.</p>

                        {stack.length === 0 ? (
                            <div>
                                Your stack is empty
                            </div>
                        ) : (
                            <div>
                                {stack.map((tech) => (
                                    <div key={tech.id}>
                                        {tech.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;