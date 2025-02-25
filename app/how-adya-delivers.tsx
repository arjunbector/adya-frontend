import ServiceCard from "@/components/landing-page/service-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
const FEATURES = [
    {
        title: "Personalized Care Plans",
        description: "Pathways that combine sentiments and science"
    },
    {
        title: "Supportive Community",
        description: "A micro-community of your champions"
    },
    {
        title: "Peer Support",
        description: "Chat with others on your journey"
    },
    {
        title: "Holistic Monitoring",
        description: "See. Feel. Measure."
    },
]
export default function HowAdyaDelivers() {
    return (
        <MaxWidthWrapper className="my-20">
            <div>
                <h1 className="text-heading text-5xl font-bold text-center">How Adya delivers better care</h1>
                <p className="text-center">We meet members where they are—with the right care at the right time.</p>
                <div>
                    {FEATURES.map((feature, idx) => (
                        <ServiceCard description={feature.description} title={feature.title} key={idx} idx={idx} />
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    )
}