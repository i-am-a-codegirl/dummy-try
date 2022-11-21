import eat11 from "../images/eat11.jpg";
import eat3 from "../images/eat3.jpg";

import eat from "../images/eat.jpg";

import eat2 from "../images/eat2.jpg";

import eat5 from "../images/eat5.jpg";
import eat6 from "../images/eat6.jpg";

import energybar2 from "../images/energybar2.jfif";
import home2 from "../images/home.jpg";
import jar from "../images/jar.jfif";

import cocoOats from "../images/cocoOats.jfif";

const productDetails = [
  {
    id: "1234",
    availablity: "In Stock",
    specialBadge: "nil",
    image: eat3,
    name: "Nuts + Berries protien bar",
    price: 89,
    originalPrice: 109,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Protien bars",
    type: "Best Seller",
    description: `The snack it nuts and protien bars is low in calories and high in fibre plus protien. 
      chill up your sweet cravings with this amazing chocolate bar.`,
    inStock: true,
    fastDelivery: true,
    rating: 4,
    qty: 1
  },
  {
    id: "2341",
    availablity: "In Stock",
    specialBadge: "nil",
    image: eat2,
    name: "Chia seeds + Quinoa balls",
    price: 129,
    originalPrice: 209,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Chips & Snacks",
    type: "Best Seller",
    description: `This chia seeds & quinoa balls are a good source of vitamins, minerals and protiens. Carry them along with you on trips, office, schools or long-drives.`,
    inStock: true,
    fastDelivery: true,
    rating: 3.5,
    qty: 1
  },
  {
    id: "1233",
    availablity: "In Stock",
    specialBadge: "Pack of snacks",
    image: eat11,
    name: "Health Combo of 10 snacks",
    price: 399,
    originalPrice: 459,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Chips & Snacks",
    type: "Best Seller",
    description: ` While if you want to stay active and feel strong for the whole week then we have combined 10 best snakcs just for you! Now munch and crunch guilt free.`,
    inStock: true,
    fastDelivery: false,
    rating: 4.5,
    qty: 1
  },
  {
    id: "1237",
    availablity: "In Stock",
    specialBadge: "new",
    image: eat5,
    name: "Jalepeno Masala Chickpeas",
    price: 99,
    originalPrice: 149,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Chips & Snacks",
    type: "Best Seller",
    description: `Our exclusive range of Jalepeno Chickpeas satisfies your senses while taking care of your heart and guts. As these are rich in fibre, Iron and protiens.`,
    inStock: true,
    fastDelivery: false,
    rating: 3.5,
    qty: 1
  },
  {
    id: "1238",
    availablity: "In Stock",
    specialBadge: "nil",
    image: eat,
    name: "Jalepeno chips",
    price: 109,
    originalPrice: 169,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Chips & Snacks",
    type: "By categories",
    description: `  These baked and crunchy wheat flour sticks are sprinkled with a light chilly-garlic-pizza flavour to satisfy your pizza cravings.`,
    inStock: false,
    fastDelivery: true,
    rating: 5,
    qty: 1
  },
  {
    id: "1239",
    availablity: "In Stock",
    specialBadge: "nil",
    image: home2,
    name: "Jalepeno chips",
    price: 109,
    originalPrice: 169,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Chips & Snacks",
    type: "By categories",
    description: `  These baked and crunchy wheat flour sticks are sprinkled with a light chilly-garlic-pizza flavour to satisfy your pizza cravings.`,
    inStock: false,
    fastDelivery: false,
    rating: 5,
    qty: 1
  },
  {
    id: "1231",
    availablity: "In Stock",
    specialBadge: "New",
    image: eat6,
    name: "Nuts protien bar pack",
    price: 189,
    originalPrice: 269,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Protien bars",
    type: "By categories",
    description: ` While if you want to stay active and feel strong for the whole week then we have combined 10 best snakcs just for you! `,
    inStock: false,
    fastDelivery: true,
    rating: 4.5,
    qty: 1
  },
  {
    id: "1230",
    availablity: "In Stock",
    specialBadge: "New",
    image: energybar2,
    name: "Strawberry-Peanuts bar",
    price: 109,
    originalPrice: 189,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Protien bars",
    type: "By categories",
    description: `  The snack it nuts and protien bars is low in calories and high in fibre plus protien. 
      chill up your sweet cravings.  `,
    inStock: true,
    fastDelivery: false,
    rating: 4,
    qty: 1
  },
  {
    id: "1240",
    availablity: "In Stock",
    specialBadge: "New",
    image: jar,
    name: "Cheese cream vitamin jars",
    price: 209,
    originalPrice: 339,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Desserts",
    type: "By categories",
    description: `  These jars will make you crave for more while fulfilling your daily vitamins requirement.`,
    inStock: true,
    fastDelivery: true,
    rating: 3.5,
    qty: 1
  },
  {
    id: "1250",
    availablity: "In Stock",
    specialBadge: "New",
    image: cocoOats,
    name: "Coco oats",
    price: 209,
    originalPrice: 339,
    savedPrice: function () {
      return this.originalPrice - this.price;
    },
    category: "Desserts",
    type: "By categories",
    description: `  These oatmeal is made with pure coco and is rich in protiens and vitamins as its made usings oats.`,
    inStock: true,
    fastDelivery: true,
    rating: 3.5,
    qty: 1
  }
];

export default productDetails;
