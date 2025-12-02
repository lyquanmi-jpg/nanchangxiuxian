// =====================
// 常量定义
// =====================

const FORMATIONS = {
  DEFENSIVE: "defensive",
  BALANCED: "balanced",
  AGGRESSIVE: "aggressive"
};

const SKILL_TYPES = {
  ATTACK: "attack",
  HEAL: "heal",
  BUFF: "buff",
  DEBUFF: "debuff",
  SHIELD: "shield",
  CONTROL: "control"
};

// =====================
// 静态数据：GameData
// =====================

// =====================
// 静态数据：GameData
// =====================

const GameData = {
  heroes: {
    // ==== 桃汁 ====
    taozhi: {
      id: "taozhi",
      name: "桃汁",
      title: "隐光剑仙 · 社恐美少女",
      role: "dps",
      baseStats: { maxHp: 110, atk: 26 },
      ultimate: {
        name: "影丝封印",
        type: SKILL_TYPES.CONTROL,
        description: "封印单体 1~2 回合（黑化好友多 1 回合）",
        effect: {
          target: "singleEnemy",
          baseDuration: 1,
          extraDurationIfCorrupted: 1
        }
      },
      skills: [
        {
          name: "呢喃剑·小声斩",
          type: SKILL_TYPES.ATTACK,
          power: 1.4,
          target: "singleEnemy"
        },
        {
          name: "影遁反击",
          type: SKILL_TYPES.BUFF,
          effect: { attackUpPercent: 0.1, duration: 2 },
          target: "allAllies"
        }
      ],
      corruptedSkills: [
        {
          name: "影流扎心",
          type: SKILL_TYPES.ATTACK,
          power: 1.5,
          target: "singleAlly"
        },
        {
          name: "尴尬沉默场",
          type: SKILL_TYPES.DEBUFF,
          power: 0.6,
          effect: { attackDownPercent: 0.05, duration: 2 },
          target: "allAllies"
        }
      ],
      artifact: {
        id: "hat_taozhi",
        name: "桃汁的小帽子",
        description: "全队获得一次 20% 伤害减免的护盾",
        effect: {
          type: "firstHitDamageReduction",
          value: 0.2
        }
      }
    },

    // ==== 天才哥 ====
    tiancai: {
      id: "tiancai",
      name: "天才哥",
      title: "机关术士",
      role: "dps",
      baseStats: { maxHp: 120, atk: 28 },
      ultimate: {
        name: "算力爆裂",
        type: SKILL_TYPES.ATTACK,
        description: "超高伤害群攻，下回合自身攻击 -20%",
        effect: {
          target: "allEnemies",
          power: 2.2,
          selfDebuff: { attackDownPercent: 0.2, duration: 1 }
        }
      },
      skills: [
        {
          name: "数据万剑归宗",
          type: SKILL_TYPES.ATTACK,
          power: 1.6,
          target: "singleEnemy"
        },
        {
          name: "灵器重铸",
          type: SKILL_TYPES.HEAL,
          power: 0.55,
          target: "lowestHpAlly"
        }
      ],
      corruptedSkills: [
        {
          name: "逻辑打击",
          type: SKILL_TYPES.ATTACK,
          power: 1.8,
          target: "singleAlly"
        },
        {
          name: "死循环阵",
          type: SKILL_TYPES.CONTROL,
          target: "randomAlly",
          effect: { silenceUltimate: true, duration: 1 }
        }
      ],
      artifact: {
        id: "tool_tiancai",
        name: "天才哥的螺丝刀",
        description: "所有队员技能触发概率 +10%",
        effect: {
          type: "skillTriggerUpPercent",
          value: 0.1
        }
      }
    },

    // ==== 小梦 ====
    xiaomeng: {
      id: "xiaomeng",
      name: "小梦",
      title: "影风术修 · 温柔御姐",
      role: "healer",
      baseStats: { maxHp: 115, atk: 24 },
      ultimate: {
        name: "风息回环",
        type: SKILL_TYPES.HEAL,
        description: "全队回复 30% HP 并清除负面状态",
        effect: {
          target: "allAllies",
          healPercent: 0.3,
          cleanse: true
        }
      },
      skills: [
        {
          name: "轻风细刃",
          type: SKILL_TYPES.ATTACK,
          power: 1.3,
          target: "singleEnemy"
        },
        {
          name: "心羽抚息",
          type: SKILL_TYPES.HEAL,
          power: 0.5,
          target: "lowestHpAlly"
        }
      ],
      corruptedSkills: [
        {
          name: "风刃沉痛击",
          type: SKILL_TYPES.ATTACK,
          power: 1.2,
          target: "twoRandomAllies"
        },
        {
          name: "温柔压迫感",
          type: SKILL_TYPES.DEBUFF,
          power: 0.5,
          target: "allAllies",
          effect: { slow: true, duration: 1 }
        }
      ],
      artifact: {
        id: "perfume_xiaomeng",
        name: "小梦的便携香水",
        description: "每回合结束全队额外回复 3% HP",
        effect: {
          type: "regenPerTurn",
          value: 0.03
        }
      }
    },

    // ==== 小D（豪华飞舟彩蛋） ====
    xiaoD: {
      id: "xiaoD",
      name: "小D",
      title: "星蕴御灵师 · 温柔御姐",
      role: "support",
      baseStats: { maxHp: 120, atk: 23 },
      ultimate: {
        name: "星光庇佑",
        type: SKILL_TYPES.HEAL,
        description: "指定一名队友无敌 1 回合，并小幅治疗。",
        effect: {
          target: "lowestHpAlly",
          healPercent: 0.2,
          shield: true,
          shieldDuration: 1
        }
      },
      skills: [
        {
          name: "星辉安抚术",
          type: SKILL_TYPES.HEAL,
          power: 0.55,
          target: "lowestHpAlly"
        },
        {
          name: "御灵镇心",
          type: SKILL_TYPES.BUFF,
          target: "allAllies",
          effect: { attackUpPercent: 0.1, duration: 2 }
        }
      ],
      corruptedSkills: [
        {
          name: "星陨碎光",
          type: SKILL_TYPES.ATTACK,
          power: 1.3,
          target: "allAllies"
        },
        {
          name: "御灵压制",
          type: SKILL_TYPES.CONTROL,
          target: "randomAlly",
          effect: { silenceUltimate: true, duration: 1 }
        }
      ],
      artifact: {
        id: "earring_xiaoD",
        name: "小D 的星光耳坠",
        description: "治疗效果 +15%",
        effect: {
          type: "healBonusPercent",
          value: 0.15
        }
      }
    },

    // ==== 红红 ====
    honghong: {
      id: "honghong",
      name: "红红",
      title: "深夜修仙队长",
      role: "support",
      baseStats: { maxHp: 125, atk: 24 },
      ultimate: {
        name: "深夜加班光环",
        type: SKILL_TYPES.BUFF,
        description: "本回合为全队附加小幅攻击与减伤加成（偏剧情向）。",
        effect: {
          target: "allAllies",
          attackUpPercent: 0.12,
          damageTakenDownPercent: 0.08,
          duration: 2
        }
      },
      skills: [
        {
          name: "补档整理术",
          type: SKILL_TYPES.ATTACK,
          power: 1.2,
          target: "singleEnemy"
        },
        {
          name: "队长凝视",
          type: SKILL_TYPES.HEAL,
          power: 0.45,
          target: "lowestHpAlly"
        }
      ],
      corruptedSkills: [
        {
          name: "业绩地狱审判",
          type: SKILL_TYPES.ATTACK,
          power: 1.4,
          target: "allAllies"
        },
        {
          name: "复盘到凌晨三点",
          type: SKILL_TYPES.DEBUFF,
          power: 0.5,
          target: "allAllies"
        }
      ],
      artifact: {
        id: "clip_honghong",
        name: "红红的备忘夹",
        description: "全队受到伤害 -4%。",
        effect: {
          type: "damageTakenDownPercent",
          value: 0.04
        }
      }
    },

    // ==== 琪琪 ====
    qiqi: {
      id: "qiqi",
      name: "琪琪",
      title: "元气系小太阳",
      role: "dps",
      baseStats: { maxHp: 110, atk: 27 },
      ultimate: {
        name: "今日状态超好",
        type: SKILL_TYPES.ATTACK,
        description: "对单体造成高额伤害。",
        effect: {
          target: "singleEnemy",
          power: 2.0
        }
      },
      skills: [
        {
          name: "元气一脚",
          type: SKILL_TYPES.ATTACK,
          power: 1.4,
          target: "singleEnemy"
        },
        {
          name: "补妆打气",
          type: SKILL_TYPES.HEAL,
          power: 0.4,
          target: "lowestHpAlly"
        }
      ],
      corruptedSkills: [
        {
          name: "冷脸输出",
          type: SKILL_TYPES.ATTACK,
          power: 1.5,
          target: "singleAlly"
        },
        {
          name: "冷场沉默术",
          type: SKILL_TYPES.CONTROL,
          target: "randomAlly",
          effect: { silenceUltimate: true, duration: 1 }
        }
      ],
      artifact: {
        id: "lipstick_qiqi",
        name: "琪琪的口红",
        description: "全队暴击伤害小幅提升（偏剧情）。",
        effect: {
          type: "critDamageUpPercent",
          value: 0.1
        }
      }
    },

    // ==== 奇奇（琪琪对象） ====
    qiqiBoy: {
      id: "qiqiBoy",
      name: "奇奇",
      title: "稳定输出男友",
      role: "dps",
      baseStats: { maxHp: 120, atk: 26 },
      ultimate: {
        name: "你先别急",
        type: SKILL_TYPES.HEAL,
        description: "给全队小幅回复，顺便安抚士气。",
        effect: {
          target: "allAllies",
          healPercent: 0.22
        }
      },
      skills: [
        {
          name: "稳重一拳",
          type: SKILL_TYPES.ATTACK,
          power: 1.3,
          target: "singleEnemy"
        },
        {
          name: "背后托举",
          type: SKILL_TYPES.BUFF,
          target: "allAllies",
          effect: { attackUpPercent: 0.08, duration: 2 }
        }
      ],
      corruptedSkills: [
        {
          name: "强行讲道理",
          type: SKILL_TYPES.ATTACK,
          power: 1.6,
          target: "singleAlly"
        },
        {
          name: "冷静分析会",
          type: SKILL_TYPES.DEBUFF,
          power: 0.4,
          target: "allAllies"
        }
      ],
      artifact: {
        id: "watch_qiqiBoy",
        name: "奇奇的手表",
        description: "队伍技能触发率 +5%。",
        effect: {
          type: "skillTriggerUpPercent",
          value: 0.05
        }
      }
    },

    // ==== 蛋总 ====
    danzong: {
      id: "danzong",
      name: "蛋总",
      title: "饭局掌勺人",
      role: "support",
      baseStats: { maxHp: 130, atk: 22 },
      ultimate: {
        name: "满汉全席",
        type: SKILL_TYPES.HEAL,
        description: "全队回复一定生命值。",
        effect: {
          target: "allAllies",
          healPercent: 0.25
        }
      },
      skills: [
        {
          name: "锅气翻炒",
          type: SKILL_TYPES.ATTACK,
          power: 1.2,
          target: "allEnemies"
        },
        {
          name: "再来一勺",
          type: SKILL_TYPES.HEAL,
          power: 0.5,
          target: "lowestHpAlly"
        }
      ],
      corruptedSkills: [
        {
          name: "高油高盐高热量",
          type: SKILL_TYPES.ATTACK,
          power: 1.3,
          target: "allAllies"
        },
        {
          name: "打包一整锅",
          type: SKILL_TYPES.DEBUFF,
          power: 0.4,
          target: "allAllies"
        }
      ],
      artifact: {
        id: "pan_danzong",
        name: "蛋总的平底锅",
        description: "全队受到的第一段伤害额外减免 10%。",
        effect: {
          type: "firstHitDamageReduction",
          value: 0.1
        }
      }
    },

    // ==== 蜗牛 ====
    woniu: {
      id: "woniu",
      name: "蜗牛",
      title: "慢热防御大核",
      role: "tank",
      baseStats: { maxHp: 145, atk: 20 },
      ultimate: {
        name: "壳中世界",
        type: SKILL_TYPES.SHIELD,
        description: "为全队提供一层厚盾（偏剧情）。",
        effect: {
          target: "allAllies",
          shieldPercent: 0.25,
          duration: 1
        }
      },
      skills: [
        {
          name: "缓慢撞击",
          type: SKILL_TYPES.ATTACK,
          power: 1.1,
          target: "singleEnemy"
        },
        {
          name: "缩壳护体",
          type: SKILL_TYPES.BUFF,
          target: "self",
          effect: { damageTakenDownPercent: 0.15, duration: 2 }
        }
      ],
      corruptedSkills: [
        {
          name: "拖延之术",
          type: SKILL_TYPES.DEBUFF,
          power: 0.3,
          target: "allAllies"
        },
        {
          name: "迟到冲击波",
          type: SKILL_TYPES.ATTACK,
          power: 1.4,
          target: "singleAlly"
        }
      ],
      artifact: {
        id: "shell_woniu",
        name: "蜗牛的小壳",
        description: "全队受到伤害 -3%。",
        effect: {
          type: "damageTakenDownPercent",
          value: 0.03
        }
      }
    },

    // ==== 春夏 ====
    chunxia: {
      id: "chunxia",
      name: "春夏",
      title: "社交悍匪",
      role: "dps",
      baseStats: { maxHp: 115, atk: 28 },
      ultimate: {
        name: "社交场一姐",
        type: SKILL_TYPES.ATTACK,
        description: "用社交压力碾压敌人，对全体造成伤害。",
        effect: {
          target: "allEnemies",
          power: 1.5
        }
      },
      skills: [
        {
          name: "敬一杯先",
          type: SKILL_TYPES.ATTACK,
          power: 1.3,
          target: "singleEnemy"
        },
        {
          name: "拉群加微信",
          type: SKILL_TYPES.BUFF,
          target: "allAllies",
          effect: { attackUpPercent: 0.1, duration: 2 }
        }
      ],
      corruptedSkills: [
        {
          name: "灵魂拷问三连",
          type: SKILL_TYPES.ATTACK,
          power: 1.4,
          target: "singleAlly"
        },
        {
          name: "话多到耳鸣",
          type: SKILL_TYPES.DEBUFF,
          power: 0.5,
          target: "allAllies"
        }
      ],
      artifact: {
        id: "earring_chunxia",
        name: "春夏的耳环",
        description: "全队攻击 +5%。",
        effect: {
          type: "flatAttackUpPercent",
          value: 0.05
        }
      }
    },

    // ==== 欧文（玩家本体） ====
    owen: {
      id: "owen",
      name: "欧文",
      title: "策划本尊 · 混合型输出",
      role: "dps",
      baseStats: { maxHp: 120, atk: 27 },
      ultimate: {
        name: "PPT 终极方案",
        type: SKILL_TYPES.ATTACK,
        description: "对单体造成极高伤害，并顺便吐槽两句。",
        effect: {
          target: "singleEnemy",
          power: 2.3
        }
      },
      skills: [
        {
          name: "临场改方案",
          type: SKILL_TYPES.ATTACK,
          power: 1.4,
          target: "singleEnemy"
        },
        {
          name: "给大家分锅",
          type: SKILL_TYPES.BUFF,
          target: "allAllies",
          effect: { attackUpPercent: 0.08, duration: 2 }
        }
      ],
      corruptedSkills: [
        {
          name: "自我怀疑循环",
          type: SKILL_TYPES.DEBUFF,
          power: 0.4,
          target: "allAllies"
        },
        {
          name: "重开一局算了",
          type: SKILL_TYPES.ATTACK,
          power: 1.5,
          target: "allAllies"
        }
      ],
      artifact: {
        id: "laptop_owen",
        name: "欧文的电脑",
        description: "全队攻击 +3%，技能触发率 +3%。",
        effect: {
          type: "composite",
          effects: [
            { type: "flatAttackUpPercent", value: 0.03 },
            { type: "skillTriggerUpPercent", value: 0.03 }
          ]
        }
      }
    }
  },

  // 特殊彩蛋神器：豪华飞舟
  specialArtifacts: {
    feizhou: {
      id: "luxury_feizhou",
      name: "豪华飞舟一辆",
      description: "小D在队伍时有概率掉落，乘坐飞舟出行，全队攻防小幅提升。",
      effect: {
        type: "composite",
        effects: [
          { type: "flatAttackUpPercent", value: 0.08 },
          { type: "damageTakenDownPercent", value: 0.05 }
        ]
      }
    }
  },

  // Boss
  boss: {
    id: "winter_boss",
    name: "冬天想吃肉又怕胖之神",
    baseStats: {
      maxHp: 800,
      atk: 32
    },
    phases: [
      {
        id: 1,
        name: "纠结形态",
        skills: [
          {
            name: "卡路里心算术",
            type: SKILL_TYPES.ATTACK,
            power: 1.1,
            target: "singleAlly"
          },
          {
            name: "吃不吃问天术",
            type: SKILL_TYPES.ATTACK,
            power: 0.6,
            target: "allAllies"
          }
        ],
        transformThresholdPercent: 0.5
      },
      {
        id: 2,
        name: "暴食妖尊",
        skills: [
          {
            name: "暴食天崩拳",
            type: SKILL_TYPES.ATTACK,
            power: 1.6,
            target: "singleAlly"
          },
          {
            name: "明天再减·回血神通",
            type: SKILL_TYPES.HEAL,
            healPercent: 0.12,
            target: "self"
          },
          {
            name: "亲戚劝吃阵",
            type: SKILL_TYPES.ATTACK,
            power: 0.9,
            target: "allAllies"
          }
        ]
      }
    ]
  }
};

// =====================
// 运行时状态：GameState
// =====================

const GameState = {
  runActive: false,
  difficulty: 1,
  team: [],
  corruptedFriends: [],
  rescuedFriends: [],
  artifacts: [],
  currentBattle: null,
  finalBossUnlocked: false,
  history: {
    battles: []
  },
  specialDrops: {
    feizhouObtained: false
  }
};

// =====================
// 战斗引擎：GameEngine
// =====================

const GameEngine = {
  // 开始新一轮
  startNewRun(difficulty = 1) {
    GameState.runActive = true;
    GameState.difficulty = difficulty;
    GameState.team = [];
    GameState.corruptedFriends = [];
    GameState.rescuedFriends = [];
    GameState.artifacts = [];
    GameState.currentBattle = null;
    GameState.finalBossUnlocked = false;
    GameState.history.battles = [];
    GameState.specialDrops = { feizhouObtained: false };
  },

  // 选人
  selectTeam(selectedIds) {
    if (!GameState.runActive) {
      throw new Error("Run 未开始");
    }
    if (!Array.isArray(selectedIds) || selectedIds.length === 0) {
      throw new Error("至少选择 1 人");
    }
    if (selectedIds.length > 3) {
      throw new Error("最多选择 3 人");
    }
    GameState.team = selectedIds.map(id => this._createHeroInstance(id, "player"));
    GameState.corruptedFriends = Object.keys(GameData.heroes).filter(
      id => !selectedIds.includes(id)
    );
    GameState.rescuedFriends = [];
  },

  // 获取可挑战目标列表
  getAvailableBattles() {
    const list = [];
    GameState.corruptedFriends.forEach(id => {
      const hero = GameData.heroes[id];
      if (!hero) return;
      list.push({
        id,
        type: "corrupted",
        name: `黑化 ${hero.name}`,
        difficultyHint: this._estimateCorruptedDifficulty(hero)
      });
    });

    const rescuedCount = GameState.rescuedFriends.length;
    const unlockNeeded = 2; // 测试用先设 2，人多了你可以改大
    const bossUnlocked = rescuedCount >= unlockNeeded;
    GameState.finalBossUnlocked = bossUnlocked;

    if (bossUnlocked) {
      list.push({
        id: GameData.boss.id,
        type: "boss",
        name: GameData.boss.name,
        difficultyHint: "最终战"
      });
    }

    return list;
  },

  // 开始一场战斗
  startBattle(targetId) {
    if (!GameState.runActive) {
      throw new Error("游戏未开始");
    }
    let enemyType = "corrupted";
    let enemyDef = null;

    if (targetId === GameData.boss.id) {
      enemyType = "boss";
      enemyDef = GameData.boss;
    } else {
      enemyDef = GameData.heroes[targetId];
    }
    if (!enemyDef) {
      throw new Error("未知敌人：" + targetId);
    }

    const difficulty = GameState.difficulty;
    let enemies = [];

    if (enemyType === "corrupted") {
      const inst = this._createCorruptedHeroInstance(enemyDef, difficulty);
      enemies.push(inst);
    } else {
      const phase = enemyDef.phases[0];
      const inst = this._createBossInstance(enemyDef, phase, difficulty);
      enemies.push(inst);
    }

    const allies = GameState.team.map(h => this._cloneHeroForBattle(h));
    const artifactEffects = this._collectArtifactEffects();

    const battleState = {
      enemyType,
      enemyId: targetId,
      enemyPhase: 1,
      enemies,
      allies,
      round: 1,
      finished: false,
      outcome: null,
      log: [],
      enemyNextIntent: null,
      artifactEffects
    };

    battleState.enemyNextIntent = this._decideEnemyIntent(battleState);
    GameState.currentBattle = battleState;
    return battleState;
  },

  // 执行一回合
  performTurn(options = {}) {
    const battle = GameState.currentBattle;
    if (!battle || battle.finished) {
      throw new Error("当前没有战斗或战斗已结束");
    }

    const formation = options.formation || FORMATIONS.BALANCED;
    const useUlt = options.useUltimates || {};

    this._log(battle, `—— 第 ${battle.round} 回合 ——`);

    this._alliesAct(battle, formation, useUlt);

    if (!this._anyAlive(battle.enemies)) {
      battle.finished = true;
      battle.outcome = "win";
      this._log(battle, "敌方全灭，本场战斗胜利！");
      this._onBattleEnd();
      return battle;
    }

    this._enemiesAct(battle);

    if (!this._anyAlive(battle.allies)) {
      battle.finished = true;
      battle.outcome = "lose";
      this._log(battle, "我方全部倒下，本场战斗失败。");
      this._onBattleEnd();
      return battle;
    }

    this._endOfTurn(battle);

    if (battle.enemyType === "boss") {
      this._checkBossPhaseChange(battle);
    }

    battle.round += 1;
    battle.enemyNextIntent = this._decideEnemyIntent(battle);
    return battle;
  },

  // 战斗结束后：救援 / 掉落
  _onBattleEnd() {
    const battle = GameState.currentBattle;
    if (!battle) return;

    GameState.history.battles.push({
      enemyType: battle.enemyType,
      enemyId: battle.enemyId,
      outcome: battle.outcome,
      rounds: battle.round
    });

    if (battle.outcome === "win" && battle.enemyType === "corrupted") {
      const heroId = battle.enemyId;
      const heroDef = GameData.heroes[heroId];

      GameState.corruptedFriends = GameState.corruptedFriends.filter(
        id => id !== heroId
      );
      if (!GameState.rescuedFriends.includes(heroId)) {
        GameState.rescuedFriends.push(heroId);
      }
      if (heroDef && heroDef.artifact) {
        GameState.artifacts.push(heroDef.artifact);
        this._log(
          battle,
          `你成功救回了【${heroDef.name}】，并获得了专属道具「${heroDef.artifact.name}」！`
        );
      }
    }

    // 小D 豪华飞舟彩蛋
    if (battle.outcome === "win") {
      this._tryDropFeizhou(battle);
    }

    if (battle.outcome === "win" && battle.enemyType === "boss") {
      GameState.runActive = false;
      this._log(battle, "恭喜你们战胜了冬天想吃肉又怕胖之神！这一局完结。");
    }
  },

  _tryDropFeizhou(battle) {
    if (GameState.specialDrops.feizhouObtained) return;
    const hasXiaoD = GameState.team.some(h => h.id === "xiaoD");
    if (!hasXiaoD) return;

    const dropChance = 0.15;
    if (Math.random() > dropChance) return;

    const feizhou = GameData.specialArtifacts.feizhou;
    if (!feizhou) return;

    GameState.specialDrops.feizhouObtained = true;
    GameState.artifacts.push(feizhou);
    this._log(
      battle,
      "由于小D静静在队里撑场，这局结束后天边传来轰鸣——你们获得了「豪华飞舟一辆」！全队攻防全面小幅提升。"
    );
  },

  // 工具函数们 ==================

  _createHeroInstance(heroId, side) {
    const def = GameData.heroes[heroId];
    if (!def) throw new Error("Unknown hero: " + heroId);
    return {
      id: def.id,
      name: def.name,
      title: def.title,
      role: def.role,
      side,
      maxHp: def.baseStats.maxHp,
      hp: def.baseStats.maxHp,
      atk: def.baseStats.atk,
      ultimate: def.ultimate,
      ultimateUsed: false,
      skills: def.skills || [],
      corruptedSkills: def.corruptedSkills || [],
      buffs: [],
      debuffs: [],
      extraAttackPercent: 0,
      damageReductionPercent: 0
    };
  },

  _createCorruptedHeroInstance(def, difficulty) {
    const inst = this._createHeroInstance(def.id, "enemy");
    inst.name = "黑化 " + def.name;
    inst.maxHp = Math.round(inst.maxHp * (0.8 + difficulty));
    inst.hp = inst.maxHp;
    inst.atk = Math.round(inst.atk * (0.9 + difficulty));
    inst.skills = def.corruptedSkills || [];
    inst.isCorruptedHero = true;
    return inst;
  },

  _createBossInstance(bossDef, phaseDef, difficulty) {
    return {
      id: bossDef.id,
      name: `${bossDef.name} · ${phaseDef.name}`,
      side: "enemy",
      maxHp: Math.round(bossDef.baseStats.maxHp * difficulty),
      hp: Math.round(bossDef.baseStats.maxHp * difficulty),
      atk: Math.round(bossDef.baseStats.atk * (0.9 + difficulty)),
      skills: phaseDef.skills,
      buffs: [],
      debuffs: [],
      isBoss: true
    };
  },

  _cloneHeroForBattle(hero) {
    return {
      ...hero,
      hp: hero.maxHp,
      buffs: [],
      debuffs: [],
      ultimateUsed: false,
      extraAttackPercent: 0,
      damageReductionPercent: 0
    };
  },

  _collectArtifactEffects() {
    const effects = {
      firstHitDamageReduction: 0,
      skillTriggerUpPercent: 0,
      flatAttackUpPercent: 0,
      regenPerTurn: 0,
      damageTakenDownPercent: 0,
      healBonusPercent: 0,
      critChanceUpPercent: 0,
      critDamageUpPercent: 0
    };

    GameState.artifacts.forEach(a => {
      const e = a.effect;
      if (!e) return;

      const applySingle = (eff) => {
        switch (eff.type) {
          case "firstHitDamageReduction":
            effects.firstHitDamageReduction = Math.max(
              effects.firstHitDamageReduction,
              eff.value
            );
            break;
          case "skillTriggerUpPercent":
            effects.skillTriggerUpPercent += eff.value;
            break;
          case "flatAttackUpPercent":
            effects.flatAttackUpPercent += eff.value;
            break;
          case "regenPerTurn":
            effects.regenPerTurn += eff.value;
            break;
          case "damageTakenDownPercent":
            effects.damageTakenDownPercent += eff.value;
            break;
          case "healBonusPercent":
            effects.healBonusPercent += eff.value;
            break;
          case "critChanceUpPercent":
            effects.critChanceUpPercent += eff.value;
            break;
          case "critDamageUpPercent":
            effects.critDamageUpPercent += eff.value;
            break;
          default:
            break;
        }
      };

      if (e.type === "composite" && Array.isArray(e.effects)) {
        e.effects.forEach(sub => applySingle(sub));
      } else {
        applySingle(e);
      }
    });

    return effects;
  },

  _estimateCorruptedDifficulty(heroDef) {
    const hp = heroDef.baseStats.maxHp;
    const atk = heroDef.baseStats.atk;
    const score = hp + atk * 3;
    if (score < 200) return "★";
    if (score < 260) return "★★";
    return "★★★";
  },

  _anyAlive(units) {
    return units.some(u => u.hp > 0);
  },

  _log(battle, text) {
    battle.log.push(text);
  },

  _decideEnemyIntent(battle) {
    const enemy = battle.enemies.find(e => e.hp > 0);
    if (!enemy) return null;
    const skills = enemy.skills || [];
    if (!skills.length) return null;
    const skill = skills[Math.floor(Math.random() * skills.length)];
    return {
      skillName: skill.name,
      type: skill.type,
      target: skill.target
    };
  },

  _alliesAct(battle, formation, useUlt) {
    const allies = battle.allies.filter(a => a.hp > 0);
    const artifactEffects = battle.artifactEffects;

    allies.forEach(hero => {
      if (hero.hp <= 0) return;
      if (useUlt[hero.id] && !hero.ultimateUsed && hero.ultimate) {
        this._castUltimate(hero, battle, formation, artifactEffects);
        hero.ultimateUsed = true;
      } else {
        this._autoHeroAction(hero, battle, formation, artifactEffects);
      }
    });
  },

  _castUltimate(hero, battle, formation, artifactEffects) {
    const ult = hero.ultimate;
    if (!ult) return;
    this._log(battle, `${hero.name} 释放主动技【${ult.name}】！`);
    this._applySkillEffect(hero, battle, ult, {
      isUltimate: true,
      formation,
      artifactEffects,
      attackMultiplier: 1.2
    });
  },

  _autoHeroAction(hero, battle, formation, artifactEffects) {
    const skills = hero.skills || [];
    const enemies = battle.enemies.filter(e => e.hp > 0);
    if (!enemies.length) return;

    let attackMultiplier = 1;
    let damageTakenDown = 0;
    if (formation === FORMATIONS.AGGRESSIVE) {
      attackMultiplier = 1.3;
    } else if (formation === FORMATIONS.DEFENSIVE) {
      attackMultiplier = 0.9;
      damageTakenDown = 0.2;
    }
    hero.damageReductionPercent = damageTakenDown;

    let skill = null;
    if (skills.length && Math.random() < 0.7) {
      skill = skills[Math.floor(Math.random() * skills.length)];
    }

    if (!skill) {
      const target = enemies[Math.floor(Math.random() * enemies.length)];
      const dmg = this._calcDamage(hero, target, {
        power: 1.0,
        formationMultiplier: attackMultiplier,
        artifactEffects
      });
      target.hp = Math.max(0, target.hp - dmg);
      this._log(
        battle,
        `${hero.name} 使用普攻攻击了 ${target.name}，造成 ${dmg} 点伤害。`
      );
      return;
    }

    this._log(battle, `${hero.name} 使用技能【${skill.name}】！`);
    this._applySkillEffect(hero, battle, skill, {
      formation,
      artifactEffects,
      attackMultiplier
    });
  },

  _enemiesAct(battle) {
    const enemies = battle.enemies.filter(e => e.hp > 0);
    const allies = battle.allies.filter(a => a.hp > 0);
    if (!enemies.length || !allies.length) return;

    const enemy = enemies[0];
    const skills = enemy.skills || [];
    if (!skills.length) return;

    const skill = skills[Math.floor(Math.random() * skills.length)];
    this._log(battle, `${enemy.name} 准备施放【${skill.name}】！`);
    this._applyEnemySkill(enemy, battle, skill);
  },

  _applyEnemySkill(enemy, battle, skill) {
    const allies = battle.allies.filter(a => a.hp > 0);
    if (!allies.length) return;
    const artifactEffects = battle.artifactEffects || {};

    if (skill.target === "singleAlly" || !skill.target) {
      const target = allies[Math.floor(Math.random() * allies.length)];
      const dmg = this._calcDamage(enemy, target, {
        power: skill.power || 1.0,
        isEnemy: true,
        artifactEffects
      });
      target.hp = Math.max(0, target.hp - dmg);
      this._log(
        battle,
        `${enemy.name} 对 ${target.name} 造成了 ${dmg} 点伤害。`
      );
    } else if (skill.target === "allAllies") {
      let total = 0;
      allies.forEach(a => {
        const dmg = this._calcDamage(enemy, a, {
          power: skill.power || 0.7,
          isEnemy: true,
          artifactEffects
        });
        a.hp = Math.max(0, a.hp - dmg);
        total += dmg;
      });
      this._log(
        battle,
        `${enemy.name} 对全队发动攻击，共造成 ${total} 点伤害。`
      );
    }
  },

  _applySkillEffect(caster, battle, skill, context) {
    const enemies = battle.enemies.filter(e => e.hp > 0);
    const allies = battle.allies.filter(a => a.hp > 0);
    const artifactEffects = context.artifactEffects || {};

    if (skill.type === SKILL_TYPES.ATTACK) {
      if (skill.target === "singleEnemy" || !skill.target) {
        const target = enemies[Math.floor(Math.random() * enemies.length)];
        const dmg = this._calcDamage(caster, target, {
          power: skill.power || 1.0,
          formationMultiplier: context.attackMultiplier || 1,
          artifactEffects
        });
        target.hp = Math.max(0, target.hp - dmg);
        this._log(
          battle,
          `${caster.name} 对 ${target.name} 造成了 ${dmg} 点伤害。`
        );
      } else if (skill.target === "allEnemies") {
        let total = 0;
        enemies.forEach(e => {
          const dmg = this._calcDamage(caster, e, {
            power: skill.power || 0.7,
            formationMultiplier: context.attackMultiplier || 1,
            artifactEffects
          });
          e.hp = Math.max(0, e.hp - dmg);
          total += dmg;
        });
        this._log(
          battle,
          `${caster.name} 对所有敌人造成了总计 ${total} 点伤害。`
        );
      }
    }

    if (skill.type === SKILL_TYPES.HEAL) {
      const healBonus = (battle.artifactEffects.healBonusPercent || 0);
      if (skill.target === "allAllies") {
        let total = 0;
        allies.forEach(a => {
          const healAmount = Math.round(
            a.maxHp * (skill.healPercent || skill.power || 0.2) *
            (1 + healBonus)
          );
          a.hp = Math.min(a.maxHp, a.hp + healAmount);
          total += healAmount;
        });
        this._log(
          battle,
          `${caster.name} 治疗了全队，总计回复 ${total} 点生命。`
        );
      } else {
        const target =
          skill.target === "lowestHpAlly"
            ? allies.reduce((min, x) =>
              x.hp / x.maxHp < min.hp / min.maxHp ? x : min
            )
            : allies[Math.floor(Math.random() * allies.length)];
        const healAmount = Math.round(
          target.maxHp * (skill.healPercent || skill.power || 0.3) *
          (1 + healBonus)
        );
        target.hp = Math.min(target.maxHp, target.hp + healAmount);
        this._log(
          battle,
          `${caster.name} 为 ${target.name} 回复了 ${healAmount} 点生命。`
        );
      }
    }
  },

  _calcDamage(attacker, target, options = {}) {
    const power = options.power || 1.0;
    const formationMul = options.formationMultiplier || 1.0;
    const atkBase = attacker.atk || 20;
    const artifactEffect = options.artifactEffects || {};
    const extraAtkPercent =
      (attacker.extraAttackPercent || 0) +
      (artifactEffect.flatAttackUpPercent || 0);

    let dmg =
      atkBase *
      (1 + extraAtkPercent) *
      power *
      formationMul *
      (0.9 + Math.random() * 0.2);

    if (options.isEnemy) {
      const dmgDown = artifactEffect.damageTakenDownPercent || 0;
      dmg = dmg * (1 - dmgDown);
    }

    return Math.max(1, Math.round(dmg));
  },

  _endOfTurn(battle) {
    const allies = battle.allies;
    const effects = battle.artifactEffects;

    if (effects.regenPerTurn) {
      let total = 0;
      allies.forEach(a => {
        if (a.hp <= 0) return;
        const heal = Math.round(a.maxHp * effects.regenPerTurn);
        a.hp = Math.min(a.maxHp, a.hp + heal);
        total += heal;
      });
      if (total > 0) {
        this._log(
          battle,
          `私人用品生效：本回合结束全队合计回复 ${total} 点生命。`
        );
      }
    }
  },

  _checkBossPhaseChange(battle) {
    const boss = battle.enemies[0];
    if (!boss || !boss.isBoss) return;
    const bossDef = GameData.boss;
    if (battle.enemyPhase === 1) {
      const threshold = bossDef.phases[0].transformThresholdPercent || 0.5;
      if (boss.hp <= boss.maxHp * threshold) {
        const phase2 = bossDef.phases[1];
        boss.name = `${bossDef.name} · ${phase2.name}`;
        boss.skills = phase2.skills;
        battle.enemyPhase = 2;
        this._log(
          battle,
          `${boss.name} 暴怒变身，进入第二阶段！`
        );
      }
    }
  }
};

// =====================
// UI 绑定逻辑
// =====================

document.addEventListener("DOMContentLoaded", () => {
  const secMenu = document.getElementById("section-menu");
  const secSelect = document.getElementById("section-select");
  const secMap = document.getElementById("section-map");
  const secBattle = document.getElementById("section-battle");

  const btnGoSelect = document.getElementById("btn-go-select");
  const btnBackMenu = document.getElementById("btn-back-menu");
  const btnStartRun = document.getElementById("btn-start-run");
  const btnBackSelect = document.getElementById("btn-back-select");
  const btnPerformTurn = document.getElementById("btn-perform-turn");
  const btnExitBattle = document.getElementById("btn-exit-battle");

  const heroListEl = document.getElementById("hero-list");
  const selectedCountEl = document.getElementById("selected-count");
  const teamStatusEl = document.getElementById("team-status");
  const artifactListEl = document.getElementById("artifact-list");
  const battleListEl = document.getElementById("battle-list");
  const battleHeaderEl = document.getElementById("battle-header");
  const enemyInfoEl = document.getElementById("enemy-info");
  const enemyIntentEl = document.getElementById("enemy-intent");
  const allyInfoEl = document.getElementById("ally-info");
  const ultControlsEl = document.getElementById("ultimate-controls");
  const battleLogEl = document.getElementById("battle-log");

  // 初始化英雄选项
  function renderHeroSelection() {
    heroListEl.innerHTML = "";
    const heroes = GameData.heroes;
    Object.keys(heroes).forEach(id => {
      const h = heroes[id];
      const card = document.createElement("label");
      card.className = "hero-card";
      card.innerHTML = `
        <input type="checkbox" class="hero-select" value="${h.id}">
        <div class="hero-main">
          <div class="hero-name">${h.name}</div>
          <div class="hero-tags">
            <span class="tag">${h.title || ""}</span>
            <span class="tag secondary">${h.role || ""}</span>
          </div>
          <div class="hero-desc">${h.desc || ""}</div>
          <div class="hero-stat">HP ${h.baseStats.maxHp} · ATK ${h.baseStats.atk}</div>
        </div>
      `;
      heroListEl.appendChild(card);
    });
    updateSelectedCount();
  }

  function getSelectedHeroIds() {
    return Array.from(
      heroListEl.querySelectorAll(".hero-select:checked")
    ).map(el => el.value);
  }

  function updateSelectedCount() {
    const count = getSelectedHeroIds().length;
    selectedCountEl.textContent = `已选 ${count} / 3 人`;
  }

  heroListEl.addEventListener("change", () => {
    const ids = getSelectedHeroIds();
    if (ids.length > 3) {
      // 只允许 3 个，多选的直接取消
      const lastChecked = heroListEl.querySelector(
        `.hero-select[value="${ids[ids.length - 1]}"]`
      );
      if (lastChecked) lastChecked.checked = false;
    }
    updateSelectedCount();
  });

  // 显示某个 section
  function showSection(name) {
    secMenu.classList.add("hidden");
    secSelect.classList.add("hidden");
    secMap.classList.add("hidden");
    secBattle.classList.add("hidden");
    if (name === "menu") secMenu.classList.remove("hidden");
    if (name === "select") secSelect.classList.remove("hidden");
    if (name === "map") secMap.classList.remove("hidden");
    if (name === "battle") secBattle.classList.remove("hidden");
  }

  // 刷新队伍、道具、可挑战战斗列表
  function renderTeamStatus() {
    teamStatusEl.innerHTML = "";
    if (!GameState.team.length) {
      teamStatusEl.textContent = "当前没有队伍。";
      return;
    }
    GameState.team.forEach(h => {
      const div = document.createElement("div");
      div.className = "team-member";
      div.innerHTML = `
        <div><strong>${h.name}</strong> (${h.title || ""})</div>
        <span>HP ${h.maxHp} · ATK ${h.atk}</span>
      `;
      teamStatusEl.appendChild(div);
    });
  }

  function renderArtifacts() {
    artifactListEl.innerHTML = "";
    if (!GameState.artifacts.length && !GameState.specialDrops.feizhouObtained) {
      artifactListEl.innerHTML = "<li>暂无，打赢战斗后有机会获得私人用品。</li>";
      return;
    }
    GameState.artifacts.forEach(a => {
      const li = document.createElement("li");
      li.textContent = `「${a.name}」：${a.description || ""}`;
      artifactListEl.appendChild(li);
    });
  }

  function renderBattleList() {
    battleListEl.innerHTML = "";
    const battles = GameEngine.getAvailableBattles();
    if (!battles.length) {
      battleListEl.textContent = "暂无可挑战目标，可以直接去找 Boss 或者先多加些角色配置。";
      return;
    }

    battles.forEach(b => {
      const div = document.createElement("div");
      div.className = "battle-item";
      const main = document.createElement("div");
      main.className = "battle-item-main";
      main.innerHTML = `
        <div><strong>${b.name}</strong></div>
        <div style="font-size:12px;color:#777;">类型：${b.type === "boss" ? "最终 Boss" : "黑化好友"} · 难度：${b.difficultyHint}</div>
      `;
      const btn = document.createElement("button");
      btn.className = "btn-primary";
      btn.textContent = "挑战";
      btn.addEventListener("click", () => {
        GameEngine.startBattle(b.id);
        renderBattleUI();
        showSection("battle");
      });
      div.appendChild(main);
      div.appendChild(btn);
      battleListEl.appendChild(div);
    });
  }

  // 渲染战斗界面
  function renderBattleUI() {
    const battle = GameState.currentBattle;
    battleLogEl.innerHTML = "";
    if (!battle) {
      battleHeaderEl.textContent = "暂无战斗";
      enemyInfoEl.innerHTML = "";
      allyInfoEl.innerHTML = "";
      enemyIntentEl.textContent = "";
      ultControlsEl.innerHTML = "";
      return;
    }

    // 头部
    const label = battle.enemyType === "boss" ? "最终决战" : "黑化好友战";
    battleHeaderEl.textContent = `${label} · 回合 ${battle.round}`;

    // 敌人信息
    const enemy = battle.enemies[0];
    const hpPercent = Math.max(0, Math.round((enemy.hp / enemy.maxHp) * 100));
    enemyInfoEl.innerHTML = `
      <div><strong>敌人：</strong>${enemy.name}</div>
      <div class="hp-bar-wrapper">
        <div class="hp-bar" style="width:${hpPercent}%;"></div>
      </div>
      <div class="hp-text">HP ${enemy.hp} / ${enemy.maxHp}</div>
    `;

    // 敌方意图
    if (battle.enemyNextIntent) {
      const t = battle.enemyNextIntent;
      enemyIntentEl.textContent = `下回合意图：${t.skillName}（${t.type}）`;
    } else {
      enemyIntentEl.textContent = "";
    }

    // 我方信息
    allyInfoEl.innerHTML = "";
    battle.allies.forEach(a => {
      const hpP = Math.max(0, Math.round((a.hp / a.maxHp) * 100));
      const row = document.createElement("div");
      row.className = "ally-row";
      row.innerHTML = `
        <div class="ally-name">${a.name}</div>
        <div class="hp-bar-wrapper">
          <div class="hp-bar" style="width:${hpP}%;"></div>
        </div>
        <div class="hp-text">HP ${a.hp} / ${a.maxHp}</div>
      `;
      allyInfoEl.appendChild(row);
    });

    // 主动技控制
    ultControlsEl.innerHTML = "";
    battle.allies.forEach(a => {
      if (!a.ultimate) return;
      const chip = document.createElement("label");
      chip.className = "ult-chip";
      if (a.ultimateUsed) chip.classList.add("used");
      chip.innerHTML = `
        <input type="checkbox" data-hero-id="${a.id}" ${a.ultimateUsed ? "disabled" : ""}>
        ${a.name}：${a.ultimate.name}
      `;
      ultControlsEl.appendChild(chip);
    });

    // 日志
    battle.log.forEach(line => {
      const p = document.createElement("p");
      p.textContent = line;
      battleLogEl.appendChild(p);
    });
    battleLogEl.scrollTop = battleLogEl.scrollHeight;

    // 按钮状态
    if (battle.finished) {
      btnPerformTurn.disabled = true;
    } else {
      btnPerformTurn.disabled = false;
    }
  }

  // 事件绑定 ===================

  btnGoSelect.addEventListener("click", () => {
    showSection("select");
  });

  btnBackMenu.addEventListener("click", () => {
    showSection("menu");
  });

  btnStartRun.addEventListener("click", () => {
    const ids = getSelectedHeroIds();
    if (!ids.length) {
      alert("至少选择 1 人");
      return;
    }
    if (ids.length > 3) {
      alert("最多 3 人");
      return;
    }
    GameEngine.startNewRun(1); // 难度先写死 1
    GameEngine.selectTeam(ids);
    renderTeamStatus();
    renderArtifacts();
    renderBattleList();
    showSection("map");
  });

  btnBackSelect.addEventListener("click", () => {
    if (!confirm("重新选人会重置本轮进度，确认？")) return;
    GameEngine.startNewRun(1);
    renderHeroSelection();
    showSection("select");
  });

  btnPerformTurn.addEventListener("click", () => {
    const battle = GameState.currentBattle;
    if (!battle || battle.finished) return;

    const formation = document.querySelector('input[name="formation"]:checked')?.value || "balanced";
    const useUlt = {};
    ultControlsEl.querySelectorAll("input[type='checkbox']").forEach(chk => {
      if (chk.checked && !chk.disabled) {
        useUlt[chk.getAttribute("data-hero-id")] = true;
      }
    });

    try {
      GameEngine.performTurn({
        formation,
        useUltimates: useUlt
      });
      renderBattleUI();
      // 回合结束后，取消所有主动技勾选
      ultControlsEl.querySelectorAll("input[type='checkbox']").forEach(chk => {
        chk.checked = false;
      });
      // 如果战斗结束，顺便刷新地图（救援 / 道具变化）
      if (GameState.currentBattle && GameState.currentBattle.finished) {
        renderTeamStatus();
        renderArtifacts();
        renderBattleList();
      }
    } catch (e) {
      console.error(e);
      alert("执行回合时出错：" + e.message);
    }
  });

  btnExitBattle.addEventListener("click", () => {
    GameState.currentBattle = null;
    renderBattleUI();
    renderTeamStatus();
    renderArtifacts();
    renderBattleList();
    showSection("map");
  });

  // 初始渲染
  renderHeroSelection();
  showSection("menu");
});
