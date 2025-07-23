<script>
  export let project;
</script>

<div class="project-card" role="button" tabindex="0">
  <div class="project-card__header">
    <h3 class="project-card__title">{project.title}</h3>
    <div class="project-card__tech">
      {#each project.tech as tech}
        <span class="project-card__tag">{tech}</span>
      {/each}
    </div>
  </div>
  <p class="project-card__desc">{project.description}</p>
  <a class="project-card__btn" href={project.url} target="_blank" rel="noopener" tabindex="0">View Project</a>
</div>

<style lang="scss">
.project-card {
  background: var(--card-bg, #fff);
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 2rem;
  margin: 1rem 0;
  transition: box-shadow 0.2s, transform 0.2s;
  outline: none;
  &:hover, &:focus {
    box-shadow: 0 8px 32px rgba(0,0,0,0.16);
    transform: translateY(-4px) scale(1.02);
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    font-size: 1.3rem;
    font-weight: 600;
  }
  &__tech {
    display: flex;
    gap: 0.5rem;
  }
  &__tag {
    background: var(--tag-bg, #e0e7ff);
    color: var(--tag-color, #5f6fff);
    border-radius: 0.5rem;
    padding: 0.2rem 0.7rem;
    font-size: 0.9rem;
    font-weight: 500;
  }
  &__desc {
    margin: 1rem 0;
    color: var(--text-secondary, #555);
  }
  &__btn {
    background: var(--btn-bg, #5f6fff);
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.6rem 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    text-decoration: none;
    &:hover, &:focus {
      background: var(--btn-hover, #3b47b7);
    }
  }
}
</style>
