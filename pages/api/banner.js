// pages/api/banner.js

export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        text: 'Advanced Diagnostic Equipment',
        image: 'https://source.unsplash.com/1600x900/?medical,diagnostic',
        buttonText: 'Explore Diagnostics',
        link: '/products?category=diagnostics',
      },
      {
        id: 2,
        text: 'Cutting-Edge Surgical Tools',
        image: 'https://source.unsplash.com/1600x900/?medical,surgery',
        buttonText: 'View Surgical Tools',
        link: '/products?category=surgery',
      },
      {
        id: 3,
        text: 'Comprehensive Medical Support',
        image: 'https://source.unsplash.com/1600x900/?medical,support',
        buttonText: 'Get Support',
        link: '/contact',
      },
    ]);
  }
  