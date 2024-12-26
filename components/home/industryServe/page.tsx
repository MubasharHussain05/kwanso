import Link from "next/link";

export const Industry = () => {

  interface industries {
    title: string;
    description: string;
    image: string;
    link: string
  }
  const industries:industries[] = [
    {
      title: "Retail & E-commerce",
      description: "Discover how we help retail & e-commerce businesses thrive",
      image: "/industryServe/retail-ecommerce.webp",
      link: "/retail-ecommerce", // Add a link here for each industry
    },
    {
      title: "Healthcare",
      description: "Discover how we help healthcare businesses thrive",
      image: "/industryServe/healthcare.webp",
      link: "/healthcare", // Add a link here for each industry
    },
    {
      title: "Education",
      description: "Discover how we help education institutions thrive",
      image: "/industryServe/education.webp",
      link: "/education", // Add a link here for each industry
    },
    {
      title: "Financial Services",
      description: "Discover how we help financial services businesses thrive",
      image: "/industryServe/legal.webp",
      link: "/financial-services", // Add a link here for each industry
    },
  ];

  return (
    <section className="px-2 md:px-6 py-16 lg:px-12 container mx-auto">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-4">Industries We Serve</h2>
        <p className="text-gray-600 text-lg md:text-xl mb-16">
          We have extensive experience across various industries, delivering tailored solutions to meet specific needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.link} // Dynamic link
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${industry.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 group-hover:from-black/90 group-hover:to-black/30 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  {industry.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base">{industry.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
