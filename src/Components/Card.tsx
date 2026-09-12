import React, { use } from 'react';
import type { Icard } from '../types/card';
import AllCard from './AllCard';


interface CardsProps {
    cardsPromise: Promise<Icard[]>
};

const Card = ({ cardsPromise }: CardsProps) => {
    const cards = use(cardsPromise);
    // console.log(cards, "cards")

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
                            <AllCard key={ind} card={card} />
                        )
                    })
                    }
                </div>
                
                {/* scound card */}
                <div className="w-150 h-65 shadow-sm mt-6 rounded-2xl">
                    <div className="card-body">
                        <h2 className="text-3xl font-bold">Your Stack</h2>
                        <p className='pb-3 text-[#94A3B8] text-[18px]'>No technologies selected yet.</p>

                        <div className='text-[#94A3B8] text-[18px] border border-dotted border-[#a4a5a7] rounded-2xl p-10'>
                            Your stack is empty
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;