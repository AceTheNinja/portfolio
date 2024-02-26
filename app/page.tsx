import { fetchArticles } from "@/api/dev-to";
import Nav from "@/components/nav";
import Socials from "@/components/socials";
import Sources from "@/components/sources";
import Timeline from "@/components/timeline";

export default async function Home() {
  const articles = await fetchArticles();

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
            <div className="mt-4 lg:mt-0">
              <Socials />
            </div>
          </header>

          <main className="lg:w-1/2 pt-10 lg:pt-24">
            <section className="mb-16 scroll-mt-16 lg:scroll-mt-24" id="about">
              <h1 className="font-bold mb-4 heading">About me</h1>
              <div className="flex flex-col gap-y-4">
                <p>
                  I started my career back when I was a sophomore in college. My
                  goal at the time was to build cool stuff and I was lucky
                  enough to find people near me who wanted to do the same.
                  Fast-forward to today and I{"'"}m still chasing after the
                  coolest of ideas. I{"'"}ve worked across various domains viz.
                  AR/VR, Productivity, Fin-tech and HR Tech.
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
              className="mb-16 scroll-mt-16 flex flex-col gap-y-8 lg:scroll-mt-24"
              id="experience"
            >
              <div>
                <h1 className="font-bold mb-4 heading">Experience</h1>
                <Timeline />
              </div>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1qO1Nx_pT4ms6CRwWAaLogYiIX-Fb8ycH/edit?usp=sharing&ouid=102098534918446708147&rtpof=true&sd=true"
                className="group transition-all hover:text-blue-500 font-semibold border-b border-gray-700 w-min whitespace-nowrap"
              >
                Resume{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </section>
            <section
              className="mb-16 scroll-mt-16 flex flex-col lg:scroll-mt-24"
              id="writing"
            >
              <h1 className="font-bold mb-4 heading">Writings on the wall</h1>
              <div className="flex flex-col gap-y-4">
                {articles.map((article) => (
                  <a
                    key={article.id}
                    href={article.url}
                    target="_blank"
                    className="group relative transition-all sm:gap-8 md:gap-4 flex flex-col md:flex-row p-8 rounded-lg experience-card cursor-pointer hover:-translate-y-1"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={article.social_image}
                      alt={article.title}
                      className="rounded-lg md:w-36"
                    />
                    <h2 className="font-semibold">{article.title}</h2>
                  </a>
                ))}
              </div>
            </section>
            <section
              className="mb-16 scroll-mt-16 flex flex-col gap-y-8 lg:scroll-mt-24"
              id="sources"
            >
              <div>
                <h1 className="font-bold mb-4 heading">Sources</h1>
                <p>
                  A lot of times folks ask me where I learn stuff from or where
                  do I get my information. Finally I will have something to give
                  them. This is just a list of people, blogs, newsletters and
                  podcasts I follow to keep up with everything.
                </p>
              </div>
              <Sources />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
