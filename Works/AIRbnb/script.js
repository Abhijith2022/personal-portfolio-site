const listings = [
    {
        id: 1,
        title: "Spectacular Modern Villa with Infinity Pool",
        location: "Kochi, Kerala",
        distance: "45 kilometers away",
        date: "Oct 15 - 20",
        price: "7,500",
        rating: "4.96",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Stunning Beach House Getaway",
        location: "Goa, India",
        distance: "210 kilometers away",
        date: "Nov 2 - 7",
        price: "9,000",
        rating: "4.85",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Cozy Mountain Cabin Retreat",
        location: "Manali, Himachal",
        distance: "1,200 kilometers away",
        date: "Dec 10 - 15",
        price: "6,200",
        rating: "4.98",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Luxury High-Rise Apartment",
        location: "Bangalore, Karnataka",
        distance: "15 kilometers away",
        date: "Oct 22 - 25",
        price: "8,500",
        rating: "4.79",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  {
    id: 5,
    title: "Secluded Forest Sanctuary",
    location: "Wayanad, Kerala",
    distance: "85 kilometers away",
    date: "Jan 5 - 10",
    price: "6,800",
    rating: "4.92",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
},
    {
        id: 6,
        title: "Tranquil Lake House",
        location: "Alleppey, Kerala",
        distance: "30 kilometers away",
        date: "Nov 12 - 16",
        price: "7,200",
        rating: "4.88",
        image: "https://images.unsplash.com/photo-1506197061617-7f5c0b093236?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        title: "Chic City Studio",
        location: "Mumbai, Maharashtra",
        distance: "800 kilometers away",
        date: "Oct 18 - 21",
        price: "5,900",
        rating: "4.75",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        title: "Exquisite Luxury Resort",
        location: "Trivandrum, Kerala",
        distance: "125 kilometers away",
        date: "Dec 20 - 26",
        price: "12,500",
        rating: "4.99",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        title: "Magical Treehouse Under Stars",
        location: "Munnar, Kerala",
        distance: "95 kilometers away",
        date: "Feb 10 - 14",
        price: "10,200",
        rating: "4.95",
        image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        title: "Geodesic Desert Dome",
        location: "Jaisalmer, Rajasthan",
        distance: "1,500 kilometers away",
        date: "Jan 15 - 20",
        price: "15,000",
        rating: "4.89",
        image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 11,
        title: "Rustic Riverside Cabin",
        location: "Rishikesh, Uttarakhand",
        distance: "2,000 kilometers away",
        date: "Mar 5 - 10",
        price: "4,500",
        rating: "4.81",
        image: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 12,
        title: "Heritage Fort Retreat",
        location: "Jaipur, Rajasthan",
        distance: "1,800 kilometers away",
        date: "Nov 25 - 28",
        price: "18,000",
        rating: "4.97",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

const listingsContainer = document.getElementById('listingsContainer');

function renderListings() {
    if (!listingsContainer) return;
    
    listings.forEach((listing, index) => {
        const card = document.createElement('a');
        card.className = 'card';
        card.href = `details.html?id=${listing.id}`;
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="card-img-wrapper">
                <i class="fa-solid fa-heart heart-icon" onclick="toggleHeart(event, this)"></i>
                <img src="${listing.image}" alt="${listing.title}" loading="lazy">
            </div>
            <div class="card-info">
                <div class="card-header">
                    <span class="card-title">${listing.location}</span>
                    <span class="card-rating"><i class="fa-solid fa-star"></i> ${listing.rating}</span>
                </div>
                <span class="card-distance">${listing.distance}</span>
                <span class="card-date">${listing.date}</span>
                <span class="card-price"><span>₹${listing.price}</span> night</span>
            </div>
        `;
        listingsContainer.appendChild(card);
    });
}
renderListings();

window.toggleHeart = function(e, el) {
    e.preventDefault();
    e.stopPropagation();
    el.classList.toggle('liked');
}

// Panels logic
const searchItems = document.querySelectorAll('.search-item');
if (searchItems.length > 0) {
    const whereItem = searchItems[0];
    const whoItem = searchItems[3];
    const destinationPanel = document.getElementById('destinationPanel');
    const guestPanel = document.getElementById('guestPanel');
    const destItems = document.querySelectorAll('.dest-item');
    const whereInput = document.getElementById('whereInput');
    const whoInput = document.getElementById('whoInput');

    function closeAllPanels() {
        if(destinationPanel) destinationPanel.classList.remove('active');
        if(guestPanel) guestPanel.classList.remove('active');
    }

    whereItem.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = destinationPanel.classList.contains('active');
        closeAllPanels();
        if (!isActive) destinationPanel.classList.add('active');
    });

    whoItem.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = guestPanel.classList.contains('active');
        closeAllPanels();
        if (!isActive) guestPanel.classList.add('active');
    });

    document.addEventListener('click', closeAllPanels);
    if(destinationPanel) destinationPanel.addEventListener('click', e => e.stopPropagation());
    if(guestPanel) guestPanel.addEventListener('click', e => e.stopPropagation());

    destItems.forEach(item => {
        item.addEventListener('click', () => {
            whereInput.value = item.getAttribute('data-value');
            destinationPanel.classList.remove('active');
            whoItem.click(); // auto open guest panel next
        });
    });

    // Counter Logic
    const counts = { adult: 0, child: 0, infant: 0 };
    document.querySelectorAll('.plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            counts[type]++;
            updateDisplay(type);
        });
    });
    document.querySelectorAll('.minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            if (counts[type] > 0) counts[type]--;
            updateDisplay(type);
        });
    });

    function updateDisplay(type) {
        document.getElementById(`${type}Count`).textContent = counts[type];
        const totalGuests = counts.adult + counts.child;
        if (totalGuests > 0) {
            let text = `${totalGuests} guest${totalGuests > 1 ? 's' : ''}`;
            if (counts.infant > 0) text += `, ${counts.infant} infant${counts.infant > 1 ? 's' : ''}`;
            whoInput.value = text;
        } else {
            whoInput.value = '';
        }
    }
}
