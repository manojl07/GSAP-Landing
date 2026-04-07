// cocktail images
import drink1 from "../src/assets/images/drink1.png";
import drink2 from "../src/assets/images/drink2.png";
import drink3 from "../src/assets/images/drink3.png";
import drink4 from "../src/assets/images/drink4.png";

// profiles
import profile1 from "../src/assets/images/profile1.png";
import profile2 from "../src/assets/images/profile2.png";
import profile3 from "../src/assets/images/profile3.png";
import profile4 from "../src/assets/images/profile4.png";

// socials
import insta from "../src/assets/images/insta.png";
import xIcon from "../src/assets/images/x.png";
import fb from "../src/assets/images/fb.png";



const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "art",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Caten Malbee",
	country: "AU",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const profileLists = [
 { imgPath: profile1 },
 { imgPath: profile2 },
 { imgPath: profile3 },
 { imgPath: profile4 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
  name: "Instagram",
  icon: insta,
  url: "#",
 },
 {
  name: "X (Twitter)",
  icon: xIcon,
  url: "#",
 },
 {
  name: "Facebook",
  icon: fb,
  url: "#",
 },
];

const allCocktails = [
 {
  id: 1,
  name: "Classic Mojito",
  image: drink1,
  title: "Simple Ingredients, Bold Flavor",
  description:
   "Made with tequila, lime juice, and orange liqueur...",
 },
 {
  id: 2,
  name: "Raspberry Mojito",
  image: drink2,
  title: "A Zesty Classic That Never Fails",
  description:
   "The Margarita is a classic that balances tangy lime...",
 },
 {
  id: 3,
  name: "Violet Breeze",
  image: drink3,
  title: "Simple Ingredients, Bold Flavor",
  description:
   "Made with tequila, lime juice, and orange liqueur...",
 },
 {
  id: 4,
  name: "Curacao Mojito",
  image: drink4,
  title: "Crafted With Care, Poured With Love",
  description:
   "Each cocktail is made with fresh ingredients...",
 },
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};