<template>
	<div class="pt-9 lg:pt-6 absolute left-0 top-0 right-0 z-10">
		<Container class="flex items-center">
			<!-- Right -->
			<div class="flex items-center ml-auto">
				<a
					v-for="(link, linkKey) in menu"
					:key="linkKey"
					:href="link.href"
					:target="link.target"
					class="ml-10 lg:ml-6 text-sm lg:text-xs text-gray-400 hover:text-purple-600 transition-colors flex items-center"
					@click="$gtagEvents.externalLinkClick(link.href)"
				>
					<Icon :name="link.icon" class="w-4 h-4 block mr-3 lg:mr-2" />
					<span>{{ link.text }}</span>
				</a>
			</div>
		</Container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					text: 'Twitter',
					href: 'https://twitter.com/SuiAssistant_',
					target: '_blank',
					icon: 'twiiter',
				},
				{
					text: 'Telegram',
					href: 'https://t.me/SuiNetworkCN',
					target: '_blank',
					icon: 'telegram',
				},
				{
					text: 'YouTube',
					href: 'https://www.youtube.com/@SuinetworkCN',
					target: '_blank',
					icon: 'youtube',
				},
				{
					text: 'Notion',
					href: 'https://suicn.notion.site/Sui-6517753efc9642ce80dd2d54ae38cb3e',
					target: '_blank',
					icon: 'notion',
				},
				{
					text: 'Contribute',
					href: 'https://github.com/suieco/suieco',
					target: '_blank',
					icon: 'github',
				},
			],
		}
	},
}
</script>
