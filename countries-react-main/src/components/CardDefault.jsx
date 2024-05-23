import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardDefault({ info }) {
  const {flags,name, population,region, capital} = info;
  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={flags["svg"]}
          alt={name['common']}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 line-clamp-1 ">
          {name['common']}
        </Typography>
        <Typography>
          <span variant="h3">Population:</span>{population}
        </Typography>
        <Typography>
          <span variant="h3">Region: </span>{region}
        </Typography>
        <Typography>
          <span variant="h3">Capital:</span>{capital}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button color="coral">Read More</Button>
      </CardFooter>
    </Card>
  );
}
