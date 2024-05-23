import { Select, Option } from "@material-tailwind/react";

export default function SelectDefault() {
  const continents = ["Africa", "Europe", "Asia", "America", "Australia"];
  return (
    <div className="w-52">
      <Select label="Select continents">
        {continents.map((continent, index) => {
          return <Option key={index}>{continent}</Option>;
        })}
      </Select>
    </div>
  );
}
