import { CardData } from "./CardGrid";

type ModalProps = {
  showModal: boolean;
  cardDetails: CardData | null;
  onClose: () => void;
};

const ExperienceModal: React.FC<ModalProps> = ({
  showModal,
  cardDetails,
  onClose,
}) => {
  if (!showModal || !cardDetails) {
    return null;
  }

  return (
    <div
      className={`fixed z-50 left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 ${
        showModal ? "modalIn" : "modalOut"
      }`}
    >
      <div className="bg-white rounded-xl p-4 max-w-2xl m-4 text-black">
        <button onClick={onClose} className="float-right">
          Close
        </button>
        <h2 className="font-sohne text-36pt font-bold leading-[0.9] tracking-tighter  mt-4">
          {cardDetails.title}
        </h2>
        <p className="mt-2">{cardDetails.description}</p>
        <p className="mt-2">Company: {cardDetails.company}</p>
        <p className="mt-2">Position: {cardDetails.position}</p>
        <p className="mt-2">Tools: {cardDetails.tools.join(", ")}</p>
        <p className="mt-2">
          Technologies: {cardDetails.technologies.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ExperienceModal;
