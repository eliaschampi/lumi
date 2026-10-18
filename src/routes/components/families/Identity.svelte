<script lang="ts">
	import Heart from '@lucide/svelte/icons/heart';
	import SendHorizontal from '@lucide/svelte/icons/send-horizontal';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import Star from '@lucide/svelte/icons/star';
	import User from '@lucide/svelte/icons/user';
	import { onDestroy } from 'svelte';
	import {
		Avatar,
		AvatarGroup,
		AvatarPicker,
		Button,
		DashboardSection,
		Divider,
		IconBadge,
		Image,
		Input,
		Message,
		MessageList,
		UserInfo,
		formatDate
	} from '@lumi-ui/svelte';
	import { asset } from '$app/paths';
	import { OWNERS, SIMULATED_LATENCY_MS } from '$lib/demo';
	import { siteLocale } from '$lib/site';

	interface ChatMessage {
		id: number;
		mine: boolean;
		text: string;
		time: string;
	}

	const TEAM = OWNERS.map((name) => ({ name }));
	/** Miembros visibles del grupo; el resto se resume en el contador. */
	const VISIBLE_MEMBERS = 4;
	const AVATAR_OPTIONS = [
		{ src: asset('/favicon.svg'), value: 'spark', label: 'Destello' },
		{ src: asset('/circle.svg'), value: 'circle', label: 'Círculos' },
		{ src: asset('/squares.svg'), value: 'squares', label: 'Cuadrados' }
	];

	let selectedAvatar = $state('spark');
	let draft = $state('');
	let busy = $state(false);
	let nextId = 3;
	let replyTimer: ReturnType<typeof setTimeout> | undefined;
	let messages = $state<ChatMessage[]>([
		{ id: 1, mine: false, text: '¿Revisaste la tabla de espacios de trabajo?', time: '10:24' },
		{ id: 2, mine: true, text: 'Sí, los filtros ya funcionan en móvil.', time: '10:25' }
	]);

	const selectedAvatarLabel = $derived(
		AVATAR_OPTIONS.find((option) => option.value === selectedAvatar)?.label ?? 'ninguno'
	);

	function now(): string {
		return formatDate(new Date(), {
			locale: siteLocale.locale,
			timeZone: siteLocale.timeZone,
			timeStyle: 'short'
		});
	}

	function send(event: SubmitEvent): void {
		event.preventDefault();
		const text = draft.trim();
		if (!text || busy) return;
		messages.push({ id: nextId++, mine: true, text, time: now() });
		draft = '';
		busy = true;
		replyTimer = setTimeout(() => {
			messages.push({
				id: nextId++,
				mine: false,
				text: 'Recibido. Es una respuesta simulada.',
				time: now()
			});
			busy = false;
		}, SIMULATED_LATENCY_MS);
	}

	onDestroy(() => clearTimeout(replyTimer));
</script>

{#snippet anaAvatar()}<Avatar name="Ana Torres" size="sm" color="primary" alt="" />{/snippet}

<div class="lumi-grid lumi-grid--columns-2 lumi-grid--gap-lg">
	<DashboardSection title="Avatares" subtitle="Identidad individual y equipos">
		<div class="lumi-flex lumi-flex--wrap lumi-align-items--center lumi-flex--gap-md">
			<Avatar name="Lumi UI" size="xl" color="primary" />
			<Avatar name="Design System" size="lg" color="secondary" />
			<Avatar size="md" color="info" alt="Usuario sin foto"><User size="60%" /></Avatar>
		</div>
		<Divider label="Equipo" align="start" spacing="sm" />
		<AvatarGroup items={TEAM} max={VISIBLE_MEMBERS} size="md" />
	</DashboardSection>

	<DashboardSection title="Conversación" subtitle="Message y MessageList">
		<div class="chat">
			<MessageList aria-label="Conversación de demostración" {busy}>
				{#each messages as message, index (message.id)}
					<Message
						align={message.mine ? 'end' : 'start'}
						name={message.mine ? undefined : 'Ana'}
						time={message.time}
						grouped={index > 0 && messages[index - 1].mine === message.mine}
						avatar={message.mine ? undefined : anaAvatar}
					>
						{message.text}
					</Message>
				{/each}
			</MessageList>
		</div>
		<form class="lumi-flex lumi-align-items--end lumi-flex--gap-sm" onsubmit={send}>
			<div class="lumi-flex-item--grow">
				<Input bind:value={draft} name="message" label="Mensaje" placeholder="Escribe un mensaje" />
			</div>
			<Button
				type="submit"
				variant="filled"
				icon={SendHorizontal}
				aria-label="Enviar mensaje"
				disabled={!draft.trim() || busy}
			/>
		</form>
	</DashboardSection>

	<DashboardSection title="Personas" subtitle="Filas compactas para listas y tablas">
		<UserInfo name="Ana Torres" description="Diseñadora de interfaces" color="primary" size="lg" />
		<UserInfo name="Bruno Díaz" description="Desarrollador" color="secondary" />
	</DashboardSection>

	<DashboardSection title="Badges de icono" subtitle="Énfasis visual con color semántico">
		<div class="lumi-flex lumi-flex--wrap lumi-flex--gap-md">
			<IconBadge icon={ShieldCheck} color="primary" size="xl" />
			<IconBadge icon={Heart} color="danger" size="xl" />
			<IconBadge icon={Star} color="warning" size="xl" />
			<IconBadge icon={Sparkles} color="secondary" size="xl" />
		</div>
	</DashboardSection>

	<DashboardSection title="Image" subtitle="Marco con proporción fija, sin saltos de diseño">
		<Image
			src={asset('/squares.svg')}
			alt="Composición geométrica de cuadrados"
			ratio="16 / 9"
			radius="lg"
			loading="lazy"
		/>
	</DashboardSection>

	<DashboardSection title="AvatarPicker" subtitle="Selección única por imagen">
		<AvatarPicker
			options={AVATAR_OPTIONS}
			bind:value={selectedAvatar}
			name="avatar"
			aria-label="Avatar del perfil"
		/>
		<p class="lumi-text--sm lumi-text--muted lumi-margin--none">
			Avatar elegido: {selectedAvatarLabel}
		</p>
	</DashboardSection>
</div>

<style>
	/* MessageList ocupa la altura de su contenedor y desplaza dentro. */
	.chat {
		block-size: min(calc(var(--lumi-space-6xl) * 3), 50dvh);
	}
</style>
