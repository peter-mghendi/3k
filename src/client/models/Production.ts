export interface Production {
    id: number;
    days_until: number;
    overview: string;
    poster_url: string;
    release_date: Date;
    title: string;
    type: string;
    following_production?: Production;
}