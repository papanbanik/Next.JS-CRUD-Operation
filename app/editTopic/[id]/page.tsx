import React from "react";
import  EditTopic  from "@/app/Components/EditTopic";

type T = {
  _id: string;
  title: string;
  description: string;
};

type ApiResponse = {
  user: T[];
};

const Page = async ({ params }: { params: { id: string } }) => {

  
  const { id } = await params;

  const res = await fetch("http://localhost:3000/api/topics", {
    cache: "no-store",
  });

  const data: ApiResponse = await res.json();

  const topic = data.user.find(
  (item) => item._id === id
);

  if (!topic) {
    return <h1>Not found</h1>;
  }

  const { title, description } = topic;

  return (
    <EditTopic id={id} title={title} description={description} />
  );
};

export default Page;