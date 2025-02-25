import MaxWidthWrapper from "@/components/max-width-wrapper";
import { NumberTicker } from "@/components/ui/number-ticker";

const NUMBERS = [
    {
        value: 43,
        desc: "reduction in billable encounters in a study of 17,601 patients over 8 years",
    },
    {
        value: 85,
        desc: "reduction in oncology billables",
    },
    {
        value: 65,
        desc: "reduction in cardiovascular billables",
    },
    {
        value: 50,
        desc: "reduction in psychiatry billables",
    },
];

export default function Numbers() {
    return (
        <MaxWidthWrapper className="my-10 bg-[#f8f9fb] p-10 rounded-xl">
            <h1 className="text-center text-5xl font-bold text-heading">
                Unmatched impact and outcomes
            </h1>
            <p className="text-center">
                Delivering transformative care through a proven clinically-grounded
                solution
            </p>
            <div className="flex flex-wrap justify-around gap-8 rounded-lg mt-10">
                {NUMBERS.map((number, idx) => (
                    <div className="flex flex-col items-center" key={idx}>
                        <span>
                            <NumberTicker
                                key={idx}
                                value={number.value}
                                className="text-4xl font-bold"
                            />
                            %
                        </span>
                        <p className="max-w-56 text-wrap text-center">{number.desc}</p>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}
