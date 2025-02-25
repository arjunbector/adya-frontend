import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
    Marquee, MarqueeItem,
    MarqueeFade,
    MarqueeContent
} from "@/components/ui/marquee";
import Image from "next/image";
import amazon from "@/public/images/amazon.png";

export default function CompaniesMarquee() {
    return (
        <MaxWidthWrapper>
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent>
                    {new Array(10).fill(null).map((_, index) => (
                        <MarqueeItem key={index} className="w-full h-32">
                            <Image
                                src={amazon}
                                alt="company"
                                className="overflow-hidden"
                            />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </MaxWidthWrapper>
    )
}