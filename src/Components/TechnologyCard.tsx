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

            {/* Icon + Badge */}
            <div className="flex justify-between">

                <img
                    className="w-10"
                    src={card.icon}
                    alt={card.name}
                />

                <span className="badge badge-xs badge-warning text-[17px] p-4 rounded-2xl">
                    {card.badge}
                </span>

            </div>


            {/* Name */}
            <div className="text-2xl font-bold">
                {card.name}
            </div>


            {/* Description */}
            <div>
                {card.description}
            </div>


            <div className="divider"></div>


            {/* Information */}
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


            {/* Button */}
            <div className="mt-6">

                <button
                    onClick={() => onAdd(card)}
                    disabled={isSelected}
                    className="btn btn-neutral btn-block rounded-md"
                >
                    {isSelected ? "Added" : "Add to Stack"}
                </button>

            </div>

        </div>
    );
};

export default TechnologyCard;