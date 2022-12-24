const TextInformation = (props) => {
  return (
    <p style={{ color: props.color }}>
      <span style={{ color: "var(--text-title-describe)" }}>{props.title}</span>
      {props.text}
    </p>
  );
};
export default TextInformation;
