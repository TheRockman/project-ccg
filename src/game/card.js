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
    img,
    methods: {
      toString: () => console.log(name)
    }
  };
};

export default cardFactory;
