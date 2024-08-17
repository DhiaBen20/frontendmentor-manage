import illustration from "../assets/illustration-intro.svg";
import Button from "./Button";

export default function Hero() {
    return (
        <main className="relative mx-auto max-w-6xl px-6 py-20 flex flex-col md:flex-row gap-14 lg:gap-20 md:items-center">
            <div className="flex-1 flex flex-col gap-8 items-center md:items-start order-1 text-center md:text-left">
                <h1 className="text-app-gray-700 font-bold leading-[1.2] xpx-[clamp(theme(spacing.0),1vw,theme(spacing.6))] md:px-0 text-[clamp(theme(fontSize.4xl),5vw+.1rem,theme(fontSize.6xl))]">
                    Bring everyone together to build better products.
                </h1>
                <p className="text-app-gray-200 font-medium px-6xmd:pl-0xmd:pr-36">
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>
                <Button>Get started</Button>
            </div>
            <div className="flex-1 order-0 md:order-1">
                <img src={illustration} alt="" className="max-w-full mx-auto" />
            </div>
        </main>
    );
}
