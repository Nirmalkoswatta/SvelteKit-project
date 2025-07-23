<script>
  export let skill;
</script>

<span class="skill-tag">{skill}</span>

<style lang="scss">
.skill-tag {
  display: inline-block;
  background: var(--tag-bg, #e0e7ff);
  color: var(--tag-color, #5f6fff);
  border-radius: 0.5rem;
  padding: 0.2rem 0.7rem;
  font-size: 0.95rem;
  font-weight: 500;
  margin: 0.2rem 0.4rem 0.2rem 0;
  transition: background 0.2s, color 0.2s;
  &:hover, &:focus {
    background: var(--tag-hover-bg, #5f6fff);
    color: #fff;
  }
}
</style>
