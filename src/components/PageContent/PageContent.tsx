import { Email } from "../Email/Email";
import { Illustration } from "../Illustration/Illustration";
import { Logo } from "../Logo/Logo";

export function PageContent() {
  return (
    <div className="flex flex-col items-center gap-15">
      <Logo />
      <div className="flex flex-col gap-8 w-full items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="md:text-6xl text-3xl font-light text-(--gray-400)">We are launching <span className="font-bold text-black">soon!</span></h1>
          <p className="sm:text-2xl text-xl">Subscribe and get notified</p>
        </div>
        <Email />
      </div>
      <Illustration />
    </div>
  )
}