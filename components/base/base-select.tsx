import { NextPage } from "next";
import { MultiSelect } from "react-multi-select-component";

interface Props {
  setState: (value: any) => void;
  options?: any;
  value?: any;
  placeholder?: string;
  classInput?: string;
  style?: string;
  label?: string;
  classLabel?: string;
  className?: string;
  required?: boolean;
}

const BaseSelect: NextPage<Props> = (props: Props) => {
  const {
    setState,
    placeholder,
    classInput,
    options,
    value,
    style = "sun",
    label,
    className,
    classLabel,
    required = false,
  } = props;

  const getStyle = () => {
    let customDefault = "";
    if (style == "dark") {
      customDefault = "bg-gray-400  outline-none rounded-md";
    } else if (style == "boold") {
      customDefault = "bg-boold  outline-none rounded-md";
    } else if (style == "sun") {
      customDefault =
        "border-[2px]  border-sun outline-none rounded-md";
    }
    return customDefault;
  };
  return (
    <div className={className + " " + `flex flex-col space-y-2`}>
      <label className={classLabel}>
        {label}
        {required && <span className="text-red-500 ">{" *"}</span>}
      </label>
      <MultiSelect
        className={classInput + " " }
        options={options}
        value={value}
        onChange={setState}
        labelledBy="Select"
      />
    </div>
  );
};
// export component
export default BaseSelect;
