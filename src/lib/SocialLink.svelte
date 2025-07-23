<script>
  export let link;
  import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte';
</script>

<a class="social-link" href={link.url} target="_blank" rel="noopener" aria-label={link.name} tabindex="0">
  {#if link.icon === 'tabler:brand-github'}
    <IconBrandGithub size={28} />
  {:else if link.icon === 'tabler:brand-linkedin'}
    <IconBrandLinkedin size={28} />
  {/if}
</a>

<style lang="scss">
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
  color: var(--icon-color, #5f6fff);
  transition: color 0.2s, transform 0.2s;
  outline: none;
  &:hover, &:focus {
    color: var(--icon-hover, #3b47b7);
    transform: scale(1.15);
  }
}
</style>
