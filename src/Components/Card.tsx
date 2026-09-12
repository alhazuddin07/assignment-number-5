import { use, useState } from "react";
import type { Icard } from "../types/card";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";


interface CardsProps {
    cardsPromise: Promise<Icard[]>;
}


const Card = ({ cardsPromise }: CardsProps) => {

    const cards = use(cardsPromise);

    const [stack, setStack] = useState<Icard[]>([]);


    // Add technology to stack
    const handleAdd = (card: Icard) => {

        setStack((previousStack) => {

            // Prevent duplicate technology
            if (
                previousStack.some(
                    (item) => item.id === card.id
                )
            ) {
                return previousStack;
            }

            return [...previousStack, card];

        });

    };


    return (

        <div className="container mx-auto">


            {/* Title */}

            <div>

                <h1 className="text-4xl font-bold py-1.5">

                    Explore the{" "}

                    <span className="text-pink-500">
                        Technologies
                    </span>

                </h1>

                <p className="text-[#64748B] mb-6">
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>


            {/* Main Content */}

            <div className="flex justify-between gap-5">


                {/* Left side - Technology Cards */}

                <div className="grid grid-cols-3 gap-4 mt-6">

                    {cards.map((card) => (

                        <TechnologyCard
                            key={card.id}
                            card={card}
                            onAdd={handleAdd}
                            isSelected={stack.some(
                                (item) => item.id === card.id
                            )}
                        />

                    ))}

                </div>


                {/* Right side - Your Stack */}

                <YourStack stack={stack} />


            </div>

        </div>
    );
};

export default Card;