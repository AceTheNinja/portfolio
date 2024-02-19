import React from "react";

const data = [
  {
    date: "Present",
    title: "Co-founder & CTO",
    previousTitles: [],
    company: "Numans",
    url: "https://numanshq.com",
    description: `As the CTO of Numans, I led the development of our product, designed to automate the onboarding process for remote employees. I built and managed a team of five engineers, promoting synergy and cross collaboration between operations, product, and CX. We had raised $650K in pre-seed funding in 2021 and as of 2024 Numans processes over 300 new hires every month.`,
    tech: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Nest.js",
      "MongoDB",
      "AWS",
      "GraphQL",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "React",
      "Next.js",
    ],
  },
  {
    date: "2021 — 2022",
    title: "Software Engineer II",
    previousTitles: [],
    company: "Niyo",
    url: "https://goniyo.com",
    description: `At Niyo, my responsibilities included overseeing backends that facilitated transactions and bank transfer services, ensuring seamless financial operations. I led the development of integrations for transaction enrichment with M2P, to expand our service capabilities globally. Additionally, I led the implementation of testing workflows in our CI/CD pipelines across all BFFs, to ensure high reliability and performance of our banking solutions.`,
    tech: ["Nest.js", "TypeScript", "Node.js", "MongoDB", "React"],
  },
  {
    date: "2019 — 2021",
    title: "Lead Software Engineer",
    previousTitles: [],
    company: "OSlash",
    url: "https://oslash.com",
    description: `At OSlash, I contributed to the development of a Chrome extension aimed at improving workspace productivity and access control. My work included creating an end-to-end encryption SDK for the password manager using Elliptic Curve Cryptography, enabling secure data sharing among users and groups. Additionally, I led the development of the short links product, simplifying resource sharing and management within the workspace.`,
    tech: [
      "AppSync",
      "GraphQL",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "AWS",
      "Next.js",
    ],
  },
  {
    date: "2019 — 2019",
    title: "Software Engineer",
    previousTitles: [],
    company: "Scapic",
    url: "https://scapic.com",
    description: `At Scapic, a pioneering company in the Augmented and Virtual Reality sector, I focused on developing solutions that bridge the gap between AR/VR content creators and users. My contributions included creating a compression pipeline for 3D models, significantly reducing their size from multiple megabytes to just kilobytes, which streamlined the content distribution process. Additionally, I developed the backend for Scapic's AR SDK, which has been utilized by over 8 million people.`,
    tech: [
      "Three.js",
      "WebGL",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "React",
      "AWS",
    ],
  },
  {
    date: "2018 — 2019",
    title: "Software Engineer",
    previousTitles: [],
    company: "Cryptorai",
    url: "https://cryptorai.com",
    description: `At Cryptorai, a privacy-focused cryptocurrency portfolio management tool, I implemented a data aggregation pipeline that collects information on 1000+ coins from 60+ crypto exchanges, utilizing multi-threaded cron instances for efficiency. To accommodate the vast amount of data, I scaled our infrastructure to support the storage and processing of 7.2 billion data points monthly. Furthermore, I led the migration of the application's frontend database from AsyncStorage to Realm, doubling the app's performance and improving user experience by facilitating faster data retrieval and smoother interactions.`,
    tech: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "React",
      "Azure",
    ],
  },
];

const Timeline = () => {
  return (
    <ol>
      {data.map((item) => (
        <li key={item.date} className="mb-4">
          <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 p-8 rounded-lg experience-card cursor-pointer">
            <header
              className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
              aria-label="2018 to Present"
            >
              {item.date}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-slate-200">
                <div>
                  <a
                    className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-400 focus-visible:text-blue-400 group/link text-base"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {item.title}
                      {" ・ "}
                      <span className="inline-block">
                        {item.company}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                {item.previousTitles.map((title) => (
                  <div key={title}>
                    <div className="text-slate-500" aria-hidden="true">
                      {title}
                    </div>
                  </div>
                ))}
              </h3>
              <p className="mt-2 text-sm leading-normal">{item.description}</p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                {item.tech.map((tech) => (
                  <li key={tech} className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 pill">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
