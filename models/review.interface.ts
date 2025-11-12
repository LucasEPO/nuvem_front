interface ReviewUser {
  user_id: number;
  name: string;
}

export interface Review {
  review_id: number;
  rating: number;
  description?: string;
  user: ReviewUser;
}