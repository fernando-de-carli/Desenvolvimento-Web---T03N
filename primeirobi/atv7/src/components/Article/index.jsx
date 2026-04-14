export default function Article(props) {
  return (
    <article>
      <h2>{props.titulo}</h2>
      <time>{props.data}</time>
      <p>{props.conteudo}</p>
      <figure>
        <img src={props.imagem} alt="Destaque da viagem" />
        <figcaption>{props.legenda}</figcaption>
      </figure>
    </article>
  );
}