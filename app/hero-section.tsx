import Image from "next/image";
import lefteaft from "@/public/icons/leaf_left.webp";
import righteaft from "@/public/icons/leaf_right.webp";
import doctors from "@/public/images/hospice.webp";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function HeroSection() {
    return (
        <MaxWidthWrapper className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center">
                <p className="flex items-center">
                    <Image src={lefteaft} alt="left leaf" />
                    Trusted by leading healthcare providers
                    <Image src={righteaft} alt="right leaf" />
                </p>

                <h1 className="my-4 text-wrap text-center text-7xl font-bold text-heading">
                    Putting people at the
                    <br />
                    center of cancer care.
                </h1>
                <p className="text-center text-zinc-500 max-w-prose mb-4">
                    Evidence-based pathways to foster resilience and accelerate
                    rehabilitation during life&apos;s most challenging journeys.
                </p>
                <div>
                    <Button size="lg" className="rounded-full">Get a Demo</Button>
                </div>
                <div>
                    <Image src={doctors} alt="doctors" />
                </div>
            </div>
        </MaxWidthWrapper>
    );
}
