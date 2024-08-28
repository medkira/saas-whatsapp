import Button from "./Button";

/* eslint-disable react/prop-types */
const Common = ({ spanText, paragraphText }: any) => {
  return (
    <div className="flex flex-col items-start justify-center gap-5 md:items-center md:gap-8 lg:flex-row lg:justify-start">
      <Button
        BtnText={spanText}
        btnStyle={`bg-greenPrimary border-none text-blackPrimary rounded-[6px] py-0 px-4 font-medium capitalize text-[40px]`}
      />
      <p className={`paragraph lg:max-w-[40rem]`}>{paragraphText}</p>
    </div>
  );
};

export default Common;
