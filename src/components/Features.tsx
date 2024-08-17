import pattern from "../assets/bg-tablet-pattern.svg";

const features = [
    {
        id: 1,
        title: "Track company-wide progress",
        description:
            "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
        id: 2,
        title: "Advanced built-in reports",
        description:
            "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
        id: 3,
        title: "Everything you need in one place",
        description:
            "Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution.",
    },
];

export default function Features() {
    return (
        <section className="relative py-10">
            <img
                src={pattern}
                alt=""
                className="absolute -z-10 top-0 translate-x-2/3 -translate-y-3/4 md:bottom-0 md:left-0 md:translate-y-1/3 md:-translate-x-2/3"
            />
            <div className="grid md:grid-cols-2 gap-12 md:gap-8 px-4 max-w-6xl mx-auto">
                <div className="text-center md:text-left">
                    <h2 className="font-bold text-app-gray-700 leading-[1.2] text-[clamp(theme(fontSize.4xl),4vh+.1rem,theme(fontSize.5xl))]">
                        What’s different about Manage?
                    </h2>
                    <p className="text-app-gray-200 mt-6 md:pr-10 lg:pr-32">
                        Manage provides all the functionality your team needs,
                        without the complexity. Our software is tailor-made for
                        modern digital product teams.
                    </p>
                </div>
                <div className="space-y-10">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="md:flex items-baseline gap-6"
                        >
                            <span className="hidden md:block font-medium bg-app-orange-400 text-white py-2 px-6 rounded-full">
                                {feature.id.toString().padStart(2, "0")}
                            </span>
                            <div>
                                <h3 className="font-bold mb-3 text-app-gray-700 flex items-center gap-3 bg-app-orange-100 md:bg-transparent -mr-4 md:mr-0 rounded-tl-full rounded-bl-full">
                                    <span className="md:hidden font-medium bg-app-orange-400 text-white py-2 px-6 rounded-full">
                                        {feature.id.toString().padStart(2, "0")}
                                    </span>
                                    {feature.title}
                                </h3>
                                <p className="text-app-gray-200">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
