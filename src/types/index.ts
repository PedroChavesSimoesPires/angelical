export type Universe = 'portal' | 'smp' | 'angelical';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface RuleItem {
  id: string;
  title: string;
  description: string;
  severity?: 'info' | 'warning' | 'critical';
}

export interface EventItem {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
}

export interface PlayerRank {
  id: string;
  name: string;
  avatar: string;
  rank: string;
  coins: number;
  hoursPlayed: number;
  level: number;
}

export interface ServerStatus {
  online: boolean;
  playersOnline: number;
  maxPlayers: number;
  version: string;
  ip: string;
}

export interface CommunityStats {
  members: number;
  onlineNow: number;
  eventsHeld: number;
  communityAge: string;
}

export interface CommunityMember {
  id: string;
  name: string;
  avatar: string;
  role: string;
  joinedAt: string;
  bio?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  projectName: string;
  discordUrl: string;
  smp: {
    name: string;
    ip: string;
    discordUrl: string;
    description: string;
    bannerImage: string;
  };
  angelical: {
    name: string;
    ip?: string;
    discordUrl: string;
    description: string;
    bannerImage: string;
  };
}
