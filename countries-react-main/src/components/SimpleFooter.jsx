import { Typography } from "@material-tailwind/react";

export default function SimpleFooter() {
  return (
    <footer className="border-blue-gray-50 flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t py-6 text-center md:justify-between">
      <div className="base-container">
        <Typography color="blue-gray" className="font-normal">
          &copy; {new Date().getFullYear()} Countries
        </Typography>
      </div>
    </footer>
  );
}
