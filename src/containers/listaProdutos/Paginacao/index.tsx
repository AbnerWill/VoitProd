import Styles from './styles.module.scss'

type Link = {
  url: string
  label: string
  active: boolean
}

interface PaginacaoProps {
  nextPage: () => void
  prevPage: () => void
  pages: Link[]
  setCurrentPage: (value: Link) => void
}

export function Paginacao({
  nextPage,
  prevPage,
  setCurrentPage,
  pages
}: PaginacaoProps): JSX.Element {
  const pagesSpliced = [...pages]

  pagesSpliced.splice(0, 1)
  pagesSpliced.splice(pagesSpliced.length - 1, 1)

  return (
    <ul className={Styles.container}>
      <li className={Styles.prev} onClick={prevPage}>
        <img src="/smArrowLeft.svg" alt="Voltar ao anterior" />
      </li>
      <div>
        {pagesSpliced.map((page, index) => (
          <li
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page.active ? Styles.activePage : ''}
          >
            {page.label}
          </li>
        ))}
      </div>
      <li className={Styles.next} onClick={nextPage}>
        <img src="/smArrowRight.svg" alt="Ir para o próximo" />
      </li>
    </ul>
  )
}
