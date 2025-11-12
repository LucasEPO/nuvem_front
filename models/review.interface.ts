interface ReviewUser {
  user_id: string;
  name: string;
}

export interface Review {
  review_id: number;
  rating: number;
  description?: string;
  user: ReviewUser;
}