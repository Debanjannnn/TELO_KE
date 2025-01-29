# TELO-KE Staking DApp (Built on Telos EVM)

TELO-KE is a decentralized application (DApp) built on the **Telos EVM** blockchain, enabling users to stake their tokens and earn rewards over time. This DApp leverages smart contracts to provide a secure and efficient staking experience while offering robust admin controls for managing the staking pool.

---

## Features

- **Token Staking**: Users can stake their tokens to earn rewards based on the staking duration and reward rate.
- **Reward Claiming**: Users can claim their earned rewards at any time.
- **Admin Controls**: Admins can deposit and withdraw reward tokens, update staking parameters, and manage the contract.
- **Role-Based Access Control**: The contract uses role-based permissions to ensure secure and controlled access to critical functions.
- **ERC721 Support**: The contract supports staking of ERC721 tokens (NFTs).
- **Flexible Staking Parameters**: Admins can adjust rewards per unit time and the time unit for staking rewards.
- **Transparent Events**: All key actions (staking, withdrawing, claiming rewards, etc.) emit events for transparency and tracking.

---

## Why Telos EVM?

The Telos EVM is a high-performance, low-cost Ethereum Virtual Machine (EVM) compatible blockchain. It offers:

- **Fast Transactions**: Telos EVM processes transactions quickly, ensuring a smooth user experience.
- **Low Fees**: Transaction fees on Telos EVM are significantly lower compared to Ethereum mainnet.
- **Scalability**: Telos EVM is designed to handle high throughput, making it ideal for decentralized applications like TELO-KE.

---

## Smart Contract Overview

The TELO-KE staking contract is designed to be modular and secure. It includes the following key components:

1. **Staking Mechanism**:
   - Users can stake their tokens by calling the `stake` function with the token IDs.
   - Staked tokens are tracked, and users can withdraw them at any time using the `withdraw` function.

2. **Rewards Distribution**:
   - Rewards are calculated based on the staking duration and the configured rewards per unit time.
   - Users can claim their rewards using the `claimRewards` function.

3. **Admin Functions**:
   - Admins can deposit reward tokens into the contract using `depositRewardTokens`.
   - Admins can withdraw reward tokens using `withdrawRewardTokens`.
   - Admins can update the rewards per unit time and the time unit using `setRewardsPerUnitTime` and `setTimeUnit`.

4. **Role-Based Access**:
   - The contract uses the `DEFAULT_ADMIN_ROLE` to manage permissions for critical functions.
   - Admins can grant or revoke roles using `grantRole` and `revokeRole`.

5. **Events**:
   - Key actions emit events such as `TokensStaked`, `TokensWithdrawn`, `RewardsClaimed`, and `UpdatedRewardsPerUnitTime` for transparency.

---


## Usage

### Staking Tokens

1. Call the `stake` function with the token IDs you want to stake.
2. The staked tokens will be locked in the contract, and you will start earning rewards.

### Claiming Rewards

1. Call the `claimRewards` function to claim your earned rewards.
2. The rewards will be transferred to your wallet.

### Withdrawing Tokens

1. Call the `withdraw` function with the token IDs you want to withdraw.
2. The tokens will be transferred back to your wallet.

### Admin Functions

1. **Deposit Reward Tokens**:
   - Call `depositRewardTokens` to add reward tokens to the contract.

2. **Withdraw Reward Tokens**:
   - Call `withdrawRewardTokens` to withdraw reward tokens from the contract.

3. **Update Staking Parameters**:
   - Call `setRewardsPerUnitTime` to update the rewards per unit time.
   - Call `setTimeUnit` to update the time unit for staking rewards.

---

---

## Contributing

Contributions are welcome! If you'd like to contribute to the TELO-KE project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push them to your fork.
4. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

---

## Acknowledgments

- Thanks to the Telos community for providing a fast and scalable blockchain platform.

---

Happy staking with TELO-KE on Telos EVM! 🚀
