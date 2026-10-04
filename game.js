/**
 * Backgammon - Games Clubhouse Implementation
 * Strict Master Prompt Compliance with 8 Languages Support
 */

const I18N = {
  en: {
    portalLink: "‹ Back to Clubhouse",
    subtitle: "THE HERITAGE BOARD GAME",
    mode: "Game Mode",
    modeCpu: "vs CPU",
    modeLocal: "2 Players",
    difficulty: "Difficulty",
    diffEasy: "Easy",
    diffNormal: "Normal",
    diffHard: "Hard",
    resume: "Resume Game",
    start: "Start Game",
    howToPlay: "Rules",
    records: "Stats",
    settings: "Settings",
    backToTitle: "Title",
    toTitle: "Title",
    cpuThinking: "CPU Thinking",
    noMovesPass: "No legal moves! Passing turn...",
    roll: "Roll",
    initiativeTitle: "First Move Roll",
    initiativeDesc: "Both players roll one standard die. The higher roll moves first using both values. (Ties will be re-rolled).",
    youWhite: "White (You)",
    oppCpu: "Black (CPU)",
    oppPlayer: "Black (Player 2)",
    rollDice: "Roll Dice",
    startGame: "Start Game",
    playAgain: "Play Again",
    shareResult: "Share on X",
    whiteFirst: "White wins the roll and plays first!",
    blackFirst: "Black wins the roll and plays first!",
    tieRoll: "Tie! Re-rolling dice...",
    rule1Title: "1. Objective & Path",
    rule1Desc: "White moves counter-clockwise in a U-shape towards Point 1. Bring all 15 checkers into your Home Board and bear them off before your opponent does.",
    rule2Title: "2. Hit & The Bar",
    rule2Desc: "Landing on an isolated single checker (blot) hits it! It is sent to the central Bar and must re-enter from the furthest quadrant.",
    rule3Title: "3. Making Points (Block)",
    rule3Desc: "Stacking 2 or more of your checkers secures that point. Opponents cannot land there and must leap over it.",
    rule4Title: "4. Doubles (4 Moves!)",
    rule4Desc: "Rolling matching dice gives you 4 moves of that value instead of 2! A huge chance to make a comeback.",
    lang: "Language",
    sound: "Sound Effects",
    vibration: "Vibration",
    resetData: "Reset All Data",
    resetBtn: "Reset",
    close: "Close",
    cancel: "Cancel",
    confirm: "OK",
    totalGames: "Total Matches:",
    whiteWins: "White Victories:",
    blackWins: "Black Victories:",
    statGammons: "Gammons:",
    statBackgammons: "Backgammons:",
    confirmLeaveTitle: "Return to Title?",
    confirmLeaveDesc: "Your match progress will be saved automatically.",
    confirmOverwriteTitle: "Start New Game?",
    confirmOverwriteDesc: "Previous saved game will be overwritten and a new match will start.",
    confirmResetTitle: "Reset Data?",
    confirmResetDesc: "Are you sure you want to reset all game data and stats? This cannot be undone.",
    whiteTurnText: "White's Turn",
    blackTurnText: "Black's Turn",
    winnerWhite: "White Wins!",
    winnerBlack: "Black Wins!",
    winDescWhite: "White has borne off all 15 checkers first!",
    winDescBlack: "Black has borne off all 15 checkers first!",
    singleWin: "Single Win (+1)",
    gammonWin: "Gammon Victory (+2)",
    backgammonWin: "Backgammon Victory (+3)"
  },
  ja: {
    portalLink: "‹ CLUB HOUSEに戻る",
    subtitle: "伝統と歴史の王道ボードゲーム",
    mode: "対戦モード",
    modeCpu: "vs CPU",
    modeLocal: "ふたりで遊ぶ",
    difficulty: "CPU難易度",
    diffEasy: "初級",
    diffNormal: "中級",
    diffHard: "上級",
    resume: "つづきから",
    start: "ゲームスタート",
    howToPlay: "あそびかた",
    records: "戦績・やりこみ",
    settings: "設定",
    backToTitle: "タイトルへ",
    toTitle: "タイトルへ",
    cpuThinking: "CPU考え中",
    noMovesPass: "置ける手がありません。パスします",
    roll: "振る",
    initiativeTitle: "先攻・後攻の決定",
    initiativeDesc: "白と黒のサイコロを1個ずつ振ります。出目の大きい方が先攻となり、その2つの出目で初手を動かします。（同点は振り直し）",
    youWhite: "白（あなた）",
    oppCpu: "黒（CPU）",
    oppPlayer: "黒（プレイヤー2）",
    rollDice: "サイコロを振る",
    startGame: "対局開始",
    playAgain: "もう一度遊ぶ",
    shareResult: "Xで結果をポスト",
    whiteFirst: "白の先攻です！この出目で開始します。",
    blackFirst: "黒の先攻です！この出目で開始します。",
    tieRoll: "同点です！もう一度振ります。",
    rule1Title: "1. 目的と進み方",
    rule1Desc: "白は右上（24番）から反時計回りにU字に進み、右下のインナーボードへ全15個の駒を集めて盤外へベアオフ（ゴール）させます。",
    rule2Title: "2. ヒットとバー送り",
    rule2Desc: "相手の駒が1枚だけの場所（ブロット）に乗ると「ヒット」！相手の駒を中央のバーへ叩き出し、振り出しに戻せます。",
    rule3Title: "3. ポイントメイク（ブロック）",
    rule3Desc: "自分の駒を2枚以上重ねると「安全地帯」になります。相手はここに着地できず、通過するしかありません。",
    rule4Title: "4. ゾロ目（ダブルス）の大逆転",
    rule4Desc: "2つのサイコロが同じ目になると、通常の2回ではなく「同じ出目を4回」進められます！一気に大差をつけられます。",
    lang: "言語",
    sound: "効果音",
    vibration: "振動",
    resetData: "全データ初期化",
    resetBtn: "初期化",
    close: "とじる",
    cancel: "キャンセル",
    confirm: "OK",
    totalGames: "総対局数:",
    whiteWins: "白の勝利数:",
    blackWins: "黒の勝利数:",
    statGammons: "ギャモン勝ち:",
    statBackgammons: "バックギャモン勝ち:",
    confirmLeaveTitle: "タイトルへ戻りますか？",
    confirmLeaveDesc: "進行状況は自動保存されます。",
    confirmOverwriteTitle: "新しく始めますか？",
    confirmOverwriteDesc: "前回のプレイデータは上書きされ、最初からスタートします。",
    confirmResetTitle: "データ初期化",
    confirmResetDesc: "ハイスコアや戦績を完全に初期化しますか？この操作は取り消せません。",
    whiteTurnText: "白の手番",
    blackTurnText: "黒の手番",
    winnerWhite: "白の勝利！",
    winnerBlack: "黒の勝利！",
    winDescWhite: "白がすべての駒をベアオフしました！",
    winDescBlack: "黒がすべての駒をベアオフしました！",
    singleWin: "シングル勝ち (+1)",
    gammonWin: "ギャモン勝ち！ (+2)",
    backgammonWin: "バックギャモン大勝利！ (+3)"
  },
  "zh-CN": {
    portalLink: "‹ 返回 CLUB HOUSE",
    subtitle: "历史悠久的经典棋盘游戏",
    mode: "对战模式",
    modeCpu: "人机对战",
    modeLocal: "双人同屏",
    difficulty: "电脑难度",
    diffEasy: "初级",
    diffNormal: "中级",
    diffHard: "高级",
    resume: "继续游戏",
    start: "开始游戏",
    howToPlay: "游戏规则",
    records: "战绩记录",
    settings: "设置",
    backToTitle: "返回标题",
    toTitle: "返回标题",
    cpuThinking: "电脑思考中",
    noMovesPass: "无可移动棋子，跳过回合...",
    roll: "掷骰子",
    initiativeTitle: "先攻决定",
    initiativeDesc: "双方各掷一枚骰子，点数大者执白先行，并使用这两个点数进行第一步。（点数相同时重新掷）",
    youWhite: "白方（您）",
    oppCpu: "黑方（电脑）",
    oppPlayer: "黑方（玩家2）",
    rollDice: "掷骰子",
    startGame: "开始对局",
    playAgain: "再玩一局",
    shareResult: "在 X 上分享",
    whiteFirst: "白方点数大，白方先攻！",
    blackFirst: "黑方点数大，黑方先攻！",
    tieRoll: "平手！重新掷骰子...",
    rule1Title: "1. 目标与行棋",
    rule1Desc: "白方沿U形逆时针行棋，将全部15枚棋子移入内盘后，将棋子逐一移出棋盘（出盘）。",
    rule2Title: "2. 击子与入局",
    rule2Desc: "停留在对方只有一枚棋子的点（孤子）上即可击子！被击中的棋子送上中央横栏，必须从最远端重新入局。",
    rule3Title: "3. 占点（封锁）",
    rule3Desc: "同一点上有两枚以上己方棋子即可形成堡垒。对方不可在此着陆，只能越过。",
    rule4Title: "4. 双骰（连走4步！）",
    rule4Desc: "若两枚骰子点数相同，可将该点数移动4次！是逆转局势的绝佳机会。",
    lang: "语言",
    sound: "音效",
    vibration: "震动",
    resetData: "重置所有数据",
    resetBtn: "重置",
    close: "关闭",
    cancel: "取消",
    confirm: "确定",
    totalGames: "总局数:",
    whiteWins: "白方胜场:",
    blackWins: "黑方胜场:",
    statGammons: "全胜(Gammon):",
    statBackgammons: "大胜(Backgammon):",
    confirmLeaveTitle: "返回标题画面？",
    confirmLeaveDesc: "当前进度将自动保存。",
    confirmOverwriteTitle: "开始新游戏？",
    confirmOverwriteDesc: "先前的对局存档将被覆盖并重新开始。",
    confirmResetTitle: "重置数据？",
    confirmResetDesc: "确定要重置所有战绩与设定吗？此操作无法撤销。",
    whiteTurnText: "白方回合",
    blackTurnText: "黑方回合",
    winnerWhite: "白方获胜！",
    winnerBlack: "黑方获胜！",
    winDescWhite: "白方已成功将所有棋子出盘！",
    winDescBlack: "黑方已成功将所有棋子出盘！",
    singleWin: "单胜 (+1)",
    gammonWin: "全胜 Gammon (+2)",
    backgammonWin: "大胜 Backgammon (+3)"
  },
  "zh-TW": {
    portalLink: "‹ 返回 CLUB HOUSE",
    subtitle: "歷史悠久的經典棋盤遊戲",
    mode: "對戰模式",
    modeCpu: "電腦對戰",
    modeLocal: "雙人對弈",
    difficulty: "電腦難度",
    diffEasy: "初級",
    diffNormal: "中級",
    diffHard: "高級",
    resume: "繼續遊戲",
    start: "開始遊戲",
    howToPlay: "遊戲規則",
    records: "戰績記錄",
    settings: "設定",
    backToTitle: "返回標題",
    toTitle: "返回標題",
    cpuThinking: "電腦思考中",
    noMovesPass: "無子可走，略過回合...",
    roll: "擲骰子",
    initiativeTitle: "先後手決定",
    initiativeDesc: "雙方各擲一枚骰子，點數大者執白先行，並使用該兩枚骰子進行初手。（點數相同則重擲）",
    youWhite: "白方（您）",
    oppCpu: "黑方（電腦）",
    oppPlayer: "黑方（玩家2）",
    rollDice: "擲骰子",
    startGame: "開始對局",
    playAgain: "再玩一局",
    shareResult: "在 X 上分享",
    whiteFirst: "白方點數大，白方先攻！",
    blackFirst: "黑方點數大，黑方先攻！",
    tieRoll: "平手！重新擲骰子...",
    rule1Title: "1. 目標與路線",
    rule1Desc: "白方沿U形逆時針推進，將全數15枚棋子帶入內盤後，逐一移出棋盤以取得勝利。",
    rule2Title: "2. 擊子與上欄",
    rule2Desc: "停留在對方只有一枚孤子的點即可擊子！被擊中棋子移至中央欄線，須重新自最遠端進場。",
    rule3Title: "3. 佔點防禦",
    rule3Desc: "在同一點疊加兩枚以上棋子即成安全區。對手無法著陸，僅能跳過。",
    rule4Title: "4. 同點雙骰（4倍步數！）",
    rule4Desc: "擲出兩枚相同點數時，可走該點數4次！是扭轉局勢的大好機會。",
    lang: "語言",
    sound: "音效",
    vibration: "震動",
    resetData: "重置所有資料",
    resetBtn: "重置",
    close: "關閉",
    cancel: "取消",
    confirm: "確定",
    totalGames: "總局數:",
    whiteWins: "白方勝場:",
    blackWins: "黑方勝場:",
    statGammons: "全勝(Gammon):",
    statBackgammons: "大勝(Backgammon):",
    confirmLeaveTitle: "返回標題畫面？",
    confirmLeaveDesc: "進行進度將會自動儲存。",
    confirmOverwriteTitle: "開始新對局？",
    confirmOverwriteDesc: "先前的對局進度將被覆蓋並重新開始。",
    confirmResetTitle: "資料重置？",
    confirmResetDesc: "確定要清除所有戰績與紀錄嗎？此動作無法復原。",
    whiteTurnText: "白方回合",
    blackTurnText: "黑方回合",
    winnerWhite: "白方獲勝！",
    winnerBlack: "黑方獲勝！",
    winDescWhite: "白方已將所有棋子移出棋盤！",
    winDescBlack: "黑方已將所有棋子移出棋盤！",
    singleWin: "單勝 (+1)",
    gammonWin: "全勝 Gammon (+2)",
    backgammonWin: "大勝 Backgammon (+3)"
  },
  ko: {
    portalLink: "‹ CLUB HOUSE로 돌아가기",
    subtitle: "전통과 역사의 클래식 보드게임",
    mode: "대전 모드",
    modeCpu: "vs CPU",
    modeLocal: "2인 플레이",
    difficulty: "난이도",
    diffEasy: "초급",
    diffNormal: "중급",
    diffHard: "상급",
    resume: "이어하기",
    start: "게임 시작",
    howToPlay: "게임 방법",
    records: "기록 및 전적",
    settings: "설정",
    backToTitle: "타이틀로",
    toTitle: "타이틀로",
    cpuThinking: "CPU 생각 중",
    noMovesPass: "둘 수 있는 말이 없습니다. 턴을 넘깁니다...",
    roll: "굴리기",
    initiativeTitle: "선공 결정",
    initiativeDesc: "양 플레이어가 주사위를 하나씩 굴려 높은 쪽이 백으로 선공하며, 두 주사위 눈으로 첫 수를 둡니다. (동점 시 재추첨)",
    youWhite: "백 (나)",
    oppCpu: "흑 (CPU)",
    oppPlayer: "흑 (플레이어 2)",
    rollDice: "주사위 굴리기",
    startGame: "게임 시작",
    playAgain: "다시 하기",
    shareResult: "X에 공유하기",
    whiteFirst: "백이 이겼습니다! 백의 선공입니다.",
    blackFirst: "흑이 이겼습니다! 흑의 선공입니다.",
    tieRoll: "동점입니다! 다시 굴립니다...",
    rule1Title: "1. 목표와 이동 방향",
    rule1Desc: "백은 반시계 방향 U자 모양으로 전진하여 15개의 말을 모두 홈 보드로 모은 뒤 베어오프(골인)시킵니다.",
    rule2Title: "2. 히트와 바(Bar) 퇴장",
    rule2Desc: "말이 1개만 있는 곳(블롯)에 착지하면 히트! 상대 말을 중앙 바(Bar)로 쳐내어 처음부터 다시 출발시킵니다.",
    rule3Title: "3. 포인트 만들기 (블록)",
    rule3Desc: "자신의 말을 2개 이상 쌓으면 안전지대가 됩니다. 상대는 착지할 수 없으며 지나쳐야 합니다.",
    rule4Title: "4. 더블 (4회 이동!)",
    rule4Desc: "두 주사위 눈이 같으면 2회가 아닌 해당 숫자를 4회 이동할 수 있습니다! 단숨에 역전할 수 있는 기회입니다.",
    lang: "언어",
    sound: "효과음",
    vibration: "진동",
    resetData: "모든 데이터 초기화",
    resetBtn: "초기화",
    close: "닫기",
    cancel: "취소",
    confirm: "확인",
    totalGames: "총 게임 수:",
    whiteWins: "백 승리:",
    blackWins: "흑 승리:",
    statGammons: "개먼 승리:",
    statBackgammons: "백개먼 승리:",
    confirmLeaveTitle: "타이틀로 돌아가시겠습니까?",
    confirmLeaveDesc: "현재 게임 진행 상황은 자동 저장됩니다.",
    confirmOverwriteTitle: "새 게임을 시작하시겠습니까?",
    confirmOverwriteDesc: "이전 저장 데이터가 덮어씌워지고 새 게임이 시작됩니다.",
    confirmResetTitle: "데이터 초기화",
    confirmResetDesc: "모든 통계와 설정을 초기화하시겠습니까? 이 작업은 취소할 수 없습니다.",
    whiteTurnText: "백의 차례",
    blackTurnText: "흑의 차례",
    winnerWhite: "백의 승리!",
    winnerBlack: "흑의 승리!",
    winDescWhite: "백이 모든 말을 먼저 베어오프했습니다!",
    winDescBlack: "흑이 모든 말을 먼저 베어오프했습니다!",
    singleWin: "싱글 승리 (+1)",
    gammonWin: "개먼 승리! (+2)",
    backgammonWin: "백개먼 대승! (+3)"
  },
  es: {
    portalLink: "‹ Volver a Clubhouse",
    subtitle: "EL JUEGO DE MESA TRADICIONAL",
    mode: "Modo de Juego",
    modeCpu: "vs CPU",
    modeLocal: "2 Jugadores",
    difficulty: "Dificultad",
    diffEasy: "Fácil",
    diffNormal: "Normal",
    diffHard: "Difícil",
    resume: "Continuar",
    start: "Iniciar Juego",
    howToPlay: "Reglas",
    records: "Estadísticas",
    settings: "Ajustes",
    backToTitle: "Título",
    toTitle: "Título",
    cpuThinking: "CPU pensando",
    noMovesPass: "¡Sin movimientos válidos! Pasando turno...",
    roll: "Tirar",
    initiativeTitle: "Tirada Inicial",
    initiativeDesc: "Ambos jugadores tiran un dado. La tirada más alta mueve primero usando ambos valores. (Empates se repiten).",
    youWhite: "Blancas (Tú)",
    oppCpu: "Negras (CPU)",
    oppPlayer: "Negras (Jugador 2)",
    rollDice: "Tirar Dados",
    startGame: "Comenzar",
    playAgain: "Jugar de Nuevo",
    shareResult: "Compartir en X",
    whiteFirst: "¡Blancas ganan y mueven primero!",
    blackFirst: "¡Negras ganan y mueven primero!",
    tieRoll: "¡Empate! Tirando de nuevo...",
    rule1Title: "1. Objetivo y Recorrido",
    rule1Desc: "Las blancas se mueven en sentido antihorario en forma de U hacia el punto 1. Lleva tus 15 fichas a tu tablero interno y sácalas antes que tu oponente.",
    rule2Title: "2. Captura y la Barra",
    rule2Desc: "¡Aterrizar en una ficha solitaria la captura! Se envía a la barra central y debe volver a entrar desde el cuadrante más lejano.",
    rule3Title: "3. Puntos Seguros (Bloqueo)",
    rule3Desc: "Apilar 2 o más fichas asegura ese punto. El oponente no puede aterrizar allí y debe saltarlo.",
    rule4Title: "4. Dobles (¡4 Movimientos!)",
    rule4Desc: "¡Sacar dados iguales te da 4 movimientos de ese valor en lugar de 2! Una gran oportunidad de remontada.",
    lang: "Idioma",
    sound: "Efectos de Sonido",
    vibration: "Vibración",
    resetData: "Restablecer Datos",
    resetBtn: "Borrar",
    close: "Cerrar",
    cancel: "Cancelar",
    confirm: "Aceptar",
    totalGames: "Partidas Totales:",
    whiteWins: "Victorias Blancas:",
    blackWins: "Victorias Negras:",
    statGammons: "Gammons:",
    statBackgammons: "Backgammons:",
    confirmLeaveTitle: "¿Volver al Título?",
    confirmLeaveDesc: "El progreso se guardará automáticamente.",
    confirmOverwriteTitle: "¿Nueva Partida?",
    confirmOverwriteDesc: "La partida anterior se sobrescribirá.",
    confirmResetTitle: "¿Restablecer Datos?",
    confirmResetDesc: "¿Estás seguro de que deseas restablecer todos los registros?",
    whiteTurnText: "Turno de Blancas",
    blackTurnText: "Turno de Negras",
    winnerWhite: "¡Ganan las Blancas!",
    winnerBlack: "¡Ganan las Negras!",
    winDescWhite: "¡Las blancas han sacado todas sus fichas primero!",
    winDescBlack: "¡Las negras han sacado todas sus fichas primero!",
    singleWin: "Victoria Simple (+1)",
    gammonWin: "¡Victoria Gammon! (+2)",
    backgammonWin: "¡Victoria Backgammon! (+3)"
  },
  fr: {
    portalLink: "‹ Retour au Clubhouse",
    subtitle: "LE JEU DE PLATEAU TRADITIONNEL",
    mode: "Mode de Jeu",
    modeCpu: "vs CPU",
    modeLocal: "2 Joueurs",
    difficulty: "Difficulté",
    diffEasy: "Facile",
    diffNormal: "Moyen",
    diffHard: "Difficile",
    resume: "Reprendre",
    start: "Commencer",
    howToPlay: "Règles",
    records: "Statistiques",
    settings: "Paramètres",
    backToTitle: "Titre",
    toTitle: "Titre",
    cpuThinking: "Le CPU réfléchit",
    noMovesPass: "Aucun coup possible ! Tour passé...",
    roll: "Lancer",
    initiativeTitle: "Premier Coup",
    initiativeDesc: "Chaque joueur lance un dé. Le plus élevé commence en utilisant les deux valeurs. (Rejouer en cas d'égalité).",
    youWhite: "Blancs (Vous)",
    oppCpu: "Noirs (CPU)",
    oppPlayer: "Noirs (Joueur 2)",
    rollDice: "Lancer les Dés",
    startGame: "Commencer",
    playAgain: "Rejouer",
    shareResult: "Partager sur X",
    whiteFirst: "Les Blancs gagnent et commencent !",
    blackFirst: "Les Noirs gagnent et commencent !",
    tieRoll: "Égalité ! Nouveau tirage...",
    rule1Title: "1. Objectif & Parcours",
    rule1Desc: "Les blancs avancent dans le sens inverse des aiguilles d'une montre en U vers le point 1. Amenez vos 15 pions dans votre jan intérieur et sortez-les.",
    rule2Title: "2. Frapper & La Barre",
    rule2Desc: "Atterrir sur un pion isolé le frappe ! Il est envoyé sur la barre centrale et doit rentrer par le cadran le plus éloigné.",
    rule3Title: "3. Bloquer un Point",
    rule3Desc: "Empiler 2 pions ou plus sécurise la flèche. L'adversaire ne peut pas s'y arrêter et doit sauter par-dessus.",
    rule4Title: "4. Doubles (4 Coups !)",
    rule4Desc: "Obtenir un double vous donne 4 mouvements au lieu de 2 ! Une opportunité idéale pour reprendre l'avantage.",
    lang: "Langue",
    sound: "Effets Sonores",
    vibration: "Vibration",
    resetData: "Réinitialiser Tout",
    resetBtn: "Effacer",
    close: "Fermer",
    cancel: "Annuler",
    confirm: "OK",
    totalGames: "Parties Jouées:",
    whiteWins: "Victoires Blancs:",
    blackWins: "Victoires Noirs:",
    statGammons: "Gammons:",
    statBackgammons: "Backgammons:",
    confirmLeaveTitle: "Retourner au Titre ?",
    confirmLeaveDesc: "La partie en cours sera sauvegardée.",
    confirmOverwriteTitle: "Nouvelle Partie ?",
    confirmOverwriteDesc: "La partie précédente sera écrasée.",
    confirmResetTitle: "Tout Réinitialiser ?",
    confirmResetDesc: "Voulez-vous vraiment effacer toutes les données ?",
    whiteTurnText: "Tour des Blancs",
    blackTurnText: "Tour des Noirs",
    winnerWhite: "Les Blancs Gagnent !",
    winnerBlack: "Les Noirs Gagnent !",
    winDescWhite: "Les Blancs ont sorti tous leurs pions !",
    winDescBlack: "Les Noirs ont sorti tous leurs pions !",
    singleWin: "Victoire Simple (+1)",
    gammonWin: "Victoire Gammon ! (+2)",
    backgammonWin: "Victoire Backgammon ! (+3)"
  },
  pt: {
    portalLink: "‹ Voltar ao Clubhouse",
    subtitle: "O CLÁSSICO JOGO DE TABULEIRO",
    mode: "Modo de Jogo",
    modeCpu: "vs CPU",
    modeLocal: "2 Jogadores",
    difficulty: "Dificuldade",
    diffEasy: "Fácil",
    diffNormal: "Normal",
    diffHard: "Difícil",
    resume: "Continuar",
    start: "Iniciar Jogo",
    howToPlay: "Regras",
    records: "Estatísticas",
    settings: "Configurações",
    backToTitle: "Título",
    toTitle: "Título",
    cpuThinking: "CPU pensando",
    noMovesPass: "Sem movimentos válidos! Passando a vez...",
    roll: "Rolar",
    initiativeTitle: "Jogada Inicial",
    initiativeDesc: "Ambos os jogadores rolam um dado. O maior valor joga primeiro usando ambos os dados. (Empates são rerolados).",
    youWhite: "Brancas (Você)",
    oppCpu: "Pretas (CPU)",
    oppPlayer: "Pretas (Jogador 2)",
    rollDice: "Rolar Dados",
    startGame: "Começar",
    playAgain: "Jogar Novamente",
    shareResult: "Compartilhar no X",
    whiteFirst: "Brancas vencem e jogam primeiro!",
    blackFirst: "Pretas vencem e jogam primeiro!",
    tieRoll: "Empate! Rolando novamente...",
    rule1Title: "1. Objetivo e Caminho",
    rule1Desc: "As brancas movem-se no sentido anti-horário em forma de U em direção ao ponto 1. Leve todas as 15 peças para o seu quadrante interno e retire-as.",
    rule2Title: "2. Captura e a Barra",
    rule2Desc: "Atingir uma peça isolada a captura! Ela é enviada para a barra central e deve reentrar a partir do quadrante mais distante.",
    rule3Title: "3. Pontos Seguros (Bloqueio)",
    rule3Desc: "Empilhar 2 ou mais peças protege a casa. O oponente não pode parar nela e deve saltá-la.",
    rule4Title: "4. Duplas (4 Movimentos!)",
    rule4Desc: "Rolar dados iguais concede 4 movimentos desse valor em vez de 2! Uma grande chance de virada.",
    lang: "Idioma",
    sound: "Efeitos Sonoros",
    vibration: "Vibração",
    resetData: "Redefinir Dados",
    resetBtn: "Limpar",
    close: "Fechar",
    cancel: "Cancelar",
    confirm: "OK",
    totalGames: "Total de Partidas:",
    whiteWins: "Vitórias das Brancas:",
    blackWins: "Vitórias das Pretas:",
    statGammons: "Gammons:",
    statBackgammons: "Backgammons:",
    confirmLeaveTitle: "Voltar ao Título?",
    confirmLeaveDesc: "O progresso será salvo automaticamente.",
    confirmOverwriteTitle: "Novo Jogo?",
    confirmOverwriteDesc: "O jogo salvo anterior será substituído.",
    confirmResetTitle: "Redefinir Dados?",
    confirmResetDesc: "Tem certeza de que deseja apagar todas as estatísticas?",
    whiteTurnText: "Vez das Brancas",
    blackTurnText: "Vez das Pretas",
    winnerWhite: "Brancas Vencem!",
    winnerBlack: "Pretas Vencem!",
    winDescWhite: "As brancas retiraram todas as peças primeiro!",
    winDescBlack: "As pretas retiraram todas as peças primeiro!",
    singleWin: "Vitória Simples (+1)",
    gammonWin: "Vitória Gammon! (+2)",
    backgammonWin: "Grande Vitória Backgammon! (+3)"
  }
};

// --- Three.js リアル3Dダイス描画エンジン ---
class ThreeDiceRenderer {
  constructor(canvas, isBlackTheme = false, isBoardMode = false) {
    this.canvas = canvas;
    this.isBlackTheme = isBlackTheme;
    this.isBoardMode = isBoardMode;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    this.camera.position.set(0, 0, 7.8);
    this.camera.lookAt(0, 0, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 0.95);
    this.scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.45);
    dirLight.position.set(2, 6, 8);
    dirLight.castShadow = true;
    this.scene.add(dirLight);

    const floorGeo = new THREE.PlaneGeometry(15, 15);
    const floorMat = new THREE.ShadowMaterial({ opacity: 0.4 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.set(0, 0, -0.4);
    floor.receiveShadow = true;
    this.scene.add(floor);

    this.materialsWhite = this.buildMaterials(false);
    this.materialsBlack = this.buildMaterials(true);

    // 盤面内は小型サイズ(0.72)、モーダル内は標準サイズ(1.15)
    const diceSize = isBoardMode ? 0.72 : 1.15;
    const cornerRadius = isBoardMode ? 0.11 : 0.17;
    const geo = this.createRoundedDiceGeometry(diceSize, cornerRadius, 7);

    this.mesh1 = new THREE.Mesh(geo, this.materialsWhite);
    this.mesh2 = new THREE.Mesh(geo, isBlackTheme ? this.materialsBlack : this.materialsWhite);
    this.mesh1.castShadow = true;
    this.mesh2.castShadow = true;

    this.mesh1.visible = false;
    this.mesh2.visible = false;
    this.scene.add(this.mesh1);
    this.scene.add(this.mesh2);

    this.FaceRotations = {
      1: new THREE.Euler(0, 0, 0),
      2: new THREE.Euler(0, -Math.PI / 2, 0),
      3: new THREE.Euler(Math.PI / 2, 0, 0),
      4: new THREE.Euler(-Math.PI / 2, 0, 0),
      5: new THREE.Euler(0, Math.PI / 2, 0),
      6: new THREE.Euler(0, Math.PI, 0)
    };

    this.resize();
  }

  resize() {
    const w = this.canvas.clientWidth || 320;
    const h = this.canvas.clientHeight || 180;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  createRoundedDiceGeometry(size, radius, segments = 7) {
    const geo = new THREE.BoxGeometry(size, size, size, segments, segments, segments);
    const pos = geo.attributes.position;
    const half = size / 2;
    const innerHalf = half - radius;

    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);

      let cx = Math.max(-innerHalf, Math.min(innerHalf, x));
      let cy = Math.max(-innerHalf, Math.min(innerHalf, y));
      let cz = Math.max(-innerHalf, Math.min(innerHalf, z));

      let dx = x - cx;
      let dy = y - cy;
      let dz = z - cz;

      let len = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (len > 0) {
        pos.setXYZ(i, cx + (dx / len) * radius, cy + (dy / len) * radius, cz + (dz / len) * radius);
      }
    }
    geo.computeVertexNormals();
    return geo;
  }

  createFaceTexture(val, isBlack) {
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext('2d');

    ctx.fillStyle = isBlack ? '#1e2024' : '#f8f8fa';
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = isBlack ? '#383b42' : '#d2d5dc';
    ctx.lineWidth = 12;
    ctx.strokeRect(0, 0, 256, 256);

    const isOne = (val === 1);
    const pipRadius = isOne ? 44 : 23;
    let pipColor = isOne ? '#e02418' : (isBlack ? '#f0f2f5' : '#141517');

    const pips = {
      1: [[128, 128]],
      2: [[68, 68], [188, 188]],
      3: [[68, 68], [128, 128], [188, 188]],
      4: [[68, 68], [188, 68], [68, 188], [188, 188]],
      5: [[66, 66], [190, 66], [128, 128], [66, 190], [190, 190]],
      6: [[68, 62], [188, 62], [68, 128], [188, 128], [68, 194], [188, 194]]
    }[val];

    pips.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, pipRadius, 0, Math.PI * 2);
      ctx.fillStyle = pipColor;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x - pipRadius * 0.2, y - pipRadius * 0.2, pipRadius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = isOne ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.15)';
      ctx.fill();
    });

    return new THREE.CanvasTexture(c);
  }

  buildMaterials(isBlack) {
    return [
      new THREE.MeshLambertMaterial({ map: this.createFaceTexture(2, isBlack) }),
      new THREE.MeshLambertMaterial({ map: this.createFaceTexture(5, isBlack) }),
      new THREE.MeshLambertMaterial({ map: this.createFaceTexture(3, isBlack) }),
      new THREE.MeshLambertMaterial({ map: this.createFaceTexture(4, isBlack) }),
      new THREE.MeshLambertMaterial({ map: this.createFaceTexture(1, isBlack) }),
      new THREE.MeshLambertMaterial({ map: this.createFaceTexture(6, isBlack) })
    ];
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  roll(val1, val2, onComplete) {
    this.resize();

    // 盤面時は右半分（インナーボード領域：X=+0.65 と +1.45 付近）に着地
    const posX1 = this.isBoardMode ? 0.65 : -1.05;
    const posX2 = this.isBoardMode ? 1.48 : 1.05;

    this.mesh1.position.set(posX1, 4.8, 0);
    this.mesh2.position.set(posX2, 4.8, 0);
    this.mesh1.visible = true;
    this.mesh2.visible = true;
    this.render();

    let done1 = false, done2 = false;
    const check = () => {
      if (done1 && done2) {
        if (onComplete) onComplete();
      }
    };

    this.animateDrop(this.mesh1, posX1, val1, 0, () => { done1 = true; check(); });
    this.animateDrop(this.mesh2, posX2, val2, 40, () => { done2 = true; check(); });
  }

  animateDrop(mesh, targetX, targetValue, delay, onFinish) {
    const startY = 4.8;
    mesh.position.set(targetX, startY, 0);

    setTimeout(() => {
      const startTime = performance.now();
      const duration = 1000;

      const targetEuler = this.FaceRotations[targetValue];
      const settleTilt = (targetX < 0 ? -1 : 1) * 0.08;
      const targetQuat = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(targetEuler.x, targetEuler.y, targetEuler.z + settleTilt)
      );

      const extraTurnsX = Math.floor(Math.random() * 2) + 3;
      const extraTurnsY = Math.floor(Math.random() * 2) + 3;
      const totalAngleX = extraTurnsX * Math.PI * 2;
      const totalAngleY = extraTurnsY * Math.PI * 2;
      const driftX = (Math.random() - 0.5) * 0.2;

      let b1 = false, b2 = false;

      const frame = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        let y = 0;
        if (progress < 0.44) {
          const p = progress / 0.44;
          y = startY * (1 - p * p);
        } else if (progress < 0.74) {
          if (!b1) {
            audio.playDiceHit(0.8, targetX);
            b1 = true;
          }
          const p = (progress - 0.44) / 0.3;
          y = Math.sin(p * Math.PI) * 0.95;
        } else if (progress < 0.92) {
          if (!b2) {
            audio.playDiceHit(0.4, targetX);
            b2 = true;
          }
          const p = (progress - 0.74) / 0.18;
          y = Math.sin(p * Math.PI) * 0.24;
        } else {
          y = 0;
        }

        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const remain = 1 - easeProgress;

        const rotX = targetEuler.x + totalAngleX * remain;
        const rotY = targetEuler.y + totalAngleY * remain;
        const rotZ = (targetEuler.z + settleTilt) + Math.sin(progress * Math.PI) * 0.35;

        mesh.rotation.set(rotX, rotY, rotZ);
        mesh.position.set(targetX + driftX * remain, y, 0);

        this.render();

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          audio.playDiceHit(0.18, targetX);
          mesh.position.set(targetX, 0, 0);
          mesh.quaternion.copy(targetQuat);
          this.render();
          onFinish();
        }
      };

      requestAnimationFrame(frame);
    }, delay);
  }
}

class BackgammonGame {
  constructor() {
    this.settings = storage.getSettings();
    if (!this.settings.lang || !I18N[this.settings.lang]) {
      this.settings.lang = 'en';
      storage.saveSettings(this.settings);
    }

    this.stats = storage.getStats();
    
    this.mode = 'cpu';
    this.diff = 'easy';
    
    this.points = new Array(24).fill(0);
    this.bar = { white: 0, black: 0 };
    this.bearOff = { white: 0, black: 0 };
    
    this.turn = 'white';
    this.dice = [];
    this.availableMoves = [];
    this.selectedSource = null;
    
    this.isRolling = false;
    this.isCpuThinking = false;
    this.isTransitioning = false;
    this.lastWinResult = null;

    this.initDOM();
    this.bindEvents();
    this.applySettings();
    this.checkResume();
  }

  initDOM() {
    this.dom = {
      titleScreen: document.getElementById('title-screen'),
      gameView: document.getElementById('game-view'),
      startBtn: document.getElementById('start-btn'),
      resumeBtn: document.getElementById('resume-btn'),
      rulesBtn: document.getElementById('rules-btn'),
      statsBtn: document.getElementById('stats-btn'),
      titleSettingsMenuBtn: document.getElementById('title-settings-menu-btn'),
      modeSeg: document.getElementById('mode-seg'),
      diffSeg: document.getElementById('diff-seg'),
      difficultyRow: document.getElementById('difficulty-row'),
      headerBackBtn: document.getElementById('header-back-btn'),
      audioToggleBtn: document.getElementById('audio-toggle-btn'),
      rollActionBtn: document.getElementById('roll-action-btn'),
      diceDisplay: document.getElementById('dice-display'),
      turnText: document.getElementById('turn-text'),
      opponentNameLabel: document.getElementById('opponent-name-label'),
      myNameLabel: document.getElementById('my-name-label'),
      whitePip: document.getElementById('white-pip'),
      blackPip: document.getElementById('black-pip'),
      thinkingIndicator: document.getElementById('thinking-indicator'),
      
      inGameDiceLayer: document.getElementById('in-game-dice-layer'),
      inGameDiceCanvas: document.getElementById('in-game-dice-canvas'),

      quadOuterTop: document.getElementById('quad-outer-top'),
      quadOuterBottom: document.getElementById('quad-outer-bottom'),
      quadInnerTop: document.getElementById('quad-inner-top'),
      quadInnerBottom: document.getElementById('quad-inner-bottom'),
      barWhite: document.getElementById('bar-white'),
      barBlack: document.getElementById('bar-black'),
      bearoffWhite: document.getElementById('bearoff-white'),
      bearoffBlack: document.getElementById('bearoff-black'),
      
      initiativeModal: document.getElementById('initiative-modal'),
      initDiceCanvas: document.getElementById('initiative-dice-canvas'),
      initResultText: document.getElementById('init-result-text'),
      initActionBtn: document.getElementById('init-action-btn'),
      
      resultModal: document.getElementById('result-modal'),
      resultCrest: document.getElementById('result-crest'),
      resultTitle: document.getElementById('result-title'),
      resultBadge: document.getElementById('result-badge'),
      resultDesc: document.getElementById('result-desc'),
      resultShareBtn: document.getElementById('result-share-btn'),
      resultRestartBtn: document.getElementById('result-restart-btn'),
      resultTitleBtn: document.getElementById('result-title-btn'),

      rulesModal: document.getElementById('rules-modal'),
      rulesCloseBtn: document.getElementById('rules-close-btn'),
      settingsModal: document.getElementById('settings-modal'),
      settingsCloseBtn: document.getElementById('settings-close-btn'),
      statsModal: document.getElementById('stats-modal'),
      statsCloseBtn: document.getElementById('stats-close-btn'),
      confirmModal: document.getElementById('confirm-modal'),
      confirmTitle: document.getElementById('confirm-title'),
      confirmMsg: document.getElementById('confirm-msg'),
      confirmOkBtn: document.getElementById('confirm-ok-btn'),
      confirmCancelBtn: document.getElementById('confirm-cancel-btn')
    };

    this.renderBoardSkeleton();
  }

  getInit3D() {
    if (!this.init3DRenderer && this.dom.initDiceCanvas) {
      try {
        this.init3DRenderer = new ThreeDiceRenderer(this.dom.initDiceCanvas, true, false);
      } catch (e) {
        console.error(e);
      }
    }
    return this.init3DRenderer;
  }

  getGame3D() {
    if (!this.game3DRenderer && this.dom.inGameDiceCanvas) {
      try {
        // 盤面用：小型＆右盤面配置モード (isBoardMode = true)
        this.game3DRenderer = new ThreeDiceRenderer(this.dom.inGameDiceCanvas, false, true);
      } catch (e) {
        console.error(e);
      }
    }
    return this.game3DRenderer;
  }

  renderBoardSkeleton() {
    const createPt = (idx, isTop) => {
      const pt = document.createElement('div');
      pt.className = `point ${isTop ? 'point-top' : 'point-bottom'} ${idx % 2 === 0 ? 'pt-dark' : 'pt-light'}`;
      pt.dataset.point = idx;
      const stack = document.createElement('div');
      stack.className = 'checker-stack';
      pt.appendChild(stack);
      return pt;
    };

    for (let i = 12; i <= 17; i++) {
      this.dom.quadOuterTop.appendChild(createPt(i, true));
    }
    for (let i = 18; i <= 23; i++) {
      this.dom.quadInnerTop.appendChild(createPt(i, true));
    }
    for (let i = 11; i >= 6; i--) {
      this.dom.quadOuterBottom.appendChild(createPt(i, false));
    }
    for (let i = 5; i >= 0; i--) {
      this.dom.quadInnerBottom.appendChild(createPt(i, false));
    }
  }

  applySettings() {
    audio.enabled = this.settings.sound;
    this.dom.audioToggleBtn.textContent = this.settings.sound ? '🔊' : '🔇';
    
    const curDict = I18N[this.settings.lang] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (curDict[key]) {
        el.textContent = curDict[key];
      }
    });

    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.value = this.settings.lang;
    }

    const soundTgl = document.getElementById('sound-toggle');
    if (soundTgl) soundTgl.classList.toggle('on', this.settings.sound);

    const vibeTgl = document.getElementById('vibe-toggle');
    if (vibeTgl) vibeTgl.classList.toggle('on', this.settings.haptics);

    this.updateControls();
  }

  vibrate(ms = 30) {
    if (this.settings.haptics && navigator.vibrate) {
      try { navigator.vibrate(ms); } catch (_) {}
    }
  }

  bindEvents() {
    this.dom.modeSeg.querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.modeSeg.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.mode = btn.dataset.val;
        this.dom.difficultyRow.style.display = this.mode === 'cpu' ? 'flex' : 'none';
        this.vibrate(15);
      });
    });

    this.dom.diffSeg.querySelectorAll('.seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.dom.diffSeg.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.diff = btn.dataset.val;
        this.vibrate(15);
      });
    });

    this.dom.startBtn.addEventListener('click', () => {
      const saved = storage.getSaveState();
      const curLang = I18N[this.settings.lang] || I18N.en;
      if (saved && saved.points && saved.points.some(p => p !== 0)) {
        this.confirmDialog(curLang.confirmOverwriteTitle, curLang.confirmOverwriteDesc, () => {
          storage.clearSaveState();
          this.checkResume();
          this.startNewMatchFlow();
        });
      } else {
        this.startNewMatchFlow();
      }
    });

    this.dom.resumeBtn.addEventListener('click', () => this.resumeSavedGame());
    this.dom.rulesBtn.addEventListener('click', () => this.openOverlay(this.dom.rulesModal));
    this.dom.rulesCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.rulesModal));
    this.dom.statsBtn.addEventListener('click', () => this.showStats());
    this.dom.statsCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.statsModal));
    
    if (this.dom.titleSettingsMenuBtn) {
      this.dom.titleSettingsMenuBtn.addEventListener('click', () => this.openOverlay(this.dom.settingsModal));
    }
    this.dom.settingsCloseBtn.addEventListener('click', () => this.closeOverlay(this.dom.settingsModal));
    
    this.dom.resultRestartBtn.addEventListener('click', () => {
      this.closeOverlay(this.dom.resultModal);
      this.startNewMatchFlow();
    });

    this.dom.resultTitleBtn.addEventListener('click', () => {
      this.closeOverlay(this.dom.resultModal);
      this.dom.titleScreen.classList.remove('hidden');
      this.checkResume();
    });

    this.dom.resultShareBtn.addEventListener('click', () => {
      this.shareOnX();
    });

    this.dom.headerBackBtn.addEventListener('click', () => {
      const curLang = I18N[this.settings.lang] || I18N.en;
      this.confirmDialog(curLang.confirmLeaveTitle, curLang.confirmLeaveDesc, () => {
        this.saveGameState();
        this.dom.titleScreen.classList.remove('hidden');
        this.checkResume();
      });
    });

    this.dom.audioToggleBtn.addEventListener('click', () => {
      this.settings.sound = !this.settings.sound;
      storage.saveSettings(this.settings);
      this.applySettings();
      this.vibrate(20);
    });

    this.dom.rollActionBtn.addEventListener('click', () => this.handleRollBtnClick());

    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.addEventListener('change', (e) => {
        this.settings.lang = e.target.value;
        storage.saveSettings(this.settings);
        this.applySettings();
        this.vibrate(15);
      });
    }

    document.getElementById('sound-toggle').addEventListener('click', () => {
      this.settings.sound = !this.settings.sound;
      storage.saveSettings(this.settings);
      this.applySettings();
      this.vibrate(20);
    });

    document.getElementById('vibe-toggle').addEventListener('click', () => {
      this.settings.haptics = !this.settings.haptics;
      storage.saveSettings(this.settings);
      this.applySettings();
      this.vibrate(20);
    });

    document.getElementById('reset-data-btn').addEventListener('click', () => {
      const curLang = I18N[this.settings.lang] || I18N.en;
      this.confirmDialog(curLang.confirmResetTitle, curLang.confirmResetDesc, () => {
        storage.clearAllData();
        this.settings = storage.getSettings();
        if (!this.settings.lang || !I18N[this.settings.lang]) this.settings.lang = 'en';
        this.stats = storage.getStats();
        this.applySettings();
        this.checkResume();
        this.closeOverlay(this.dom.settingsModal);
      });
    });

    this.dom.gameView.addEventListener('click', (e) => this.handleBoardInteraction(e));
  }

  openOverlay(el) {
    el.classList.remove('hidden');
    this.vibrate(15);
  }

  closeOverlay(el) {
    el.classList.add('hidden');
    this.vibrate(15);
  }

  confirmDialog(title, desc, onOk) {
    this.dom.confirmTitle.textContent = title;
    this.dom.confirmMsg.textContent = desc;
    this.openOverlay(this.dom.confirmModal);
    
    const cleanup = () => {
      this.dom.confirmOkBtn.onclick = null;
      this.dom.confirmCancelBtn.onclick = null;
      this.closeOverlay(this.dom.confirmModal);
    };

    this.dom.confirmOkBtn.onclick = () => {
      cleanup();
      onOk();
    };
    this.dom.confirmCancelBtn.onclick = () => cleanup();
  }

  checkResume() {
    const saved = storage.getSaveState();
    const hasCheckers = saved && saved.points && saved.points.some(p => p !== 0);
    if (hasCheckers) {
      this.dom.resumeBtn.style.display = 'block';
    } else {
      this.dom.resumeBtn.style.display = 'none';
      storage.clearSaveState();
    }
  }

  showStats() {
    this.stats = storage.getStats();
    document.getElementById('stat-total').textContent = this.stats.gamesPlayed;
    document.getElementById('stat-white').textContent = this.stats.whiteWins;
    document.getElementById('stat-black').textContent = this.stats.blackWins;
    document.getElementById('stat-gammon').textContent = this.stats.gammons;
    document.getElementById('stat-bg').textContent = this.stats.backgammons;
    this.openOverlay(this.dom.statsModal);
  }

  createDiceElement(val, isUsed = false) {
    const dice = document.createElement('div');
    dice.className = `dice dice-${val} ${isUsed ? 'used' : ''}`;
    if (val === 1) {
      const p = document.createElement('div');
      p.className = 'pip pip-1';
      dice.appendChild(p);
    } else {
      for (let i = 1; i <= val; i++) {
        const p = document.createElement('div');
        p.className = `pip p${i}`;
        dice.appendChild(p);
      }
    }
    return dice;
  }

  startNewMatchFlow() {
    const curLang = I18N[this.settings.lang] || I18N.en;
    this.dom.initResultText.textContent = '';
    this.dom.initActionBtn.textContent = curLang.rollDice;
    this.dom.initActionBtn.disabled = false;

    this.openOverlay(this.dom.initiativeModal);

    const init3D = this.getInit3D();
    if (init3D) {
      init3D.mesh1.visible = false;
      init3D.mesh2.visible = false;
      setTimeout(() => init3D.resize(), 50);
    }

    let stage = 'roll';
    let firstRollResult = null;

    this.dom.initActionBtn.onclick = () => {
      if (stage === 'roll') {
        this.dom.initActionBtn.disabled = true;
        this.vibrate(40);
        
        let wVal = Math.floor(Math.random() * 6) + 1;
        let bVal = Math.floor(Math.random() * 6) + 1;

        init3D.roll(wVal, bVal, () => {
          this.dom.initActionBtn.disabled = false;

          if (wVal === bVal) {
            this.dom.initResultText.textContent = curLang.tieRoll;
            return;
          }

          const isWhite = wVal > bVal;
          this.dom.initResultText.textContent = isWhite ? curLang.whiteFirst : curLang.blackFirst;
          
          firstRollResult = {
            winner: isWhite ? 'white' : 'black',
            dice: [wVal, bVal]
          };

          stage = 'confirm';
          this.dom.initActionBtn.textContent = curLang.startGame;
        });
      } else {
        this.closeOverlay(this.dom.initiativeModal);
        this.dom.titleScreen.classList.add('hidden');
        this.setupStartingBoard(firstRollResult);
      }
    };
  }

  setupStartingBoard(initData) {
    this.points = new Array(24).fill(0);
    this.points[23] = 2;
    this.points[12] = 5;
    this.points[7]  = 3;
    this.points[5]  = 5;

    this.points[0]  = -2;
    this.points[11] = -5;
    this.points[16] = -3;
    this.points[18] = -5;

    this.bar = { white: 0, black: 0 };
    this.bearOff = { white: 0, black: 0 };

    this.turn = initData.winner;
    this.dice = [...initData.dice];
    this.availableMoves = [...this.dice];
    this.selectedSource = null;
    this.isTransitioning = false;

    this.renderBoard();
    this.updateControls();
    this.saveGameState();

    if (this.turn === 'black' && this.mode === 'cpu') {
      setTimeout(() => this.triggerCpuTurn(), 600);
    } else {
      this.verifyTurnPossibilities();
    }
  }

  resumeSavedGame() {
    const saved = storage.getSaveState();
    if (!saved) return;
    this.points = saved.points;
    this.bar = saved.bar;
    this.bearOff = saved.bearOff;
    this.turn = saved.turn;
    this.dice = saved.dice || [];
    this.availableMoves = saved.availableMoves || [];
    this.mode = saved.mode || 'cpu';
    this.diff = saved.diff || 'easy';
    this.selectedSource = null;
    this.isTransitioning = false;

    this.dom.titleScreen.classList.add('hidden');
    this.renderBoard();
    this.updateControls();

    if (this.turn === 'black' && this.mode === 'cpu') {
      setTimeout(() => this.triggerCpuTurn(), 600);
    } else {
      this.verifyTurnPossibilities();
    }
  }

  saveGameState() {
    storage.saveState({
      points: this.points,
      bar: this.bar,
      bearOff: this.bearOff,
      turn: this.turn,
      dice: this.dice,
      availableMoves: this.availableMoves,
      mode: this.mode,
      diff: this.diff
    });
  }

  handleRollBtnClick() {
    if (this.isRolling || this.availableMoves.length > 0 || this.isTransitioning) return;
    this.vibrate(35);
    this.isRolling = true;

    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;

    this.dom.inGameDiceLayer.classList.remove('hidden');
    const game3D = this.getGame3D();

    game3D.roll(d1, d2, () => {
      this.dice = [d1, d2];
      this.availableMoves = d1 === d2 ? [d1, d1, d1, d1] : [d1, d2];

      setTimeout(() => {
        this.dom.inGameDiceLayer.classList.add('hidden');
        game3D.mesh1.visible = false;
        game3D.mesh2.visible = false;
        game3D.mesh1.position.set(0.65, 4.8, 0);
        game3D.mesh2.position.set(1.48, 4.8, 0);
        game3D.render();

        this.isRolling = false;
        this.updateControls();
        this.verifyTurnPossibilities();
        this.saveGameState();
      }, 400);
    });
  }

  verifyTurnPossibilities() {
    if (this.availableMoves.length === 0) return;

    const moves = this.getAllValidMoves(this.turn, this.availableMoves);
    if (moves.length === 0) {
      this.handleNoMovesPass();
    } else {
      this.highlightPlayableCheckers();
    }
  }

  handleNoMovesPass() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const curLang = I18N[this.settings.lang] || I18N.en;
    this.dom.turnText.textContent = curLang.noMovesPass;
    this.availableMoves = [];
    this.updateControls();

    setTimeout(() => {
      this.isTransitioning = false;
      this.nextTurn();
    }, 1100);
  }

  nextTurn() {
    this.turn = this.turn === 'white' ? 'black' : 'white';
    this.dice = [];
    this.availableMoves = [];
    this.selectedSource = null;
    this.isTransitioning = false;

    this.renderBoard();
    this.updateControls();
    this.saveGameState();

    if (this.turn === 'black' && this.mode === 'cpu') {
      setTimeout(() => this.triggerCpuTurn(), 500);
    }
  }

  updateControls() {
    const curLang = I18N[this.settings.lang] || I18N.en;
    this.dom.whitePip.textContent = this.calcPip('white');
    this.dom.blackPip.textContent = this.calcPip('black');

    this.dom.opponentNameLabel.textContent = this.mode === 'cpu'
      ? curLang.oppCpu
      : curLang.oppPlayer;

    if (!this.isTransitioning) {
      this.dom.turnText.textContent = this.turn === 'white' 
        ? curLang.whiteTurnText 
        : curLang.blackTurnText;
    }
    this.dom.turnText.className = `turn-status-text ${this.turn}-turn`;

    const isPlayerTurn = (this.turn === 'white' || this.mode === 'local');
    const canRoll = isPlayerTurn && this.availableMoves.length === 0 && !this.isTransitioning && !this.isRolling;
    this.dom.rollActionBtn.style.display = canRoll ? 'inline-block' : 'none';

    this.dom.diceDisplay.innerHTML = '';
    this.dice.forEach(d => {
      const isUsed = !this.availableMoves.includes(d);
      const el = this.createDiceElement(d, isUsed);
      this.dom.diceDisplay.appendChild(el);
    });
  }

  calcPip(player) {
    let pip = 0;
    if (player === 'white') {
      pip += this.bar.white * 25;
      for (let i = 0; i < 24; i++) {
        if (this.points[i] > 0) pip += this.points[i] * (i + 1);
      }
    } else {
      pip += this.bar.black * 25;
      for (let i = 0; i < 24; i++) {
        if (this.points[i] < 0) pip += Math.abs(this.points[i]) * (24 - i);
      }
    }
    return pip;
  }

  isBearOffAllowed(player) {
    if (player === 'white') {
      if (this.bar.white > 0) return false;
      for (let i = 6; i < 24; i++) {
        if (this.points[i] > 0) return false;
      }
      return true;
    } else {
      if (this.bar.black > 0) return false;
      for (let i = 0; i < 18; i++) {
        if (this.points[i] < 0) return false;
      }
      return true;
    }
  }

  getAllValidMoves(player, diceList) {
    const uniqueDice = [...new Set(diceList)];
    const validMoves = [];

    const checkMove = (from, die) => {
      const res = this.canMoveChecker(player, from, die);
      if (res.valid) {
        validMoves.push({ from, to: res.target, die });
      }
    };

    if (player === 'white' && this.bar.white > 0) {
      uniqueDice.forEach(die => checkMove('bar', die));
      return validMoves;
    }
    if (player === 'black' && this.bar.black > 0) {
      uniqueDice.forEach(die => checkMove('bar', die));
      return validMoves;
    }

    for (let i = 0; i < 24; i++) {
      if ((player === 'white' && this.points[i] > 0) || (player === 'black' && this.points[i] < 0)) {
        uniqueDice.forEach(die => checkMove(i, die));
      }
    }

    return validMoves;
  }

  canMoveChecker(player, from, die) {
    if (player === 'white') {
      if (from === 'bar') {
        const target = 24 - die;
        if (this.points[target] >= -1) return { valid: true, target };
        return { valid: false };
      }
      const target = from - die;
      if (target >= 0) {
        if (this.points[target] >= -1) return { valid: true, target };
        return { valid: false };
      } else {
        if (!this.isBearOffAllowed('white')) return { valid: false };
        if (target === -1) return { valid: true, target: 'bearoff' };
        for (let i = from + 1; i < 6; i++) {
          if (this.points[i] > 0) return { valid: false };
        }
        return { valid: true, target: 'bearoff' };
      }
    } else {
      if (from === 'bar') {
        const target = die - 1;
        if (this.points[target] <= 1) return { valid: true, target };
        return { valid: false };
      }
      const target = from + die;
      if (target <= 23) {
        if (this.points[target] <= 1) return { valid: true, target };
        return { valid: false };
      } else {
        if (!this.isBearOffAllowed('black')) return { valid: false };
        if (target === 24) return { valid: true, target: 'bearoff' };
        for (let i = from - 1; i >= 18; i--) {
          if (this.points[i] < 0) return { valid: false };
        }
        return { valid: true, target: 'bearoff' };
      }
    }
  }

  executeMove(player, from, to, die) {
    if (from === 'bar') {
      if (player === 'white') this.bar.white--;
      else this.bar.black--;
    } else {
      if (player === 'white') this.points[from]--;
      else this.points[from]++;
    }

    if (to === 'bearoff') {
      if (player === 'white') this.bearOff.white++;
      else this.bearOff.black++;
      audio.playCheckerTap();
    } else {
      if (player === 'white' && this.points[to] === -1) {
        this.points[to] = 1;
        this.bar.black++;
        audio.playCheckerHit();
        this.vibrate(60);
      } else if (player === 'black' && this.points[to] === 1) {
        this.points[to] = -1;
        this.bar.white++;
        audio.playCheckerHit();
        this.vibrate(60);
      } else {
        if (player === 'white') this.points[to]++;
        else this.points[to]--;
        audio.playCheckerTap();
      }
    }

    const idx = this.availableMoves.indexOf(die);
    if (idx > -1) this.availableMoves.splice(idx, 1);

    this.vibrate(20);
    this.renderBoard();
    this.updateControls();

    if (this.checkVictory(player)) return;

    if (this.availableMoves.length === 0) {
      setTimeout(() => this.nextTurn(), 400);
    } else {
      this.verifyTurnPossibilities();
    }
  }

  checkVictory(player) {
    if (this.bearOff[player] === 15) {
      audio.playVictory();
      this.vibrate([100, 50, 150]);
      
      const opp = player === 'white' ? 'black' : 'white';
      const isGammon = this.bearOff[opp] === 0;
      const isBackgammon = isGammon && (
        this.bar[opp] > 0 || 
        (opp === 'black' ? this.hasCheckersInQuad(0, 5, -1) : this.hasCheckersInQuad(18, 23, 1))
      );

      this.stats.gamesPlayed++;
      if (player === 'white') this.stats.whiteWins++;
      else this.stats.blackWins++;
      
      let winTypeKey = 'singleWin';
      if (isBackgammon) {
        this.stats.backgammons++;
        winTypeKey = 'backgammonWin';
      } else if (isGammon) {
        this.stats.gammons++;
        winTypeKey = 'gammonWin';
      }

      storage.saveStats(this.stats);
      storage.clearSaveState();

      this.lastWinResult = {
        winner: player,
        winType: winTypeKey,
        isBackgammon,
        isGammon
      };

      setTimeout(() => {
        this.showResultModal(this.lastWinResult);
      }, 500);
      return true;
    }
    return false;
  }

  showResultModal(result) {
    const curLang = I18N[this.settings.lang] || I18N.en;

    this.dom.resultCrest.textContent = (result.winner === 'white' || this.mode === 'local') ? '🏆' : '💀';
    this.dom.resultTitle.textContent = result.winner === 'white' ? curLang.winnerWhite : curLang.winnerBlack;
    this.dom.resultBadge.textContent = curLang[result.winType];
    this.dom.resultDesc.textContent = result.winner === 'white' ? curLang.winDescWhite : curLang.winDescBlack;

    this.openOverlay(this.dom.resultModal);
  }

  shareOnX() {
    const curLang = I18N[this.settings.lang] || I18N.en;
    const winTypeStr = curLang[this.lastWinResult.winType];
    const text = `【Games Clubhouse: Backgammon】\n${this.lastWinResult.winner === 'white' ? 'White' : 'Black'} Won! [${winTypeStr}]\n#GamesClubhouse #Backgammon`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  hasCheckersInQuad(start, end, sign) {
    for (let i = start; i <= end; i++) {
      if (sign > 0 && this.points[i] > 0) return true;
      if (sign < 0 && this.points[i] < 0) return true;
    }
    return false;
  }

  handleBoardInteraction(e) {
    if (this.turn === 'black' && this.mode === 'cpu') return;
    if (this.availableMoves.length === 0 || this.isTransitioning || this.isRolling) return;

    const ptEl = e.target.closest('.point');
    const barEl = e.target.closest('.bar-well');
    const bearEl = e.target.closest('.bearoff-pocket');

    if (this.selectedSource === null) {
      if (barEl) {
        if (this.turn === 'white' && barEl.id === 'bar-white' && this.bar.white > 0) {
          this.selectSource('bar');
        } else if (this.turn === 'black' && barEl.id === 'bar-black' && this.bar.black > 0) {
          this.selectSource('bar');
        }
      } else if (ptEl) {
        const pt = parseInt(ptEl.dataset.point, 10);
        if (this.turn === 'white' && this.points[pt] > 0 && this.bar.white === 0) {
          this.selectSource(pt);
        } else if (this.turn === 'black' && this.points[pt] < 0 && this.bar.black === 0) {
          this.selectSource(pt);
        }
      }
    } else {
      if (ptEl) {
        const targetPt = parseInt(ptEl.dataset.point, 10);
        this.tryApplyUserMove(targetPt);
      } else if (bearEl) {
        this.tryApplyUserMove('bearoff');
      } else {
        this.clearSelection();
      }
    }
  }

  selectSource(source) {
    this.selectedSource = source;
    this.renderBoard();
    this.highlightPossibleTargets(source);
  }

  clearSelection() {
    this.selectedSource = null;
    this.renderBoard();
    this.highlightPlayableCheckers();
  }

  highlightPlayableCheckers() {
    const validMoves = this.getAllValidMoves(this.turn, this.availableMoves);
    const playableSources = new Set(validMoves.map(m => m.from));

    if (playableSources.has('bar')) {
      const el = this.turn === 'white' ? this.dom.barWhite : this.dom.barBlack;
      const topChecker = el.querySelector('.checker:last-child');
      if (topChecker) topChecker.classList.add('selectable');
    } else {
      playableSources.forEach(pt => {
        const ptEl = document.querySelector(`.point[data-point="${pt}"]`);
        if (ptEl) {
          const topChecker = ptEl.querySelector('.checker:last-child');
          if (topChecker) topChecker.classList.add('selectable');
        }
      });
    }
  }

  highlightPossibleTargets(source) {
    const validMoves = this.getAllValidMoves(this.turn, this.availableMoves)
      .filter(m => m.from === source);

    validMoves.forEach(m => {
      if (m.to === 'bearoff') {
        const el = this.turn === 'white' ? this.dom.bearoffWhite : this.dom.bearoffBlack;
        el.classList.add('legal-target');
      } else {
        const ptEl = document.querySelector(`.point[data-point="${m.to}"]`);
        if (ptEl) ptEl.classList.add('legal-target');
      }
    });
  }

  tryApplyUserMove(target) {
    const validMoves = this.getAllValidMoves(this.turn, this.availableMoves)
      .filter(m => m.from === this.selectedSource && m.to === target);

    if (validMoves.length > 0) {
      const move = validMoves[0];
      const src = this.selectedSource;
      this.selectedSource = null;
      this.executeMove(this.turn, src, target, move.die);
    } else {
      this.clearSelection();
    }
  }

  triggerCpuTurn() {
    if (this.turn !== 'black' || this.isTransitioning) return;

    if (this.availableMoves.length === 0) {
      this.dom.thinkingIndicator.style.display = 'flex';
      setTimeout(() => {
        if (this.turn !== 'black') return;
        const d1 = Math.floor(Math.random() * 6) + 1;
        const d2 = Math.floor(Math.random() * 6) + 1;

        this.dom.inGameDiceLayer.classList.remove('hidden');
        const game3D = this.getGame3D();

        game3D.roll(d1, d2, () => {
          this.dice = [d1, d2];
          this.availableMoves = d1 === d2 ? [d1, d1, d1, d1] : [d1, d2];

          setTimeout(() => {
            this.dom.inGameDiceLayer.classList.add('hidden');
            game3D.mesh1.visible = false;
            game3D.mesh2.visible = false;
            game3D.mesh1.position.set(0.65, 4.8, 0);
            game3D.mesh2.position.set(1.48, 4.8, 0);
            game3D.render();

            this.updateControls();

            const validMoves = this.getAllValidMoves('black', this.availableMoves);
            if (validMoves.length === 0) {
              this.dom.thinkingIndicator.style.display = 'none';
              this.handleNoMovesPass();
              return;
            }

            setTimeout(() => this.executeCpuMoveStep(), 800);
          }, 400);
        });
      }, 700);
    } else {
      const validMoves = this.getAllValidMoves('black', this.availableMoves);
      if (validMoves.length === 0) {
        this.dom.thinkingIndicator.style.display = 'none';
        this.handleNoMovesPass();
        return;
      }
      this.dom.thinkingIndicator.style.display = 'flex';
      setTimeout(() => this.executeCpuMoveStep(), 800);
    }
  }

  executeCpuMoveStep() {
    if (this.turn !== 'black' || this.isTransitioning) {
      this.dom.thinkingIndicator.style.display = 'none';
      return;
    }

    const validMoves = this.getAllValidMoves('black', this.availableMoves);
    if (validMoves.length === 0) {
      this.dom.thinkingIndicator.style.display = 'none';
      this.handleNoMovesPass();
      return;
    }

    let chosenMove = null;

    if (this.diff === 'easy') {
      chosenMove = validMoves[Math.floor(Math.random() * validMoves.length)];
    } else if (this.diff === 'normal') {
      const hitMove = validMoves.find(m => m.to !== 'bearoff' && this.points[m.to] === 1);
      chosenMove = hitMove || validMoves[Math.floor(Math.random() * validMoves.length)];
    } else {
      let bestScore = -9999;
      validMoves.forEach(m => {
        let score = 0;
        if (m.to === 'bearoff') score += 50;
        else if (this.points[m.to] === 1) score += 35;
        else if (this.points[m.to] <= -1) score += 15;
        if (m.from === 'bar') score += 25;
        score += (m.die);
        if (score > bestScore) {
          bestScore = score;
          chosenMove = m;
        }
      });
    }

    this.dom.thinkingIndicator.style.display = 'none';
    this.executeMove('black', chosenMove.from, chosenMove.to, chosenMove.die);

    if (this.availableMoves.length > 0 && this.turn === 'black') {
      const nextMoves = this.getAllValidMoves('black', this.availableMoves);
      if (nextMoves.length === 0) {
        this.handleNoMovesPass();
      } else {
        setTimeout(() => this.triggerCpuTurn(), 500);
      }
    }
  }

  renderBoard() {
    document.querySelectorAll('.legal-target').forEach(el => el.classList.remove('legal-target'));

    for (let i = 0; i < 24; i++) {
      const ptEl = document.querySelector(`.point[data-point="${i}"]`);
      if (!ptEl) continue;
      const stack = ptEl.querySelector('.checker-stack');
      stack.innerHTML = '';

      const count = this.points[i];
      if (count === 0) continue;

      const isWhite = count > 0;
      const total = Math.abs(count);
      const limit = Math.min(total, 5);

      for (let k = 0; k < limit; k++) {
        const checker = document.createElement('div');
        checker.className = `checker checker-${isWhite ? 'white' : 'black'}`;
        if (this.selectedSource === i && k === limit - 1) {
          checker.classList.add('selected');
        }
        if (k === limit - 1 && total > 5) {
          const badge = document.createElement('span');
          badge.className = 'checker-count';
          badge.textContent = total;
          checker.appendChild(badge);
        }
        stack.appendChild(checker);
      }
    }

    this.renderBarPockets();
    this.renderBearOffPockets();
  }

  renderBarPockets() {
    this.dom.barWhite.innerHTML = '';
    const wTotal = this.bar.white;
    const wLimit = Math.min(wTotal, 4);
    for (let i = 0; i < wLimit; i++) {
      const ch = document.createElement('div');
      ch.className = 'checker checker-white';
      if (this.selectedSource === 'bar' && this.turn === 'white') ch.classList.add('selected');
      if (i === wLimit - 1 && wTotal > 4) {
        const badge = document.createElement('span');
        badge.className = 'checker-count';
        badge.textContent = wTotal;
        ch.appendChild(badge);
      }
      this.dom.barWhite.appendChild(ch);
    }

    this.dom.barBlack.innerHTML = '';
    const bTotal = this.bar.black;
    const bLimit = Math.min(bTotal, 4);
    for (let i = 0; i < bLimit; i++) {
      const ch = document.createElement('div');
      ch.className = 'checker checker-black';
      if (this.selectedSource === 'bar' && this.turn === 'black') ch.classList.add('selected');
      if (i === bLimit - 1 && bTotal > 4) {
        const badge = document.createElement('span');
        badge.className = 'checker-count';
        badge.textContent = bTotal;
        ch.appendChild(badge);
      }
      this.dom.barBlack.appendChild(ch);
    }
  }

  renderBearOffPockets() {
    this.dom.bearoffWhite.innerHTML = '';
    for (let i = 0; i < Math.min(this.bearOff.white, 15); i++) {
      const bar = document.createElement('div');
      bar.className = 'bearoff-bar white';
      this.dom.bearoffWhite.appendChild(bar);
    }
    this.dom.bearoffBlack.innerHTML = '';
    for (let i = 0; i < Math.min(this.bearOff.black, 15); i++) {
      const bar = document.createElement('div');
      bar.className = 'bearoff-bar black';
      this.dom.bearoffBlack.appendChild(bar);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.game = new BackgammonGame();
});
