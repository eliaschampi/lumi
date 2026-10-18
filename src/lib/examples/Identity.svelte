<script lang="ts">
	import { Avatar, AvatarGroup, Message, MessageList } from '@lumi-ui/svelte';
</script>

<Avatar name="Ana Torres" color="primary" />
<AvatarGroup items={[{ name: 'Ana Torres' }, { name: 'Bruno Díaz' }]} max={3} />

<!-- MessageList ocupa la altura de su contenedor y desplaza dentro. -->
<div class="chat">
	<MessageList aria-label="Conversación">
		<Message name="Ana" time="10:24">¿Publicamos la versión 1.0 hoy?</Message>
		<Message align="end">Sí, después de la revisión.</Message>
	</MessageList>
</div>

<style>
	.chat {
		block-size: 16rem;
	}
</style>
