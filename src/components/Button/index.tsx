interface ButtonProps {
  content: string;
  css: string;
  onclick: () => void;
}

const Component = ({ content, css, onclick }: ButtonProps) => {
  return (
    <button className={css} onClick={onclick}>
      {content}
    </button>
  );
};

export default Component;
