import HeadingContent from "@/common/heading";
import { styles, combine } from "@/styles";

const YachtTypes = () => {
  const yachtTypes = [
    {
      title: "Sailing Catamarans",
      description: "Spacious, shaded, and stable. Perfect for families, groups, and overnight charters."
    },
    {
      title: "Power Catamarans", 
      description: "Fast, comfortable, and efficient. Ideal for day charters that reach Phi Phi or Phang Nga Bay."
    },
    {
      title: "Luxury Motor Yachts",
      description: "Private and stylish. A premium option for smaller groups who want speed and comfort."
    },
    {
      title: "Superyachts",
      description: "The most luxurious experience available in Phuket, complete with first-class service."
    },
    {
      title: "Bareboats",
      description: "For licensed sailors, enjoy the freedom of captaining your own yacht and exploring at your own pace."
    }
  ];

  return (
    <section className={combine("bg-white py-16", styles.px1)}>
      <div className={styles.container}>
        <HeadingContent
          heading="Yachts for Every Occasion"
          description="As a professional Phuket yacht charter operator, Faraway Yachting offers a wide selection of vessels for every type of experience:"
        />
        
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {yachtTypes.map((yacht, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <h3 className={combine("font-bold text-zink mb-3", styles.h3)}>
                  {yacht.title}
                </h3>
                <div className="mb-4">
                  <img src="/images/rframe4.png" alt="" className="w-16" />
                </div>
                <p className={combine("text-zink leading-relaxed", styles.p3)}>
                  {yacht.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YachtTypes;
