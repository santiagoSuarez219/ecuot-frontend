type ItemProps = {
  value: string;
  active: boolean;
};

export default function Item(props: ItemProps) {
  return (
    <input
      type="button"
      value={props.value}
      className={`w-8 border-primary ${
        props.active ? "border-2" : "border"
      } px-2 py-1 rounded-md text-font-color font-bold cursor-pointer`}
    />
  );
}
