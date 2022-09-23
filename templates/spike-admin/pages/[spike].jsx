import React from "react";
import Table from "../components/Table";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/page");
  const data = await res.json();

  return {
    paths: data?.map((el) => ({
      params: { spike: el.spike },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:8080/page-details/${context.params.spike}`
  );
  const data = await res.json();

  return {
    props: {
      spikeDetails: data,
    },
  };
}

export default function Spike({ spikeDetails }) {
  return (
    <div>
      <div style={{ color: spikeDetails.pageTitleColor || "#000000" }}>
        {spikeDetails.page.name}
      </div>
      {spikeDetails.showDescription ? (
        <div>{spikeDetails.pageDescription}</div>
      ) : null}
      {spikeDetails.showTable ? <Table pageId={spikeDetails.id} /> : null}
    </div>
  );
}
