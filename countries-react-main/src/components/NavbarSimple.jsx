import { Navbar, Typography } from "@material-tailwind/react";

export default function NavbarSimple() {
  return (
    <Navbar className="px-6 py-3">
      <div className="text-blue-gray-900 flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Countries
        </Typography>
      </div>
    </Navbar>
  );
}
