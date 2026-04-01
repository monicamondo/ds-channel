import './Legenda.css';

export default {
  title: 'Componentes/Legenda',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Listagem de ícones e seus significados, tipicamente alinhados no rodapé das tabelas e páginas do Channel.',
      },
    },
  },
};

export const PadraoDaPagina = {
  render: () => `
    <div class="page-legend">
      <span class="legend-label">Legenda:</span>
      <div class="legend-item-row">
        <img src="assets/img/ico_indicador_tendencia.gif" alt="" />
        <span>Indicadores</span>
      </div>
      <div class="legend-item-row">
        <img src="assets/img/ico_causaEfeito.gif" alt="" />
        <span>Causa e Efeito</span>
      </div>
      <div class="legend-item-row">
        <img src="assets/img/ico-componentes.gif" alt="" />
        <span>Associar Atividades</span>
      </div>
      <div class="legend-item-row">
        <span class="icon-kr" style="display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;background:#5C7CFA;color:#fff;font-size:8px;font-weight:bold;border-radius:2px;font-family:Tahoma, Arial, sans-serif;letter-spacing:-0.5px;">KR</span>
        <span>Gerenciar KRs</span>
      </div>
      <div class="legend-item-row">
        <img src="assets/img/ico_ligado.gif" alt="" />
        <span>Habilitar / Desabilitar Objetivo</span>
      </div>
      <div class="legend-item-row">
        <img src="assets/img/ico-lupa.gif" alt="" />
        <span>Editar</span>
      </div>
      <div class="legend-item-row">
        <img src="assets/img/ico-remover-novo.gif" alt="" />
        <span>Remover</span>
      </div>
    </div>
  `,
};