import { ComposeClient } from "@composedb/client";
import { DIDSession } from "did-session";
import { gql } from "graphql-request";

// update the defination json before runnit this file . And dont forget to use did session.
const definition = {
  models: {
    User: {
      id: "kjzl6hvfrbw6c9mr6z1obgw3qobf3k72mr1u3r8cljzlebzx149j9d3na70s1vb",
      accountRelation: { type: "single" },
    },
    Community: {
      id: "kjzl6hvfrbw6c9qs7houn2f6yy7jsf1peksg5q0v28xzwkldorfcak6w6z1umj6",
      accountRelation: { type: "list" },
    },
    SocialPlatform: {
      id: "kjzl6hvfrbw6c9hxylzsdiyh7n7apwautqpfq598djxh0hnsrmwu2grlr3fob2e",
      accountRelation: { type: "list" },
    },
    Thread: {
      id: "kjzl6hvfrbw6c9mchwmcaqap4amcbe1g611slztz1h81aje4vh7a2fs7c5n6hjy",
      accountRelation: { type: "list" },
    },
    Comment: {
      id: "kjzl6hvfrbw6c6jjn50jk9xmst31qhm5fuei89djua2ccsnawzu8gmon214vpzd",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    UserPlatform: {
      platformId: { type: "string", required: true },
      platformName: { type: "string", required: true },
      platformAvatar: { type: "string", required: true },
      platformUsername: { type: "string", required: true },
    },
    User: {
      createdAt: { type: "datetime", required: true },
      userPlatforms: {
        type: "list",
        required: false,
        item: {
          type: "reference",
          refType: "object",
          refName: "UserPlatform",
          required: false,
        },
      },
      walletAddress: { type: "string", required: true },
      author: { type: "view", viewType: "documentAccount" },
    },
    Community: {
      createdAt: { type: "datetime", required: true },
      communityName: { type: "string", required: true },
      author: { type: "view", viewType: "documentAccount" },
      socialPlatforms: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c9hxylzsdiyh7n7apwautqpfq598djxh0hnsrmwu2grlr3fob2e",
          property: "communityId",
        },
      },
    },
    SocialPlatform: {
      userId: { type: "streamid", required: true },
      platform: { type: "string", required: true },
      platformId: { type: "string", required: true },
      communityId: { type: "streamid", required: true },
      communityName: { type: "string", required: true },
      communityAvatar: { type: "string", required: true },
      user: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c9mr6z1obgw3qobf3k72mr1u3r8cljzlebzx149j9d3na70s1vb",
          property: "userId",
        },
      },
      author: { type: "view", viewType: "documentAccount" },
      community: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c9qs7houn2f6yy7jsf1peksg5q0v28xzwkldorfcak6w6z1umj6",
          property: "communityId",
        },
      },
    },
    Thread: {
      body: { type: "string", required: true },
      title: { type: "string", required: true },
      userId: { type: "streamid", required: true },
      threadId: { type: "string", required: true },
      createdAt: { type: "datetime", required: true },
      communityId: { type: "streamid", required: true },
      createdFrom: { type: "string", required: true },
      user: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c9mr6z1obgw3qobf3k72mr1u3r8cljzlebzx149j9d3na70s1vb",
          property: "userId",
        },
      },
      author: { type: "view", viewType: "documentAccount" },
      community: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c9qs7houn2f6yy7jsf1peksg5q0v28xzwkldorfcak6w6z1umj6",
          property: "communityId",
        },
      },
      comments: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c6jjn50jk9xmst31qhm5fuei89djua2ccsnawzu8gmon214vpzd",
          property: "threadId",
        },
      },
    },
    Comment: {
      text: { type: "string", required: true },
      userId: { type: "streamid", required: true },
      threadId: { type: "streamid", required: true },
      createdAt: { type: "datetime", required: true },
      createdFrom: { type: "string", required: true },
      user: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c9mr6z1obgw3qobf3k72mr1u3r8cljzlebzx149j9d3na70s1vb",
          property: "userId",
        },
      },
      author: { type: "view", viewType: "documentAccount" },
      thread: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c9mchwmcaqap4amcbe1g611slztz1h81aje4vh7a2fs7c5n6hjy",
          property: "threadId",
        },
      },
    },
  },
  enums: {},
  accountData: {
    user: { type: "node", name: "User" },
    communityList: { type: "connection", name: "Community" },
    socialPlatformList: { type: "connection", name: "SocialPlatform" },
    threadList: { type: "connection", name: "Thread" },
    commentList: { type: "connection", name: "Comment" },
  },
};
const compose = new ComposeClient({
  ceramic: "https://ceramic-daemon-staging.up.railway.app/",
  definition,
});

const getHandler = async (didSession) => {
  const session = await DIDSession.fromSession(didSession);
  compose.setDID(session.did);
};

const updatesocialplatform = async () => {
  const query = gql`
    mutation updateSocialPlatform($id: UpdateSocialPlatformInput!) {
      updateSocialPlatform(input: $id) {
        document {
          id
          communityAvatar
        }
      }
    }
  `;
  return await compose.executeQuery(query, {
    id: {
      id: "kjzl6kcym7w8y9ot1qck53l722ms0i75wirrj3ra0qigw7wbgj8g8xe9eg1xmnc",
      content: {
        communityAvatar:
          "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    },
  });
};
const communityRouter = async () => {
  try {
    const handler = await getHandler(
      "your did session"
    );
    const socialPlatformResp = await updatesocialplatform();

    console.log("socialPlatformResp", socialPlatformResp);
  } catch (e) {
    return console.log(e);
  }
};
communityRouter();
