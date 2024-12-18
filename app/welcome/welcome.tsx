import {WaveBottom} from './wave-bottom'
import {SquiggleChart} from './squiggle'
import MWIDataChart from "~/welcome/malawi-chart";

export function Welcome() {
  return (
    <>
      <section className="relative bg-[#fcfcfc] min-h-[50vh] overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-12">
            Malawi Devaluation
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
            <h1 className="text-4xl font-bold text-gray-800">
              Malawi devaluation visualized
            </h1>
            <SquiggleChart/>
          </div>
        </div>
        <WaveBottom className="absolute bottom-0 left-0 w-full text-blue-200"/>
      </section>

      <section>
        <MWIDataChart/>
      </section>
    </>
  );
}
