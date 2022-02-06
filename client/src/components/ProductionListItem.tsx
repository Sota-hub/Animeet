import { FC } from "react";

import "../css/components/productionListItem.css";

interface ProductionListItemProps {
  imagePath: string;
  projectName: string;
  projectDescription: string;
  creatorsName: string[];
  expireDate: string;
  remindedUserIds: number[];
}

const ProductionListItem: FC<ProductionListItemProps> = ({
  imagePath,
  projectName,
  projectDescription,
  creatorsName,
  expireDate,
  remindedUserIds,
}) => {
  const checkReminded = (remindedUserIds: number[]) => {
    if (remindedUserIds.includes(111111)) return "product__icon--active";
    return "product__icon";
  };

  return (
    <div className="product__container">
      <div className="product__image--wrap">
        <img src={imagePath} alt="production item" className="product__image" />
      </div>
      <div className="product__wrap--info">
        <div className="production__inner">
          <p className="product__name">{projectName}</p>
          <p className="product__description">{projectDescription}</p>
          <div className="product__creator">
            <span>{creatorsName[0]}</span>
            <span>
              {creatorsName.length > 1 && `+${creatorsName.length - 1}`}
            </span>
          </div>
          <p className="product__expiration">{`Expired at ${expireDate}`}</p>
        </div>
      </div>
      <div className={checkReminded(remindedUserIds)}>
        <img src="/heart.svg" alt="heart icon" width={15} />
      </div>
    </div>
  );
};

export default ProductionListItem;
