import anisha from "../assets/avatar-anisha.png";
import ali from "../assets/avatar-ali.png";
import richard from "../assets/avatar-richard.png";
import shanai from "../assets/avatar-shanai.png";
import Button from "./Button";

const testimonials = [
    {
        id: 1,
        name: "Anisha Li",
        quote: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
        image: anisha,
    },
    {
        id: 2,
        name: "Ali Bravo",
        quote: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
        image: ali,
    },
    {
        id: 3,
        name: "Richard Watts",
        quote: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
        image: richard,
    },

    // {
    //     id: 4,
    //     name: "Shanai Johnson",
    //     quote: "The simplicity and ease of use of Manage have been instrumental in improving our team’s efficiency and collaboration.",
    //     image: shanai,
    // },
];

export default function Testimonials() {
    return (
        <section className="py-10 isolate">
            <h2 className="font-bold text-center text-4xl text-app-gray-700 mb-36">
                What they’ve said
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-app-gray-100 rounded relative text-center p-12"
                    >
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="rounded-full mx-auto absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-24"
                        />
                        <h3 className="font-bold text-app-gray-700 mt-6 mb-3">
                            {testimonial.name}
                        </h3>
                        <p className="text-app-gray-200">“{testimonial.quote}”</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <Button>Get Started</Button>
            </div>
        </section>
    );
}
