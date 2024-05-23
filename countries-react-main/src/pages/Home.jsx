import Countries from "../components/Countries";
import InputDefault from "../components/InputDefault";
import SelectDefault from "../components/SelectDefault";

export default function Home() {
  return (
    <div className="base-container">
      <div className="flex justify-between py-8">
        <InputDefault />
        <SelectDefault />
      </div>
      <Countries />
    </div>
  );
}
