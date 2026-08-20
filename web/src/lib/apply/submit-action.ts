/**
 * submit-action.ts — ação de envio isolada (Fase E, docs/PLAN.md §12)
 *
 * STATUS: esqueleto — NÃO implementar antes das Fases A-D estarem provadas.
 *
 * Ação nova, fora do vocabulário do agente de IA em drive.ts. Só o
 * gate.mjs pode acionar isso, e só depois de logar a autorização no audit
 * log (decision-log.jsonl). O agente que lê a página (drive.ts) continua
 * sem poder enviar nunca — SUBMIT_RX ali permanece intacto.
 *
 * Bloqueio duro de domínio: nunca deve ser chamável para LinkedIn
 * ("Easy Apply"), independente de config — só editando este arquivo.
 *
 * Ver: /Users/david/.claude/plans/ent-o-espera-vamos-bola-async-harp.md
 */

export {};
