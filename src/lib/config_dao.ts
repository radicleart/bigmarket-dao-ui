export interface DaoConfig {
	VITE_DOA_DEPLOYER: string;
	VITE_DAO_BASE_CONTRACTS: string;
	VITE_DOA: string;
	VITE_DAO_TREASURY: string;
	VITE_DAO_TOKEN_SALE: string;
	VITE_DAO_GOVERNANCE_TOKEN: string;
	VITE_DOA_PROPOSAL: string;
	VITE_DAO_MARKET_VOTING: string;
	VITE_DOA_PROPOSAL_VOTING_EXTENSION: string;
	VITE_DOA_FUNDED_SUBMISSION_EXTENSION: string;
	VITE_DOA_EMERGENCY_EXECUTE_EXTENSION: string;
}

export const config_dao: { [key: string]: DaoConfig } = {
	devnet: {
		VITE_DOA_DEPLOYER: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
		VITE_DOA: 'bitcoin-dao',
		VITE_DAO_GOVERNANCE_TOKEN: 'bde000-governance-token',
		VITE_DAO_TREASURY: 'bde006-treasury',
		VITE_DAO_TOKEN_SALE: 'bde010-token-sale',
		VITE_DAO_BASE_CONTRACTS: 'ecosystem-dao,bitcoin-dao',
		VITE_DOA_PROPOSAL: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM.bdp001-sip-021-test-01',
		VITE_DAO_MARKET_VOTING: 'bde021-market-voting',
		VITE_DOA_PROPOSAL_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_FUNDED_SUBMISSION_EXTENSION: 'bde002-proposal-submission',
		VITE_DOA_EMERGENCY_EXECUTE_EXTENSION: 'bde004-core-execute'
	},
	testnet: {
		VITE_DOA_DEPLOYER: 'ST11804SFNTNRKZQBWB1R3F5YHEXSTXXEWZDXTMH6', // 'ST167Z6WFHMV0FZKFCRNWZ33WTB0DFBCW9M1FW3AY',
		VITE_DAO_BASE_CONTRACTS: 'ecosystem-dao,bitcoin-dao',
		VITE_DOA: 'bitcoin-dao',
		VITE_DAO_GOVERNANCE_TOKEN: 'bde000-governance-token',
		VITE_DAO_TREASURY: 'bde006-treasury',
		VITE_DAO_TOKEN_SALE: 'bde010-token-sale',
		VITE_DOA_PROPOSAL: 'ST11804SFNTNRKZQBWB1R3F5YHEXSTXXEWZDXTMH6.bdp001-sip-021-nakamoto', // 'ST167Z6WFHMV0FZKFCRNWZ33WTB0DFBCW9M1FW3AY.bdp001-sip-021-nakamoto',
		VITE_DAO_MARKET_VOTING: 'bde021-market-voting',
		VITE_DOA_PROPOSAL_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_FUNDED_SUBMISSION_EXTENSION: 'bde008-flexible-funded-submission',
		VITE_DOA_EMERGENCY_EXECUTE_EXTENSION: 'bde004-core-execute'
	},
	mainnet: {
		VITE_DOA_DEPLOYER: 'SP3JP0N1ZXGASRJ0F7QAHWFPGTVK9T2XNXDB908Z',
		VITE_DAO_BASE_CONTRACTS: 'ecosystem-dao,bitcoin-dao',
		VITE_DOA: 'bitcoin-dao',
		VITE_DAO_GOVERNANCE_TOKEN: 'bde000-governance-token',
		VITE_DAO_TOKEN_SALE: 'bde010-token-sale',
		VITE_DAO_TREASURY: 'bde006-treasury',
		VITE_DOA_PROPOSAL: 'SP3JP0N1ZXGASRJ0F7QAHWFPGTVK9T2XNXDB908Z.bdp001-sip-021-nakamoto',
		VITE_DAO_MARKET_VOTING: 'bde021-market-voting',
		VITE_DOA_PROPOSAL_VOTING_EXTENSION: 'bde007-snapshot-proposal-voting',
		VITE_DOA_FUNDED_SUBMISSION_EXTENSION: 'bde008-flexible-funded-submission',
		VITE_DOA_EMERGENCY_EXECUTE_EXTENSION: 'bde004-core-execute'
	}
};
