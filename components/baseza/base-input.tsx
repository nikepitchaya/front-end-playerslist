import { NextPage } from "next";

interface Props {
  type?: string;
  setState: (value: string) => void;
  placeholder?: string;
  classInput?: string;
  style?: string;
  label?: string;
  classLabel?: string;
  className?:string;
  required?: boolean;
}

const BaseInput: NextPage<Props> = (props: Props) => {
  const {
    type,
    setState,
    placeholder,
    classInput,
    style = "sun",
    label,
    className,
    classLabel,
    required = false,
  } = props;

  const getStyle = () => {
    let customDefault = "";
    if (style == "dark") {
      customDefault = "px-2 py-0.5 bg-gray-400 outline-none rounded-md";
    } else if (style == "boold") {
      customDefault = "px-2 py-0.5 bg-boold outline-none rounded-md";
    } else if (style == "sun") {
      customDefault =
        "px-2 py-0.5 border-[3px] border-sun outline-none rounded-md";
    }
    return customDefault;
  };
  return (
    <div className={className + " " + `flex flex-col space-y-2`}>
      <label className={classLabel}>
        {label}
        {required && <span className="text-red-500 ">{" *"}</span>}
      </label>
      {type !== "textarea" ? (
        <input
          onChange={(e) => {
            setState(e.target.value);
          }}
          type={type}
          placeholder={placeholder}
          className={classInput + " " + getStyle()}
        />
      ) : (
        <textarea
          onChange={(e) => {
            setState(e.target.value);
          }}
          placeholder={placeholder}
          className={classInput + " " + getStyle()}
        />
      )}
    </div>
  );
};
// export component
export default BaseInput;
