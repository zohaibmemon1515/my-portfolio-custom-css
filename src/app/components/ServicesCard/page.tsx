import {
  GraphicDesignCard,
  FrontendDevelopmentCard,
  VideoEditingCard,
} from "@/components/ui/ServicesCard/page";

const ServiceCard = () => {
  return (
    <>
      <div className="embla-container">
        <div className="embla-slide">
          <GraphicDesignCard />
        </div>
        <div className="embla-slide">
          <FrontendDevelopmentCard />
        </div>
        <div className="embla-slide">
          <VideoEditingCard />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
