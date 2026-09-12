import { RxCross2 } from "react-icons/rx";
import type { Icard } from "../types/card";

interface YourStackProps {
    stack: Icard[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const YourStack = ({
    stack,
    onRemove,
    onRemoveAll
}: YourStackProps) => {

    return (
        <div className="w-150 shadow-sm mt-6 rounded-2xl">

            <div className="card-body">

                <h2 className="text-3xl font-bold">
                    Your Stack
                </h2>

                <p className="pb-3 text-[#94A3B8] text-[18px]">
                    {stack.length === 0
                        ? "No technologies selected yet."
                        : `${stack.length} Technology Selected`
                    }
                </p>


                {stack.length === 0 ? (

                    <p className="border border-dotted border-[#94A3B8] rounded-[10px] text-[#94A3B8] p-6">
                        Your stack is empty
                    </p>

                ) : (

                    <>
                        <div className="space-y-2">

                            {stack.map((tech) => (

                                <div
                                    key={tech.id}
                                    className="flex items-center justify-between border border-[#D9E2EC] p-3 rounded-xl"
                                >

                                    <div className="flex items-center gap-3">

                                        <img
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-10 h-10"
                                        />

                                        <div>

                                            <h3 className="font-bold">
                                                {tech.name}
                                            </h3>

                                            <p className="text-xs text-[#94A3B8]">
                                                {tech.category}
                                            </p>

                                        </div>

                                    </div>

                                    <button
                                        onClick={() => onRemove(tech.id)}
                                        className="text-3xl text-[#94A3B8] hover:text-red-500"
                                    >
                                        <RxCross2 />
                                    </button>

                                </div>

                            ))}

                        </div>

                        <button
                            onClick={onRemoveAll}
                            className="btn btn-error w-full mt-16 rounded-xl text-xl"
                        >
                            Remove All
                        </button>

                    </>

                )}

            </div>

        </div>
    );
};

export default YourStack;