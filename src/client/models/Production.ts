export interface Production {
  id: number;
  days_until: number;
  overview: string;
  poster_url: string;
  release_date: string;
  title: string;
  type: string;
  following_production?: Production;
}
