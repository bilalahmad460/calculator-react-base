import style from "./ButtonContainer.module.css";
const ButtonContainer = () => {
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
      {btnNames.map((btnNames) => {
        return <button className={style.button}>{btnNames}</button>;
      })}
    </div>
  );
};

export default ButtonContainer;
