/* eslint-disable react/prop-types */
// @ts-ignore
const Button = ({ btnStyle, BtnText }: any) => {
  return <button className={`button ${btnStyle}`}>{BtnText}</button>;
};

export default Button;
