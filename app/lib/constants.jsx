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
  buttonText: "Get A Burger",
  bgImage: "/hero-bg.jpg",
  bannerImage: "/cta-banner.png",
  saleImage: "/sale-shape.png",
}


export const delivery = {
  title: {text: "Get Delivered on Right time at", highlight: "Your Doorstep!"},
  description: "We offer takeout and delivery services for your convenience. Order your favorite meals and have them delivered to your doorstep. Enjoy delicious food from the comfort of your home!",
  buttonText: "Order Now",
  bgImage: "/delivery-banner-bg.png",
  bannerImage: "/delivery-boy.svg",
}

export const reviews = {
  subTitle: "Testimonials",
  title: {text: "Our Customers", highlight: "Reviews"},
  description: "Our customers love our food and service. Here are some of the reviews we have received.",
  reviews: [
    {
      name: "Robert William",
      title: "CEO of Pingendo",
      review: "The food was amazing! I loved the burgers and the service was excellent. I will definitely be back soon!",
      avatar: "/avatar-1.jpg",
      rating: 5,
    },
    {
      name: "Jane Smith",
      title: "Food Blogger",
      review: "The best burgers in town! I have tried many burgers but nothing compares to the ones at Burgir. Highly recommended!",
      avatar: "/avatar-2.jpg",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      title: "Tech Entrepreneur",
      review: "Great food and great service! The staff was friendly and the food was delicious. I will be recommending this place to my friends.",
      avatar: "/avatar-3.jpg",
      rating: 5,
    },
    {
      name: "Dan Brown",
      title: "Food Critic",
      review: "The food was delicious and the prices were reasonable. I will definitely be coming back for more!",
      avatar: "/avatar-1.jpg",
      rating: 5,
    },
    {
      name: "John Davis",
      title: "Food Enthusiast",
      review: "The best burgers I have ever tasted! The food was fresh and flavorful. I will be recommending this place to everyone I know.",
      avatar: "/avatar-2.jpg",
      rating: 5,
    }
  ]
}


export const banner = {
  banner1: {
    bannerImg: "/banner-1.jpg",
    bannerWidth: 550,
    bannerHeight: 450,
    texts: {
      text1: "50% Off Now!",
      text2: "Discount For Delicious Tasty Pastas!",
      text3: "Sale off 50% only this week"
    },
    buttonText: "Order Now",
  },
  banner2: {
    bannerImg: "/banner-2.jpg",
    bannerWidth: 550,
    bannerHeight: 465,
    texts: {
      text1: "Delicious Pizza",
      text2: "50% off Now"
    },
    buttonText: "Order Now",
  },
  banner3: {
    bannerImg: "/banner-3.jpg",
    bannerWidth: 550,
    bannerHeight: 465,
    texts: {
      text1: "American Burgers",
      text2: "60% off Now"
    },
    buttonText: "Order Now",
  },
  banner4: {
    bannerImg: "/banner-4.jpg",
    bannerWidth: 550,
    bannerHeight: 220,
    texts: {
      text1: "Tasty Buzzed Pizza",
      text2: "Sale off 30% only this week"
    },
    buttonText: "Order Now",
  }
}

export const blog = {
    subTitle: "Latest Blog Posts",
    title: {text: "This Is All About", highlight: "Foods"},
    description: "Our blog features the latest news and updates. Check out our latest blog posts below.",
    posts: [
      {
        title: "Making Perfect Spring Rolls at Home.",
        author: "Paul Attard",
        date: "Mar 16, 2024",
        description: "Spring rolls are a popular dish in many Asian countries. They are typically made with a thin wrapper...",
        image: "/blog-1.jpg",
      },
      {
        title: "Making Chicken Sandwich With New Delicious Ingridents.",
        author: "John Sevaska",
        date: "Feb 29, 2024",
        description: "Chicken sandwiches are a classic dish that can be made in many different ways. In this blog post...",
        image: "/blog-2.jpg",
      },
      {
        title: "Making Perfect Kebaabs with New Recipe.",
        author : "Leto Sevan",
        date: "Jan 21, 2024",
        description: "Kebabs are a popular dish in many Middle Eastern countries. They are typically made with ground meat...",
        image: "/blog-3.jpg",
      },
    ]
}

export const reservation = {
  form : {
    formTitle: "Book A Table",
    buttonText: "Book Now",
  },
  sections : [
    {
      title: "Opening Hours",
      description: [
        {
          title: "Monday-Friday",
          info: "08:00-22:00",
        },
        {
          title: "Only on Tuesday",
          info: "04:00-01:00",
        },
        {
          title: "Only on Saturday",
          info: "10:00-16:00",
        }
      ],
    },
    {
      title: "Contact Info",
      description: [
        {
          title: "Phone",
          info: "+1 (062) 109-9222",
        },
        {
          title: "Email",
          info: "info@burgir.com"
        },
        {
          title: "Address",
          info: "Ulitsa Drakonova 12, Novograd, Sokovia",
        }
      ]
    }
  ]
}

export const footer = {
  copyrightText : "© 2024 All rights reserved",
  socialLinks : [
    {
      name: "Facebook",
      url: "#",
      icon: "/facebook.svg",
    },
    {
      name: "Instagram",
      url: "#",
      icon: "/instagram.svg",
    },
    {
      name: "Twitter",
      url: "#",
      icon: "/twitter.svg",
    },
    {
      name: "Discord",
      url: "#",
      icon: "/discord.svg",
    },
    {
      name: "Telegra",
      url: "#",
      icon: "/telegram.svg",
    }
  ]
}