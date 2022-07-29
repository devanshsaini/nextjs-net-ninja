import React from "react";
import { INinjas } from "../../types/interfaces/ninjas.interface";

type Props = {
  ninja: INinjas;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const ninjas: INinjas[] = await res.json();

  const paths = ninjas.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  console.log(context);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const ninja = await res.json();

  return {
    props: {
      ninja,
    },
  };
};

const NinjasDetails = ({ ninja }: Props) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
      <p>{ninja.email}</p>
    </div>
  );
};

export default NinjasDetails;
