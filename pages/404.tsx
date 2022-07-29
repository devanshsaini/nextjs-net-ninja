import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {};

const PageNotFound = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Wait to be redirected to the Homepage or click{" "}
        <Link href="/">
          <a>here</a>
        </Link>{" "}
        to go back to the Homepage.
      </p>
      <style jsx>
        {`
          .not-found {
            text-align: center;
          }

          .not-found a {
            color: #4979ff;
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default PageNotFound;
