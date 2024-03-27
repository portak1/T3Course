import { NextPage } from "next";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

const LandingPage: NextPage = () => {
  const { data: picus } = useSession();
  console.log(picus);
  const { user } = picus!;

  console.log(user);

  return <>Landing page</>;
};

export default LandingPage;
