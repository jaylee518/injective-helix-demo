import { I18nMessageFunction } from '@/types'

export default {
  guild: {
    title: 'Guilds',
    description:
      'Helix Guilds is a team-based trading competition. Be part of the winning guild and win together!',

    guilds: 'Guilds',
    noData: 'No data',
    participants: 'Participants',
    totalRewards: 'Total rewards',
    currentSeason: 'Current season',
    campaignRules: 'Campaign rules',

    toast: {
      copiedInvitationLink: 'Invitation link copied to your clipboard.'
    },

    howToParticipate: {
      title: 'How to participate',
      createGuild: {
        title: 'Be a Guild Master and invite others to join you',
        description:
          'Have at least 10,000 TIA in your wallet throughout the competition. Earn 20% of the rewards if your guild wins!',
        cta: 'Create guild'
      },
      joinGuild: {
        title: 'Join a guild and win with your friends',
        description:
          'Climb up the ranking by having more TIA and trading volume. Share 80% of the rewards with your friends if your guild wins!',
        ctaMobile: 'Find guild to join',
        cta: 'Check Injective Discord to find a guild to join'
      }
    },

    leaderboard: {
      title: 'Leaderboards',
      tab: {
        rankByTVL: 'Rank by TIA balance',
        rankByVolume: 'Rank by volume'
      },
      guildMembers: 'Guild members',
      fetchNewData: 'Fetch new data',
      invitationLink: 'Invitation link',
      table: {
        tvl: 'TVL',
        rank: 'Rank',
        guild: 'Guild',
        status: 'Status',
        balance: 'Balance',
        members: 'Members',
        address: 'Address',
        averageTvl: 'TIA Balance',
        currentRank: 'Current rank',
        volumeRank: 'Volume ranking',
        tvlRank: 'TIA Balance ranking',
        tradingVolume: 'Trading volume',
        tiaBalanceTooltip:
          'The weighted average of TIA held in address over the course of the competition',
        volumeTooltip:
          'Taker and maker volume generated by the address over the course of the competition',
        totalTIABalance: 'Total TIA Balance',
        totalTradingVolume: 'Total trading volume',
        weightedAverageTiaBalance: 'Weighted average TIA balance'
      },
      lastUpdated: ({ named }: I18nMessageFunction) =>
        `Last updated at ${named('date')}`
    },

    guildMaster: {
      title: 'Your are the Guild Master',
      noOfMembers: 'No. of members',
      status: 'Status',
      statusTooltip: 'status tooltip placeholder',
      copyLinkToShare: 'Copy this link to share'
    },

    createGuild: {
      title: 'Create a guild',
      name: 'Name of the guild',
      selectName: 'Select name',
      namePlaceholder: 'Enter name',
      thumbnail: 'Select a guild thumbnail',
      masterAddress: 'Guild master address',
      insufficientBalance: 'Insufficient balance',
      findAGuildToJoin: 'Find a guild to join',
      insufficientBalanceDescription: ({ named }: I18nMessageFunction) =>
        `A guild master must have at least ${named('amount')} ${named(
          'symbol'
        )} in the wallet throughout the whole competition, including at time of creation.`,
      characters: 'characters',
      balanceInWallet: ({ named }: I18nMessageFunction) =>
        `${named('symbol')} balance in wallet:`,
      cta: 'Create Guild',
      toast: 'Successfully created guild'
    },

    joinGuild: {
      title: 'Join a guild on Helix',
      description: ({ named }: I18nMessageFunction) =>
        `Join the guild “${named(
          'name'
        )}” on Helix to earn a share of the rewards!`,
      cta: 'Join Guild',
      toast: 'Successfully joined guild'
    },

    verifyJoinGuild: {
      title: 'Enter invitation code',
      description: 'Please provide the invitation code to join this guild.',
      hash: 'Invitation code',
      incorrectCode: 'Incorrect code',
      hashPlaceholder: 'Enter invitation code',
      cta: 'Join',
      discord: 'Check Injective Discord to find a guild to join'
    },

    alreadyPartOfGuild: {
      title: 'Already a member of a guild',
      description: ({ named }: I18nMessageFunction) =>
        `${named(
          'address'
        )}  is already a part of a guild. Each address can only be a part of one guild during the competition.`
    }
  }
}
