type Props = {
  name: string;
  description?: string;
  image: string;
};

export const Class = (props: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center 
                         whitespace-normal bg-primary-500 text-center text-white opacity-0 transition 
                         duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{props.name}</p>
        <p className="mt-5">{props.description}</p>
      </div>
      <img alt={`${props.image}`} src={props.image} />
    </li>
  );
};
