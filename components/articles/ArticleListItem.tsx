import Link from 'next/link'

import { Article } from 'graphql/__generated__/graphql'
import { useUpdateArticle, useDeleteArticle } from '../../graphql/collections/article/hooks'

const usePromptAndUpdateArticle = (article: Article, fieldName: keyof Article) => {
  const updateArticle = useUpdateArticle()

  const handleUpdate = async () => {
    const newValue = window.prompt(`New value for ${fieldName}?`, article[fieldName])
    if (newValue) {
      const variables = {
        id: article.id,
        [fieldName]: newValue
      }
      await updateArticle({ variables })
    }
  }

  return handleUpdate
}

const usePromptAndDeleteArticle = (article: Article) => {
  const deleteArticle = useDeleteArticle()

  const handleDelete = async () => {
    if (window.confirm(`Delete ${article.title}?`)) {
      const variables = {
        id: article.id
      }
      await deleteArticle({ variables })
    }
  }

  return handleDelete
}

const toSlug = (str: string): string => str && str.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase()

interface ArticleListItemProps {
  article: any
  inProgress?: boolean
}

const ArticleListItem = ({ article, inProgress = false }: ArticleListItemProps) => {
  const promptAndUpdateArticle = usePromptAndUpdateArticle(article, 'title')
  const promptAndDeleteArticle = usePromptAndDeleteArticle(article)

  return (
    <div className={inProgress === article.id ? 'inProgress' : ''} title={`id: ${article.id}`}>
      <Link legacyBehavior href={`/articles/[article]?article=${toSlug(article.title)}-${article.id}`} as={`/articles/${toSlug(article.title)}-${article.id}`}><a>{article.title}</a></Link>
      <a className='action update' onClick={promptAndUpdateArticle}>Update</a>
      <a className='action delete' onClick={promptAndDeleteArticle}>Delete</a>
      <style jsx>{`
        a.action {
          margin-left: 0.5em;
          cursor: pointer;
          font-size: 0.6em;
          text-transform: uppercase;
          border-bottom: none;
        }
        a.update {
          color: lime;
        }
        a.delete {
          color: tomato;
        }

        .inProgress {
          opacity: 0.3;
        }
      `}
      </style>
    </div>
  )
}
export default ArticleListItem
