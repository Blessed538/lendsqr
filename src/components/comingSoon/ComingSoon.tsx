import "./comingsoon.scss";

type Props = {
  currentTab: string;
};
const ComingSoon = ({ currentTab }: Props) => {
  return (
    <div className="container">
      <div className="content">
        <h1>
          <span>{currentTab}</span> Details is coming soon!
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
