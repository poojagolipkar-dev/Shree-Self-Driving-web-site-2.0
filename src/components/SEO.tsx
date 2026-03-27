import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <title>SHREE. | Premium Self Driving & Car Rental Service</title>
      <meta name="description" content="Premium self-drive car rental service in Navi Mumbai & Panvel. Rent luxury cars like Thar, Swift, Baleno at affordable rates. 24/7 support & sanitized cars." />
      <meta name="keywords" content="Self Drive Car Rental Navi Mumbai, Self Drive Cars Panvel, Car Rental Navi Mumbai, Rent a Car Panvel, Luxury Car Rental" />
      <meta property="og:title" content="SHREE. | Premium Self Driving & Car Rental Service" />
      <meta property="og:description" content="Freedom to Drive Your Way. Premium Self Drive Cars in Navi Mumbai & Panvel." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://shreeselfdriving.com" />
      <link rel="canonical" href="https://shreeselfdriving.com" />
      
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "CarRental",
            "name": "SHREE. Self Driving & Rentals",
            "image": "https://images.unsplash.com/photo-1503376763036-066120622c74",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near Kia Motors Showroom, Bhoomi Landmark, Sector 17, Khanda Colony",
              "addressLocality": "Panvel",
              "addressRegion": "Maharashtra",
              "postalCode": "410206",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 19.0,
              "longitude": 73.1
            },
            "url": "https://shreeselfdriving.com",
            "telephone": "+919768010603",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            ],
            "priceRange": "₹1500 - ₹5000"
          }
        `}
      </script>
    </Helmet>
  );
}
