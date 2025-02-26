"use client";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "lucide-react";
import { useRef } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const TESTIMONIALS = [
    {
        name: "Alice Johnson",
        image: "",
        jobTitle: "Cancer Survivor",
        review: "The support and care I received from this service have been life-changing. The personalized care plans and the supportive community have helped me stay positive and focused on my recovery.",
        rating: 5
    },
    {
        name: "Bob Williams",
        image: "",
        jobTitle: "Caregiver",
        review: "As a caregiver, I found the resources and support provided by this service invaluable. The peer support and holistic monitoring have made a significant difference in my loved one's journey.",
        rating: 4
    },
    {
        name: "Catherine Lee",
        image: "",
        jobTitle: "Patient",
        review: "The holistic approach to monitoring my health has been incredibly helpful. The ability to track my progress and connect with others going through similar experiences has been a great source of comfort.",
        rating: 5
    },
    {
        name: "David Kim",
        image: "",
        jobTitle: "Cancer Survivor",
        review: "The personalized care plans and the supportive community have been instrumental in my recovery. The team's dedication and compassion have made all the difference in my journey.",
        rating: 5
    }
];
const Testimonials = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    return (
        <section className="bg-[#FAFAFA] py-10">
            <MaxWidthWrapper>
                <div className="mx-5 flex items-center justify-between md:mx-0 md:items-start">
                    <h1 className="text-left text-3xl font-bold md:text-4xl">
                        What our <span>{" "}
                            <AnimatedText className="text-primary-color" text="Customers" />
                        </span>{" "}
                        say about us
                    </h1>
                    <div className="flex gap-2">
                        <div>
                            <button
                                className="group rounded-full border border-primary-color p-1 transition-all hover:bg-primary-color"
                                onClick={() => {
                                    prevRef?.current?.click();
                                }}
                            >
                                <ArrowLeftIcon className="size-6 stroke-primary-color transition-all group-hover:stroke-white md:size-8" />
                            </button>
                        </div>
                        <div>
                            <button
                                className="group rounded-full border border-primary-color p-1 transition-all hover:bg-primary-color"
                                onClick={() => {
                                    nextRef?.current?.click();
                                }}
                            >
                                <ArrowRightIcon className="size-6 stroke-primary-color transition-all group-hover:stroke-white md:size-8" />
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Carousel
                        plugins={[
                            Autoplay({
                                delay: 5000,
                            }),
                        ]}
                        opts={{
                            loop: true,
                        }}
                        className="mx-4 mt-4 md:mx-0"
                    >
                        <CarouselContent>
                            {TESTIMONIALS.map((testimonial, idx) => (
                                <CarouselItem key={idx} className="md:basis-1/3">
                                    <TestimonialCard
                                        key={idx}
                                        jobTitle={testimonial.jobTitle}
                                        name={testimonial.name}
                                        rating={testimonial.rating}
                                        review={testimonial.review}
                                        image={testimonial.image}
                                    />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious ref={prevRef} className="hidden" />
                        <CarouselNext ref={nextRef} className="hidden" />
                    </Carousel>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Testimonials;

type TetimonialCardProps = {
    name: string;
    image?: string;
    jobTitle: string;
    review: string;
    rating: number;
};
function TestimonialCard({
    jobTitle,
    name,
    rating,
    review,
    image,
}: TetimonialCardProps) {
    return (
        <div className="flex min-h-[21rem] flex-col justify-start gap-6 rounded-3xl bg-white p-4">
            <div className="flex items-center gap-1">
                <Avatar className="size-14">
                    <AvatarImage src={image} />
                    <AvatarFallback className="text-2xl">
                        {name.split(" ")[0][0] + name.split(" ")[1][0]}
                    </AvatarFallback>
                </Avatar>
                <div>
                    <h4 className="font-semibold">{name}</h4>
                    <h5 className="text-xs font-light">{jobTitle}</h5>
                </div>
            </div>
            <p className="max-w-prose text-sm">{review}</p>
            <div className="flex gap-2">
                {Array.from({ length: rating }, (_, index) => (
                    <span key={index}>
                        <StarIcon className="size-5 fill-primary-color stroke-none" />
                    </span>
                ))}
            </div>
        </div>
    );
}