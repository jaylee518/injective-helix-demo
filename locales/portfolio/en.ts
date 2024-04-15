export default {
  portfolio: {
    balances: {
      netWorth: 'Net Worth'
    },

    subaccounts: {
      name: 'Subaccount Name',
      address: 'Subaccount Address',
      totalValue: 'Total Value (USD)'
    },

    settings: {
      title: 'Settings',
      authz: {
        title: 'AuthZ Management',
        description:
          'Grant other wallet address full/partial permissions to make trades on their behalf',
        grantee: 'Grantee',
        granter: 'Granter',
        addNewGrantee: 'Add new grantee address'
      },
      preferences: {
        title: 'Preferences',
        description: 'Customize your trading experience'
      }
    }
  }
}
