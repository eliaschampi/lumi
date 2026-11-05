<script lang="ts">
	import { Button, Fieldset, Input, Select } from '@lumi-ui/svelte';
</script>

<form class="lumi-stack lumi-stack--lg">
	<Fieldset legend="Personal details">
		<div class="lumi-grid lumi-grid--columns-2-lg lumi-grid--gap-md">
			<Input label="First name" />
			<Input label="Last name" />
		</div>
	</Fieldset>

	<Fieldset legend="Delivery">
		<div class="lumi-grid lumi-grid--columns-2-lg lumi-grid--gap-md">
			<Input label="Address" />
			<Select label="City" options={['Lima', 'Cusco']} />
		</div>
	</Fieldset>

	<div class="lumi-flex lumi-justify--end lumi-flex--gap-sm">
		<Button variant="ghost">Cancel</Button>
		<Button type="submit" variant="filled">Save</Button>
	</div>
</form>
