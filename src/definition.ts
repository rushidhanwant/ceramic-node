// This is an auto-generated file, do not edit manually
import type {RuntimeCompositeDefinition} from '@composedb/types'

export const definition: RuntimeCompositeDefinition = {
  "models": {
    "Comment": {
      "id": "kjzl6hvfrbw6c9hb5aobiugacs6rz5brj23l4tmiphxvqdljcgnea2q7whnuj61",
      "accountRelation": {"type": "list"}
    },
    "Vote": {
      "id": "kjzl6hvfrbw6c5n20mpcscgnzrk06h1ieemw83w78iz23asxirfdebvw7a6n2dn",
      "accountRelation": {"type": "list"}
    },
    "User": {
      "id": "kjzl6hvfrbw6c7bb4p0j3klw2qzn2zzbjjk9rapp67f39np1vgvu3vh4x571cgr",
      "accountRelation": {"type": "single"}
    },
    "Thread": {
      "id": "kjzl6hvfrbw6c5h2e5ilsfv9kop3gh2ee2mz5axozgmeyc6sr3s0oosh148patg",
      "accountRelation": {"type": "list"}
    },
    "CommunityTag": {
      "id": "kjzl6hvfrbw6c5oknkt2qu1x0uj7o5dt7v75g3cwunlfy272yfblqwi8xevz6p2",
      "accountRelation": {"type": "list"}
    },
    "Tag": {
      "id": "kjzl6hvfrbw6c9vcpdyfmsdh6btj4zs1cw6beyievasiio28lffvh1q30lxewmr",
      "accountRelation": {"type": "list"}
    },
    "Community": {
      "id": "kjzl6hvfrbw6c6elmefzm05abjsbalbz3fschl9ysstcccagzmq8y6izdyoeu3z",
      "accountRelation": {"type": "list"}
    },
    "UserCommunity": {
      "id": "kjzl6hvfrbw6c8dhf7ruslo18xvlmqg02lxiu0vgn8ifpnrv3e6oa7i4qc5iyn9",
      "accountRelation": {"type": "list"}
    },
    "SocialPlatform": {
      "id": "kjzl6hvfrbw6c9x1g4fimepp1hljk72pbm5edjfgtw9oirq0mpmt7vqhjbjhjnn",
      "accountRelation": {"type": "list"}
    },
    "ThreadTag": {
      "id": "kjzl6hvfrbw6c8pxvwx7iy4nx8gr6q7xd3n2rq9si6aiuzpgljd2g1qz6a5ycmq",
      "accountRelation": {"type": "list"}
    }
  },
  "objects": {
    "CommentSocialCommentId": {
      "commentId": {"type": "string", "required": true},
      "platformName": {"type": "string", "required": true}
    },
    "Comment": {
      "text": {"type": "string", "required": true},
      "userId": {"type": "streamid", "required": true},
      "threadId": {"type": "streamid", "required": true},
      "createdAt": {"type": "datetime", "required": true},
      "createdFrom": {"type": "string", "required": true},
      "socialCommentIds": {
        "type": "list",
        "required": true,
        "item": {"type": "reference", "refType": "object", "refName": "CommentSocialCommentId", "required": true}
      },
      "user": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c7bb4p0j3klw2qzn2zzbjjk9rapp67f39np1vgvu3vh4x571cgr",
          "property": "userId"
        }
      },
      "author": {"type": "view", "viewType": "documentAccount"},
      "thread": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c5h2e5ilsfv9kop3gh2ee2mz5axozgmeyc6sr3s0oosh148patg",
          "property": "threadId"
        }
      },
      "votesCount": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryCount",
          "model": "kjzl6hvfrbw6c5n20mpcscgnzrk06h1ieemw83w78iz23asxirfdebvw7a6n2dn",
          "property": "commentId"
        }
      },
      "votes": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c5n20mpcscgnzrk06h1ieemw83w78iz23asxirfdebvw7a6n2dn",
          "property": "commentId"
        }
      }
    },
    "Vote": {
      "vote": {"type": "boolean", "required": true},
      "userId": {"type": "streamid", "required": true},
      "commentId": {"type": "streamid", "required": true},
      "user": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c7bb4p0j3klw2qzn2zzbjjk9rapp67f39np1vgvu3vh4x571cgr",
          "property": "userId"
        }
      },
      "comment": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c9hb5aobiugacs6rz5brj23l4tmiphxvqdljcgnea2q7whnuj61",
          "property": "commentId"
        }
      }
    },
    "UserPlatform": {
      "platformId": {"type": "string", "required": true},
      "platformName": {"type": "string", "required": true},
      "platformAvatar": {"type": "string", "required": true},
      "platformUsername": {"type": "string", "required": true}
    },
    "User": {
      "createdAt": {"type": "datetime", "required": true},
      "userPlatforms": {
        "type": "list",
        "required": false,
        "item": {"type": "reference", "refType": "object", "refName": "UserPlatform", "required": false}
      },
      "walletAddress": {"type": "string", "required": true},
      "author": {"type": "view", "viewType": "documentAccount"},
      "commentCount": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryCount",
          "model": "kjzl6hvfrbw6c9hb5aobiugacs6rz5brj23l4tmiphxvqdljcgnea2q7whnuj61",
          "property": "userId"
        }
      },
      "threadCount": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryCount",
          "model": "kjzl6hvfrbw6c5h2e5ilsfv9kop3gh2ee2mz5axozgmeyc6sr3s0oosh148patg",
          "property": "userId"
        }
      },
      "communityCount": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryCount",
          "model": "kjzl6hvfrbw6c8dhf7ruslo18xvlmqg02lxiu0vgn8ifpnrv3e6oa7i4qc5iyn9",
          "property": "userId"
        }
      },
      "votesCount": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryCount",
          "model": "kjzl6hvfrbw6c5n20mpcscgnzrk06h1ieemw83w78iz23asxirfdebvw7a6n2dn",
          "property": "userId"
        }
      },
      "communities": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c8dhf7ruslo18xvlmqg02lxiu0vgn8ifpnrv3e6oa7i4qc5iyn9",
          "property": "userId"
        }
      }
    },
    "ThreadSocialThreadId": {
      "threadId": {"type": "string", "required": true},
      "platformName": {"type": "string", "required": true}
    },
    "Thread": {
      "body": {"type": "string", "required": true},
      "title": {"type": "string", "required": true},
      "userId": {"type": "streamid", "required": true},
      "createdAt": {"type": "datetime", "required": true},
      "communityId": {"type": "streamid", "required": true},
      "createdFrom": {"type": "string", "required": true},
      "socialThreadIds": {
        "type": "list",
        "required": true,
        "item": {"type": "reference", "refType": "object", "refName": "ThreadSocialThreadId", "required": true}
      },
      "user": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c7bb4p0j3klw2qzn2zzbjjk9rapp67f39np1vgvu3vh4x571cgr",
          "property": "userId"
        }
      },
      "author": {"type": "view", "viewType": "documentAccount"},
      "community": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c6elmefzm05abjsbalbz3fschl9ysstcccagzmq8y6izdyoeu3z",
          "property": "communityId"
        }
      },
      "comments": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c9hb5aobiugacs6rz5brj23l4tmiphxvqdljcgnea2q7whnuj61",
          "property": "threadId"
        }
      },
      "tags": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c8pxvwx7iy4nx8gr6q7xd3n2rq9si6aiuzpgljd2g1qz6a5ycmq",
          "property": "threadId"
        }
      },
      "commentCount": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryCount",
          "model": "kjzl6hvfrbw6c9hb5aobiugacs6rz5brj23l4tmiphxvqdljcgnea2q7whnuj61",
          "property": "threadId"
        }
      }
    },
    "CommunityTag": {
      "tagId": {"type": "streamid", "required": true},
      "communityId": {"type": "streamid", "required": true},
      "tag": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c9vcpdyfmsdh6btj4zs1cw6beyievasiio28lffvh1q30lxewmr",
          "property": "tagId"
        }
      },
      "Community": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c6elmefzm05abjsbalbz3fschl9ysstcccagzmq8y6izdyoeu3z",
          "property": "communityId"
        }
      }
    },
    "Tag": {
      "tag": {"type": "string", "required": true},
      "author": {"type": "view", "viewType": "documentAccount"},
      "communities": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c5oknkt2qu1x0uj7o5dt7v75g3cwunlfy272yfblqwi8xevz6p2",
          "property": "tagId"
        }
      },
      "threads": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c8pxvwx7iy4nx8gr6q7xd3n2rq9si6aiuzpgljd2g1qz6a5ycmq",
          "property": "tagId"
        }
      }
    },
    "Community": {
      "createdAt": {"type": "datetime", "required": true},
      "description": {"type": "string", "required": true},
      "communityName": {"type": "string", "required": true},
      "author": {"type": "view", "viewType": "documentAccount"},
      "threadCount": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryCount",
          "model": "kjzl6hvfrbw6c5h2e5ilsfv9kop3gh2ee2mz5axozgmeyc6sr3s0oosh148patg",
          "property": "communityId"
        }
      },
      "userCount": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryCount",
          "model": "kjzl6hvfrbw6c8dhf7ruslo18xvlmqg02lxiu0vgn8ifpnrv3e6oa7i4qc5iyn9",
          "property": "communityId"
        }
      },
      "socialPlatforms": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c9x1g4fimepp1hljk72pbm5edjfgtw9oirq0mpmt7vqhjbjhjnn",
          "property": "communityId"
        }
      },
      "tags": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c5oknkt2qu1x0uj7o5dt7v75g3cwunlfy272yfblqwi8xevz6p2",
          "property": "communityId"
        }
      },
      "threads": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c5h2e5ilsfv9kop3gh2ee2mz5axozgmeyc6sr3s0oosh148patg",
          "property": "communityId"
        }
      },
      "users": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "queryConnection",
          "model": "kjzl6hvfrbw6c8dhf7ruslo18xvlmqg02lxiu0vgn8ifpnrv3e6oa7i4qc5iyn9",
          "property": "communityId"
        }
      }
    },
    "UserCommunity": {
      "userId": {"type": "streamid", "required": true},
      "communityId": {"type": "streamid", "required": true},
      "user": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c7bb4p0j3klw2qzn2zzbjjk9rapp67f39np1vgvu3vh4x571cgr",
          "property": "userId"
        }
      },
      "community": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c6elmefzm05abjsbalbz3fschl9ysstcccagzmq8y6izdyoeu3z",
          "property": "communityId"
        }
      }
    },
    "SocialPlatform": {
      "userId": {"type": "streamid", "required": true},
      "platform": {"type": "string", "required": true},
      "platformId": {"type": "string", "required": true},
      "communityId": {"type": "streamid", "required": true},
      "communityName": {"type": "string", "required": true},
      "communityAvatar": {"type": "string", "required": true},
      "user": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c7bb4p0j3klw2qzn2zzbjjk9rapp67f39np1vgvu3vh4x571cgr",
          "property": "userId"
        }
      },
      "author": {"type": "view", "viewType": "documentAccount"},
      "community": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c6elmefzm05abjsbalbz3fschl9ysstcccagzmq8y6izdyoeu3z",
          "property": "communityId"
        }
      }
    },
    "ThreadTag": {
      "tagId": {"type": "streamid", "required": true},
      "threadId": {"type": "streamid", "required": true},
      "tag": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c9vcpdyfmsdh6btj4zs1cw6beyievasiio28lffvh1q30lxewmr",
          "property": "tagId"
        }
      },
      "thread": {
        "type": "view",
        "viewType": "relation",
        "relation": {
          "source": "document",
          "model": "kjzl6hvfrbw6c5h2e5ilsfv9kop3gh2ee2mz5axozgmeyc6sr3s0oosh148patg",
          "property": "threadId"
        }
      }
    }
  },
  "enums": {},
  "accountData": {
    "commentList": {"type": "connection", "name": "Comment"},
    "voteList": {"type": "connection", "name": "Vote"},
    "user": {"type": "node", "name": "User"},
    "threadList": {"type": "connection", "name": "Thread"},
    "communityTagList": {"type": "connection", "name": "CommunityTag"},
    "tagList": {"type": "connection", "name": "Tag"},
    "communityList": {"type": "connection", "name": "Community"},
    "userCommunityList": {"type": "connection", "name": "UserCommunity"},
    "socialPlatformList": {"type": "connection", "name": "SocialPlatform"},
    "threadTagList": {"type": "connection", "name": "ThreadTag"}
  }
}