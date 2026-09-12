import type { Icard } from "../types/card";

interface YourStackProps {
    stack: Icard[];
}

const YourStack = ({ stack }: YourStackProps) => {

    return (
        <div className="w-150 shadow-sm mt-6 rounded-2xl">

            <div className="card-body">

                <h2 className="text-3xl font-bold">
                    Your Stack
                </h2>


                <p className="pb-3 text-[#94A3B8] text-[18px]">
                    {stack.length === 0
                        ? "No technologies selected yet."
                        : `${stack.length} technology selected.`
                    }
                </p>


                {stack.length === 0 ? (

                    <p className="border border-dotted border-[#94A3B8] rounded-[10px] text-[#94A3B8] p-6">
                        Your stack is empty
                    </p>

                ) : (

                    <div className="space-y-3">

                        {stack.map((tech) => (

                            <div
                                key={tech.id}
                                className="flex items-center gap-3 border p-3 rounded-lg"
                            >

                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-8"
                                />

                                <div>

                                    <h3 className="font-bold">
                                        {tech.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {tech.category}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
};

export default YourStack;