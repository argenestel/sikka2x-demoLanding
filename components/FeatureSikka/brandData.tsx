export type Feature = {
  id: number;
  name: string;
  href: string;
  image: string;
  imageLight: string;
  desc?: string; // Optional description
};



const featureData: Feature[] = [
  {
    id: 0.2,
    name: "Client",
    href: "#",
    image: "/images/features/secure.png",
    imageLight: "/images/features/secure.png",
    desc: "100% Secure Transactions"
  },
  {
    id: 0.3,
    name: "Client",
    href: "#",
    image: "/images/features/customer_support.png",
    imageLight: "/images/features/customer_support.png",
    desc: "24/7 Support"

  },
  {
    id: 0.4,
    name: "Client",
    href: "#",
    image: "/images/features/swift_withdrawals.png",
    imageLight: "/images/features/swift_withdrawals.png",
    desc: "Fast Withdrawls"

  },
  {
    id: 0.5,
    name: "Client",
    href: "#",
    image: "/images/features/secure.png",
    imageLight: "/images/features/secure.png",
    desc: "100% Secure Transactions"
  }
  
];

export default featureData;
