import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
    Marquee, MarqueeItem,
    MarqueeFade,
    MarqueeContent
} from "@/components/ui/marquee";
import Image from "next/image";
import amazon from "@/public/images/amazon.png";
import boston from "@/public/images/boston.png";
import bsnf from "@/public/images/bsnf.png";
import loreal from "@/public/images/loreal.png";
import mlb from "@/public/images/mlb.png";
import sofi from "@/public/images/sofi.png";

const COMPANIES = [
    { src: amazon, alt: "Amazon" },
    { src: boston, alt: "Boston" },
    { src: bsnf, alt: "BSNF" },
    { src: loreal, alt: "Loreal" },
    { src: mlb, alt: "MLB" },
    { src: sofi, alt: "Sofi" },
]

export default function CompaniesMarquee() {
    return (
        <MaxWidthWrapper>
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent>
                    {COMPANIES.map((comp, index) => (
                        <MarqueeItem key={index} className="w-full h-32">
                            <Image
                                src={comp.src}
                                alt={comp.alt}
                                className="overflow-hidden"
                            />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </MaxWidthWrapper>
    )
}