import { Script } from '../../app/game';

/* tslint:disable */
export const loveStory: Script = {
  firstEventTitle: '妈的电话5',
  events: [
    {
      title: '1',
      description: '阿华说要晚些来接我。',
      nextEventTitle: '阿华来了',
      updateNotes: [
        {
          title: '阿华',
          description: `阿华是我第一份工的同事，听说了聚餐的事情，主动来找我讲话，一来二去也就熟了。`
        },
        {
          title: '我的婚姻',
          description: `我是有丈夫的，结婚六年，他叫简宁。阿华不知道我结过婚。`
        }
      ]
    },
    {
      title: '阿华来了',
      description: '八点，阿华给我发消息，说已在门口等。',
      actions: [
        {
          title: '换了身衣服就出门',
          triggerEventTitle: '出门'
        }
      ]
    },
    {
      title: '出门',
      description: `梅雨刚过，不再笼着热。
      他穿着白得发亮的短袖T恤衫、破洞牛仔裤，倚在厂门口的树底下看手机。
      `,
      actions: [
        {
          title: '朝他那边走过去',
          triggerEventTitle: '袜子1'
        }
      ]
    },
    {
      title: '袜子1',
      description: `我还没走近，他抬头看见我，递来一个黑色塑料袋：“新花式。”
      `,
      actions: [
        {
          title: '“我那里好多新的都没穿，以后不要再给我拿啦。”',
          triggerEventTitle: '袜子2'
        },
        {
          title: '收下袜子',
          triggerEventTitle: '上车'
        }
      ],
      updateNotes: [
        {
          title: '阿华的袜子',
          description: `阿华的厂是袜厂，他常拣些袜子送我。`
        }
      ]
    },
    {
      title: '袜子2',
      description: `他眼睛一闪，有些不好意思：“我也没什么好给你的。”`,
      actions: [
        {
          title: '收下袜子',
          triggerEventTitle: '上车'
        }
      ]
    },
    {
      title: '上车',
      description: `他把头盔给我戴上，说：“今天去吃好一点的馆子。”`,
      actions: [
        {
          title: '坐上了他的车后座',
          triggerEventTitle: '路上'
        }
      ]
    },
    {
      title: '路上',
      description: `厂门口的一条街上有七八家用玻璃箱推车卖炒饭炒面的小贩，许多人围着买吃食，吃完了要回去上夜班。阿华握着车把手，用脚划拉着地面，我们好一会才歪歪扭扭地从人堆里钻出来。出了人群，阿华稍稍加速。夜幕低垂，沿途的路灯哀哀地照亮我们。
      `,
      actions: [
        {
          title: '想起阿华给我讲他小时候的事儿',
          openMind:  `阿华比我小两岁，来自浙江小城，家里有哥哥姐姐。他有时给我讲童年趣事，如何被姐姐扮成《白蛇传》里的青儿，一家人一团和气。
          我是独生女，感受不到这些，只是联想到父母老了，膝下再无别人，我舍了他们出来，将来怎么样，我是管不了的。`,
          triggerEventTitle: '下馆子'
        }
      ],
      nextEventTitle: '下馆子',
    },
    {
      title: '下馆子',
      description: `这边好一点的馆子，除了江鲜馆，多是川湘菜。挑了一家装潢比普通好些的馆子进去。`,
      nextEventTitle: '吃辣1'
    },
    {
      title: '吃辣1',
      description: `阿华点常规的泡椒牛蛙、水煮肉片、炝炒空心菜和番茄蛋汤。大粒的汗水从他额头上往下淌。
      `,
      actions: [
        {
          title: '“涮白开水吧”',
          triggerEventTitle: '吃辣2'
        }
      ]
    },
    {
      title: '吃辣2',
      description: `他不肯。他根本吃不了辣，辣味实际上是一种痛觉，他这样努力去克服，是要我知道他的心意。
      `,
      nextEventTitle: '五百天'
    },
    {
      title: '五百天',
      description: `他停下来喝水，拿出手机给我看一个记日子的app，在一起五百天了。`,
      actions: [
        {
          title: '我笑说：“这么久了。”',
          triggerEventTitle: '庆祝'
        }
      ]
    },
    {
      title: '庆祝',
      description: `他喜滋滋：“所以今天要庆祝。”然后拿出来一个首饰盒。
      `,
      actions: [
        {
          title: '打开看',
          triggerEventTitle: '项链'
        }
      ]
    },
    {
      title: '项链',
      description: `是一条赭红金色项链。他说：“这是彩金的，以后再给你买金的。现在戴上？”
      `,
      actions: [
        {
          title: '“你忘了我戴着一个，这个先收起来吧。谢谢你。”',
          triggerEventTitle: '回家'
        }
      ],
      updateNotes: [
        {
          title: '我脖子上的白玉',
          description: '简宁在外躲的那一年七夕，有个小孩来敲门，交给我一个小红布袋子，说有人给了五块钱让他送。我下楼去，没找见他。那布包里有一块圆圆的温润白玉，中间一个小孔穿着红线，我现在还挂在颈子上。'
        },
      ]
    },
    {
      title: '回家',
      description: `阿华看着我收起盒子，说：“我下个月要回家一趟，你要不要跟我一起？”
      他有一双黑亮的眸子，这种时刻我是怕它们的。
      `,
      actions: [
        {
          title: '低头吃菜，“不要这么快吧。”',
          triggerEventTitle: '哪里快'
        },
        {
          title: '看着桌子，“现在还早吧。”',
          triggerEventTitle: '去上海'
        }
      ]
    },
    {
      title: '哪里快',
      description: `“不快啊，哪里快？那我们去成都，我去你家。”
      `,
      actions: [
        {
          title: '看着桌子，“现在还早吧。”',
          triggerEventTitle: '去上海'
        }
      ]
    },
    {
      title: '去上海',
      description: `阿华说：“我讲我要努力工作的呀，我家里么还能给我些钱，你要愿意的话，我们去苏州、杭州、去上海，我去做销售。”
      `,
      actions: [
        {
          title: '拿筷子在碗里捣，“跟钱没关系，说了多少遍了。”',
          openMind: '早几年阿华的哥哥一直让他去上海卖二手房，不要在工厂里待着，他没去，后来遇到我，更不愿走。',
          triggerEventTitle: '我们会结婚的'
        }
      ]
    },
    {
      title: '我们会结婚的',
      description: `他语气更软了些：“好好好，你不要不高兴，”又像对自己说，“我们会结婚的，会结婚的。”
      `,
      actions: [
        {
          title: '我忽然觉得他像条狗，说：“你有出息吗，才多大这么着急结婚？”',
          triggerEventTitle: '心虚'
        },
      ],
    },
    {
      title: '心虚',
      description: `我自己愈是心虚，愈要收敛爱意、虚张声势。我有丈夫在牢里，总有一天他要来找我，我可能还爱他，也不能让他知道你。这些话哪里能讲。
      阿华蔫了，说：“人有了感情就想结婚，不对吗？”
      `,
      actions: [
        {
          title: '“你还小，现在这样想，以后想法会变的。”',
          triggerEventTitle: '闷着'
        },
      ],
    },
    {
      title: '闷着',
      description: `他不说话，我们都闷着，他最恨我把他当小孩。
      `,
      actions: [
        {
          title: '继续沉默',
          triggerEventTitle: '一起住1'
        },
      ],
    },
    {
      title: '一起住1',
      description: `过了一会儿他说：“那你搬来和我住？”
      `,
      actions: [
        {
          title: '不吭声',
          openMind: `阿华的住处我常去。他与人合租，客厅隔出来一间带落地窗阳台的，显得明亮宽敞。阿华单独住这一间。另外两间各住了两三个人，都在园区上班。他以前也同几个人合租一个房间，我们在一起后，房租到期他就换了这一间独住。我和简宁结婚时没有自己的房子，他出走后，我还住父母家。到这为了节省，与人合租一间。所以我有时去阿华那过夜，似享用豪宅，想天下之大我竟也能做了一间屋子的女主人。
          阿华一直要我搬去和他同住，一方面不要我与别人合住一屋，另外也是要替我省钱。但我有秘密，我自己的床铺好比我保守秘密的洞穴，使我随时有退路。`,
          triggerEventTitle: '一起住2'
        }
      ],
    },
    {
      title: '一起住2',
      description: `阿华说：“你为什么跑这么远来这地方上班？为什么从来不和我说家里的事？”
      `,
      actions: [
        {
          title: '“跟你讲过的，我毕业后开花店，生意做不下去就出来了。”',
          triggerEventTitle: '不说家里事2'
        },
      ],
    },
    {
      title: '不说家里事2',
      description: `“那你家里的事呢？”
      `,
      actions: [
        {
          title: '“你想知道什么？我父母？你又不认识他们。”',
          triggerEventTitle: '空心人'
        },
      ],
    },
    {
      title: '空心人',
      description: `阿华叹一口气，说：“你真是没有心的空心人。”
      `,
      actions: [
        {
          title: '我把筷子往桌上一放：“不吃了，去你那里。”',
          triggerEventTitle: '洗澡'
        },
      ],
    },
    {
      title: '洗澡',
      description: `洗完澡已十一点过。阿华也去洗，跟我说：“你手机刚才一直响。”
      `,
      actions: [
        {
          title: '拿过手机',
          triggerEventTitle: '妈的电话1'
        },
      ],
    },
    {
      title: '妈的电话1',
      description: `电话又打过来了，是我妈，她声音有点急：“哎呀，你总算接了。简宁爸爸今天来了，刚刚走。”
      `,
      actions: [
        {
          title: '“他来干啥？”',
          triggerEventTitle: '妈的电话2'
        },
      ],
    },
    {
      title: '妈的电话2',
      description: `“提了一堆东西，说不晓得啷个联系你，请你抽空去看简宁，说他表现得好，可以提前出来，出来了还是想和你好好过。”
      `,
      actions: [
        {
          title: '“亏他说得出恁种话。你们啷个说？”',
          triggerEventTitle: '妈的电话3'
        },
      ],
    },
    {
      title: '妈的电话3',
      description: `“老简也不容易嘛，我们还不是不好当到说啥子……简宁妈妈查出来肝癌晚期。”
      `,
      actions: [
        {
          title: '我心上骨碌一下地震了，问：“啥时候？”',
          triggerEventTitle: '妈的电话4'
        },
      ],
    },
    {
      title: '妈的电话4',
      description: `“查出来两个月了，一直在住院。估计是想儿子想的个。我和你爸明天去医院看她，准备拿五千块钱。”
      `,
      actions: [
        {
          title: '“简宁晓得吗？”',
          triggerEventTitle: '妈的电话5'
        },
      ],
    },
    {
      title: '妈的电话5',
      description: `“他晓得有用吗，他爸的意思是最后快不行了再说。”
      我妈又说：“你各人就当不晓得情况，趁现在断了，免得他出来柳到费（方言，“纠缠不清”）。”
      `,
      actions: [
        {
          title: '“提前出来是啷个回事？”',
          triggerEventTitle: '妈的电话6'
        },
      ],
    },
    {
      title: '妈的电话6',
      description: `“表现好减刑了嘛，最迟明年底吧。他个棒老二（方言，“土匪、强盗”），出来也跟人合不拢。”
      `,
      nextEventTitle: '妈的电话7'
    },
    {
      title: '妈的电话7',
      description: `“你搞快点儿，我怕他到时候提前出来，你们反而不好离了。当初我就说，你们恁个不得行。”
      `,
      actions: [
        {
          title: '“晓得了，你跟爸照顾好身体。”',
          triggerEventTitle: '挂完电话1'
        },
        {
          title: '回想起简宁的父母',
          openMind: `第一次见他们时，是在外面的饭馆，全程都是他爸妈自顾聊天，似乎我不存在。吃完饭到他家楼下站了一会儿说话，他母亲也没叫我上楼，我自知没趣，告了辞。等到后来简宁要去我家，他妈妈拿了一盒开过的凤梨酥给我们，让带给我爸妈。简宁有一回扁桃体发炎引起发烧，他妈妈也怪到我头上，说是接送我太辛苦。这些事简宁都清楚，他不放在心上，我亦不便挂怀。简宁叛逆，我们背着他母亲结婚，先斩后奏，他父亲的意见我也从来不知道。
          简宁失踪以后，他妈妈恨我，说是因为和我结婚坏的事，又不信简宁怎会有仇家，更不至于犯案子。现在她得了癌症，恐怕肇事者也有我的一份。她若知道我到一个三四线的城市工厂上班，或许要拍手称快，又要替简宁不平。`,
          triggerEventTitle: '挂完电话1'
        },
      ],
    },
    {
      title: '挂完电话1',
      description: `阿华洗澡出来，一边擦着头，一边问我：“家里有什么事吗？”`,
      actions: [
        {
          title: '“一个亲戚得了癌症，晚期。”',
          triggerEventTitle: '挂完电话2'
        },
      ],
    },
    {
      title: '挂完电话2',
      description: `“什么亲戚？要不要回去看看？”`,
      actions: [
        {
          title: '“暂时还不用吧。”',
          triggerEventTitle: '挂完电话3'
        },
      ],
    },
    {
      title: '挂完电话3',
      description: `阿华说：“你要是回去，我就陪你回。如果你不回来了，我就在成都找工作。”`,
      actions: [
        {
          title: '“你为了监视我，到时候吃饭都成问题。成都的白米饭里也放辣椒的。”',
          triggerEventTitle: '挂完电话4'
        },
      ],
    },
    {
      title: '挂完电话4',
      description: `他把毛巾挂起来，说：“哪有那么夸张，我喜欢吃辣。”说完过来帮我吹头。`,
      nextEventTitle: '关灯'
    },
    {
      title: '关灯',
      description: `关了灯，我们在黑暗中哑着声息爱了一回，倒在皱到一起的床单和被单中间睡了。`,
      nextEventTitle: '醒来'
    },
    {
      title: '醒来',
      description: `醒来还是半夜。昏白的路灯灯光透过窗帘缝隙印在天花板上，好像外面是白天，而我被剩下在这夜里，剩在阿华身边`,
      actions: [
        {
          title: '我是不是还爱简宁？',
          openMind: '我妈说，跟坐监牢的人诉讼离婚，法院肯定会同意。我这时候跟他离婚，算不算落井下石？他会饶我吗？阿华怎么办？',
          triggerEventTitle: '摸索'
        }
      ]
    },
    {
      title: '摸索',
      description: `阿华睡得迷迷糊糊，伸手来摸索，捉住我的手，倒像是睡梦中嗅到我的不宁心绪。`,
      actions: [
        {
          title: '拍拍他的手',
          triggerEventTitle: '静下来'
        },
        {
          title: '感受着他的呼吸，想着自己要怎样去面对简宁',
          openMind: '阿华在任何时候都是简宁的反面。简宁若是爱我，也是为了要爱他自己，他懂适可而止。阿华爱我，是奉献。任何时候第一口菜先夹我碗里，给我烫脚，给我剪手指甲脚趾甲。我发烧时，他把我接到他这，每隔一小时就煮姜水逼我一气喝完，半夜搂紧我睡觉，他自己半梦半醒，要把我捂到浑身湿透退烧。但简宁是我的丈夫。',
          triggerEventTitle: '第二天'
        }
      ]
    },
    {
      title: '静下来',
      description: `阿华又安静下来。`,
      actions: [
        {
          title: '感受着他的呼吸，想着自己要怎样去面对简宁',
          openMind: '阿华在任何时候都是简宁的反面。简宁若是爱我，也是为了要爱他自己，他懂适可而止。阿华爱我，是奉献。任何时候第一口菜先夹我碗里，给我烫脚，给我剪手指甲脚趾甲。我发烧时，他把我接到他这，每隔一小时就煮姜水逼我一气喝完，半夜搂紧我睡觉，他自己半梦半醒，要把我捂到浑身湿透退烧。但简宁是我的丈夫。',
          triggerEventTitle: '第二天'
        }
      ]
    },
    {
      title: '第二天',
      description: `第二天，阿华又提同居的事。`,
      actions: [
        {
          title: '“真的不可以。”',
          triggerEventTitle: '虚伪'
        }
      ]
    },
    {
      title: '虚伪',
      description: `说完自己亦觉出一种虚伪，明明已经这样，仿佛还要因为没结婚的名分做贞洁烈女。其实不是。`,
      nextEventTitle: '天真'
    },
    {
      title: '天真',
      description: '阿华说：“如果你不嫌我穷，我们总归要结婚的。”',
      nextEventTitle: '窝囊'
    },
    {
      title: '窝囊',
      description: '我有时看他那样笃定天真，时时不忘婚事，怎么看都窝囊。',
      actions: [
        {
          title: '回到自己住处',
          triggerEventTitle: '回到自己住处'
        }
      ]
    },
    {
      title: '回到自己住处',
      description: `地上已经没有下脚的地方，晾的衣物被室友丢到我床铺上。我的床和桌子都摆满她们的东西。水壶和电吹风也成了公用。女孩子一起住，爱干净便罢了，邋遢起来，连男孩子亦不如。
      她们出去了。周末两样，不是补瞌睡，就是加班。逛街的地方很远，大家都会网购。`,
      actions: [
        {
          title: '想起阿华的评论',
          openMind: '阿华说：“最不喜欢跟女的合租，东西又多，卫生间地上都是头发，堵起来还不知道清理。”',
        },
        {
          title: '打电话给我妈',
          triggerEventTitle: '电话1',
        }
      ]
    },
    {
      title: '电话1',
      description: `我妈没接。`,
      nextEventTitle: '电话2'
    },
    {
      title: '电话2',
      description: `过会儿我妈打来电话，说她刚受完一顿饱气。`,
      nextEventTitle: '电话3'
    },
    {
      title: '电话3',
      description: `“都到恁种地步见了我们也没啥好脸色。默到（方言，“以为”）我们吃饱了愿跟她沾亲带故，硬是倒了血霉。你给我赶快离赶快离，”`,
      nextEventTitle: '电话4'
    },
    {
      title: '电话4',
      description: `“确实看起可怜，人瘦得不成形了，缩成一团。癌症转移了两个地方。”`,
      actions: [
        {
          title: '还是想回去一趟',
          openMind: '简宁虽粗心跋扈，躲祸也记得回来看我、拿钱给我，我却没尽过什么妻子的义务。',
          triggerEventTitle: '过几天'
        }
      ],
    },
    {
      title: '过几天',
      description: `过了几天，我找领导请假一个月`,
      nextEventTitle: '领导说'
    },
    {
      title: '领导说',
      description: `领导说：“什么亲戚，他自己家人不管你回去管？一个月，你请假还是度假？”`,
      nextEventTitle: '恩典'
    },
    {
      title: '恩典',
      description: `最后给放了半个月，钱照扣，已是特大恩典。`,
      actions: [
        {
          title: '跟阿华说，明天就走',
          triggerEventTitle: '怨气'
        }
      ]
    },
    {
      title: '怨气',
      description: `阿华临时请不得假，自然不提与我同去，但他很气，怨我没有提前说。`,
      actions: [
        {
          title: '“提前又怎样，左不过是这几天，就算我离职不再回来，你也不敢和我一块走。话谁不会说，反正用不着兑现。”',
        },
        {
          title: '往车站去，回去收东西',
          triggerEventTitle: '车站'
        }
      ]
    },
    {
      title: '车站',
      description: `阿华也恼了，道：“随便你！”`,
      nextEventTitle: '车来了'
    },
    {
      title: '车来了',
      description: `车来了`,
      actions: [
        {
          title: '快步上车',
          triggerEventTitle: '收行李'
        }
      ]
    },
    {
      title: '收行李',
      description: `我正收着行李，阿华来敲门，给我打包了米线。他有些垂头丧气，说：“你没吃晚饭。”逢着吵架他总是先来找我`,
      actions: [
        {
          title: '快步上车',
          triggerEventTitle: '收行李'
        }
      ]
    },
  ],

}