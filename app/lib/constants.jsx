export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#home",
    },
    {
      id: "1",
      title: "Our Meals",
      url: "#meals",
    },
    {
      id: "2",
      title: "Menu",
      url: "#menu",
    },
    {
      id: "3",
      title: "Blog",
      url: "#blog",
    },
    {
      id: "4",
      title: "Contact Us",
      url: "#contact",
    },
    {
      id: "5",
      title: "Reservation",
      url: "#reservation",
      onlyMobile: true,
    },
  ];

export const hero = {
    title: "Eat Sleep And",
    subTitle: "Supper delicious Burger in town!",
    description: "Something you definitely have never tasted before ~ Come and try our delicious burgers!",
    buttonText: "Book A Table",
    bgImage: "/hero-bg.jpg",
    bannerImage: "/hero-banner-bg.png",
    burgerImage: "/hero-banner.png",
    bgShape: "/hero-bg-shape.png",
  };

export const promo = [
  {
    id: "0",
    cardTitle: "Steak & Potatoes",
    cardDescription: "Hearty American dish with grilled seasoned steak and roasted spicy potatoes.",
    cardImage: "/promo-1.png",
  },
  {
    id: "1",
    cardTitle: "Bossam",
    cardDescription: "Korean pork belly dish - typically served with kimchi and different salads.",
    cardImage: "/promo-2.png",
  },
  {
    id:"2",
    cardTitle: "Korean fried chicken",
    cardDescription: "Crispy fried chicken glazed in a sweet and spicy sauce and potato chips.",
    cardImage: "/promo-3.png",
  },
  {
    id:"3",
    cardTitle: "Breakfast Platter",
    cardDescription: "Delightful breakfast plate features sunshine eggs, toast, ham, and fresh veggies.",
    cardImage: "/promo-4.png",
  },
  {
    id:"4",
    cardTitle: "Vegetable Platter",
    cardDescription: "Healthy and delicious platter with a variety of fresh vegetables and sauce dips.",
    cardImage: "/promo-5.png",
  }
];


export const about = {
  title: {text:"Caferio, Burgers, and Best Meals ", highlight:"in Town!"},
  description: "Burgir is a modern and stylish restaurant that offers a variety of delicious meals. Our menu includes a wide range of burgers, sandwiches, salads, and more. Visit us today and experience the best meals in town!",
  bannerImage: {url:"/about-banner.png",alt:"about banner"},
  redShape: {url:"/sale-shape-red.png",alt:"red shape"},
  facilities: [
    "High Speed Free Wi-Fi",
    "Spacific Family And Kids Zone",
    "Takeout Available",
    "Fast Food Home Delivery",
  ],
  buttonText : "Order Now",
}


export const menu = {
  subTitle: "Popular Dishes",
  title: {text: "Our Delicious", highlight: "Foods"},
  description: "We have a wide range of delicious foods that you can choose from. Check out our menu below.",

  filterItems: [
    "All",
    "American",
    "Korean",
    "Mixed"],

  items: [
      {
        dish : "Steak & Potatoes",
        image: "/promo-1.png",
        category: "American",
        price: "$19.99",
        previousPrice: "$24.99",
        discount: "20%",
        rating: 5
      },
      {
        dish: "Bossam",
        image: "/promo-2.png",
        category: "Korean",
        price: "$14.99",
        previousPrice: "$19.99",
        discount: "25%",
        rating: 4
      },
      {
        dish: "Korean Fried Chicken",
        image: "/promo-3.png",
        category: "Korean",
        price: "$11.99",
        previousPrice: "$14.99",
        discount: "20%",
        rating: 4,
      },
      {
        dish: "Breakfast Platter",
        image: "/promo-4.png",
        category: "American",
        price: "$9.99",
        previousPrice: "$12.99",
        discount: "23%",
        rating: 5,
      },
      {
        dish: "Vegetable Platter",
        image: "/promo-5.png",
        category: "Mixed",
        price: "$7.99",
        previousPrice: "$9.99",
        discount: "20%",
        rating: 4,
      }
    ]
}


export const cta = {
  title : {text: "We Have Excellent Of", highlight: "Quality Burgers!"},
  description: "Our burgers are made with the finest ingredients and are cooked to perfection.  We have a wide range of burgers and meals to choose from. Visit us today and try our delicious burgers!",
  buttonText: "Visit Us",
  bgImage: "/hero-bg.jpg",
  bannerImage: "/cta-banner.png",
  saleImage: "/sale-shape.png",
}