interface ButtonProps {
  content: string;
  css: string;
  onclick: () => void;
  key?: number;
}

const Component = ({ content, css, onclick, key }: ButtonProps) => {
  return (
    <button className={css} onClick={onclick} key={key}>
      {content}
    </button>
  );
};

export default Component;
