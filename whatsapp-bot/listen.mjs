/**
 * listen.mjs — recebe webhook do WAHA, interpreta resposta (Fase C, docs/PLAN.md §12)
 *
 * STATUS: esqueleto — nenhuma lógica implementada ainda.
 *
 * Recebe a resposta em texto ("sim"/"não") à mensagem de notify.mjs,
 * verifica com webhook-auth.mjs, e resolve a decisão: aprovado_por_humano
 * ou rejeitado_por_humano — grava no audit log (decision-log.jsonl).
 * Sem resposta em N horas → rejeita automaticamente (nunca aprova por
 * silêncio).
 *
 * Ver: /Users/david/.claude/plans/ent-o-espera-vamos-bola-async-harp.md
 */
