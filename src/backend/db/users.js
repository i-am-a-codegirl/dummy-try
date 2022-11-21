import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
import eat3 from "../images/eat3.jpg"

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    cart: [ {
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
    }],
  },
];

// email: "adarshbalika@gmail.com",
// password: "adarshbalika",