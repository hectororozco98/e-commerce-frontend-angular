import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  publicReviewsUrl: string = `${environment.baseUrl}/api/public/review`;
  privateReviewsUrl: string = `${environment.baseUrl}/api/private/review`;

  constructor(private http: HttpClient) {}

  // Get a list of all reviews for all products
  getAllReviews() {
    return this.http.get(this.publicReviewsUrl, { headers: environment.headers });
  }

  // Get a list of reviews related to a product with the given product ID
  getProductReviews(productId: number) {
    return this.http.get(`${this.publicReviewsUrl}/product/${productId}`, {
      headers: environment.headers,
    });
  }

  // Get a list of reviews written by the user with the given user ID
  getUsersReviews(userId: number) {
    return this.http.get(`${this.publicReviewsUrl}/user/${userId}`, {
      headers: environment.headers,
    });
  }

  // Get a specific review by its ID
  getReviewById(id: number) {
    return this.http.get(`${this.publicReviewsUrl}/${id}`, {
      headers: environment.headers,
    });
  }

  postReview(productId: number, stars: number, title: string, review: string) {
    if (stars > 5) {
      stars = 5;
    }

    const userReview = {
      productId: productId,
      stars: stars,
      title: title,
      review: review,
    };
    return this.http.post(`${this.privateReviewsUrl}`, userReview, {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }

  deleteReviewById(id: number) {
    return this.http.delete(`${this.privateReviewsUrl}/${id}`, {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }
}
