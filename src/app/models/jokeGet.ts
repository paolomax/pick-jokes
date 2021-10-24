export interface IJokeGet {
    type: 'single' | 'twopart';
    joke?: string;
    setup?: string;
    delivery?: string;
} 