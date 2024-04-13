import Link from 'next/link'

import { Article } from 'graphql/__generated__/graphql'
import { articlePath, useUpdateArticle, useDeleteArticle } from '../../graphql/collections/article/hooks'

type VoidFunction = () => Promise<void>

const usePromptAndUpdateArticle = (article: Article, fieldName: keyof Article): VoidFunction => {
  const updateArticle = useUpdateArticle()

  const handleUpdate = async (): Promise<void> => {
    const newValue = window.prompt(`New value for ${fieldName}?`, article[fieldName])
    if (newValue !== null) {
      const articlePatch = {
        [fieldName]: newValue
      }
      await updateArticle({ variables: { id: article.id, articlePatch } })
    }
  }

  return handleUpdate
}

const usePromptAndDeleteArticle = (article: Article): VoidFunction => {
  const deleteArticle = useDeleteArticle()

  const handleDelete = async (): Promise<void> => {
    if (window.confirm(`Delete ${article.title as string}?`)) {
      const variables = {
        id: article.id
      }
      await deleteArticle({ variables })
    }
  }

  return handleDelete
}

interface ArticleListItemProps {
  article: any
  inProgress?: boolean
}

const ArticleListItem = ({ article, inProgress = false }: ArticleListItemProps): React.ReactElement => {
  const promptAndUpdateArticle = usePromptAndUpdateArticle(article, 'title')
  const promptAndDeleteArticle = usePromptAndDeleteArticle(article)

  return (
    <div className={inProgress === article.id ? 'inProgress' : ''} title={`id: ${article.id as number}`}>
      <Link legacyBehavior href={articlePath(article)}><a>{article.title}</a></Link>
      <a className='action update' onClick={() => { void promptAndUpdateArticle() }}>Update</a>
      <a className='action delete' onClick={() => { void promptAndDeleteArticle() }}>Delete</a>
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
