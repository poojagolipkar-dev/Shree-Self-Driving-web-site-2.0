import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return res.status(503).json({ 
      error: 'Google Places API configuration missing',
      message: 'Please set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID environment variables.'
    });
  }

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: placeId,
          fields: 'reviews,rating,user_ratings_total',
          key: apiKey,
          language: 'en' // Optional: force English
        }
      }
    );

    if (response.data.status !== 'OK') {
      throw new Error(response.data.error_message || 'Failed to fetch reviews');
    }

    const result = response.data.result;
    
    // Transform Google Reviews to match our app's format
    const reviews = result.reviews?.map((review: any, index: number) => ({
      id: `google-${index}`,
      name: review.author_name,
      rating: review.rating,
      text: review.text,
      location: 'Google Review', // Google doesn't provide user location in reviews usually
      date: review.relative_time_description,
      profile_photo_url: review.profile_photo_url
    })) || [];

    res.json({
      rating: result.rating,
      total_ratings: result.user_ratings_total,
      reviews: reviews
    });

  } catch (error: any) {
    console.error('Error fetching Google Reviews:', error.message);
    res.status(500).json({ error: 'Failed to fetch reviews from Google' });
  }
}
