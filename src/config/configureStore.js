import { createStore } from "redux";
import reviewReducer from '../reducers/reviewReducer';

import commander from '../res/photos/commander.jpg';
import billgates from '../res/photos/billgates.jpg';
import elon from '../res/photos/elon.jpg';
import donald from '../res/photos/donald.jpg';

/** Ideally, we'd be loading the inital state via API calls to our backend. However as setting up an API
 is out of the scope of this test, the data has been stubbed.
 */
const initState = {
    reviews: [
        {
            title: "Very impressed",
            name: "Bill Gates",
            email: "billy.G@microsoft.com",
            rating: 5,
            img: billgates,
            date: "Feb 27 2019",
            comment: "Wow this website is incredibly professional! I'm very very happy and willing to invest in totallyNotCheckout.com! Here's my checkbook, go buy yourself some new servers!"
        },
        {
            title: "As the creator of PayPal, I have to say this is good!",
            name: "Elon Musk",
            email: "ElonChan@tesla.com",
            img: elon,
            rating: 5,
            date: "Jan 5 2020",
            comment: "I have so much knowledge and money that I'm basically a real life Tony Stark? So I know a good website when I see one. As the guy who built PayPal, I must admit that TotallyNotCheckout.com is an absolutely excellent platform and one that I truly look forward to seeing grow more and more over time."
        },
        {
            title: "I'm Commander Shepard...",
            name: "Commander Shepard",
            email: "commander.shepard@cerberus.com",
            rating: 5,
            date: "April 22 2010",
            img: commander,
            comment: "I'm Commander Shepard and this is my favorite online payment solutions provider on the Citadel. There's no online platform as good as this anywhere in our solar system. I'd know, I'm a spectre after all! Anyways, I'm off to stop Saryn. "
        },
        {
            title: "Its okay but...",
            name: "John Doe",
            email: "john@yahoo.com",
            rating: 3,
            date: "Aug 3 2012",
            comment: "I feel the website has a lot of potential. I hear its handling a lot of the payments for Netflix. Thats a very large platform with a lot of responsibility! To be able to handle their orders so well is very impressive. I do however believe TotallyNotCheckout.com has to do a lot more marketing to get its name out there. If it does so, I can very much see it beating the likes of Stripe and PayPal :-)"
        },
        {
            title: "TotallyNotCheckout.com is bad",
            name: "Donald Trump",
            email: "the.don@yahoo.com",
            rating: 1,
            img: donald,
            date: "Jan 25 2020",
            comment: "Terrible, terrible website. I know a lot about reviewing. I'm a very smart reviewer. The most intelligent reviewer, ever believe me. Yes I might have stocks in Stripe and PayPal, but I'm not biased at all, trust me. In all my years doing business I know good websites. This isn't one of them. Not good. Invest in Stripe instead."
        },
        {
            title: "To Checkout or not to Checkout...",
            name: "Willam Shakespere",
            email: "will@yahoo.com",
            rating: 5,
            date: "Jan 25 1776",
            comment: "Fair is foul, and foul is fair: Hover through the fog and filthy air. Life ... is a tale Told by an idiot, full of sound and fury, Signifying nothing. All that glitters is not gold"
        },
        {
            title: "Wait a minute... this isn't my studio...",
            name: "Ozzy Osbourne",
            email: "fuzzyozzy@gmail.com",
            rating: 5,
            date: "Nov 5 2017",
            comment: "Honestly... I don't know how I got here... SHAROOOON!"
        }],
    reviewStats: {
        averageRating: 0,
    }
}

// Ideally this should be a master reducer that combines all the other reducers, however for the scope of this task, a single reducer suffice
export const store = createStore(reviewReducer, initState);