function Comment(props) {
  return (
    <div>
      <p><strong>User: </strong>{props.comment.user_email}</p>
      <p>{props.comment.body}</p>
      <hr />
    </div>
  );
}

export { Comment };
