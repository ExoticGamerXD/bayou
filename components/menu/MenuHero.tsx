import MaskReveal from "@/components/animations/MaskReveal";
import FadeSlideUp from "@/components/animations/FadeSlideUp";
import BrassRule from "@/components/ui/BrassRule";
import Eyebrow from "@/components/ui/Eyebrow";

export default function MenuHero() {
  return (
    <section
      className="relative bg-bayou-cream overflow-hidden pt-32 pb-14 md:pt-40 md:pb-16"
      aria-label="Menu introduction"
    >
      {/* Ambient radial warm light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(182,138,78,0.055) 0%, transparent 70%)",
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-2xl">
          <FadeSlideUp>
            <Eyebrow className="mb-6">The full menu</Eyebrow>
          </FadeSlideUp>

          <MaskReveal delay={0.08}>
            <h1 className="font-display text-display-xl text-bayou-ink text-balance leading-[1.0] mb-6">
              What we cook,
              <br />
              <em className="text-bayou-brass">how we cook it.</em>
            </h1>
          </MaskReveal>

          <FadeSlideUp delay={0.22}>
            <p className="font-body text-body-lg text-bayou-stone leading-relaxed max-w-prose mb-10">
              Everything here is built on a roux — patience, heat, and the right
              ingredients. Sourced from Cork, cooked the Louisiana way. Served
              daytime, Wednesday to Sunday. Come hungry.
            </p>
          </FadeSlideUp>

          <FadeSlideUp delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 text-body-xs font-body tracking-widest uppercase">
              {[
                { symbol: "GF", label: "Gluten free" },
                { symbol: "V",  label: "Vegetarian"  },
                { symbol: "VE", label: "Vegan"        },
                { symbol: "DF", label: "Dairy free"   },
              ].map(({ symbol, label }) => (
                <span key={symbol} className="flex items-center gap-2 text-bayou-stone">
                  <span className="border border-bayou-cobalt/35 px-1.5 py-0.5 text-[0.6rem] tracking-widest text-bayou-cobalt">
                    {symbol}
                  </span>
                  {label}
                </span>
              ))}
              <span className="flex items-center gap-2 text-bayou-stone/60">
                <span className="flex gap-0.5" aria-hidden="true">
                  {[1, 2, 3].map((i) => (
                    <span key={i} className="inline-block w-1.5 h-1.5 rounded-full bg-bayou-ember" />
                  ))}
                </span>
                Heat scale
              </span>
            </div>
          </FadeSlideUp>
        </div>
      </div>

      {/* Bottom fade into nav */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-bayou-cream to-transparent"
      />

      <BrassRule className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
