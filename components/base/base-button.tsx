import { NextPage } from "next";

interface Props {
  onMouseOver?: () => void;
  onClick?: () => void;
  slot?: string;
  className?: string;
  style?: string;
}

const BaseButton: NextPage<Props> = (props) => {
  
  const { onMouseOver, onClick, slot, className, style = "sun" } = props;

  const getStyle = () => {
    let customDefault = "";
    if (style == "dark") {
      customDefault = "px-3 py-1 bg-gray-400 text-white rounded-md";
    } else if (style == "blood") {
      customDefault = "px-3 py-1 bg-blood text-white rounded-md";
    } else if (style == "sun") {
      customDefault = "px-3 py-1 bg-sun rounded-md";
    } else if (style == "water") {
      customDefault = "px-3 py-1 bg-water text-white rounded-md";
    } else if (style == "sky") {
      customDefault = "px-3 py-1 bg-sky rounded-md";
    } else if (style == "grass") {
      customDefault = "px-3 py-1 bg-grass rounded-md";
    } else if (style == "lime") {
      customDefault = "px-3 py-1 bg-lime rounded-md";
    } else if (style == "grape") {
      customDefault = "px-3 py-1 bg-grape text-white rounded-md";
    }
    return customDefault;
  };

  return (
    <button
      onMouseOver={onMouseOver}
      onClick={onClick}
      className={className + " " + getStyle()}
    >
      {slot}
    </button>
  );
};

// export component
export default BaseButton;
