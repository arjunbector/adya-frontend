import Image from "next/image";
import lefteaft from "@/public/icons/leaf_left.webp"
import righteaft from "@/public/icons/leaf_right.webp"
import doctors from "@/public/images/hospice.webp"
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function HeroSection() {
    return (
        <MaxWidthWrapper className="min-h-screen flex flex-col items-center justify-center">
            <div className="container">
                <p className="flex items-center">
                    <Image src={lefteaft} alt="left leaf" />
                    Trusted by leading healthcare providers
                    <Image src={righteaft} alt="right leaf" />
                </p>

                <h1>Putting people at the center of cancer care.</h1>
                <p>Evidence-based pathways to foster resilience
                    and accelerate rehabilitation during life&apos;s most
                    challenging journeys.</p>
                    <div>
                        <Button>Get a Demo</Button>
                    </div>
                    <div>
                        <Image src={doctors} alt="doctors"/>
                    </div>
            </div>
        </MaxWidthWrapper>
    )
}