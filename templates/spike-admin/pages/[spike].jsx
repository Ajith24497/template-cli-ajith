import { useRouter } from "next/router";
import React, { useState } from "react";
import Table from "../components/Table";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          spike: "home",
        },
      },
      {
        params: {
          spike: "about",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const pageDetails = [
    {
      spike: "home",
      showDescription: true,
      description: "This is test description",
      name: "Home",
      showClients: false,
    },
    {
      spike: "about",
      showDescription: false,
      description: "This is test description",
      name: "About",
      showClients: true,
    },
  ];

  return {
    props: {
      spikeDetails: pageDetails?.find((f) => f.spike === context.params.spike),
    },
  };
}

export default function Spike({ spikeDetails }) {
  const [todos, setTodos] = useState(spikeDetails);
  const router = useRouter();

  return (
    <div>
      <div>{spikeDetails.name}</div>
      {spikeDetails.showDescription ? (
        <div>{spikeDetails.description}</div>
      ) : null}
      {spikeDetails.showClients ? <Table /> : null}
    </div>
  );
}
