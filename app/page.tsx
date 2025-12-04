"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Leaf,
  Palette,
  ArrowRight,
  Factory,
  LeafIcon,
  Plane,
  ShoppingBag,
  Shirt,
  Trash,
} from "lucide-react";

export default function Home() {
  const stats = [
    {
      number: "92M",
      label: "Tons of textile waste annually",
      description: "From fast fashion and packaging waste",
    },
    {
      number: "10%",
      label: "Global carbon emissions",
      description: "Attributed to e-commerce and shipping",
    },
    {
      number: "85%",
      label: "Landfill contribution",
      description: "From clothing and delivery packaging",
    },
    {
      number: "2700 L",
      label: "Water per garment",
      description: "Water consumption for one cotton T-Shirt",
    },
  ];

  const impacts = [
    {
      title: "Clothing Demand",
      description:
        "The global demand for clothing has been increasing every single year. Between 2000 and 2025, the demand for garments nearly doubled, and experts expect this growth trend to continue until at least 2030. A major part of this rise is driven by fast-fashion culture, which focuses on producing new collections as quickly and cheaply as possible. This culture evolved because people buy more clothes while wearing them less — a clear example of the principle of supply and demand..However, this system comes with severe consequences for the environment.  ",
      image: "/FashFaschionMarket.jpg",
    },
    {
      title: "Pollution and Carbon emissions",
      description:
        "Fast fashion is now considered one of the world’s largest sources of pollution. It is responsible for about 10% of global CO₂ emissions, which is more than the emissions produced by all international flights and all maritime shipping combined. This makes the fashion industry one of the most harmful industries for the climate. ",
      image: "/C02comparision.jpg",
    },
    {
      title: "Envrionmental damage",
      description:
        "But the environmental damage goes far beyond CO₂. One of the most dangerous aspects of textile production is the dyeing process. The chemicals used to dye clothes are often extremely toxic, containing heavy metals and other pollutants. In many producing countries, factories dump these chemical dyes directly into rivers, poisoning ecosystems and contaminating drinking water. Since fast fashion relies on very low production costs, companies often avoid investing in environmentally friendly waste-treatment systems. ",
      image: "/toxicwaste.jpg",
    },
    {
      title: "Production",
      description:
        "Another major problem is the material used for cheap clothing. Most fast-fashion products are made of polyester, a fabric derived from crude oil. Producing polyester requires large amounts of fossil fuels, releases microplastics into the environment, and does not biodegrade. When polyester clothing is washed, tiny plastic particles enter rivers and oceans, contributing to the global microplastic crisis. ",
      image: "/FossilFashio.jpg",
    },
    {
      title: "Work Envrionment",
      description:
        "The low prices of fast fashion also come at a human cost. Workers in garment factories often face dangerous working conditions, extremely low wages, and excessive working hours. Many employees are underaged, working 11 or more hours a day, seven days a week, just to meet the production deadlines set by Western companies. ",
      image: "/FastFashionFabric.jpg",
    },
  ];

  const solutions = [
    {
      title: "Locally produced clothing Labels",
      description:
        "Despite these issues, there are alternatives. Consumers can choose locally produced clothing labels, which usually offer better transparency, fair working conditions, and higher environmental standards.",
      icon: "🛍️",
    },
    {
      title: "Eco materials",
      description:
        "Another sustainable option is choosing materials like bamboo fiber, which grows quickly, needs little water, and is fully biodegradable",
      icon: "🌱",
    },
    {
      title: "Second hand & more wearing",
      description:
        "the most environmentally friendly option is to wear your clothes more often, buy second-hand items, and choose quality over quantity when purchasing new clothing. ",
      icon: "♻️",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white to-secondary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  The Hidden Cost of Fast Fashion
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
                  Every click, every delivery, every purchase has an
                  environmental impact. Discover how fast fashion contributes to
                  pollution and what we can do to make a difference.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/FastShopping.jpg"
                alt="Sustainable shopping"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              The Numbers Tell the Story
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/5 to-primary/5 p-8 rounded-2xl border border-secondary/20 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <p className="text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </p>
                </div>
                <p className="text-foreground/70">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Fast Fashion visualized
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {[
              {
                icon: <Palette className="text-pink-500 w-8 h-8" />,
                label: "Design & Trends",
              },
              {
                icon: <LeafIcon className="text-green-500 w-8 h-8" />,
                label: "Materials",
              },
              {
                icon: <Factory className="text-gray-700 w-8 h-8" />,
                label: "Production",
              },
              {
                icon: <Plane className="text-blue-500 w-8 h-8" />,
                label: "Transport",
              },
              {
                icon: <ShoppingBag className="text-yellow-500 w-8 h-8" />,
                label: "Retail & Marketing",
              },
              {
                icon: <Shirt className="text-purple-500 w-8 h-8" />,
                label: "Consumption",
              },
              {
                icon: <Trash className="text-red-500 w-8 h-8" />,
                label: "Waste",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 md:gap-6">
                <div className="flex flex-col items-center justify-center w-27 h-27 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all p-4">
                  {step.icon}
                  <span className="text-sm md:text-base font-medium text-foreground text-center">
                    {step.label}
                  </span>
                </div>

                {index < 6 && (
                  <ArrowRight className="text-foreground/50 w-6 h-6 md:w-8 md:h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pollution" className="py-15  bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Fast Fashion
            </h2>
          </div>

          <div className="space-y-12">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        {impact.title}
                      </h3>
                      <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        {impact.description}
                      </p>
                      <div className="flex gap-4">
                        <div className="h-1 w-16 bg-primary rounded"></div>
                        <div className="h-1 w-16 bg-secondary rounded"></div>
                      </div>
                    </div>
                    <div className="flex justify-between gap-5">
                      <img
                        src={impact.image || "/placeholder.svg"}
                        alt={impact.title}
                        className="w-full h-auto rounded-2xl shadow-lg"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={impact.image || "/placeholder.svg"}
                      alt={impact.title}
                      className="w-full h-auto rounded-2xl shadow-lg"
                    />

                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-4">
                        {impact.title}
                      </h3>
                      <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                        {impact.description}
                      </p>
                      <div className="flex gap-4">
                        <div className="h-1 w-16 bg-primary rounded"></div>
                        <div className="h-1 w-16 bg-secondary rounded"></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Alternatives & Solution
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl border border-primary/10 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="sources" className="py-20 md:py-28 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Sources
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The data and insights presented on this page are backed by
              research and reports from credible organizations:
            </p>
          </div>

          <ul className="space-y-4 list-disc list-inside text-foreground/80">
            <li>
              Ellen MacArthur Foundation.{" "}
              <a
                href="https://ellenmacarthurfoundation.org/"
                className="text-primary underline"
              >
                https://ellenmacarthurfoundation.org/
              </a>
            </li>
            <li>
              McKinsey & Company, “The State of Fashion 2025.”{" "}
              <a
                href="https://www.mckinsey.com/industries/retail/our-insights/state-of-fashion"
                className="text-primary underline"
              >
                https://www.mckinsey.com/industries/retail/our-insights/state-of-fashion
              </a>
            </li>
            <li>
              UN Environment Programme (UNEP), “Fashion and the Environment.”{" "}
              <a
                href="https://www.unep.org/resources/report/fashion-and-environment"
                className="text-primary underline"
              >
                https://www.unep.org/resources/report/fashion-and-environment
              </a>
            </li>
            <li>
              World Bank, “Water Use in Textile Production.”{" "}
              <a
                href="https://www.worldbank.org/en/topic/water/overview"
                className="text-primary underline"
              >
                https://www.worldbank.org/en/topic/water/overview
              </a>
            </li>
            <li>
              Textile Exchange, “Preferred Fiber & Materials Market Report
              2024.”{" "}
              <a
                href="https://textileexchange.org/"
                className="text-primary underline"
              >
                https://textileexchange.org/
              </a>
            </li>
            <li>
              Greenpeace, “Pollution in the Fashion Industry.”{" "}
              <a
                href="https://www.greenpeace.org/international/"
                className="text-primary underline"
              >
                https://www.greenpeace.org/international/
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
