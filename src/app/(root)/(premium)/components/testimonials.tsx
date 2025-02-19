"use client";

import { InfiniteMovingCards } from "./infinite-moving-cards";

export function TestimonialSection() {
    return (
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                pauseOnHover={false}
            />
        </div>
    );
}

const testimonials = [
    {
        quote:
            "Had an incredible experience with capture a trip. Was hassle-free. Being a first time solo traveller I really loved it and felt safe at every stage. Arjun (my captain) made everything seamless and made all necessary adjustments to ensure a comfortable stay and trip without having to say anything. All the challenges and hurdles were taken care off without even us knowing. Thank you guys for an unforgettable experience.",
        name: "Kripa Joshi",
        stars: 5,
    },
    {
        quote:
            "A big shoutout to our Captain Vinamra for being the guiding light on this beautiful journey to Spiti Valley. He took care of each and everything that we asked for without blinking an eye. Thankyou so much for this, much appreciated! Long way to go Vinamra, feels really good to see young souls living their life on their conditions. As they say Spiti is not a leisure but an adventurous trip & no doubt in it. Be prepared for everything. 5 stars is only for you Vinamra! ⭐️⭐️⭐️⭐️⭐️ Capture a trip with all the positives comes little suggestions for scope of improvement. The itenary needs to be updated with surreal choices & conditions. People should be aware of the amenities, travel hours that the trip unfolds. Adding 2-3 days more to the trip would have made the trip more enjoyable. Before sinking in the beauty of one place we were already on our way to next destination. 3 stars for the services provided by capture a trip team ⭐️⭐️⭐️ All said and done Life mai ek baar SPITI zaroor karna ✌",
        name: "Ashwita Suvarna",
        stars: 5,
    },
    {
        quote: "I did Tirthan valley trip with CAT team and it was an amazing experience, the team captain Saurabh was very supportive and the everything was well managed.",
        name: "shubhani tyagi",
        stars: 5,
    },
    {
        quote:
            "I must say I had a lot of fun on my trip to Tirthan valley , It was my first time travelling through Capture a trip and I was delighted by the entire experience and services provided by Capture a trip and by the Trip captain Sourav Rawat. Thank You for the memorable trip",
        name: "Twinkle yadav",
        stars: 5,
    },
    {
        quote:
            "Great experience, All amenities as mentioned in itinerary were provided by Capture A trip. Our group captain, Aman Dilwani was very helpful and went out of his way to give best experience.",
        name: "Arihant Jain",
        stars: 5,
    },
];
