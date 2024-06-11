import { NotePencil } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiopd-EZxl2YqvXxZB5pR90DHK7nq8g7CJIw&s"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/juliafclima.png" />

        <strong>Júlia Lima</strong>
        <span>Front-End Developer</span>
      </div>

      <footer>
        <a href="#">
          <NotePencil size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
