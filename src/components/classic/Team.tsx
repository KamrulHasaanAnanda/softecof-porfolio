import Image from "next/image";
import { team } from "./data";

const Team = () => {
    return (
        <section id="team" aria-labelledby="team-title" className="c-on-dark bg-c-night text-white">
            <div className="c-wrap c-section grid items-start gap-x-16 gap-y-9 min-[1021px]:grid-cols-[1fr_2.4fr]">
                <div className="min-[1021px]:sticky min-[1021px]:top-[100px]">
                    <h2 id="team-title" className="c-h2 !text-white">
                        The people behind Softecof
                    </h2>
                    <p className="m-0 mt-4 max-w-[360px] text-[19px] leading-[1.5] text-c-on-night text-pretty">Real people on your account, not a faceless ticket queue.</p>
                </div>
                <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-8 p-0 min-[761px]:grid-cols-3">
                    {team.map((m) => (
                        <li key={m.name} className="group">
                            {/* Black-and-white photos multiplied onto one colour, so different backgrounds read as a set. */}
                            <div className="isolate overflow-hidden rounded-[12px] bg-c-peach">
                                <Image
                                    src={m.image}
                                    alt={`Portrait of ${m.name}`}
                                    width={520}
                                    height={650}
                                    sizes="(max-width: 760px) 50vw, (max-width: 1020px) 33vw, 300px"
                                    className="block aspect-[4/5] w-full object-cover mix-blend-multiply brightness-[1.18] contrast-[1.04] grayscale transition duration-300 group-hover:mix-blend-normal group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0 motion-reduce:transition-none"
                                />
                            </div>
                            <h3 className="m-0 mt-3 text-[19px] font-semibold leading-[1.25]">{m.name}</h3>
                            <p className="m-0 mt-0.5 text-[15.5px] leading-[1.35] text-c-on-night">{m.role}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Team;
