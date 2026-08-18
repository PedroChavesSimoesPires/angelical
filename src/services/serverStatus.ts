import type { ServerStatus } from '@/types';
import { smpServerStatus } from '@/data/smp/mockData';

/**
 * Serviço placeholder para status do servidor Minecraft.
 * Substituir por chamada real à API quando disponível.
 */
export async function fetchServerStatus(): Promise<ServerStatus> {
  await simulateNetworkDelay();
  return { ...smpServerStatus };
}

function simulateNetworkDelay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
