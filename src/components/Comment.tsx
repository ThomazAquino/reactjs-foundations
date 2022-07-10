import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // If we update the state like this
    // the like count will not increment by 3
    // because the way of React treat closures.
    // setLikeCount(likeCount + 1);
    // setLikeCount(likeCount + 1);
    // setLikeCount(likeCount + 1);

    // When we update the sate with arrow func,
    // The parameter of the function have the 
    // latest value of the state. This can be
    // useful when we need the fresh value of
    // the state.
    setLikeCount((state) => {
      return state + 1;
    })

  }

  return (
    <div className={styles.comment}>
      <Avatar 
        src="https://github.com/thomazAquino.png"
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thomaz D'Aquino</strong>
              <time 
                title="08 de junho às 11:31" 
                dateTime="2022-06-08 11:31:00"
              >
                  Cerca de 2h atrás
              </time>
            </div>

            <button 
              type="button" 
              title="Deletar comentário"
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}