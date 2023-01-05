const TextInformation = (props) => {
  return (
    <p style={{ color: props.color }}>
      <span style={{ color: "var(--text-title-describe)" }}>{props.title}</span>
      {/* {props.text} */}
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
    </p>
  );
};
export default TextInformation;
