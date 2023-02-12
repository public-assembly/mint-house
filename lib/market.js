export const market = `
query MyQuery {
  markets(
    networks: {network: ETHEREUM, chain: MAINNET}
    pagination: {limit: 10}
    sort: {sortDirection: ASC, sortKey: NONE}
  ) {
    nodes {
      market {
        collectionAddress
        marketType
        marketAddress
      }
      token {
        name
        owner
        collectionAddress
        collectionName
        image {
          url
        }
      }
    }
  }
}`;

export const marketData = {
  nodes: [
    {
      token: {
        name: "malfnktion - Heist Track",
        owner: "0xd72cb55fd6e7d94808b27b15f6132cdfcf5a0461",
        collectionAddress: "0x0bc2a24ce568dad89691116d5b34deb6c203f342",
        collectionName: "Catalog",
        image: {
          url: "ipfs://Qmb1An14hxJSH278ENP6xSUQe9tE6VsHj7N43NM3jJNFe6",
        },
      },
    },
    {
      token: {
        name: "Punk 5822 Sold For 8000 Eth",
        owner: "0x0d89421d6eec0a4385f95f410732186a2ab45077",
        collectionAddress: "0x19b703f65aa7e1e775bd06c2aa0d0d08c80f1c45",
        collectionName: "SongADay",
        image: {
          url: "ipfs://bafybeibdcpcgqumxzu2k5hunijb7fbcrzvpzmsbghhuo4orqq4gy2b65d4",
        },
      },
    },
    {
      token: {
        name: "bee",
        owner: "0xe468ce99444174bd3bbbed09209577d25d1ad673",
        collectionAddress: "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7",
        collectionName: "Zora",
        image: {
          url: null,
        },
      },
    },
    {
      token: {
        name: "I'm Not A Monster",
        owner: "0x5090c4fead5be112b643bc75d61bf42339675448",
        collectionAddress: "0x19b703f65aa7e1e775bd06c2aa0d0d08c80f1c45",
        collectionName: "SongADay",
        image: {
          url: "ipfs://bafybeidudwizwswovbthifw2nmythsky5on2ctepm4zotzfzj25wq7nofy",
        },
      },
    },
    {
      token: {
        name: "The Founder of Chatroulette Forced The Ethereum Hard Fork",
        owner: "0xe06f4f1c019551e6ca350f56b5d1300dfc24b5f0",
        collectionAddress: "0x19b703f65aa7e1e775bd06c2aa0d0d08c80f1c45",
        collectionName: "SongADay",
        image: {
          url: "ipfs://bafybeigiyvgbin7iwo7xueoplmoagpoxsc7kj2lpjukh5wnspjqqrujoua",
        },
      },
    },
    {
      token: {
        name: "Bag #4991",
        owner: "0xb2e5751f5cc32a194fff28d247288d1aa90a8fb5",
        collectionAddress: "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
        collectionName: "Loot",
        image: {
          url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIj48c3R5bGU+LmJhc2UgeyBmaWxsOiB3aGl0ZTsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDE0cHg7IH08L3N0eWxlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9ImJsYWNrIiAvPjx0ZXh0IHg9IjEwIiB5PSIyMCIgY2xhc3M9ImJhc2UiPlRvbWUgb2YgdGhlIEZveDwvdGV4dD48dGV4dCB4PSIxMCIgeT0iNDAiIGNsYXNzPSJiYXNlIj5TaGlydCBvZiB0aGUgRm94PC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI2MCIgY2xhc3M9ImJhc2UiPk9ybmF0ZSBIZWxtIG9mIHRoZSBGb3g8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjgwIiBjbGFzcz0iYmFzZSI+TGluZW4gU2FzaDwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTAwIiBjbGFzcz0iYmFzZSI+TGluZW4gU2hvZXM8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjEyMCIgY2xhc3M9ImJhc2UiPiJHcmltIE1vb24iIERlbW9uJ3MgSGFuZHMgb2YgUHJvdGVjdGlvbiArMTwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTQwIiBjbGFzcz0iYmFzZSI+IkRlYXRoIFdoaXNwZXIiIEFtdWxldCBvZiB0aGUgRm94PC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSIxNjAiIGNsYXNzPSJiYXNlIj5UaXRhbml1bSBSaW5nPC90ZXh0Pjwvc3ZnPg==",
        },
      },
    },
    {
      token: {
        name: "ALIENS EXIST",
        owner: "0x3ddea6385b7d0b75a6dae639bc39cb315fcc0f74",
        collectionAddress: "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7",
        collectionName: "Zora",
        image: {
          url: "https://zora-prod.mypinata.cloud/ipfs/bafybeidxg53w4o4br6gqmhbsdsqw4q5y67un4x3pdrnpzi3gigq2ezpni4",
        },
      },
    },
    {
      token: {
        name: "ANNABOLINA GIRL 4",
        owner: "0xb9354777fd3019df43fa36a85e76ee3fe2f8bc35",
        collectionAddress: "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7",
        collectionName: "Zora",
        image: {
          url: null,
        },
      },
    },
    {
      token: {
        name: "CRAWLING // music video",
        owner: "0xe468ce99444174bd3bbbed09209577d25d1ad673",
        collectionAddress: "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7",
        collectionName: "Zora",
        image: {
          url: null,
        },
      },
    },
    {
      token: {
        name: "apple",
        owner: "0xe468ce99444174bd3bbbed09209577d25d1ad673",
        collectionAddress: "0xabefbc9fd2f806065b4f3c237d4b59d9a97bcac7",
        collectionName: "Zora",
        image: {
          url: null,
        },
      },
    },
  ],
};
