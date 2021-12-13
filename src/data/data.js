/** @format */
import braceletSmall from "../images/4smallbracelets.jpg";
import braceletMed from "../images/2medbracelets.jpg";
import braceletAnchor from "../images/1anchorbracelet.jpg";
import woven from "../images/wovenbracelets.jpg";
import xlbracelets from "../images/xlbracelets.jpg";
import monkey from "../images/monkeyfist.jpg";
import rings from "../images/2strandrings.jpg";
import keychain from "../images/keychain.jpg";
import chunky from "../images/chunkybracelets.jpg";

export const inventoryItemsArr = [
  {
    name: "Bracelet",
    size: "Small",
    quantity: 30,
    image: <img src={braceletSmall} alt='small bracelets' />,
  },
  {
    name: "Bracelet",
    size: "Medium",
    quantity: 30,
    image: <img src={braceletMed} alt='paracord medium bracelets' />,
  },
  {
    name: "Anchor Bracelet",
    size: "Large",
    quantity: 60,
    image: (
      <img src={braceletAnchor} alt='paracord bracelets with anchor closure' />
    ),
  },
  {
    name: "Woven Bracelet",
    size: "Large",
    quantity: 60,
    image: <img src={woven} alt='paracord woven bracelets' />,
  },
  {
    name: "XL Bracelet",
    size: "X-Large",
    quantity: 60,
    image: <img src={xlbracelets} alt='paracord extra large bracelets' />,
  },
  {
    name: "Monkey Fist",
    size: "One Size",
    quantity: 60,
    image: <img src={monkey} alt='paracord monkeyfists' />,
  },
  {
    name: "Ring",
    size: "One Size",
    quantity: 60,
    image: <img src={rings} alt='paracord rings' />,
  },
  {
    name: "Keychain",
    size: "One Size",
    quantity: 60,
    image: <img src={keychain} alt='paracord keychains' />,
  },
  {
    name: "Chunky Bracelet",
    size: "Large",
    quantity: 60,
    image: <img src={chunky} alt='paracord chunky bracelets' />,
  },
];
