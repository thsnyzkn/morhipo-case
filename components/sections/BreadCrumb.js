import { BreadCrumbList, Title, BreadCrumbItem, Arrow } from "../ui";
import { formatProductTitle } from "../../util/helpers";

const BreadCrumb = ({ title, category }) => {
  const { brandName, productName } = formatProductTitle(title);
  const items = ["Anasayfa", category, `${brandName}-${productName}`];
  return (
    <BreadCrumbList>
      {items.map((item, index) => (
        <>
          <BreadCrumbItem key={index}>
            <Title
              color={index === items.length - 1 ? "gray" : null}
              centered
              forceOneLine
              disabled
            >
              {item}
            </Title>
          </BreadCrumbItem>
          {index !== items.length - 1 && <Arrow direction="right" gray />}
        </>
      ))}
    </BreadCrumbList>
  );
};

export default BreadCrumb;
