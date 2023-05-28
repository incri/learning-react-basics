interface Props {
  onClick: () => void;
}

const Bug = ({ onClick }: Props) => {
  return <button onClick={onClick}>Fix Bug</button>;
};

export default Bug;
