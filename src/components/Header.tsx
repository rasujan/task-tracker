import Button from "./elements/Button";

interface Props {
  title: string;
  toggleAddTask: () => void;
  showAddTaskState: boolean;
}

const Header = ({ title, toggleAddTask, showAddTaskState }: Props) => {
  return (
    <header className="flex justify-between items-center p-2">
      <h1> {title} </h1>
      {showAddTaskState ? (
        <Button label="Close" color="red" action={toggleAddTask} />
      ) : (
        <Button label="Add" color="blue" action={toggleAddTask} />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

/* const headingStyle = {
  color: "red",
  backgroundColor: "black",
}; */

export default Header;
