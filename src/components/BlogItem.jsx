function BlogItem(props) {
  return (
    <div className="blog-item">
      <h2 className="blog-title">Заголовок: {props.title}</h2>
      <p className="blog-text">{props.content}</p>
    </div>
  );
}

export default BlogItem;
