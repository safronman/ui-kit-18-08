import { Button } from './components/Button/Button'
import './App.css'

function App() {
  const variants = [
    {
      name: 'Primary',
      variant: 'primary',
      description: 'Основное действие на экране.',
    },
    {
      name: 'Secondary',
      variant: 'secondary',
      description: 'Дополнительное действие.',
    },
    {
      name: 'Outline',
      variant: 'outline',
      description: 'Альтернативное действие с обводкой.',
    },
    {
      name: 'Text Button',
      variant: 'text',
      description: 'Ненавязчивое действие без фона.',
    },
  ] as const

  return (
    <main className="ui-kit">
      <header className="heading">
        <p className="eyebrow">UI Kit</p>
        <h1>Button</h1>
        <p>Универсальная кнопка на Base UI с модульными CSS-стилями.</p>
      </header>

      <section className="state-guide" aria-labelledby="states-heading">
        <h2 id="states-heading">Состояния</h2>
        <dl>
          <div><dt>Hover</dt><dd>Наведите курсор на доступную кнопку.</dd></div>
          <div><dt>Active</dt><dd>Удерживайте кнопку мышью или пальцем.</dd></div>
          <div><dt>Focus</dt><dd>Перемещайтесь по кнопкам клавишей Tab.</dd></div>
          <div><dt>Disabled</dt><dd>Недоступная кнопка не реагирует на действие.</dd></div>
        </dl>
      </section>

      <section className="button-grid" aria-label="Варианты кнопок">
        {variants.map(({ name, variant, description }) => (
          <article className="button-card" key={variant}>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="button-row">
              <Button variant={variant}>Button</Button>
              <Button variant={variant} disabled>Button</Button>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
