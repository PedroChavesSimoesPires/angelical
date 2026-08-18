import type {
  CommunityMember,
  CommunityStats,
  EventItem,
  FaqItem,
  NewsItem,
  Product,
  RuleItem,
} from '@/types';

export const angelicalStats: CommunityStats = {
  members: 2847,
  onlineNow: 156,
  eventsHeld: 89,
  communityAge: '2 anos',
};

export const angelicalProducts: Product[] = [
  { id: 'angel', name: 'Angel', description: 'Cargo Angel com cor de nome exclusiva e emoji personalizado.', price: 14.9, category: 'VIP', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=80' },
  { id: 'angel-plus', name: 'Angel+', description: 'Benefícios Angel + acesso a salas exclusivas e eventos antecipados.', price: 29.9, category: 'VIP', image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80', badge: 'Popular' },
  { id: 'divine', name: 'Divine', description: 'O rank celestial máximo com todos os privilégios da comunidade.', price: 49.9, category: 'VIP', image: 'https://images.unsplash.com/photo-1506317716971-f297bd089118?w=400&q=80', featured: true },
  { id: 'cargo-especial', name: 'Cargo Especial', description: 'Cargo customizado com nome e cor à sua escolha.', price: 19.9, category: 'Benefícios', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80' },
  { id: 'cor-nome', name: 'Cor de Nome Premium', description: 'Gradiente exclusivo para seu nome no Discord.', price: 9.9, category: 'Benefícios', image: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&q=80' },
  { id: 'emoji-pack', name: 'Emojis Exclusivos', description: 'Pacote de 10 emojis personalizados para o servidor.', price: 24.9, category: 'Benefícios', image: 'https://images.unsplash.com/photo-1611162617474-5b21e274e25a?w=400&q=80' },
  { id: 'sala-vip', name: 'Sala Exclusiva', description: 'Acesso permanente a salas VIP de voz e texto.', price: 34.9, category: 'Benefícios', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80' },
  { id: 'evento-antecipado', name: 'Acesso Antecipado', description: 'Entre em eventos 24h antes do público geral.', price: 14.9, category: 'Benefícios', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80' },
  { id: 'pack-starter', name: 'Pack Starter', description: 'Combo inicial com cargo, emoji e cor de nome.', price: 39.9, category: 'Itens', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80', badge: 'Combo' },
  { id: 'pack-celestial', name: 'Pack Celestial', description: 'O pacote completo com todos os benefícios básicos.', price: 79.9, category: 'Itens', image: 'https://images.unsplash.com/photo-1464802686167-b939a6910699?w=400&q=80', featured: true },
  { id: 'cosmetic-wings', name: 'Asas Celestiais', description: 'Reação animada exclusiva de asas no perfil.', price: 19.9, category: 'Cosméticos', image: 'https://images.unsplash.com/photo-1532693322450-1f128fe71910?w=400&q=80' },
  { id: 'cosmetic-glow', name: 'Brilho Suave', description: 'Efeito de brilho suave ao redor do seu avatar.', price: 14.9, category: 'Cosméticos', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80' },
  { id: 'item-especial', name: 'Item Especial da Temporada', description: 'Item limitado disponível apenas nesta temporada.', price: 29.9, category: 'Itens', image: 'https://images.unsplash.com/photo-1506317716971-f297bd089118?w=400&q=80' },
];

export const angelicalCategories = ['Todos', 'VIP', 'Benefícios', 'Itens', 'Cosméticos'];

export const angelicalNews: NewsItem[] = [
  { id: '1', title: 'Noite Celestial — Evento especial', excerpt: 'Uma noite de conversas, jogos e sorteios exclusivos para a comunidade.', date: '2026-08-12', category: 'Evento', image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80' },
  { id: '2', title: 'Novos canais de voz abertos', excerpt: 'Salas temáticas para jogos, música e conversas descontraídas.', date: '2026-08-01', category: 'Comunidade', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80' },
  { id: '3', title: 'Programa de embaixadores', excerpt: 'Torne-se embaixador e ajude a comunidade a crescer com benefícios exclusivos.', date: '2026-07-20', category: 'Novidade', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80' },
];

export const angelicalEvents: EventItem[] = [
  { id: '1', title: 'Noite de Jogos', description: 'Jogos em grupo, sorteios e muita diversão com a comunidade.', date: '2026-08-18', type: 'Social' },
  { id: '2', title: 'Encontro Celestial', description: 'Evento mensal para conhecer novos membros e fazer amizades.', date: '2026-08-22', type: 'Comunidade' },
  { id: '3', title: 'Karaokê Angelical', description: 'Mostre seu talento musical em nossa noite de karaoké.', date: '2026-08-30', type: 'Entretenimento' },
];

export const angelicalRules: RuleItem[] = [
  { id: '1', title: 'Respeito e empatia', description: 'Trate cada membro com gentileza. Somos uma comunidade acolhedora.', severity: 'critical' },
  { id: '2', title: 'Conteúdo apropriado', description: 'Evite conteúdo NSFW, ofensivo ou que possa incomodar outros membros.', severity: 'critical' },
  { id: '3', title: 'Sem spam', description: 'Não envie mensagens repetitivas, links não solicitados ou autopromoção excessiva.', severity: 'warning' },
  { id: '4', title: 'Privacidade', description: 'Não compartilhe informações pessoais de outros membros sem consentimento.', severity: 'critical' },
  { id: '5', title: 'Canais corretos', description: 'Use cada canal para seu propósito. Leia as descrições antes de postar.', severity: 'info' },
  { id: '6', title: 'Diversão responsável', description: 'Divirta-se, mas saiba que há limites. Brincadeiras devem ser mútuas.', severity: 'info' },
];

export const angelicalFaq: FaqItem[] = [
  { id: '1', question: 'Como faço para entrar no servidor?', answer: 'Clique no botão "Entrar no Discord" e aceite as regras para ter acesso completo.' },
  { id: '2', question: 'O Angelical X é para qual idade?', answer: 'Nossa comunidade é aberta, mas recomendamos 13+ conforme os Termos de Serviço do Discord.' },
  { id: '3', question: 'Como participo dos eventos?', answer: 'Fique de olho no canal de eventos e reaja com ✅ para confirmar presença.' },
  { id: '4', question: 'Posso convidar amigos?', answer: 'Claro! Compartilhe o link de convite e ajude nossa comunidade a crescer.' },
  { id: '5', question: 'Como funciona a loja VIP?', answer: 'Escolha seu plano na loja, finalize o checkout e aguarde a ativação manual (integração em breve).' },
];

export const angelicalMembers: CommunityMember[] = [
  { id: '1', name: 'Luna', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna', role: 'Fundadora', joinedAt: '2024-01-15', bio: 'Criando conexões genuínas desde o primeiro dia.' },
  { id: '2', name: 'Stellar', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Stellar', role: 'Moderador', joinedAt: '2024-03-20', bio: 'Aqui para manter a paz celestial.' },
  { id: '3', name: 'Nova', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nova', role: 'Embaixador', joinedAt: '2024-06-10', bio: 'Adoro conhecer pessoas novas!' },
  { id: '4', name: 'Aurora', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aurora', role: 'Eventos', joinedAt: '2024-08-05', bio: 'Organizo os melhores eventos da comunidade.' },
  { id: '5', name: 'Celeste', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Celeste', role: 'Membro VIP', joinedAt: '2025-01-12', bio: 'Membro ativo e sempre online.' },
  { id: '6', name: 'Seraph', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Seraph', role: 'Membro', joinedAt: '2025-04-18', bio: 'Novo por aqui, mas já me sinto em casa.' },
];

export const angelicalHighlights = [
  { id: '1', title: 'Comunidade Acolhedora', description: 'Um espaço seguro para fazer amigos e compartilhar momentos.' },
  { id: '2', title: 'Eventos Semanais', description: 'De jogos a karaokê — sempre tem algo acontecendo.' },
  { id: '3', title: 'Salas Temáticas', description: 'Canais para cada interesse: música, games, arte e muito mais.' },
  { id: '4', title: 'VIP Celestial', description: 'Benefícios exclusivos para quem quer apoiar a comunidade.' },
];
