import { use, useState } from "react";

import type { Icard } from "../types/card";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";


interface CardsProps {
    cardsPromise: Promise<Icard[]>;
}


const Card = ({ cardsPromise }: CardsProps) => {

    const cards = use(cardsPromise);

    const [stack, setStack] = useState<Icard[]>([]);

    const handleAdd = (card: Icard) => {

        if (stack.some((item) => item.id === card.id)) {
            return;
        }

        toast.success(`${card.name} added successfully`);

        setStack((previousStack) => [
            ...previousStack,
            card
        ]);
    };

    const handleRemove = (id: string) => {

        const removedTech = stack.find(
            (item) => item.id === id
        );

        setStack((previousStack) =>
            previousStack.filter(
                (item) => item.id !== id
            )
        );

        if (removedTech) {
            toast.success(
                `${removedTech.name} removed successfully`
            );
        }
    };

    const handleRemoveAll = () => {

        setStack([]);

        toast.warning(
            "All technologies removed!"
        );
    };


    return (
        <div className="container mx-auto">

            <div className="text-center md:text-left">
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

            <div className="md:flex md:justify-between gap-5">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

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

                <YourStack
                    stack={stack}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                />

            </div>

        </div>
    );
};

export default Card;