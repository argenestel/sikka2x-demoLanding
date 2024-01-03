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
    id: 0.25,
    name: "Client",
    href: "#",
    image: "/images/features/Secure1.png",
    imageLight: "/images/features/Secure1.png",
    desc: "Safe and Secure"
  },
  {
    id: 0.3,
    name: "Client",
    href: "#",
    image: "/images/features/FairMatches.png",
    imageLight: "/images/features/FairMatches.png",
    desc: "Fair Matches"

  },
  {
    id: 0.4,
    name: "Client",
    href: "#",
    image: "/images/features/InstantWithdrawals.png",
    imageLight: "/images/features/InstantWithdrawals.png",
    desc: "Instant Withdrawls"

  },
  {
    id: 0.5,
    name: "Client",
    href: "#",
    image: "/images/features/Deposit.png",
    imageLight: "/images/features/Deposit.png",
    desc: "No GST on Deposit"
  }
  
];

export default featureData;
