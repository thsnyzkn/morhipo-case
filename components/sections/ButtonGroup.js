import { ToastContainer, toast } from "react-toastify";
import { toastCreator } from "../../util/helpers";
import { FullRow, TwoThirdRow } from "../Layout";
import { SquareButton, Button, Icon, Title } from "../ui";
const ButtonGroup = ({ sizes }) => {
  const [selectedSize, selectSize] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    selectedSize && setError(null);
  }, [selectedSize, setError]);
  const notifyFavorite = toastCreator("", "💜 Favorilere Eklendi.");
  const notifySuccess = toastCreator("success", "Sepete Eklendi.");
  return (
    <>
      {error && (
        <Title small color="red" centered bold>
          Beden Seçimi Yapınız
        </Title>
      )}
      <FullRow>
        {sizes.map((size, i) => {
          return (
            <SquareButton
              key={i}
              square
              onClick={() => selectSize(selectedSize === size ? null : size)}
              active={selectedSize === size}
            >
              {size}
            </SquareButton>
          );
        })}
      </FullRow>

      <TwoThirdRow>
        <Button
          primary
          onClick={() => {
            if (selectedSize) {
              setError(null);
              notifySuccess();
            } else {
              setError(true);
            }
          }}
        >
          Sepete Ekle
        </Button>
      </TwoThirdRow>
      <TwoThirdRow>
        <Button onClick={notifyFavorite}>
          <Icon src={"/favourite.svg"} />
          Favorile
        </Button>
        <ToastContainer />
      </TwoThirdRow>
    </>
  );
};

export default ButtonGroup;
