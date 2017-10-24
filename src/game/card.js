import { generateId } from "../utils/utils.service";

const cardFactory = ({ available, rules, name, ap, hp, desc, cost, img }) => {
  return {
    id: generateId(),
    available,
    rules,
    name,
    ap,
    hp,
    desc,
    cost,
    img
  };
};

export default cardFactory;
