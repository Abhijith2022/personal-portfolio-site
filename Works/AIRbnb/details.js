const allListings = {
    "1": { title: "Spectacular Modern Villa with Infinity Pool", location: "Kochi, Kerala, India", price: "7,500", rating: "4.96", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "2": { title: "Stunning Beach House Getaway", location: "Goa, India", price: "9,000", rating: "4.85", img: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "3": { title: "Cozy Mountain Cabin Retreat", location: "Manali, Himachal Pradesh", price: "6,200", rating: "4.98", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "4": { title: "Luxury High-Rise Apartment", location: "Bangalore, Karnataka, India", price: "8,500", rating: "4.79", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "5": { title: "Secluded Forest Sanctuary", location: "Wayanad, Kerala, India", price: "6,800", rating: "4.92", img: "https://images.unsplash.com/photo-1472225287754-5264b304cbe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "6": { title: "Tranquil Lake House", location: "Alleppey, Kerala, India", price: "7,200", rating: "4.88", img: "https://images.unsplash.com/photo-1506197061617-7f5c0b093236?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "7": { title: "Chic City Studio", location: "Mumbai, Maharashtra, India", price: "5,900", rating: "4.75", img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80" },
    "8": { title: "Exquisite Luxury Resort", location: "Trivandrum, Kerala, India", price: "12,500", rating: "4.99", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "9": { title: "Magical Treehouse Under Stars", location: "Munnar, Kerala, India", price: "10,200", rating: "4.95", img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "10": { title: "Geodesic Desert Dome", location: "Jaisalmer, Rajasthan, India", price: "15,000", rating: "4.89", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" },
    "11": { title: "Rustic Riverside Cabin", location: "Rishikesh, Uttarakhand", price: "4,500", rating: "4.81", img: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80" },
    "12": { title: "Heritage Fort Retreat", location: "Jaipur, Rajasthan", price: "18,000", rating: "4.97", img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" }
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (id && allListings[id]) {
    const data = allListings[id];
    document.title = `${data.title} - Airbnb`;
    
    // Update elements
    document.getElementById('prop-title').textContent = data.title;
    document.getElementById('prop-rating').textContent = data.rating;
    document.getElementById('prop-location').textContent = data.location;
    document.getElementById('prop-price').textContent = `₹${data.price}`;
    document.getElementById('prop-img-main').src = data.img;
    
    // Calculate prices dynamically
    const basePrice = parseInt(data.price.replace(',', ''));
    const nights = 5;
    const nightlyTotal = basePrice * nights;
    const cleaningFee = 2000;
    const serviceFee = 4500;
    const totalAll = nightlyTotal + cleaningFee + serviceFee;
    
    document.getElementById('prop-price-calc').textContent = `₹${data.price} x ${nights} nights`;
    document.getElementById('prop-price-nightly').textContent = `₹${nightlyTotal.toLocaleString()}`;
    document.getElementById('prop-price-total').textContent = `₹${totalAll.toLocaleString()}`;
}
