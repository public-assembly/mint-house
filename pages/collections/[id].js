'use client'
import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/grid.module.css";
import { gql, useQuery } from "urql";
import Image from "next/image";

const MintPage = (props) => {
  const router = useRouter();
  const COLLECTION_ADDRESS = router.query.id;
  const [items, setItems] = useState();

  const CONTRACT_NFTS = gql`
    query MyQuery ($collection: [String!], $limit: Int!) {
      tokens(
        networks: { network: ETHEREUM, chain: MAINNET }
        filter: {}
        sort: { sortKey: NONE, sortDirection: ASC }
        where: { collectionAddresses: $collection }
        pagination: { limit: $limit }
      ) {
        nodes {
          token {
            collectionAddress
            collectionName
            description
            image {
              url
            }
            name
            owner
            tokenId
            tokenUrl
            tokenStandard
          }
        }
      }
    }
  `;

  const [result, reexecuteQuery] = useQuery({
    query: CONTRACT_NFTS,
    variables: {
      collection: COLLECTION_ADDRESS,
      limit: 5,
    },
    context: useMemo(
      () => ({
        requestPolicy: "cache-and-network",
        headers: {
          "Content-Type": "applicaton/json",
          key: "Access-Control-Allow-Credentials",
          value: "true",
        },
        url: "https://api.zora.co/graphql",
      }),
      []
    ),
  });

  useEffect(() => {
    const items = result?.data?.tokens?.nodes;
    return () => {
      setItems(items);
    };
  }, [items, result]);
  
  return (
    <div className={styles.detailsPage}>
      <Layout>
        <div className={styles.grid}>
          <div className={styles.one}>Public Assembly Drops</div>
          <div className={styles.three}>
            <Image
              height={600}
              width={600}
              src="/public-ants-neg.png"
              alt="Image"
            />
          </div>
          <div className={styles.four}>
            {/* {items?.map((item) => {
              "".concat(item.token.collectionAddress);
            })} */}
          </div>
          <div className={styles.six}></div>
          <div className={styles.seven}></div>
        </div>
      </Layout>
    </div>
  );
};

export default MintPage;
