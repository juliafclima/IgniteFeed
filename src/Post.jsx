const Post = (props) => {
  return (
    <>
      <h1>{props.autor}</h1>
      <p>{props.conteudo}</p>
    </>
  );
};

export default Post;
