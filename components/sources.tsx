const sources: Record<
  string,
  Array<{ name: string; url: string; image: string }>
> = {
  Business: [
    {
      name: "Finshots",
      url: "https://finshots.in/",
      image: "sources/business/finshots.png",
    },
    {
      name: "The Ken",
      url: "https://the-ken.com/",
      image: "sources/business/the-ken-logo-red.png",
    },
    {
      name: "Stratechery",
      url: "https://stratechery.com/",
      image: "sources/business/stratechery.webp",
    },
    {
      name: "Morning Brew",
      url: "https://www.morningbrew.com/",
      image: "sources/business/morning-brew.png",
    },
    {
      name: "TechCrunch",
      url: "https://techcrunch.com/",
      image: "sources/business/tc.png",
    },
    {
      name: "The Wall Street Journal",
      url: "https://www.wsj.com/",
      image: "sources/business/wsj.png",
    },
    {
      name: "The Economist",
      url: "https://www.economist.com/",
      image: "sources/business/economist.png",
    },
  ],
  // Tech: [],
};

const Sources = () => {
  return (
    <div className="flex flex-col gap-y-8">
      {Object.keys(sources).map((category) => (
        <div key={category}>
          <h4 className="text-md mb-3">{category}</h4>
          <div className="grid grid-cols-8 gap-2">
            {sources[category].map((source) => (
              <div key={source.name} className="w-full aspect-square">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={source.image}
                    alt={source.name}
                    className="object-contain w-full bg-white h-full rounded-lg transition-all transform group-hover:scale-105"
                  />
                  <span className="sr-only">{source.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sources;
