"use client";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import lefteaft from "@/public/icons/leaf_left.webp";
import righteaft from "@/public/icons/leaf_right.webp";
import doctors from "@/public/images/hospice.webp";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
    return (
        <MaxWidthWrapper className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center">
                <p className="flex items-center justify-center">
                    <Image src={lefteaft} alt="left leaf" />
                    <motion.span
                        className="origin-center overflow-hidden text-nowrap"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                    >
                        Trusted by leading healthcare providers
                    </motion.span>
                    <Image src={righteaft} alt="right leaf" />
                </p>

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    className="my-4 text-wrap text-center text-7xl font-bold text-heading"
                >
                    Putting people at the
                    <br />
                    center of cancer care.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeOut", type: "spring", damping: 10 }}
                    className="mb-4 max-w-prose text-center text-zinc-500"
                >
                    Evidence-based pathways to foster resilience and accelerate
                    rehabilitation during life&apos;s most challenging journeys.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1, ease: "easeOut", type: "spring", damping: 10 }}
                >
                    <Button size="lg" className="rounded-full">
                        Get a Demo
                    </Button>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}>
                    <Image src={doctors} alt="doctors" />
                </motion.div>
            </div>
        </MaxWidthWrapper>
    );
}
