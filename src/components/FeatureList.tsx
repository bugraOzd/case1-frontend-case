import FeatureItem from "./FeatureItem";

const FeatureList = ({ features }: { features: any[] }) => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
