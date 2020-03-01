
import commander from '../res/photos/commander.jpg';
import billgates from '../res/photos/billgates.jpg';
import elon from '../res/photos/elon.jpg';
import donald from '../res/photos/donald.jpg';

export async function submitRewiew(name, rating, email, date, title, comment) {

    // You would call the API to post the review here, however we're gonna stub it.

}


/**
 * NOTE
 * Wanna test the dynamic rendering of the UI? Feel free to change values in here and see them dynamically rendered as well as the stats.
 */
export function getReviews() {

    // Simulates loading from API, ideally, this would be a get request using Axios or similar request library.
    const reviews = [{
        title: "I'm Commander Shepard",
        name: "Commander Shepard",
        email: "commander.shepard@cerberus.com",
        rating: 5,
        date: "April 22 2010",
        img: commander,
        comment: "I'm Commander Shepard and this is my favorite online payment solutions provider on the Citadel."
    },
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
    }];

    const groupByRating = reviews.reduce((stats, review) => {
        stats["rated" + review.rating] = stats["rated" + review.rating] + 1 || 1;
        stats.sum = (stats.sum || 0) + review.rating;
        return stats;
    }, {});

    let averageRating = groupByRating.sum / reviews.length;

    // Clear sum variable as its no longer needed
    delete groupByRating.sum;

    return {
        reviews,
        reviewStats: { ...groupByRating, averageRating }
    };

}