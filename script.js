// --- DADOS DO AGENTE ---
let agentData = {
    name: null,
    avatar: null,
    level: 1,
    xp: 0,
    missions: [
        // --- SEMANA 1: IA Desvendada ---
        // Segunda (100 XP)
        {
            id: 1, phase: 1, title: "A Descoberta da Inteligência",
            xp: 100, isProject: false,
            desc: `<p><strong>Objetivo:</strong> Descobrir onde a IA se esconde na sua casa.</p>
            <p>1. <strong>Briefing:</strong> Assista ao vídeo de instrução:<br>
            <a href="https://www.youtube.com/watch?v=gq0apWV3YYY" target="_blank">>> ACESSAR ARQUIVO: IA no Manual do Mundo</a></p>
            <p>2. <strong>Desafio:</strong> Após assistir, liste oralmente para o Comando (Pai) 3 coisas/apps na sua casa que você acha que usam IA (Ex: YouTube, Google, Jogos, Celular).</p>`,
            completed: false
        },
        // Terça (100 XP)
        {
            id: 2, phase: 1, title: "IA no Campo de Batalha Diário",
            xp: 100, isProject: false,
            desc: `<p><strong>Objetivo:</strong> Investigar como a IA funciona no seu dia a dia.</p>
            <p>1. <strong>Briefing:</strong> <a href="https://www.youtube.com/watch?v=xfVUmd545KU" target="_blank">>> VÍDEO: 5 usos de IA no dia a dia (Manual do Mundo)</a></p>
            <p>2. <strong>Ação:</strong> Peça para ele apontar na casa: "Onde você acha que aqui tem IA?"</p>
            <p>3. <strong>Bônus (50 XP):</strong> Se conseguir explicar para o Comando (Pai) com as suas próprias palavras: "O que é IA?".</p>`,
            completed: false
        },
        // Sexta - Projeto (300 XP)
        {
            id: 3, phase: 1, title: "Missão Sexta: Cartaz do Detetive",
            xp: 300, isProject: true,
            desc: `<p><strong>Objetivo:</strong> Mapear e apresentar as IAs que você usa.</p>
            <p>1. <strong>Briefing:</strong> <a href="https://support.google.com/youtube/answer/6342839?hl=pt-BR" target="_blank">>> LEITURA: Como o YouTube recomenda vídeos (Google)</a></p>
            <p>2. <strong>Desafio Final da Fase 1:</strong> Fazer um cartaz (papel ou digital) com:</p>
            <ul class="cyber-list">
                <li>Título: "Onde a IA aparece na minha vida"</li>
                <li>5 exemplos com desenho ou ícone (YouTube, jogos, celular, etc.).</li>
            </ul>
            <p>3. <strong>Vitória:</strong> Apresentar o cartaz para o Comando.</p>`,
            completed: false
        },

        // --- SEMANA 2: Arquiteto de Jogos ---
        // Segunda (100 XP)
        {
            id: 4, phase: 2, title: "O Cérebro do NPC",
            xp: 100, isProject: false,
            desc: `<p><strong>Objetivo:</strong> Entender como os inimigos (NPCs) dos jogos funcionam.</p>
            <p>1. <strong>Briefing:</strong> <a href="https://www.globant.com/pt-br/tech-terms/ia-nos-jogos" target="_blank">>> LEITURA: IA em jogos (explicação simples)</a></p>
            <p>2. <strong>Desafio:</strong> Pense em um jogo que você joga. Que tipo de coisa parece 'inteligente' (inimigo, aliado)? Conte ao Comando qual inimigo age de forma "esperta".</p>
            <p>3. <strong>Bônus (50 XP):</strong> Se fosse criar um inimigo, como ele agiria? (Pensar em 3 regras de comportamento).</p>`,
            completed: false
        },
        // Terça (100 XP)
        {
            id: 5, phase: 2, title: "Primeiros Passos no Scratch",
            xp: 100, isProject: false,
            desc: `<p><strong>Objetivo:</strong> Fazer o personagem se mover com as setas.</p>
            <p>1. <strong>Acesso:</strong> Entre em <a href="https://scratch.mit.edu" target="_blank">scratch.mit.edu</a> e crie uma conta (se não tiver).</p>
            <p>2. <strong>Tutorial:</strong> <a href="https://www.alura.com.br/artigos/movendo-um-personagem-no-scratch" target="_blank">>> LEITURA/TUTORIAL: Movimentar personagem no Scratch</a></p>
            <p>3. <strong>Desafio:</strong> Faça o personagem principal (Sprite) se mexer quando você aperta as setas do teclado.</p>`,
            completed: false
        },
        // Sexta - Projeto (300 XP)
        {
            id: 6, phase: 2, title: "Missão Sexta: O Coletor de Moedas",
            xp: 300, isProject: true,
            desc: `<p><strong>Objetivo:</strong> Criar seu primeiro mini-jogo funcional.</p>
            <p>1. <strong>Referência:</strong> <a href="https://www.youtube.com/watch?v=9eRU_j6VWHY" target="_blank">>> TUTORIAL: Criando um jogo simples no Scratch</a></p>
            <p>2. <strong>Missão:</strong> Crie um jogo onde o personagem tem que pegar um objeto (moeda ou outro sprite) para ganhar pontos.</p>
            <p>3. <strong>Vitória:</strong> Mostrar o jogo funcionando (com pontuação) para o Comando.</p>`,
            completed: false
        },

        // --- SEMANA 3: Treinando a Máquina ---
        // Segunda (100 XP)
        {
            id: 7, phase: 3, title: "O Professor de Robôs",
            xp: 100, isProject: false,
            desc: `<p><strong>Objetivo:</strong> Entender que a IA aprende vendo exemplos.</p>
            <p>1. <strong>Briefing:</strong> <a href="https://www.alura.com.br/videos/visao-computacional-com-teachable-machine-c1466" target="_blank">>> AULA: Visão computacional com Teachable Machine</a></p>
            <p>2. <strong>Conceito:</strong> Se você mostrar 100 fotos de cachorro, você aprende o que é um cachorro. A IA é igual. Conte ao Comando como você acha que isso funciona.</p>`,
            completed: false
        },
        // Terça (100 XP)
        {
            id: 8, phase: 3, title: "O Experimento Teachable Machine",
            xp: 100, isProject: false,
            desc: `<p><strong>Objetivo:</strong> Usar o Teachable Machine do Google.</p>
            <p>1. <strong>Ferramenta:</strong> Vá em <a href="https://teachablemachine.withgoogle.com/" target="_blank">Teachable Machine</a> -> "Image Project".</p>
            <p>2. <strong>Tutorial:</strong> <a href="https://codelabs.developers.google.com/tensorflowjs-transfer-learning-teachable-machine?hl=pt-br" target="_blank">>> GUIA: Teachable Machine passo a passo</a></p>
            <p>3. <strong>Desafio:</strong> Crie um modelo que reconhece 2 classes simples (Ex: "Mão aberta" vs "Mão fechada") usando a webcam.</p>`,
            completed: false
        },
        // Sexta - Projeto (300 XP)
        {
            id: 9, phase: 3, title: "Missão Sexta: Showcase de IA",
            xp: 300, isProject: true,
            desc: `<p><strong>Objetivo:</strong> Treinar e testar um modelo novo sozinho.</p>
            <p>1. <strong>Projeto:</strong> Treine um modelo para reconhecer dois objetos/expressões faciais diferentes (Ex: um Controle vs uma Garrafa; Cara Feliz vs Cara Triste).</p>
            <p>2. <strong>Vitória:</strong> Teste o modelo. Chame o Comando para mostrar o que a IA acerta mais e o que ela erra.</p>`,
            completed: false
        },
        
        // --- SEMANA 4: Arquiteto do Futuro ---
        // Segunda (100 XP)
        {
            id: 10, phase: 4, title: "Treino de Lógica",
            xp: 100, isProject: false,
            desc: `<p><strong>Objetivo:</strong> Fortalecer o raciocínio lógico.</p>
            <p>1. <strong>Ferramenta:</strong> Acesse <a href="https://code.org/" target="_blank">Code.org</a> e escolha o "Curso Expresso".</p>
            <p>2. <strong>Desafio:</strong> Complete pelo menos 5 níveis dos desafios de blocos (Minecraft ou Angry Birds) no site.</p>`,
            completed: false
        },
        // Terça (100 XP)
        {
            id: 11, phase: 4, title: "Profissões do Futuro",
            xp: 100, isProject: false,
            desc: `<p><strong>Objetivo:</strong> Imaginar onde a IA pode te levar.</p>
            <p>1. <strong>Briefing:</strong> <a href="https://www.youtube.com/watch?v=qVGxWi6XDAI" target="_blank">>> NERDOLOGIA: PROFISSÕES DO FUTURO</a></p>
            <p>2. <strong>Chat:</strong> Discutir com o Comando: o que parece mais legal? Criar jogos? Desenhar robôs? (Sem pressão para escolher).</p>
            <p>3. <strong>Bônus (50 XP):</strong> Revisitar o jogo do Scratch e fazer uma melhoria que use uma regra de 'Se/Então'.</p>`,
            completed: false
        },
        // Sexta - Projeto Final (300 XP)
        {
            id: 12, phase: 4, title: "Missão Sexta: RELATÓRIO FINAL",
            xp: 300, isProject: true,
            desc: `<p><strong>Objetivo:</strong> Finalizar o projeto favorito e apresentar o aprendizado.</p>
            <p>1. <strong>Ação:</strong> Escolha seu projeto favorito (Scratch ou Teachable Machine) e faça a melhoria que conseguir.</p>
            <p>2. <strong>APRESENTAÇÃO (500 XP Extra)</strong>: Você tem 10 minutos para apresentar ao Comando (Pai) o que mais gostou, o projeto final e o que aprendeu sobre IA nas 4 semanas.</p>
            <p>3. <strong>Vitória:</strong> Responder à Pesquisa de Satisfação para ganhar o bônus final de R$ 40,00 (se todas as Sextas-feiras foram completas).</p>`,
            completed: false
        }
    ]
};

// --- FUNÇÕES DO SISTEMA ---

// Total de XP esperado para a barra. Max XP é a soma de todos os XP base/projeto.
const TOTAL_MAX_XP = agentData.missions.reduce((sum, m) => sum + m.xp, 0) + 500; // 500 XP da apresentação final.


// ===============================
// AGENDA INTELIGENTE (Missão do Dia)
// ===============================
const SCHEDULE = {
    english: { day: 3, label: "📘 Inglês (tarde)" }, // 3 = quarta (0 dom, 1 seg, 2 ter, 3 qua...)
    gymDays: [2, 4], // 2 = terça, 4 = quinta
    gym: { label: "🏋️ Academia (19:00–21:00)" }
};

const PT_DAYS = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];

function getTodayInfo() {
    const now = new Date();
    const day = now.getDay();
    return { now, day, dayName: PT_DAYS[day] };
}

function getCurrentUnlockedPhase() {
    for (let p = 1; p <= 4; p++) {
        if (p > 1) {
            const prev = agentData.missions.filter(m => m.phase === p - 1);
            const prevComplete = prev.every(m => m.completed);
            if (!prevComplete) return p - 1;
        }
        const phaseMissions = agentData.missions.filter(m => m.phase === p);
        if (phaseMissions.some(m => !m.completed)) return p;
    }
    return 4;
}

function pickRecommendedMission(day) {
    const phase = getCurrentUnlockedPhase();
    const phaseMissions = agentData.missions.filter(m => m.phase === phase && !m.completed);
    if (phaseMissions.length === 0) return null;

    const isFriday = day === 5;
    const isGymDay = SCHEDULE.gymDays.includes(day);

    if (isFriday) return phaseMissions.find(m => m.xp > 150) || phaseMissions[0];
    if (isGymDay) return phaseMissions.find(m => m.xp <= 150) || phaseMissions[0];
    return phaseMissions[0];
}

function buildAgendaText() {
    const { day, dayName } = getTodayInfo();

    const events = [];
    if (day === SCHEDULE.english.day) events.push(SCHEDULE.english.label);
    if (SCHEDULE.gymDays.includes(day)) events.push(SCHEDULE.gym.label);
    if (events.length === 0) events.push("🧩 Dia livre (escolha leve)");

    const mission = pickRecommendedMission(day);
    return {
        title: `HOJE: ${dayName.toUpperCase()}`,
        eventsText: events.join(" • "),
        missionTitle: mission ? mission.title : "Tudo completo ✅",
        missionId: mission ? mission.id : null
    };
}

function renderAgendaBox() {
    const dashboardHead = document.querySelector(".dashboard-head");
    if (!dashboardHead) return;

    let box = document.getElementById("agendaBox");
    if (!box) {
        box = document.createElement("div");
        box.className = "stats-box";
        box.id = "agendaBox";
        dashboardHead.appendChild(box);
    }

    const agenda = buildAgendaText();
    box.innerHTML = `
        <span class="label">${agenda.title}</span>
        <span class="value" style="font-size: 1.05rem; line-height: 1.2; margin-top: 6px;">
            ${agenda.eventsText}
        </span>
        <span class="label" style="margin-top: 10px;">MISSÃO RECOMENDADA</span>
        <span class="value" style="font-size: 1.1rem;">
            ${agenda.missionTitle}
        </span>
    `;

    if (agenda.missionId) {
        box.style.cursor = "pointer";
        box.onclick = () => openMissionModal(agenda.missionId);
    } else {
        box.style.cursor = "default";
        box.onclick = null;
    }
}


function init() {
    loadData();
    initAvatar();
    renderSidebar();
    renderMissions();
    renderAgendaBox();
}

// 1. Controle de Dados e Salvamento
function loadData() {
    const saved = localStorage.getItem('agentMiguelPlan_Final');
    if (saved) {
        const parsed = JSON.parse(saved);
        agentData.name = parsed.name;
        agentData.level = parsed.level;
        agentData.xp = parsed.xp;
        // Recuperar avatar (se existir)
        if (parsed.avatar) {
            agentData.avatar = parsed.avatar;
        }
        // Recuperar status das missões
        parsed.missions.forEach(pm => {
            const mission = agentData.missions.find(m => m.id === pm.id);
            if (mission) mission.completed = pm.completed;
        });
    } else {
        // Primeira vez: Tela de boas vindas
        document.getElementById('welcomeSection').classList.remove('hidden-section');
        document.getElementById('welcomeSection').classList.add('active-section');
        document.getElementById('dashboardSection').classList.remove('active-section');
        document.getElementById('dashboardSection').classList.add('hidden-section');
    }
}

function saveData() {
    localStorage.setItem('agentMiguelPlan_Final', JSON.stringify(agentData));
}


// ===============================
// AVATAR DO AGENTE (UPLOAD + SAVE)
// ===============================
function initAvatar() {
    const avatarInput = document.getElementById("avatarInput");
    const avatarImg = document.getElementById("agentAvatar");
    if (!avatarInput || !avatarImg) return;

    // Se já existe avatar salvo, aplicar
    if (agentData.avatar) {
        avatarImg.src = agentData.avatar;
    }

    // Evita adicionar listener duplicado se init rodar novamente por algum motivo
    if (avatarInput.dataset.bound === "1") return;
    avatarInput.dataset.bound = "1";

    avatarInput.addEventListener("change", function () {
        const file = this.files && this.files[0];
        if (!file) return;

        // Blindagem básica: só imagem
        if (!file.type || !file.type.startsWith("image/")) {
            openToast("Arquivo inválido. Selecione uma imagem.", "AVATAR");
            this.value = "";
            return;
        }

        // Blindagem: evita imagens gigantes (base64 explode no localStorage)
        const MAX_BYTES = 1_500_000; // ~1.5MB
        if (file.size > MAX_BYTES) {
            openToast("Imagem muito grande. Escolha uma menor (até ~1,5MB).", "AVATAR");
            this.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            const base64Image = e.target.result;
            avatarImg.src = base64Image;
            agentData.avatar = base64Image;
            saveData();
            openToast("Avatar atualizado com sucesso ✅", "AVATAR");
        };
        reader.readAsDataURL(file);
    });
}

function startSystem() {
  const nameInput = document.getElementById('agentNameInput').value.trim();
  if (!nameInput) {
    openToast('Digite seu codinome para iniciar o protocolo.', 'ACESSO RESTRITO');
    return;
  }

  agentData.name = nameInput;
  saveData();
  showSection('dashboardSection');

  // ✅ POPUP AO INICIAR
  openToast(
    `<strong>BEM-VINDO, AGENTE ${nameInput.toUpperCase()}.</strong><br><br>` +
    `Protocolo inicializado ✅<br>` +
    `Dica: clique em <strong>📂 ARQUIVO SECRETO</strong> para ver as regras.`,
    "PROTOCOLO"
  );
}

// 2. Renderização da Interface
function renderSidebar() {
    document.getElementById('displayAgentName').innerText = "AGENTE " + ((agentData.name || '').toUpperCase());
    document.getElementById('agentLevel').innerText = agentData.level;
    document.getElementById('currentXP').innerText = agentData.xp;
    document.getElementById('maxXP').innerText = TOTAL_MAX_XP; // Total de XP para a barra
    
    // Barra de XP
    let xpPercent = (agentData.xp / TOTAL_MAX_XP) * 100;
    if(xpPercent > 100) xpPercent = 100;
    document.getElementById('xpProgressBar').style.width = `${xpPercent}%`;
    
    // Stats do Header
    const completed = agentData.missions.filter(m => m.completed).length;
    const total = agentData.missions.length;
    document.getElementById('missionsCompleted').innerText = completed;
    document.getElementById('totalMissions').innerText = total;
    
    // Recompensa: R$10 por missão concluída (a lógica do bônus de R$40 deve ser controlada externamente)
    document.getElementById('totalReward').innerText = (completed * 10).toFixed(2).replace('.', ',');
    
    document.getElementById('progressText').innerText = Math.round((completed/total)*100) + "%";
}

function renderMissions() {
    const container = document.getElementById('missionsList');
    container.innerHTML = '';

    // Agrupar missões por fases (1 a 4)
    const phaseTitles = [
        "SEMANA 01: IA DESVENDADA",
        "SEMANA 02: ARQUITETO DE JOGOS",
        "SEMANA 03: TREINANDO A MÁQUINA",
        "SEMANA 04: ARQUITETO DO FUTURO"
    ];

    for (let p = 1; p <= 4; p++) {
        // Verificar se fase está bloqueada
        // Regra: Fase atual está bloqueada se a fase anterior não estiver 100% completa
        let locked = false;
        if (p > 1) {
            const prevPhaseMissions = agentData.missions.filter(m => m.phase === p - 1);
            const isPrevComplete = prevPhaseMissions.every(m => m.completed);
            if (!isPrevComplete) locked = true;
        }

        const phaseMissions = agentData.missions.filter(m => m.phase === p);
        if (phaseMissions.length === 0) continue;

        // Criar elemento HTML da Fase
        const phaseGroup = document.createElement('div');
        phaseGroup.className = 'phase-group';

        const statusClass = locked ? 'locked' : 'unlocked';
        const statusText = locked ? 'ACESSO NEGADO 🔒' : 'ACESSO LIBERADO 🔓';
        
        // Header da Fase
        phaseGroup.innerHTML = `
            <div class="phase-header">
                <h3>${phaseTitles[p-1]}</h3>
                <span class="phase-status ${statusClass}">${statusText}</span>
            </div>
        `;

        // Lista de Missões dessa Fase
        phaseMissions.forEach(mission => {
            const item = document.createElement('div');
            item.className = `mission-item ${locked ? 'locked' : ''} ${mission.completed ? 'completed' : ''}`;
            item.onclick = () => { if(!locked) openMissionModal(mission.id); };
            
            const icon = mission.completed ? '✅' : '⬜';
            const xpTag = mission.xp > 150 ? `<span class="xp-tag-project">${mission.xp} XP</span>` : `<span class="xp-tag">${mission.xp} XP</span>`;
            
            item.innerHTML = `
                <div class="mission-left">
                    <span class="mission-icon">${icon}</span>
                    <span class="mission-title">${mission.title}</span>
                </div>
                <div class="mission-action">
                    ${xpTag}
                    ${locked ? '' : '<button class="cyber-btn small">ABRIR</button>'}
                </div>
            `;
            phaseGroup.appendChild(item);
        });

        container.appendChild(phaseGroup);
    }
}

// 3. Sistema de Modal e Conclusão
let currentMissionId = null;

function openMissionModal(id) {
    const mission = agentData.missions.find(m => m.id === id);
    if (!mission) return;

    currentMissionId = id;
    document.getElementById('modalTitle').innerText = mission.title;
    document.getElementById('modalDescription').innerHTML = mission.desc;
    
    const btn = document.getElementById('btnComplete');
    if (mission.completed) {
        btn.innerText = "JÁ EXECUTADO";
        btn.disabled = true;
        btn.style.opacity = "0.5";
    } else {
        btn.innerText = `CONFIRMAR EXECUÇÃO (Ganho: ${mission.xp} XP) ✅`;
        btn.disabled = false;
        btn.style.opacity = "1";
    }

    document.getElementById('missionModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('missionModal').style.display = 'none';
}

function completeMission() {
    const mission = agentData.missions.find(m => m.id === currentMissionId);
    if (mission && !mission.completed) {
        mission.completed = true;
        
        // Adiciona o XP da missão
        agentData.xp += mission.xp;
        
        // Se for a missão de Apresentação Final (id 12), adiciona o bônus de XP de 500.
        if (mission.id === 12) {
            agentData.xp += 500;
        }

        // Level Up (simplesmente atinge um novo patamar)
        if (agentData.xp >= 1000 && agentData.level < 2) agentData.level = 2;
        if (agentData.xp >= 2000 && agentData.level < 3) agentData.level = 3;
        if (agentData.xp >= 3000 && agentData.level < 4) agentData.level = 4;

        saveData();
        renderSidebar();
        renderMissions();
        closeModal();
        
        
        renderAgendaBox();

        // Checagem: semana concluída?
        const phaseMissions = agentData.missions.filter(mm => mm.phase === mission.phase);
        const phaseCompleteNow = phaseMissions.every(mm => mm.completed);
        if (phaseCompleteNow) {
            openToast(`<strong>SEMANA ${mission.phase} CONCLUÍDA!</strong><br>Próxima semana liberada ✅`, "PROGRESSO");
        }

        // Efeito sonoro mental de "Mission Complete"
        openToast(`<strong>MISSÃO CUMPRIDA!</strong><br>+${mission.xp} XP e <strong>R$ 10,00</strong> adicionados.${mission.id === 12 ? "<br><br><strong>BÔNUS FINAL:</strong> +500 XP aplicado ✅" : ""}`, "PROTOCOLO");
}
}

// 4. Navegação e Reset
function showSection(sectionId) {
    // Esconde todas
    document.querySelectorAll('.panel').forEach(el => {
        el.classList.remove('active-section');
        el.classList.add('hidden-section');
    });
    // Mostra a pedida
    const target = document.getElementById(sectionId);
    target.classList.remove('hidden-section');
    target.classList.add('active-section');

    // Atualiza botões do menu
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.nav-btn[onclick*="${sectionId}"]`).classList.add('active');

    // ✅ BLINDAGEM: sempre que abrir o dashboard, re-renderiza tudo
    if (sectionId === "dashboardSection") {
        renderSidebar();
        renderMissions();
        renderAgendaBox();
    }
}

// Inicializar (garante que o DOM existe antes de renderizar)
document.addEventListener('DOMContentLoaded', init);
// ===============================
// MODAL DE AVISO (substitui alert)
// ===============================
function openToast(messageHtml, title = "SISTEMA") {
  const titleEl = document.getElementById("toastTitle");
  const msgEl = document.getElementById("toastMessage");
  const modal = document.getElementById("toastModal");
  if (!titleEl || !msgEl || !modal) {
    // fallback de segurança (não deveria acontecer)
    console.log(title + ": " + messageHtml);
    return;
  }
  titleEl.innerText = title;
  msgEl.innerHTML = messageHtml;
  modal.style.display = "flex";
}

function closeToast() {
  const modal = document.getElementById("toastModal");
  if (modal) modal.style.display = "none";
}

// ===============================
// RESET DO SISTEMA (GARANTIDO)
// ===============================
function resetProtocol() {
  if (typeof openConfirm !== "function") {
    // fallback extremo (só se algo estiver muito errado)
    localStorage.removeItem("agentMiguelPlan_Final");
    location.reload();
    return;
  }

  openConfirm(
    "<strong>TEM CERTEZA, AGENTE?</strong><br><br>" +
    "Isso apagará todo o seu progresso.<br>" +
    "<strong>Ação irreversível.</strong>",
    () => {
      localStorage.removeItem("agentMiguelPlan_Final");
      location.reload();
    }
  );
}
// ===============================
// MODAL DE CONFIRMAÇÃO (openConfirm) - NECESSÁRIO PRO RESET
// ===============================
let confirmCallback = null;

function openConfirm(messageHtml, onConfirm) {
  confirmCallback = onConfirm;
  const msg = document.getElementById("confirmMessage");
  const modal = document.getElementById("confirmModal");

  if (!msg || !modal) {
    // fallback seguro (não usa popup do navegador)
    localStorage.removeItem("agentMiguelPlan_Final");
    location.reload();
    return;
  }

  msg.innerHTML = messageHtml;
  modal.style.display = "flex";
}

function closeConfirm() {
  const modal = document.getElementById("confirmModal");
  if (modal) modal.style.display = "none";
  confirmCallback = null;
}

function confirmYes() {
  if (typeof confirmCallback === "function") confirmCallback();
  closeConfirm();
}
