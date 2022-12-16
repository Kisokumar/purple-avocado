import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { userid } = useParams();
  return (
    <>
      <div className="dashboard">
        <h1>User: {userid}</h1>
        <p>Dashboard for user {userid} goes here</p>
      </div>
    </>
  );
}
