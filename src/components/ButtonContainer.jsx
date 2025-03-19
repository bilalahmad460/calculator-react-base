import style from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "2",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.buttonContainer}>
      {btnNames.map((btnName) => {
        return (
          <button
            className={style.button}
            onClick={() => onButtonClick(btnName)}
          >
            {btnName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
