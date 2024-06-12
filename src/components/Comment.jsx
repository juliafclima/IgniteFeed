import { Heart, TrashSimple } from "phosphor-react";

import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";

export function Comment({ avatarUrl, author, content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author}</strong>
              <time
                title="11 de Junho às 16:48h"
                dateTime="2024-06-11 16:48:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <TrashSimple size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <Heart />
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
