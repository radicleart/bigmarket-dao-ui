<script lang="ts">
	import { onMount } from 'svelte';
	import { fmtMicroToStx, fmtMicroToStxFormatted } from '$lib/utils';

	export let totalBalanceUstx: number = 0;

	let amountStx = fmtMicroToStx(totalBalanceUstx);
	const balanceAtHeightF = fmtMicroToStxFormatted(totalBalanceUstx);

	onMount(async () => {
		amountStx = fmtMicroToStx(totalBalanceUstx);
	});
</script>

<p class="">
	You can vote with up to <span class="text-bold">{balanceAtHeightF}</span> STX.
</p>

<!-- <p class="mt-5 text-sm">
	Your snapshot balance at block <span class="text-bold"
		>{FormatUtils.fmtNumber(proposal.proposalData?.startBlockHeight)}</span
	>
	was <span class="text-bold">{balanceAtHeightF}</span> STX.
</p> -->
