import { FC } from "react";

import ProductionListItem from "./ProductionListItem";

interface ProductionListProps {
  category: string;
}

// ===========================================
const DummyData = [
  {
    id: "1",
    imagePath: "/bird.jpg",
    productionName: "Dragon ball",
    creatorsName: ["max", "jonas"],
    expireDate: "Apr 1",
    remindedUsersIdList: [11111, 22222],
  },
  {
    id: "2",
    imagePath: "/paripi.jpg",
    productionName: "One piece",
    creatorsName: ["stephen", "colt", "stephan"],
    expireDate: "Apr 20",
    remindedUsersIdList: [111111, 222222],
  },
];
// ===========================================

const ProductionList: FC<ProductionListProps> = ({ category }) => {
  // fetching items by category

  return (
    <>
      {DummyData.map((dummy) => (
        <ProductionListItem
          key={dummy.id}
          imagePath={dummy.imagePath}
          productionName={dummy.productionName}
          creatorsName={dummy.creatorsName!}
          expireDate={dummy.expireDate}
          remindedUserIds={dummy.remindedUsersIdList}
        />
      ))}
    </>
  );
};

export default ProductionList;
