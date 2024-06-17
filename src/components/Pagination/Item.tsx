type ItemProps = {
  value: string;
  active: boolean;
};

export default function Item(props: ItemProps) {
  return (
    <input
      type="button"
      value={props.value}
      className={`w-8 border-2 ${
        props.active ? "border-primary" : "border-font-color-light"
      } px-2 py-1 rounded-md text-font-color font-bold cursor-pointer`}
    />
  );
}
