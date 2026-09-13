import type { Icard } from "../types/card";

interface TechnologyCardProps {
    card: Icard;
    onAdd: (card: Icard) => void;
    isSelected: boolean;
}

const TechnologyCard = ({
    card,
    onAdd,
    isSelected
}: TechnologyCardProps) => {

    return (
        <div className="card card-body shadow-sm space-y-3">

            <div className="flex justify-between items-start">

                <div className="flex items-center gap-3 md:block">

                    <img
                        className="w-10"
                        src={card.icon}
                        alt={card.name}
                    />

                    <div className="text-2xl font-bold md:mt-3">
                        {card.name}
                    </div>

                </div>

                <span className="badge badge-xs badge-warning text-[17px] p-4 rounded-2xl">
                    {card.badge}
                </span>

            </div>

            <div>
                {card.description}
            </div>

            <div className="divider"></div>

            <div className="flex justify-between items-center">

                <div className="bg-[#F1F5F9] px-3 rounded-md">
                    {card.category}
                </div>

                <div>
                    {card.difficulty}
                </div>

                <div className="font-semibold">
                    <span className="text-yellow-400 p-1">
                        ★
                    </span>

                    {card.rating}
                </div>

            </div>

            <div className="mt-6">

                <button
                    onClick={() => onAdd(card)}
                    disabled={isSelected}
                    className="btn btn-neutral btn-block rounded-md"
                >
                    {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                </button>

            </div>

        </div>
    );
};

export default TechnologyCard;