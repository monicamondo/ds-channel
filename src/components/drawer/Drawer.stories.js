import './Drawer.css';

export default {
  title: 'Componentes/Drawer KRs',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Painel flutuante (Drawer) para gerenciar Key Results. É acionado pelo botão [KR] da tabela e sobrepõe a tela exibindo detalhes, gráficos e tabelas de medições.',
      },
    },
  },
};

export const Vazio = {
  render: () => `
    <div style="position:relative; width:100\%; min-height:600px; background:#f0f0f0; overflow:hidden;">
      <div class="drawer-overlay" style="display:block; position:absolute; width:100\%; height:100\%;"></div>
      <div class="drawer-panel story-drawer" id="drawer-panel story-drawer">
    <div class="drawer-title">
      <div class="drawer-title-info">
        <span id="drawer-heading">Gerenciar Key Results (KRs)</span>
        <span class="drawer-title-objective">
          <span
            style="font-weight:normal; color:#888; font-size:9px; text-transform:uppercase; letter-spacing:0.4px;">Objetivo
            estratégico:</span>
          <span id="drawer-objective-name" style="color:#ccc; font-size:10px;">Expandir Presença Digital</span>
        </span>
      </div>
      <button class="drawer-close" onclick="closeDrawer()" title="Fechar">✕</button>
    </div>

    <div class="drawer-toolbar">
      <button class="btn-section btn-primary-action" onclick="openModalKR()">
        <i class="fa fa-plus"></i> Incluir KR
      </button>
      <button class="btn-section" onclick="alert('Importar KRs via Excel')">
        <img src="assets/img/ico_file_xls.gif" alt=""
          style="width:12px;vertical-align:middle;" />
        Importar do Excel
      </button>
      <button class="btn-section" onclick="toggleArquivados()" id="btn-arquivados">
        <i class="fa fa-archive"></i> Exibir arquivados
      </button>
    </div>

    <!-- Busca e filtro por tipo -->
    <div class="drawer-search-bar">
      <i class="fa fa-search" style="color:#888; font-size:11px;"></i>
      <input type="text" class="drawer-search-input" id="kr-search-input" placeholder="Buscar KR pelo nome..."
        oninput="applyKRFilter()" />
      <button class="kr-filter-btn active" id="filter-todos" onclick="setKRFilter('todos')">Todos</button>
      <button class="kr-filter-btn" id="filter-quantitativo"
        onclick="setKRFilter('quantitativo')">Quantitativos</button>
      <button class="kr-filter-btn" id="filter-qualitativo" onclick="setKRFilter('qualitativo')">Qualitativos</button>
    </div>

    <div class="drawer-body" id="drawer-body">
      <div class="kr-empty-state" style="text-align:center; padding: 40px 20px;"><img src="assets/img/ico_alerta.gif" style="margin-bottom:8px" alt="Alerta" /><p>Nenhum Key Result encontrado para os filtros atuais ou não há KRs adicionados.</p></div>
    </div>

    <!-- Rodapé do Drawer: Legenda de Status -->
    <div
      style="border-top: 1px solid #D5D5D5; background: #F8F8F8; padding: 6px 14px; display:flex; align-items:center; gap:16px; font-size:10px; font-family: Tahoma, Arial, sans-serif; flex-shrink:0;">
      <span style="color:#666; font-weight:bold;">Legenda:</span>
      <span style="display:flex; align-items:center; gap:4px;">
        <span style="width:10px;height:10px;border-radius:50%;background:#4CAF50;display:inline-block;"></span>
        Meta atingida (≥95%)
      </span>
      <span style="display:flex; align-items:center; gap:4px;">
        <span style="width:10px;height:10px;border-radius:50%;background:#E6B800;display:inline-block;"></span>
        Atenção (70–95%)
      </span>
      <span style="display:flex; align-items:center; gap:4px;">
        <span style="width:10px;height:10px;border-radius:50%;background:#CC3333;display:inline-block;"></span>
        Abaixo da meta (&lt;70%)
      </span>
      <span style="display:flex; align-items:center; gap:4px;">
        <svg viewBox="0 0 16 14" width="12" height="11">
          <polygon points="8,1 15,13 1,13" fill="#E6B800" stroke="#C8960A" stroke-width="0.5" /><text x="8" y="11.5"
            text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">!</text>
        </svg>
        Sem medição &gt;30 dias
      </span>
    </div>
  </div>



    </div>
  `,
};

export const ComKRs = {
  render: () => `
    <div style="position:relative; width:100\%; min-height:600px; background:#f0f0f0; overflow:hidden;">
      <div class="drawer-overlay" style="display:block; position:absolute; width:100\%; height:100\%;"></div>
      <div class="drawer-panel story-drawer" id="drawer-panel story-drawer">
    <div class="drawer-title">
      <div class="drawer-title-info">
        <span id="drawer-heading">Gerenciar Key Results (KRs)</span>
        <span class="drawer-title-objective">
          <span
            style="font-weight:normal; color:#888; font-size:9px; text-transform:uppercase; letter-spacing:0.4px;">Objetivo
            estratégico:</span>
          <span id="drawer-objective-name" style="color:#ccc; font-size:10px;">Aumentar a Receita</span>
        </span>
      </div>
      <button class="drawer-close" onclick="closeDrawer()" title="Fechar">✕</button>
    </div>

    <div class="drawer-toolbar">
      <button class="btn-section btn-primary-action" onclick="openModalKR()">
        <i class="fa fa-plus"></i> Incluir KR
      </button>
      <button class="btn-section" onclick="alert('Importar KRs via Excel')">
        <img src="assets/img/ico_file_xls.gif" alt=""
          style="width:12px;vertical-align:middle;" />
        Importar do Excel
      </button>
      <button class="btn-section" onclick="toggleArquivados()" id="btn-arquivados">
        <i class="fa fa-archive"></i> Exibir arquivados
      </button>
    </div>

    <!-- Busca e filtro por tipo -->
    <div class="drawer-search-bar">
      <i class="fa fa-search" style="color:#888; font-size:11px;"></i>
      <input type="text" class="drawer-search-input" id="kr-search-input" placeholder="Buscar KR pelo nome..."
        oninput="applyKRFilter()" />
      <button class="kr-filter-btn active" id="filter-todos" onclick="setKRFilter('todos')">Todos</button>
      <button class="kr-filter-btn" id="filter-quantitativo"
        onclick="setKRFilter('quantitativo')">Quantitativos</button>
      <button class="kr-filter-btn" id="filter-qualitativo" onclick="setKRFilter('qualitativo')">Qualitativos</button>
    </div>

    <div class="drawer-body" id="drawer-body">
        <div style="padding: 14px">
    <!-- KR Quantitativo -->
    <div class="kr-card kr-card-quantitativo" onclick="toggleDetalhamento(123)">
      <div class="kr-card-header">
        <span class="kr-card-title"><i class="fa fa-caret-right" style="margin-right:8px; font-size:14px; width:8px; display:inline-block"></i>Atingir R$ 20M de MMR</span>
        <div class="kr-badges">
          <span class="badge badge-quantitativo">Quantitativo</span>
        </div>
      </div>
      <div class="kr-card-body">
        <div class="kr-col">
          <span class="kr-meta-label">Baseline</span>
          <span class="kr-meta-value">R$ 10.000.000,00</span>
        </div>
        <div class="kr-col">
          <span class="kr-meta-label">Atual</span>
          <span class="kr-meta-value">R$ 16.000.000,00</span>
        </div>
        <div class="kr-col">
          <span class="kr-meta-label">Meta</span>
          <span class="kr-meta-value">R$ 20.000.000,00</span>
        </div>
        <div class="kr-col kr-col-medicao">
          <span class="kr-meta-label">Ult. Medição</span>
          <span class="kr-meta-value">15/05/2026</span>
          <span class="kr-meta-sub">R$ 16.000.000,00</span>
        </div>
        <div class="kr-col kr-col-progress">
          <span class="kr-meta-label">Progresso</span>
          <div class="kr-progress-bar-bg">
            <div class="kr-progress-bar-fill" style="width:60%;background:#0A6ED1;"></div>
          </div>
          <div class="kr-progress-pct">60%</div>
        </div>
      </div>
    </div>

    <!-- KR Qualitativo -->
    <div class="kr-card kr-card-qualitativo" style="opacity:1" onclick="toggleDetalhamento(124)">
      <div class="kr-card-header">
        <span class="kr-card-title"><i class="fa fa-caret-right" style="margin-right:8px; width:8px"></i>Melhorar documentação de sistemas</span>
        <div class="kr-badges">
          <span class="badge badge-qualitativo">Qualitativo</span>
        </div>
      </div>
      <div class="kr-card-body">
        <div class="kr-col kr-col-text">
          <span class="kr-meta-label">Situação Atual</span>
          <span class="kr-meta-value" style="font-weight:normal; font-size:11px; color:#333">Documentação espalhada</span>
        </div>
        <div class="kr-col kr-col-text">
          <span class="kr-meta-label">Situação Desejada</span>
          <span class="kr-meta-value" style="font-weight:normal; font-size:11px; color:#333">Portal centralizado</span>
        </div>
        <div class="kr-col" style="flex-shrink:0; min-width:90px;">
          <span class="kr-meta-label">Status</span>
          <span class="kr-meta-value" style="color:#219A52;">✔ Alcançado</span>
        </div>
      </div>
    </div>
  </div>
    </div>

    <!-- Rodapé do Drawer: Legenda de Status -->
    <div
      style="border-top: 1px solid #D5D5D5; background: #F8F8F8; padding: 6px 14px; display:flex; align-items:center; gap:16px; font-size:10px; font-family: Tahoma, Arial, sans-serif; flex-shrink:0;">
      <span style="color:#666; font-weight:bold;">Legenda:</span>
      <span style="display:flex; align-items:center; gap:4px;">
        <span style="width:10px;height:10px;border-radius:50%;background:#4CAF50;display:inline-block;"></span>
        Meta atingida (≥95%)
      </span>
      <span style="display:flex; align-items:center; gap:4px;">
        <span style="width:10px;height:10px;border-radius:50%;background:#E6B800;display:inline-block;"></span>
        Atenção (70–95%)
      </span>
      <span style="display:flex; align-items:center; gap:4px;">
        <span style="width:10px;height:10px;border-radius:50%;background:#CC3333;display:inline-block;"></span>
        Abaixo da meta (&lt;70%)
      </span>
      <span style="display:flex; align-items:center; gap:4px;">
        <svg viewBox="0 0 16 14" width="12" height="11">
          <polygon points="8,1 15,13 1,13" fill="#E6B800" stroke="#C8960A" stroke-width="0.5" /><text x="8" y="11.5"
            text-anchor="middle" font-size="8" font-weight="bold" fill="#fff">!</text>
        </svg>
        Sem medição &gt;30 dias
      </span>
    </div>
  </div>



    </div>
  `,
};