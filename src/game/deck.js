import { generateId } from "../utils/utils.service";

const deckFactory = ({ deckName, cards }) => {
  return {
    id: generateId(),
    userId: generateId(),
    deckName,
    cards
  };
};

export default deckFactory;
