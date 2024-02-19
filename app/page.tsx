import Nav from "@/components/nav";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <div className="bg-raisin">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl heading">
                <a href="/">Tapan Rai</a>
              </h1>
              <h2 className="mt-2 text-lg font-medium tracking-tight text-slate-200 sm:text-xl heading">
                Software Engineer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build scalable software.
              </p>
              <Nav />
            </div>
          </header>

          <main className="lg:w-1/2 pt-24">
            <section className="mb-16 scroll-mt-16 lg:scroll-mt-24" id="about">
              <h1 className="font-bold mb-4 heading">About me</h1>
              <div className="flex flex-col gap-y-4">
                <p>
                  I started my career back when I was a sophomore in college. My
                  goal at the time was to build cool stuff and I was lucky
                  enough to find people near me who wanted to do the same.
                  Fast-forward to today and I{"'"}m still chasing after the
                  coolest of ideas. I{"'"}ve worked across various domains viz.
                  AR/VR, Productivity, Fintech and HR Tech.
                </p>
                <p>
                  Most recently I{"'"}ve been the Co-founder of Numans, an HR
                  operations management tool for the next generation of
                  knowledge workers.
                </p>
                <p>
                  When I{"'"}m not in front a screen, I{"'"}m usually out
                  playing with my dogs, learning some obscure facts, trying to
                  figure out how to reduce my carbon footprint or simply
                  listening to podcasts.
                </p>
              </div>
            </section>
            <section
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              id="experience"
            >
              <h1 className="font-bold mb-4 heading">Experience</h1>
              <Timeline />
            </section>
            <section className="h-screen py-24" id="inspiration">
              Inspiration
            </section>
            <section className="h-screen py-24" id="writing">
              Writing & Playlists
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
