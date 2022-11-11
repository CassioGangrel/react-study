import "./square.style.css";

export const Square = (props) => {
  const onClick = () => {
    props.onClick(props.id);
  };

  return (
    <button onClick={onClick} className="square">
      {props.mark}
    </button>
  );
};
