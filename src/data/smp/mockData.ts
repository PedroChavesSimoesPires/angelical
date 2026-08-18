import type {
  EventItem,
  FaqItem,
  FeatureItem,
  NewsItem,
  PlayerRank,
  Product,
  RuleItem,
  ServerStatus,
} from '@/types';
import { siteConfig } from '@/config/site';

export const smpServerStatus: ServerStatus = {
  online: true,
  playersOnline: 24,
  maxPlayers: 100,
  version: '1.21.x',
  ip: siteConfig.smp.ip,
};

export const smpFeatures: FeatureItem[] = [
  {
    id: 'economy',
    title: 'Economia',
    description: 'Sistema econômico balanceado com mercado, leilões e troca entre jogadores.',
    icon: 'coins',
  },
  {
    id: 'events',
    title: 'Eventos',
    description: 'Competições semanais, caçadas ao tesouro e eventos sazonais exclusivos.',
    icon: 'calendar',
  },
  {
    id: 'ranks',
    title: 'Sistema de Ranks',
    description: 'Progresse na comunidade e desbloqueie benefícios exclusivos no servidor.',
    icon: 'award',
  },
  {
    id: 'community',
    title: 'Comunidade',
    description: 'Uma comunidade ativa, acolhedora e pronta para receber novos aventureiros.',
    icon: 'users',
  },
  {
    id: 'claims',
    title: 'Proteção de Terrenos',
    description: 'Proteja suas construções com um sistema intuitivo de claims e permissões.',
    icon: 'shield',
  },
  {
    id: 'quests',
    title: 'Quests',
    description: 'Missões diárias e semanais com recompensas únicas para exploradores.',
    icon: 'map',
  },
  {
    id: 'rewards',
    title: 'Sistema de Recompensas',
    description: 'Ganhe recompensas por jogar, participar de eventos e completar desafios.',
    icon: 'gift',
  },
];

export const smpProducts: Product[] = [
  { id: 'vip', name: 'VIP', description: 'Acesso a comandos exclusivos, tag VIP e kit básico.', price: 19.9, category: 'Ranks', image: 'https://images.unsplash.com/photo-1606503153255-711d279740b9?w=400&q=80', badge: 'Popular' },
  { id: 'vip-plus', name: 'VIP+', description: 'Todos os benefícios VIP + fly em áreas seguras e mais slots.', price: 34.9, category: 'Ranks', image: 'https://images.unsplash.com/photo-1614728265442-9982c693b8e1?w=400&q=80' },
  { id: 'mvp', name: 'MVP', description: 'Rank premium com cosméticos exclusivos e prioridade no servidor.', price: 49.9, category: 'Ranks', image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80' },
  { id: 'mvp-plus', name: 'MVP+', description: 'O rank definitivo com todos os benefícios e recompensas mensais.', price: 79.9, category: 'Ranks', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80', featured: true },
  { id: 'coins-1k', name: '1.000 Coins', description: 'Pacote inicial de moedas para começar no servidor.', price: 9.9, category: 'Coins', image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&q=80' },
  { id: 'coins-5k', name: '5.000 Coins', description: 'Pacote intermediário com bônus de 500 coins.', price: 39.9, category: 'Coins', image: 'https://images.unsplash.com/photo-1518546304921-064272a64e11?w=400&q=80', badge: 'Melhor valor' },
  { id: 'coins-10k', name: '10.000 Coins', description: 'Pacote avançado com bônus de 1.500 coins.', price: 69.9, category: 'Coins', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80' },
  { id: 'kit-inicial', name: 'Kit Inicial', description: 'Ferramentas, comida e materiais para começar sua jornada.', price: 14.9, category: 'Kits', image: 'https://images.unsplash.com/photo-1587578939503-0451dfd5522e?w=400&q=80' },
  { id: 'kit-guerreiro', name: 'Kit Guerreiro', description: 'Armadura encantada, armas e poções para combate.', price: 29.9, category: 'Kits', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80' },
  { id: 'kit-lendario', name: 'Kit Lendário', description: 'O kit mais completo com itens raros e exclusivos.', price: 59.9, category: 'Kits', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80', featured: true },
  { id: 'pet', name: 'Pet Exclusivo', description: 'Companheiro cosmético que segue você pelo mundo.', price: 24.9, category: 'Cosméticos', image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=400&q=80' },
  { id: 'efeitos', name: 'Efeitos de Partículas', description: 'Partículas únicas ao seu redor enquanto explora.', price: 19.9, category: 'Cosméticos', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&q=80' },
  { id: 'tags', name: 'Tag Personalizada', description: 'Crie sua tag exclusiva visível no chat e tab.', price: 34.9, category: 'Cosméticos', image: 'https://images.unsplash.com/photo-1611162617474-5b21e274e25a?w=400&q=80' },
  { id: 'capas', name: 'Capa Exclusiva', description: 'Capa cosmética única para seu personagem.', price: 44.9, category: 'Cosméticos', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
];

export const smpCategories = ['Todos', 'Ranks', 'Coins', 'Kits', 'Cosméticos'];

export const smpRanking: PlayerRank[] = [
  { id: '1', name: 'AventureiroX', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AventureiroX', rank: 'MVP+', coins: 45200, hoursPlayed: 892, level: 78 },
  { id: '2', name: 'BlockMaster', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BlockMaster', rank: 'MVP', coins: 38100, hoursPlayed: 756, level: 71 },
  { id: '3', name: 'CreeperSlayer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CreeperSlayer', rank: 'VIP+', coins: 29800, hoursPlayed: 634, level: 65 },
  { id: '4', name: 'DiamondHunter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DiamondHunter', rank: 'VIP', coins: 22400, hoursPlayed: 521, level: 58 },
  { id: '5', name: 'RedstoneKing', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RedstoneKing', rank: 'VIP', coins: 18700, hoursPlayed: 489, level: 54 },
  { id: '6', name: 'NetherExplorer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NetherExplorer', rank: 'Membro', coins: 15200, hoursPlayed: 412, level: 49 },
  { id: '7', name: 'FarmBuilder', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FarmBuilder', rank: 'Membro', coins: 12800, hoursPlayed: 387, level: 45 },
  { id: '8', name: 'SkyWalker', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SkyWalker', rank: 'Membro', coins: 9600, hoursPlayed: 298, level: 38 },
];

export const smpNews: NewsItem[] = [
  { id: '1', title: 'Nova temporada de eventos PvP', excerpt: 'Prepare-se para a arena — prêmios exclusivos para os melhores combatentes.', date: '2026-08-10', category: 'Eventos', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80' },
  { id: '2', title: 'Atualização 1.21 — Novos biomas', excerpt: 'Exploradores, novos biomas e recursos foram adicionados ao mapa principal.', date: '2026-08-05', category: 'Atualização', image: 'https://images.unsplash.com/photo-1614294148960-9aa814e4e594?w=600&q=80' },
  { id: '3', title: 'Sistema de quests reformulado', excerpt: 'Missões diárias agora oferecem recompensas melhoradas e progressão mais fluida.', date: '2026-07-28', category: 'Sistema', image: 'https://images.unsplash.com/photo-1587578939503-0451dfd5522e?w=600&q=80' },
];

export const smpEvents: EventItem[] = [
  { id: '1', title: 'Torneio PvP Semanal', description: 'Batalhe na arena e conquiste prêmios exclusivos.', date: '2026-08-20', type: 'PvP' },
  { id: '2', title: 'Caça ao Tesouro', description: 'Encontre baús escondidos pelo mapa e ganhe recompensas raras.', date: '2026-08-25', type: 'Exploração' },
  { id: '3', title: 'Construção Comunitária', description: 'Participe da construção da nova cidade central do servidor.', date: '2026-09-01', type: 'Construção' },
];

export const smpRules: RuleItem[] = [
  { id: '1', title: 'Respeito mútuo', description: 'Trate todos os jogadores com respeito. Insultos, discriminação e assédio não serão tolerados.', severity: 'critical' },
  { id: '2', title: 'Sem griefing', description: 'Não destrua ou modifique construções de outros jogadores sem permissão.', severity: 'critical' },
  { id: '3', title: 'Sem trapaças', description: 'Uso de hacks, x-ray, auto-clickers ou qualquer vantagem injusta resulta em banimento.', severity: 'critical' },
  { id: '4', title: 'Construções adequadas', description: 'Evite construções ofensivas, spam ou lag machines no servidor.', severity: 'warning' },
  { id: '5', title: 'Comércio justo', description: 'Scams e fraudes em transações entre jogadores são proibidos.', severity: 'warning' },
  { id: '6', title: 'Chat apropriado', description: 'Mantenha o chat livre de spam, flood e conteúdo impróprio.', severity: 'info' },
];

export const smpFaq: FaqItem[] = [
  { id: '1', question: 'Qual versão do Minecraft devo usar?', answer: 'Utilize a versão [VERSÃO] para conectar ao servidor. Verifique sempre a versão atual nas notícias.' },
  { id: '2', question: 'Como protejo meu terreno?', answer: 'Use o comando /claim para proteger sua área. Membros VIP têm limites maiores de claims.' },
  { id: '3', question: 'Posso jogar com amigos?', answer: 'Sim! Convide amigos pelo IP do servidor e formem uma guilda para jogar juntos.' },
  { id: '4', question: 'Como compro ranks e coins?', answer: 'Acesse a loja do servidor, adicione produtos ao carrinho e siga o checkout. Pagamentos serão integrados em breve.' },
  { id: '5', question: 'O servidor é PvP?', answer: 'PvP está habilitado em áreas específicas. Zonas seguras protegem construções e spawns.' },
];
