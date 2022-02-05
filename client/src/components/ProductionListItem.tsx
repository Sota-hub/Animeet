import { FC } from "react";

interface ProductionListItemProps {
  imagePath: string;
  productionName: string;
  creatorsName: string[];
  expireDate: string;
  remindedUserIds: number[];
}

const ProductionListItem: FC<ProductionListItemProps> = ({
  imagePath,
  productionName,
  creatorsName,
  expireDate,
  remindedUserIds,
}) => {
  return (
    <>
      <div>
        <img src={imagePath} alt="production list item" width="120px" />
      </div>
      <p>{productionName}</p>
      <span>{creatorsName[0]}</span>
      <span>{creatorsName.length > 1 && `+${creatorsName.length - 1}`}</span>
      <p>{expireDate}</p>
      <p
      // className={
      //   remindedUserIds.includes(111111)
      //     ? styles.xxx
      //     : styles.xxxx
      // }
      >
        <img src="/heart.svg" alt="heart icon" />
      </p>
    </>
  );
};

export default ProductionListItem;
