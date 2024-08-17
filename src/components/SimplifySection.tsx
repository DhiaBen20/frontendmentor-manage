import desktopBd from "../assets/bg-simplify-section-desktop.svg";
import mobileBg from "../assets/bg-simplify-section-mobile.svg";
import Button from "./Button";

export default function SimplifySection() {
  return (
    <section className="bg-app-orange-400 py-20 isolate overflow-hidden relative">
      <img src={mobileBg} alt="" className="absolute -z-10 md:hidden left-0 bottom-0" draggable="false" />
      <img src={desktopBd} alt="" className="absolute -z-10 hidden md:block top-0 min-w-[1439px] min-h-[350px] md:-right-1/3 lg:right-0" draggable="false" />
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-6 md:gap-0 md:flex-row items-center">
        <h2 className="font-bold text-white text-4xl flex-1 text-center md:text-left">
          Simplify how your team works today.
        </h2>
        <div className="md:flex-1 md:flex md:justify-end">
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
