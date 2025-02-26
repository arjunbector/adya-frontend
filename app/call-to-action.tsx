"use client";

import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function CallToAction() {
    const words = [
        {
            text: "Join",
        },
        {
            text: "us",
        },
        {
            text: "to",
        },
        {
            text: "fight",
        },
        {
            text: "Cancer.",
            className: "text-primary-color",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center my-20">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
                The road to freedom starts from here
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <Button>
                    Join now
                </Button>
            </div>
        </div>
    );
}


