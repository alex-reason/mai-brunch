import tomatoSoup from '@/public/photos/menu/tomato-soup-by-Victoria-Shes.jpg';
import coconutSoup from '@/public/photos/menu/coconut-soup-megan-bucknall.jpg';
import seasonalSalad from '@/public/photos/menu/tropical-salad-taylor-kiser.jpg';

import eggsNoodles from '@/public/photos/menu/breakfast-noodles-ikhsan-baihaqi.jpg';
import pancakes from '@/public/photos/menu/pancakes-mae-mu.jpg';
import eggsBenedict from '@/public/photos/menu/eggs-benedict-scott-eckersley.jpg';
import sushi from '@/public/photos/menu/sushi-anthony-espinosa.jpg';

import latte from '@/public/photos/menu/coffee-fahmi-fakhrudin.jpg';
import matcha from '@/public/photos/menu/matcha-jason-leung.jpg';
import icedtea from '@/public/photos/menu/icedtea-jennifer-pallian.jpg'

export const soupSaladMenu = [
    {
        title: "Vegetable Tomato Soup",
        description: "This cozy soup is perfect for a rainy day. It is a vegetable soup in a tomato-based broth cooked with lemongrass and Thai basil",
        price: 7.50,
        image: tomatoSoup,
        alt: 'from unsplash by Victoria Shes'
    },
    {
        title: "Spinach Coconut Soup",
        description: "A creamy soup made with coconut, spinach, and cilantro; packed with flavor and nutrition! Inspired by Laksa",
        price: 6.95,
        image: coconutSoup,
        alt: 'from unsplash by megan bucknall'
    },
    {
        title: "Seasonal Salad",
        description: "Made with our special miso sauce and seasonal vegetables and fruits.",
        price: 8.50,
        image: seasonalSalad,
        alt: 'from unsplash by taylor kiser'
    },
];


export const mainMenu = [
    {
        title: "Eggs and Noodles",
        description: "A simple noodle dish with eggs and stir fried vegetables; a classic.",
        price: 12.50,
        image: eggsNoodles,
        alt: 'from unsplash by ikhsan baihaqi'
    },
    {
        title: "Pancakes",
        description: "Fluffy japanese style pancakes served with a homemade syrup; choose from the following toppings: matcha , mango strawberry, and banana ",
        price: 11.99,
        image: pancakes,
        alt: 'from unsplash by mae mu'
    },
    {
        title: "Eggs Benedict w/ miso",
        description: "2 Eggs Benedict over Khao Jee (grilled rice) with a miso Hollandaise sauce",
        price: 14.99,
        image: eggsBenedict,
        alt: 'from unsplash by scott eckersley'
    },
    {
        title: "Breakfast Sushi",
        description: "A sushi roll with tamagoyaki, tuyo (salted fish), avocado; comes with a side of muguk soup (radish soup)",
        price: 16.50,
        image: sushi,
        alt: 'from unsplash by anthony espinosa'
    },
];

export const drinksMenu = [
    {
        title: "Sesame Latte",
        description: "Kape Barako (made from Barako beans) with coconut condensed milk and ground sesame seeds",
        price: 5.50,
        image: latte,
        alt: 'from unsplash by fahmi-fakhrudin',
    },
    {
        title: "Matcha Latte",
        description: "Choose between sweetened and unsweetened; served with a choice of local milk, soymilk or coconut milk",
        price: 4.50,
        image: matcha,
        alt: 'from unsplash by ason-leung'
    },
    {
        title: "Iced Tea",
        description: "Refreshing iced black tea with lemon; choose between sweetened and unsweetened",
        price: 3.99,
        image: icedtea,
        alt: 'from unsplash by jennifer pallian'
    },
];