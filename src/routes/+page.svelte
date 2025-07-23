<script>
  import { hero, about, featuredProjects, socialLinks } from '../lib/data.js';
  import ProjectCard from '../lib/ProjectCard.svelte';
  import SocialLink from '../lib/SocialLink.svelte';
  import SkillTag from '../lib/SkillTag.svelte';
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-svelte';

  let githubRepos = [];
  let darkMode = false;

  async function fetchRepos() {
    const res = await fetch('https://api.github.com/users/Nirmalkoswatta/repos');
    let data = await res.json();
    githubRepos = data
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 5);
  }

  onMount(fetchRepos);

  function toggleDark() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark', darkMode);
  }
</script>

<style lang="scss">
  .portfolio {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    
    &__branding {
      position: relative;
    }
    
    &__logo {
      width: 80px;
      height: 80px;
      margin-bottom: 1rem;
    }
    
    &__title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      margin: 0 0 1rem 0;
      color: #1a202c;
    }
    
    &__tagline {
      font-size: 1.25rem;
      color: #718096;
      margin: 0 0 2rem 0;
      max-width: 600px;
    }
    
    &__dark-toggle {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background: white;
      border: 2px solid #e2e8f0;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 1.2rem;
      
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 16px rgba(0,0,0,0.16);
      }
    }
  }

  .about {
    padding: 4rem 0;
    text-align: center;
    
    &__title {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: #1a202c;
    }
    
    &__text {
      font-size: 1.125rem;
      color: #718096;
      max-width: 700px;
      margin: 0 auto 3rem auto;
      line-height: 1.7;
    }
    
    &__skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      max-width: 800px;
      margin: 0 auto;
    }
  }

  .projects {
    padding: 4rem 0;
    
    &__title {
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 3rem;
      color: #1a202c;
    }
    
    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }
  }

  .github-feed {
    padding: 4rem 0;
    
    &__title {
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 3rem;
      color: #1a202c;
    }
    
    &__list {
      display: grid;
      gap: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    &__repo {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 1rem;
      padding: 1.5rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.16);
      }
    }
    
    &__repo-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    
    &__repo-name {
      font-weight: 600;
      font-size: 1.1rem;
      color: #5f6fff;
    }
    
    &__repo-stars {
      font-size: 0.9rem;
      color: #718096;
    }
    
    &__repo-desc {
      color: #718096;
      margin: 0;
      line-height: 1.5;
    }
  }

  .contact {
    padding: 4rem 0;
    
    &__title {
      font-size: 2.5rem;
      font-weight: 600;
      text-align: center;
      margin-bottom: 3rem;
      color: #1a202c;
    }
    
    &__form {
      max-width: 600px;
      margin: 0 auto;
      display: grid;
      gap: 1.5rem;
    }
    
    &__label {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-weight: 500;
      color: #1a202c;
    }
    
    &__input {
      padding: 0.75rem 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 0.5rem;
      font-size: 1rem;
      background: white;
      color: #1a202c;
      transition: border-color 0.2s ease;
      
      &:focus {
        outline: none;
        border-color: #5f6fff;
      }
      
      &[name="message"] {
        min-height: 120px;
        resize: vertical;
      }
    }
    
    &__btn {
      background: #5f6fff;
      color: white;
      border: none;
      border-radius: 0.5rem;
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.2s ease;
      justify-self: start;
      
      &:hover {
        background: #3b47b7;
      }
    }
  }

  .footer {
    padding: 3rem 0;
    text-align: center;
    border-top: 1px solid #e2e8f0;
    
    &__socials {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    &__copyright {
      color: #718096;
      font-size: 0.9rem;
    }
  }

  // Dark mode
  :global(body.dark) {
    background: #1a202c;
    color: #f7fafc;
    
    .hero {
      background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
      
      &__title {
        color: #f7fafc;
      }
      
      &__tagline {
        color: #cbd5e0;
      }
      
      &__dark-toggle {
        background: #2d3748;
        border-color: #4a5568;
      }
    }
    
    .about, .projects, .contact, .github-feed {
      &__title {
        color: #f7fafc;
      }
    }
    
    .about__text {
      color: #cbd5e0;
    }
    
    .contact {
      &__label {
        color: #f7fafc;
      }
      
      &__input {
        background: #2d3748;
        border-color: #4a5568;
        color: #f7fafc;
        
        &:focus {
          border-color: #6366f1;
        }
      }
    }
    
    .github-feed__repo {
      background: #2d3748;
      border-color: #4a5568;
    }
    
    .footer {
      border-color: #4a5568;
      
      &__copyright {
        color: #cbd5e0;
      }
    }
  }

  @media (max-width: 768px) {
    .hero {
      min-height: 60vh;
      
      &__dark-toggle {
        top: 1rem;
        right: 1rem;
      }
    }
    
    .projects__grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<main class="portfolio">
  <section class="hero" in:fade={{ duration: 800 }}>
    <div class="hero__branding">
      <img class="hero__logo" src={hero.branding.logo} alt="Logo" />
      <h1 class="hero__title">{hero.name}</h1>
      <p class="hero__tagline">{hero.tagline}</p>
      <button class="hero__dark-toggle" on:click={toggleDark} aria-label="Toggle dark mode">
        {#if darkMode}
          <span>🌙</span>
        {:else}
          <span>☀️</span>
        {/if}
      </button>
    </div>
  </section>

  <section class="about" in:fly={{ y: 40, duration: 700 }}>
    <h2 class="about__title">About Me</h2>
    <p class="about__text">{about.text}</p>
    <div class="about__skills">
      {#each about.skills as skill}
        <SkillTag {skill} />
      {/each}
    </div>
  </section>

  <section class="projects" in:fade={{ duration: 800 }}>
    <h2 class="projects__title">Featured Projects</h2>
    <div class="projects__grid">
      {#each featuredProjects as project}
        <ProjectCard {project} />
      {/each}
    </div>
  </section>

  <section class="github-feed" in:fly={{ y: 40, duration: 700 }}>
    <h2 class="github-feed__title">Top GitHub Repos</h2>
    <div class="github-feed__list">
      {#each githubRepos as repo}
        <a class="github-feed__repo" href={repo.html_url} target="_blank" rel="noopener" tabindex="0">
          <div class="github-feed__repo-header">
            <span class="github-feed__repo-name">{repo.name}</span>
            <span class="github-feed__repo-stars">⭐ {repo.stargazers_count}</span>
          </div>
          <p class="github-feed__repo-desc">{repo.description}</p>
        </a>
      {/each}
    </div>
  </section>

  <section class="contact" in:fade={{ duration: 800 }}>
    <h2 class="contact__title">Contact</h2>
    <form class="contact__form" name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <label class="contact__label">
        Name
        <input class="contact__input" type="text" name="name" required />
      </label>
      <label class="contact__label">
        Email
        <input class="contact__input" type="email" name="email" required />
      </label>
      <label class="contact__label">
        Message
        <textarea class="contact__input" name="message" required></textarea>
      </label>
      <button class="contact__btn" type="submit">Send</button>
    </form>
  </section>

  <footer class="footer" in:fade={{ duration: 800 }}>
    <div class="footer__socials">
      {#each socialLinks as link}
        <SocialLink {link} />
      {/each}
    </div>
    <div class="footer__copyright">
      &copy; {new Date().getFullYear()} {hero.name}
    </div>
  </footer>
</main>

<svelte:head>
  <title>{hero.name} | Portfolio</title>
  <meta name="description" content={hero.intro} />
  <meta property="og:title" content={hero.name + ' Portfolio'} />
  <meta property="og:description" content={hero.intro} />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
