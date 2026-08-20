#!/usr/bin/env node
/**
 * gate.mjs — JobPilot Autopilot Gate Engine (Fase A, docs/PLAN.md §12)
 *
 * STATUS: esqueleto — nenhuma lógica implementada ainda.
 *
 * Função pura e determinística. Lê um Application Pack (report +
 * config/profile.yml + data/blacklist.md + data/applications.md) e retorna
 * { decision: 'auto_send' | 'needs_approval' | 'reject', reasons: [...] }.
 *
 * Sem chamada de LLM aqui dentro — match_score/recruiter_score já vêm
 * prontos da avaliação existente do career-ops. Este arquivo só faz AND
 * determinístico de checagens: score mínimo, salário, vaga ainda ativa
 * (check-liveness.mjs), não duplicada (data/applications.md), empresa não
 * bloqueada (data/blacklist.md), país/autorização (config/profile.yml),
 * sem pergunta crítica pendente, limite diário não estourado.
 *
 * Ver: /Users/david/.claude/plans/ent-o-espera-vamos-bola-async-harp.md
 */

export function evaluateGate(/* applicationPack, profile, blacklist, tracker */) {
  throw new Error('gate.mjs: not implemented yet (Fase A)');
}
