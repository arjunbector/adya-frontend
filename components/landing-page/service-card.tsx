import Image from "next/image";
import phone from "@/public/images/phone.png";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    idx: number;
}
export default function ServiceCard({
    title,
    description,
    idx,
}: ServiceCardProps) {
    return (
        <div
            className={cn(
                "bg-[#f8f9fb] p-4 rounded-lg w-[60rem] mx-auto flex h-60 relative my-32",
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
        >
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={cn("absolute bottom-0", idx % 2 === 0 ? "right-10" : "left-10")}>
                <Image className="h-80 w-auto" src={phone} alt="phone" />
            </div>
        </div>
    );
}
